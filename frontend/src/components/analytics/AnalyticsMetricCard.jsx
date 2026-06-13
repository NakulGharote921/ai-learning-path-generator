import React from 'react'

function AnalyticsMetricCard({ title, value, unit, icon, iconBg, iconText }) {
  return (
    <div className="glass-card rounded-xl p-md flex items-center justify-between group cursor-pointer hover:border-primary/20 transition-colors">
      <div>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
          {title}
        </p>
        <div className="flex items-baseline gap-xs">
          <span className={`font-headline-lg text-headline-lg font-bold ${iconText}`}>
            {value}
          </span>
          {unit ? (
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {unit}
            </span>
          ) : null}
        </div>
      </div>
      <div
        className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <span
          className={`material-symbols-outlined ${iconText} text-2xl`}
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          {icon}
        </span>
      </div>
    </div>
  )
}

export default AnalyticsMetricCard
