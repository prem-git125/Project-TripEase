import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar";
import "./ViewCountry.scss"
import Home from "../Pages/Home"
import backdrop from "../assets/images/backdrop.jpg";
import bgradient3 from "../assets/images/background/bg-gradient-3.png";
import bgradient4 from "../assets/images/background/bg-gradient-4.png";
const CountryCard = () => {
  const [data, setData] = useState(null);


  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/country");
      if (!res.ok) {
        throw new Error(`HTTP error status ${res.status}`);
      }
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar2 />

      
	  <section className="destinations-two">
        <div className="auto-container">
          <div className="packages">
            <div class="title-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationdDelay: " 0ms", animationName: "fadeInUp" }}>
              <div class="subtitle">Start Travelling Today</div>
              <h2><span style={{ fontSize: "45px" }}>Popular Countries</span></h2>
            </div>

            <div><div className="row clearfix">
              {data &&
                data.map((country) => (
                  // work as href
                  <Link
                    to={`/states/${country.cid}`}
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 "
                    key={country.cid}
                  >
                    <div className="popular-block position-relative" style={{ top: country.cid % 2 === 0 ? "40px" : "10px" }} >
                      <div className="inner-box">
                        <div className="image-box">
                          <div className="image">
                            <Link href="/">
                              <img
                                src={country.curl == null ? backdrop : country.curl}
                                alt="Giza"
                                style={{ height: "350px",objectFit:"cover" }}
                              ></img>
                            </Link>
                          </div>
                        </div>
                        <div className="hvr-box">
                          <div className="hvr-inner">
                            <h3>
                              <Link href="/">{country.cname}</Link>
                            </h3>

                          </div>
                        </div>
                      </div>
                    </div>

                  </Link>
                ))}
              {/* <button type="button" class="btn btn-outline-primary btn-rounded mt-3 d-block mx-auto w-25">View More</button> */}

              <Link to="/allcountry" style={{ backgroundColor: "#ff5522" }} className="button1 bouncy w-25 mt-4">View More</Link>
            </div></div>
          </div>
        </div>
      </section >
                  


      <Home />

    </>
  );
};

export default CountryCard;
