import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold hover:text-green-600 dark:hover:text-white transition-colors duration-300 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-green-600 dark:bg-green-800 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
