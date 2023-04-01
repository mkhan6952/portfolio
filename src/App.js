import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Aside from "./components/Aside/Aside";
import About from "./components/About/About";

import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

import ClockLoader from "react-spinners/ClockLoader";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 8000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <ClockLoader color={"#ec1839"} loading={loading} size={70} />
        </div>
      ) : (
        <>
          <Aside />
          <Home />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutPage" element={<About />} />
            <Route path="/PortfolioPage" element={<Portfolio />} />
            <Route path="/ContactPage" element={<Contact />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
