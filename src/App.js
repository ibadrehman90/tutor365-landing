import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteNav from "./Components/SiteNav";
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
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <SiteNav />
                <Courses />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
