import React from 'react'

function MobileTopNav() {
  return (
    <nav className="top-nav md:hidden bg-surface/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 h-xl flex justify-between items-center px-margin max-w-max_width mx-auto">
      <div className="font-headline-md text-headline-md font-bold text-primary">
        Cognitive Flow
      </div>
      <div className="flex gap-sm">
        <button className="bg-primary/5 hover:bg-primary/10 p-2 rounded-full transition-colors duration-200">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
      </div>
    </nav>
  )
}

export default MobileTopNav
