import React from "react";

const SlideComponent = ({ obj }) => {
  let {
    testiomnialMessage,
    testimonialGiverName,
    testimonialGiverOccupation,
    testimonialGiverProfilePic,
  } = obj;
  return (
    <div>
      <img
        alt="testimonail quote"
        src="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/quote.png"
      />
      <p
        style={{
          textAlign: "left",
          lineHeight: "1.6em",
          fontStyle: "italic",
          fontSize: 20,
          color: "#7d7d7d",
          maxWidth: 500,
        }}
      >
        {testiomnialMessage}
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          width={50}
          height={50}
          style={{ borderRadius: "50px" }}
          src={testimonialGiverProfilePic}
          alt={testimonialGiverName}
        />
        <div style={{ textAlign: "left", marginLeft: 10 }}>
          <h4 style={{ marginBottom: 5, marginTop: 5 }}>
            {testimonialGiverName}
          </h4>
          <p style={{ margin: 0, color: "#7d7d7d" }}>
            {testimonialGiverOccupation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SlideComponent;
