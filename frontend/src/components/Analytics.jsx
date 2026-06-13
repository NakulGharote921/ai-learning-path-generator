import React, { useEffect } from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import AnalyticsMetricCard from './analytics/AnalyticsMetricCard'
import FocusHoursChart from './analytics/FocusHoursChart'
import AnalyticsRadials from './analytics/AnalyticsRadials'
import SkillDistribution from './analytics/SkillDistribution'
import FadeInSection from './home/FadeInSection'

function Analytics() {
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
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #dce2f5; border-radius: 4px; }

            .glass-card {
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(12px);
              box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.5);
            }

            @keyframes drawLine {
              to { stroke-dashoffset: 0; }
            }
            @keyframes growBar {
              from { height: 0; }
              to { height: var(--target-height); }
            }

            .animated-line {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: drawLine 1.5s ease-out forwards;
            }

            .animated-bar {
              height: 0;
              animation: growBar 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
              animation-delay: var(--delay, 0s);
            }

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

      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        <div className="max-w-max_width mx-auto p-margin md:p-xl space-y-xl">
          <FadeInSection className="flex flex-col md:flex-row md:items-end justify-between gap-sm border-b border-outline-variant/30 pb-sm">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-primary font-bold">
                Performance Analytics
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                Track your cognitive growth and learning momentum.
              </p>
            </div>
            <div className="flex gap-sm">
              <select className="bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md py-sm px-md text-primary focus:ring-2 focus:ring-primary focus:border-transparent outline-none cursor-pointer">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>This Year</option>
              </select>
            </div>
          </FadeInSection>

          <FadeInSection className="grid grid-cols-1 md:grid-cols-3 gap-md md:gap-lg">
            <AnalyticsMetricCard
              title="Learning Streak"
              value="14"
              unit="days"
              icon="local_fire_department"
              iconBg="bg-tertiary-fixed/20"
              iconText="text-tertiary-fixed-dim"
            />
            <AnalyticsMetricCard
              title="Total Experience"
              value="12.4k"
              unit="XP"
              icon="star"
              iconBg="bg-primary-container/20"
              iconText="text-primary"
            />
            <AnalyticsMetricCard
              title="Global Cohort Rank"
              value="Top 5%"
              icon="workspace_premium"
              iconBg="bg-secondary-container/30"
              iconText="text-secondary"
            />
          </FadeInSection>

          <FadeInSection className="grid grid-cols-1 lg:grid-cols-3 gap-md md:gap-lg">
            <FocusHoursChart />
            <AnalyticsRadials />
          </FadeInSection>

          <SkillDistribution />
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default Analytics
