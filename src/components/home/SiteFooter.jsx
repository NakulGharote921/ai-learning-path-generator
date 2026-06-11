function SiteFooter() {
  return (
    <footer className="w-full py-xl bg-surface dark:bg-inverse-surface border-t border-outline-variant/30 dark:border-outline/20">
      <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed flex items-center gap-2">
          <span className="material-symbols-outlined text-accent" style={{ fontVariationSettings: '"FILL" 1' }}>
            auto_awesome
          </span>
          Cognitive Flow
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact Us'].map((item) => (
            <a
              key={item}
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary hover:opacity-80 transition-opacity"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="font-body-sm text-body-sm text-on-surface-variant">
          © 2024 Cognitive Flow AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
