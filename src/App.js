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

const Wrapper = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  localStorage.setItem("user", "ezan");
  // Cookies.set("name", "ezan", { domain: ".tutor365.com" });
  // Cookies.remove("name", { domain: ".tutor365.com" });
  return (
    <div className="App">
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SiteNav />
                  <HomePage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/courses"
              element={
                <>
                  <SiteNav />
                  <Courses />
                  <Footer />
                </>
              }
            />
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
    </div>
  );
}

export default App;
