import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-green-500 bg-green-500 shadow-lg"
    : "text-gray-700 dark:text-[#ADB7BE] border-gray-300 dark:border-slate-600 hover:border-green-500 dark:hover:border-white hover:text-green-600 dark:hover:text-white hover:bg-green-50 dark:hover:bg-slate-800 hover:shadow-md";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-8 py-3 text-xl cursor-pointer font-medium transition-all duration-300 transform hover:scale-105`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
