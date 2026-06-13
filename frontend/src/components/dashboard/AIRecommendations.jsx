import React from 'react'
import EmptyState from '../EmptyState'

function AIRecommendations({ recommendations = [] }) {
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="ai-gradient-border p-md shadow-soft">
        <EmptyState title="No Recommendations Available" description="We don't have suggestions right now. Try again later." />
      </div>
    )
  }
  return (
    <div className="ai-gradient-border p-md shadow-soft">
      <div className="flex items-center gap-2 mb-md">
        <span className="material-symbols-outlined text-deep-slate-blue">smart_toy</span>
        <h3 className="font-headline-md text-headline-md text-deep-slate-blue">AI Recommended</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">Based on your recent activity, here are a few quick suggestions.</p>
      <div className="flex flex-col gap-sm">
        {recommendations.map((r) => (
          <a
            key={r.id}
            className="block bg-surface-container-low hover:bg-[#FF7444]/10 rounded-xl p-sm border border-outline-variant/20 transition-colors"
            href={r.url || '#'}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-start gap-3">
              <div className="bg-white p-2 rounded-lg border border-outline-variant/10 text-[#FF7444]">
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-surface-dim text-deep-slate-blue rounded-full font-label-sm text-label-sm mb-1 text-[10px]">{r.type}{r.duration ? ` • ${r.duration}` : ''}</span>
                <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">{r.title}</h4>
              </div>
            </div>
          </a>
        ))}
      </div>
      <button className="w-full mt-md text-center text-deep-slate-blue font-label-md text-label-md hover:underline py-2">View All Suggestions</button>
    </div>
  )
}

export default AIRecommendations
