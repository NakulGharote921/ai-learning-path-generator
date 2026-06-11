import React from 'react'

function SettingFooter() {
  return (
    <footer className="ml-64 w-[calc(100%-16rem)] py-xl bg-surface border-t border-outline-variant/30 mt-xl">
      <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex flex-col gap-xs">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Cognitive Flow
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            © 2024 Cognitive Flow AI. All rights reserved.
          </p>
        </div>
        <div className="flex gap-md">
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Cookie Policy
          </a>
          <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SettingFooter
