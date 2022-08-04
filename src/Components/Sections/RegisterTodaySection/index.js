import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const RegisterTodaySection = () => {
  return (
    <div className="RegisterTodaySection">
      <div className="textContainer">
        <h2>Register Today!</h2>
        <p style={{ color: "white" }} className="descriptionText">
          We are filling spaces faster than we anticipated and that's because we
          strive to provide top-notch education while staying affordable. This
          is your chance to get the best education ONLINE.
        </p>
      </div>
      <div className="ctaBtn">
        <Link to="/" className="heroSecCta">
          All Courses
        </Link>
        <Link style={{ background: "white" }} to="/" className="heroSecCta">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default RegisterTodaySection;
