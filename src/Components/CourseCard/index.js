import React from "react";
import { BiCheck } from "react-icons/bi";
import "./styles.css";

const CourseCard = ({
  courseLevel = "Beginner",
  courseCardImageUrl = "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/colleagues-learning-together-during-group-study-scaled.jpeg",
  courseTitle = "From Scratch",
  courseDescription = "Course Description",
  coursePrice = "$31.99",
  courseBenefits = [
    { benefit: "Benefit", isAvailable: false },
    { benefit: "Benefit", isAvailable: false },
    { benefit: "Benefit", isAvailable: true },
  ],
}) => {
  return (
    <div className="CourseCard">
      <div className="CourseCardLevel">{courseLevel}</div>
      <div className="CourseCardIndividualDetail">
        <img
          style={{ width: "100%", alignSelf: "center" }}
          height={200}
          src={courseCardImageUrl}
          alt={courseTitle}
        />
      </div>
      <div className="CourseCardDetails">
        <div className="CourseCardIndividualDetail">
          <h2>{courseTitle}</h2>
        </div>
        <div className="CourseCardIndividualDetail">
          <p>{courseDescription}</p>
        </div>
        <div className="CourseCardIndividualDetail">
          <h2 className="price">{coursePrice}/month</h2>
        </div>
        <div className="CourseCardIndividualDetail">
          <button className="subscribeBtn" to={"/"}>
            Subscribe
          </button>
        </div>
        <div className="CourseCardIndividualDetail">
          <ul>
            {courseBenefits.map((obj, index) => {
              return (
                <li key={index} className={!obj.isAvailable && "disabled"}>
                  <span>
                    <BiCheck
                      fontSize={24}
                      style={{ marginTop: 2, color: "#00de00" }}
                    />
                  </span>
                  {obj.benefit}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
