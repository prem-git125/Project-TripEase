import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar';

const AllCountries = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:7000/api/countries");
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
        <Navbar2/>
        <section className="destinations-two">
            <div className="auto-container">
                <div className="packages">
                    <div class="title-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms" style={{ visibility: "visible", animationDuration: "1500ms", animationdDelay: " 0ms", animationName: "fadeInUp" }}>
                        <div class="subtitle " style={{fontSize:"35px"}}>Explore Countries</div>
                        {/* <h2><span style={{ fontSize: "45px" }}>Popular Locations</span></h2> */}
                    </div>
                    <div className="row clearfix">
                        {data &&
                            data.map((country) => (
                                <Link
                                    to={`/states/${country.cid}`}
                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 "
                                    key={country.cid}
                                >
                                    {/* style={{ top: country.cid % 2 == 0 ? "40px" : "10px" }}  --> use this for making card pattern into zig zag */}

                                    <div className="popular-block position-relative"  >
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <div className="image">
                                                    <Link href="/">
                                                        <img
                                                            src={country.curl}
                                                            alt="Image Not Found"
                                                            style={{ height: "350px" }}
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
                        
                    </div>
                </div>
            </div>
        </section >
        </>
    )
}

export default AllCountries
