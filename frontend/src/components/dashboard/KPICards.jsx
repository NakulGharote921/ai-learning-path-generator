import React from 'react'

function KPICards({ skillScore = 0, weeklyCompleted = 0, weeklyTotal = 5, learningProgress = 0, trackName = 'Learning Track' }) {
  const percent = Math.max(0, Math.min(100, skillScore))
  const learningPercent = Math.max(0, Math.min(100, learningProgress))
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-md">
      {/* Skill Score */}
      <div className="bg-white rounded-2xl p-md shadow-soft border border-primary/10 hover:shadow-hover transition-shadow duration-300 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-md text-deep-slate-blue">
          <span className="material-symbols-outlined">military_tech</span>
          <h3 className="font-label-md text-label-md">Skill Score</h3>
        </div>
        <div className="flex items-end gap-2">
          <span className="font-headline-xl text-headline-xl text-deep-slate-blue">{percent}</span>
          <span className="font-body-md text-body-md text-on-surface-variant mb-2">/100</span>
        </div>
        <div className="w-full bg-surface-dim h-2 rounded-full mt-md overflow-hidden">
          <div className="bg-deep-slate-blue h-full rounded-full" style={{ width: `${percent}%` }} />
        </div>
      </div>
      {/* Weekly Goals */}
      <div className="bg-soft-periwinkle/20 rounded-2xl p-md shadow-soft border border-soft-periwinkle/30 hover:shadow-hover transition-shadow duration-300 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-md text-deep-slate-blue">
          <span className="material-symbols-outlined">flag</span>
          <h3 className="font-label-md text-label-md">Weekly Goals</h3>
        </div>
        <div className="flex items-end gap-2 ">
          <span className="font-headline-xl text-headline-xl text-deep-slate-blue">{weeklyCompleted}</span>
          <span className="font-body-md text-body-md text-on-surface-variant mb-2">/{weeklyTotal}</span>
        </div>
        <div className="flex gap-2 mt-md ">
          {Array.from({ length: weeklyTotal }).map((_, i) => (
            <span
              key={i}
              className={`material-symbols-outlined ${i < weeklyCompleted ? 'text-[#FF7444] border-[#FF7444]' : 'text-surface-dim'}`}
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              {i < weeklyCompleted ? 'check_circle' : 'radio_button_unchecked'}
            </span>
          ))}
        </div>
      </div>
      {/* Overall Progress */}
      <div className="bg-white rounded-2xl p-md shadow-soft border border-primary/10 hover:shadow-hover transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full border-8 border-[#FF7444]/10" />
        <div className="flex items-center gap-2 mb-md text-deep-slate-blue relative z-10">
          <span className="material-symbols-outlined">trending_up</span>
          <h3 className="font-label-md text-label-md">{trackName}</h3>
        </div>
        <div className="flex items-end gap-2 relative z-10">
          <span className="font-headline-xl text-headline-xl text-[#FF7444]">{learningPercent}%</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant mb-2">Completed</span>
        </div>
        <div className="w-full bg-surface-dim h-2 rounded-full mt-md overflow-hidden relative z-10">
          <div className="bg-accent-orange h-full rounded-full bg-[#FF7444]" style={{ width: `${learningPercent}%` }} />
        </div>
      </div>
    </section>
  )
}

export default KPICards
