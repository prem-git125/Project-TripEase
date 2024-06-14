import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import NavbarAdmin from "../Components/NavbarAdmin";

const PlaceHandle = () => {
  const [places, setPlace] = useState();
  const [Img, setImg] = useState();
  const [formData, setformData] = useState({});
  const [category, setCat] = useState();
  const [uploadProg, setProg] = useState(0);
  const [city, setCity] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/catdata`);
      if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
      }
      const jsonData = await response.json();
      setCat(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };

  const fetchCity = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/citydata`);
      if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
      }
      const jsonData = await response.json();
      setCity(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };

  const fetchPlace = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/placedata`);
      if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
      }
      const jsonData = await response.json();
      setPlace(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };

  const handleDelete = async (placeid) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/placedelete/${placeid}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.error);
      }
      const responseData = await response.json();
      //   console.log(responseData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storagerefC = ref(
      storage,
      `${formData.place_name}/${formData.place_name.toLowerCase()}_C.jpg`
    );
    const storageref1 = ref(
      storage,
      `${formData.place_name}/${formData.place_name.toLowerCase()}_1.jpg`
    );
    const storageref2 = ref(
      storage,
      `${formData.place_name}/${formData.place_name.toLowerCase()}_2.jpg`
    );
    const storageref3 = ref(
      storage,
      `${formData.place_name}/${formData.place_name.toLowerCase()}_3.jpg`
    );

    const uploadTaskC = uploadBytesResumable(storagerefC, formData.cfile);
    const uploadTask1 = uploadBytesResumable(storageref1, formData.pimgs[0]);
    const uploadTask2 = uploadBytesResumable(storageref2, formData.pimgs[1]);
    const uploadTask3 = uploadBytesResumable(storageref3, formData.pimgs[2]);

    uploadTaskC.on(
      "state_changed",
      (snapshotC) => {},
      (error) => {
        console.error(error);
      },
      async () => {
        uploadTask1.on(
          "state_changed",
          (snapshot1) => {},
          (error) => {
            console.error(error);
          },
          async () => {
            uploadTask2.on(
              "state_changed",
              (snapshot2) => {},
              (error) => {
                console.error(error);
              },
              async () => {
                uploadTask3.on(
                  "state_changed",
                  (snapshot3) => {},
                  (error) => {
                    console.error(error);
                  },
                  async () => {
                    const downloadUrlC = await getDownloadURL(
                      uploadTaskC.snapshot.ref
                    );
                    const downloadUrl1 = await getDownloadURL(
                      uploadTask1.snapshot.ref
                    );
                    const downloadUrl2 = await getDownloadURL(
                      uploadTask2.snapshot.ref
                    );
                    const downloadUrl3 = await getDownloadURL(
                      uploadTask3.snapshot.ref
                    );
                    const urls = [downloadUrl1, downloadUrl2, downloadUrl3];
                    try {
                      const response = await fetch(
                        "http://localhost:8080/api/place/insert",
                        {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            place_name: formData.place_name,
                            category_id: formData.category_id,
                            pdescription: formData.pdescription,
                            cityid: formData.cityid,
                            c_url: downloadUrlC,
                            c_urlname: `${formData.place_name.toLowerCase()}_C.jpg`,
                            placeImgUrls: urls.join(" , ").toString(),
                            maps: formData.maps,
                          }),
                        }
                      );
                      if (!response.ok) {
                        console.error(response.statusText);
                      } else {
                        alert(response.statusText);
                      }
                    } catch (error) {
                      console.error(error);
                    } finally {
                      setformData({
                        place_name: "",
                        category_id: "",
                        pdescription: "",
                        cityid: "",
                        cfile: "",
                        maps: "",
                      });
                    }
                  }
                );
              }
            );
          }
        );
      }
    );
  };

  useEffect(() => {
    fetchData();
    fetchPlace();
    fetchCity();
    console.log(formData);
  }, [formData]);

  return (
      <>
      <NavbarAdmin></NavbarAdmin>
       <div className="col-md-10 ms-auto">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header" style={{backgroundColor:'cadetblue',color:'',fontFamily:'cursive'}}>
              <h4 className="card-title mb-0 text-center" >Add, Edit & Remove</h4>
            </div>
            {/* end card heade */}

            <div className="card-body">
              <div className="listjs-table" id="customerList">
                <div className="row g-4 mb-3">
                  <div className="col-sm-auto">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <table>
                        <tbody>
                          <tr>
                            <td style={{padding:'0px 20px'}} >
                              <input 
                                placeholder="Enter Place Name"
                                type="text"
                                name="place_name"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                              ></input>
                            </td>
                            <td style={{padding:'0px 20px'}}>
                              <select
                                className="form-control"
                                name="category_id"
                                onChange={(e) => handleChange(e)}
                              >
                                <option>Select Category</option>
                                {Array.isArray(category) &&
                                  category.map((item) => {
                                    return (
                                      <option
                                        key={item.category_id}
                                        value={item.category_id}
                                      >
                                        {item.catName}
                                      </option>
                                    );
                                  })}
                              </select>
                            </td>
                            <td style={{padding:'0px 20px'}}>
                              <input
                                placeholder="Enter Place Map"
                                type="text"
                                name="maps"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                              ></input>
                            </td>
                          </tr>
                          <br></br>
                          <tr>
                            <td  style={{padding:'0px 20px'}}>
                              <input
                                placeholder="Enter Description "
                                type="text"
                                className="form-control"
                                name="pdescription"
                                onChange={(e) => handleChange(e)}
                              ></input>
                            </td>

                            <td  style={{padding:'0px 20px'}}>
                              <select
                                className="form-control"
                                name="cityid"
                                onChange={(e) => handleChange(e)}
                              >
                                <option>Select City</option>
                                {Array.isArray(city) &&
                                  city.map((item) => {
                                    return (
                                      <option
                                        key={item.cityid}
                                        value={item.cityid}
                                      >
                                        {item.cityName}
                                      </option>
                                    );
                                  })}
                              </select>
                            </td>
                          </tr>
                          <br></br>
                          <tr>
                            <td  style={{padding:'0px 20px'}}>
                              <label>Select Cover Photo:</label>
                              <input
                                type="file"
                                name=""
                                onChange={(e) => {
                                  setformData((prevData) => ({
                                    ...prevData,
                                    cfile: e.target.files[0],
                                  }));
                                  setImg(
                                    URL.createObjectURL(e.target.files[0])
                                  );
                                }}
                                className="form-control"
                              ></input>
                            </td>
                            <td  style={{padding:'0px 20px'}}>
                              <label>Select Place Photo:</label>
                              <input
                                type="file"
                                name="placeImgUrls"
                                multiple
                                onChange={(e) => {
                                  setformData((prevData) => ({
                                    ...prevData,
                                    pimgs: e.target.files,
                                  }));
                                  // setImg(URL.createObjectURL(e.target.files));
                                }}
                                className="form-control"
                              ></input>
                            </td>
                          </tr>
                          <br></br>

                          <button style={{margin:'0px 20px',backgroundColor:'#ff5522'}}
                            type="submit  "
                            className="btn btn-success add-btn"
                          >
                            <i   className="ri-add-line align-bottom me-1"></i>{" "}
                            Add
                          </button>
                          <button
                            className="btn btn-soft-danger"
                            // onClick={(e) => deleteMultiple()}
                          >
                            
                          </button>
                        </tbody>
                      </table>
                    </form>
                  </div>
                  <div className="col-sm">
                    <div className="d-flex justify-content-sm-end">
                   
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div>
                    <table className="table ">
                      <thead className="table-light">
                        <tr>
                          <th>Place id</th>
                          <th>Place Name</th>
                          <th>Category Name</th>
                          <th>City Name</th>
                          <th>Place Cover Pic</th>
                          <th>Place Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {Array.isArray(places) &&
                          places.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td>{item.placeid}</td>
                                  <td>{item.place_name}</td>
                                  <td>{item.catName}</td>
                                  <td>{item.cityName}</td>
                                  <td>
                                    <img
                                      src={item.c_url}
                                      alt={item.place_name}
                                      className="object-fit-cover rounded-circle"
                                      style={{ width: "40px", height: "40px" }}
                                    ></img>
                                  </td>
                                  <td>{item.pdescription}</td>

                                  <td>
                                    <button
                                      className={"btn btn-outline-danger"}
                                      onClick={() => handleDelete(item.placeid)}
                                    >
                                      🗑️
                                    </button>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* end card */}
          </div>
          {/* end col */}
        </div>
        {/* end col  */}
      </div>
       </div> 
    </>
  );
};

export default PlaceHandle;
