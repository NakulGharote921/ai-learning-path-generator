import React from 'react'
import TopNavBar from './home/TopNavBar'
import FeaturesStyles from './features/FeaturesStyles'
import FeaturesHero from './features/FeaturesHero'
import FeatureGrid from './features/FeatureGrid'
import FeaturesSecondary from './features/FeaturesSecondary'
import FeaturesCTA from './features/FeaturesCTA'
import FeaturesFooter from './features/FeaturesFooter'

function Features() {
  return (
    <div>
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
      <TopNavBar />
      <main className="pt-[128px] pb-xl px-margin max-w-max_width mx-auto">
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
