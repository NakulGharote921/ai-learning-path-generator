import React from 'react'
import Sidebar from './dashboard/Sidebar'

function Support() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Support Center | Cognitive Flow</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400&family=Geist:wght@500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Hanken+Grotesk:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            vertical-align: middle;\n        }\n        .accordion-content {\n            max-height: 0;\n            overflow: hidden;\n            transition: max-height 0.3s ease-out, padding 0.3s ease;\n        }\n        .accordion-item.active .accordion-content {\n            max-height: 200px;\n            padding-bottom: 24px;\n        }\n        .accordion-item.active .chevron-icon {\n            transform: rotate(180deg);\n        }\n        .glass-card {\n            background: rgba(183, 189, 247, 0.15);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(87, 106, 143, 0.1);\n        }\n        .hero-pattern {\n            background-color: #f9f9ff;\n            background-image: radial-gradient(#3f5275 0.5px, transparent 0.5px);\n            background-size: 24px 24px;\n        }\n        @media (max-width: 767px) {\n          .side-nav { transform: translateX(-100%); }\n          .main-content { margin-left: 0; }\n        }\n    " }} />
      </div>

      <Sidebar />

      <main className="main-content md:ml-64 min-h-screen">
        <section className="hero-pattern pt-xl pb-lg px-margin">
          <div className="max-w-4xl mx-auto text-center space-y-md">
            <h2 className="font-headline-xl text-headline-xl text-primary">How can we help you today?</h2>
            <div className="relative max-w-2xl mx-auto group">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-xl pr-md py-lg rounded-full bg-white border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all shadow-lg shadow-primary/5 font-body-md" placeholder="Search for guides, FAQs, or troubleshooting..." type="text" />
              <button className="absolute right-xs top-1/2 -translate-y-1/2 bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>
        <section className="px-margin py-lg max-w-max_width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="md:col-span-2 glass-card rounded-xl p-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-fixed-dim flex items-center justify-center text-primary mb-md">
                  <span className="material-symbols-outlined text-headline-md">auto_awesome</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">Getting Started</h3>
                <p className="text-on-surface-variant font-body-md">Master the fundamentals of Cognitive Flow and set up your deep learning environment in minutes.</p>
              </div>
              <div className="mt-lg flex items-center text-primary font-label-md gap-xs group-hover:gap-sm transition-all">
                Explore Guides <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="glass-card rounded-xl p-lg hover:shadow-xl transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-secondary-fixed-dim flex items-center justify-center text-secondary mb-md">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">Account &amp; Billing</h3>
              <p className="text-on-surface-variant font-body-sm">Manage subscriptions, update payment methods, and view your billing history.</p>
            </div>
            <div className="glass-card rounded-xl p-lg hover:shadow-xl transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed-dim flex items-center justify-center text-tertiary mb-md">
                <span className="material-symbols-outlined">map</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-sm">Roadmap</h3>
              <p className="text-on-surface-variant font-body-sm">Understand how our algorithmic paths adapt to your unique pace.</p>
            </div>
            <div className="md:col-span-2 glass-card rounded-xl p-lg flex flex-col md:flex-row gap-lg hover:shadow-xl transition-all cursor-pointer group">
              <img alt="AI Interface" className="w-full md:w-48 h-48 object-cover rounded-lg" data-alt="A sophisticated 3D visualization of a neural network glowing with soft periwinkle and deep blue light. The aesthetic is clean and futuristic, representing high-end artificial intelligence. The image is brightly lit with a high-key light mode feel, emphasizing clarity, precision, and technological warmth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNt1aLpKuu7T9W-gqqKvXeH-3muJdsEt3GaWTiMOgjx9xfqMbBV0A1BmjOmvMHcfdj1fMg4teFjDmCa684rm3acXDuei0-fHgk44kyxrgVVnUpF4Qilw5nuxB0ApoBkSG6gKW9wbSY-sPNnNn-vmaL-1CpN6IlZaQx0w-ohWrt0VWBDpW2Tem6SbLnaO3BzxCijsIWOKMjoPQrzf7EdtKldjLUZiQqDCG8dhi0hWcb93ddPv3sR9fzOcWiOw1CHQR9qMms2Qp7DnQ" />
              <div className="flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">AI Tutor Help</h3>
                <p className="text-on-surface-variant font-body-md mb-md">Troubleshoot AI interactions, voice commands, and personalized feedback loops.</p>
                <span className="text-primary font-label-md flex items-center gap-xs">24/7 Support Docs <span className="material-symbols-outlined">arrow_outward</span></span>
              </div>
            </div>
            <div className="md:col-span-2 bg-primary-container text-on-primary-container rounded-xl p-lg flex items-center justify-between group cursor-pointer">
              <div className="space-y-sm">
                <h3 className="font-headline-md text-headline-md font-bold">Community Forum</h3>
                <p className="opacity-90">Join 50,000+ lifelong learners discussing methodology and best practices.</p>
              </div>
              <span className="material-symbols-outlined text-[64px] opacity-20 group-hover:opacity-40 transition-opacity">groups</span>
            </div>
          </div>
        </section>
        <section className="px-margin py-xl bg-surface-container-low">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-xl">
              <span className="bg-secondary-container text-on-secondary-container px-md py-xs rounded-full font-label-sm text-label-sm uppercase tracking-wider">Top Questions</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-sm">Featured FAQs</h2>
            </div>
            <div className="space-y-sm">
              <div className="accordion-item bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <button className="w-full px-lg py-md flex items-center justify-between text-left group" onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}>
                  <span className="font-headline-md text-[18px] text-on-surface">How do I reset my learning path?</span>
                  <span className="material-symbols-outlined chevron-icon transition-transform text-outline">expand_more</span>
                </button>
                <div className="accordion-content px-lg">
                  <p className="text-on-surface-variant font-body-md leading-relaxed">You can reset any specific module or your entire learning journey from the 'Analytics' tab. Select 'Reset Progress' at the bottom of the page. Please note that this action is permanent and will clear your current streaks and neural weightings.</p>
                </div>
              </div>
              <div className="accordion-item bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <button className="w-full px-lg py-md flex items-center justify-between text-left group" onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}>
                  <span className="font-headline-md text-[18px] text-on-surface">Is the AI Tutor available offline?</span>
                  <span className="material-symbols-outlined chevron-icon transition-transform text-outline">expand_more</span>
                </button>
                <div className="accordion-content px-lg">
                  <p className="text-on-surface-variant font-body-md leading-relaxed">Currently, the AI Tutor requires a stable internet connection to process complex neural requests. However, you can download 'Library' resources and 'Roadmap' flashcards for offline study via the mobile app.</p>
                </div>
              </div>
              <div className="accordion-item bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <button className="w-full px-lg py-md flex items-center justify-between text-left group" onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}>
                  <span className="font-headline-md text-[18px] text-on-surface">Can I sync my progress across multiple devices?</span>
                  <span className="material-symbols-outlined chevron-icon transition-transform text-outline">expand_more</span>
                </button>
                <div className="accordion-content px-lg">
                  <p className="text-on-surface-variant font-body-md leading-relaxed">Yes, Cognitive Flow uses a cloud-based sync system. Ensure you are logged into the same account on all devices to maintain a seamless learning experience.</p>
                </div>
              </div>
              <div className="accordion-item bg-white rounded-xl shadow-sm border border-outline-variant/30">
                <button className="w-full px-lg py-md flex items-center justify-between text-left group" onClick={(e) => e.currentTarget.parentElement.classList.toggle('active')}>
                  <span className="font-headline-md text-[18px] text-on-surface">How secure is my data?</span>
                  <span className="material-symbols-outlined chevron-icon transition-transform text-outline">expand_more</span>
                </button>
                <div className="accordion-content px-lg">
                  <p className="text-on-surface-variant font-body-md leading-relaxed">We prioritize your privacy with end-to-end encryption. Your learning data is used exclusively to train your personal AI instance and is never shared with third parties.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-margin py-xl max-w-max_width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white p-lg rounded-xl shadow-sm text-center border border-outline-variant/20">
              <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-primary">chat</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-sm">Live Chat</h4>
              <p className="text-on-surface-variant font-body-sm mb-lg">Average response time: 2 mins</p>
              <button className="w-full bg-accent text-on-primary py-sm rounded-lg font-label-md text-label-md shadow-lg shadow-accent/20 hover:opacity-90 active:scale-95 transition-all">Start Conversation</button>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm text-center border border-outline-variant/20">
              <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-primary">mail</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-sm">Email Support</h4>
              <p className="text-on-surface-variant font-body-sm mb-lg">Available 24/7 for complex issues</p>
              <button className="w-full bg-primary text-on-primary py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all">Send Ticket</button>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-sm text-center border border-outline-variant/20">
              <div className="w-14 h-14 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-md">
                <span className="material-symbols-outlined text-primary">description</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-sm">Documentation</h4>
              <p className="text-on-surface-variant font-body-sm mb-lg">Technical API and system docs</p>
              <div className="flex flex-col gap-xs">
                <a className="text-primary font-label-md underline hover:text-accent" href="#">Developer API</a>
                <a className="text-primary font-label-md underline hover:text-accent" href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full py-xl bg-surface dark:bg-inverse-surface border-t border-outline-variant/30 dark:border-outline/20">
          <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
            <div>
              <h5 className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Cognitive Flow AI. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-md justify-center">
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">Privacy Policy</a>
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">Terms of Service</a>
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">Cookie Policy</a>
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">Contact Us</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Support
