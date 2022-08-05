import React from "react";
import SliderComponent from "../../SliderComponent";
import "./styles.css";
const TestimonialSection = () => {
  let data = [
    {
      testiomnialMessage:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      testimonialGiverName: "Jane Doe",
      testimonialGiverOccupation: "Learning GCSE",
      testimonialGiverProfilePic:
        "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/portrait-square-05.jpg",
    },
    {
      testiomnialMessage:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      testimonialGiverName: "Jane Doe",
      testimonialGiverOccupation: "Learning GCSE",
      testimonialGiverProfilePic:
        "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/portrait-square-08.jpg",
    },
    {
      testiomnialMessage:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      testimonialGiverName: "Jane Doe",
      testimonialGiverOccupation: "Learning GCSE",
      testimonialGiverProfilePic:
        "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/portrait-square-05.jpg",
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
