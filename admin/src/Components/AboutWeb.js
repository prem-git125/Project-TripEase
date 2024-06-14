import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bannerImage from "../assets/images/resources/featured/banner-6.jpg";
import grad from "../assets/images/background/bg-gradient-2.png";
import green from "../assets/images/elements/green-1.png";
import fcon1 from "../assets/images/icons/f-icon-1.png";
import fcon2 from "../assets/images/icons/f-icon-2.png";
import bgg26 from "../assets/images/background/bg-gradient-26.png";
import yellow from "../assets/images/elements/yellow-3.png";
import pink from "../assets/images/elements/pink-4.png";
import red from "../assets/images/resources/misc/tickets.jpg";
import hiking from "../assets/images/resources/misc/man-hiking-2.jpg";
import intro from "../assets/images/icons/intro-4.png";
import intro5 from "../assets/images/icons/intro-5.png";
import intro6 from "../assets/images/icons/intro-6.png";
import bgg23 from "../assets/images/background/bg-gradient-23.png";
import green2 from "../assets/images/elements/green-4.png";
import fcon10 from "../assets/images/icons/f-icon-10.png";
import fcon11 from "../assets/images/icons/f-icon-11.png";
import fcon12 from "../assets/images/icons/f-icon-12.png";
import fcon13 from "../assets/images/icons/f-icon-13.png";
import grad24 from "../assets/images/background/bg-gradient-24.png";
import grad25 from "../assets/images/background/bg-gradient-25.png";
import purple4 from "../assets/images/background/bg-gradient-25.png";
import team4 from "../assets/images/resources/team/team-4.jpg";
import team1 from "../assets/images/resources/team/team-1.jpg";
import team3 from "../assets/images/resources/team/team-3.jpg";
import team2 from "../assets/images/resources/team/team-2.jpg";
import testi1 from "../assets/images/resources/thumbnails/testi-1.jpg";
import testi7 from "../assets/images/resources/thumbnails/testi-7.jpg";
import testi3 from "../assets/images/resources/thumbnails/testi-3.jpg";
import testi4 from "../assets/images/resources/thumbnails/testi-4.jpg";
import testi5 from "../assets/images/resources/thumbnails/testi-5.jpg";
import testi6 from "../assets/images/resources/thumbnails/testi-6.jpg";
import testi2 from "../assets/images/resources/thumbnails/testi-2.jpg";
import testi9 from "../assets/images/resources/thumbnails/testi-9.jpg";
import testi8 from "../assets/images/resources/thumbnails/testi-8.jpg";
import partner1 from "../assets/images/partners/partner-1.png";
import partner2 from "../assets/images/partners/partner-2.png";
import partner3 from "../assets/images/partners/partner-3.png";
import partner4 from "../assets/images/partners/partner-4.png";
import partner5 from "../assets/images/partners/partner-5.png";
import apple from "../assets/images/apple-store.png";
import play from "../assets/images/play-store.png";
import logo from "../assets/images/logo-white.png";

