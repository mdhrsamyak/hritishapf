import React from "react";
import { motion } from "framer-motion";

function Pagenumber({ number }) {
  return (
    <motion.div
      key={number}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-2 left-2 text-[30px] lg:text-[50px] font-extrabold text-[#E5E2E2F7] z-20"
    >
      {number.toString().padStart(2, "0")}
    </motion.div>
  );
}

export default Pagenumber;
