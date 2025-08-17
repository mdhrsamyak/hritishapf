import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoadingAnimation from "./pages/LoadingAnimation";

import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Tools from "./pages/Tools";
import Brands from "./pages/Brands";

function App() {
  const [displayAnimation, setDisplayAnimation] = useState(false);

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
          className="overflow-y-scroll px-8 md:px-30"
          style={{ scrollbarWidth: "none" }}
        >
          <HomePage />
          <Page2 />
          <Page3 />
          <Tools />
          <Brands />
        </div>
      )}
    </>
  );
}

export default App;
