import React from 'react'

const stats = [
  { icon: 'schedule', value: '142', label: 'Learning Hours' },
  { icon: 'task_alt', value: '12', label: 'Courses Completed' },
  { icon: 'local_fire_department', value: '14 Days', label: 'Current Streak', accent: true },
]

function ProfileStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
      {stats.map(({ icon, value, label, accent }) => (
        <div
          key={label}
          className={`glass-card rounded-[24px] p-lg border border-outline-variant/20 shadow-[0_10px_30px_rgba(87,106,143,0.08)] flex flex-col items-center justify-center text-center hover:shadow-[0_15px_35px_rgba(87,106,143,0.12)] hover:border-primary/10 transition-all duration-300 relative overflow-hidden ${
            accent ? '' : ''
          }`}
        >
          {accent ? (
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7444] opacity-10 rounded-full blur-2xl -mr-10 -mt-10" />
          ) : null}
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
              accent ? 'bg-[#FF7444]/10 text-[#FF7444]' : 'bg-primary-container/10 text-primary'
            }`}
          >
            <span className="material-symbols-outlined text-3xl">{icon}</span>
          </div>
          <h3 className="font-headline-lg text-headline-lg slate-blue-text">
            {value}
          </h3>
          <p className="font-label-md text-label-md text-on-surface-variant mt-2 uppercase tracking-wider">
            {label}
          </p>
        </div>
      ))}
    </section>
  )
}

export default ProfileStats
