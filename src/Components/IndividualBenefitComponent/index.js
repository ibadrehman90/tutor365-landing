import React from "react";
import "./styles.css";

const IndividualBenefitComponent = ({
  image,
  primaryHeading,
  secondaryText,
  primaryHeadingColor,
  moreData,
  styles = {},
}) => {
  return (
    <div
      className="IndividualBenefitComponent"
      style={{
        ...styles,
        flexBasis: moreData && "47%",
        justifyContent: "center",
      }}
    >
      <div className="IndividualBenefitComponentLeftImage">
        <img src={image} alt={primaryHeading} />
      </div>
      <div
        className="IndividualBenefitComponentHeading"
        style={moreData && { maxWidth: "75%" }}
      >
        <h3
          style={{
            color: primaryHeadingColor ? "#002147" : "#f96623",
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
