import React from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import RoadmapTimeline from './roadmap/RoadmapTimeline'
import '../styles/roadmap.css'

/**
 * Roadmap — Full-page learning path view.
 * Shares the same Sidebar/navigation shell as the Dashboard.
 */
function Roadmap() {
  return (
    <div>
      {/* Mobile top bar */}
      <MobileTopNav />

      {/* Shared desktop sidebar */}
      <Sidebar activePage="roadmap" />

      {/* Main content */}
      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        {/* Page header */}
        <header className="max-w-4xl mx-auto mb-xl">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">
            Learning Path
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Track your progress through the core curriculum. Your customised
            journey adapts as you master concepts alongside your AI Tutor.
          </p>
        </header>

        {/* Timeline */}
        <RoadmapTimeline />
      </main>

      {/* Mobile bottom bar */}
      <MobileBottomNav />
    </div>
  )
}

export default Roadmap
