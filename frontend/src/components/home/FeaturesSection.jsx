import FadeInSection from './FadeInSection'
import FeatureCard from './FeatureCard'
import { features } from './data'

function FeaturesSection() {
  return (
    <section className="py-section px-margin max-w-max_width mx-auto" id="features">
      <FadeInSection className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">A completely new way to learn</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Cognitive Flow replaces static courses with an evolving ecosystem tailored entirely to your
          absorption rate.
        </p>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
        {features.map((feature, index) => (
          <FadeInSection key={feature.title} className={`${feature.className} ${index ? `stagger-${index}` : ''}`}>
            <FeatureCard {...feature} />
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
