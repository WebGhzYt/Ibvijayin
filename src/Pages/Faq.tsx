/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { postApi } from '../services/services';
import { APIPATH } from '../api/urls';
import { useAuthStore } from '../store/auth/authStore';
import { toast } from 'react-toastify';
const Faq = () => {
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
                            <a href="contact.html" className="text-white d-inline">FAQ</a>
                        </div>
                        <div className="current-page-name">
                            <h2>FAQ</h2>
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
                        <div className="faq-page-section">
                            <div className="others-top-heading">
                                <h2>Frequently Asked Questions <span>(FAQ)</span></h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    Accordion Item #1
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it look like readable
                                                    English. Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsu
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                    Accordion Item #2
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it look like readable
                                                    English. Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsu
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                    Accordion Item #3
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it look like readable
                                                    English. Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsu
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false" aria-controls="collapseFour">
                                                    Accordion Item #4
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse"
                                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it look like readable
                                                    English. Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsu
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                    aria-expanded="false" aria-controls="collapseFive">
                                                    Accordion Item #5
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse"
                                                aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it look like readable
                                                    English. Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsu
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingSix">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                    aria-expanded="false" aria-controls="collapseSix">
                                                    Accordion Item #6
                                                </button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse"
                                                aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    It is a long established fact that a reader will be distracted by the
                                                    readable content of a page when looking at its layout. The point of using
                                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it look like readable
                                                    English. Many desktop publishing packages and web page editors now use Lorem
                                                    Ipsu
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;