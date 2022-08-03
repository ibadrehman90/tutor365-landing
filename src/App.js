import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "./Components/Sections/HeroSection";
import SiteNav from "./Components/SiteNav";

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
                <div style={{ marginTop: 80 }}>
                  <HeroSection />
                </div>
                <h2>Landing Page</h2>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
