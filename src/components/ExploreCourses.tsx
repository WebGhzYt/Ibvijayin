import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMAGE_URL } from "../api/urls";
import { Link } from "react-router-dom";
const ExploreCourses = ({ courses }: any) => {
  console.log(courses, 'coursescourses')
  const responsive = {
    superLargeDesktop: {
      // For devices larger than 1920px
      breakpoint: { max: 4000, min: 1920 },
      items: 5,
    },
    desktop: {
      // For devices between 1024px and 1920px
      breakpoint: { max: 1920, min: 1024 },
      items: 4,
    },
    tablet: {
      // For devices between 464px and 1024px
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      // For devices below 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (

    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 0.5s"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {courses && courses.map((course: any, courseIndex: number) => (
        <Link style={{ textDecoration: 'none' }} to={`/course/details/${course?.slug}`}>
          <div className="course-item-card" key={courseIndex}>
            <div className="course-tag">
              <span className="course-badge-btn">{course?.category_name}</span>
            </div>
            <div className="course-item-image">
              <img
                src={IMAGE_URL + course.image}
                alt="course"
                className="img-fluid"
                style={{ height: 200 }}
              />
            </div>
            <Link style={{ textDecoration: 'none' }} to={`/course/details/${course?.slug}`} className="course-item-text">
              <h3>{course.course_name}</h3>
            </Link>
            {course.rating > 0 &&
              <div className="course-item-review">
                <span className="avrg-reviews">
                  ({course.rating})
                </span>
                <span className="total-reviews">
                  {course?.total_reviews}
                </span>
              </div>
            }
            <div className="course-price">
              <p className="offer-price">
                ₹ {course.offer_price}{" "}
                <span>₹ {course.price}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>

  );
};

export default ExploreCourses;
