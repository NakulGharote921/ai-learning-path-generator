import React from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import ProjectFilter from './project/ProjectFilter'
import ProjectSection from './project/ProjectSection'
import { beginnerProjects, intermediateProjects } from './project/projectData'

function Project() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #FFF8DE; }
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #dce2f5; border-radius: 4px; }

            @media (max-width: 767px) {
              .side-nav { transform: translateX(-100%); }
              .mobile-bottom-nav { display: flex; }
              .main-content { margin-left: 0; }
            }
            @media (min-width: 768px) {
              .mobile-bottom-nav { display: none; }
              .top-nav { display: none; }
            }
          `,
        }}
      />

      <MobileTopNav />
      <Sidebar />

      <main className="main-content md:ml-64 overflow-y-auto w-full h-full p-margin md:p-xl max-w-[1440px] mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-xs">
              Project Hub
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Apply your knowledge through guided, hands-on builds.
            </p>
          </div>

          <ProjectFilter />
        </header>

        <ProjectSection
          title="Beginner Foundations"
          accentBarClass="bg-secondary"
          projects={beginnerProjects}
        />

        <ProjectSection
          title="Intermediate Mechanics"
          accentBarClass="bg-primary-container"
          projects={intermediateProjects}
        />
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default Project
