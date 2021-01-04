import React from "react";
import Slider from "react-slick";
import company_images from "../../utils/companies";

export default function Companies() {
  const imgComponents = company_images.map(company => {
    return (
      <div key={company}>
        <img src={company} alt={"banner_1.png"} />
      </div>
    );
  });

  var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    // a random distinct key
    <Slider {...settings}>{imgComponents}</Slider>
  );
}
