import React from 'react'
import FadeInSection from '../home/FadeInSection'

function WelcomeSection({ userName = 'Alex', trackName = 'Data Science' }) {
  return (
    <FadeInSection className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
      <div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-slate-blue">
          Hello, {userName}!
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
          Ready to master {trackName}?
        </p>
      </div>
      <div className="bg-white rounded-2xl p-sm flex items-center gap-sm shadow-soft border border-primary/10">
        <div className="w-10 h-10 rounded-full bg-[#FF7444]/10 flex items-center justify-center text-[#FF7444]">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            local_fire_department
          </span>
        </div>
        <div>
          <p className="font-label-md text-label-md text-deep-slate-blue">
            14 Day Streak!
          </p>
          <div className="flex gap-1 mt-1">
            <div className="w-6 h-2 rounded-full bg-[#FF7444]" />
            <div className="w-6 h-2 rounded-full bg-[#FF7444]" />
            <div className="w-6 h-2 rounded-full bg-[#FF7444]" />
            <div className="w-6 h-2 rounded-full bg-surface-dim" />
            <div className="w-6 h-2 rounded-full bg-surface-dim" />
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

export default WelcomeSection
