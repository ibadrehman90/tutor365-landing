import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageContainer from "./Components/PageContainer";
import BenefitSection from "./Components/Sections/BenefitSection";
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
                  <PageContainer>
                    <BenefitSection />
                  </PageContainer>
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
