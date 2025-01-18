import { Link } from 'react-router-dom';
import footer_logo from '../assets/img/footer-logo.png';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (

        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-3 mb-4">
                            <div className="footer-first">
                                <div className={footer_logo}>
                                    <img src={footer_logo} alt="#" className="img-fluid" />
                                </div>
                                <p className="footer-text">Welcome to IBVijayin, your ultimate destination for academic
                                    excellence across various educational boards like IB, CBSE, and GCSE. We are a
                                    comprehensive learning platform designed to simplify your journey to academic success by
                                    providing everything you need, all in one place.</p>
                                <div className="social-links">
                                    <a href="#" className="social-btn"><i className="fa-brands fa-facebook" /></a>
                                    <a href="#" className="social-btn"><i className="fa-brands fa-square-instagram" /></a>
                                    <a href="#" className="social-btn"><i className="fa-brands fa-linkedin" /></a>
                                    <a href="#" className="social-btn"><i className="fa-brands fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <div className="footer-mid">
                                <h3 className="footer-link-heading">QUICK LINKS</h3>
                                <ul className="footer-pages-link">
                                    <li>
                                        <Link
                                            className={`fpage-link`}
                                            to="/"
                                        >Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`fpage-link`}
                                            to="/about"
                                        >About us</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`fpage-link`}
                                            to="/course"
                                        >Course</Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`fpage-link`}
                                            to="/blog"
                                        >Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="fpage-link">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-4">
                            <div className="footer-mid">
                                <h3 className="footer-link-heading">INFORMATION</h3>
                                <ul className="footer-pages-link">
                                    {/* <li>
                          <a href="#" class="fpage-link">Login & Register
                          </a>
                      </li> */}
                                    <li>
                                        <Link to="/terms" className="fpage-link">Terms &amp; Conditions </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy" className="fpage-link">Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/refund-privacy" className="fpage-link">Refund policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/faq" className="fpage-link">FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 mb-4">
                            <div className="footer-last">
                                <h3 className="footer-link-heading">STAY CONNECTED</h3>
                                <ul className="footer-contact-link">
                                    <li>
                                        <a href="#" className="footer-contact-btn">
                                            <i className="fa-solid fa-location-dot" />
                                            Lane no-5, Padmawati Colony A Kings Road, Jaipur-302019, Rajasthan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+910123456789" className="footer-contact-btn">
                                            <i className="fa-solid fa-phone" />
                                            +91 12345 45670
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:welcome@IB Vijayin.com" className="footer-contact-btn">
                                            <i className="fa-solid fa-envelope" />
                                            welcome@IB Vijayin.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p>Copyright © <span> {currentYear} IB Vijayin</span> . All Rights Reserved.</p>
            </div>
        </footer>

    );
}

export default Footer;