import React from "react";
import Slider from "react-slick";

function SliderSection({ images }: { images: any }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 729,
    //     settings: {
    //       slidesToShow: 1.5,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 500,
    //     settings: {
    //       slidesToShow: 1.2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className="slider-container slider__detail__page">
      {/* <Slider {...settings}>
        <div className="detail__slider__img">
          <img src={images.images} alt="apartment" />
        </div>
      </Slider> */}
      <div className="detail__slider__img">
        <img src={images.images} alt="apartment" />
      </div>
    </div>
  );
}

export default SliderSection;
