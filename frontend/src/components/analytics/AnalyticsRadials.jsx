import React from 'react'

function AnalyticsRadials() {
  return (
    <div className="flex flex-col gap-md md:gap-lg">
      <div className="glass-card rounded-xl p-md flex flex-col items-center justify-center flex-1">
        <h4 className="font-label-md text-label-md text-on-surface-variant mb-md self-start w-full">
          Module Completion
        </h4>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx={50} cy={50} fill="none" r={40} stroke="#e8eeff" strokeWidth={12} />
            <circle
              cx={50}
              cy={50}
              fill="none"
              r={40}
              stroke="#576a8f"
              strokeDasharray="251.2"
              strokeDashoffset="62.8"
              strokeLinecap="round"
              strokeWidth={12}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-headline-lg text-headline-lg font-bold text-primary">
              75%
            </span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-outline mt-sm text-center">
          3 of 4 modules complete
        </p>
      </div>

      <div className="glass-card rounded-xl p-md flex flex-col items-center justify-center flex-1">
        <h4 className="font-label-md text-label-md text-on-surface-variant mb-md self-start w-full">
          Quiz Accuracy
        </h4>
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx={50} cy={50} fill="none" r={40} stroke="#e8eeff" strokeWidth={12} />
            <circle
              cx={50}
              cy={50}
              fill="none"
              r={40}
              stroke="#bdc3fd"
              strokeDasharray="251.2"
              strokeDashoffset="25.12"
              strokeLinecap="round"
              strokeWidth={12}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-headline-lg text-headline-lg font-bold text-secondary">
              90%
            </span>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-outline mt-sm text-center">
          Excellent retention rate
        </p>
      </div>
    </div>
  )
}

export default AnalyticsRadials
