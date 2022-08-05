import React from "react";
import "./styles.css";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import { GiRss } from "react-icons/gi";
const Footer = () => {
  let socialLinks = [
    {
      icon: <GrFacebookOption fontSize={30} />,
      link: "/",
    },
    {
      icon: <GrTwitter fontSize={30} />,
      link: "/",
    },
    {
      icon: <GrInstagram fontSize={30} />,
      link: "/",
    },
    {
      icon: <GiRss fontSize={30} />,
      link: "/",
    },
  ];
  return (
    <div className="Footer">
      <div className="footerInfo">© Copyright Tutor365 2022</div>
      <ul
        style={{
          display: "flex",
          listStyleType: " none",
          flexWrap: "wrap",
          marginLeft: 0,
          paddingLeft: 0,
        }}
      >
        {socialLinks.map((obj, index) => {
          return (
            <li key={index}>
              <a
                style={{
                  textDecoration: "none",
                  color: "#323232",
                  marginRight: index + 1 !== socialLinks.length && 20,
                }}
                href={obj.link}
              >
                {obj.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
