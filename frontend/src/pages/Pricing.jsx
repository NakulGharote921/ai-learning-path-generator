import React, { useEffect } from 'react'
import TopNavBar from '../components/home/TopNavBar'
import PricingHeader from '../components/pricing/PricingHeader'
import PricingCards from '../components/pricing/PricingCards'
import PricingCompare from '../components/pricing/PricingCompare'
import PricingFAQ from '../components/pricing/PricingFAQ'
import PricingCTA from '../components/pricing/PricingCTA'

const Pricing = () => {
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
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Pricing | Cognitive Flow</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500;600&family=Geist:wght@500;600&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            background-color: #FFF8DE;\n            color: #151c29;\n            font-family: 'Inter', sans-serif;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(87, 106, 143, 0.1);\n        }\n        .periwinkle-surface {\n            background-color: rgba(183, 189, 247, 0.15);\n        }\n        .shadow-soft {\n            shadow-color: rgba(87, 106, 143, 0.08);\n            box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);\n        }\n        .btn-pressable {\n            transition: transform 0.1s ease, box-shadow 0.1s ease;\n            box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);\n        }\n        .btn-pressable:active {\n            transform: translateY(2px);\n            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n    "
    }}
  />
  <TopNavBar/>
  <main>
    <PricingHeader/>
    <PricingCards/>
    <PricingCompare/>
    <PricingFAQ/>
    <PricingCTA/>
  </main>
  {/* Footer Navigation Shell */}
  <footer className="w-full py-xl bg-surface border-t border-outline-variant/30">
    <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
      <div className="flex flex-col gap-xs">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          Cognitive Flow
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          © 2024 Cognitive Flow AI. All rights reserved.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-lg">
        <a
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity"
          href="#"
        >
          Cookie Policy
        </a>
        <a
          className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity"
          href="#"
        >
          Contact Us
        </a>
      </div>
      <div className="flex gap-md">
        <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">
          public
        </span>
        <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">
          share
        </span>
      </div>
    </div>
  </footer>
</>
  )
}

export default Pricing