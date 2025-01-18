/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Frame3403 from '../assets/img/Frame 3403.png'
import { useEffect, useState } from 'react';
import { APIPATH, IMAGE_URL } from '../api/urls';
import { postApi } from '../services/services';
import { toast } from 'react-toastify';
import { useAuthStore } from '../store/auth/authStore';
import LoaderWithBackground from '../components/LoaderWithBackground';
import { useParams } from 'react-router-dom';
const BlogDetails = () => {
    const { token, logout } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const slug = id;
    const [blogData, setBlogData] = useState<any>("");
    // const [otherBlogs, setOtherBlogs] = useState<any>([]);
    // console.log(otherBlogs, 'otherBlogs');
    useEffect(() => {
        getBlogDetails();
    }, []);
    const getBlogDetails = () => {
        setLoading(true);
        postApi(APIPATH.blogDetails, {slug}, token, logout)
            .then((resp) => {
                const { status, data, message } = resp;
                if (status) {
                    setBlogData(data);
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
        <div>
            <section>
                <LoaderWithBackground visible={loading}/>
                <div className="blog-page mb-60">
                    <div className="container">
                        <div className="blog-details-heading">
                            <h3>{blogData?.title}</h3>
                        </div>
                        <div className="blog-upload-date">
                            <p>20-Feb-24</p>
                        </div>
                        <div className="blog-details-image">
                            <img src={IMAGE_URL + blogData?.image} alt="#" className="img-fluid" />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: blogData?.description }} />
                    </div>
                </div>
            </section>
            <section>
                <div className="blog-section">
                    <div className="container">
                        <h2 className="sub-heading text-center">Read Our Latest <span> Blogs</span> </h2>
                        <p className="text text-center mb-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                            vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <div className="blogs-slide">
                            <div className="owl-carousel blog-slider">
                                <div className="item">
                                    <div className="blogs-item-card">
                                        <div className="blogs-date">
                                            <span className="blogs-badge-btn">20-Feb-24</span>
                                        </div>
                                        <div className="blog-image">
                                            <img src={Frame3403} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="blogs-text">
                                            <h3>How Things Work: AnIntroduction to Physics</h3>
                                        </div>
                                        <div className="blogs-link-btn">
                                            <button className="blogs-btn">Read More <i className="fa-solid fa-arrow-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-all-btn mt-4">
                            <a href="blog-listing.html" className="view-btn">View All Blogs</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default BlogDetails;