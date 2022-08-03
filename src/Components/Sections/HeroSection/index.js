import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const HeroSection = () => {
  return (
    <div className="HeroSection">
      <img
        className="heroSectionBg"
        alt="hero"
        src="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying-scaled.jpeg"
      />
      <div className="heroSectionText">
        <div className="primaryHeading">
          <h1>Affordable High Quality Education</h1>
        </div>
        <div className="secondaryText">
          <p>
            Live streamed classes from highly qualified and well-experienced
            teachers. Interactive learning with online assessments and recorded
            lectures.
          </p>
        </div>
        <Link to={"/courses"} className="heroSecCta">
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
