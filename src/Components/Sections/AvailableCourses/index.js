import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../App/api";
import CourseCard from "../../CourseCard";
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
const AvailableCourses = () => {
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

  let data = [
    {
      level: "Beginner",
      imageUrl:
        "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/virtual-classroom-study-space-scaled.jpeg",
      title: "From Scratch",
      description: "Covers Maths, English, and Science for primary students.",
      price: "£9.50",
      benefits: [
        { benefit: "Recorded Lecture", isAvailable: true },
        { benefit: "Assignments", isAvailable: true },
        { benefit: "Live Class", isAvailable: false },
      ],
    },
    {
      level: "Intermediate",
      imageUrl:
        "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/colleagues-learning-together-during-group-study-scaled.jpeg",
      title: "GCSE",
      description: "Covers Maths, English, and Science for GCSE students.",
      price: "£9.50",
      benefits: [
        { benefit: "Recorded Lecture", isAvailable: true },
        { benefit: "Assignments", isAvailable: true },
        { benefit: "Live Class", isAvailable: true },
      ],
    },
    {
      level: "Advanced",
      imageUrl:
        "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/student-class-looking-course-scaled.jpeg",
      title: "GCSE",
      description: "Covers Maths, English, and Science for GCSE students.",
      price: "£9.50",
      benefits: [
        { benefit: "Recorded Lecture", isAvailable: true },
        { benefit: "Assignments", isAvailable: true },
        { benefit: "Live Class", isAvailable: true },
      ],
    },
  ];
  return (
    <div className="AvailableCourses">
      <h2>Available Courses</h2>
      <div className="AvailableCoursesList">
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
