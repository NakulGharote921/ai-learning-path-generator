import React from 'react'
import FadeInSection from '../home/FadeInSection'

const PricingCards = () => {
  return (
<FadeInSection className="px-margin max-w-max_width mx-auto mb-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Starter Plan */}
        <div className="periwinkle-surface rounded-2xl p-lg flex flex-col shadow-soft border border-outline-variant/10">
          <div className="mb-md">
            <h3 className="font-headline-md text-headline-md text-primary mb-xs">
              Starter
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              For the curious mind beginning their flow journey.
            </p>
          </div>
          <div className="mb-lg">
            <span className="font-headline-xl text-headline-xl text-primary">
              $0
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              /mo
            </span>
          </div>
          <ul className="flex-grow space-y-md mb-xl">
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              3 Active Learning Sessions
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              Standard AI Tutor Access
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              Personal Analytics (Basic)
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface-variant opacity-50">
              <span className="material-symbols-outlined">block</span>
              Priority Support
            </li>
          </ul>
          <button className="w-full py-md rounded-xl font-label-md text-label-md border-2 border-primary text-primary hover:bg-primary/5 transition-colors btn-pressable">
            Start for Free
          </button>
        </div>
        {/* Pro Plan */}
        <div className="relative bg-white rounded-2xl p-lg flex flex-col shadow-soft border-2 border-accent scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-md py-xs rounded-full font-label-sm text-label-sm uppercase tracking-wider">
            Most Popular
          </div>
          <div className="mb-md">
            <h3 className="font-headline-md text-headline-md text-primary mb-xs">
              Pro
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              The complete toolkit for high-performance learners.
            </p>
          </div>
          <div className="mb-lg">
            <span
              className="font-headline-xl text-headline-xl text-primary billing-price"
              data-annual="15.99"
              data-monthly="19.99"
            >
              $19.99
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              /mo
            </span>
          </div>
          <ul className="flex-grow space-y-md mb-xl">
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span
                className="material-symbols-outlined text-accent"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
              Unlimited Learning Sessions
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span
                className="material-symbols-outlined text-accent"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
              Advanced AI Reasoning (v4)
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span
                className="material-symbols-outlined text-accent"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
              Deep Flow State Analytics
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span
                className="material-symbols-outlined text-accent"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
              Knowledge Graph Visualization
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span
                className="material-symbols-outlined text-accent"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
              24/7 Priority Support
            </li>
          </ul>
          <button className="w-full py-md rounded-xl font-label-md text-label-md bg-accent text-white hover:bg-accent/90 transition-all btn-pressable">
            Get Flow Pro
          </button>
        </div>
        {/* Enterprise Plan */}
        <div className="periwinkle-surface rounded-2xl p-lg flex flex-col shadow-soft border border-outline-variant/10">
          <div className="mb-md">
            <h3 className="font-headline-md text-headline-md text-primary mb-xs">
              Enterprise
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Cognitive acceleration for teams and organizations.
            </p>
          </div>
          <div className="mb-lg">
            <span className="font-headline-xl text-headline-xl text-primary">
              Custom
            </span>
          </div>
          <ul className="flex-grow space-y-md mb-xl">
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              Everything in Pro
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              Team Management Console
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              Custom Knowledge Integrations
            </li>
            <li className="flex items-start gap-sm font-body-md text-body-md text-on-surface">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              Dedicated Success Manager
            </li>
          </ul>
          <button className="w-full py-md rounded-xl font-label-md text-label-md border-2 border-primary text-primary hover:bg-primary/5 transition-colors btn-pressable">
            Contact Sales
          </button>
        </div>
      </div>
    </FadeInSection>
      )
}

export default PricingCards