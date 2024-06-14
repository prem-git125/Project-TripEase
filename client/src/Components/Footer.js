import React from 'react'
import logo from '../assets/images/mainlogo.png';
const Footer = () => {
    const [formData,setFormData] = useState({})

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setFormData((prevData)=>({...prevData,[name]:value}));
		console.log(formData);
	}
    return (
        <div>
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
                                        <input type="email" name="email" onChange={(e)=>handleChange(e)}  placeholder="Type your email here" required />
                                    </div>
                                    <button type="submit" className="theme-btn"><span>Subscribe</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="auto-container">
                        <div className="content-box">
                            <div className="row clearfix">
                                <div className="footer-column col-xl-4 col-lg-3 col-md-6 col-sm-12 d-block mx-auto">
                                    <div className="footer-widget about-widget">
                                        <div className="footer-logo"><a href="index.html" title="Travilo"><img
                                            src={null} alt="" title="Travilo" /></a></div>
                                        <div className="footer-info">
                                            <ul className="info">
                                                <li className="address"><a href="#"><i className="icon fa fa-map-marker-alt"></i>
                                                    20, Love Street, Muscat, Oman</a></li>
                                                <li className="phone"><a href="tel:+96899999000"><i
                                                    className="icon fa-solid fa-phone"></i>
                                                    +96899999000</a></li>
                                                <li className="email"><a href="mailto:hello@travilo.com"><i
                                                    className="icon fa fa-envelope"></i>
                                                    hello@travilo.com</a></li>
                                            </ul>
                                            <ul className="social-links clearfix">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#" className="youtube"><i className="fab fa-youtube"></i></a></li>
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
                                                        <li><a href="#">Home</a></li>
                                                        <li><a href="#">News</a></li>
                                                        <li><a href="#">Explore Threads</a></li>
                                                        <li><a href="#">About</a></li>
                                                        <li><a href="#">Contact</a></li>
                                                    </ul>
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
                            <div className="copyright">All rights researved <strong>Travilo</strong> &copy; 2023</div>
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

        </div>
    
  )
}

export default Footer
