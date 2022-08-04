import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import "./styles.css";

const OurStory = () => {
  let ourStoryNumbers = [
    { label: "Students", number: 300 },
    { label: "Hours Of Live Classes", number: 20 },
    { label: "Recorded Lectures", number: 800 },
    { label: "Qualified Teachers", number: 6 },
  ];
  return (
    <div className="OurStory">
      <div className="OurStoryContainer">
        <div className="textContainer">
          <h5>ABOUT US</h5>
          <h2 style={{ margin: 0 }}>Our Story</h2>
          <p className="descriptionText">
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
            ante ipsum primis Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus. Vivamus suscipit tortor eget felis porttitor
            volutpat. Vestibulum ant
          </p>
        </div>
        <div className="OurStoryVid">
          <iframe
            width="450"
            height="250"
            src="https://www.youtube.com/embed/FkQuawiGWUw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="OurStoryNumbers">
        {ourStoryNumbers.map((obj, index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "max-content",
                padding: "10px 20px",
                alignItems: "center",
              }}
              key={index}
            >
              <AnimatedNumbers
                includeComma
                animateToNumber={obj.number}
                fontStyle={{ fontSize: 40, color: "#f96623" }}
              />
              <div style={{ fontSize: 18, color: "#002147", marginTop: 20 }}>
                {obj.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurStory;
