"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectPageClient = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 max-w-4xl mt-20 min-h-screen"
    >
      <Link
        href="/projects"
        className="inline-block mb-12 text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 text-lg"
      >
        ← Back to Projects
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8"
      >
        {project.title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12 mb-12"
      >
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {project.notes && (
            <div className="mb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                Design Notes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.notes}
              </p>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.gitUrl && project.gitUrl !== "/" && project.gitUrl !== "" && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
              >
                View Code
              </a>
            )}
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {project.details && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Project Details
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.details}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectPageClient;
