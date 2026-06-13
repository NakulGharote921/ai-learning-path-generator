import React from 'react'
import FadeInSection from '../home/FadeInSection'

/**
 * LibraryFilters
 * Content-type pills (All / Video / Article / Course) and topic chips.
 */
function LibraryFilters() {
  return (
    <section className="flex flex-col gap-sm mb-xl">
      {/* Content Type row */}
      <FadeInSection className="flex items-center gap-md pb-xs border-b border-outline-variant/20 overflow-x-auto no-scrollbar">
        <span className="font-label-md text-label-md text-on-surface-variant shrink-0 w-24">
          Content Type:
        </span>
        <div className="flex gap-sm">
          <button className="px-sm py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap transition-transform active:scale-95">
            All
          </button>
          <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap active:scale-95">
            Video
          </button>
          <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap active:scale-95">
            Article
          </button>
          <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap active:scale-95">
            Course
          </button>
        </div>
      </FadeInSection>

      {/* Topics row */}
      <FadeInSection className="flex items-center gap-md overflow-x-auto no-scrollbar mt-xs">
        <span className="font-label-md text-label-md text-on-surface-variant shrink-0 w-24">
          Topics:
        </span>
        <div className="flex gap-sm">
          <button className="px-sm py-xs rounded-full bg-secondary-container/50 text-on-secondary-container font-label-md text-label-md border border-secondary-container hover:bg-secondary-container transition-colors whitespace-nowrap">
            Frontend
          </button>
          <button className="px-sm py-xs rounded-full bg-secondary-container/50 text-on-secondary-container font-label-md text-label-md border border-secondary-container hover:bg-secondary-container transition-colors whitespace-nowrap">
            Backend
          </button>
          <button className="px-sm py-xs rounded-full bg-primary-container/20 text-primary border border-primary-container/30 font-label-md text-label-md hover:bg-primary-container/40 transition-colors whitespace-nowrap">
            AI &amp; ML
          </button>
          <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap">
            Systems Design
          </button>
        </div>
      </FadeInSection>
    </section>
  )
}

export default LibraryFilters
