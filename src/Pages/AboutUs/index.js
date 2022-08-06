import React from "react";
import HeroSection from "../../Components/Sections/HeroSection";
import ImageAndTextCtaSection from "../../Components/Sections/ImageAndTextCtaSection";
import PageContainer from "../../Components/PageContainer";
const AboutUs = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <HeroSection />
      <PageContainer>
        <ImageAndTextCtaSection
          secondaryHeading="بسم الله الرحمن الرحيم"
          primaryHeading="Imal Akbar"
          description="I was inspired to create a platform that was inclusive to all. Now whilst you will be wondering why this platform is such low cost, do not underestimate our service. Our top-quality teaching and genuine commitment to help others will give you an unmatched service. Try it today! Qualifications: Studies Mathematics at Cardiff University"
          imageSrc="https://import.cdn.thinkific.com/637998%2Fcustom_site_themes%2Fid%2FpiB4NMhATKGsCTL6w2Qd_288048261_3338624743049485_6187946116624075_n.jpg?width=600"
        />
      </PageContainer>
    </div>
  );
};

export default AboutUs;
