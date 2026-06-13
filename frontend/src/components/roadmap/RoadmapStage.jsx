import React, { useState } from 'react'

/**
 * RoadmapStage
 * @param {object} props
 * @param {string}   props.stageLabel   - e.g. "Stage 1"
 * @param {string}   props.title        - Stage title
 * @param {'completed'|'active'|'locked'} props.status
 * @param {number}   props.progress     - 0–100 percentage filled
 * @param {string}   [props.badge]      - Badge text (e.g. "Completed", "3 weeks remaining")
 * @param {string}   [props.lockMessage]- Message shown on locked stages
 * @param {React.ReactNode} [props.children] - Expandable module list
 */
function RoadmapStage({
  stageLabel,
  title,
  status = 'locked',
  progress = 0,
  badge,
  lockMessage,
  children,
}) {
  const [open, setOpen] = useState(status === 'active')

  const nodeIcon = {
    completed: 'check',
    active: 'play_arrow',
    locked: 'lock',
  }[status]

  const nodeClass = {
    completed:
      'bg-primary text-on-primary shadow-md transition-transform group-hover:scale-110',
    active:
      'bg-primary text-on-primary shadow-md animate-pulse-ring',
    locked:
      'bg-surface-dim border-2 border-outline-variant text-outline-variant',
  }[status]

  const cardClass = {
    completed:
      'bg-surface border border-outline-variant/30 rounded-xl p-md shadow-[0_10px_30px_rgba(87,106,143,0.08)] hover:shadow-[0_15px_35px_rgba(87,106,143,0.12)] transition-shadow duration-300',
    active:
      'bg-secondary-container/10 border border-primary/20 rounded-xl p-md shadow-[0_10px_30px_rgba(87,106,143,0.15)] relative overflow-hidden',
    locked:
      'bg-surface/50 border border-outline-variant/20 rounded-xl p-md opacity-70',
  }[status]

  const badgeClass = {
    completed:
      'text-primary font-label-md text-label-md bg-primary-container/20 px-3 py-1 rounded-full flex items-center gap-1',
    active:
      'text-tertiary font-label-md text-label-md bg-tertiary-fixed px-3 py-1 rounded-full flex items-center gap-1 shadow-sm',
    locked: '',
  }[status]

  const badgeIcon = {
    completed: 'task_alt',
    active: 'schedule',
    locked: null,
  }[status]

  return (
    <div
      className={`relative mb-xl group ${status === 'locked' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={() => status !== 'locked' && setOpen((o) => !o)}
    >
      {/* Timeline Node */}
      <div
        className={`absolute -left-[40px] md:-left-[47px] top-6 w-8 h-8 rounded-full flex items-center justify-center z-10 ${nodeClass}`}
      >
        <span className={`material-symbols-outlined text-[18px]${status === 'completed' ? ' icon-fill' : status === 'active' ? ' icon-fill' : ''}`}>
          {nodeIcon}
        </span>
      </div>

      {/* Content Card */}
      <div className={cardClass}>
        {/* Active decorative blob */}
        {status === 'active' && (
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
        )}

        {/* Card Header */}
        <div className={`flex justify-between items-start mb-sm ${status === 'active' ? 'relative z-10' : ''}`}>
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full font-label-sm text-label-sm mb-2 ${
                status === 'completed'
                  ? 'bg-surface-container-high text-on-surface-variant'
                  : status === 'active'
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-dim text-on-surface-variant'
              }`}
            >
              {stageLabel}
            </span>
            <h3
              className={`font-headline-md text-headline-md ${
                status === 'completed'
                  ? 'text-on-surface'
                  : status === 'active'
                  ? 'text-primary'
                  : 'text-on-surface-variant'
              }`}
            >
              {title}
            </h3>
          </div>
          {badge && (
            <span className={badgeClass}>
              {badgeIcon && (
                <span className="material-symbols-outlined text-[16px]">{badgeIcon}</span>
              )}
              {badge}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        <div className={`w-full bg-surface-variant h-2 rounded-full mb-md overflow-hidden ${status === 'active' ? 'relative z-10' : ''}`}>
          {status === 'active' ? (
            <div className="bg-primary h-full rounded-full relative" style={{ width: `${progress}%` }}>
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
            </div>
          ) : (
            <div className="bg-primary h-full" style={{ width: `${progress}%` }} />
          )}
        </div>

        {/* Lock message */}
        {status === 'locked' && lockMessage && (
          <p className="font-body-sm text-body-sm text-outline-variant mt-2">{lockMessage}</p>
        )}

        {/* Expandable Modules */}
        {status !== 'locked' && children && (
          <div
            className={`flex flex-col gap-3 mt-md border-t border-outline-variant/20 pt-md ${status === 'active' ? 'relative z-10' : ''} ${open ? '' : 'hidden'}`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default RoadmapStage
