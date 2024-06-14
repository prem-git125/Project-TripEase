import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState, useEffect } from "react";
import storage from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import NavbarAdmin from "../Components/NavbarAdmin";

function CountryHandle() {
  const [formData, setData] = useState({});
  const [data, setD] = useState({});
  const [tempImg, setImg] = useState(null);
  const [uploadProg, setProg] = useState(0);
  // const salt = bcrypt.genSaltSync(10);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/countrydata");
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.statusText);
      }
      const resdata = await response.json();
      setD(resdata);
      console.log(resdata);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (cid) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/countrydelete/${cid}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.error);
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.imgfile == null) {
      alert("Select Image first");
    } else {
      try {
        const storageRef = ref(
          storage,
          `Uimg/${formData.cname.split(" ").join("").toLowerCase()}.jpg`
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
            const response = await fetch(
              "http://localhost:8080/api/countryadd",
              {
                method: "POST",
                headers: {
                  "content-Type": "application/json",
                },
                body: JSON.stringify({
                  cname: formData.cname,
                  curl: downloadUrl,
                  curlname: `Uimg${formData.cname
                    .split(" ")
                    .join("")
                    .toLowerCase()}.jpg`,
                }),
              }
            );
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
  }, [fetchData]);
  
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
                        <tr>
                      <td style={{padding:'0px 20px'}}>
                        <input
                          placeholder="Enter City Name"
                          type="text"
                          name="cname"
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                        ></input>
                          </td>
                          <td style={{padding:'0px 20px'}}>
                        <input
                          type="file"
                          name="curl"
                          onChange={(e) => {
                            setData((prevData) => ({
                              ...prevData,
                              imgfile: e.target.files[0],
                            }));
                            setImg(URL.createObjectURL(e.target.files[0]));
                          }}
                          className="form-control"
                        ></input>
                        </td >
                        <button style={{margin:'0px 20px',backgroundColor:'#ff5522'}}
                          type="submit  "
                          className="btn btn-success add-btn"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                        </button>
                        
                    
                      </tr>
                      </table>
                    </form>
                  </div>
                  <div className="col-sm">
                    <div className="d-flex justify-content-sm-end">
                      
                    </div>
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

                <div className="table-responsive table-card mt-3 mb-1">
                  <table className="table align-middle table-nowrap">
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
                        <th>Cid</th>
                        <th>Country Name</th>
                        <th>Country Pic</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {Array.isArray(data) &&
                        data.map((item) => {
                          return (
                            <>
                              <tr>
                                <td>{item.cid}</td>
                                <td>{item.cname}</td>
                                <td>
                                  <img
                                    src={item.curl}
                                    alt={item.cname}
                                    className="object-fit-cover rounded-circle"
                                    style={{ width: "40px", height: "40px" }}
                                  ></img>
                                </td>
                                <td>
                                  <button
                                    onClick={() => handleDelete(item.cid)}
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
                  <div className="noresult" style={{ display: "none" }}>
                    <div className="text-center">
                      <lord-icon
                        src="https://cdn.lordicon.com/msoeawqm.json"
                        trigger="loop"
                        colors="primary:#121331,secondary:#08a88a"
                        style={{ width: "75px", height: "75px" }}
                      ></lord-icon>
                      <h5 className="mt-2">Sorry! No Result Found</h5>
                      <p className="text-muted mb-0">
                        We've searched more than 150+ Orders We did not find any
                        orders for you search.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <div className="pagination-wrap hstack gap-2">
                    <a
                      className="page-item pagination-prev disabled"
                      // href="javascript:void(0);"
                    >
                      Previous
                    </a>
                    <ul className="pagination listjs-pagination mb-0"></ul>
                    <a
                      className="page-item pagination-next"
                      href="javascript:void(0);"
                    >
                      Next
                    </a>
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

export default CountryHandle;
