import React from 'react'

const focusHours = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function FocusHoursChart() {
  return (
    <div className="lg:col-span-2 glass-card rounded-xl p-lg flex flex-col">
      <div className="flex justify-between items-start mb-lg">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">
            Focus Hours
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Time spent in deep learning over the past week.
          </p>
        </div>
        <div className="flex gap-sm items-center bg-surface-container rounded-full px-sm py-xs">
          <span className="w-2 h-2 rounded-full bg-primary-container" />
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            This Week
          </span>
        </div>
      </div>

      <div className="flex-1 w-full h-64 relative mt-auto">
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-label-sm font-label-sm text-outline-variant pr-xs text-right w-8">
          <span>4h</span>
          <span>3h</span>
          <span>2h</span>
          <span>1h</span>
          <span>0h</span>
        </div>

        <div className="absolute left-10 right-0 top-0 bottom-8 border-b border-l border-outline-variant/30">
          <div className="w-full h-1/4 border-t border-outline-variant/10" />
          <div className="w-full h-1/4 border-t border-outline-variant/10" />
          <div className="w-full h-1/4 border-t border-outline-variant/10" />
          <div className="w-full h-1/4 border-t border-outline-variant/10" />

          <svg
            className="w-full h-full absolute inset-0 overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M0,80 L16,50 L33,60 L50,20 L66,35 L83,10 L100,40 L100,100 L0,100 Z"
              fill="url(#blue-gradient)"
              opacity="0.3"
            />
            <polyline
              className="animated-line"
              fill="none"
              points="0,80 16,50 33,60 50,20 66,35 83,10 100,40"
              stroke="#576a8f"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
            />
            <circle cx={16} cy={50} fill="#ffffff" r={2} stroke="#576a8f" strokeWidth="1.5" />
            <circle cx={50} cy={20} fill="#ffffff" r={2} stroke="#576a8f" strokeWidth="1.5" />
            <circle cx={83} cy={10} fill="#ffffff" r={2} stroke="#576a8f" strokeWidth="1.5" />
            <defs>
              <linearGradient id="blue-gradient" x1={0} x2={0} y1={0} y2={1}>
                <stop offset="0%" stopColor="#576a8f" stopOpacity={1} />
                <stop offset="100%" stopColor="#576a8f" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute left-10 right-0 bottom-0 h-8 flex justify-between items-end text-label-sm font-label-sm text-outline-variant">
          {focusHours.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FocusHoursChart
