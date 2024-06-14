import React from "react";
import { useState , useEffect } from "react";
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
// import logo from "../assets/images/logo-white.png";
import logo from "../assets/images/favicon.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../Components/Navbar";

const AboutWeb = () => {

  const [categoryCount, setCategoryCount] = useState(0);
	const [postCount, setPostCount] = useState(0);
	const [vlogCount, setVlogCount] = useState(0);
	const [diaryCount, setDiaryCount] = useState(0);

  useEffect(() => {
		// Fetch user count from backend API
		fetch("http://localhost:7000/api/categorycount")
		  .then(response => response.json())
		  .then(data => setCategoryCount(data.totalCategory))
		  .catch(error => console.error('Error fetching category count:', error));
	  }, []);

    useEffect(() => {
      // Fetch user count from backend API
      fetch("http://localhost:7000/api/vlogcount")
        .then(response => response.json())
        .then(data => setVlogCount(data.totalVlog))
        .catch(error => console.error('Error fetching vlog count:', error));
      }, []);

      useEffect(() => {
        // Fetch user count from backend API
        fetch("http://localhost:7000/api/postcount")
          .then(response => response.json())
          .then(data => setPostCount(data.totalPost))
          .catch(error => console.error('Error fetching post count:', error));
        }, []);

        useEffect(() => {
          // Fetch user count from backend API
          fetch("http://localhost:7000/api/diariescount")
            .then(response => response.json())
            .then(data => setDiaryCount(data.totalDiary))
            .catch(error => console.error('Error fetching diaries count:', error));
          }, []);

  return (
    <>
    <Navbar></Navbar>
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
                  <Link to={"/home"}>Home</Link>
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
                  <p className="tripease-text">
                  Tripease offers a unique travel platform with features like Post Diaries for sharing adventures, Follower/Following Functionality to connect with other travelers, and Guider Support for expert guidance. Share your journey through engaging diaries, connect with a community of fellow explorers, and receive personalized assistance from experienced guides. Whether you seek travel inspiration, want to share experiences, or need on-the-go support, Tripease has you covered. Join us to discover a seamless and enriching travel experience, where every adventure is enhanced by our innovative features and supportive community. Start exploring the world with Tripease today!







                  </p>
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
      <div className="intro-two" style={{margin:'0px',padding:'0px'}}>
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
                <div className="tripease-text">
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
                <h4>Post Diaries</h4>
                <div className="tripease-text">
                Share your travel adventures and experiences with our Post Diaries feature. Document your journey and inspire others with your stories and photos.
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
                <h4>Guider Support</h4>
                <div className="tripease-text">
                Need guidance or assistance during your travels? Our Guider Support feature connects you with experienced guides who can provide local insights, tips, and support to enhance your trip.
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
                      <span>Your Trusted Travel Guiders</span>
                    </h2>
                    <p className="tripease-text">
                    At Tripease, our Guiders feature provides travelers with invaluable support and expertise during their journeys. Our experienced and knowledgeable guides offer local insights, travel tips, and assistance to ensure a seamless and enriching travel experience. Whether you're exploring a new city, embarking on an adventure tour, or seeking cultural immersion, our Guiders are your ultimate companions. Benefit from personalized recommendations, insider knowledge, and on-the-ground assistance to make the most out of your trip. With Tripease Guiders, you can navigate unfamiliar destinations with confidence, unlock hidden gems, and create unforgettable memories along the way. Embark on your next adventure with our trusted Guiders by your side.
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
                          <h4>Innovative Tour</h4>
                          <div className="tripease-text">
                            Experience our innovative tour designed to
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
                          <h4>Expert Guider</h4>
                          <div className="tripease-text">
                            Embark on your journey with confidence, guided by
                            our expert travel guiders who share their local
                            expertise and insider knowledge.
                          </div>
                        </div>
                      </div>
                     
                      <div className="feature col-lg-6 col-md-6 col-sm-12">
                        <div className="inner-box">
                          <div className="icon">
                            <img src={fcon13} alt=""></img>
                          </div>
                          <h4>High Quality Plateform</h4>
                          <div className="tripease-text">
                          At Tripease, we offer more than just tours; we provide a platform for you to share, connect, and receive personalized support for your travel experiences. Join us and explore the world with ease!
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
                        {diaryCount}
                      </span>
                      <i></i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Diaries
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
                        {categoryCount}
                      </span>
                      <i></i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Category
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
                        {postCount}
                      </span>
                      <i></i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Post
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
                        {vlogCount}
                      </span>
                      <i></i>
                    </div>
                  </div>
                  <div className="fact-title">
                    Total <br />
                    Vlog
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

    
      {/* End Testimonials Section */}
      {/* Partner Section */}

      {/*End Partner Section */}

      {/* main footer */}

      <Footer/>
      
      {/* End main footer */}
    </div>
    </>
  );
};

export default AboutWeb;
