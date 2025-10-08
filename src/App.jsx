import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoadingAnimation from "./pages/LoadingAnimation";

import Page2 from "./pages/Page2";
import Tools from "./pages/Tools";
import Brands from "./pages/Brands";
import Expertise from "./pages/Expertise";
import A1 from "./pages/A1";
import A2 from "./pages/A2";
import ToolsBrands from "./pages/ToolsBrands";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";
import Pagenumber from "./pages/Pagenumber";

function App() {
  const [displayAnimation, setDisplayAnimation] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const sectionRefs = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      setDisplayAnimation(false);
    }, 3000);
  }, []);

  if (displayAnimation) {
    return (
      <div className="fixed top-0 left-0 h-screen w-screen z-[999]">
        <LoadingAnimation />
      </div>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setPageNumber(index + 1);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <ReactLenis root />
      <Router>
        <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Pagenumber number={pageNumber} />

                  <div ref={(el) => (sectionRefs.current[0] = el)}>
                    <HomePage />
                  </div>

                  <div ref={(el) => (sectionRefs.current[1] = el)}>
                    <Page2 />
                  </div>

                  <div ref={(el) => (sectionRefs.current[2] = el)}>
                    <Expertise />
                  </div>

                  <div ref={(el) => (sectionRefs.current[3] = el)}>
                    <ToolsBrands />
                  </div>
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <A1 />
                  <A2 />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
