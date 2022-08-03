import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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
                  <img
                    width={"100%"}
                    alt="hero"
                    src="https://wordpress-774869-2749119.cloudwaysapps.com/wp-content/uploads/2022/05/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying-scaled.jpeg"
                  />
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
