import { useEffect, useState } from "react";
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
        <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
          <Sidebar />
          <HomePage />
          <Page2 />
          <Expertise />
          <ToolsBrands />
          <Footer />
          <A1 />
          <A2 />
        </div>
      )}
    </>
  );
}

export default App;
