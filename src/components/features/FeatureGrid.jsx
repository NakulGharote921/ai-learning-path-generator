function FeatureGrid() {
  return (
    <div className="bento-grid mb-xl">
      <div className="col-span-12 lg:col-span-8 group feature-hover bg-surface-container-low p-lg rounded-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-md text-primary">
            <span className="material-symbols-outlined text-[32px]" data-icon="map">
              map
            </span>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary mb-sm">AI-Generated Roadmaps</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Input your goal, and our engine deconstructs it into a structured, prioritized learning sequence. No more "where do I start?" paralysis.
          </p>
        </div>
        <div className="relative mt-lg h-40 bg-surface rounded-lg border border-outline-variant/30 p-md overflow-hidden">
          <div className="flex items-center gap-md h-full">
            <div className="w-2 h-full bg-primary-container/20 rounded-full relative">
              <div className="absolute top-0 w-full h-1/2 bg-accent rounded-full" />
              <div className="absolute top-1/2 -left-1 w-4 h-4 bg-accent rounded-full border-2 border-surface node-pulse" />
            </div>
            <div className="flex-1 space-y-md">
              <div className="h-10 bg-surface-container-high rounded-lg w-3/4 flex items-center px-md border border-outline-variant/20">
                <span className="font-label-md text-label-md text-primary">Phase 1: Fundamental Logic</span>
              </div>
              <div className="h-10 bg-surface-container rounded-lg w-5/6 flex items-center px-md border border-accent/20">
                <span className="font-label-md text-label-md text-on-surface">Phase 2: Complex Integrations</span>
              </div>
              <div className="h-10 bg-surface-container-low rounded-lg w-2/3 flex items-center px-md border border-outline-variant/10">
                <span className="font-label-md text-label-md text-on-surface-variant">Phase 3: Real-world Mastery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-primary/10 to-secondary-container/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="col-span-12 lg:col-span-4 feature-hover bg-primary-container text-on-primary-container p-lg rounded-xl flex flex-col justify-between min-h-[400px]">
        <div>
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-md text-white">
            <span className="material-symbols-outlined text-[32px]" data-icon="smart_toy">
              smart_toy
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-sm text-white">Interactive AI Tutor</h3>
          <p className="font-body-md text-body-md opacity-90">
            Instant clarification on any topic, available round the clock. It adapts its tone from professional mentor to friendly coach based on your preference.
          </p>
        </div>
        <div className="bg-on-primary-fixed/20 p-md rounded-lg mt-lg border border-white/10">
          <div className="flex items-start gap-sm mb-sm">
            <div className="w-6 h-6 rounded-full bg-white/30 flex-shrink-0" />
            <div className="text-white/80 font-label-sm text-label-sm italic">
              "Can you explain recursion using a nested box analogy?"
            </div>
          </div>
          <div className="flex items-start gap-sm">
            <div className="w-6 h-6 rounded-full bg-accent flex-shrink-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-[14px] text-white" data-icon="bolt">
                bolt
              </span>
            </div>
            <div className="text-white font-body-sm text-body-sm">
              "Imagine a box that contains an identical, slightly smaller box inside..."
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-5 feature-hover bg-surface-container-highest p-lg rounded-xl flex flex-col justify-between min-h-[360px]">
        <div>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-md text-primary">
            <span className="material-symbols-outlined text-[32px]" data-icon="monitoring">
              monitoring
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Deep Learning Analytics</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Track retention rates, identify knowledge gaps, and see your progress through data-driven visualizations.
          </p>
        </div>
        <div className="mt-lg">
          <div className="flex items-end gap-xs h-24">
            <div className="w-full bg-primary/20 h-1/2 rounded-t-sm" />
            <div className="w-full bg-primary/30 h-2/3 rounded-t-sm" />
            <div className="w-full bg-primary/40 h-1/3 rounded-t-sm" />
            <div className="w-full bg-accent h-3/4 rounded-t-sm shadow-[0_0_10px_rgba(255,116,68,0.3)]" />
            <div className="w-full bg-primary/50 h-5/6 rounded-t-sm" />
            <div className="w-full bg-primary/60 h-1/2 rounded-t-sm" />
          </div>
          <div className="mt-xs pt-xs border-t border-outline-variant flex justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 lg:col-span-7 feature-hover bg-secondary-container/20 p-lg rounded-xl flex flex-col md:flex-row gap-lg min-h-[360px]">
        <div className="flex-1">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-md text-primary">
            <span className="material-symbols-outlined text-[32px]" data-icon="book_5">
              book_5
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Global Resource Library</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
            Access a curated ecosystem of thousands of articles, code snippets, and research papers, all indexed for your roadmap.
          </p>
          <div className="flex flex-wrap gap-xs">
            <span className="px-sm py-1 bg-white rounded-full border border-outline-variant/30 font-label-sm text-label-sm text-on-surface">Machine Learning</span>
            <span className="px-sm py-1 bg-white rounded-full border border-outline-variant/30 font-label-sm text-label-sm text-on-surface">Data Structures</span>
            <span className="px-sm py-1 bg-white rounded-full border border-outline-variant/30 font-label-sm text-label-sm text-on-surface">Neuroscience</span>
          </div>
        </div>
        <div className="flex-1 relative hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 border border-primary/20 rounded-xl rotate-6 bg-white/50" />
              <div className="absolute inset-0 border border-primary/30 rounded-xl -rotate-3 bg-white/80" />
              <div className="absolute inset-0 border border-primary/40 rounded-xl bg-white shadow-md flex flex-col p-sm">
                <div className="w-full h-2 bg-surface-container rounded mb-xs" />
                <div className="w-2/3 h-2 bg-surface-container rounded mb-md" />
                <div className="flex-1 bg-surface-container-low rounded-lg p-xs">
                  <div className="w-full h-1 bg-outline-variant/20 rounded mb-xs" />
                  <div className="w-full h-1 bg-outline-variant/20 rounded mb-xs" />
                  <div className="w-3/4 h-1 bg-outline-variant/20 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureGrid
