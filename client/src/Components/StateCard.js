import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useParams } from "react-router-dom";
import Navbar2 from "./Navbar";
import backdrop from "../assets/images/backdrop.jpg"


const StateCard = () => {
  const [data, setData] = useState(null);
  // Destructuring to get cid from useParams
  const { cid } = useParams();

  useEffect(() => {
    fetchData();
  }, [cid]); // Include cid as a dependency

  const fetchData = async () => {
    try {
      // Correctly using cid in the fetch URL
      const response = await fetch(
        `http://localhost:7000/api/statedata/${cid}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error status ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };

  return (
    <>
      <Navbar2 />
      <section className="destinations-two">
        <div className="auto-container">
          <div className="packages">
            <div className="title-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationName: "fadeInUp" }}>
              <div className="subtitle" style={{ fontSize: "35px", margin: "10px" }}>Explore States</div>
            </div>
            <div className="row clearfix">
              {data &&
                data.map((statedata) => (
                  <Link to={`/city/${statedata.sid}`}
                    className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
                  >
                    <div
                      className="popular-block "
                      key={statedata.sid}
                    >
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="image">
                            <a href="/">
                              <img
                                src={statedata.surl== null ? backdrop :statedata.surl}
                                alt={statedata.sname}
                                className="object-fit-cover"
                                style={{ height: "350px" }}
                              ></img>
                            </a>
                          </div>
                        </div>
                        <div className="hvr-box">
                          <div className="hvr-inner">
                            <h3>
                              <a href="/">{statedata.sname}</a>
                            </h3>
                            <div className="info">
                              <span>{statedata.description}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StateCard;
