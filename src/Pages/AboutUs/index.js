import React from "react";
import HeroSection from "../../Components/Sections/HeroSection";
import ImageAndTextCtaSection from "../../Components/Sections/ImageAndTextCtaSection";
import PageContainer from "../../Components/PageContainer";
const AboutUs = () => {
  return (
    <div style={{ marginTop: 50, padding: "10px 0px" }}>
      {/* <HeroSection /> */}
      <PageContainer>
        <ImageAndTextCtaSection
          secondaryHeading="بسم الله الرحمن الرحيم"
          primaryHeading="Imal Akbar"
          description="I was inspired to create a platform that was inclusive to all. Now whilst you will be wondering why this platform is such low cost, do not underestimate our service. Our top-quality teaching and genuine commitment to help others will give you an unmatched service. Try it today! Qualifications: Studies Mathematics at Cardiff University"
          imageSrc="https://import.cdn.thinkific.com/637998%2Fcustom_site_themes%2Fid%2FpiB4NMhATKGsCTL6w2Qd_288048261_3338624743049485_6187946116624075_n.jpg?width=600"
        />
        <ImageAndTextCtaSection
          primaryHeading="Adilah Rafiq"
          description="A dedicated and passionate teacher with a strong academic record. Holding seven years of valuable experience in the education sector. Miss Rafiq is able to establish a supportive relationship with all students, with an aim of promoting and reinforcing a student's independence and self-esteem. She is a qualified NSPCC counsellor and offers a holistic approach to educating others, regardless of your age, background or academic ability. Every child can and will succeed! Qualifications: MA in Psychology and Education- University of Warwick PGCE with specialism in English- University of Warwick"
          imageSrc="https://import.cdn.thinkific.com/637998%2Fcustom_site_themes%2Fid%2FvTW0l9pPQTe6jMUhtjbf_IMG_20220601_223608_007%20%281%29.jpg?width=600"
          reverseLayout={true}
        />
      </PageContainer>
    </div>
  );
};

export default AboutUs;
