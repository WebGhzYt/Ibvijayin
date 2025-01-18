import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IMAGE_URL } from "../api/urls";
const TeacherItem = ({teachers}: any) => {
    console.log(teachers, 'bannersbanners')
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
            dotListClass="owl-theme"
            itemClass="carousel-item-padding-40-px"
        >
            {teachers && teachers.map((item: any, index: number) => (
              <div key={index} className="item">
                <div className="educator-card">
                  <div className="educator-image">
                    <img src={IMAGE_URL+ item?.image} alt="#" className="img-fluid" />
                  </div>
                  <div className="eduactor-name">
                    <p>{item?.name}</p>
                  </div>
                  <div className="eduactor-prop">
                    <p>{item?.subject}</p>
                  </div>
                </div>
              </div>))}
        </Carousel>

    );
};

export default TeacherItem;
