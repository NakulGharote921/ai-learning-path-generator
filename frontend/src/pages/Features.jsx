import React, { useEffect } from 'react'
import FeaturesStyles from '../components/features/FeaturesStyles'
import FeaturesHero from '../components/features/FeaturesHero'
import FeatureGrid from '../components/features/FeatureGrid'
import FeaturesSecondary from '../components/features/FeaturesSecondary'
import FeaturesCTA from '../components/features/FeaturesCTA'
import FeaturesFooter from '../components/features/FeaturesFooter'
import FadeInSection from '../components/home/FadeInSection'
import TopNavBar from '../components/home/TopNavBar'

function Features() {
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
      <TopNavBar/>
      <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Features | Cognitive Flow AI</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500&family=Geist:wght@500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Hanken+Grotesk:wght@100..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <FeaturesStyles />
      </div>
      <main className="pt-32 pb-xl px-margin max-w-max_width mx-auto">
        <FeaturesHero />
        <FeatureGrid />
        <FeaturesSecondary />
        <FeaturesCTA />
      </main>
      <FeaturesFooter />
    </div>
  )
}

export default Features
