import React, { useEffect } from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import RoadmapTimeline from './roadmap/RoadmapTimeline'
import FadeInSection from './home/FadeInSection'

/**
 * Roadmap — Full-page learning path view.
 * Shares the same Sidebar/navigation shell as the Dashboard.
 */
function Roadmap() {
   useEffect(() => {
       window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.15 }
      )
  
      document.querySelectorAll('.fade-in-up').forEach((element) => observer.observe(element))
     
      return () => observer.disconnect()
    }, [])
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #FFF8DE; }
            /* Custom scrollbar */
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #dce2f5; border-radius: 4px; }

            /* Pulsing animation for the active roadmap node */
            @keyframes pulse-ring {
              0%   { box-shadow: 0 0 0 0   rgba(63, 82, 117, 0.4); }
              70%  { box-shadow: 0 0 0 10px rgba(63, 82, 117, 0); }
              100% { box-shadow: 0 0 0 0   rgba(63, 82, 117, 0); }
            }
            .animate-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

            /* Mobile nav overrides (shared with Dashboard) */
            @media (max-width: 767px) {
              .side-nav      { transform: translateX(-100%); }
              .mobile-bottom-nav { display: flex; }
              .main-content  { margin-left: 0; }
            }
            @media (min-width: 768px) {
              .mobile-bottom-nav { display: none; }
              .top-nav            { display: none; }
            }
          `,
        }}
      />

      {/* Mobile top bar */}
      <MobileTopNav />

      {/* Shared desktop sidebar */}
      <Sidebar activePage="roadmap" />

      {/* Main content */}
      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        {/* Page header */}
        <FadeInSection className="max-w-4xl mx-auto mb-xl">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">
            Learning Path
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Track your progress through the core curriculum. Your customised
            journey adapts as you master concepts alongside your AI Tutor.
          </p>
        </FadeInSection>

        {/* Timeline */}
        <RoadmapTimeline />
      </main>

      {/* Mobile bottom bar */}
      <MobileBottomNav />
    </div>
  )
}

export default Roadmap