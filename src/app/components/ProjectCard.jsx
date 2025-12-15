import React, { useState, useEffect } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  id,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  mobileColor,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className={`group cursor-pointer ${
      isMobile && mobileColor 
        ? `border-2 border-transparent bg-gradient-to-r ${mobileColor.gradient} p-0.5 rounded-xl project-card-mobile` 
        : ''
    }`}>
      <div className={`${isMobile && mobileColor ? 'bg-white dark:bg-[#121212] rounded-lg' : ''}`}>
        <div className={`h-48 sm:h-52 md:h-64 lg:h-72 ${isMobile && mobileColor ? 'rounded-lg' : 'rounded-t-xl'} relative overflow-hidden shadow-lg ${
          isMobile && mobileColor ? `bg-gradient-to-br ${mobileColor.gradient}` : 'bg-gray-200 dark:bg-gray-900'
        }`}>
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`object-cover transition-all duration-500 ${
            isMobile ? 'grayscale-0 brightness-110' : 'grayscale group-hover:grayscale-0'
          } group-hover:scale-110 group-hover:brightness-110`}
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFxqJvzNhsnt0XYomgKZRQ0p0kEFDMlzdeofCH1MGRB6j0nq/"
        />
        <div className="overlay items-center justify-center absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex">
          <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <Link
              href={gitUrl}
              className="h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-white/70 hover:border-white bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 group/link"
            >
              <CodeBracketIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-hover/link:scale-110 transition-all duration-300" />
            </Link>
            <Link
              href={"/projects/" + id}
              className="h-12 w-12 sm:h-14 sm:w-14 border-2 relative rounded-full border-white/70 hover:border-white bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 group/link"
            >
              <EyeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white group-hover/link:scale-110 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
        <div className={`text-gray-900 dark:text-white ${isMobile && mobileColor ? 'rounded-b-lg' : 'rounded-b-xl'} bg-gray-100 dark:bg-[#181818] p-3 sm:p-4 md:p-6 shadow-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300`}>
        <h5 className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 line-clamp-2 ${
          isMobile && mobileColor ? mobileColor.text : 'group-hover:text-green-600 dark:group-hover:text-green-400'
        }`}>{title}</h5>
          <p className="text-gray-600 dark:text-[#ADB7BE] text-sm sm:text-base group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
