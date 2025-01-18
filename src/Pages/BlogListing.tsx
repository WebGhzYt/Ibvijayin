/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { APIPATH, IMAGE_URL } from '../api/urls'
import { postApi } from '../services/services'
import { useAuthStore } from '../store/auth/authStore'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import LoaderWithBackground from '../components/LoaderWithBackground.tsx'
const BlogListing = () => {
    const { token, logout } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const [blogList, setBlogList] = useState<any>([]);
    useEffect(() => {
        getBlogList();
    }, []);
    const getBlogList = () => {
        setLoading(true);
        postApi(APIPATH.blogList, {}, token, logout)
            .then((resp) => {
                const { status, data, message } = resp;
                if (status) {
                    setBlogList(data);
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
            <div className="blog-page">
                <div className="container">
                    <div className="blog-page-top-heading">
                        <h2>Blog</h2>
                    </div>
                    {/* <div className="top-first-blog-card">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 mb-4">
                                <div className="blogs-top-item-card">
                                    <div className="blogs-top-date">
                                        <span className="blogs-badge-btn">20-Feb-24</span>
                                    </div>
                                    <div className="blog-top-image">
                                        <img src={image9} alt="#" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="blogs-text mb-3">
                                    <h3>Lorem Ipsum&nbsp;has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type&nbsp;...</h3>
                                </div>
                                <p className="text mb-3">Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br />
                                    It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <br />
                                    It was popularised in the 1960s with the
                                    release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="blogs-listing-section">
                        <div className="row">
                            {blogList.map((item: any, index: number) => (
                                <div key={index} className="col-xl-3 col-lg-4 col-sm-6 mb-4">
                                    <div className="blogs-item-card">
                                        <div className="blogs-date">
                                            <span className="blogs-badge-btn">20-Feb-24</span>
                                        </div>
                                        <div className="blog-image">
                                            <img style={{height: 250}} src={IMAGE_URL + item?.image} alt="#" className="img-fluid" />
                                        </div>
                                        <div className="blogs-text">
                                            <h3>{item?.title}</h3>
                                        </div>
                                        <div className="blogs-link-btn">
                                            <Link to={`/blog/details/${item?.slug}`} className="blogs-btn">
                                                Read More <i className="fa-solid fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default BlogListing;