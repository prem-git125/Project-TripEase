import React, { useEffect, useState } from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
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
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';



// assets/images/background/bg-gradient-18.png




const Home = () => {

	const myid = localStorage.getItem("uid");
	// const {uid} = useParams();

	const [formData, setFormData] = useState({})
	const [data, setData] = useState([])

	const fetchGuiders = async () => {
		try {
			const response = await fetch(`http://localhost:7000/api/guiderDisplay/${myid}`);
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
				alert(response.statusText)
			}
		} catch (error) {
			console.error(error)
		}
	}


	useEffect(() => {
		fetchGuiders();
	})

	return (
		<>
			{/* <div>
				<div className="search-one d-block mx-auto" style={{ width: "80%" }}>
					<div className="auto-container">
						<div className="tabs-box search-tabs">
							<ul className="tab-buttons clearfix m-1" style={{ borderRadius: "50px" }}>
								<li className="tab-btn active-btn" data-tab="#tab-1"><span>Hotel</span></li>
								<li className="tab-btn" data-tab="#tab-2"><span>Tour</span></li>
								<li className="tab-btn" data-tab="#tab-3"><span>Activity</span></li>
								<li className="tab-btn" data-tab="#tab-4"><span>Car</span></li>
								<li className="tab-btn" data-tab="#tab-5"><span>Cruise</span></li>
								<li className="tab-btn" data-tab="#tab-6"><span>Flights</span></li>
							</ul>
							<div className="tabs-content">

								<div className="tab active-tab" id="tab-1">
									<div className="form-box site-form">
										<form method="post" action="https://jufailitech.com/envatoitems/travilo/html/index.html">
											<div className="row clearfix">
												<div className="form-group col-xl-12 col-lg-6 col-md-6 col-sm-12">
													<div className="field-label">Destination</div>
													<div className="field-inner">
														<input style={{ borderRadius: "50px" }} type="text" name="field-name" value="" placeholder="Where to go?"
															required />
														<i className="alt-icon fa fa-map-marker-alt"></i>
													</div>
												</div>
											</div>
											<button style={{ borderRadius: "30px" }} type="submit" className="theme-btn f-btn"><span>Search <i
												className="fa-solid fa-search"></i></span></button>
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}


			{/* // 2nd div
			// 2nd div
			// 2nd div
			// 2nd div
			// 2nd div
			// 2nd div
			// 2nd div */}

<div className="team-section" style={{margin:'0px',padding:'10px'}}>
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

						<div className="row clearfix justify-content-center">
							{data && data.map((items) => {

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
						{data && <Link to="/allguider" style={{ backgroundColor: "#ff5522" }} className="button1 bouncy w-25 mt-4">View More Guider</Link>}

					</div>
				</div>
			</div>

			<div className="intro-section bg-white">
				<div className="auto-container">
					<div className="title-box centered wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="subtitle">Let’s Travel Now</div>
						<h2><span>Explore the World</span></h2>
					</div>
					<div className="row clearfix justify-content-center">
						<div className="intro-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms"
							data-wow-duration="1500ms">
							<div className="inner-box">
								<div className="icon"><span><img src={icon1} alt="" /></span></div>
								<h4>Most Popular Destinations</h4>
								<p className="travilo-text">Discover the world's most sought-after destinations, from
									breathtaking wonders to
									vibrant cityscapes. Unveil iconic landmarks, immerse in diverse cultures, and create
									cherished memories
									on your journey of a lifetime.</p>
							</div>
						</div>
						{/* Guiders  */}


						<div className="intro-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms"
							data-wow-duration="1500ms">
							<div className="inner-box">
								<div className="icon"><span><img src={icon2} alt="" /></span></div>
								<h4>Budget Friendly Packages</h4>
								<p className="travilo-text">Travel doesn't have to break the bank! Explore our curated selection
									of
									budget-friendly packages, where you can experience incredible adventures without
									compromising on
									quality. Embrace wanderlust without the financial worry.</p>
							</div>
						</div>

						<div className="intro-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms"
							data-wow-duration="1500ms">
							<div className="inner-box">
								<div className="icon"><span><img src={icon3} alt="" /></span></div>
								<h4>Satisfaction Guaranteed</h4>
								<p className="travilo-text">Your satisfaction is our top priority. With meticulous planning and
									personalized
									service, we ensure your travel experiences exceed expectations. Book with confidence,
									knowing that your
									journey will be nothing short of exceptional.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* about 2
		about 2
		about 2
		about 2
		about 2
		about 2
		about 2
		about 2 */}

			{/* guider members  */}

			

			{/* guider end  */}



			<div className="about-two  bg-white">
				<div className="bg-grad-right"><img src={bgGradient18} alt="" title="" /></div>
				<div className="auto-container">
					<div className="outer-box">
						<div className="d-elem-1"><img src="assets/images/elements/green-2.png" alt="" /></div>
						<div className="bg-grad-left"><img src={bgGradient17} alt="" title="" />
						</div>
						<div className="row clearfix">

							<div className="text-col col-lg-7 col-md-12 col-sm-12">
								<div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="title-box">
										<div className="subtitle">Let’s Explore the World</div>
										<h2><span>We Can Make Your Tour Most Enjoyable Holiday Ever</span></h2>
										<div className="travilo-text">
											<p>At our travel agency, we pride ourselves on our commitment to making your
												tour the most enjoyable
												holiday ever. With meticulous attention to detail and a passion for crafting
												unforgettable
												experiences, we go above and beyond to ensure your journey is nothing short
												of extraordinary.</p>
											<p>From
												personalized itineraries that cater to your unique interests to handpicking
												accommodations that
												provide comfort and luxury, every aspect of your trip is carefully curated
												with your satisfaction
												in mind.</p>
										</div>
									</div>


									<div className="facts-two">
										<div className="row clearfix">
											<div className="fact-block col-lg-4 col-md-4 col-sm-6">
												<div className="inner-box clearfix">
													<div className="fact-count">
														<div className="count-box"><span className="count-text" data-stop="2"
															data-speed="1000">0</span>K
														</div>
													</div>
													<div className="fact-title">Total <br />Location</div>
												</div>
											</div>
											<div className="fact-block col-lg-4 col-md-4 col-sm-6">
												<div className="inner-box clearfix">
													<div className="fact-count">
														<div className="count-box"><span className="count-text" data-stop="5"
															data-speed="1500">0</span>K
														</div>
													</div>
													<div className="fact-title">Travel <br />Activity</div>
												</div>
											</div>
											<div className="fact-block col-lg-4 col-md-4 col-sm-6">
												<div className="inner-box clearfix">
													<div className="fact-count">
														<div className="count-box"><span className="count-text" data-stop="8"
															data-speed="2000">0</span>K
														</div>
													</div>
													<div className="fact-title">Tour <br />Packages</div>
												</div>
											</div>
										</div>
									</div>
									<div className="link-box"><a href="about.html" className="theme-btn btn-style-two"><span>More
										About Us</span></a></div>
								</div>
							</div>

							<div className="image-col col-lg-5 col-md-12 col-sm-12">
								<div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="d-elem-2"><img src={pink3} alt="" /></div>
									<div className="image-box">
										<img src={about2} alt="" title="" />
										<a href="https://www.youtube.com/watch?v=ZETY_l3GVQg&amp;autoplay=1"
											className="lightbox-image vid-btn"><span className="icon fa fa-play"><i
												className="ripple"></i></span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* why choose us
			why choose us
			why choose us
			why choose us
			why choose us
			why choose us
			why choose us
			why choose us
			why choose us */}


			<div className="why-us-two">
				<div className="auto-container">
					<div className="outer-box">
						<div className="bg-grad-left"><img src="assets/images/background/bg-gradient-19.png" alt="" title="" />
						</div>
						<div className="bg-grad-right"><img src="assets/images/background/bg-gradient-20.png" alt="" title="" />
						</div>
						<div className="row clearfix">

							<div className="text-col col-lg-6 col-md-12 col-sm-12">
								<div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="d-elem-1"><img src={purple3} alt="" /></div>
									<div className="title-box">
										<div className="subtitle">Why Choose Us</div>
										<h2><span>We Arrange the Best Tour Ever Possible</span></h2>
										<p className="travilo-text">Our expert team meticulously crafts every detail to ensure
											you embark on a
											journey filled with extraordinary experiences.</p>
									</div>
									<div className="features">
										<div className="f-block-three">
											<div className="inner-box">
												<div className="icon"><img src={icon7} alt="" /></div>
												<h4>Amazing Tour Plans</h4>
												<div className="travilo-text">Sectetur adipisicing elised do eiusmod tempor
													incidid unt ut labore et dolore magna aliqua eniet.</div>
											</div>
										</div>
										<div className="f-block-three">
											<div className="inner-box">
												<div className="icon"><img src={icon8} alt="" /></div>
												<h4>Best Travel Guides</h4>
												<p className="travilo-text">Your ultimate companion to unforgettable adventures
													and seamless travel
													experiences.</p>
											</div>
										</div>
										<div className="f-block-three">
											<div className="inner-box">
												<div className="icon"><img src={icon9} alt="" /></div>
												<h4>Affordable Pricing Plans</h4>
												<p className="travilo-text">Discover budget-friendly pricing plans without
													compromising on quality and
													enjoyment.</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="image-col col-lg-6 col-md-12 col-sm-12">
								<div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="d-elem-2"><img src={yellow} alt="" /></div>
									<div className="image-box">
										<img src={forest} alt="" title="" />
									</div>
									<div className="rating"><span className="icon fa fa-star"></span><span className="count">5,0</span>
									</div>
									<div className="fact-block f-1">
										<div className="inner-box clearfix">
											<div className="fact-count">
												<div className="count-box"><span className="count-text" data-stop="5"
													data-speed="2000">0</span>K</div>
											</div>
											<div className="fact-title">Total <br />Travellers</div>
										</div>
									</div>
									<div className="fact-block f-2">
										<div className="inner-box clearfix">
											<div className="fact-count">
												<div className="count-box"><span className="count-text" data-stop="20"
													data-speed="2000">0</span>K</div>
											</div>
											<div className="fact-title">Tour <br />Organized</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="get-help wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div className="auto-container">
						<div className="content-box">
							<div className="row clearfix">
								<div className="text-col col-lg-9 col-md-12 col-sm-12">
									<div className="inner">
										<div className="title-box">
											<div className="subtitle">Confused? Get Help</div>
											<h2><span>Get Help from Our Travel Agent <i><img
												src={white} alt="" /></i></span></h2>
											<p className="travilo-text">Let our dedicated travel agent assist you in crafting
												the perfect itinerary
												tailored to your preferences and interests.</p>
										</div>
									</div>
								</div>
								<div className="link-col col-lg-3 col-md-12 col-sm-12">
									<div className="inner">
										<div className="link-box"><a href="destination-single.html"
											className="theme-btn btn-style-two"><span>Explore
												Threads</span></a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>


			{/* comment section
			comment section
			comment section
			comment section
			comment section
			comment section
			comment section
			comment section */}

			<div class="testimonials-two">
				<div class="auto-container">
					<div class="row clearfix">

						<div class="text-col col-lg-6 col-md-12 col-sm-12">
							<div class="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
								<div class="title-box">
									<div class="subtitle">Testimonials</div>
									<h2><span>What People Say</span></h2>
								</div>
								<div class="carousel-box">
									<div class="testi-slider-two">

										<div class="testi-block-two">
											<div class="inner-box">
												<div class="quote-icon"><span class="flaticon-left-quote"></span></div>
												<div class="rating">
													<div class="stars"><i class="fa-solid fa-star"></i><i
														class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
															class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
													</div>
												</div>
												<p class="travilo-text">Absolutely incredible! Our trip to Japan was
													flawlessly planned by the
													travel agent, ensuring we got to experience the best of both modern
													cityscapes and traditional
													culture. The attention to detail and personalized recommendations made
													it a trip of a lifetime.
												</p>
												<div class="info">
													<div class="image"><img
														src="assets/images/resources/thumbnails/testi-1.jpg" alt="" />
													</div>
													<div class="name">Farooq Diyaz</div>
													<div class="designation">Web Developer</div>
												</div>
											</div>
										</div>

										{/* <div class="testi-block-two">
											<div class="inner-box">
												<div class="quote-icon"><span class="flaticon-left-quote"></span></div>
												<div class="rating">
													<div class="stars"><i class="fa-solid fa-star"></i><i
														class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
															class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
													</div>
												</div>
												<p class="travilo-text">Thank you for making our dream vacation a reality!
													The travel agent's
													expertise in curating an unforgettable journey through Europe was beyond
													our expectations. From
													iconic landmarks to hidden gems, every moment was a delight.
												</p>
												<div class="info">
													<div class="image"><img
														src="assets/images/resources/thumbnails/testi-2.jpg" alt="" />
													</div>
													<div class="name">Karim Sonya</div>
													<div class="designation">Graphic Designer</div>
												</div>
											</div>
										</div>

										<div class="testi-block-two">
											<div class="inner-box">
												<div class="quote-icon"><span class="flaticon-left-quote"></span></div>
												<div class="rating">
													<div class="stars"><i class="fa-solid fa-star"></i><i
														class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
															class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
													</div>
												</div>
												<p class="travilo-text">Such a fantastic experience! The travel agent took
													care of everything,
													from arranging our safari adventure in Africa to organizing cultural
													encounters with local
													tribes. We felt safe, well-informed, and deeply immersed in the beauty
													of the continent.</p>
												<div class="info">
													<div class="image"><img
														src="assets/images/resources/thumbnails/testi-3.jpg" alt="" />
													</div>
													<div class="name">James Fernandez</div>
													<div class="designation">Photographer</div>
												</div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
						</div>

						<div class="image-col col-lg-6 col-md-12 col-sm-12">
							<div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
								<div class="image-box"><img src={manbag} alt=""
									title="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			{/* // social media
		// social media
		// social media
		// social media
		// social media
		// social media
		// social media
		// social media */}


			{/* guider members  */}

			

			{/* guider end  */}

			<Footer />

		</>

	)
}

export default Home
