/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import discount from '../assets/img/discount.png'
import Visa from '../assets/img/Visa.png'
import Mastercard from '../assets/img/Mastercard.png'
import PayPal from '../assets/img/PayPal.png'
import GooglePay from '../assets/img/GooglePay.png'
import GooglePay1 from '../assets/img/GooglePay-1.png'
import image3 from '../assets/img/image-3.png'
import { useEffect, useState } from 'react'
import { postApi } from '../services/services'
import { APIPATH, IMAGE_URL } from '../api/urls'
import { useAuthStore } from '../store/auth/authStore'
import { toast } from 'react-toastify';
import LoaderWithBackground from '../components/LoaderWithBackground.tsx'
import { Link, useParams } from 'react-router-dom'

const CourseDetails = () => {
    const { token, logout } = useAuthStore();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const [courseData, setCourseData] = useState<any>('');
    const [courseAll, setCourseAll] = useState<any>('');
    const [teacher, setTeacher] = useState([]);
    const slug = id;
    useEffect(() => {
        getCourseData();
    }, []);
    const getCourseData = () => {
        setLoading(true);
        postApi(APIPATH.courseDetails, { course_slug: slug, user_id: 8 }, token, logout)
            .then((resp) => {
                const { success, data, message, teacher } = resp;
                if (success) {
                    setCourseAll(resp)
                    setCourseData(data);
                    setTeacher(teacher);
                } else {
                    toast.error(message);
                }
            })
            .catch((err) => console.log(err)).finally(()=>{
                setLoading(false);
            });
    };
    return (
        <>
            <section>
                <LoaderWithBackground visible={loading}/>
                <div className="prdt-details-page-header-section">
                    <div className="container">
                        <div className="links-histry-step text-white mb-3">
                            <Link to="/" className="text-white d-inline">
                                Home
                            </Link>
                            <i className="fa-solid fa-angle-right" />
                            <Link to="/course" className="text-white d-inline">
                                listing Course
                            </Link>
                            <i className="fa-solid fa-angle-right" />
                            <a className="text-white d-inline">
                                Details
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="prdt-details-left">
                                    <h2 className="prdt-page-top-heading">
                                        {courseData?.course_name}
                                    </h2>
                                    <p className="text text-white">
                                        {courseData?.content}
                                    </p>
                                    <div className="prdt-value-price">
                                        <p>
                                            ₹ {courseData?.offer_price} <span>₹ {courseData?.price}</span>
                                        </p>
                                        <span className="predt-teg">{courseData?.batch_type}</span>
                                    </div>
                                    <div className="prdt-detail-hero-btm">
                                        <div className="prdt-detel-cards">
                                            <h3>Education Level</h3>
                                            <p>{courseData?.education_level}</p>
                                        </div>
                                        {/* <div class="prdt-detel-cards">
                              <h3>Reviews</h3>
                              <div class="course-item-review">
                                  <div class="course-stars">
                                      <div class="active star">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                              viewBox="0 0 192 181" fill="none">
                                              <path
                                                  d="M96 0L118.451 69.0983H191.106L132.327 111.803L154.779 180.902L96 138.197L37.2215 180.902L59.6729 111.803L0.894348 69.0983H73.5486L96 0Z"
                                                  fill="#F99100" />
                                          </svg>
                                      </div>
                                  </div>
                                  <span class="avrg-reviews">(4.8)</span>
                                  <span class="total-reviews">120</span>
                              </div>
                          </div> */}
                                        <div className="prdt-detel-cards">
                                            <h3>Duration</h3>
                                            <p>{courseData?.duration} Months</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <div className="prdt-detail-right">
                                    <div className="prodt-right-card prodt-rnew-card">
                                        <img
                                            src={IMAGE_URL + courseData?.image}
                                            alt="#"
                                            className="prodt-img"
                                        />
                                        <div className="cprice-right-align">
                                            <p className="offer-price mb-0">
                                                {" "}
                                                ₹ {courseData?.offer_price} <span>₹ {courseData?.price}</span>{" "}
                                            </p>
                                            <span className="disct-present-teg">({courseData?.discount}% OFF)</span>
                                        </div>
                                        <div className="cart-detail-card mb-4">
                                            <h4>Payment Details</h4>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>Price</td>
                                                        <td>₹ {courseData?.offer_price}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discount</td>
                                                        <td className="clr-grn">- ₹ 0</td>
                                                    </tr>
                                                    <tr>
                                                        <td>GST Amount(18%)</td>
                                                        <td>₹ {courseData?.offer_price*18/100}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total Payable Amount</th>
                                                        <th>₹ {courseData?.offer_price - courseData?.offer_price*18/100}</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="prdt-apply-coup">
                                                <div className="prdt-apply-coup-top">
                                                    <div className="prdt-act-heading">
                                                        <img
                                                            src={discount}
                                                            alt="#"
                                                            className="prdt-act-img"
                                                        />
                                                        <p className="mb-0">Apply Coupon</p>
                                                    </div>
                                                    <button className="aply-coup-btn">Apply</button>
                                                </div>
                                                <div className="prdt-apply-coup-bottom">
                                                    <button
                                                        className="prdt-modal-open"
                                                        type="button"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                    >
                                                        View Coupon Code{" "}
                                                        <i className="fa-solid fa-angle-right" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* after Applied a coupen code */}
                                            {/* <div class="prdt-apply-coup">
                                  <div class="prdt-apply-coup-top">
                                      <div class="prdt-act-heading">
                                          <img src="/src/assets/img/discount.png" alt="#" class="prdt-act-img">
                                          <p class="mb-0">Applied Coupon
                                              <span class="coupen-cd">IV200</span>
                                          </p>
                                      </div>
                                      <button class="aply-coup-btn remv-btn">Remove</button>
                                  </div>
                                  <div class="prdt-apply-coup-bottom">
                                      <button class="prdt-modal-open" type="button" data-bs-toggle="modal"
                                          data-bs-target="#exampleModal">View Coupon Code <i
                                              class="fa-solid fa-angle-right"></i></button>
                                  </div>
                              </div> */}
                                            <div className="pay-throw-images">
                                                <img
                                                    src={Visa}
                                                    alt="#"
                                                    className="trans-img"
                                                />
                                                <img
                                                    src={Mastercard}
                                                    alt="#"
                                                    className="trans-img"
                                                />
                                                <img
                                                    src={PayPal}
                                                    alt="#"
                                                    className="trans-img"
                                                />
                                                <img
                                                    src={GooglePay}
                                                    alt="#"
                                                    className="trans-img"
                                                />
                                                <img
                                                    src={GooglePay1}
                                                    alt="#"
                                                    className="trans-img"
                                                />
                                            </div>
                                            <div className="note-cart-items">
                                                <p className="text-center">
                                                    Safe and secure payment | 100% Authentic resources
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cart-action-btn">
                                            <a href="#" className="primery-btn btn w-100">
                                                Pay Now ₹ {courseData?.offer_price - courseData?.offer_price*18/100}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal */}
            <div
                className="modal fade apply-copn-modal"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Select Coupon
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="my-coupns-modal">
                                <div className="d-flex gap-1 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="search"
                                        placeholder="Enter Coupon Code"
                                        aria-label="Enter Coupon Code"
                                        aria-describedby="basic-addon2"
                                    />
                                    <button type="button" className="btn btn-aply-cpn-modal">
                                        Apply
                                    </button>
                                </div>
                                <div className="select-coupen-check mb-4">
                                    <div className="select-cpn-crad">
                                        <div className="mb-4">
                                            <input
                                                type="radio"
                                                className="btn-check couponDiscount"
                                                name="options-outlined"
                                                id="first-code-outlined"
                                                autoComplete="off"
                                            />
                                            <label
                                                className="btn aply-btn-cpn-code"
                                                htmlFor="first-code-outlined"
                                            >
                                                <p className="cpncode-title">Flat 200 INR Discount</p>
                                                <p className="cpncode mb-0">
                                                    Coupon Code : <span className="code-cpn">IV200</span>
                                                </p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="select-cpn-crad">
                                        <div className="mb-4">
                                            <input
                                                type="radio"
                                                className="btn-check couponDiscount"
                                                name="options-outlined"
                                                id="second-code-outlined"
                                                autoComplete="off"
                                            />
                                            <label
                                                className="btn aply-btn-cpn-code"
                                                htmlFor="second-code-outlined"
                                            >
                                                <p className="cpncode-title">Flat 100 INR Discount</p>
                                                <p className="cpncode mb-0">
                                                    Coupon Code : <span className="code-cpn">IV100</span>
                                                </p>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="select-cpn-crad">
                                        <div className="mb-4">
                                            <input
                                                type="radio"
                                                className="btn-check couponDiscount"
                                                name="options-outlined"
                                                id="third-code-outlined"
                                                autoComplete="off"
                                            />
                                            <label
                                                className="btn aply-btn-cpn-code"
                                                htmlFor="third-code-outlined"
                                            >
                                                <p className="cpncode-title">Flat 300 INR Discount</p>
                                                <p className="cpncode mb-0">
                                                    Coupon Code : <span className="code-cpn">IV300</span>
                                                </p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="prdt-details-section-tabs">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#Course-information" className="nav-link active">
                                            Course Information
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Instructor" className="nav-link">
                                            Instructor
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#Reviews" className="nav-link">
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 mb-4">
                            <div className="prdt-details-first-tab" id="Course-information">
                                <div dangerouslySetInnerHTML={{ __html: courseData?.description }} />
                            </div>
                        </div>
                        <div className="prdt-details-second-tab" id="Instructor">
                            <div className="prdt-details-heading">
                                <h2>
                                    Our Professional <span> Instructor</span>{" "}
                                </h2>
                            </div>
                            <div className="row">
                                {teacher.map((item: any, index: number) => (
                                    <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6 mb-3">
                                        <div className="educator-card">
                                            <div className="educator-image">
                                                <img
                                                    src={IMAGE_URL+'/' + item?.image}
                                                    alt="#"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="eduactor-name">
                                                <p>{item?.name}</p>
                                            </div>
                                            <div className="eduactor-prop">
                                                <p>{item?.subject}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {courseAll?.total_reviews > 0 &&
                        <div className="prdt-details-third-tab" id="Reviews">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="prdt-progress-section">
                                        <h3 className="listing-heading">Learner reviews</h3>
                                        <div className="course-item-review">
                                            <div className="course-stars">
                                                <div className="active star">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        viewBox="0 0 192 181"
                                                        fill="none"
                                                    >
                                                        <path
                                                            d="M96 0L118.451 69.0983H191.106L132.327 111.803L154.779 180.902L96 138.197L37.2215 180.902L59.6729 111.803L0.894348 69.0983H73.5486L96 0Z"
                                                            fill="#F99100"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="avrg-reviews">({courseAll?.average_rating})</span>
                                            <span className="total-reviews">{courseAll?.total_reviews}</span>
                                        </div>
                                        <div className="prdt-pregress-card">
                                            <div className="review-progress">
                                                <span className="review-type">5 Star</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${(courseAll?.ratings?.["5_star"] || 0) / (courseAll?.total_ratings || 1) * 100}%`,
                                                        }}
                                                        aria-valuenow={(courseAll?.ratings?.["5_star"] || 0) / (courseAll?.total_ratings || 1) * 100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                                <span className="review-present">{courseAll?.ratings?.["5_star"]}</span>
                                            </div>
                                            <div className="review-progress">
                                                <span className="review-type">4 Star</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${(courseAll?.ratings?.["4_star"] || 0) / (courseAll?.total_ratings || 1) * 100}%`,
                                                        }}
                                                        aria-valuenow={(courseAll?.ratings?.["4_star"] || 0) / (courseAll?.total_ratings || 1) * 100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                                <span className="review-present">{courseAll?.ratings?.["4_star"]}</span>
                                            </div>
                                            <div className="review-progress">
                                                <span className="review-type">3 Star</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${(courseAll?.ratings?.["3_star"] || 0) / (courseAll?.total_ratings || 1) * 100}%`,
                                                        }}
                                                        aria-valuenow={(courseAll?.ratings?.["3_star"] || 0) / (courseAll?.total_ratings || 1) * 100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                                <span className="review-present">{courseAll?.ratings?.["3_star"]}</span>
                                            </div>
                                            <div className="review-progress">
                                                <span className="review-type">2 Star</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${(courseAll?.ratings?.["2_star"] || 0) / (courseAll?.total_ratings || 1) * 100}%`,
                                                        }}
                                                        aria-valuenow={(courseAll?.ratings?.["2_star"] || 0) / (courseAll?.total_ratings || 1) * 100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                                <span className="review-present">{courseAll?.ratings?.["2_star"]}</span>
                                            </div>
                                            <div className="review-progress">
                                                <span className="review-type">1 Star</span>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${(courseAll?.ratings?.["1_star"] || 0) / (courseAll?.total_ratings || 1) * 100}%`,
                                                        }}
                                                        aria-valuenow={(courseAll?.ratings?.["1_star"] || 0) / (courseAll?.total_ratings || 1) * 100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    ></div>
                                                </div>
                                                <span className="review-present">{courseAll?.ratings?.["1_star"]}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-6">
                                    <h3 className="listing-heading">Showing of {courseAll?.feedbacks && courseAll?.feedbacks.length}</h3>
                                    <div className="row">
                                        {courseAll?.feedbacks && courseAll?.feedbacks.map((item: any, index: number) => (
                                            <div key={index} className="col-xl-4 col-lg-6 mb-4">
                                                <div className="testimonial-card">
                                                    <div className="test-top-quotes">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={50}
                                                            height={90}
                                                            viewBox="0 0 50 90"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M50 90H2.15044e-06V40.0334L20.0503 1.0115e-06H44.9749L25.0251 40.0334H50V90Z"
                                                                fill="#DBDBDB"
                                                            />
                                                        </svg>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={50}
                                                            height={90}
                                                            viewBox="0 0 50 90"
                                                            fill="none"
                                                        >
                                                            <path
                                                                d="M50 90H2.15044e-06V40.0334L20.0503 1.0115e-06H44.9749L25.0251 40.0334H50V90Z"
                                                                fill="#DBDBDB"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="testimonial-comment">
                                                        <p>
                                                            {item?.feedback}
                                                        </p>
                                                    </div>
                                                    <div className="testimonial-bottom">
                                                        <div className="testimonial-bottom-left">
                                                            <div className="test-profile">
                                                                <img
                                                                    src={image3}
                                                                    alt="#"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                            <div className="profile-content">
                                                                <p className="prof-name"> {item?.learner_name}</p>
                                                                <div className="test-stars">
                                                                    {[...Array(5)].map((_, index) => (
                                                                        <span className="test-star" key={index}>
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width={16}
                                                                                height={16}
                                                                                viewBox="0 0 192 181"
                                                                                fill="none"
                                                                            >
                                                                                <path
                                                                                    d="M96 0L118.451 69.0983H191.106L132.327 111.803L154.779 180.902L96 138.197L37.2215 180.902L59.6729 111.803L0.894348 69.0983H73.5486L96 0Z"
                                                                                    fill={index < (item?.rating || 0) ? "#F99100" : "#E0E0E0"} // Dynamically change the color
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-bottom-right">
                                                            <div className="test-top-quotes">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={50}
                                                                    height={90}
                                                                    viewBox="0 0 50 90"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M50 90H2.15044e-06V40.0334L20.0503 1.0115e-06H44.9749L25.0251 40.0334H50V90Z"
                                                                        fill="#DBDBDB"
                                                                    />
                                                                </svg>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={50}
                                                                    height={90}
                                                                    viewBox="0 0 50 90"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M50 90H2.15044e-06V40.0334L20.0503 1.0115e-06H44.9749L25.0251 40.0334H50V90Z"
                                                                        fill="#DBDBDB"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </section>
            <section>
                <div className="explore-course-section">
                    <div className="container">
                        <div>
                            <h2 className="sub-heading text-center">
                                Explore Featured <span>Courses</span>
                            </h2>
                            <p className="text text-center mb-60">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </div>
                        <div className="course-group-slide">
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default CourseDetails;