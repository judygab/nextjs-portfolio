"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon, LifebuoyIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.code === 'Escape') {
        setNavbarOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#121212]/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-700/50'
          : 'bg-white/80 dark:bg-[#121212]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={"/"}
              className="flex items-center space-x-3 text-gray-900 dark:text-white font-bold text-xl lg:text-2xl group transition-colors duration-300"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                whileHover={{ 
                  rotate: 0,
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
                className="relative"
              >
                <LifebuoyIcon className="h-8 w-8 lg:h-10 lg:w-10 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
                {/* <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent font-semibold">
                  Portfolio
                </span> */}
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.path}
                  className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-medium transition-all duration-300 relative group"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2.5 lg:p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/30 border border-gray-300 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 group overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SunIcon className="h-5 w-5 lg:h-6 lg:w-6 text-yellow-500 group-hover:text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MoonIcon className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setNavbarOpen(!navbarOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-green-100 dark:hover:bg-green-900/30 border border-gray-300 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 group"
              aria-label="Toggle navigation menu"
              aria-expanded={navbarOpen}
            >
              <AnimatePresence mode="wait">
                {!navbarOpen ? (
                  <motion.div
                    key="bars"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="x"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-red-500 dark:group-hover:text-red-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay 
            links={navLinks} 
            onClose={() => setNavbarOpen(false)} 
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