const AboutWeb = () => {
  return (
    <div className="page-wrapper">
      {/* Banner Section */}
      <div className="inner-banner">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${bannerImage})` }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>About Us</h1>
            <div className="bread-crumb">
              <ul className="clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner Section */}
      {/* About Section */}
      <div className="about-section alternate">
        <div className="bg-grad-right">
          <img src={grad} alt="" title=""></img>
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!--Text Col--> */}
            <div className="text-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="d-elem-1">
                  <img src={green} alt=""></img>
                </div>
                <div className="title-box">
                  <div className="subtitle">Let’s Explore the World</div>
                  <h2>
                    <span>We Make Your Travel More Enjoyable</span>
                  </h2>
                  <p className="travilo-text">
                    Our dedicated team is committed to providing you with
                    exceptional experiences, personalized itineraries, and
                    expert guidance, ensuring your journey is filled with
                    unforgettable moments.
                  </p>
                </div>
                <div className="features">
                  <div className="row clearfix">
                    <div className="f-block col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fcon1} alt=""></img>
                        </div>
                        <h6>Award winning tour & travel arranger</h6>
                      </div>
                    </div>
                    <div className="f-block col-lg-6 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon">
                          <img src={fcon2} alt=""></img>
                        </div>
                        <h6>Most popular booking solution provider</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-text">
                  <div className="travilo-text">
                    <ul>
                      <li>Inspiring travel experiences</li>
                      <li>Expertly curated itineraries</li>
                      <li>Personalized guidance and support</li>
                    </ul>
                  </div>
                  <div className="link-box">
                    <a href="about.html" className="theme-btn btn-style-one">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Image Col--> */}
            <div className="image-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="bg-grad-left">
                  <img src={bgg26} alt="" title=""></img>
                </div>
                <div className="d-elem-1">
                  <img src={yellow} alt=""></img>
                </div>
                <div className="d-elem-2">
                  <img src={pink} alt=""></img>
                </div>
                <div className="image-box clearfix">
                  <div className="image">
                    <img src={red} alt="Tickets" title="Tickets"></img>
                  </div>
                  <div className="image">
                    <img src={hiking} alt="" title=""></img>
                  </div>
                </div>
                <div className="exp">
                  <span className="count">12</span> Successful <br />
                  Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Section */}
      {/* Intro Section */}
      <div className="intro-two">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Block */}
            <div
              className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon">
                  <span>
                    <img src={intro} alt=""></img>
                  </span>
                </div>
                <h4>Our Mission</h4>
                <div className="travilo-text">
                  to inspire and empower travelers to explore the world with
                  wonder, creating unforgettable experiences.
                </div>
              </div>
            </div>
            {/* Block */}
            <div
              className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon">
                  <span>
                    <img src={intro5} alt=""></img>
                  </span>
                </div>
                <h4>Destination Insights</h4>
                <div className="travilo-text">
                  Gain valuable insights into captivating destinations through
                  our comprehensive guides and expert recommendations.
                </div>
              </div>
            </div>
            {/* Block */}
            <div
              className="intro-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="icon">
                  <span>
                    <img src={intro6} alt=""></img>
                  </span>
                </div>
                <h4>Tailored Travel Planning</h4>
                <div className="travilo-text">
                  Our website offers personalized travel planning services
                  tailored to your preferences and interests.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Intro Section */}
      {/* Our Speciality Section */}
      <div className="our-speciality">
        <div className="auto-container">
          <div className="outer-box">
            <div className="bg-grad-left">
              <img src={bgg23} alt="" title=""></img>
            </div>
            <div className="row clearfix">
              {/* Text Col */}
              <div className="title-col col-lg-5 col-md-12 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-duration="1500ms"
                  data-wow-delay="0ms"
                >
                  <div className="d-elem-1">
                    <img src={green2} alt=""></img>
                  </div>
                  <div className="title-box">
                    <div className="subtitle">Our Speciality</div>
                    <h2>
                      <span>Your Trusted Travel Partner</span>
                    </h2>
                    <p className="travilo-text">
                      At our travel website, our speciality lies in curating
                      unforgettable experiences that cater to the unique
                      preferences of each traveler. From family vacations to
                      solo adventures, romantic getaways to group escapades, we
                      take pride in offering a diverse range of handpicked
                      destinations and carefully crafted itineraries.
                    </p>
                    <p className="travilo-text">
                      Our team of travel experts is dedicated to staying ahead
                      of the curve, ensuring that we bring you the latest travel
                      trends and hidden gems to explore. Whether it's seeking
                      out off-the-beaten-path activities or securing exclusive
                      deals with our trusted partners, our commitment to
                      excellence ensures that every trip planned through our
                      platform is a journey of a lifetime.
                    </p>
                    <p className="travilo-text">
                      Our 24/7 customer service team is always at your disposal,
                      ready to address any queries or assist with last-minute
                      changes.
                    </p>
                  </div>
                </div>
              </div>
              {/* Content Col */}
              <div className="content-col col-lg-7 col-md-12 col-sm-12">
                <div
                  className="inner wow fadeInRight"
                  data-wow-duration="1500ms"
                  data-wow-delay="0ms"
                >
                  <div className="features">
                    <div className="row clearfix">
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img src={fcon10} alt=""></img>
                          </div>
                          <h4>Innovative Tour Plans</h4>
                          <div className="travilo-text">
                            Experience our innovative tour plans designed to
                            take you off the beaten path and uncover hidden
                            gems.
                          </div>
                        </div>
                      </div>
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img src={fcon11} alt=""></img>
                          </div>
                          <h4>Expert Travel Guide</h4>
                          <div className="travilo-text">
                            Embark on your journey with confidence, guided by
                            our expert travel guides who share their local
                            expertise and insider knowledge.
                          </div>
                        </div>
                      </div>
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img src={fcon12} alt=""></img>
                          </div>
                          <h4>Flexible Payment Policy</h4>
                          <div className="travilo-text">
                            Travel stress-free with our flexible payment policy
                            that accommodates your needs and preferences.
                          </div>
                        </div>
                      </div>
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img src={fcon13} alt=""></img>
                          </div>
                          <h4>High Quality Management</h4>
                          <div className="travilo-text">
                            Rest assured that your travel experience is in
                            capable hands with our high-quality management and
                            attention to every detail.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Speciality Section */}
      {/* Fact Section */}
      <div className="facts-section alt-padding">
        <div className="auto-container">
          <div className="fact-counter">
            <div className="row clearfix">
              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-stop="120"
                        data-speed="2000"
                      >
                        0
                      </span>
                      <i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Destinations
                  </div>
                </div>
              </div>
              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-stop="500"
                        data-speed="3000"
                      >
                        0
                      </span>
                      <i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Travel <br />
                    Packages
                  </div>
                </div>
              </div>
              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-stop="12"
                        data-speed="2000"
                      >
                        0
                      </span>
                      K<i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Travelers
                  </div>
                </div>
              </div>
              <div className="fact-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span
                        className="count-text"
                        data-stop="7"
                        data-speed="2000"
                      >
                        0
                      </span>
                      K<i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Positive <br />
                    Review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact Section End */}
      {/* Team Section */}
      <div className="team-section">
        <div className="auto-container">
          <div
            className="title-box centered wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="subtitle">Team Members</div>
            <h2>
              <span>Our Amazing Team Players</span>
            </h2>
          </div>

          <div
            className="team-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
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
              {/* <Block */}
              <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box clearfix">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={team4} alt="Team 4"></img>
                      </a>
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="youtube">
                          <i clasNames="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Paul Harrison</a>
                  </h4>
                  <div className="designation">Founder & CEO</div>
                </div>
              </div>
              {/* Block */}
              <div className="team-block alt col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box clearfix">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={team1} alt="Team 1"></img>
                      </a>
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="youtube">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Tyron Johnson</a>
                  </h4>
                  <div className="designation">Founder & CTO</div>
                </div>
              </div>
              {/* Block */}
              <div className="team-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box clearfix">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={team3} alt="Team 3"></img>
                      </a>
                    </div>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="youtube">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Richard Parker</a>
                  </h4>
                  <div className="designation">Finance Manager</div>
                </div>
              </div>
              {/* <Block */}
              <div className="team-block alt col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box clearfix">
                  <div className="image-box">
                    <div className="image">
                      <a href="#">
                        <img src={team2} alt="Team 2"></img>
                      </a>
                    </div>
                    <ul class="social-links clearfix">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="youtube">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4>
                    <a href="#">Tom Anderson</a>
                  </h4>
                  <div className="designation">Marketing Executive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Team Section */}

      {/* Testimonials Section */}

      <div className="testimonials-section alt-bg">
        <div className="auto-container">
          <div
            className="title-box centered wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="subtitle">Testimonials</div>
            <h2>
              <span>What Travelers Say</span>
            </h2>
          </div>

          <div
            className="carousel-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="testimonial-carousel">
              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span class="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    I can't thank the travel website enough for the seamless
                    planning of my dream vacation to Italy. From the moment I
                    inquired about Varenna to booking my flights and
                    accommodations, their team was incredibly responsive and
                    helpful. The detailed itineraries, insider tips; made my
                    trip unforgettable.
                  </div>
                  <div className="info">
                    <div className="image">
                      <img src={testi1} alt="Testimonial 1"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">Patrick Pepe</div>
                    <div className="designation">UI Designer</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block */}
            <div className="testi-block-one">
              <div className="inner-box">
                <div className="icon">
                  <span className="flaticon-left-quote"></span>
                </div>
                <div className="travilo-text">
                  As an avid adventure seeker, I rely on the travel website for
                  unique and off-the-beaten-path experiences. Their expertly
                  curated hiking tour in the USA was everything I could have
                  hoped for and more. The scenic trails, knowledgeable guides,
                  and attention to safety made the trip both thrilling and
                  enjoyable.
                </div>
                <div className="info">
                  <div className="image">
                    <img src={testi7} alt="Testimonial 2"></img>
                  </div>
                  <div className="rating">
                    <div className="stars">
                      <i class="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="name">Mike Anderson</div>
                  <div className="designation">Journalist</div>
                </div>
              </div>
            </div>
            {/* Block */}
            <div className="testi-block-one">
              <div className="inner-box">
                <div className="icon">
                  <span class="flaticon-left-quote"></span>
                </div>
                <div className="travilo-text">
                  We had the most magical getaway to Greece, all thanks to the
                  travel website. Their personalized assistance for the perfect
                  island-hopping itinerary and hand-picked luxury accommodations
                  exceeded our expectations. All activities made every every
                  moment unforgettable and amazing.
                </div>
                <div className="info">
                  <div className="image">
                    <img src={testi3} alt="Testimonial 3"></img>
                  </div>
                  <div className="rating">
                    <div className="stars">
                      <i class="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <div className="name">Peter Parker</div>
                  <div className="designation">Photographer</div>
                </div>
              </div>

              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span className="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    Booking our dream vacation through the travel website was a
                    breeze! The interface made it easy to compare various
                    destinations and find the perfect itinerary for our family.
                    From the flights to the accommodations, everything was
                    seamless, and we received personalized support throughout.
                  </div>
                  <div clasName="info">
                    <div className="image">
                      <img src={testi4} alt="Testimonial 4"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">Clint River</div>
                    <div className="designation">Audio Coordinator</div>
                  </div>
                </div>
              </div>
              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span className="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    I've been a frequent traveler for years, and this website
                    has become my go-to resource for planning my adventures. The
                    vast selection of destinations and the detailed information
                    on attractions, hotels, and activities make it a
                    one-stop-shop for all my travel needs. The customer service
                    is top-notch.
                  </div>
                  <div className="info">
                    <div className="image">
                      <img src={testi5} alt="Testimonial 5"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">Timothy Dark</div>
                    <div className="designation">Catalyst</div>
                  </div>
                </div>
              </div>
              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span className="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    As a solo traveler, safety is paramount, and the travel
                    website exceeded my expectations. Their featured tours and
                    excursions were carefully vetted, ensuring I could embark on
                    thrilling experiences with peace of mind. Their blog posts
                    also provided invaluable travel tips and destination
                    insights.
                  </div>
                  <div className="info">
                    <div className="image">
                      <img src={testi6} alt="Testimonial 6"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">Tim Robinson</div>
                    <div className="designation">Adventurist</div>
                  </div>
                </div>
              </div>
              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span class="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    Booking our group getaway through the travel website was a
                    breeze. The group booking feature saved us time and effort,
                    and the discounts we received were fantastic. We had a
                    fantastic time exploring a new country together, and the
                    website's recommended activities catered to everyone's
                    interests.
                  </div>
                  <div className="info">
                    <div className="image">
                      <img src={testi2} alt="Testimonial 7"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">Carlos Santana</div>
                    <div className="designation">Retailer</div>
                  </div>
                </div>
              </div>
              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span className="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    I recently used the travel website to plan a surprise
                    honeymoon for my wife, and it was an absolute success! The
                    honeymoon packages offered were romantic and luxurious, and
                    the website's customer support team helped me customize the
                    perfect trip. It was a magical experience from start to
                    finish.
                  </div>
                  <div className="info">
                    <div className="image">
                      <img src={testi8} alt="Testimonial 8"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">Sam Drake</div>
                    <div className="designation">Chef</div>
                  </div>
                </div>
              </div>
              {/* Block */}
              <div className="testi-block-one">
                <div className="inner-box">
                  <div className="icon">
                    <span className="flaticon-left-quote"></span>
                  </div>
                  <div className="travilo-text">
                    I stumbled upon this travel website while planning a
                    last-minute weekend getaway, and I couldn't have been
                    happier with my decision. The website's last-minute deals
                    and exclusive offers saved me money without compromising on
                    the quality of our stay. The booking process was plain
                    smooth!
                  </div>
                  <div className="info">
                    <div className="image">
                      <img src={testi9} alt="Testimonial 9"></img>
                    </div>
                    <div className="rating">
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="name">David Hustler</div>
                    <div className="designation">Pyhsician</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Testimonials Section */}
      {/* Partner Section */}

      <div className="partners-two">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">Valuable Partners</div>
            <h2>Our Valuable Partners</h2>
          </div>
          <div className="carousel-box">
            <div className="partners-carousel">
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner1} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner2} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner3} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner4} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner5} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner1} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner2} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner3} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner4} alt=""></img>
                  </a>
                </div>
              </div>
              {/* Block */}
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img src={partner5} alt=""></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*End Partner Section */}

      {/* main footer */}

      <footer className="main-footer style-two">
        <div className="upper-section">
          <div className="footer-subscribe">
            <div className="title-box centered">
              <div className="subtitle">Get Regular Updates</div>
              <h2>Subscribe to our Newsletter</h2>
            </div>
            <div className="form-box subscribe-form">
              <form
                method="post"
                action="https://jufailitech.com/envatoitems/travilo/html/contact.html"
              >
                <div className="form-group">
                  <div className="field-inner">
                    <input
                      type="email"
                      name="email"
                      value=""
                      placeholder="Type your email here"
                      required
                    ></input>
                  </div>
                  <button type="submit" className="theme-btn">
                    <span>Subscribe</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="auto-container">
            <div className="content-box">
              <div className="row clearfix">
                <div className="footer-column col-xl-4 col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget about-widget">
                    <div className="footer-logo">
                      <a href="index.html" title="Travilo">
                        <img src={logo} alt="" title="Travilo"></img>
                      </a>
                    </div>
                    <div className="footer-info">
                      <ul className="info">
                        <li className="address">
                          <a href="#">
                            <i className="icon fa fa-map-marker-alt"></i>
                            20, Love Street, Muscat, Oman
                          </a>
                        </li>
                        <li className="phone">
                          <a href="tel:+96899999000">
                            <i className="icon fa-solid fa-phone"></i>
                            +96899999000
                          </a>
                        </li>
                        <li className="email">
                          <a href="mailto:hello@travilo.com">
                            <i className="icon fa fa-envelope"></i>
                            hello@travilo.com
                          </a>
                        </li>
                      </ul>
                      <ul class="social-links clearfix">
                        <li>
                          <a href="#" className="facebook">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="linkedin">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="youtube">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
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
                            <li>
                              <a href="#">New York</a>
                            </li>
                            <li>
                              <a href="#">London</a>
                            </li>
                            <li>
                              <a href="#">Rome</a>
                            </li>
                            <li>
                              <a href="#">Mascot</a>
                            </li>
                            <li>
                              <a href="#">Dhaka</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4>Useful Links</h4>
                        <div className="links">
                          <ul>
                            <li>
                              <a href="#">About Us</a>
                            </li>
                            <li>
                              <a href="#">Company Profile</a>
                            </li>
                            <li>
                              <a href="#">Team Members</a>
                            </li>
                            <li>
                              <a href="#">Support</a>
                            </li>
                            <li>
                              <a href="#">Career</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget app-widget">
                    <h4>Download App</h4>
                    {/* Logo */}
                    <div className="app-info">
                      <p className="travilo-text">
                        Download our user-friendly app for seamless access to
                        real-time updates, and exclusive offers on the go.
                      </p>
                      <div className="links">
                        <div className="link">
                          <a href="#">
                            <img src={apple} alt=""></img>
                          </a>
                        </div>
                        <div className="link">
                          <a href="#">
                            <img src={play} alt=""></img>
                          </a>
                        </div>
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
              <div className="copyright">
                All rights researved <strong>Travilo</strong> &copy; 2023
              </div>
              <div className="bottom-links">
                <ul className="clearfix">
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* End main footer */}
    </div>
  );
};

export default AboutWeb;
