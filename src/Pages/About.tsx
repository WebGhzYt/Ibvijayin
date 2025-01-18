/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import image27 from '../assets/img/image 27.png'
import { postApi } from '../services/services';
import { APIPATH } from '../api/urls';
import { useAuthStore } from '../store/auth/authStore';
import { toast } from 'react-toastify';
import LoaderWithBackground from '../components/LoaderWithBackground.tsx';
const About = () => {
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
            .catch((err) => console.log(err)).finally(()=>{
                setLoading(false);
            });
    };
    return (
        <section>
            <LoaderWithBackground visible={loading}/>
            <div className="about-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="about-page-card">
                                <div className="about-page-left-heading">
                                    <h2>About IB Vijayin </h2>
                                </div>
                                <div className="about-page-content">
                                    <h2 className="sub-heading">{aboutData?.title}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: aboutData?.description }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="about-page-card">
                                <div className="about-page-image">
                                    <img src={image27} alt="#" className="img-fluid" />
                                </div>
                                <div className="about-page-counters">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-6 mb-4">
                                            <div className="about-page-couter-card">
                                                <p>20k</p>
                                                <h3>Happy students</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-6 mb-4">
                                            <div className="about-page-couter-card">
                                                <p>100k</p>
                                                <h3>Mock Tests</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-6 mb-4">
                                            <div className="about-page-couter-card">
                                                <p>30k</p>
                                                <h3>Practice Papers</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-6 mb-4">
                                            <div className="about-page-couter-card">
                                                <p>3k</p>
                                                <h3>Video Lectures</h3>
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

    );
}

export default About;