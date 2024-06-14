import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import icon1 from '../assets/images/icons/intro-1.png'
import icon2 from '../assets/images/icons/intro-2.png'
import icon3 from '../assets/images/icons/intro-3.png'
import icon7 from '../assets/images/icons/f-icon-7.png'
import icon8 from '../assets/images/icons/f-icon-8.png'
import icon9 from '../assets/images/icons/f-icon-9.png'
import about2 from '../assets/images/resources/misc/about-2.jpg'
import pink3 from '../assets/images/elements/pink-3.png'
import white from '../assets/images/elements/white-1.png'
import yellow from '../assets/images/elements/yellow-4.png'
import purple3 from '../assets/images/elements/purple-3.png'
import grad24 from "../assets/images/background/bg-gradient-24.png";
import grad25 from "../assets/images/background/bg-gradient-25.png";
import purple4 from "../assets/images/background/bg-gradient-25.png";
import forest from '../assets/images/resources/misc/man-in-forest.jpg'
import manbag from '../assets/images/resources/misc/man-orange-bag.png'
import bgGradient18 from "../assets/images/background/bg-gradient-18.png"
import bgGradient17 from "../assets/images/background/bg-gradient-17.png"
import bgGradient19 from "../assets/images/background/bg-gradient-19.png"
import bgGradient20 from "../assets/images/background/bg-gradient-20.png"
import Footer from "./Footer"

function AllGuiders() {
	const myid = localStorage.getItem("uid");

	const [formData, setFormData] = useState({})
	const [data, setData] = useState([])
	const [followedGuiders, setFollowedGuiders] = useState([]);
	const [search, setSearch] = useState('');
	// console.log(search)


	const fetchGuiders = async () => {
		try {
			const response = await fetch(`http://localhost:7000/api/AllguiderDisplay`);
			if (!response.ok) {
				throw new Error(`HTTP error Status ${response.status}`)
			}
			const jsonData = await response.json()
			setData(jsonData);
		} catch (error) {
			console.error(error)
		}
	}

	const handleFollow = async (userid) => {
		try {
			const response = await fetch("http://localhost:7000/api/addFollow", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({

					uid: userid,
					followerid: myid
				})
			})

			if (!response.ok) {
				console.error(response.status)
			}
			else {
				setFollowedGuiders([...followedGuiders, userid]);
				alert(response.statusText)
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchGuiders();
	}, [])
	return (
		<>
		{/* <Navbar/> */}
			<div className="team-section" style={{position:'absolute',top:"-65px",right:"70px"}}>
				<div className="auto-container">
					<div className="title-box centered wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="subtitle">Our Guiders</div>
						<h2><span>Our Amazing Adventures Guiders</span></h2>
					</div>

					<div className="team-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="bg-grad-left">
							<img src={grad24} alt="" title=""></img>
						</div>
						<div className="bg-grad-right">
							<img src={grad25} alt="" title=""></img>
						</div>
						<div className="d-elem-1">
							<img src={purple4} alt=""></img>
						</div>

						<div class="search-one m-3">
							<div class="auto-container">
								<div class="tabs-box search-tabs">
									<div class="tabs-content">
										<div class="tab active-tab" id="tab-1">
											<div class="form-box site-form">
												<form method="post" action="https://jufailitech.com/envatoitems/travilo/html/index.html">
													<div class="row clearfix">
														<div class="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
															<div class="field-label">Search Guiders</div>
															<div class="field-inner">
																	<input type="text" id="inputSearch" onChange={(e) => setSearch(e.target.value)} style={{width:"1200px"}} placeholder="Search our amazing guiders!"  aria-describedby="passwordHelpInline"/>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div> 
							</div>
						</div>
						<br></br>
						<div className="row clearfix justify-content-center">
							{data.filter((items) => {
								return search.toLowerCase() === '' ? items : items.nick_name.toLowerCase().includes(search)
							}).map((items) => {

								return <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12" key={items.guiderid}>
									<div className="inner-box clearfix">
										<div className="image-box">
											<div className="image">
												<a href="#">
													<img src={items.url} alt="Team 4"></img>
												</a>
											</div>
											<ul className="social-links clearfix">
												<li>
													<button href="#" className="btn btn-primary rounded-circle">
														<i className="fab fa-facebook-f"></i>
													</button>
												</li>
												<li>
													<button href="#" className="btn btn-info rounded-circle">
														<i className="fab fa-twitter"></i>
													</button>
												</li>
												<li>
													<button href="#" className="btn btn-warning rounded-circle">
														<i className="fab fa-linkedin-in"></i>
													</button>
												</li>
												{/* <li>
													
                                                    {followedGuiders.includes(items.uid) ? (
                                                            <button className="btn btn-primary rounded-circle">
                                                                <i className="fa fa-check"></i>
                                                            </button>
                                                        ) : (
                                                            <button onClick={(e) => handleFollow(items.uid)} href="#" className="btn btn-danger rounded-circle">
                                                                <i className="fa fa-user-plus"></i>
                                                            </button>
                                                        )}
												</li>  */}
												<li>
													<Link to={`/guiderSingle/${items.uid}`}>
														<button href="#" className="btn btn-danger rounded-pill ">
															<i className="fa fa-user" aria-hidden="true"></i>
														</button>
													</Link>
												</li>

											</ul>
										</div>
										<h4><a href="#">{items.nick_name}</a></h4>
										<div className="designation">{items.insta_link}</div>
									</div>
								</div>
							})}

						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default AllGuiders


