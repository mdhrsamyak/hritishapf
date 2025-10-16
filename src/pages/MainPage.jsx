// MainPage.jsx
import { useEffect, useRef, useState } from "react";
import Pagenumber from "./Pagenumber";
import HomePage from "./HomePage";
import Page2 from "./Page2";
import Expertise from "./Expertise";
import ToolsBrands from "./ToolsBrands";

export default function MainPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const sectionRefs = useRef([]);

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

    // Observe all sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []); // ✅ runs again each time this component mounts

  return (
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
  );
}
