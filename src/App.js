import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SiteNav from "./Components/SiteNav";
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
