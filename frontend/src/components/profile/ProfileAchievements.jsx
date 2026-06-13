import React from 'react'

const badges = [
  {
    alt: 'Python Pioneer Badge',
    title: 'Python Pioneer',
    subtitle: 'Completed Advanced Path',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArgMJMopi65vo8TLC1A-QrgTRy-MPboMWgKIFHs7imAwVuJJk9ZBvagM4_-um9j8uHyVC_-fCCyHtc919l4sadYIxCYYC4IaYU6LAPZUAsC1FWHtch_7suU_IeDjcvQ_hsJkFrORhXbRS5DZ9BzqmUMraT3iV7mZ6KEyOPyy5j-P_SZUW5aYwpytXMZ-rZO8r9OujfteIcCT269v227_Cvl-ePFWkZKUwxcdXvPSOk5OLMq3y_YsVu8ywVSqvqWN7LmVjAoPtj9zs',
  },
  {
    alt: 'ML Master Badge',
    title: 'ML Master',
    subtitle: 'Top 5% in Assessments',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuzQKkP7dWyOA6Dq9_H6wAeC-D7ALHwEJlI-CZDBhDKMZ2Cp6UgUB8xji3uz04LjlEKJ27Pv3rx3EL-3N3ISm3CisLid7ZMgC2Yu1K8dZN7epuTB2y_SN4OAN11ooZgmKfnwITnwWb_3isnywAy8JHUd4lkvoYbabG13a57GMWRjpfmCZ75s7PJOq63NCFli-wiQH53sGXFBtgDsYpjnkPikwkM5cV410HaycY5unwOyDT6aEKUUmFQfzOEqrWRre_MqiJqujI6I4',
  },
  {
    alt: 'Code Ninja Badge',
    title: 'Code Ninja',
    subtitle: 'Flawless Syntax Streak',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChP2wdsvMmKGuRO1Iv_nUe2n2c6WuvAv_ccI2i5lz0z_VRHtvBp-ZA1mDvAgQReho5BXMEZLZtjPBA5t_-JLGZFv3IK_i_ab37DgoSbLZJQXDjmU-qSqPAKn3pk793xQC3vVAyh_GAXUBAVIJFZccpvdgQYP62qrGKQXH8zmp9sZTkabEZZ7PC4IDAskvE2ZrFEJeGQrjZo7-4YXe7zj2vC6LMtjUk4wHZckT30dSgUul78ZXw77h-z8SWzjUydzHvhp9-U8fAVQY',
  },
]

function ProfileAchievements() {
  return (
    <section className="mb-xl">
      <div className="flex items-center justify-between mb-md">
        <h3 className="font-headline-md text-headline-md slate-blue-text flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            military_tech
          </span>
          Achievement Shelf
        </h3>
        <a
          className="font-label-sm text-label-sm text-primary hover:underline"
          href="#"
        >
          View All
        </a>
      </div>
      <div className="flex gap-gutter overflow-x-auto hide-scrollbar pb-4 snap-x">
        {badges.map(({ alt, title, subtitle, src }) => (
          <div
            key={title}
            className="snap-start shrink-0 w-48 glass-card rounded-[24px] p-6 border border-outline-variant/20 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              alt={alt}
              className="w-16 h-16 mb-4 object-contain"
              src={src}
            />
            <h4 className="font-label-md text-label-md font-bold text-on-surface mb-1">
              {title}
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
              {subtitle}
            </p>
          </div>
        ))}
        <div className="snap-start shrink-0 w-48 rounded-[24px] p-6 border-2 border-dashed border-outline-variant/50 flex flex-col items-center justify-center text-center opacity-70">
          <span className="material-symbols-outlined text-4xl text-outline mb-2">
            lock
          </span>
          <h4 className="font-label-md text-label-md text-on-surface-variant">
            Data Viz Expert
          </h4>
          <p className="font-body-sm text-body-sm text-outline text-xs mt-1">
            In Progress
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileAchievements
