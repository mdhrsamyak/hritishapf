import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CircleLogo({ logo }) {
  const visibleCount = 7;
  const [radius, setRadius] = useState(200);
  const logoSize = 100; // Size of each logo
  const angleStep = (2 * Math.PI) / visibleCount; // Angle between logos
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (logo.length <= visibleCount) return; // No rotation if 7 or fewer

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logo.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, [logo.length]);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setRadius(100);
    } else if (window.innterWidthe < 900) {
      setRadius(150);
    } else {
      setRadius(200);
    }
  }, [window.innerWidth]);

  const getPosition = (slot) => {
    const angle = slot * angleStep; // Angle for this slot
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
      left: `calc(50% + ${x}px - ${logoSize / 2}px)`, // Center horizontally
      top: `calc(50% + ${y}px - ${logoSize / 2}px)`, // Center vertically
    };
  };

  return (
    <div className="relative h-[350px] w-[350px] lg:h-[600px] lg:w-[600px]">
      <AnimatePresence>
        {Array.from({ length: Math.min(visibleCount, logo.length) }).map(
          (_, slot) => {
            const appIndex = (currentIndex + slot) % logo.length;
            const app = logo[appIndex];
            const position = getPosition(slot);

            return (
              <div
                key={`${app.id}-${slot}`} // Unique key for stable animations
                className="absolute flex justify-center items-center w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-[20px]"
                style={position}
              >
                {app.icon}
              </div>
            );
          }
        )}
      </AnimatePresence>
    </div>
  );
}

export default CircleLogo;
