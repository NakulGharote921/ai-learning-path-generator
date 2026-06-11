import React from 'react'
import { Link } from 'react-router-dom'

function RoadmapSection() {
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
        {/* Milestone 1 (Completed) */}
        <div className="relative z-10 flex gap-md mb-lg">
          <div className="w-6 h-6 rounded-full bg-soft-periwinkle border-2 border-white flex-shrink-0 flex items-center justify-center mt-1">
            <span
              className="material-symbols-outlined text-[14px] text-white"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              check
            </span>
          </div>
          <div className="bg-surface-container-low rounded-xl p-md w-full opacity-70">
            <span className="inline-block px-2 py-1 bg-surface-dim text-deep-slate-blue rounded-full font-label-sm text-label-sm mb-2">
              Module 4
            </span>
            <h4 className="font-body-lg text-body-lg text-deep-slate-blue font-bold">
              Pandas Data Manipulation
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Completed 2 days ago
            </p>
          </div>
        </div>
        {/* Milestone 2 (Active) */}
        <div className="relative z-10 flex gap-md mb-lg">
          <div className="w-6 h-6 rounded-full bg-[#FF7444] border-2 border-white shadow-[0_0_0_4px_rgba(255,116,68,0.2)] flex-shrink-0 mt-1" />
          <div className="bg-white border-2 border-[#FF7444]/20 rounded-xl p-md w-full shadow-md">
            <div className="flex justify-between items-start">
              <span className="inline-block px-2 py-1 bg-[#FF7444]/10 text-[#FF7444] rounded-full font-label-sm text-label-sm mb-2">
                Module 5 • Current
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                60%
              </span>
            </div>
            <h4 className="font-body-lg text-body-lg text-deep-slate-blue font-bold">
              Intro to Machine Learning
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-md">
              Supervised vs Unsupervised learning models.
            </p>
            <button className="bg-deep-slate-blue text-white px-md py-sm rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                play_arrow
              </span>{" "}
              Continue Lesson
            </button>
          </div>
        </div>
        {/* Milestone 3 (Upcoming) */}
        <div className="relative z-10 flex gap-md">
          <div className="w-6 h-6 rounded-full bg-surface-dim border-2 border-white flex-shrink-0 mt-1" />
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-md w-full">
            <span className="inline-block px-2 py-1 bg-surface-dim text-on-surface-variant rounded-full font-label-sm text-label-sm mb-2">
              Module 6
            </span>
            <h4 className="font-body-lg text-body-lg text-deep-slate-blue font-bold opacity-80">
              Linear Regression Depth
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Unlock after completing Module 5.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
