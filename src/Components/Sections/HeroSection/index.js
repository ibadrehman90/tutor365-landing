import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import BannerImg from "../../../Assets/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying.jpeg";
const HeroSection = ({ rightText, imageLink = BannerImg }) => {
  return (
    <div className="HeroSection">
      <img
        loading="lazy"
        className="heroSectionBg"
        alt="hero"
        src={imageLink}
      />
      <div
        className={rightText ? "heroSectionText rightText" : "heroSectionText"}
      >
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
