import React from 'react'

function ProfileHeader() {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-xl gap-md">
      <div className="flex items-center gap-md">
        <div className="relative">
          <img
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-sm"
            data-alt="A high-quality, professional headshot of a young male professional named Alex. He has short dark hair, a subtle smile, and is wearing a crisp, modern navy blue shirt. The background is a clean, slightly warm off-white, perfectly complementing the Warm Cream platform aesthetic. The lighting is soft and studio-quality, conveying competence and approachability in a modern tech context."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh57RuBb78KL0EltHBGn80cFN-buHxOy9wFbP8yQ0Rz6dlGOWMSeHYh-Ircdq5FWuNtZn8o0GmQy5iTCtznij1qY23PtPVLTvQfwqidqDkUhpiftoq77CNAtzX77RMgFGrIBG_e1ufPaf7CHLIpw6J5zDjXfm-vYDQZhI9BLrPNcibpUlTIGCmNrPXqrIVTGmV1emCaQTo9UcjR4M__F3t7ahN2zmV1opyza-GplM73MFJYXeGg33zcn95-Q6xEnZRM49edjvMPM8"
          />
          <div className="absolute bottom-0 right-0 accent-bg text-on-primary font-label-sm text-label-sm px-2 py-1 rounded-full border-2 border-surface shadow-sm">
            Pro
          </div>
        </div>
        <div>
          <h2 className="font-headline-xl text-headline-xl slate-blue-text">
            Alex
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            Machine Learning Enthusiast
          </p>
        </div>
      </div>
      <button className="accent-bg text-on-primary font-label-md text-label-md px-6 py-3 rounded-xl shadow-[0_4px_14px_0_rgba(255,116,68,0.39)] hover:shadow-[0_6px_20px_rgba(255,116,68,0.23)] hover:bg-[#ff8559] transition-all duration-200 flex items-center gap-2">
        <span className="material-symbols-outlined text-sm">edit</span>
        Edit Profile
      </button>
    </header>
  )
}

export default ProfileHeader
