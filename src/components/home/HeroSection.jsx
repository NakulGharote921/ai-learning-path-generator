import FadeInSection from './FadeInSection'

function HeroSection() {
  return (
    <header className="pt-28 md:pt-32 pb-section px-margin max-w-max_width mx-auto relative grid md:grid-cols-12 gap-10 items-center min-h-screen">
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-0 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <FadeInSection className="md:col-span-6 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-secondary/30 mb-6 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-label-sm text-label-sm text-primary">Cognitive Flow AI 2.0 is live</span>
        </div>
        <h1 className="font-headline-xl text-[clamp(3rem,6vw,4.5rem)] leading-tight text-primary mb-6">
          Your Personal AI <br />
          <span className="text-accent relative inline-block">
            Learning Coach
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" preserveAspectRatio="none" viewBox="0 0 100 10">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth={4} />
            </svg>
          </span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
          Stop aimlessly browsing tutorials. Our intelligent engine builds dynamic, personalized roadmaps
          that adapt to your pace, goals, and learning style in real-time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="inline-flex items-center justify-center gap-2 font-label-md text-label-md bg-[#FF7444] text-white px-8 py-4 rounded-lg shadow-button hover:bg-[#e6683d] active:translate-y-1 active:shadow-none transition-all font-bold">
            Start Learning Free
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button className="inline-flex items-center justify-center gap-2 font-label-md text-label-md bg-white text-primary border border-outline-variant/30 px-8 py-4 rounded-lg hover:bg-surface-container transition-all">
            <span className="material-symbols-outlined text-sm">play_circle</span>
            See how it works
          </button>
        </div>
        <div className="mt-12 flex items-center gap-4 text-sm text-on-surface-variant">
          <div className="flex -space-x-3">
            {['person', 'person_2', 'person_3'].map((icon) => (
              <div key={icon} className="w-8 h-8 rounded-full bg-surface-dim border-2 border-surface flex items-center justify-center">
                <span className="material-symbols-outlined text-xs">{icon}</span>
              </div>
            ))}
          </div>
          <p className="font-body-sm text-body-sm">
            Joined by <strong className="text-primary">50k+</strong> lifelong learners
          </p>
        </div>
      </FadeInSection>

      <FadeInSection className="md:col-span-6">
        <div className="relative min-h-[420px] md:h-[520px] w-full">
          <div className="absolute inset-0 bg-white/90 backdrop-blur rounded-2xl shadow-soft border border-outline-variant/20 overflow-hidden flex flex-col p-5 md:p-6">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-outline-variant/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md text-primary font-bold">Frontend Mastery</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Estimated: 3 weeks</p>
                </div>
              </div>
              <span className="font-label-sm text-label-sm px-3 py-1 bg-secondary/20 text-primary rounded-full">
                In Progress
              </span>
            </div>
            <div className="flex-1 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-secondary-fixed" />
              <div className="relative flex items-start gap-4 mb-8 z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-white shadow-sm flex-shrink-0 mt-1">
                  <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>check</span>
                </div>
                <div className="card-surface p-4 flex-1">
                  <h4 className="font-label-md text-label-md text-primary mb-1">Advanced React Patterns</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Completed yesterday</p>
                </div>
              </div>
              <div className="relative flex items-start gap-4 mb-8 z-10">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center border-4 border-white shadow-md flex-shrink-0 mt-1 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-50" />
                  <span className="material-symbols-outlined text-white text-xl">play_arrow</span>
                </div>
                <div className="card-surface ai-border bg-white p-4 flex-1 shadow-hover">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-label-md text-label-md text-primary font-bold">State Management</h4>
                    <span className="font-label-sm text-label-sm text-accent bg-accent/10 px-2 py-0.5 rounded">Up Next</span>
                  </div>
                  <div className="w-full bg-surface-dim h-1.5 rounded-full overflow-hidden">
                    <div className="bg-accent w-1/3 h-full rounded-full" />
                  </div>
                </div>
              </div>
              <div className="relative flex items-start gap-4 z-10 opacity-60">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border-4 border-white shadow-sm flex-shrink-0 mt-1">
                  <span className="material-symbols-outlined text-outline text-xl">lock</span>
                </div>
                <div className="border border-outline-variant/30 bg-surface/50 rounded-xl p-4 flex-1 border-dashed">
                  <h4 className="font-label-md text-label-md text-on-surface-variant mb-1">Performance Optimization</h4>
                  <p className="font-body-sm text-body-sm text-outline text-xs">Unlocks after State Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </header>
  )
}

export default HeroSection
