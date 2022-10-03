import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../App/api";
import CourseCard from "../../CourseCard/";
import Loader from "../../Loader";
import "./styles.css";
const getRequest = async (api) => {
  const res = await axios.request({
    method: "GET",
    url: api,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return { status: await res.status, data: await res.data };
};
const AvailableCourses = ({ isActive, setIsActive }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(courses, " : courses");
  useEffect(() => {
    (async () => {
      let getSubscriptions = await getRequest(`${BASE_URL}/subscription/get`);
      if (getSubscriptions.data.status === "fulfilled") {
        setCourses(getSubscriptions.data.subscriptions);
        setLoading(false);
      } else {
        setCourses([]);
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="AvailableCourses">
      <h2>Available Courses</h2>
      <div id="AvailableCoursesList" className="AvailableCoursesList">
        {!loading ? (
          courses?.length ? (
            courses?.map((obj, index) => {
              return (
                <CourseCard
                  key={index}
                  categories={obj?.categories}
                  courseCardImageUrl={obj?.imageUrl}
                  courseTitle={obj?.name}
                  courseDescription={obj?.description}
                  coursePrice={obj?.price}
                  subscription={obj}
                  setIsActive={setIsActive}
                  isActive={isActive}
                />
              );
            })
          ) : (
            <p style={{ color: "#7d7d7d" }}>
              Sorry no courses available at the moment
            </p>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default AvailableCourses;
