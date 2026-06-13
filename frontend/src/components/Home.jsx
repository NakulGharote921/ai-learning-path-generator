import { useEffect } from 'react'
import TopNavBar from './home/TopNavBar'
import HeroSection from './home/HeroSection'
import StatsSection from './home/StatsSection'
import FeaturesSection from './home/FeaturesSection'
import CallToActionSection from './home/CallToActionSection'
import SiteFooter from './home/SiteFooter'

function Home() {
  useEffect(() => {
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
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(183,189,247,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,116,68,0.18),_transparent_30%)]" />

      <TopNavBar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CallToActionSection />
      <SiteFooter />
    </main>
  )
}

export default Home
