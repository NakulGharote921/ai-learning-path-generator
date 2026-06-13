import React from 'react'
import FadeInSection from '../home/FadeInSection'

const PricingFAQ = () => {
  return (
<FadeInSection className="py-xl bg-white/40">
      <div className="px-margin max-w-3xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-base">
          {/* FAQ Item 1 */}
          <details
            className="group bg-surface rounded-2xl border border-outline-variant/20 p-md cursor-pointer transition-all hover:bg-surface-container-low"
            open=""
          >
            <summary className="flex justify-between items-center font-headline-md text-headline-md text-primary list-none">
              Can I change my plan later?
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="font-body-md text-body-md text-on-surface-variant mt-md">
              Absolutely. You can upgrade or downgrade your plan at any time
              from your account settings. If you upgrade, the new features will
              be available immediately and prorated for the current billing
              cycle.
            </p>
          </details>
          {/* FAQ Item 2 */}
          <details className="group bg-surface rounded-2xl border border-outline-variant/20 p-md cursor-pointer transition-all hover:bg-surface-container-low">
            <summary className="flex justify-between items-center font-headline-md text-headline-md text-primary list-none">
              What is "AI Tutor Access"?
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="font-body-md text-body-md text-on-surface-variant mt-md">
              Our AI Tutor is a specialized LLM trained on educational
              psychology and speed-learning techniques. It helps you break down
              complex topics, generates quizzes, and creates personalized
              roadmaps based on your performance.
            </p>
          </details>
          {/* FAQ Item 3 */}
          <details className="group bg-surface rounded-2xl border border-outline-variant/20 p-md cursor-pointer transition-all hover:bg-surface-container-low">
            <summary className="flex justify-between items-center font-headline-md text-headline-md text-primary list-none">
              Do you offer student discounts?
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="font-body-md text-body-md text-on-surface-variant mt-md">
              Yes! We believe in empowering students. Use your .edu email to
              sign up and you'll receive a 50% discount on the Pro plan for up
              to 4 years.
            </p>
          </details>
        </div>
      </div>
    </FadeInSection>
      )
}

export default PricingFAQ