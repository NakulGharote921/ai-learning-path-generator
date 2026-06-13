import React from 'react'
import FadeInSection from '../home/FadeInSection'

function SettingPreferencesCard() {
  return (
    <FadeInSection className="settings-card rounded-2xl p-lg">
      <h3 className="font-headline-md text-headline-md text-slate-blue mb-md flex items-center gap-sm">
        <span className="material-symbols-outlined">tune</span> Preferences
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-slate-blue uppercase tracking-wider">
            Language
          </label>
          <select className="bg-white/50 border border-slate-blue/20 rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:outline-none">
            <option>English (US)</option>
            <option>German</option>
            <option>Japanese</option>
            <option>Spanish</option>
          </select>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-slate-blue uppercase tracking-wider">
            Theme
          </label>
          <div className="flex bg-white/50 border border-slate-blue/20 rounded-lg p-1">
            <button className="flex-1 py-1 px-3 bg-slate-blue text-white rounded-md font-label-md flex items-center justify-center gap-xs">
              <span className="material-symbols-outlined text-sm" style={{ fontSize: '18px' }}>
                light_mode
              </span>{' '}
              Light
            </button>
            <button className="flex-1 py-1 px-3 text-slate-blue rounded-md font-label-md flex items-center justify-center gap-xs hover:bg-slate-blue/10">
              <span className="material-symbols-outlined text-sm" style={{ fontSize: '18px' }}>
                dark_mode
              </span>{' '}
              Dark
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-slate-blue uppercase tracking-wider">
            Timezone
          </label>
          <select className="bg-white/50 border border-slate-blue/20 rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:outline-none">
            <option>(GMT-08:00) Pacific Time</option>
            <option>(GMT+00:00) UTC</option>
            <option>(GMT+01:00) Central Europe</option>
          </select>
        </div>
      </div>
    </FadeInSection>
  )
}

export default SettingPreferencesCard
