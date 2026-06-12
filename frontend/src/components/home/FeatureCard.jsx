function FeatureCard({ title, description, className, icon, chips = [] }) {
  const isDark = className.includes('bg-primary')

  return (
    <article
      className={`card-surface ${className} p-8 flex flex-col justify-between overflow-hidden relative`}
    >
      {!isDark ? (
        <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-secondary/20 rounded-full blur-[60px]" />
      ) : null}
      <div className="z-10 relative">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
            isDark ? 'bg-white/10 text-white' : 'bg-surface-container text-primary'
          }`}
        >
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className={`font-headline-md text-headline-md mb-3 ${isDark ? 'text-white' : 'text-primary'}`}>
          {title}
        </h3>
        <p className={`font-body-md text-body-md ${isDark ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
          {description}
        </p>
        {chips.length ? (
          <div className="flex flex-wrap gap-2 mt-6">
            {chips.map((chip) => (
              <span
                key={chip}
                className="font-label-sm text-label-sm px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm border border-white/10 text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default FeatureCard
