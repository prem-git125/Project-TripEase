import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState, useEffect } from "react";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useParams } from "react-router-dom";
import NavbarAdmin from "../Components/NavbarAdmin";

function StateHandle() {
  const [data, setdata] = useState(null);
  const [state, setstate] = useState();
  const [formData, setData] = useState({});
  const [tempImg, setImg] = useState(null);
  const [country, setCou] = useState();
  const [uploadProg, setProg] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/citydata`);
      if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
      }
      const jsonData = await response.json();
      setdata(jsonData);
      //   console.log(jsonData);~
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };
  const fetchDataState = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/statedata`);
      if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
      }
      const jsonData = await response.json();
      setstate(jsonData);
      //   console.log(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };

  const handleDelete = async (cityid) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/citydelete/${cityid}`,
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
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.imgfile == null) {
      alert("Select Image first");
    } else {
      try {
        const storageRef = ref(
          storage,
          `Uimg/${formData.cityName.split(" ").join("").toLowerCase()}.jpg`
        );
        const uploadTask = uploadBytesResumable(storageRef, formData.imgfile);
        uploadTask.on(
          "state_changed",
          (snapshot) =>
            setProg((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
          (error) => {
            console.error(error);
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
            const response = await fetch("http://localhost:8080/api/cityadd", {
              method: "POST",
              headers: {
                "content-Type": "application/json",
              },
              body: JSON.stringify({
                cityName: formData.cityName,
                sid: formData.sid,
                cityurl: downloadUrl,
                cityurlname: `Uimg${formData.cityName
                  .split(" ")
                  .join("")
                  .toLowerCase()}.jpg`,
                description: formData.description,
              }),
            });
            if (!response.ok) {
              console.error(response.status);
            } else {
              alert(response.statusText);
            }
          }
        );
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataState();
    console.log(formData);
  }, [formData]);
  return (
    <>
    <NavbarAdmin></NavbarAdmin>
       <div className="col-md-10 ms-auto"> 
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header" style={{backgroundColor:'cadetblue',fontFamily:'cursive'}}>
              <h4 className="card-title text-center mb-0">Add, Edit & Remove</h4>
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
                            <td style={{padding:'0px 20px'}}>
                              <input 
                                placeholder="Enter City Name"
                                type="text"
                                name="cityName"
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                              ></input>
                            </td>
                            <td style={{padding:'0px 20px'}}>
                              <select
                                className="form-control"
                                name="sid"
                                onChange={(e) => handleChange(e)}
                              >
                                <option>Select State</option>
                                {Array.isArray(state) &&
                                  state.map((item) => {
                                    return (
                                      <option key={item.cityid} value={item.sid}>
                                        {item.sname}
                                      </option>
                                    );
                                  })}
                              </select>
                            </td>
                          </tr>
                          <br></br>
                          <tr>
                            <td style={{padding:'0px 20px'}}>
                              <input
                                type="file"
                                name="cityurl"
                                onChange={(e) => {
                                  setData((prevData) => ({
                                    ...prevData,
                                    imgfile: e.target.files[0],
                                  }));
                                  setImg(
                                    URL.createObjectURL(e.target.files[0])
                                  );
                                }}
                                className="form-control"
                              ></input>
                            </td>
                            <td style={{padding:'0px 20px'}}>
                              <input
                                placeholder="Enter Description "
                                type="text"
                                className="form-control"
                                name="description"
                                onChange={(e) => handleChange(e)}
                              ></input>
                            </td>
                          </tr>
                          <br></br>
                          <button style={{margin:'0px 20px',backgroundColor:'#ff5522'}}
                            type="submit  "
                            className="btn btn-success add-btn"
                          >
                            <i className="ri-add-line align-bottom me-1"></i>{" "}
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
                    
                  </div>
                </div>

                <div className="progress mb-4" style={{backgroundColor:'#ff5522'}}>
                  <div
                    className="progress-bar"
                    style={{ width: `${uploadProg}%` }}
                    aria-valuenow={0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    {uploadProg.toFixed(2)}%
                  </div>
                </div>

                <div className="container">
                  <div>
                    <table className="table ">
                      <thead className="table-light">
                        <tr>
                          {/* <th scope="col" style={{ width: "50px" }}>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkAll"
                              value="option"
                            />
                          </div>
                        </th> */}
                          <th>City id</th>
                          <th>City Name</th>
                          <th>State Name</th>
                          <th>City Pic</th>
                          <th>City Description</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {Array.isArray(data) &&
                          data.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td>{item.cityid}</td>
                                  <td>{item.cityName}</td>
                                  <td>{item.sname}</td>
                                  <td>
                                    <img
                                      src={item.cityurl}
                                      alt={item.cityName}
                                      className="object-fit-cover rounded-circle"
                                      style={{ width: "40px", height: "40px" }}
                                    ></img>
                                  </td>
                                  <td>{item.description}</td>

                                  <td>
                                    
                                    <button
                                      onClick={() => handleDelete(item.cityid)}
                                      className={"btn btn-danger"}
                                    >
                                      DELETE
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
}

export default StateHandle;
