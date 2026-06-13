import React, { useEffect, useState } from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import WelcomeSection from './dashboard/WelcomeSection'
import KPICards from './dashboard/KPICards'
import RoadmapSection from './dashboard/RoadmapSection'
import AchievementsSection from './dashboard/AchievementsSection'
import AIRecommendations from './dashboard/AIRecommendations'
import { Link } from 'react-router-dom'
import DashboardSkeleton from './DashboardSkeleton'
import EmptyState from './EmptyState'
import { getDashboard } from '../services/api'
import config from '../lib/config'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../lib/firebase'

function DashBoard() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dashboard, setDashboard] = useState(null)

  useEffect(() => {
    let mounted = true

    async function loadDashboard() {
      setLoading(true)
      setError(null)
      try {
        const data = await getDashboard()
        if (!mounted) return
        setDashboard(data)
      } catch (err) {
        if (!mounted) return
        setError(err?.message || 'Unable to load dashboard data.')
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    }

    // Wait for Firebase auth to fully resolve before fetching dashboard.
    if (!firebaseAuth) {
      setLoading(false)
      setError('Firebase is not configured')
      return () => {}
    }

    let didLoad = false

    const unsub = onAuthStateChanged(firebaseAuth, async (user) => {
      // Ignore sign-out events.
      if (!user) return

      const uid = user?.uid
      console.log('Authenticated UID:', uid)

      if (!uid || !uid.trim()) {
        setError('User not authenticated')
        setLoading(false)
        return
      }

      // Prevent duplicate dashboard loads during rapid auth state changes.
      if (didLoad) return
      didLoad = true

      await loadDashboard()
    })

    return () => {
      mounted = false
      unsub?.()
    }
  }, [])


  if (loading) {
    return (
      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <DashboardSkeleton />
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        <div className="max-w-[800px] mx-auto">
          <EmptyState title="Unable to load dashboard data." description={error} ctaLabel="Retry" onCta={() => window.location.reload()} />
        </div>
      </main>
    )
  }

  const userName = dashboard?.user_name || 'User'
  const trackName = dashboard?.learning_paths?.[0]?.title || ''

  const skillScore = dashboard?.skill_score ?? 0
  const weeklyCompleted = dashboard?.weekly_goals_completed ?? 0
  const weeklyTotal = dashboard?.weekly_goals_total ?? 0

  const learningProgress = dashboard?.learning_progress ?? 0

  return (
    <div>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Cognitive Flow - Main Dashboard</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Inter:wght@100..900&family=Geist:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #FFF8DE; }
            /* Custom Scrollbar */
            ::-webkit-scrollbar {
                width: 6px;
                height: 0px; /* Hide horizontal scrollbar by default */
            }
            ::-webkit-scrollbar-track {
                background: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background: rgba(87, 106, 143, 0.2);
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb:hover {
                background: rgba(87, 106, 143, 0.4);
            }
            .ai-gradient-border {
                position: relative;
                background: #ffffff;
                background-clip: padding-box;
                border: 1px solid transparent;
                border-radius: 1.5rem;
            }
            .ai-gradient-border::before {
                content: '';
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                z-index: -1;
                margin: -1px;
                border-radius: inherit;
                background: linear-gradient(to bottom right, #576A8F, #B7BDF7);
            }
            
            /* Mobile Nav Overrides */
            @media (max-width: 767px) {
                .side-nav {
                    transform: translateX(-100%);
                }
                .mobile-bottom-nav {
                    display: flex;
                }
                .main-content {
                    margin-left: 0;
                }
            }
            @media (min-width: 768px) {
                .mobile-bottom-nav {
                    display: none;
                }
                .top-nav {
                    display: none;
                }
            }
          `
        }}
      />
      
      {/* Mobile TopNavBar (Mobile Only) */}
      <MobileTopNav />

      {/* SideNavBar (Desktop) */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 flex flex-col gap-margin">
            {/* Welcome Section & Streak */}
            <WelcomeSection
              userName={userName}
              trackName={trackName}
              streakDays={dashboard?.streak_days ?? 0}
              showFirstPathMessage={!dashboard?.learning_paths?.length}
            />


            {/* KPI Cards (Bento style) */}
            <KPICards skillScore={skillScore} weeklyCompleted={weeklyCompleted} weeklyTotal={weeklyTotal} learningProgress={learningProgress} trackName={trackName} />

            {/* Centerpiece: Roadmap */}
            <RoadmapSection learningPaths={dashboard?.learning_paths ?? []} />

            {/* Achievement Badges */}
            <AchievementsSection />
          </div>

          {/* Right Column (Widgets) */}
          <div className="lg:col-span-4 flex flex-col gap-margin">
            {/* AI Recommendations */}
            <AIRecommendations recommendations={dashboard?.recommendations ?? []} />

            {/* Projects Shortcut */}
            <Link
              to="/projects"
              className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10 hover:border-primary/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Projects
                  </p>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                    Open project builds
                  </h3>
                  <p className="font-body-sm text-body-sm text-outline mt-1">
                    Practice with guided, hands-on builds and skill-based filters.
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">
                  rocket_launch
                </span>
              </div>
            </Link>

            {/* Analytics Shortcut */}
            <Link
              to="/analytics"
              className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10 hover:border-primary/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Analytics
                  </p>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                    Open performance insights
                  </h3>
                  <p className="font-body-sm text-body-sm text-outline mt-1">
                    Review focus hours, streaks, and skill growth in one place.
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">
                  monitoring
                </span>
              </div>
            </Link>

            <Link
              to="/support"
              className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10 hover:border-primary/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    Support
                  </p>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                    Open the help center
                  </h3>
                  <p className="font-body-sm text-body-sm text-outline mt-1">
                    Search FAQs, submit tickets, and contact the team.
                  </p>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">
                  help
                </span>
              </div>
            </Link>

            {/* Profile Shortcut */}
            <Link
              to="/profile"
              className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10 hover:border-primary/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="User Profile"
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/10"
                    src={config.IMAGE_BASE_URL ? `${config.IMAGE_BASE_URL}/avatar.jpg` : '/src/assets/default-avatar.png'}
                  />
                  <div>
                    <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                      Profile
                    </p>
                    <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                      View your learning profile
                    </h3>
                    <p className="font-body-sm text-body-sm text-outline mt-1">
                      Check goals, badges, and progress in one place.
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-3xl">
                  person
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Mobile BottomNavBar */}
      <MobileBottomNav />
    </div>
  )
}

export default DashBoard
