import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Cookies from "js-cookie";
import { STUDENT_PORTAL_PAGE_URL } from "../../App/api";

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
  const [isUser, setUser] = React.useState();

  React.useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      let result = JSON.parse(user);
      setUser(result);
    }
  }, []);

  function listenCookieChange(callback, interval = 1000) {
    let lastCookie = document.cookie;
    setInterval(() => {
      let cookie = document.cookie;
      if (cookie !== lastCookie) {
        try {
          callback({ oldValue: lastCookie, newValue: cookie });
        } finally {
          lastCookie = cookie;
        }
      }
    }, interval);
  }
  listenCookieChange(({ oldValue, newValue }) => {
    const user = Cookies.get("user");

    if (user) {
      let result = JSON.parse(user);

      setUser(result);
    } else {
      setUser(undefined);
    }
  }, 1000);
  console.log(isUser);
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
              <a href={`${STUDENT_PORTAL_PAGE_URL}`} className="navCtaContained">
                {isUser ? "Dashboard" : "Signup"}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SiteNav;
