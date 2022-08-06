import React from "react";
import { Link } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import "./styles.css";

const CourseCard = () => {
  return (
    <div className="CourseCard">
      <div className="CourseCardLevel">Beginner</div>
      <div className="CourseCardIndividualDetail">
        <img
          style={{ width: "100%", alignSelf: "center" }}
          height={200}
          src="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/colleagues-learning-together-during-group-study-scaled.jpeg"
          alt=""
        />
      </div>
      <div className="CourseCardDetails">
        <div className="CourseCardIndividualDetail">
          <h2>GCSE</h2>
        </div>
        <div className="CourseCardIndividualDetail">
          <p>Covers Maths, English, and Science for primary students.</p>
        </div>
        <div className="CourseCardIndividualDetail">
          <h2 className="price">$31.99/mo</h2>
        </div>
        <div className="CourseCardIndividualDetail">
          <button className="subscribeBtn" to={"/"}>
            Subscribe
          </button>
        </div>
        <div className="CourseCardIndividualDetail">
          <ul>
            <li>
              <span>
                <BiCheck color="green" fontSize={24} />
              </span>
              Live Classes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
