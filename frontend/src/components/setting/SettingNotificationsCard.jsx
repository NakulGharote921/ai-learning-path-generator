import React from 'react'
import FadeInSection from '../home/FadeInSection'

function SettingNotificationsCard() {
  return (
    <FadeInSection className="settings-card rounded-2xl p-lg">
      <h3 className="font-headline-md text-headline-md text-slate-blue mb-md flex items-center gap-sm">
        <span className="material-symbols-outlined">notifications</span>{' '}
        Notifications
      </h3>
      <div className="space-y-md">
        {[
          ['Course Updates', 'Stay informed about new content', true],
          ['AI Tutor Reminders', 'Personalized learning pings', true],
          ['Achievement Alerts', 'Milestone celebration pings', false],
        ].map(([title, desc, checked]) => (
          <div className="flex items-center justify-between" key={title}>
            <div>
              <p className="font-label-md text-slate-blue">{title}</p>
              <p className="text-xs text-on-surface-variant">{desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked={checked} className="sr-only toggle-checkbox" type="checkbox" />
              <div className="toggle-label w-11 h-6 bg-slate-blue/20 rounded-full transition-colors duration-200">
                <div className="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm" />
              </div>
            </label>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}

export default SettingNotificationsCard
