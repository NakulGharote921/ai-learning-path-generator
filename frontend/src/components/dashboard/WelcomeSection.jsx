import React from 'react'

function WelcomeSection({ userName = 'User', trackName = '', streakDays = 0, showFirstPathMessage = false }) {
  const filledCount = Math.min(5, Math.max(0, Math.round((Math.min(streakDays, 14) / 14) * 5)))
  return (
    <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
      <div>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-slate-blue">
          Hello, {userName}!
        </h2>
        {showFirstPathMessage ? (
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            Welcome! Start your learning journey by creating your first learning path.
          </p>
        ) : (
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            {trackName ? `Ready to master ${trackName}?` : 'Ready to start learning?' }
          </p>
        )}
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
            {streakDays} Day Streak!
          </p>
          <div className="flex gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-6 h-2 rounded-full ${i < filledCount ? 'bg-[#FF7444]' : 'bg-surface-dim'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
