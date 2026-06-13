import FadeInSection from "../home/FadeInSection"

function SupportCards() {
  return (
    <FadeInSection className="px-margin py-lg max-w-max_width mx-auto">
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
          <img
            alt="AI Interface"
            className="w-full md:w-48 h-48 object-cover rounded-lg"
            data-alt="A sophisticated 3D visualization of a neural network glowing with soft periwinkle and deep blue light. The aesthetic is clean and futuristic, representing high-end artificial intelligence. The image is brightly lit with a high-key light mode feel, emphasizing clarity, precision, and technological warmth."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNt1aLpKuu7T9W-gqqKvXeH-3muJdsEt3GaWTiMOgjx9xfqMbBV0A1BmjOmvMHcfdj1fMg4teFjDmCa684rm3acXDuei0-fHgk44kyxrgVVnUpF4Qilw5nuxB0ApoBkSG6gKW9wbSY-sPNnNn-vmaL-1CpN6IlZaQx0w-ohWrt0VWBDpW2Tem6SbLnaO3BzxCijsIWOKMjoPQrzf7EdtKldjLUZiQqDCG8dhi0hWcb93ddPv3sR9fzOcWiOw1CHQR9qMms2Qp7DnQ"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-headline-md text-headline-md text-primary mb-sm">AI Tutor Help</h3>
            <p className="text-on-surface-variant font-body-md mb-md">Troubleshoot AI interactions, voice commands, and personalized feedback loops.</p>
            <span className="text-primary font-label-md flex items-center gap-xs">
              24/7 Support Docs <span className="material-symbols-outlined">arrow_outward</span>
            </span>
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
    </FadeInSection>
  )
}

export default SupportCards
