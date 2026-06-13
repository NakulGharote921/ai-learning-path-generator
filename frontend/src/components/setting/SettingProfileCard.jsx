import React from 'react'

function SettingProfileCard() {
  return (
    <div className="settings-card rounded-2xl p-lg flex flex-col md:flex-row gap-lg items-start">
      <div className="relative group">
        <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-periwinkle-accent/30">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            data-alt="A professional headshot of a focused male student in his late 20s, with short dark hair and a warm, intelligent expression. He is wearing a minimalist dark blue sweater. The background is a soft-focus modern library with warm amber lighting and shelves of books, creating a sophisticated and academic atmosphere. The overall aesthetic is clean, high-key, and premium."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANwRoFHSe5s-Zf_bsXCDKVhjkjHnsxTda21Mzse3JuZLNYzVTXSNyUgvfaamlNZShjpeg10LAnGVZcdDsqIKQCsgFPXB-2v6TXahyQ4EsTzOxzTvKZcIscQirpwSeGZhSoSE6JIcb7vES1VcrK0xVxnNfnZIE7RzAKf3fIVXLKdzHzSMhiApumlQfJiT7sfOHPgFao1l2bMc46otkIcmyNT_Fe2PKjSPUN9mKI0aQ9vR8Q7bTEJJ9FJyrkgVbJ_f_wwaYFE3ydrwA"
          />
        </div>
        <button className="absolute -bottom-2 -right-2 bg-slate-blue text-white p-2 rounded-lg shadow-lg hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-sm" style={{ fontSize: '20px' }}>
            edit
          </span>
        </button>
      </div>
      <div className="flex-1 space-y-md w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <label className="font-label-sm text-label-sm text-slate-blue uppercase tracking-wider">
              Full Name
            </label>
            <input
              className="bg-white/50 border border-slate-blue/20 rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:outline-none font-body-md"
              type="text"
              defaultValue="Alexander Sterling"
            />
          </div>
          <div className="flex flex-col gap-xs">
            <label className="font-label-sm text-label-sm text-slate-blue uppercase tracking-wider">
              Email Address
            </label>
            <input
              className="bg-white/50 border border-slate-blue/20 rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:outline-none font-body-md"
              type="email"
              defaultValue="alexander.s@cognitiveflow.ai"
            />
          </div>
        </div>
        <div className="flex flex-col gap-xs">
          <label className="font-label-sm text-label-sm text-slate-blue uppercase tracking-wider">
            Bio
          </label>
          <textarea
            className="bg-white/50 border border-slate-blue/20 rounded-lg px-md py-sm focus:ring-2 focus:ring-primary focus:outline-none font-body-md resize-none"
            rows={3}
            defaultValue="Lifelong learner specializing in Machine Learning and cognitive neuroscience. Currently mastering advanced neural architectures with AI Tutor."
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-slate-blue text-on-primary px-lg py-sm rounded-xl font-bold hover:shadow-md active:scale-95 transition-all">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingProfileCard
