import React from 'react'

function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav bg-surface border-t border-outline-variant/20 fixed bottom-0 w-full z-50 h-[72px] flex justify-around items-center pb-2">
      <a className="flex flex-col items-center gap-1 text-primary" href="#">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          map
        </span>
        <span className="font-label-sm text-[10px]">Roadmap</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-on-surface-variant"
        href="#"
      >
        <span className="material-symbols-outlined">smart_toy</span>
        <span className="font-label-sm text-[10px]">AI Tutor</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-on-surface-variant"
        href="#"
      >
        <span className="material-symbols-outlined">book_5</span>
        <span className="font-label-sm text-[10px]">Library</span>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-on-surface-variant"
        href="#"
      >
        <span className="material-symbols-outlined">person</span>
        <span className="font-label-sm text-[10px]">Profile</span>
      </a>
    </nav>
  )
}

export default MobileBottomNav
