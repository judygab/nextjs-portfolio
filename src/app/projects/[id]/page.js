import React from "react";
import { projectsData } from "../../components/data";
import { notFound } from "next/navigation";
import ProjectPageClient from "./ProjectPageClient";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectPage = ({ params }) => {
  // Ensure params.id exists
  if (!params?.id) {
    notFound();
  }

  const project = projectsData.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  // Ensure required fields exist with defaults
  const safeProject = {
    ...project,
    title: project.title || 'Untitled Project',
    description: project.description || 'No description available.',
    notes: project.notes || 'No additional notes available.',
    details: project.details || 'No detailed information available.',
    technologies: project.technologies || [],
    image: project.image || '/images/projects/default.png'
  };

  return <ProjectPageClient project={safeProject} />;
};

export default ProjectPage;
