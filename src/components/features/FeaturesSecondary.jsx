import FadeInSection from "../home/FadeInSection"

function FeaturesSecondary() {
  return (
    <FadeInSection className="grid grid-cols-1 md:grid-cols-3 gap-xl py-xl border-t border-outline-variant/20">
      <div className="space-y-sm">
        <span className="material-symbols-outlined text-accent" data-icon="speed">
          speed
        </span>
        <h4 className="font-headline-md text-headline-md text-on-surface">Accelerated Pacing</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Our algorithms adjust the difficulty in real-time, keeping you in the 'Flow State' - the sweet spot between challenge and skill.
        </p>
      </div>
      <div className="space-y-sm">
        <span className="material-symbols-outlined text-accent" data-icon="group">
          group
        </span>
        <h4 className="font-headline-md text-headline-md text-on-surface">Collaborative Projects</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Apply your learning in real-world scenarios. Connect with peers at similar stages to build high-impact portfolio pieces.
        </p>
      </div>
      <div className="space-y-sm">
        <span className="material-symbols-outlined text-accent" data-icon="cloud_sync">
          cloud_sync
        </span>
        <h4 className="font-headline-md text-headline-md text-on-surface">Universal Sync</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Your progress is tied to your identity, not your device. Pick up exactly where you left off, whether on desktop, tablet, or mobile.
        </p>
      </div>
    </FadeInSection>
  )
}

export default FeaturesSecondary
