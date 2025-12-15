import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, onClose }) => {
  const menuVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.nav className="py-6">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.path}
                  onClick={onClose}
                  className="group flex items-center w-full px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 rounded-xl"></span>
                  
                  {/* Icon indicator */}
                  <span className="relative w-2 h-2 bg-green-500 rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                  
                  {/* Link text */}
                  <span className="relative">{link.title}</span>
                  
                  {/* Animated arrow */}
                  <motion.svg
                    className="relative ml-auto w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.li>
            ))}
          </ul>
          
          {/* Bottom decoration */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="mt-6 mx-4 h-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-full"
          />
        </motion.nav>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
