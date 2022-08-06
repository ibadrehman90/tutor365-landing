import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Sections/Footer";
import SiteNav from "./Components/SiteNav";
import AboutUs from "./Pages/AboutUs";
import Courses from "./Pages/Courses";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
