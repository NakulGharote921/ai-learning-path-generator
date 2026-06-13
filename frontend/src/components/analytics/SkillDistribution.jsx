import React from 'react'

const skillBars = [
  { label: 'Algorithms', height: '85%', delay: '0.1s', accent: 'bg-primary-container' },
  { label: 'Data Structs', height: '60%', delay: '0.2s', accent: 'bg-secondary-fixed-dim' },
  { label: 'Logic', height: '95%', delay: '0.3s', accent: 'bg-primary-container' },
  { label: 'Systems', height: '40%', delay: '0.4s', accent: 'bg-secondary-fixed-dim' },
  { label: 'UX Design', height: '70%', delay: '0.5s', accent: 'bg-primary-container' },
]

function SkillDistribution() {
  return (
    <section className="glass-card rounded-xl p-lg">
      <div className="flex justify-between items-start mb-lg">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">
            Skill Distribution
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Proficiency growth across key disciplines.
          </p>
        </div>
      </div>

      <div className="h-64 flex items-end justify-around gap-sm md:gap-lg pb-md border-b border-outline-variant/30 relative">
        {skillBars.map((bar) => (
          <div key={bar.label} className="flex flex-col items-center gap-xs w-1/6 group">
            <div className="w-full bg-surface-container rounded-t-md relative h-48 overflow-hidden">
              <div
                className={`absolute bottom-0 w-full ${bar.accent} rounded-t-md animated-bar`}
                style={{ '--target-height': bar.height, '--delay': bar.delay }}
              />
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant text-center">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillDistribution
