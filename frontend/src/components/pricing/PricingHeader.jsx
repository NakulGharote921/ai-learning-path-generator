import React from 'react'
import FadeInSection from '../home/FadeInSection'

const PricingHeader = () => {
  return (
    <FadeInSection className="py-xl mt-4 px-margin text-center max-w-4xl mx-auto">
      <h1 className="font-headline-xl text-headline-xl text-primary mb-md">
        Transparent pricing for lifelong learners
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
        Invest in your cognitive potential with plans designed for every stage
        of your learning journey.
      </p>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-md mb-xl">
        <span className="font-label-md text-label-md text-on-surface-variant">
          Monthly
        </span>
        <button
          aria-pressed="false"
          className="relative w-14 h-8 bg-surface-container rounded-full p-1 transition-colors focus:outline-none"
          id="billing-toggle"
        >
          <div className="toggle-dot w-6 h-6 bg-primary rounded-full transition-transform duration-300 transform translate-x-0" />
        </button>
        <span className="font-label-md text-label-md text-primary font-bold">
          Annual <span className="text-accent ml-1">(20% off)</span>
        </span>
      </div>
    </FadeInSection>
  )
}

export default PricingHeader