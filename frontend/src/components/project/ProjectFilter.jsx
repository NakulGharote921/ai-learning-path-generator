import React from 'react'

function ProjectFilter() {
  return (
    <div className="relative w-full md:w-auto">
      <select className="appearance-none w-full md:w-64 bg-secondary/20 border border-secondary/40 text-on-surface font-label-md text-label-md rounded-lg pl-md pr-xl py-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer">
        <option value="all">Filter by Skill: All</option>
        <option value="python">Python</option>
        <option value="data-science">Data Science</option>
        <option value="machine-learning">Machine Learning</option>
        <option value="web-dev">Web Development</option>
      </select>
      <span className="material-symbols-outlined absolute right-md top-1/2 transform -translate-y-1/2 text-on-surface-variant pointer-events-none">
        expand_more
      </span>
    </div>
  )
}

export default ProjectFilter
