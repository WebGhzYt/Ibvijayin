/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { postApi } from '../services/services';
import { APIPATH } from '../api/urls';
import { useAuthStore } from '../store/auth/authStore';
import { toast } from 'react-toastify';
const Contact = () => {
    const { token, logout } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const [aboutData, setAboutData] = useState<any>('');
    useEffect(() => {
        getAbout();
    }, []);
    const getAbout = () => {
        setLoading(true);
        postApi(APIPATH.aboutUs, {}, token, logout)
            .then((resp) => {
                const { success, data, message } = resp;
                if (success) {
                    setAboutData(data);
                    // setOtherBlogs(other_blogs);
                } else {
                    toast.error(message);
                }
            })
            .catch((err) => console.log(err)).finally(() => {
                setLoading(false);
            });
    };
    return (
        <>
            <section>
                <div className="other-pages-hero-section text-white">
                    <div className="container">
                        <div className="current-pages-path">
                            <a href="index.html" className="text-white d-inline">Home</a>
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="contact.html" className="text-white d-inline">Contact Us</a>
                        </div>
                        <div className="current-page-name">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="current-page-pera">
                            <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac
                                aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="other-page-section">
                    <div className="container">
                        <div className="contact-page-cards">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="contact-us-card">
                                        <a href="#">
                                            <div className="contact-card-icon">
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                            <h3>Send Us Mail</h3>
                                            <p>welcome@IB Vijayin.com</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="contact-us-card">
                                        <a href="#">
                                            <div className="contact-card-icon">
                                                <i className="fa-solid fa-mobile-screen-button"></i>
                                            </div>
                                            <h3>Call Us</h3>
                                            <p>+01 9999-888-999</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="contact-us-card">
                                        <a href="#">
                                            <div className="contact-card-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <h3>Our Location</h3>
                                            <p>Lane no-5, Padmawati Colony A Kings Road, Jaipur-302019, Rajasthan</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="contact-form-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 mx-auto">
                                <div className="contact-card">
                                    <div className="others-top-heading">
                                        <h2>SEND US A <span>MESSAGE</span></h2>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <label className="form-label">Name</label>
                                                <div className="contact-input-group">
                                                    <input type="text" className="form-control" id="exampleInputname"
                                                        placeholder="Enter Name" required />
                                                    <span className="contact-input-icon">
                                                        <i className="fa-regular fa-user"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label className="form-label">Phone Number</label>
                                                <div className="contact-input-group">
                                                    <input type="text" className="form-control" id="exampleInputphone"
                                                        placeholder="Enter Phone Number" required />
                                                    <span className="contact-input-icon">
                                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <label className="form-label">Email Address</label>
                                                <div className="contact-input-group">
                                                    <input type="text" className="form-control" id="exampleInputemail"
                                                        placeholder="Enter Email Address" required />
                                                    <span className="contact-input-icon">
                                                        <i className="fa-solid fa-at"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <label className="form-label">Message</label>
                                                <div className="contact-input-group">
                                                    <textarea className="form-control" id="exampleInputmsg"
                                                        placeholder="Enter Message" required />
                                                    <span className="contact-input-icon">
                                                        <i className="fa-regular fa-message"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn cinfo-submit-btn">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="contact-map-section">
                    <div className="map-align d-none d-sm-block">
                        <div className="map">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;