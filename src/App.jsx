import { useEffect, useState } from "react";
import "./App.css";
import SnakeGame from "./components/SnakeGame";
import SplashCursor from "./components/SplashCursor";
import Contact from "./pages/Contact";

import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import LoadingAnimation from "./pages/LoadingAnimation";
import Projects from "./pages/Projects";
import Sidebar from "./pages/Sidebar";
import Skills from "./pages/Skills";
import Animate from "./pages/LoadingAnimation";

function App() {
  const [displayAnimation, setDisplayAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplayAnimation(false);
    }, 3000);
  }, []);

  return (
    <>
      {displayAnimation ? (
        <div className="fixed top-0 left-0 h-screen w-screen z-[999]">
          <LoadingAnimation />
        </div>
      ) : (
        <div
          className="overflow-y-scroll relative"
          style={{ scrollbarWidth: "none" }}
        >
          <HomePage />
        </div>
      )}
    </>
  );
}

export default App;
