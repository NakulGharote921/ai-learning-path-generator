import React from 'react'
import FadeInSection from '../home/FadeInSection'

const PricingCTA = () => {
  return (
    <FadeInSection className="relative py-xl px-margin text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10"></div>
      <div className="relative z-10 max-w-2xl mx-auto glass-card p-xl rounded-2xl shadow-soft">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-md">
          Ready to reach flow state?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
          Join 50,000+ lifelong learners who have accelerated their mastery with
          Cognitive Flow.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
          <button className="bg-accent text-white px-xl py-md rounded-xl font-headline-md text-headline-md hover:bg-accent/90 transition-all btn-pressable">
            Start 14-day free trial
          </button>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            No credit card required.
          </p>
        </div>
      </div>
    </FadeInSection>
      )
}

export default PricingCTA