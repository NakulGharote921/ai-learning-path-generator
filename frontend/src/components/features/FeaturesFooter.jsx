import FadeInSection from "../home/FadeInSection"

function FeaturesFooter() {
  return (
    <FadeInSection>

    <footer className="w-full py-xl bg-surface border-t border-outline-variant/30">
      <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex flex-col items-center md:items-start gap-xs">
          <div className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Cognitive Flow AI. All rights reserved.</p>
        </div>
        <div className="flex gap-md">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">
            Terms of Service
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">
            Cookie Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary" href="#">
            Contact Us
          </a>
        </div>
        <div className="flex gap-sm">
          <a className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-[18px]" data-icon="language">
              language
            </span>
          </a>
          <a className="w-8 h-8 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-[18px]" data-icon="forum">
              forum
            </span>
          </a>
        </div>
      </div>
    </footer>
    </FadeInSection>
  )
}

export default FeaturesFooter
