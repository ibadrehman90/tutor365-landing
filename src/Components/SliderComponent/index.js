import React from "react";
import SlideComponent from "./SlideComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
const SliderComponent = ({ data }) => {
  const settings = {
    // infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          cursor: "pointer",
          position: "absolute",
          background: "#ffffffb3",
          padding: 15,
          width: 30,
          height: 50,
          right: 0,
          top: 120,
        }}
      >
        <HiOutlineArrowNarrowRight fontSize={28} onClick={onClick} />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          zIndex: 111,
          cursor: "pointer",
          position: "absolute",
          background: "#ffffffb3",
          padding: 15,
          width: 30,
          height: 50,
          left: 0,
          top: 120,
        }}
      >
        <HiOutlineArrowNarrowLeft fontSize={28} onClick={onClick} />
      </div>
    );
  }
  return (
    <div className="SlideComponent">
      <Slider {...settings}>
        {data?.map((obj, index) => {
          return (
            <div>
              <div className="slide">
                <SlideComponent obj={obj} key={index} index={index} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
