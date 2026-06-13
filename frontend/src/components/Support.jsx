import React, { useEffect } from 'react'
import Sidebar from './dashboard/Sidebar'
import SupportStyles from './support/SupportStyles'
import SupportHero from './support/SupportHero'
import SupportCards from './support/SupportCards'
import SupportFaq from './support/SupportFaq'
import SupportContact from './support/SupportContact'
import FadeInSection from './home/FadeInSection'

function Support() {
   useEffect(() => {
       window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
      })
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('visible')
          })
        },
        { threshold: 0.15 }
      )
  
      document.querySelectorAll('.fade-in-up').forEach((element) => observer.observe(element))
     
      return () => observer.disconnect()
    }, [])
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Support Center | Cognitive Flow</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400&family=Geist:wght@500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Hanken+Grotesk:wght@100..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <SupportStyles />
      </div>

      <Sidebar />

      <main className="main-content md:ml-64 min-h-screen">
        <SupportHero />
        <SupportCards />
        <SupportFaq />
        <SupportContact />
        <FadeInSection className="w-full py-xl bg-surface dark:bg-inverse-surface border-t border-outline-variant/30 dark:border-outline/20">
          <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
            <div>
              <h5 className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow</h5>
              <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Cognitive Flow AI. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-md justify-center">
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">
                Terms of Service
              </a>
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">
                Cookie Policy
              </a>
              <a className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm transition-colors" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </FadeInSection>
      </main>
    </div>
  )
}

export default Support
