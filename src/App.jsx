import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import A1 from "./pages/A1";
import A2 from "./pages/A2";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <ReactLenis root />
      <div className="overflow-y-scroll" style={{ scrollbarWidth: "none" }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainPage />} />
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
    </BrowserRouter>
  );
}
