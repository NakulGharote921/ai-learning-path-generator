import React from 'react'

function AchievementsSection() {
  return (
    <section className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10 mb-margin md:mb-0">
      <h2 className="font-headline-md text-headline-md text-deep-slate-blue mb-md">
        Recent Achievements
      </h2>
      <div className="flex flex-wrap gap-md">
        <div className="flex items-center gap-3 bg-surface-container-low p-sm rounded-xl pr-md border border-outline-variant/20">
          <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              emoji_events
            </span>
          </div>
          <div>
            <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
              Python Pioneer
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Completed Python Basics
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-low p-sm rounded-xl pr-md border border-outline-variant/20">
          <div className="w-12 h-12 rounded-full bg-[#E4C283]/30 flex items-center justify-center text-[#674E1A]">
            <span
              className="material-symbols-outlined text-[24px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              lightbulb
            </span>
          </div>
          <div>
            <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
              Quick Learner
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              5 lessons in one day
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-surface-container-low p-sm rounded-xl pr-md border border-outline-variant/20 opacity-50 grayscale">
          <div className="w-12 h-12 rounded-full bg-surface-dim flex items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-[24px]">
              lock
            </span>
          </div>
          <div>
            <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
              Data Whisperer
            </h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Finish ML track
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
