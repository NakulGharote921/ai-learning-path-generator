function CallToActionSection() {
  return (
    <section className="py-section bg-surface-container-low border-y border-outline-variant/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3Lm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiM1NzZhOGYiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] opacity-50" />
      <div className="max-w-3xl mx-auto px-margin text-center relative z-10 fade-in-up">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-6">Ready to enter flow state?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
          Join thousands of professionals who have accelerated their career growth with personalized AI
          roadmaps.
        </p>
        <button className="inline-flex items-center justify-center gap-2 font-label-md text-label-md bg-[#FF7444] text-white px-10 py-5 rounded-lg shadow-button hover:bg-[#e6683d] active:translate-y-1 active:shadow-none transition-all font-bold text-lg">
          Generate My Roadmap
          <span className="material-symbols-outlined">electric_bolt</span>
        </button>
        <p className="font-label-sm text-label-sm text-outline mt-6">
          No credit card required. Free tier available forever.
        </p>
      </div>
    </section>
  )
}

export default CallToActionSection
