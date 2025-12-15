"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const textRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const isTextInView = useInView(textRef, { once: true, threshold: 0.1 });
  const isImageInView = useInView(imageRef, { once: true, threshold: 0.1 });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Desktop animations (unchanged)
  const desktopTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const desktopImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  // Mobile scroll-triggered animations
  const mobileTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const mobileImageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Mobile: Avatar first, Desktop: Text first */}
          <motion.div
            ref={imageRef}
            initial={isMobile ? "hidden" : "hidden"}
            animate={isMobile ? (isImageInView ? "visible" : "hidden") : "visible"}
            variants={isMobile ? mobileImageVariants : desktopImageVariants}
            transition={!isMobile ? { duration: 0.5 } : undefined}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-600 via-green-500 to-green-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-32 h-32 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#181818] dark:to-[#282828] border-4 border-white dark:border-gray-700 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 group-hover:scale-105 
                            mobile-tap-animation">
                <Image
                  src="/images/projects/mypic.png"
                  alt="Pawina's profile picture"
                  fill
                  sizes="(max-width: 1024px) 128px, 384px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            ref={textRef}
            initial={isMobile ? "hidden" : "hidden"}
            animate={isMobile ? (isTextInView ? "visible" : "hidden") : "visible"}
            variants={isMobile ? mobileTextVariants : desktopTextVariants}
            transition={!isMobile ? { duration: 0.5 } : undefined}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="bg-gradient-to-r from-green-800 to-green-600 text-transparent bg-clip-text mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-gray-900 dark:text-white transition-colors duration-300">Hi There, I&apos;m </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Pawina",
                  1000,
                  "Frontend Developer",
                  1000,
                  "Design System Lover",
                  1000,
                  "And love dog",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-700 dark:text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl transition-colors duration-300 max-w-lg mx-auto lg:mx-0">
              I&apos;m a frontend developer who turns designs into real,
              responsive, and sometimes magically animated websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="px-8 py-3 w-full sm:w-auto text-center rounded-full bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                          mobile-button-tap lg:active:scale-105 active:scale-95 active:shadow-md lg:active:shadow-xl"
              >
                Hire Me
              </Link>
              <a
                href="/resume/Pawina-Resume.pdf"
                download="Resume-Pawina.pdf"
                className="px-2 py-2 w-full sm:w-auto rounded-full bg-gradient-to-br from-green-800 to-green-600 hover:from-green-700 hover:to-green-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300
                          mobile-button-tap lg:active:scale-105 active:scale-95 active:shadow-md lg:active:shadow-xl"
              >
                <span className="block bg-white dark:bg-[#121212] hover:bg-gray-50 dark:hover:bg-slate-800 rounded-full px-6 py-2 text-gray-800 dark:text-white transition-colors duration-300 font-semibold text-center">
                  Download CV
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
