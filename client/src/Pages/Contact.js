import React, { useState } from 'react'
// import bannerImage from "./assets/images/resources/featured/banner-4.jpg";
import bannerImage from "../assets/images/resources/featured/banner-4.jpg";
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';

const Contact = () => {

	const [formData, setFormData] = useState({})

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
		console.log(formData);
	}

	return (
		<>
			<Navbar></Navbar>
			<div>
				<section className="inner-banner">
					<div className="image-layer" style={{ backgroundImage: `url(${bannerImage})` }}>
					</div>
					<div className="auto-container">
						<div className="content-box">
							<h1>Contact</h1>
							<div className="bread-crumb">
								<ul className="clearfix">
									<li><Link to="/home">Home</Link></li>
									<li className="current">Contact</li>
								</ul>
							</div>
						</div>
					</div>
				</section>



				<section className="contact-section">
					<div className="auto-container">
						<div className="row clearfix">
							<div className="info-col col-lg-4 col-md-12 col-sm-12">
								<div className="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
									<div className="info">
										<ul>
											<li className="location">
												<i className="icon fa fa-map-marker-alt"></i>
												<h5>Location</h5>
												<div className="travilo-text">20, Love Street, Muscat, Oman</div>
											</li>
											<li className="phone">
												<i className="icon fa-solid fa-phone"></i>
												<h5>Phone</h5>
												<div className="travilo-text"><a href="tel:+96899999000">+91 7622897125</a></div>
											</li>
											<li className="email">
												<i className="icon fa fa-envelope"></i>
												<h5>Email</h5>
												<div className="-text"><a
													href="mailto:hello@travilo.com">hello@tripease.com</a></div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="form-col col-lg-8 col-md-12 col-sm-12">
								<div className="inner wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="0ms">
									<h3>Send Us A Message</h3>
									<div className="form-box site-form">
										<form method="post" action="https://jufailitech.com/envatoitems/travilo/html/sendemail.php" id="contact-form">
											<div className="row clearfix">
												<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
													<div className="field-inner">
														<input type="text" name="username" onChange={(e) => handleChange(e)} placeholder="Your name"
															required />
													</div>
												</div>
												<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
													<div className="field-inner">
														<input onChange={(e) => handleChange(e)} type="email" name="email" placeholder="Your email"
															required />
													</div>
												</div>
												<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
													<div className="field-inner">
														<input type="number" name="phone" onChange={(e) => handleChange(e)} placeholder="Your Phone"
															required />
													</div>
												</div>
												<div className="form-group col-xl-6 col-lg-6 col-md-12 col-sm-12">
													<div className="field-inner">
														<input type="text" name="subject" onChange={(e) => handleChange(e)} placeholder="Subject"
															required />
													</div>
												</div>
												<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
													<div className="field-inner">
														<textarea name="message" placeholder="Start writing your message here"
															required="" onChange={(e) => handleChange(e)}></textarea>
													</div>
												</div>
												<div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12">
													<button type="submit" className="theme-btn btn-style-one"><span>Submit
														Query</span></button>
												</div>
											</div>
										</form>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="map-box">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.18800900134!2d72.65748353239132!3d21.159120355102836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712398150393!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
							></iframe>

						<div className="map-icon"><img src="assets/images/icons/map-marker.png" alt="" /></div>
					</div>
				</section >


				<footer className="main-footer style-two">
					<div className="upper-section">
						<div className="footer-subscribe">
							<div className="title-box centered">
								<div className="subtitle">Get Regular Updates</div>
								<h2>Subscribe to our Newsletter</h2>
							</div>
							<div className="form-box subscribe-form">
								<form method="post" action="https://jufailitech.com/envatoitems/travilo/html/contact.html">
									<div className="form-group">
										<div className="field-inner">
											<input type="email" name="email" placeholder="Type your email here"
												required="" />
										</div>
										<button type="submit" className="theme-btn"><span>Subscribe</span></button>
									</div>
								</form>
							</div>
						</div>
						<div className="auto-container">
							<div className="content-box">
								<div className="row clearfix">
									<div className="footer-column col-xl-4 col-lg-3 col-md-6 col-sm-12">
										<div className="footer-widget about-widget">
											<div className="footer-logo"><a href="index.html" title="Travilo"><img
												src="assets/images/logo-white.png" alt="" title="Travilo" /></a></div>
											<div className="footer-info">
												<ul className="info">
													<li className="address"><a href="#"><i class="icon fa fa-map-marker-alt"></i>
														20, Love Street, Muscat, Oman</a></li>
													<li className="phone"><a href="tel:+96899999000"><i
														className="icon fa-solid fa-phone"></i>
														+96899999000</a></li>
													<li className="email"><a href="mailto:hello@travilo.com"><i
														className="icon fa fa-envelope"></i>
														hello@travilo.com</a></li>
												</ul>
												<ul className="social-links clearfix">
													<li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
													<li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
													<li><a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
													<li><a href="#" class="youtube"><i class="fab fa-youtube"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
										<div className="row clearfix">

											<div className="footer-column col-lg-6 col-md-6 col-sm-12">
												<div className="footer-widget links-widget">
													<h4>Top Destination</h4>
													<div className="links">
														<ul>
															<li><a href="#">New York</a></li>
															<li><a href="#">London</a></li>
															<li><a href="#">Rome</a></li>
															<li><a href="#">Mascot</a></li>
															<li><a href="#">Dhaka</a></li>
														</ul>
													</div>
												</div>
											</div>

											<div className="footer-column col-lg-6 col-md-6 col-sm-12">
												<div className="footer-widget links-widget">
													<h4>Useful Links</h4>
													<div className="links">
														<ul>
															<li><a href="#">About Us</a></li>
															<li><a href="#">Contact Us</a></li>
															<li><a href="#">News</a></li>
															<li><a href="#">Explore Threads</a></li>

														</ul>
													</div>
												</div>
											</div>

										</div>
									</div>

									<div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
										<div className="footer-widget app-widget">
											<h4>Download App</h4>
											<div className="app-info">
												<p className="travilo-text">Download our user-friendly app for seamless access to
													real-time updates, and
													exclusive offers on the go.</p>
												<div className="links">
													<div className="link"><a href="#"><img src="assets/images/apple-store.png"
														alt="" /></a></div>
													<div className="link"><a href="#"><img src="assets/images/play-store.png"
														alt="" /></a></div>
												</div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className="f-bottom">
						<div className="auto-container">
							<div className="inner clearfix">
								<div className="copyright">All rights researved <strong>TripEase</strong> &copy; 2023</div>
								<div className="bottom-links">
									<ul className="clearfix">
										<li><a href="#">Terms & Conditions</a></li>
										<li><a href="#">Privacy Policy</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</footer>



			</div >
		</>

	)
}

export default Contact
