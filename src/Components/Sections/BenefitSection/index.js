import React from "react";
import IndividualBenefitComponent from "../../IndividualBenefitComponent";
import "./styles.css";

const BenefitSection = ({ data, heading, primaryHeadingColor, moreData }) => {
  return (
    <div className="BenefitSection">
      {heading && <h2>{heading}</h2>}
      <div
        className={
          moreData
            ? "BenefitSectionCards MoreBenefitSectionCards"
            : "BenefitSectionCards"
        }
      >
        {data?.map((obj, index) => {
          return (
            <IndividualBenefitComponent
              key={index}
              image={obj.image}
              primaryHeading={obj.heading}
              primaryHeadingColor={primaryHeadingColor}
              secondaryText={obj.desc}
              moreData={moreData && moreData}
              styles={moreData && { border: "none", margin: "10px 0px" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BenefitSection;
