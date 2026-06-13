import React from 'react'

function ProjectCard({ icon, title, description, time, tags, level, accent = false, sourceUrl }) {
  return (
    <article className="bg-white rounded-2xl p-md shadow-soft hover:shadow-hover border border-transparent hover:border-primary/10 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
      {accent ? (
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-secondary to-primary opacity-20 rounded-bl-full pointer-events-none" />
      ) : null}

      <div className="flex justify-between items-start mb-md">
        <div className="p-sm bg-secondary/20 rounded-xl text-primary">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <span className="bg-surface-container-high text-primary font-label-sm text-label-sm px-sm py-xs rounded-full">
          {level}
        </span>
      </div>

      <h4 className="font-headline-md text-headline-md text-primary mb-xs">
        {title}
      </h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-1">
        {description}
      </p>

      <div className="flex items-center gap-sm mb-md text-on-surface-variant font-label-sm text-label-sm">
        <span className="material-symbols-outlined text-[18px]">schedule</span>
        <span>{time}</span>
      </div>

      <div className="flex flex-wrap gap-xs mb-lg">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-secondary/10 text-secondary-fixed-variant font-label-sm text-label-sm px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        className="w-full bg-accent text-white font-label-md text-label-md py-sm rounded-lg shadow-btn active:translate-y-1 active:shadow-none transition-all mt-auto opacity-90 hover:opacity-100 text-center"
        href={sourceUrl || '#'}
        target={sourceUrl ? '_blank' : undefined}
        rel={sourceUrl ? 'noreferrer' : undefined}
      >
        Start Project
      </a>
    </article>
  )
}

export default ProjectCard
