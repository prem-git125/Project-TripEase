import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link, useParams } from "react-router-dom";
import Navbar2 from "./Navbar";
import backdrop from "../assets/images/backdrop.jpg"

const CityCard = () => {
  const [data, setData] = useState(null);
  // Destructuring to get cid from useParams
  const { sid } = useParams();

  useEffect(() => {
    fetchData();
  }, [sid]); // Include cid as a dependency

  const fetchData = async () => {
    try {
      // Correctly using cid in the fetch URL
      const response = await fetch(`http://localhost:7000/api/citydata/${sid}`);
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
              <div className="subtitle" style={{ fontSize: "35px", margin: "10px" }}>Explore Cities</div>
            </div>
            <div className="row clearfix">
              {data &&
                data.map((citydata) => (
                  <Link to={`/scity/${citydata.cityid}`} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div
                      className="popular-block " key={citydata.cityid}>
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="image">

                            <img
                              src={citydata.cityurl == null ? backdrop : citydata.cityurl}
                              alt={citydata.cityName}
                              className="object-fit-cover"
                              style={{ height: "350px" }}
                            ></img>
                          </div>
                        </div>
                        <div className="hvr-box">
                          <div className="hvr-inner text-white">
                            <h3>
                              {citydata.cityName}
                            </h3>
                            <div className="info">
                              <span>{citydata.description}</span>
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

export default CityCard;
