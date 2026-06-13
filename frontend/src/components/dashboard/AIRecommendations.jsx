import React from 'react'

function AIRecommendations() {
  return (
    <div className="ai-gradient-border p-md shadow-soft">
      <div className="flex items-center gap-2 mb-md">
        <span className="material-symbols-outlined text-deep-slate-blue">
          smart_toy
        </span>
        <h3 className="font-headline-md text-headline-md text-deep-slate-blue">
          AI Recommended
        </h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-lg">
        Based on your struggles with matrix operations in the last quiz, I
        suggest reviewing these quick concepts.
      </p>
      <div className="flex flex-col gap-sm">
        {/* Resource 1 */}
        <a
          className="block bg-surface-container-low hover:bg-[#FF7444]/10 rounded-xl p-sm border border-outline-variant/20 transition-colors"
          href="#"
        >
          <div className="flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg border border-outline-variant/10 text-[#FF7444]">
              <span className="material-symbols-outlined text-[20px]">
                play_circle
              </span>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-surface-dim text-deep-slate-blue rounded-full font-label-sm text-label-sm mb-1 text-[10px]">
                Video • 5 min
              </span>
              <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
                Visualizing Dot Products
              </h4>
            </div>
          </div>
        </a>
        {/* Resource 2 */}
        <a
          className="block bg-surface-container-low hover:bg-[#FF7444]/10 rounded-xl p-sm border border-outline-variant/20 transition-colors"
          href="#"
        >
          <div className="flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg border border-outline-variant/10 text-deep-slate-blue">
              <span className="material-symbols-outlined text-[20px]">
                article
              </span>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-surface-dim text-deep-slate-blue rounded-full font-label-sm text-label-sm mb-1 text-[10px]">
                Quick Read
              </span>
              <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
                Numpy Matrices Refresher
              </h4>
            </div>
          </div>
        </a>
        {/* Resource 3 */}
        <a
          className="block bg-surface-container-low hover:bg-[#FF7444]/10 rounded-xl p-sm border border-outline-variant/20 transition-colors"
          href="#"
        >
          <div className="flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg border border-outline-variant/10 text-primary">
              <span className="material-symbols-outlined text-[20px]">
                quiz
              </span>
            </div>
            <div>
              <span className="inline-block px-2 py-0.5 bg-surface-dim text-deep-slate-blue rounded-full font-label-sm text-label-sm mb-1 text-[10px]">
                Exercise
              </span>
              <h4 className="font-label-md text-label-md font-bold text-deep-slate-blue">
                Matrix Multiplication Practice
              </h4>
            </div>
          </div>
        </a>
      </div>
      <button className="w-full mt-md text-center text-deep-slate-blue font-label-md text-label-md hover:underline py-2">
        View All Suggestions
      </button>
    </div>
  )
}

export default AIRecommendations
