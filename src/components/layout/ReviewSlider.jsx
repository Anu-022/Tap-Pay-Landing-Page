import { useState } from "react";
import reviews from "../reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevBtn from "../assets/left-arrow.svg"
import nextBtn from "../assets/right-arrow.svg"
const ReviewSlider = () => {
        const[sliderRef, setSliderRef] = useState(null)
        const settings = {
          infinite: false,
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          autoplay: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
               slidesToShow: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
               slidesToShow: 1,
              }
             }
          ]
      
        };

    return (
        <div className="review-slider">
            <div className="sliders">
                <div className="slider-btns">
                    <button className="prev-btn" onClick={sliderRef?.slickPrev}>
                    <img src={prevBtn} alt="prev-btn" />
                    </button>
                    <button className="next-btn" onClick={sliderRef?.slickNext}>
                        <img src={nextBtn} alt="next-btn" />
                    </button>
                </div>
            </div>
            <Slider ref={setSliderRef} {...settings} >
                {reviews.map((review) => (
                   <div className="reviews">
                        <div className="client-review">    
                            <div className="review-text">
                                <p className="comment">{review.testimonial}</p>
                                <p className="client-name">{review.name}</p>
                                <p className="occupation">{review.occupation}</p>
                            </div>
                            <img src= {review.src} alt="customers" width="509px"/>
                        </div>
                    </div>
          
                ))}  
            </Slider>
        </div>
    )
}
export default ReviewSlider;