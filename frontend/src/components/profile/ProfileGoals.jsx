import React from 'react'
import FadeInSection from '../home/FadeInSection'

function ProfileGoals() {
  return (
    <FadeInSection>
      <h3 className="font-headline-md text-headline-md slate-blue-text flex items-center gap-2 mb-md">
        <span className="material-symbols-outlined text-primary">target</span>
        Learning Goals
      </h3>
      <div className="bg-surface rounded-[24px] p-lg border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-primary-container/5 to-transparent pointer-events-none" />
        <div className="max-w-2xl relative z-10">
          <div className="mb-6">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
              Primary Objective
            </label>
            <div className="flex items-center justify-between bg-surface-container rounded-xl p-4 border border-outline-variant/30">
              <span className="font-body-md text-body-md font-medium">
                Master PyTorch for NLP
              </span>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">
              Weekly Target
            </label>
            <div className="flex items-center gap-4">
              <input
                className="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-[#FF7444]"
                max={20}
                min={1}
                type="range"
                defaultValue={10}
              />
              <span className="font-headline-md text-headline-md slate-blue-text whitespace-nowrap w-24 text-right">
                10 hrs
              </span>
            </div>
          </div>
          <div className="flex gap-sm flex-wrap mt-8">
            <span className="bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm px-4 py-2 rounded-full">
              NLP
            </span>
            <span className="bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm px-4 py-2 rounded-full">
              Deep Learning
            </span>
            <span className="bg-secondary-container/30 text-on-secondary-container font-label-sm text-label-sm px-4 py-2 rounded-full">
              Python
            </span>
            <button className="border border-dashed border-outline-variant text-on-surface-variant font-label-sm text-label-sm px-4 py-2 rounded-full hover:bg-surface-variant transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">add</span>{' '}
              Add Topic
            </button>
          </div>
        </div>
      </div>
    </FadeInSection>
  )
}

export default ProfileGoals
