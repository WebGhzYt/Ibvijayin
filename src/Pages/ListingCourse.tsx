/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useCourses } from "../store/auth/authServices";
import { toast } from "react-toastify";
import { IMAGE_URL } from "../api/urls";
import { Link } from "react-router-dom";
import LoaderWithBackground from "../components/LoaderWithBackground.tsx";
const ListingCourse = () => {
  const [loading, setLoading] = useState(false);
  const { mutate: fetchCourses, data } = useCourses();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [sortingRange, setSortingRange] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    priceRange: [],
    sort: "low-to-high",
  });
  const [showCategory, setShowCategory] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showSortBy, setShowSortBy] = useState(false);
  useEffect(() => {
    handleFetchCourses();
  }, [selectedFilters])
  const handleFetchCourses = () => {
    setLoading(true);
    const dynamicParams: any = {
      user_id: 8,        // Replace with actual user ID
      category_id: selectedFilters.categories,
      price_range: selectedFilters.priceRange,
      sort: selectedFilters.sort,
    };

    fetchCourses(dynamicParams);
  };
  useEffect(() => {
    if (data) {
      setLoading(false);
      if (data.success) {
        setCourses(data?.courses);
        setCategories(data?.categories);
        setPriceRange(data?.priceRange);
        setSortingRange(data?.sortingRange);
      } else {
        toast.error(data.msg);
      }
    }
  }, [data]);
  const handleFilterChange = (filterType: string, value: string, isChecked: boolean) => {
    setSelectedFilters((prev) => {
      const updatedFilters: any = { ...prev };

      if (filterType === "categories") {
        updatedFilters.categories = isChecked
          ? [...prev.categories, value]
          : prev.categories.filter((cat) => cat !== value);
      } else if (filterType === "priceRange") {
        updatedFilters.priceRange = isChecked
          ? [...prev.priceRange, value]
          : prev.priceRange.filter((price) => price !== value);
      } else if (filterType === "sort") {
        updatedFilters.sort = value;
      }

      return updatedFilters;
    });
  };
  return (
    <>
      <section>
        <LoaderWithBackground visible={loading}/>
        <div className="prdt-page-header-section">
          <div className="container">
            <div className="links-histry-step text-white mb-3">
              <a href="index.html" className="text-white d-inline">
                Home
              </a>
              <i className="fa-solid fa-angle-right" />
              <a className="text-white d-inline">
                listing
              </a>
            </div>
            <h2 className="prdt-page-top-heading">COURSE</h2>
            <p className="text text-white">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="listing-page-section">
          <div className="container">
            <div className="listing-container">
              <div className="listing-page-align">
                <div className="listing-filter" id="filter-card">
                  <h4 className="filter-heading">Filter By</h4>
                  <div className="filter-card mb-4">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                            onClick={()=>setShowCategory(!showCategory)}
                          >
                            Category
                          </button>
                        </h2>
                        <div
                          id="flush-collapseOne"
                          className={`accordion-collapse collapse ${showCategory === true && 'show'}`}
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {categories.map((item: any, index) => (
                              <div key={index} className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`category-${index}`}
                                  onChange={(e) =>
                                    handleFilterChange("categories", item.id, e.target.checked)
                                  }
                                />
                                <label className="form-check-label" htmlFor={`category-${index}`}>
                                  {item.category_name}
                                </label>
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                            onClick={()=>setShowPrice(!showPrice)}
                          >
                            Price
                          </button>
                        </h2>
                        <div
                          id="flush-collapseTwo"
                          className={`accordion-collapse collapse ${showPrice === true && 'show'}`}
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {priceRange.map((item: any, index) => (
                              <div key={index} className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`price-${index}`}
                                  onChange={(e) =>
                                    handleFilterChange("priceRange", item.range, e.target.checked)
                                  }
                                />
                                <label className="form-check-label" htmlFor={`price-${index}`}>
                                  {item.range}
                                </label>
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                            onClick={()=>setShowSortBy(!showSortBy)}
                          >
                            Sort by
                          </button>
                        </h2>
                        <div
                          id="flush-collapseThree"
                          className={`accordion-collapse collapse ${showSortBy === true && 'show'}`}
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            {sortingRange.map((item: any, index) => (
                              <div key={index} className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="sort"
                                  id={`sort-${index}`}
                                  onChange={() => handleFilterChange("sort", item.sort, true)}
                                />
                                <label className="form-check-label" htmlFor={`sort-${index}`}>
                                  {item.sort}
                                </label>
                              </div>
                            ))}

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex justify-content-between gap-3">
                    <h3 className="listing-heading">Explore the IGCSE Course</h3>
                    <button
                      className="listing-filter-btn d-block d-lg-none mb-3"
                      id="Filter"
                    >
                      Filter
                    </button>
                  </div>

                  <div className="row">
                    {courses.map((item: any, index) => (
                      <div key={index} className="col-sm-6 col-mb-4 col-xl-4">
                        <Link style={{textDecoration: 'none'}} to={`/course/details/${item?.slug}`} >
                        <div className="course-item-card">
                          <div className="course-tag">
                            <span className="course-badge-btn">{item?.course_name}</span>
                          </div>
                          <div className="course-item-image bg-success">
                            <img
                              src={`${IMAGE_URL}${item?.image}`}
                              alt="Course"
                              style={{ height: 200 }}
                              className="course-image"
                            />
                          </div>
                          <Link  style={{textDecoration: 'none'}} to={`/course/details/${item?.slug}`} className="course-item-text">
                            <h3>{item?.title_heading}</h3>
                          </Link>
                          {item.rating > 0 &&
                            <div className="course-item-review">
                              <div className="test-stars">
                              {[...Array(Math.floor(item?.rating || 0))].map((_, i) => (
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
                              <span className="avrg-reviews">
                                ({item.rating})
                              </span>
                              <span className="total-reviews">
                                {item?.total_reviews}
                              </span>
                            </div>
                          }
                          <div className="course-price">
                            <p className="offer-price mb-2">
                              ₹ {item?.offer_price} <span>₹ {item?.price}</span>
                            </p>
                            <Link to={`/course/details/${item?.slug}`} className="courses-link-arrow">
                              <i className="fa-solid fa-arrow-right" />
                            </Link>
                          </div>
                        </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pages-number-link">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Prev
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
      </section>
    </>

  );
}

export default ListingCourse;