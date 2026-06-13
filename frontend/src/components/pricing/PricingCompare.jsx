import React from 'react'
import FadeInSection from '../home/FadeInSection'

const PricingCompare = () => {
  return (
<FadeInSection className="py-xl px-margin max-w-max_width mx-auto">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-xl text-center">
        Compare features
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant/30">
              <th className="py-md px-sm font-label-md text-label-md text-on-surface-variant">
                Feature
              </th>
              <th className="py-md px-sm font-label-md text-label-md text-primary">
                Starter
              </th>
              <th className="py-md px-sm font-label-md text-label-md text-accent">
                Pro
              </th>
              <th className="py-md px-sm font-label-md text-label-md text-primary">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody className="font-body-md text-body-md">
            <tr className="border-b border-outline-variant/10">
              <td className="py-md px-sm text-on-surface">Daily Tokens</td>
              <td className="py-md px-sm text-on-surface-variant">500</td>
              <td className="py-md px-sm text-on-surface font-bold">
                Unlimited
              </td>
              <td className="py-md px-sm text-on-surface font-bold">
                Unlimited
              </td>
            </tr>
            <tr className="border-b border-outline-variant/10">
              <td className="py-md px-sm text-on-surface">AI Model Support</td>
              <td className="py-md px-sm text-on-surface-variant">Basic</td>
              <td className="py-md px-sm text-on-surface font-bold">
                Ultra-HD Reasoning
              </td>
              <td className="py-md px-sm text-on-surface font-bold">
                Custom/Fine-tuned
              </td>
            </tr>
            <tr className="border-b border-outline-variant/10">
              <td className="py-md px-sm text-on-surface">Export Formats</td>
              <td className="py-md px-sm text-on-surface-variant">PDF only</td>
              <td className="py-md px-sm text-on-surface font-bold">
                All (JSON, MD, CSV)
              </td>
              <td className="py-md px-sm text-on-surface font-bold">
                Custom API
              </td>
            </tr>
            <tr className="border-b border-outline-variant/10">
              <td className="py-md px-sm text-on-surface">API Access</td>
              <td className="py-md px-sm text-on-surface-variant">—</td>
              <td className="py-md px-sm text-on-surface font-bold">
                Standard
              </td>
              <td className="py-md px-sm text-on-surface font-bold">
                High-throughput
              </td>
            </tr>
            <tr className="border-b border-outline-variant/10">
              <td className="py-md px-sm text-on-surface">SOC2 Compliance</td>
              <td className="py-md px-sm text-on-surface-variant">—</td>
              <td className="py-md px-sm text-on-surface">—</td>
              <td className="py-md px-sm text-accent">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  check_circle
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </FadeInSection>  )
}

export default PricingCompare