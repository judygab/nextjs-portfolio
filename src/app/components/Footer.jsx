import React from "react";
import { LifebuoyIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="footer border-t-2 z-10 border-t-gray-200 dark:border-t-[#33353F] border-l-transparent border-r-transparent text-gray-900 dark:text-white transition-colors duration-300 bg-gray-50 dark:bg-transparent">
      <div className="container p-12 flex justify-between items-center">
        <LifebuoyIcon className="h-8 w-8 text-green-500 animate-spin hover:animate-bounce transition-all duration-300" />
        <p className="text-gray-500 dark:text-slate-600 transition-colors duration-300 font-medium">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
