import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { BsBag } from "react-icons/bs";
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
          <div className="menu-icon" onClick={handleClick}>
            <i>{Click ? "X" : "="}</i>
          </div>
          <div className={Click ? "nav-menu active" : "nav-menu"}>
            <div
              className="nav-links-container"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <li className="nav-item">
                <Link
                  to="/about"
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
                <Link
                  to="/cart"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <BsBag className="cartIcon" />
                </Link>
              </li>
            </div>
            <div className="nav-cta">
              {/* <Link to={"/cart"} className="navCtaOutlined">
                <BsBag />
              </Link> */}
              <a
                href={"https://www.portal.tutor365.com"}
                className="navCtaContained"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;
