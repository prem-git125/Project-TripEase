import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Category from './Category';
import banner2 from "../assets/images/resources/featured/banner-2.jpg";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import design from "../assets/images/icons/t-icon-3.png"
import backdrop from "../assets/images/backdrop.jpg"


const SingleCity = () => {
  const { cityid } = useParams();
  const [category_id, setCatId] = useState();
  const [scity, setScity] = useState([]);
  const [places, setPlace] = useState();
  const [cat, setCategory] = useState();
  const fetchData = async () => {
    const response = await fetch("http://localhost:7000/api/categorydata")
    if (!response.ok) {
      console.error(response.statusText)
    }
    else {
      const resData = await response.json();
      setCategory(resData)
      console.log(resData)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchCatFilter = async () => {

  }

  useEffect(() => {
    fetchCatFilter()
  })

  const fetchsc = async () => {
    const response = await fetch(`http://localhost:7000/api/scity/${cityid}`)
    if (!response.ok) {
      console.error(response)
    }
    else {
      const resdata = await response.json()
      setScity(resdata[0])
      // console.log(scity)
    }
  }
  const fetchcpc = async (category_id) => {
    if (category_id == null) {
      const response = await fetch(`http://localhost:7000/api/places/view/${cityid}`)
      if (!response.ok) {
        console.error(response)
      }
      else {
        const resdata = await response.json()
        setPlace(resdata)
        console.log(places)
      }
    } else {
      const response = await fetch(`http://localhost:7000/api/filterCat/${category_id}`)
      if (!response.ok) {
        console.error(response.statusText)
      }
      else {
        const resData = await response.json();
        setPlace(resData)
      }
    }
  }
  useEffect(() => {
    fetchcpc(category_id);
  }, [category_id])
  useEffect(() => {
    fetchsc();

  }, [])
  const styles = {
    truncate: {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      WebkitLineClamp: 3, // Limit to 3 lines
      height: '4.5em', // 3 lines times line height (1.5em)
      fontWeight: 'bold',
      fontSize: '12px'
    }
  };
  return (
    <div className=" bg-light">

      <section className="inner-banner bg-light">
        <div className="image-layer " style={{ backgroundImage: `url(${scity.cityurl == null ? backdrop : scity.cityurl})`, backgroundColor: "rgba(0,0,0,0.5)", backgroundBlendMode: "overlay" }}>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1 className='text-uppercase'>{scity.cityName}</h1>
            <div className="bread-crumb">
              <ul className="clearfix">
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/home"}>Cities</Link></li>
                <li className="current">{scity.cityName}</li>
              </ul>
            </div>
            <p className='text-light'>{scity.description}</p>
          </div>
        </div>

        <div className='container-fluid bg-light'>
          <div className='container'>
            <div className='d-flex justify-content-evenly py-3 pt-5 '>
              {Array.isArray(cat) && cat.map((item) => {
                return (
                  <button onClick={(e) => setCatId(item.category_id)} className='rounded p-3 text-center shadow z-2' style={{ borderColor: "#e5e5e5", backgroundColor: "rgba(255,255,255,0.8)" }}>

                    <img src={item.caturl} style={{ width: "35px", height: "35px" }} />
                    <h6 className='fw-normal mt-2'>{item.catName}</h6>

                  </button>

                )
              })}

            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row py-5'>
          {Array.isArray(places) && places.map((items) => {
            return <Link to={`/splace/${items.placeid}`} className='col-md-3' key={items.placeid}>

              <div className="package-block shadow rounded" data-slick-index="0" aria-hidden="false" tabindex="0">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image"><img src={items.c_url} alt="Morocco" style={{ height: "200px", objectFit: "cover" }} /></div>
                  </div>

                  <div className="lower-box">
                    <div className="info clearfix">
                      <div className="duration my-1 fw-bold">
                        <small className='text-secondary'><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          style={{ fill: "rgb(108, 117, 125)" }}
                          className='me-1 '
                          height={12}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                        </svg>{items.cityName}</small></div>
                      {/* <div className="persons"><i className="fa-solid fa-user"></i> 4</div> */}
                    </div>
                    <div className="p-icon"><img src={design} alt="" /><span className="icon"><img src={items.caturl} style={{ width: "40px", filter: "invert(0)" }}></img></span></div>
                    <h3 className='text-uppercase mt-3' style={{ color: "#2b2a4c", opacity: "0.97", letterSpacing: "2px" }}>{items.place_name}</h3>

                    <div style={styles.truncate} className='text-secondary'>
                      {items.pdescription}
                    </div>

                    <div className="bottom-box clearfix">
                      <div className="rating"><a href="#" className="theme-btn" tabindex="0"><i className="fa-solid fa-star"></i>
                        <strong>{items.average_rating || '0'}</strong>   <span className="count">{items.review_count} Reviews</span></a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Link>
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleCity;
