import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const ImageAndTextCtaSection = ({
  imageSrc = "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus-scaled.jpeg",
  primaryHeading = "Primary Heading",
  secondaryHeading = "Secondary Heading",
  description = "Description",
  buttonLabel = "Button Label",
  reverseLayout,
  linkTo = "/",
}) => {
  return (
    <div
      style={reverseLayout && { flexDirection: "row-reverse" }}
      className="ImageAndTextCtaSection"
    >
      <div className="textContainer">
        <h5>{secondaryHeading}</h5>
        <h2>{primaryHeading}</h2>
        <p className="descriptionText">{description}</p>
        <Link
          to={linkTo}
          style={reverseLayout && { float: "left" }}
          className="heroSecCta"
        >
          {buttonLabel}
        </Link>
      </div>
      <div className="imageContainer">
        <img width={400} src={imageSrc} alt={primaryHeading} />
      </div>
    </div>
  );
};

export default ImageAndTextCtaSection;
