import React from 'react'
import RoadmapStage from './RoadmapStage'

function RoadmapTimeline() {
  return (
    <div className="max-w-4xl mx-auto relative pl-10 md:pl-16 pb-xl">
      {/* Vertical connector line */}
      <div className="absolute left-4 md:left-[39px] top-4 bottom-0 w-[4px] bg-primary-fixed-dim rounded-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)]" />

      {/* ── Stage 1: Fundamentals (Completed) ── */}
      <RoadmapStage
        stageLabel="Stage 1"
        title="Fundamentals"
        status="completed"
        progress={100}
        badge="Completed"
      >
        <div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
          <span className="material-symbols-outlined text-primary text-[18px]">play_circle</span>
          <span>Introduction to Core Syntaxes</span>
        </div>
        <div className="flex items-center gap-3 text-on-surface-variant font-body-sm text-body-sm">
          <span className="material-symbols-outlined text-primary text-[18px]">play_circle</span>
          <span>Basic Data Structures</span>
        </div>
      </RoadmapStage>

      {/* ── Stage 2: Advanced Logic (Active) ── */}
      <RoadmapStage
        stageLabel="Stage 2"
        title="Advanced Logic"
        status="active"
        progress={45}
        badge="3 weeks remaining"
      >
        {/* Module: completed */}
        <div className="bg-surface p-3 rounded-lg border border-outline-variant/30 flex items-center justify-between hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px]">check</span>
            </div>
            <span className="font-body-sm text-body-sm font-medium">React Hooks Deep Dive</span>
          </div>
        </div>

        {/* Module: in-progress */}
        <div className="bg-surface p-3 rounded-lg border-l-4 border-l-primary shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="font-body-sm text-body-sm font-medium text-primary">
              State Management Patterns
            </span>
          </div>
          <button className="text-primary font-label-sm text-label-sm hover:underline">
            Continue
          </button>
        </div>

        {/* Module: locked */}
        <div className="bg-surface p-3 rounded-lg border border-outline-variant/30 opacity-60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center" />
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Performance Optimization
            </span>
          </div>
          <span className="material-symbols-outlined text-outline-variant text-[18px]">lock</span>
        </div>
      </RoadmapStage>

      {/* ── Stage 3: System Design (Locked) ── */}
      <RoadmapStage
        stageLabel="Stage 3"
        title="System Design"
        status="locked"
        progress={0}
        lockMessage="Complete 'Advanced Logic' to unlock this module."
      />
    </div>
  )
}

export default RoadmapTimeline
