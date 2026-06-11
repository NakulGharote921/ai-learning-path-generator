import React from 'react'

/**
 * LibraryHeader
 * Page title + search input with keyboard shortcut hint.
 */
function LibraryHeader() {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
      <div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-xs">
          Library
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Explore curated learning materials tailored to your path.
        </p>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-96 group">
        <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
          search
        </span>
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg pl-lg pr-xl py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow placeholder:text-on-surface-variant/70 shadow-sm"
          placeholder="Search resources..."
          type="text"
        />
        <div className="absolute right-sm top-1/2 -translate-y-1/2 flex items-center gap-1 bg-surface-container px-2 py-1 rounded border border-outline-variant/30">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Ctrl</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">K</span>
        </div>
      </div>
    </header>
  )
}

export default LibraryHeader
