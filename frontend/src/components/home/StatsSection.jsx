import { stats } from './data'

function StatsSection() {
  return (
    <section className="py-xl border-y border-outline-variant/20 bg-white/70 backdrop-blur">
      <div className="max-w-max_width mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="py-4">
              <p className="font-headline-lg text-headline-lg text-primary font-bold mb-2">{stat.value}</p>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
