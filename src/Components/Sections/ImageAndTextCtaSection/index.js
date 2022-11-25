import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import BannerPhoto from "../../../Assets/education-concept-student-studying-brainstorming-campus-concept-close-up-students-discussing-their-subject-books-textbooks-selective-focus.jpeg";
const ImageAndTextCtaSection = ({
  imageSrc = BannerPhoto,
  primaryHeading = "Primary Heading",
  secondaryHeading = "Secondary Heading",
  description = "Description",
  buttonLabel = "Button Label",
  reverseLayout,
  linkTo = "/",
}) => {
  return (
    <div
      className={
        reverseLayout
          ? "ImageAndTextCtaSection reverse"
          : "ImageAndTextCtaSection"
      }
    >
      <div className="textContainer">
        <h5>{secondaryHeading}</h5>
        <h2>{primaryHeading}</h2>
        <p className="descriptionText">{description}</p>
        {!buttonLabel && (
          <Link
            to={linkTo}
            className={reverseLayout ? "heroSecCta reverse" : "heroSecCta"}
          >
            {buttonLabel}
          </Link>
        )}
      </div>
      <div className="imageContainer">
        <img width={400} src={imageSrc} alt={primaryHeading} />
      </div>
    </div>
  );
};

export default ImageAndTextCtaSection;
