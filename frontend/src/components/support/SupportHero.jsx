import FadeInSection from "../home/FadeInSection"

function SupportHero() {
  return (
    <FadeInSection className="hero-pattern pt-xl pb-lg px-margin">
      <div className="max-w-4xl mx-auto text-center space-y-md">
        <h2 className="font-headline-xl text-headline-xl text-primary">How can we help you today?</h2>
        <div className="relative max-w-2xl mx-auto group">
          <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
          <input
            className="w-full pl-xl pr-md py-lg rounded-full bg-white border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all shadow-lg shadow-primary/5 font-body-md"
            placeholder="Search for guides, FAQs, or troubleshooting..."
            type="text"
          />
          <button className="absolute right-xs top-1/2 -translate-y-1/2 bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors">
            Search
          </button>
        </div>
      </div>
    </FadeInSection>
  )
}

export default SupportHero
