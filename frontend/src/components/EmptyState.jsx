import React from 'react'

export default function EmptyState({ title = 'No Data', description = '', ctaLabel = null, onCta = null }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-soft border border-primary/10 text-center">
      <h3 className="font-headline-md text-headline-md mb-2">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{description}</p>
      {ctaLabel && (
        <button onClick={onCta} className="accent-bg text-on-primary px-4 py-2 rounded">
          {ctaLabel}
        </button>
      )}
    </div>
  )
}
