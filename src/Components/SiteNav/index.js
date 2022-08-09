import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { BsBag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";

const SiteNav = () => {
  const [Click, setClick] = useState(false);
  const [Navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClick(!Click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  const isName = Cookies.get("name");
  return (
    <>
      <nav className={Navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onCLick={closeMobileMenu}>
            <img
              alt="Tutor365 Website Logo"
              src="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/Tutor-365-Logo-Final-03.png"
            />
          </Link>
          <div
            className="menu-icon"
            // style={{ display: "flex", alignItems: "center" }}
            onClick={handleClick}
          >
            {/* <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
              <BsBag className="cartIcon" style={{ marginRight: 8 }} />
            </Link> */}
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                marginLeft: "20px",
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div className={Click ? "nav-menu active" : "nav-menu"}>
            <div
              className="nav-links-container"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/courses"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  {/* <Link
                    to="/cart"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    <BsBag className="cartIcon" />
                  </Link> */}
                  {
                    // when user is logged in
                    // <CgProfile />
                  }
                </div>
              </li>
            </div>
            <div className="nav-cta">
              <a
                href={"http://portal.tutor365.com:3001/"}
                className="navCtaContained"
              >
                {isName ? "Dashboard" : "Signup"}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;
