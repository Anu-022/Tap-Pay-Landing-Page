import reviews from "../reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewSlider = () => {
        
        const settings = {
          infinite: false,
          dots: false,
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
            <Slider {...settings}>
                {reviews.map((review) => (
                   <div className="">
                        <div className="client-review">
                            <div className="review-text">
                                <p>{review.testimonial}</p>
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