  import React from 'react'
import { Link } from 'react-router-dom'

function RoadmapSection({ learningPaths = [] }) {
  if (!learningPaths || learningPaths.length === 0) {
    return (
      <section className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10">
        <div className="flex justify-between items-center mb-lg">
          <h2 className="font-headline-md text-headline-md text-deep-slate-blue">
            Your Roadmap At A Glance
          </h2>
        </div>
        <div className="text-center py-8">
          <span className="material-symbols-outlined text-outline text-5xl mb-sm block">
            map
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-md">
            Welcome! Start your learning journey by creating your first learning path.
          </p>
          <Link
            to="/roadmap"
            className="inline-block bg-[#FF7444] text-white px-md py-sm rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-colors"
          >
            Create Learning Path
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white rounded-[24px] p-margin shadow-soft border border-primary/10">
      <div className="flex justify-between items-center mb-lg">
        <h2 className="font-headline-md text-headline-md text-deep-slate-blue">
          Your Roadmap At A Glance
        </h2>
        <Link
          to="/roadmap"
          className="text-[#FF7444] font-label-md text-label-md hover:underline flex items-center gap-1 transition-opacity hover:opacity-80"
        >
          View Full Path{" "}
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>
      <div className="relative pl-8">
        {/* Connecting Line */}
        <div className="absolute left-[11px] top-4 bottom-8 w-0.5 bg-surface-dim z-0" />
        
        {learningPaths.map((path, idx) => {
          const isCompleted = path.status === 'completed' || path.progress === 100
          const isActive = path.status === 'in_progress' || (path.progress > 0 && path.progress < 100)
          
          return (
            <div key={path.id || idx} className="relative z-10 flex gap-md mb-lg last:mb-0">
              {isCompleted ? (
                <div className="w-6 h-6 rounded-full bg-soft-periwinkle border-2 border-white flex-shrink-0 flex items-center justify-center mt-1">
                  <span
                    className="material-symbols-outlined text-[14px] text-white"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    check
                  </span>
                </div>
              ) : isActive ? (
                <div className="w-6 h-6 rounded-full bg-[#FF7444] border-2 border-white shadow-[0_0_0_4px_rgba(255,116,68,0.2)] flex-shrink-0 mt-1" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-surface-dim border-2 border-white flex-shrink-0 mt-1" />
              )}
              
              <div className={`rounded-xl p-md w-full ${isCompleted ? 'bg-surface-container-low opacity-70' : isActive ? 'bg-white border-2 border-[#FF7444]/20 shadow-md' : 'bg-surface-container-low border border-outline-variant/30'}`}>
                <div className="flex justify-between items-start">
                  <span className={`inline-block px-2 py-1 rounded-full font-label-sm text-label-sm mb-2 ${isActive ? 'bg-[#FF7444]/10 text-[#FF7444]' : 'bg-surface-dim text-deep-slate-blue'}`}>
                    {path.status === 'in_progress' ? 'Current' : path.status || 'Module'} • {path.progress}%
                  </span>
                </div>
                <h4 className="font-body-lg text-body-lg text-deep-slate-blue font-bold">
                  {path.title}
                </h4>
                {path.description && (
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {path.description}
                  </p>
                )}
                {isActive && (
                  <button className="bg-deep-slate-blue text-white px-md py-sm rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-colors flex items-center gap-2 mt-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      play_arrow
                    </span>{" "}
                    Continue Lesson
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default RoadmapSection
