/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import objects1 from "../assets/img/objects-1.png"
import objects from "../assets/img/objects.png"
import graduation from "../assets/img/graduation.png"
import online_interview from "../assets/img/online-interview.png"
import agenda from "../assets/img/agenda.png"
import exercise from "../assets/img/exercise.png"
import students from "../assets/img/students.png"
import law from "../assets/img/law.png"
import video_camera from "../assets/img/video-camera.png"
import Frame3405 from "../assets/img/Frame 3405.png"
import Vector from "../assets/img/Vector.svg"
import { useEffect, useState } from "react"
import { APIPATH, IMAGE_URL } from "../api/urls"
import { getApi } from "../services/services"
import { useAuthStore } from "../store/auth/authStore"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ExploreCourses from "../components/ExploreCourses"
import Carousel from 'react-bootstrap/Carousel';
import OwlCarousel from 'react-owl-carousel';
import image3 from "../assets/img/image-3.png"
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LoaderWithBackground from "../components/LoaderWithBackground.tsx";
const options = {
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  responsive: {
    0: { items: 1 },
    600: { items: 3 },
    1000: { items: 5 },
  },
};
const optionsBlog = {
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 },
  },
};
const Home = () => {
  const { token, logout } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [homeData, setHomeData] = useState<any>('');
  useEffect(() => {
    getCourseData();
  }, []);
  const getCourseData = () => {
    setLoading(true);
    getApi(APIPATH.home, token, logout)
      .then((resp) => {
        console.log(resp, 'resprespresp')
        const { data } = resp;
        setHomeData(data);
      })
      .catch((err) => console.log(err)).finally(()=>{
        setLoading(false);
    });;
  };
  const optionstwo = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };
  return (
    <div>
      <section>
        <LoaderWithBackground visible={loading}/>
        <div className="hero-section">
          <div className="container">
            <h1 className="heading text-center">India's Leading and Most Reliable <span> *Educational *</span>Platform
            </h1>
            <p className="text text-center hero-text-mw">Transforming Learning Experiences with Top-Quality Resources
              and Trusted Expertise for IB, CBSE, and GCSE Students</p>
            <div className="hero-tags">
              <div className="hero-tag-icon">
                <img src={objects1} alt="#" className="img-fluid" />
              </div>
              <div className="hero-tag-icon">
                <img src={objects} alt="#" className="img-fluid" />
              </div>
              <ul className="hero-tegs-list">
                {homeData?.categoryList && homeData?.categoryList.map((item: any, index: number) => (
                  <li key={index} className="hero-tag">{item?.category_name}</li>
                ))}
              </ul>
            </div>
            <ul className="hero-lables">
              <li className="hero-lable">
                <img src={graduation} alt="#" className="hero-lable-img" />
                <p className="hero-lable-name">Experienced Educators</p>
              </li>
              <li className="hero-lable">
                <img src={online_interview} alt="#" className="hero-lable-img" />
                <p className="hero-lable-name">Live Classes</p>
              </li>
              <li className="hero-lable">
                <img src={agenda} alt="#" className="hero-lable-img" />
                <p className="hero-lable-name">Best Academic Content</p>
              </li>
              <li className="hero-lable">
                <img src={exercise} alt="#" className="hero-lable-img" />
                <p className="hero-lable-name">Mentorship &amp; Guidance</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="explore-course-section">
          <div className="container">
            <h2 className="sub-heading">
              Explore Featured<span>Courses</span>
            </h2>
            <div className="explr-top-align">
              <p className="text">
                "Unlock your potential with our expert-designed courses, tailored
                to help you master every topic and excel in your exams."
              </p>
              <div className="eplr-top-tabs">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  {homeData?.categories &&
                    homeData.categories.map((item: any, index: number) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${index === 0 ? "active" : ""}`}
                          id={`course-group-${index}`}
                          data-bs-toggle="pill"
                          data-bs-target={`#course-${index}`}
                          type="button"
                          role="tab"
                          aria-controls={`course-${index}`}
                          aria-selected={index === 0 ? "true" : "false"}
                          onClick={() => setActiveIndex(index)}
                        >
                          {item?.category_name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="explr-tabs-details">
              <div className="tab-content" id="pills-tabContent">
                <div
                  key={activeIndex}
                  className={`tab-pane fade show active`}
                  id={`course-${activeIndex}`}
                  role="tabpanel"
                  aria-labelledby={`course-group-${activeIndex}`}
                >
                  {homeData?.categories && homeData?.categories[activeIndex]?.courses &&
                    <div className="course-group-tab">
                      <div className="course-group-slide">
                        <ExploreCourses courses={homeData?.categories[activeIndex]?.courses || []} />
                      </div>
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      < section >
        <div className="worldwide-section">
          <div className="container">
            <h2 className="sub-heading text-center">A Platform Trusted by Students <span> Worldwide</span> </h2>
            <p className="text text-center mb-4">"Empowering learners from every corner of the globe with quality
              resources and personalized support for academic excellence."</p>
            <div className="row">
              <div className="col-md-3 col-6 mb-4 h-100 child-card">
                <div className="worldwide-card">
                  <div className="worldwide-card-content">
                    <p>12000+</p>
                    <h4>Happy students</h4>
                  </div>
                  <div className="worldwide-card-image">
                    <img src={students} alt="#" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4 h-100 child-card">
                <div className="worldwide-card">
                  <div className="worldwide-card-content">
                    <p>12000+</p>
                    <h4>Mock Tests</h4>
                  </div>
                  <div className="worldwide-card-image">
                    <img src={students} alt="#" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4 h-100 child-card">
                <div className="worldwide-card">
                  <div className="worldwide-card-content">
                    <p>12000+</p>
                    <h4>Practice Papers</h4>
                  </div>
                  <div className="worldwide-card-image">
                    <img src={law} alt="#" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-4 h-100 child-card">
                <div className="worldwide-card">
                  <div className="worldwide-card-content">
                    <p>12000+</p>
                    <h4>Video Lectures</h4>
                  </div>
                  <div className="worldwide-card-image">
                    <img src={video_camera} alt="#" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section>
        <div className="second-section">
          <div className="container">
            <h2 className="sub-heading text-center">
              Achieving Excellence with <span>IBVijayin</span>
            </h2>
            <div className="top-ranks-banners">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-IB"
                  role="tabpanel"
                  aria-labelledby="v-pills-IB-tab"
                >
                  <div className="top-ranks-banners">
                    <Carousel>
                      {homeData?.banners && homeData?.banners.map((item: any, index: number) => (
                        <Carousel.Item key={index}>
                          <img src={IMAGE_URL + item?.banner} alt="Top Banner" className="img-fluid" />
                          <Carousel.Caption>
                          </Carousel.Caption>
                        </Carousel.Item>
                      ))}


                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="expect-section">
          <div className="container">
            <h2 className="sub-heading text-center">What To Expect From A IB Vijayin <span> Courses?</span> </h2>
            <p className="text text-center mb-60">Unlock a world of structured learning with our expert-designed
              courses, tailored to help you succeed in IB, CBSE, and GCSE exams</p>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="expext-card">
                  <div className="expext-card-icon">
                    <img src={Vector} alt="#" className="img-fluid" />
                  </div>
                  <h3>Comprehensive Content</h3>
                  <p>Topic-wise questions, past papers, PDFs, and videos for all-round preparation.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="expext-card">
                  <div className="expext-card-icon">
                    <img src={Vector} alt="#" className="img-fluid" />
                  </div>
                  <h3>Multi-Board Coverage</h3>
                  <p>Tailored courses for IB, CBSE, and GCSE curricula.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="expext-card">
                  <div className="expext-card-icon">
                    <img src={Vector} alt="#" className="img-fluid" />
                  </div>
                  <h3>Expert-Led Modules</h3>
                  <p>Strategically designed to enhance understanding and exam readiness.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="expext-card">
                  <div className="expext-card-icon">
                    <img src={Vector} alt="#" className="img-fluid" />
                  </div>
                  <h3>Convenient Access</h3>
                  <p>Study anytime, anywhere with our user-friendly platform.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="expext-card">
                  <div className="expext-card-icon">
                    <img src={Vector} alt="#" className="img-fluid" />
                  </div>
                  <h3>Proven Results</h3>
                  <p>Tools and resources focused on helping you achieve top scores.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="expext-card">
                  <div className="expext-card-icon">
                    <img src={Vector} alt="#" className="img-fluid" />
                  </div>
                  <h3>Interactive Learning</h3>
                  <p>Engaging quizzes, discussions, and live sessions to boost learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="educator-section">
          <div className="container">
            <h2 className="sub-heading text-center">
              Our Professional <span>Educator</span>
            </h2>
            <p className="text text-center mb-60">
              Guiding You with Knowledge and Experience for Maximum Impact
            </p>
            <div className="educators">
              <OwlCarousel className="owl-theme" {...options}>
                {homeData?.teachers && homeData?.teachers.map((item: any, index: number) => (
                  <div key={index} className="item">
                    <div className="educator-card">
                      <div className="educator-image">
                        <img src={IMAGE_URL + '/' + item?.image} alt="#" className="img-fluid" />
                      </div>
                      <div className="eduactor-name">
                        <p>{item?.name}</p>
                      </div>
                      <div className="eduactor-prop">
                        <p>{item?.subject}</p>
                      </div>
                    </div>
                  </div>))}
                {/* Repeat for other items */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="attrect-section">
          <div className="container">
            <div className="attrect-card">
              <div className="attrect-left">
                <h3>grow your learning with Us</h3>
                <p>Unlock your full potential and take your academic journey to new heights with IBVijayin. Our
                  comprehensive resources, expert guidance, and tailored learning materials are designed to
                  empower you to achieve your goals. Whether you're mastering complex concepts, preparing for
                  exams, or seeking personalized support, we are here to help you every step of the way. Join
                  us and turn your learning into a success story!</p>
              </div>
              <div className="attrect-right">
                <div className="attrect-img">
                  <img src={Frame3405} alt="#" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="expect-section">
          <div className="container">
            <h2 className="sub-heading text-center">
              Why people choose IB Vijayin for their <span>career</span>
            </h2>
            <p className="text text-center mb-60">
              Choosing IBVijayin means investing in a brighter future with the best educational tools and expert guidance
            </p>
            <div className="testimonial">
              <OwlCarousel className="owl-theme" {...optionstwo}>
                {homeData?.feedbacks && homeData?.feedbacks.map((item: any, index: number) => (
                  <div key={index} className="item">
                    <div className="testimonial-card">
                      <div className="test-top-quotes">
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={90} viewBox="0 0 50 90" fill="none">
                          <path d="M50 90H0V40.0334L20.0503 0H44.9749L25.0251 40.0334H50V90Z" fill="#DBDBDB" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={90} viewBox="0 0 50 90" fill="none">
                          <path d="M50 90H0V40.0334L20.0503 0H44.9749L25.0251 40.0334H50V90Z" fill="#DBDBDB" />
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
                            <img src={image3} alt="#" className="img-fluid" />
                          </div>
                          <div className="profile-content">
                            <p className="prof-name">{item?.learner_name}</p>
                            <div className="test-stars">
                              {[...Array(item?.rating)].map((_, i) => (
                                <span className="test-star" key={i}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 192 181" fill="none">
                                    <path
                                      d="M96 0L118.451 69.0983H191.106L132.327 111.803L154.779 180.902L96 138.197L37.2215 180.902L59.6729 111.803L0.894348 69.0983H73.5486L96 0Z"
                                      fill="#F99100"
                                    />
                                  </svg>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add more testimonial items here */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="blog-section">
          <div className="container">
            <h2 className="sub-heading text-center">
              Read Our Latest <span>Blogs</span>
            </h2>
            <p className="text text-center mb-60">
              Stay updated with expert insights, study tips, exam strategies, and more to help you succeed in your academic journey.
            </p>
            <div className="blogs-slide">
              <OwlCarousel className="owl-theme" {...optionsBlog}>
                {homeData?.blogs && homeData?.blogs.map((item: any, index: number) => (
                  <div key={index} className="item">
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
                  </div>))}
              </OwlCarousel>
            </div>
            <div className="view-all-btn mt-4 mrt-60">
              <Link to="/blog" className="view-btn">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div >

  );
}

export default Home;