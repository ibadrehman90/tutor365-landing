import React from "react";
import PageContainer from "../../Components/PageContainer";
import BenefitSection from "../../Components/Sections/BenefitSection";
import FaqSection from "../../Components/Sections/FaqSection";
import Footer from "../../Components/Sections/Footer";
import HeroSection from "../../Components/Sections/HeroSection";
import ImageAndTextCtaSection from "../../Components/Sections/ImageAndTextCtaSection";
import OurStory from "../../Components/Sections/OurStory";
import RegisterTodaySection from "../../Components/Sections/RegisterTodaySection";
import TestimonialSection from "../../Components/Sections/TestimonialSection";

let secondSectionData = [
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/language-school-illustration-25.png",
    heading: "Live Classes",
    desc: "Our teachers give live lectures that allow students to ask questions and interact with their teachers like in actual classroom.",
  },
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/language-school-04.png",
    heading: "Affordable Pricing",
    desc: "Affordable yet high-quality education that is around just 10p per hour. Our low prices make education accessible for all.",
  },
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/language-school-illustration-17.png",
    heading: "24/7 Academic Support",
    desc: "Missed a live lecture? No worries becuase our recorded videos and educational material is available 24/7.",
  },
];
let whyChooseUsData = [
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/educator-1.png",
    heading: "Highly-qualified Teachers",
    desc: "We strongly believe that the high results require qualified teachers with years of experience in their respective fields.",
  },
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/global.png",
    heading: "Globally Accessible",
    desc: "Education shouldn't be restricted to only classrooms. Thus, all our teachers are trained and passionate about giving Live lectures to students across various countries.",
  },
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/price.png",
    heading: "Affordability",
    desc: "Education is every child's right and we are striving to omit financial strains from the equation by keeping all our courses extremely affordable.",
  },
  {
    image:
      "https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/learner.png",
    heading: "Become a Better Learner",
    desc: "We train and polish students beyond their syllabus. We give them a chance to explore new domains through encouragement and mentorship.",
  },
];

const HomePage = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <HeroSection />
      <PageContainer>
        <div style={{ margin: "30px 0px" }}>
          <BenefitSection data={secondSectionData} primaryHeadingColor />
        </div>
        <BenefitSection
          data={whyChooseUsData}
          heading="Why Tutor365?"
          moreData={true}
        />
        <ImageAndTextCtaSection
          secondaryHeading="LEARN FROM HOME"
          primaryHeading="Immersive Learning Experience"
          description="High-quality education from the comfort of your own home while engaging with instructors and fellow students in real-time. Browse through any module and watch any recorded lecture from the platform."
        />
        <RegisterTodaySection />
        <ImageAndTextCtaSection
          imageSrc="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/children-holding-piles-books-scaled.jpeg"
          secondaryHeading="LEARN FROM HOME"
          primaryHeading="Immersive Learning Experience"
          description="High-quality education from the comfort of your own home while engaging with instructors and fellow students in real-time. Browse through any module and watch any recorded lecture from the platform."
          reverseLayout
        />
        <OurStory />
        <TestimonialSection />
        <FaqSection />
      </PageContainer>
      <Footer />
    </div>
  );
};

export default HomePage;
