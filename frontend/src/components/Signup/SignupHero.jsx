import heroVideo from '../../assets/bf781b34d1df402483087c3c675225d1.webm'

function SignupHero() {
  return (
    <div className="signup-hero hidden md:flex w-1/2 min-h-screen items-center justify-center px-6 py-10 relative overflow-hidden">
      
        <video
          autoPlay
          className="hero-video rounded-3xl  inset-0 h-3/5 w-7xl object-contain object-center"
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
    

      <div className="absolute bottom-10 left-10 right-10 z-20 rounded-2xl border border-white/30 bg-white/70 p-6 backdrop-blur-md shadow-[0_12px_34px_rgba(21,43,92,0.12)]">
        <h2 className="font-headline-md text-headline-md text-primary-container mb-sm">
          Accelerate Your Learning
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Join thousands of professionals using Cognitive Flow to master complex
          subjects through AI-guided, personalized learning paths.
        </p>
      </div>
    </div>
  )
}

export default SignupHero
