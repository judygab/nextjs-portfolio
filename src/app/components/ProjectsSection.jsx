"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UNETR for Breast Cell Segmentation",
    description: "In this project, the UNETR architecture as described in the respective paper is implemented. The model is then trained on Breast Cell dataset consisting of images & masks of malignant and benign cells.",
    image: "/images/projects/unetr.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/sanyakapoor27/UNETR-train/blob/main/UNETR.ipynb",
    previewUrl: "https://colab.research.google.com/drive/1y4qLvQn1Q34YDQSAjfkGbaqswCBzbcQ9?usp=drive_link",
  },
  {
    id: 2,
    title: "Brain Tumor Detector App",
    description: "This is an app created using flutter to detect brain tumors in MRI scans. A yolov5 model is trained and converted to tflite which is integrated with the flutter app. ",
    image: "/images/projects/1706341073514.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sanyakapoor27/brain_tumor_detector",
    previewUrl: "https://github.com/sanyakapoor27/brain_tumor_detector",
  },
  {
    id: 3,
    title: "Ensembled Unet for Segmentation",
    description: "In this project, 2 U-Net models with VGG16 & VGG19 as encoders are assembled together to segment electron microscopy dataset images.",
    image: "/images/projects/Picsart_24-01-27_13-10-51-906.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/sanyakapoor27/ensemble_segmentation",
    previewUrl: "https://colab.research.google.com/drive/1Nkiu4aPeFvzTdyMSknQlHEDVqjhTClLg?usp=drive_link",
  },
  {
    id: 4,
    title: "PCOS Classification with VGG16-SVM",
    description: "In this project, a hybrid approach is used to classify ultrasound images as PCOS or Normal. The preprocessing stage begins with intensity transformation, followed by gaussian filter and histogram equalization. Otsu thresholding is utilized to create a binary mask. VGG16 is employed to extract features which are then further categorized by SVM.",
    image: "/images/projects/Picsart_24-01-27_13-09-21-087.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/sanyakapoor27/PCOS-Classification-with-VGG16-SVM",
    previewUrl: "https://colab.research.google.com/drive/1dmtJ_810IhKguLe7k9sgP3-hKykTC_u0?usp=sharing",
  },
  {
    id: 5,
    title: "BreaKHis Classification with EfficientNetV2S-CBAM",
    description: "In this project, the benchmark BreaKHis dataset consisting of benign and malignant images of breast cancer is used. The histopathology stains in all the images are first normalized by using Adaptive Histogra Equalization to brighten and Gaussian Filter to lessen the noise. The channel and spatial attention blocks are then applied to the pretrained EfficientNetV2S model.",
    image: "/images/projects/Picsart_24-01-27_13-10-06-461.jpg",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/sanyakapoor27/BreaKHis-Classification-with-CBAM-Block",
    previewUrl: "https://colab.research.google.com/drive/1qkpb4uiPCXm2Mls0VaDvMTnJV5S2nC5y?usp=drive_link",
  },
  {
    id: 6,
    title: "Reway site",
    description: "This contains the sections i have developed for the site currently used by Reway Technologies.",
    image: "/images/projects/reway.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sanyakapoor27/reway-site-sections",
    previewUrl: "https://reway.tech/",
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
          name="ML"
          isSelected={tag === "ML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
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
