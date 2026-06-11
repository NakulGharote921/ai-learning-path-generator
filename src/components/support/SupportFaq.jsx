const faqs = [
  {
    question: 'How do I reset my learning path?',
    answer:
      "You can reset any specific module or your entire learning journey from the 'Analytics' tab. Select 'Reset Progress' at the bottom of the page. Please note that this action is permanent and will clear your current streaks and neural weightings.",
  },
  {
    question: 'Is the AI Tutor available offline?',
    answer:
      "Currently, the AI Tutor requires a stable internet connection to process complex neural requests. However, you can download 'Library' resources and 'Roadmap' flashcards for offline study via the mobile app.",
  },
  {
    question: 'Can I sync my progress across multiple devices?',
    answer:
      'Yes, Cognitive Flow uses a cloud-based sync system. Ensure you are logged into the same account on all devices to maintain a seamless learning experience.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'We prioritize your privacy with end-to-end encryption. Your learning data is used exclusively to train your personal AI instance and is never shared with third parties.',
  },
]

function SupportFaq() {
  return (
    <section className="px-margin py-xl bg-surface-container-low">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-xl">
          <span className="bg-secondary-container text-on-secondary-container px-md py-xs rounded-full font-label-sm text-label-sm uppercase tracking-wider">
            Top Questions
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mt-sm">Featured FAQs</h2>
        </div>
        <div className="space-y-sm">
          {faqs.map((faq) => (
            <div key={faq.question} className="accordion-item bg-white rounded-xl shadow-sm border border-outline-variant/30">
              <button
                className="w-full px-lg py-md flex items-center justify-between text-left group"
                onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}
              >
                <span className="font-headline-md text-[18px] text-on-surface">{faq.question}</span>
                <span className="material-symbols-outlined chevron-icon transition-transform text-outline">expand_more</span>
              </button>
              <div className="accordion-content px-lg">
                <p className="text-on-surface-variant font-body-md leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SupportFaq
