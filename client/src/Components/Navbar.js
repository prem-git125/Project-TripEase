import React, { useState } from 'react'
import logo from "../assets/images/favicon.png";
import menu from "../assets/images/icons/menu-icon.svg";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';
import "./CountryBtn.scss";

const Navbar2 = () => {
    const uname = localStorage.getItem("name")
    const uid = localStorage.getItem("uid")
    console.log(uid)
    const purl = localStorage.getItem("url")
    const [visible, setVisible] = useState(false)
    const guid = localStorage.getItem("gid");
    return (
        <>
            <div>
                <header className="main-header header-style-two">
                    <div className="header-top">
                        <div className="auto-container">
                            <div className="inner clearfix">
                                <div className="top-left clearfix">
                                    <ul className="info clearfix">
                                        <li><i className="icon fa fa-envelope"></i> <Link
                                            href="mailto:hello@tripease.com">hello@tripease.com</Link></li>
                                        <li><i className="icon fa fa-map-marker-alt"></i> <Link href="#">20, Desai Street, Sagrampura,
                                            Surat</Link></li>
                                    </ul>
                                </div>
                                <div className="top-right clearfix">
                                    <div className="login"><Link to="/login">Login / Signup</Link></div>
                                    <div className="lang-box">
                                        <div className="lang-btn clearfix"><span className="txt">En</span><span
                                            className="icon far fa-angle-down"></span>
                                        </div>
                                        <ul className="lang-list">
                                            <li><Link href="#">Tur</Link></li>
                                            <li><Link href="#">Esp</Link></li>
                                            <li><Link href="#">Rus</Link></li>
                                            <li><Link href="#">Hin</Link></li>
                                        </ul>
                                    </div>
                                    <div className="social">
                                        <ul className="social-links clearfix">
                                            <li><Link href="#" className="facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#" className="twitter"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link href="#" className="youtube"><i className="fab fa-youtube"></i></Link></li>
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
                                    <div className="logo"><Link href="index.html" title="Travilo"><img src={logo}
                                        alt="TripEase" title="TripEase"></img></Link></div>
                                </div>

                                <div className="outer clearfix">
                                    <div className="nav-box clearfix">

                                        <div className="nav-outer clearfix">
                                            <nav className="main-menu">
                                                <ul className="navigation clearfix">
                                                    <li className="dropdown"><Link to={"/home"}>Home</Link></li>
                                                    <li className="dropdown"><Link to={`/ExploreVlogs/${guid}`}>Explore Vlogs</Link></li>
                                                    {/* {guid != null ? <li className="dropdown"><Link to={`/AddVlogs/${guid}`}>Add Vlogs</Link></li> : <></>} */}
                                                    {/* <li><Link to="/ExploreDiaries">Diaries</Link></li> */}
                                                    {guid == null ? <li className="dropdown"><Link to={`/guiderform/${uid}`}>Become A Guider</Link></li> : <></>}

                                                    <li className="dropdown"><Link to={`/explorePost`}>Explore Posts</Link></li>

                                                    <li><Link to={"/AboutUs"} >About</Link></li>
                                                    
                                                    <li><Link to="/contactus">Contact</Link></li>

                                                    <li className='d-flex align-item-center'>
                                                        <div className='d-flex align-item-center pt-1' >
                                                            <Link className='text-dark text-decoration-none position-relative' to={guid !== null ? `/guiderprofile/${uid}` : `/profile/${uid}`}>
                                                                {/* <Link className='text-dark text-decoration-none position-relative' to={`/profile/${uid}`}> */}
                                                                <img src={purl} alt={uname} className='rounded-circle' style={{ height: "35px", width: "35px" }}></img>
                                                                <span className='ms-2 text-capitalize mt-1'>Welcome! <span className='fw-bold'>{uname}</span><sup>{guid != null ? "" : ""}</sup></span>

                                                            </Link>
                                                        </div>
                                                    </li>
                                                   
                                                </ul>
                                            </nav>

                                        </div>
                                    </div>
                                    <div className="nav-toggler">
                                        <button className="hidden-bar-opener" onClick={e => setVisible(!visible)}><span className="icon"><img
                                            src={menu} alt=""></img></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div className="menu-backdrop"></div>
                <div className={visible ? "hidden-bar visible-sidebar" : "hidden-bar"}>

                    <div className="hidden-bar visible-sidebar">

                        <div className="hidden-bar-wrapper">
                            <div className="hidden-bar-closer" onClick={e => setVisible(!visible)}><span className="icon"><svg className="icon-close" role="presentation" viewBox="0 0 16 14">
                                <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                            </svg></span></div>
                            <div className="nav-logo-box">

                                <div className="logo"><Link href="index-2.html" title="Travilo"><img src="assets/images/logo.png" alt="" title="Travilo"></img></Link></div></div>

                            <nav className="side-menu">

                                <ul className="navigation clearfix">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link >Explore Vlogs</Link></li>
                                    {guid != null ? <li className="dropdown"><Link to={`/AddVlogs/${uid}`}>Add Vlogs</Link></li> : <></>}
                                    <li><Link to="/contactus">Contact</Link></li>
                                    <li><Link to="/contactus">Diaries</Link></li>
                                    {guid == null ? <li className="dropdown"><Link to={`/guiderform/${uid}`}>Become A Guider</Link></li> : <></>}
                                    <li><Link href="destinations.html">Explore Threads</Link></li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>


                {/* <Link className='btn btn-warning text-white px-3 rounded-pill position-fixed fw-bold' style={{zIndex:"999",bottom:"50px",right:"50px"}}>Explore Threads</Link> */}

                {/* <div class="buttons position-fixed fw-bold" style={{ zIndex: "999", bottom: "30px", right: "30px" }}>
                    <button class="blob-btn">
                        Explore Threads
                        <span class="blob-btn__inner">
                            <span class="blob-btn__blobs">
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                                <span class="blob-btn__blob"></span>
                            </span>
                        </span>
                    </button>
                    <br />

                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </div> 
                
                */}

            </div>


        </>
    )
}

export default Navbar2
