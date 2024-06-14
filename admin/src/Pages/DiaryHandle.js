import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState, useEffect } from "react";
import NavbarAdmin from "../Components/NavbarAdmin";

function DiaryHandle() {
    const [data, setD] = useState({});
    // const salt = bcrypt.genSaltSync(10);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/diarydata");
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
  
    useEffect(() => {
      fetchData();
    }, [fetchData]);
  return (
    <>
        <>
      <NavbarAdmin></NavbarAdmin>
      <div className="col-md-10 ms-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              {/* end card heade */}

              <div className="card-body">
                <div className="listjs-table" id="customerList">
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
                          <th>Diary Id</th>
                          <th>Diary Title</th>
                          <th>Diary Thumnail</th>
                          <th>Diary Description</th>
                          <th>Guider Id</th>
                          <th>Created Date and Time</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {Array.isArray(data) &&
                          data.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td>{item.diary_id}</td>
                                  <td>{item.diary_title}</td>
                                  <td>
                                    <img
                                      src={item.diary_thumnail}
                                      alt={item.diary_description}
                                      className="object-fit-cover rounded-circle"
                                      style={{ width: "40px", height: "40px" }}
                                    ></img>
                                  </td>
                                  <td style={{wordBreak:"break-word",textWrap:"wrap"}}>{item.diary_description}</td>
                                  <td>{item.guiderid}</td>
                                  <td>{item.created_time_date}</td>
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
    </>
  ) 
}

export default DiaryHandle