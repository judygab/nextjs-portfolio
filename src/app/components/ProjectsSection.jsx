"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Emei",
    description: "Alternative-pop singer / songwriter.",
    image: "/images/projects/1.png",
    tag: ["All", "Artist", "Servers"],
    gitUrl: "https://discord.gg/nDwSqJEGyP",
    previewUrl: "https://beacons.ai/emei",
  },
  {
    id: 2,
    title: "Haiden",
    description: "American pop singer / songwriter.",
    image: "/images/projects/2.png",
    tag: ["All", "Artist", "Servers"],
    gitUrl: "https://discord.gg/haidenhenderson",
    previewUrl: "https://haiden.komi.io/",
  },
  {
    id: 3,
    title: "Stela Cole",
    description: "American pop singer / songwriter.",
    image: "/images/projects/3.png",
    tag: ["All", "Artist", "Servers"],
    gitUrl: "https://discord.gg/9fveAFPxnx",
    previewUrl: "https://ffm.bio/callmestelacole",
  },
  {
    id: 4,
    title: "BotL Management",
    description: "Hub for all things BotL Management.",
    image: "/images/projects/4.png",
    tag: ["All", "Servers"],
    gitUrl: "https://discord.gg/yASSVVhKSh",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Artist"
          isSelected={tag === "Artist"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Servers"
          isSelected={tag === "Servers"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
