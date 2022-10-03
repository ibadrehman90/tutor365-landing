import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Sections/Footer";
import SiteNav from "./Components/SiteNav";
import AboutUs from "./Pages/AboutUs";
import Courses from "./Pages/Courses";
import HomePage from "./Pages/HomePage";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Checkout from "./Pages/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import LoadingOverlay from "react-loading-overlay";
const stripePromise = loadStripe(
  "pk_live_51KkicyDS2GA5sXKmGd0q9ujbZ5abWPwtByGEbOnm3gJZ3QX1vPSZT9iOaYlPSufYCwFrC0H6GPp5J1dM911yUoYv00Amu9IYCg"
);
const Wrapper = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  localStorage.setItem("user", "ezan");
  const [isActive, setIsActive] = React.useState(false);
  // Cookies.set("name", "ezan", { domain: ".tutor365.com" });
  // Cookies.remove("name", { domain: ".tutor365.com" });

  // cookieStore.onchange = (event) => {
  //   alert("cookie changed");
  // };
  // console.log(document.cookie);
  // console.log(isUser);
  useLayoutEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      window.scroll(0, 0);
    }
    if (!isActive) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [isActive]);
  return (
    <>
      <LoadingOverlay
        styles={{
          wrapper: {
            position: "absolute",
            top: 80,
            width: "100%",
            height: "100vh",
            zIndex: 10000000000,
          },
        }}
        active={isActive}
        spinner
        text="Processing"
      />

      <div className="App">
        <Elements
          stripe={stripePromise}
          // options={{
          //   clientSecret:
          //     "sk_live_...i44z",
          // }}
        >
          <BrowserRouter>
            <Wrapper>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <SiteNav />
                      <HomePage setIsActive={setIsActive} isActive={isActive} />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/courses"
                  element={
                    <>
                      <SiteNav />
                      <Courses setIsActive={setIsActive} isActive={isActive} />
                      <Footer />
                    </>
                  }
                />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                  path="/about-us"
                  element={
                    <>
                      <SiteNav />
                      <AboutUs />
                      <Footer />
                    </>
                  }
                />
              </Routes>
            </Wrapper>
          </BrowserRouter>
        </Elements>
      </div>
    </>
  );
}

export default App;
