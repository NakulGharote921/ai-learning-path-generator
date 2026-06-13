import React from 'react'

function SettingBillingCard() {
  return (
    <div className="settings-card rounded-2xl p-lg bg-gradient-to-br from-white to-periwinkle-accent/20">
      <div className="flex justify-between items-start mb-md">
        <div>
          <h3 className="font-headline-md text-headline-md text-slate-blue">
            Subscription
          </h3>
          <p className="text-on-surface-variant font-body-sm">
            Current Plan: <span className="text-primary font-bold">Pro</span>
          </p>
        </div>
        <div className="bg-primary-container text-white px-3 py-1 rounded-full text-xs font-bold">
          ACTIVE
        </div>
      </div>
      <div className="space-y-sm mb-lg">
        <div className="flex justify-between text-body-sm">
          <span className="text-on-surface-variant">Next Billing</span>
          <span className="font-bold">Oct 12, 2024</span>
        </div>
        <div className="flex justify-between text-body-sm">
          <span className="text-on-surface-variant">Amount</span>
          <span className="font-bold">$19.99 / mo</span>
        </div>
      </div>
      <div className="space-y-base">
        <a
          className="block w-full text-center border border-slate-blue/30 text-slate-blue py-sm rounded-xl font-bold hover:bg-slate-blue/5 transition-colors"
          href="#"
        >
          Billing History
        </a>
        <button className="w-full text-center text-on-surface-variant/60 font-label-sm hover:text-error transition-colors pt-2">
          Cancel Subscription
        </button>
      </div>
    </div>
  )
}

export default SettingBillingCard
