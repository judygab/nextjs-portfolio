import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        {/* <span>LOGO</span> */}
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={37}
          priority
        />
        <p className="text-[#ADB7BE]">
          &copy;{currentYear} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
