import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState, useEffect } from "react";
import NavbarAdmin from "../Components/NavbarAdmin";



function Csignup() {
  const [data, setData] = useState(null);
  // const salt = bcrypt.genSaltSync(10);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/data");
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.statusText);
      }
      const resdata = await response.json();
      setData(resdata);
      console.log(resdata);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  const handleBlock = async (uid, status) => {
    const stat = status === "true";
    console.log(`$(stat)`);
    try {
      if (!uid) {
        console.error("ID NOT FOUND");
        return;
      }

      const response = await fetch(`http://localhost:8080/api/update/${uid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: `${!stat}`,
          uid: uid,
        }),
      });
      if (!response.ok) {
        throw new Error("HTTP Error: " + response.statusText);
      }
      const responseData = await response.json();
      setData((prevData) =>
        prevData.map((entry) => (entry.uid === uid ? responseData : entry))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavbarAdmin></NavbarAdmin>
      <div className="col-md-10 ms-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
              </div>
              {/* end card heade */}

              <div className="card-body">
                <div className="listjs-table" id="customerList">
                  <div className="table-responsive table-card mt-1 mb-3">
                    <table className="table align-middle tr+">
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
                          <th>uid</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Password</th>
                          <th>RegDateTime</th>
                          <th>Status</th>
                          {/* <th>Action</th> */}
                          <th>User-Type</th>
                          <th>Profile Pic</th>
                        </tr>
                      </thead>
                      <tbody className="">
                        {data &&
                          data.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td>{item.uid}</td>
                                  <td>{item.uname}</td>
                                  <td>{item.email}</td>
                                  <td>{item.pwd}</td>
                                  <td>{item.reg_date_time}</td>
                                  <td>
                                    {item.status === "false" ? (
                                      <button
                                        onClick={() => handleBlock(item.uid, item.status)}
                                        className="btn btn-danger"
                                      >
                                        Block
                                      </button>
                                    ) : (
                                      <button
                                        onClick={() => handleBlock(item.uid, item.status)}
                                        className="btn btn-success"
                                      >
                                        Unblock
                                      </button>
                                    )}
                                  </td>
                                  <td>{item.utype}</td>
                                  <td>
                                    <img
                                      src={item.url}
                                      alt={item.uname}
                                      className="object-fit-cover rounded-circle"
                                      style={{ width: "40px", height: "40px" }}
                                    ></img>
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

export default Csignup;
