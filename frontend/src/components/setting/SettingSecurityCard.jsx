import React from 'react'

function SettingSecurityCard() {
  return (
    <div className="settings-card rounded-2xl p-lg">
      <h3 className="font-headline-md text-headline-md text-slate-blue mb-md flex items-center gap-sm">
        <span className="material-symbols-outlined">security</span> Security
      </h3>
      <div className="space-y-base">
        <button className="w-full flex items-center justify-between px-md py-sm bg-white/40 border border-slate-blue/10 rounded-xl hover:bg-white/60 transition-colors group">
          <span className="font-label-md text-slate-blue">Change Password</span>
          <span className="material-symbols-outlined text-slate-blue/50 group-hover:translate-x-1 transition-transform">
            chevron_right
          </span>
        </button>
        <div className="flex items-center justify-between px-md py-sm bg-white/40 border border-slate-blue/10 rounded-xl">
          <span className="font-label-md text-slate-blue">Two-factor (2FA)</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only toggle-checkbox" type="checkbox" />
            <div className="toggle-label w-11 h-6 bg-slate-blue/20 rounded-full transition-colors duration-200">
              <div className="toggle-dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 shadow-sm" />
            </div>
          </label>
        </div>
      </div>
    </div>
  )
}

export default SettingSecurityCard
