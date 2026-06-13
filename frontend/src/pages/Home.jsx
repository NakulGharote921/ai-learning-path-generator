import { useEffect } from 'react'
import TopNavBar from '../components/home/TopNavBar'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import CallToActionSection from '../components/home/CallToActionSection'
import SiteFooter from '../components/home/SiteFooter'

function Home() {
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
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,189,247,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,116,68,0.18),transparent_30%)]" />

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
