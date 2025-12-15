"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  AcademicCapIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";
import { 
  FaNodeJs, 
  FaReact, 
  FaJs, 
  FaDatabase 
} from "react-icons/fa";
import { 
  SiExpress, 
  SiPostgresql, 
  SiSequelize 
} from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
        <button className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700/50 hover:border-green-400 dark:hover:border-green-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <FaNodeJs className="h-7 w-7 sm:h-9 sm:w-9 text-green-600 dark:text-green-500 mb-2 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">Node.js</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700/50 hover:border-green-400 dark:hover:border-green-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <SiExpress className="h-7 w-7 sm:h-9 sm:w-9 text-green-600 dark:text-green-500 mb-2 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">Express</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700/50 hover:border-green-400 dark:hover:border-green-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <SiPostgresql className="h-7 w-7 sm:h-9 sm:w-9 text-green-600 dark:text-green-500 mb-2 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">PostgreSQL</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700/50 hover:border-green-400 dark:hover:border-green-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <SiSequelize className="h-7 w-7 sm:h-9 sm:w-9 text-green-600 dark:text-green-500 mb-2 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">Sequelize</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700/50 hover:border-green-400 dark:hover:border-green-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <FaJs className="h-7 w-7 sm:h-9 sm:w-9 text-green-600 dark:text-green-500 mb-2 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">JavaScript</span>
        </button>
        <button className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:bg-green-50 dark:hover:bg-gray-700/50 hover:border-green-400 dark:hover:border-green-500 hover:scale-105 hover:shadow-lg transition-all duration-300 group cursor-pointer">
          <FaReact className="h-7 w-7 sm:h-9 sm:w-9 text-green-600 dark:text-green-500 mb-2 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">React</span>
        </button>
      </div>
    ),
  },
  {
    title: "Learning & Certifications",
    id: "learning-certifications",
    content: (
      <ul className="space-y-2">
        <li className="flex items-center p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-green-200 dark:hover:border-gray-700 hover:shadow-md">
          <AcademicCapIcon className="h-6 w-6 text-green-500 mr-4 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="group-hover:text-green-600 dark:group-hover:text-green-400 font-semibold text-gray-800 dark:text-white transition-colors duration-300">Responsive Web Design – freeCodeCamp (2025)</span>
        </li>
        <li className="flex items-center p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-green-200 dark:hover:border-gray-700 hover:shadow-md">
          <AcademicCapIcon className="h-6 w-6 text-green-500 mr-4 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="group-hover:text-green-600 dark:group-hover:text-green-400 font-semibold text-gray-800 dark:text-white transition-colors duration-300">JavaScript Algorithms and Data Structures – freeCodeCamp (2025)</span>
        </li>
        <li className="flex items-center p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-green-200 dark:hover:border-gray-700 hover:shadow-md">
          <AcademicCapIcon className="h-6 w-6 text-green-500 mr-4 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="group-hover:text-green-600 dark:group-hover:text-green-400 font-semibold text-gray-800 dark:text-white transition-colors duration-300">The Web Developer Bootcamp 2024 – Udemy (2025)</span>
        </li>
        <li className="flex items-center p-3 rounded-xl hover:bg-green-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 group border border-transparent hover:border-green-200 dark:hover:border-gray-700 hover:shadow-md">
          <AcademicCapIcon className="h-6 w-6 text-green-500 mr-4 group-hover:animate-pulse group-hover:scale-110 transition-all duration-300" />
          <span className="group-hover:text-green-600 dark:group-hover:text-green-400 font-semibold text-gray-800 dark:text-white transition-colors duration-300">Google UX Design Certificate – Coursera (In Progress)</span>
        </li>
      </ul>
    ),
  },
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-8 sm:py-12 lg:py-16" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] grayscale hover:grayscale-0 hover:brightness-125 hover:contrast-110 hover:saturate-125 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-green-500/50 hover:hue-rotate-90 transition-all duration-500 ease-out transform rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image 
                src="/images/projects/recpic.png" 
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 384px, 450px"
                className="object-cover"
                alt="Profile picture"
                priority
              />
            </motion.div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div 
            className="order-1 lg:order-2 text-center lg:text-left flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-green-600 dark:from-white dark:via-green-100 dark:to-green-300 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 font-medium"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I specialize in React, Next.js, Tailwind CSS, and love turning
              designs into fast, functional websites that feel great to use. I
              bring a sharp eye for detail, a love for smooth UI animations, and a
              problem-solving mindset to every project. Whether it&apos;s building
              interfaces from scratch or collaborating across teams, I&apos;m all
              about creating things that work beautifully. Also: obsessed with
              good design, powered by caffeine, and occasionally lost in a sea of
              browser tabs.
            </motion.p>
            
            {/* Tab Buttons */}
            <motion.div 
              className="flex flex-row justify-center lg:justify-start gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("learning-certifications")}
                active={tab === "learning-certifications"}
              >
                Learning & Certifications
              </TabButton>
              
            </motion.div>
            
            
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              key={tab} // This will trigger animation when tab changes
            >
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
