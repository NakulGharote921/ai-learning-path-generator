import React from 'react'
import ProjectCard from './ProjectCard'
import FadeInSection from '../home/FadeInSection'

function ProjectSection({ title, accentBarClass, projects }) {
  return (
    <FadeInSection className="mb-xl">
      <div className="flex items-center gap-sm mb-lg">
        <div className={`h-8 w-2 ${accentBarClass} rounded-full`} />
        <h3 className="font-headline-md text-headline-md text-primary">{title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} accent={project.accent} />
        ))}
      </div>
    </FadeInSection>
  )
}

export default ProjectSection
