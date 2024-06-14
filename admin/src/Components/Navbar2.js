import React from 'react'
import logo from "../assets/images/favicon.png";
import menu from "../assets/images/icons/menu-icon.svg";
import "bootstrap/dist/js/bootstrap.min.js";

const Navbar2 = () => {
    return (
        <div>
            <header className="main-header header-style-two">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner clearfix">
                            <div className="top-left clearfix">
                                <ul className="info clearfix">
                                    <li><i className="icon fa fa-envelope"></i> <a
                                        href="mailto:hello@tripease.com">hello@tripease.com</a></li>
                                    <li><i className="icon fa fa-map-marker-alt"></i> <a href="#">20, Desai Street, Sagrampura,
                                        Surat</a></li>
                                </ul>
                            </div>
                            <div className="top-right clearfix">
                                <div className="login"><a href="#">Login / Signup</a></div>
                                <div className="lang-box">
                                    <div className="lang-btn clearfix"><span className="txt">En</span><span
                                        className="icon far fa-angle-down"></span>
                                    </div>
                                    <ul className="lang-list">
                                        <li><a href="#">Tur</a></li>
                                        <li><a href="#">Esp</a></li>
                                        <li><a href="#">Rus</a></li>
                                        <li><a href="#">Hin</a></li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul className="social-links clearfix">
                                        <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#" className="youtube"><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-upper">
                    <div className="auto-container">

                        <div className="main-box clearfix">

                            <div className="logo-box">
                                <div className="logo"><a href="index.html" title="Travilo"><img src={logo}
                                    alt="TripEase" title="TripEase"></img></a></div>
                            </div>

                            <div className="outer clearfix">
                                <div className="nav-box clearfix">

                                    <div className="nav-outer clearfix">
                                        <nav className="main-menu">
                                            <ul className="navigation clearfix">
                                                <li className="current dropdown"><a href="index.html">Home</a></li>
                                                <li className="dropdown"><a href="tour-list.html">News</a>

                                                </li>
                                                <li className="dropdown"><a href="destinations.html">Explore Threads</a>
                                                    {/* <ul>
                                                        <li><a href="destinations.html">All Destinations</a></li>
                                                        <li><a href="destination-single.html">Destination Single</a></li>
                                                        <li><a href="hotels.html">Hotels</a></li>
                                                        <li><a href="hotel-single.html">Hotel Details</a></li>
                                                    </ul> */}
                                                </li>
                                                <li><a href="about.html">About</a></li>

                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>

                                    </div>


                                </div>

                                <div className="links-box clearfix">
                                    <div className="link call-to">
                                        <a href="tel:+96899999000"><i className="icon fa-solid fa-phone"></i> Call Us <span
                                            className="nmbr">+96899999000</span></a>
                                    </div>
                                </div>


                                <div className="nav-toggler">
                                    <button className="hidden-bar-opener"><span className="icon"><img
                                        src="assets/images/icons/menu-icon.svg" alt=""></img></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <div className="menu-backdrop"></div>
            <div className="hidden-bar">

                <div className="hidden-bar-wrapper">
                    <div className="hidden-bar-closer"><span className="icon"><svg className="icon-close" role="presentation"
                        viewBox="0 0 16 14">
                        <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
                    </svg></span></div>
                    <div className="nav-logo-box">

                    </div>

                    <nav className="side-menu">

                    </nav>

                    <div className="links-box clearfix">
                        <div className="clearfix">
                            <div className="link"><a href="contact.html" className="theme-btn btn-style-one"><span>Login /
                                Signup</span></a></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar2
