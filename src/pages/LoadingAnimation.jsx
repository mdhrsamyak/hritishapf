import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  const animateVarient = {
    initial: {
      opacity: 0,
      scale: 0,
      transformOrigin: "center center",
    },
    animate: {
      opacity: [0, 1, 1, 1, 0],
      scale: [0, 1, 1, 0.9, 20],
      transition: {
        duration: 3,
      },
    },
  };

  const animateDiv = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        delay: 2.7,
        duration: 1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="h-screen w-screen grid place-items-center overflow-hidden bg-black"
        variants={animateDiv}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={animateVarient}
          initial="initial"
          animate="animate"
        >
          <img src="./hmw.png" alt="hm" className="h-200 w-200" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default LoadingAnimation;
