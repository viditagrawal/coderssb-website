import React from "react";
import Slider from "react-slick";
import company_images from "../../utils/companies";

export default function Companies() {
  const imgComponents = company_images.map(company => {
    return (
      <div>
        <img src={company} alt={"banner_1.png"} />
      </div>
    );
  });

  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    // a random distinct key
    <Slider key={"distinct key + 1000"} {...settings}>
      {imgComponents}
    </Slider>
  );
}
