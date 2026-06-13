import React from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import ProfileHeader from './profile/ProfileHeader'
import ProfileStats from './profile/ProfileStats'
import ProfileAchievements from './profile/ProfileAchievements'
import ProfileGoals from './profile/ProfileGoals'

function Profile() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Cognitive Flow - User Profile</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&family=Geist:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #FFF8DE; }
            .warm-cream-bg { background-color: #FFF8DE; }
            .slate-blue-text { color: #576A8F; }
            .accent-bg { background-color: #FF7444; }
            .glass-card { background: rgba(183, 189, 247, 0.15); backdrop-filter: blur(10px); }
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

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

      <main className="main-content flex-1 md:ml-64 p-margin md:p-xl max-w-max_width mx-auto pb-32 md:pb-xl">
        <ProfileHeader />
        <ProfileStats />
        <ProfileAchievements />
        <ProfileGoals />
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default Profile
