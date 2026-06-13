import FadeInSection from "../home/FadeInSection"

function FeaturesCTA() {
  return (
    <FadeInSection className="mt-xl p-xl rounded-2xl bg-surface-container border border-outline-variant/30 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-headline-xl text-headline-xl text-primary mb-md">Ready to master the complex?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto">
          Join 150,000+ lifelong learners who are accelerating their professional growth with AI-powered focus.
        </p>
        <div className="flex flex-col sm:flex-row gap-md justify-center">
          <button className="bg-[#FF7444] text-white px-xl py-md rounded-lg font-label-md text-label-md shadow-[0_4px_0_0_#D65B32] active:translate-y-[2px] active:shadow-none transition-all">
            Start Your Free Roadmap
          </button>
          <button className="bg-white border border-outline text-primary px-xl py-md rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors">
            Book a Demo
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />
    </FadeInSection>
  )
}

export default FeaturesCTA
