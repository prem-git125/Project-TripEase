import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const CountryCard = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/country");
      if (!res.ok) {
        throw new Error(`HTTP error status ${res.status}`);
      }
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error In Fetching Data:", error);
    }
  };
  return (
    <>
      <section className="destinations-two">
        <div className="auto-container">
          <div className="packages">
            <div className="row clearfix">
              {data &&
                data.map((country) => (
                  <div
                    className="popular-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 "
                    key={country.cid}
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image">
                          <a href="/">
                            <img src={country.curl} alt="Giza"></img>
                          </a>
                        </div>
                      </div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h3>
                            <span className="text-light d-flex justify-content-between">
                              <span>{country.cname}</span>{" "}
                              <button className="btn text-light btn-lg">
                                🗑
                              </button>
                            </span>
                          </h3>
                          {/* <div className="info"><span>20 Hotel</span> <span>30 Tours</span> <span>10
                                                Cars</span> <span>18 Flights</span>
                                            </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryCard;
