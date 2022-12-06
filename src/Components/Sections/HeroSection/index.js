import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import BannerImg from "../../../Assets/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying.jpeg";
const HeroSection = ({ rightText, imageLink = BannerImg }) => {
  const cache = {};
  const generatePlaceholder = (ratio, color) => {
    const width = 1;
    const height = ratio;
    const key = `${ratio},${color}`;

    if (!cache[key]) {
      cache[key] = `data:image/svg+xml;base64, ${window.btoa(
        `<svg height="${height}" width="${width}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="${width}" height="${height}" fill="${color}"/>
      </svg>`
      )}`;
    }

    return cache[key];
  };
  const [placeholder, setPlaceholder] = React.useState(
    generatePlaceholder(80, "gray")
  );
  React.useEffect(() => {
    console.log("imageLink", imageLink);
    if (imageLink.length) {
      setPlaceholder(imageLink);
    }
    // const Banner = import(imageLink).then((res) => {
    //   console.log("HEYYYY", res);
    //   return res.default;
    // });
    // Banner.then((img) => {
    //   setTimeout(() => {
    //     setPlaceholder(img);
    //   }, 1500);
    // }).catch(() => {
    //   setPlaceholder(imageLink);
    // });
  }, imageLink);

  return (
    <Suspense fallback={<img src={placeholder} alt={"hero-loading"} />}>
      {/* <OriImg src={imageLink} alt={"hero"} /> */}
      <div className="HeroSection">
        {/* <OriImg src={placeholder} alt={"hero"} /> */}
        <img
          loading="lazy"
          // srcSet="..."
          className="heroSectionBg"
          alt="hero"
          src={placeholder}
        />
        <div
          className={
            rightText ? "heroSectionText rightText" : "heroSectionText"
          }
        >
          <div className="primaryHeading">
            <h1>Affordable High Quality Education</h1>
          </div>
          <div className="secondaryText">
            <p>
              Live streamed classes from highly qualified and well-experienced
              teachers. Interactive learning with online assessments and
              recorded lectures.
            </p>
          </div>
          <Link to={"/courses"} className="heroSecCta">
            Browse Courses
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default HeroSection;
