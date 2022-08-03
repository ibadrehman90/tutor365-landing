import React from "react";
import "./styles.css";

const IndividualBenefitComponent = ({
  image,
  primaryHeading,
  secondaryText,
  primaryHeadingColor,
}) => {
  return (
    <div className="IndividualBenefitComponent">
      <div className="IndividualBenefitComponentLeftImage">
        <img src={image} alt={primaryHeading} />
      </div>
      <div className="IndividualBenefitComponentHeading">
        <h3
          style={{
            color: primaryHeadingColor ? primaryHeadingColor : "#002147",
          }}
        >
          {primaryHeading}
        </h3>
        <p>{secondaryText}</p>
      </div>
    </div>
  );
};

export default IndividualBenefitComponent;
