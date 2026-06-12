import FadeInSection from "../home/FadeInSection"

function FeaturesHero() {
  return (
    <FadeInSection className="mb-xl text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-xs px-sm py-1 rounded-full bg-secondary-container/30 border border-secondary-container/50 mb-md">
        <span className="material-symbols-outlined text-[16px] text-primary" data-icon="auto_awesome">
          auto_awesome
        </span>
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
          Experience the Future of Learning
        </span>
      </div>
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-md">Engineered for deep focus and tangible progress.</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        Cognitive Flow combines the analytical rigor of AI with intuitive learning paths, designed to turn complex information into mastery.
      </p>
    </FadeInSection>
  )
}

export default FeaturesHero
