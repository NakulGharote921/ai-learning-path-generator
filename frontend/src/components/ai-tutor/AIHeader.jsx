import React from 'react'
import FadeInSection from '../home/FadeInSection'

const AIHeader = () => {
  return (
<FadeInSection className="h-20 flex items-center justify-between px-xl border-b border-outline-variant/10 bg-brand-warm-cream/80 backdrop-blur-md sticky top-0 z-30">
        <div className="flex items-center gap-sm">
          <div className="p-2 bg-primary-container/10 rounded-lg">
            <span className="material-symbols-outlined text-brand-primary">
              auto_awesome
            </span>
          </div>
          <div>
            <h2 className="font-headline-sm text-lg font-bold text-brand-primary">
              Module: Advanced Data Structures
            </h2>
            <p className="text-xs text-on-surface-variant">
              Focus: Graph Theory &amp; Optimization
            </p>
          </div>
        </div>
        <div className="flex items-center gap-md">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-brand-warm-cream overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="Portrait of a young male software developer with glasses, smiling softly, in a bright modern home office with warm lighting and a soft focus background."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHNYbMWyWiMgQrCTPu1jkWvDZGy3VJjZfjpgUGoYFWUi-vOuZqtS6eq8qA4gRVI39NvsR8A9hddt1ABtbOUX1uFr8irNJV4fwToYYYfncHbUbxU_aV45vPT78DUau8ekxKQZiPPaZh_p9PII-F4258kGBK63I6GfOS9AM3jbs2f4mjKl6jnWSgiEeimuWMVDjx28rn4ZSCGitH0J4TRUZmOxhbTnhIU6dLQyzWhMzEQmMZ0XKyX-lqbxXWtw-12Jh4C9Gi0aae_Jw"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-brand-warm-cream bg-secondary flex items-center justify-center text-[10px] text-white font-bold">
              +4
            </div>
          </div>
          <button className="bg-brand-primary text-white px-5 py-2 rounded-xl text-label-md font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all shadow-soft">
            <span className="material-symbols-outlined text-sm">share</span>
            Share Session
          </button>
        </div>
      </FadeInSection>
        )
}

export default AIHeader