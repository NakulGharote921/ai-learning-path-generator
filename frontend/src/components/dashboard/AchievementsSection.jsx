import React, { useEffect, useState } from 'react'
import { getAchievements } from '../../services/api'

const ACCENT_CLASS = {
  secondary: {
    bg: 'bg-secondary-container',
    text: 'text-on-secondary-container',
    border: 'border-primary/10',
    wrapper: 'bg-secondary-container',
  },
  gold: {
    bg: 'bg-[#E4C283]/30',
    text: 'text-[#674E1A]',
    border: 'border-primary/10',
    wrapper: 'bg-[#E4C283]/30',
  },
  disabled: {
    bg: 'bg-surface-dim',
    text: 'text-on-surface-variant',
    border: 'border-primary/10',
    wrapper: 'bg-surface-dim',
  },
}

function AchievementsSection() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    let mounted = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await getAchievements()
        if (!mounted) return
        setAchievements(Array.isArray(data?.achievements) ? data.achievements : [])
      } catch (err) {
        if (!mounted) return
        setError(err?.message || 'Unable to load achievements.')
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10 mb-margin md:mb-0">
      <h2 className="font-headline-md text-headline-md text-deep-slate-blue mb-md">
        Recent Achievements
      </h2>

      {loading ? (
        <div className="text-label-sm text-on-surface-variant">Loading...</div>
      ) : error ? (
        <div className="text-label-sm text-on-surface-variant">{error}</div>
      ) : (
        <div className="flex flex-wrap gap-md">
          {achievements.map((a, idx) => {
            const accent = ACCENT_CLASS[a.accent] || ACCENT_CLASS.secondary
            const disabled = a.state === 'locked' || a.accent === 'disabled'

            return (
              <div
                key={a.id ?? idx}
                className={`flex items-center gap-3 bg-surface-container-low p-sm rounded-xl pr-md border border-outline-variant/20 ${
                  disabled ? 'opacity-50 grayscale' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${accent.wrapper} ${accent.text}`}
                >
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={a.icon === 'emoji_events' || a.icon === 'lightbulb' || a.icon === 'lock' ? { fontVariationSettings: '"FILL" 1' } : undefined}
                  >
                    {a.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
                    {a.title}
                  </h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    {a.description}
                  </p>
                </div>
              </div>
            )
          })}

          {!achievements.length && (
            <div className="text-label-sm text-on-surface-variant">
              No achievements yet.
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default AchievementsSection

