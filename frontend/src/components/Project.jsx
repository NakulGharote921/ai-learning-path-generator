import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import ProjectFilter from './project/ProjectFilter'
import ProjectSection from './project/ProjectSection'
import { getRecommendedResources } from '../lib/api'

function Project() {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function loadResources() {
      try {
        const response = await getRecommendedResources({ skillLevel: 'beginner' })
        if (!active) return
        setResources(Array.isArray(response.resources) ? response.resources : [])
      } catch (err) {
        if (!active) return
        setError(err instanceof Error ? err.message : 'Failed to load resources')
      } finally {
        if (active) setLoading(false)
      }
    }

    loadResources()

    return () => {
      active = false
    }
  }, [])

  const beginnerProjects = useMemo(
    () =>
      resources.map((resource) => ({
        icon: resource.resource_type === 'video' ? 'play_circle' : 'description',
        title: resource.title,
        description: resource.description || 'No description available yet.',
        time: resource.goal ? `Goal: ${resource.goal}` : 'From database',
        tags: resource.tags || [],
        level: resource.skill_level,
        sourceUrl: resource.source_url,
      })),
    [resources],
  )

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
              Apply your knowledge through guided, hands-on builds pulled from the database.
            </p>
          </div>

          <ProjectFilter />
        </header>

        {error ? (
          <div className="mb-lg rounded-xl border border-red-200 bg-red-50 px-md py-sm text-red-700">
            {error}
          </div>
        ) : null}

        {loading ? (
          <div className="mb-xl rounded-xl border border-dashed border-outline-variant px-md py-xl text-on-surface-variant">
            Loading projects from the backend...
          </div>
        ) : null}

        <ProjectSection
          title="Database Projects"
          accentBarClass="bg-secondary"
          projects={beginnerProjects}
        />
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default Project
