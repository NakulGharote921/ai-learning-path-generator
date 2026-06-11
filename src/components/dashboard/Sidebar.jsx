import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/roadmap',   icon: 'map',           label: 'Roadmap' },
  { to: '/ai-tutor',  icon: 'smart_toy',     label: 'AI Tutor' },
  { to: '/library',   icon: 'book_5',        label: 'Library' },
  { to: '/analytics', icon: 'monitoring',    label: 'Analytics' },
  { to: '/projects',  icon: 'rocket_launch', label: 'Projects' },
  { to: '/profile',   icon: 'person',        label: 'Profile' },
]

function Sidebar() {
  return (
    <aside className="side-nav hidden md:flex h-screen w-64 fixed left-0 top-0 z-40 bg-surface-container flex-col gap-base p-md shadow-md transition-transform duration-300">
      {/* Brand / User Header */}
      <div className="mb-lg">
        <div className="flex items-center gap-sm mb-sm">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhyeOPwlX26WLHmG3-xYqHGc62FtUQGr_YO6VZl70KA09x4yxl-10bEX73Bp8NOlALcDGk_I3ATpBFh0wuJtzgybfxbfu2kN2DUXTFYSxz5TDWKSUAlRT1OBT9tHZYcVPEgwRsAeb_Pfz8gk9D95ycvSJQujP74eqTzPE5tCuTwVeEsBwlFvywSBiFfmOGM1tLVFGZMmO0diAx6WW7g-cxS3razJfbZsYFpdJqtG0IOcTQlcdXPxpX3DxtGR6Odwc46pDjtrpGISU"
            />
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary">
              Cognitive Flow
            </h1>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Deep Learning Mode
            </p>
          </div>
        </div>
        <button className="w-full bg-[#FF7444] text-white font-label-md text-label-md py-sm rounded-lg shadow-button hover:translate-y-[1px] hover:shadow-none transition-all duration-150 flex items-center justify-center gap-2 mt-md">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            add_circle
          </span>
          Start New Session
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-xs overflow-y-auto overflow-x-hidden font-label-md text-label-md no-scrollbar">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive
                ? 'flex items-center gap-sm bg-primary-container text-on-primary-container rounded-lg px-md py-sm font-bold transition-all duration-200 scale-95 hover:scale-100'
                : 'flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant/50 rounded-lg px-md py-sm transition-all duration-200 hover:translate-x-1'
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: '"FILL" 1' } : undefined}
                >
                  {icon}
                </span>
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer links */}
      <div className="mt-auto border-t border-outline-variant/30 pt-md flex flex-col gap-xs font-label-md text-label-md">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-sm rounded-lg px-md py-sm transition-all duration-200 hover:translate-x-1 ${isActive ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant/50'}`
          }
        >
          <span className="material-symbols-outlined">settings</span>
          Settings
        </NavLink>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex items-center gap-sm rounded-lg px-md py-sm transition-all duration-200 hover:translate-x-1 ${isActive ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant hover:bg-surface-variant/50'}`
          }
        >
          <span className="material-symbols-outlined">help</span>
          Support
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar

