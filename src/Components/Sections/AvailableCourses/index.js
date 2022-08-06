import React from "react";
import CourseCard from "../../CourseCard";
import "./styles.css";
const AvailableCourses = () => {
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
        {data.map((obj, index) => {
          return (
            <CourseCard
              key={index}
              courseLevel={obj.level}
              courseCardImageUrl={obj.imageUrl}
              courseTitle={obj.title}
              courseDescription={obj.description}
              coursePrice={obj.price}
              courseBenefits={obj.benefits}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailableCourses;
