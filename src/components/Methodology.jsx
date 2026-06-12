import React from 'react'

function Methodology() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Methodology | Cognitive Flow</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500&family=Geist:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
        body { background-color: #FFF8DE; }
        .warm-tech-card {
            background-color: rgba(183, 189, 247, 0.15);
            box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);
            backdrop-filter: blur(8px);
        }
        .ai-highlight {
            border: 1px solid transparent;
            background: linear-gradient(#f9f9ff, #f9f9ff) padding-box,
                        linear-gradient(to right, #576A8F, #B7BDF7) border-box;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .accent-button {
            background-color: #FF7444;
            box-shadow: 0 4px 0px #D65A31;
            transition: all 0.1s ease;
        }
        .accent-button:active {
            box-shadow: 0 0px 0px #D65A31;
            transform: translateY(4px);
        }
    `,
          }}
        />
        <main className="pt-32 pb-xl">
          {/* Hero Section */}
          <section className="max-w-max_width mx-auto px-margin mb-xl text-center">
            <span className="inline-block font-label-sm text-label-sm px-md py-xs rounded-full bg-secondary-container text-on-secondary-container mb-md">
              HOW IT WORKS
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-md max-w-3xl mx-auto">
              Master any subject through Cognitive Absorption.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              We’ve reverse-engineered the way the brain encodes deep knowledge to create a system that evolves with your intellectual growth.
            </p>
          </section>
          {/* Bento Grid: The Engine */}
          <section className="max-w-max_width mx-auto px-margin mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Large Card: Absorption Engine */}
              <div className="md:col-span-8 warm-tech-card rounded-xl p-xl flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-sm mb-md">
                    <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                    <h2 className="font-headline-lg text-headline-lg text-primary-container">Cognitive Absorption Engine</h2>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                    Our core AI model analyzes your existing mental schemas to find the optimal "entry point" for new information. It doesn't just teach; it integrates.
                  </p>
                </div>
                <div className="mt-lg h-64 relative rounded-lg bg-surface/40 flex items-center justify-center">
                  <div className="relative z-10 flex flex-wrap justify-center gap-md p-md">
                    <div className="bg-white p-sm rounded-lg shadow-sm flex items-center gap-xs">
                      <span className="material-symbols-outlined text-accent" style={{ fontVariationSettings: '"FILL" 1' }}>
                        bolt
                      </span>
                      <span className="font-label-md text-label-md">Neuro-pathway Mapping</span>
                    </div>
                    <div className="bg-white p-sm rounded-lg shadow-sm flex items-center gap-xs">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                        insights
                      </span>
                      <span className="font-label-md text-label-md">Contextual Anchoring</span>
                    </div>
                    <div className="bg-white p-sm rounded-lg shadow-sm flex items-center gap-xs">
                      <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>
                        auto_awesome
                      </span>
                      <span className="font-label-md text-label-md">Dynamic Scaffolding</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Card: Real-time Stats */}
              <div className="md:col-span-4 bg-primary-container text-on-primary-container rounded-xl p-xl flex flex-col justify-center">
                <div className="mb-xl">
                  <div className="text-4xl font-bold mb-xs">4.2x</div>
                  <div className="font-label-md text-label-md opacity-80 uppercase tracking-wider">Retention Speedup</div>
                </div>
                <div className="mb-xl">
                  <div className="text-4xl font-bold mb-xs">89%</div>
                  <div className="font-label-md text-label-md opacity-80 uppercase tracking-wider">Absorption Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-xs">0%</div>
                  <div className="font-label-md text-label-md opacity-80 uppercase tracking-wider">Knowledge Gaps</div>
                </div>
              </div>
            </div>
          </section>
          {/* Step-by-Step Methodology */}
          <section className="bg-surface-container-low py-32 border-y border-outline-variant/10">
            <div className="max-w-max_width mx-auto px-margin">
              <div className="text-center mb-xl">
                <h2 className="font-headline-lg text-headline-lg text-primary">The 4-Stage Mastery Loop</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">A continuous cycle of growth designed for professional depth.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
                {/* Step 1 */}
                <div className="relative group">
                  <div className="mb-md w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary/10 group-hover:border-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">assignment_turned_in</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-xs">Assessment</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">AI probes your current knowledge boundaries using non-intrusive semantic analysis.</p>
                </div>
                {/* Step 2 */}
                <div className="relative group">
                  <div className="mb-md w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary/10 group-hover:border-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">model_training</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-xs">Generation</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Customized modules are generated, bridging the gap between what you know and what you need to master.</p>
                </div>
                {/* Step 3 */}
                <div className="relative group">
                  <div className="mb-md w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary/10 group-hover:border-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">tune</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-xs">Adaptation</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">The engine recalibrates in real-time based on your interaction speed and cognitive load markers.</p>
                </div>
                {/* Step 4 */}
                <div className="relative group">
                  <div className="mb-md w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary/10 group-hover:border-accent transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-accent transition-colors">workspace_premium</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary-container mb-xs">Mastery</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Knowledge is solidified through spaced repetition and synthesis challenges that prove application.</p>
                </div>
              </div>
            </div>
          </section>
          {/* Deep Learning Mode Section (AI Highlight) */}
          <section className="max-w-max_width mx-auto px-margin mt-32">
            <div className="ai-highlight rounded-xl p-xl md:p-32 flex flex-col md:flex-row items-center gap-xl">
              <div className="md:w-1/2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined text-primary">auto_fix_high</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-md">Personalization at Scale</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
                  Our algorithm doesn't just give you a video or text. It generates the medium that fits you best, be it an interactive visualization, a technical breakdown, or an analogy-heavy narrative.
                </p>
                <ul className="space-y-sm">
                  <li className="flex items-center gap-sm font-label-md text-label-md text-primary">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Multimodal output generation (Voice, Text, Visual)
                  </li>
                  <li className="flex items-center gap-sm font-label-md text-label-md text-primary">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Pre-emptive gap identification
                  </li>
                  <li className="flex items-center gap-sm font-label-md text-label-md text-primary">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Biometric-sync learning pace (Optional)
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full h-80 rounded-xl overflow-hidden relative">
                <img
                  alt="Abstract visualization of neural networks"
                  className="w-full h-full object-cover"
                  data-alt="A macro shot of a complex, three-dimensional neural network mesh glowing with soft periwinkle and deep slate blue light. The background is a clean, warm cream color creating a high-end light mode aesthetic. Thousands of tiny data points are connected by translucent threads, symbolizing the intricate path of personalized learning and cognitive connections in a modern, professional AI context."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS6qkKwCNLaSMBSlxkXWO1elbYQmnjVgG6NmWEHkQ1atC2kiv4n_Nzd8Pm-dFA7UkD4gAQ-Kj0xex8iL2Ls4wZGG9ybnVu3WCCOaFXhbtNuT2hxpYOhgbRsypGruGFvIsETTZEJ4wIJbtkoEKkmezdmVfCPH_519g1GhWEkJb50yYB6S64-SRJI-PaWbp1J_v9Z4XL-dOFfCq3gx4Ele3CZOo7PJ7tHWVSWzcbqq2jcRDZ7oCuVHKx7QL6ViU4ev0oRKGtcHzKraE"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="max-w-4xl mx-auto px-margin mt-32 text-center bg-white rounded-2xl p-xl shadow-xl border border-outline-variant/10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-md">Ready to upgrade your intellect?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
              Join 50,000+ lifelong learners leveraging Cognitive Flow to master the future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-md">
              <button className="accent-button text-white font-label-md text-label-md px-xl py-md rounded-lg">Get Started Free</button>
              <button className="font-label-md text-label-md text-primary border border-primary/20 px-xl py-md rounded-lg hover:bg-primary/5 transition-colors">Book a Demo</button>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="w-full py-xl bg-surface dark:bg-inverse-surface border-t border-outline-variant/30 mt-32">
          <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
            <div className="flex flex-col gap-xs items-center md:items-start">
              <div className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow AI</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Cognitive Flow AI. All rights reserved.</p>
            </div>
            <div className="flex gap-lg">
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">
                Privacy Policy
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">
                Terms of Service
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">
                Cookie Policy
              </a>
              <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Methodology
