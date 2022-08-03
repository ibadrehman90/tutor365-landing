import React from "react";
import IndividualBenefitComponent from "../../IndividualBenefitComponent";
import "./styles.css";
const BenefitSection = () => {
  return (
    <div
      className="BenefitSection"
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        padding: "40px 0px",
      }}
    >
      <IndividualBenefitComponent
        image={
          "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/language-school-illustration-25.png"
        }
        primaryHeading="Live Classes"
        secondaryText="Our teachers give live lectures that allow students to ask questions and interact with their teachers like in actual classroom."
      />
      <IndividualBenefitComponent
        image={
          "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/language-school-illustration-25.png"
        }
        primaryHeading="Live Classes"
        secondaryText="Our teachers give live lectures that allow students to ask questions and interact with their teachers like in actual classroom."
      />
      <IndividualBenefitComponent
        image={
          "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/language-school-illustration-25.png"
        }
        primaryHeading="Live Classes"
        secondaryText="Our teachers give live lectures that allow students to ask questions and interact with their teachers like in actual classroom."
      />
    </div>
  );
};

export default BenefitSection;
