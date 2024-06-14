import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import testimonials from "../assets/images/resources/thumbnails/testi-1.jpg";
// import testimonials from "../assets/images/resources/thumbnails/testi-1.jpg"

import StarRatings from 'react-star-ratings';

const SinglePlace = () => {
    const { placeid } = useParams();
    const [formData, setFormData] = useState({});
    const [rating, setRating] = useState(0.0)
    const uid = localStorage.getItem("uid");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(formData)

    }

    const handleDelete = async (rid) => {
        try {
            const response = await fetch(
                `http://localhost:7000/api/reviewdelete/${rid}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("HTTP Error: " + response.error);
            }
            const responseData = await response.json();
            console.log(responseData)
        } catch (err) {
            console.error(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const d = new Date();
        try {
            const response = await fetch(`http://localhost:7000/api/places/submitReview`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    uid: uid,
                    placeid: placeid,
                    rating: rating,
                    review: formData.review,
                    review_date_time: d
                })

            });

            if (!response.ok) {
                console.error(response.status)
            } else {
                console.log("Data Added Successfully!")
                // Clear the form data
                setFormData({
                    rating: "",
                    review: ""
                });
            }
        } catch (error) {
            console.error(error);
        }
    };


    const [place, setPlace] = useState([])
    const fetchspc = async () => {
        const response = await fetch(`http://localhost:7000/api/places/sview/${placeid}`)
        if (!response.ok) {
            console.error(response)
        }
        else {
            const resdata = await response.json()
            setPlace(resdata[0])
        }
    }
    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:7000/api/places/reviewDisplay/${placeid}`);
            if (!response.ok) {
                throw new Error(`HTTP error Status ${response.status}`);
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchspc()
    }, [placeid]); // Fetch reviews when placeid changes

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    useEffect(() => {

        fetchReviews()
        // console.log(place)
    })

    const imageUrls = place.placeImgUrls ? place.placeImgUrls.split(",") : [];


    return (
        <>
            <div className='bg-white'>
                <section className="inner-banner">
                    <div className="image-layer " style={{ background: `linear-gradient(transparent,black),url(${place.c_url})`, height: "78vh", backgroundSize: "cover,cover", backgroundPosition: "100% 100%,100% 100%" }}>
                    </div>
                    <div className="auto-container">
                        <div className="content-box">
                            <h1 className='text-uppercase'>{place.place_name}</h1>
                            <div className="bread-crumb">
                                <ul className="clearfix">
                                    <li><Link to={"/home"}>Home</Link></li>
                                    <li><Link to={"/home"}>Place</Link></li>
                                    <li className="current">{place.place_name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="destination-single">
                    <div className="auto-container">
                        <div className="upper-images">
                            <div className="row clearfix">

                                <div className="image-col col-lg-8 col-md-12 col-sm-12 ">

                                    <div className="image-block">
                                        <div className="image">
                                            <img
                                                src={imageUrls.length > 0 ? imageUrls[0] : ""}
                                                alt={place.place_name} className='w-100 rounded' />
                                        </div>
                                    </div>
                                </div>


                                <div className="image-col col-lg-4 col-md-12 col-sm-12">

                                    <div className="image-block">
                                        <div className="image">
                                            <img
                                                src={imageUrls.length > 0 ? imageUrls[1] : ""}
                                                alt={place.place_name} />
                                        </div>
                                    </div>


                                    <div className="image-block">
                                        <div className="image">
                                            <img
                                                src={imageUrls.length > 0 ? imageUrls[2] : ""}
                                                alt={place.place_name} />
                                        </div>
                                        {/* <div className="img-link"><a href="#" className="theme-btn"><span>+ 160 Photos</span></a></div> */}
                                    </div>
                                </div>


                            </div>

                        </div>



                        <div className="lower-content">
                            <div className="row clearfix">
                                <div className="content-col col-lg-8 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <h3>About {place.place_name}</h3>
                                        <div className="travilo-text" >
                                            <p>{place.pdescription}</p>

                                        </div>


                                    </div>
                                </div>
                                <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner">

                                        <div className="info-block loc-map">
                                            <div className="inner-box">
                                                <h3>City Map</h3>
                                                <div className="map-box">
                                                    <iframe
                                                        src={place.maps}
                                                        allowfullscreen="" loading="lazy"
                                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='card' >
                                <div className='card-body'>
                                    <form className='d-block mx-auto' onSubmit={(e) => handleSubmit(e)}>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="form4Example1">Rating</label>{" "}
                                            <StarRatings
                                                rating={rating} // Pass the rating state variable
                                                starDimension="24"
                                                starRatedColor="gold"
                                                starSpacing='0px'
                                                changeRating={handleRatingChange} // Pass the handleRatingChange function
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Review</label>
                                            <textarea className="form-control" name='review' onChange={(e) => handleChange(e)} />
                                        </div>
                                        <input type="submit" className="btn btn-dark btn-block mb-4" value="Send Review" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="title-box centered">
                    <div className="subtitle">Testimonials</div>
                    <h2><span>What Users Say</span></h2>
                </div>
                <div className='row'>
                    {currentItems.map((item, index) => (
                        <div key={index} className="col-md-3" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div className='card shadow'>
                                <div className='card-body position-relative'>
                                    <div className='close position-absolute ' style={{ right: "20px" }}>
                                        <button onClick={e => handleDelete(item.reviewid)} className='btn'>
                                            <i class="fa fa-times" ></i>
                                        </button>

                                    </div>
                                    <p className="travilo-text text-capitalize">{item.review}</p>
                                    <div className="rating">
                                        <div className="stars">
                                            <StarRatings
                                                rating={item.rating}
                                                starDimension="24"
                                                starRatedColor="gold"
                                                starSpacing="0px"
                                                numberOfStars={5}
                                                name={`rating-${index}`}
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mt-2'>

                                        <img src={item.url} style={{ width: '40px', height: '40px', objectFit: 'cover' }} className='rounded-circle' alt="Testimonial" />

                                        <div className='ms-2'>
                                            <div className="name fw-bold" style={{ fontSize: "14px" }}>{item.uname}</div>
                                            <div className="designation" style={{ fontSize: "10px" }}>{new Date(item.review_date_time).toDateString()}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    {/* Pagination */}
                    <div className='d-flex justify-content-center'>
                        <ul className="pagination mt-3 rounded overflow-hidden">
                            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                                <li
                                    key={i}
                                    className="page-item"
                                    style={i + 1 === currentPage ? { backgroundColor: "#ff5522" } : {}}
                                >
                                    <button className="page-link" style={i + 1 === currentPage ? { color: "white", backgroundColor: "transparent" } : {}} onClick={() => paginate(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>

        </>
    )
}
export default SinglePlace