import React from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import SettingProfileCard from './setting/SettingProfileCard'
import SettingPreferencesCard from './setting/SettingPreferencesCard'
import SettingBillingCard from './setting/SettingBillingCard'
import SettingNotificationsCard from './setting/SettingNotificationsCard'
import SettingSecurityCard from './setting/SettingSecurityCard'
import SettingFooter from './setting/SettingFooter'

function Setting() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Settings | Cognitive Flow</title>
      <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;500&family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #FFF8DE; }
        .settings-card {
          background-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(183, 189, 247, 0.3);
          box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .settings-card:hover { box-shadow: 0px 15px 40px rgba(87, 106, 143, 0.12); }
        .toggle-checkbox:checked + .toggle-label { background-color: #576A8F; }
        .toggle-checkbox:checked + .toggle-label .toggle-dot { transform: translateX(100%); }
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #B7BDF7; border-radius: 10px; }
        @media (max-width: 767px) {
          .side-nav { transform: translateX(-100%); }
          .mobile-bottom-nav { display: flex; }
          .main-content { margin-left: 0; }
        }
        @media (min-width: 768px) {
          .mobile-bottom-nav { display: none; }
          .top-nav { display: none; }
        }
      ` }} />

      <MobileTopNav />
      <Sidebar />

      <main className="main-content ml-0 md:ml-64 min-h-screen p-xl max-w-max_width">
        <header className="mb-lg">
          <nav className="flex items-center gap-xs text-on-surface-variant mb-xs">
            <a className="font-label-sm text-label-sm hover:text-primary transition-colors" href="#">
              Home
            </a>
            <span className="material-symbols-outlined text-sm" style={{ fontSize: '16px' }}>
              chevron_right
            </span>
            <span className="font-label-sm text-label-sm font-bold text-slate-blue">Settings</span>
          </nav>
          <h2 className="font-headline-lg text-headline-lg text-slate-blue">Settings</h2>
        </header>

        <div className="grid grid-cols-12 gap-gutter">
          <section className="col-span-12 lg:col-span-8 flex flex-col gap-gutter">
            <SettingProfileCard />
            <SettingPreferencesCard />
          </section>

          <aside className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
            <SettingBillingCard />
            <SettingNotificationsCard />
            <SettingSecurityCard />
          </aside>
        </div>
      </main>

      <MobileBottomNav />
      <SettingFooter />
    </div>
  )
}

export default Setting
