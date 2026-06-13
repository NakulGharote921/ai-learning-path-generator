import React from 'react'
import FadeInSection from '../home/FadeInSection'

const AINotifications = () => {
  return (
<FadeInSection
    className="fixed bottom-32 right-xl z-50 transform translate-y-20 opacity-0 transition-all duration-500 pointer-events-none"
    id="achievement-toast"
  >
    <div className="bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 border-2 border-brand-accent/20">
      <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          emoji_events
        </span>
      </div>
      <div>
        <h5 className="text-xs font-bold text-brand-primary">
          Milestone Unlocked!
        </h5>
        <p className="text-[10px] text-on-surface-variant">
          Depth First Search Mastery
        </p>
      </div>
    </div>
  </FadeInSection>
    )
}

export default AINotifications