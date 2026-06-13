import React, { useEffect } from 'react'
import Sidebar from './dashboard/Sidebar'
import AIHeader from './ai-tutor/AIHeader'
import AIChat from './ai-tutor/AIChat'
import AINotifications from './ai-tutor/AINotifications'

const AiTutor = () => {
     useEffect(() => {
         window.scrollTo({
          top:0,
          left:0,
          behavior:'smooth'
        })
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) entry.target.classList.add('visible')
            })
          },
          { threshold: 0.15 }
        )
    
        document.querySelectorAll('.fade-in-up').forEach((element) => observer.observe(element))
       
        return () => observer.disconnect()
      }, [])
  return (
<>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>AI Tutor | Cognitive Flow</title>
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&family=Geist:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  {/* Material Symbols */}
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  {/* Tailwind CSS */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            background-color: #FFF8DE; /* Explicitly requested background */\n            color: #151c29;\n            overflow-x: hidden;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(183, 189, 247, 0.15);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(87, 106, 143, 0.1);\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #c5c6cf;\n            border-radius: 10px;\n        }\n        .shadow-soft {\n            box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);\n        }\n        .ai-border-gradient {\n            border: 1px solid transparent;\n            background: linear-gradient(white, white) padding-box,\n                        linear-gradient(to right, #576A8F, #B7BDF7) border-box;\n        }\n    "
    }}
  />
  {/* Layout Wrapper */}
  <div className="flex h-screen overflow-hidden">
    <Sidebar/>
    <main className="ml-64 flex-1 flex flex-col relative bg-brand-warm-cream">
      <AIHeader/>
      <AIChat/>
    </main>
  </div>
  <AINotifications/>
</>
  )
}

export default AiTutor