import React from 'react'
import { projectsData } from '../components/data'
import Link from 'next/link'
import Image from 'next/image'

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 mt-20">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="block"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-900">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyejFxqJvzNhsnt0XYomgKZRQ0p0kEFDMlzdeofCH1MGRB6j0nq/"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.tag.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage