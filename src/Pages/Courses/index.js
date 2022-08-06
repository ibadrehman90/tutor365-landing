import React from "react";
import PageContainer from "../../Components/PageContainer";
import BenefitSection from "../../Components/Sections/BenefitSection";
import Footer from "../../Components/Sections/Footer";
import HeroSection from "../../Components/Sections/HeroSection";
import ImageAndTextCtaSection from "../../Components/Sections/ImageAndTextCtaSection";
import TestimonialSection from "../../Components/Sections/TestimonialSection";
import "./styles.css";
import CheckBoxPng from "../../Assets/checkBox.png";
import AvailableCourses from "../../Components/Sections/AvailableCourses";
let whyChooseUsData = [
  {
    image: CheckBoxPng,
    heading: "Recorded Lectures",
    desc: "24/7 access to all recorded lectures. Watch them as many times as needed.",
  },
  {
    image: CheckBoxPng,
    heading: "Assessments",
    desc: "Frequent assignments and online quizzes to assess students performance.",
  },
  {
    image: CheckBoxPng,
    heading: "Academic Support",
    desc: "Our teachers are active both during the lectures as well as on online forums and on emails to support students.",
  },
  {
    image: CheckBoxPng,
    heading: "Additional Learning",
    desc: "Our courses are not restricted to just covering the syllabus. We ensure that all our students learn something more than that.",
  },
];

const Courses = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <HeroSection
        rightText={true}
        imageLink="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/df-scaled.jpeg"
      />
      <PageContainer>
        <AvailableCourses />
        <BenefitSection
          data={whyChooseUsData}
          heading="What else is included?"
          moreData={true}
        />
        <ImageAndTextCtaSection
          imageSrc="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/school-supplies-assortment-table-scaled.jpeg"
          secondaryHeading="LEARN FROM HOME"
          primaryHeading="Online Class Offerings"
          description="Our teachers prepare and deliver highly engaging live lectures to students and give them the opportunity to ask questions and interact with other fellow students."
          reverseLayout
        />
        <TestimonialSection />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default Courses;
