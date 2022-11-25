import React from "react";
import SliderComponent from "../../SliderComponent";
import "./styles.css";
import PotraitImg from "../../../Assets/close-up-woman-class.jpeg";
const TestimonialSection = () => {
  let data = [
    {
      testiomnialMessage:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      testimonialGiverName: "Jane Doe",
      testimonialGiverOccupation: "Learning GCSE",
      testimonialGiverProfilePic: PotraitImg,
    },
    {
      testiomnialMessage:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      testimonialGiverName: "Jane Doe",
      testimonialGiverOccupation: "Learning GCSE",
      testimonialGiverProfilePic: PotraitImg,
    },
    {
      testiomnialMessage:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      testimonialGiverName: "Jane Doe",
      testimonialGiverOccupation: "Learning GCSE",
      testimonialGiverProfilePic: PotraitImg,
    },
  ];
  return (
    <div className="TestimonialSection">
      <h2>What Our Students Say</h2>
      <div style={{ margin: "40px 0px" }}>
        <SliderComponent data={data} />
      </div>
    </div>
  );
};

export default TestimonialSection;
