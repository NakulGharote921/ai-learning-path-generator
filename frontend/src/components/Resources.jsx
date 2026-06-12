import React from 'react'

function Resources() {
  return (
    <div>
      <div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Resources Hub | Cognitive Flow</title>
  {/* Material Symbols */}
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600;700&family=Inter:wght@400;500&family=Geist:wght@500;600&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
  {/* Tailwind CSS */}
  <style dangerouslySetInnerHTML={{__html: "\n        body {\n            background-color: #f9f9ff;\n            color: #151c29;\n            font-family: 'Inter', sans-serif;\n            overflow-x: hidden;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .warm-tech-card {\n            background: rgba(183, 189, 247, 0.15);\n            backdrop-filter: blur(8px);\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        .warm-tech-card:hover {\n            box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);\n            transform: translateY(-4px);\n            border: 1px solid rgba(63, 82, 117, 0.1);\n        }\n        .ai-gradient-border {\n            position: relative;\n            background: #fff;\n            background-clip: padding-box;\n            border: 1px solid transparent;\n        }\n        .ai-gradient-border::before {\n            content: '';\n            position: absolute;\n            top: 0; right: 0; bottom: 0; left: 0;\n            z-index: -1;\n            margin: -1px;\n            border-radius: inherit;\n            background: linear-gradient(135deg, #576A8F, #B7BDF7);\n        }\n        .search-focus:focus-within {\n            box-shadow: 0 0 0 2px #3f5275;\n        }\n        .glass-nav {\n            background: rgba(249, 249, 255, 0.8);\n            backdrop-filter: blur(12px);\n        }\n    " }} />
  {/* TopNavBar */}
  <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm">
    <div className="flex justify-between items-center px-margin max-w-max_width mx-auto h-xl">
      <div className="flex items-center gap-md">
        <span className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow</span>
        <div className="hidden md:flex gap-md items-center">
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Features</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Methodology</a>
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Pricing</a>
          <a className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1" href="#">Resources</a>
        </div>
      </div>
      <div className="flex items-center gap-sm">
        <button className="hidden md:block px-md py-sm font-label-md text-label-md text-on-surface-variant hover:bg-primary/5 transition-colors rounded-lg">Log In</button>
        <button className="bg-primary text-on-primary px-md py-sm rounded-lg font-label-md text-label-md scale-95 active:scale-90 transition-transform">Get Started</button>
      </div>
    </div>
  </nav>
  {/* Hero / Search Section */}
  <header className="pt-32 pb-xl px-margin">
    <div className="max-w-max_width mx-auto text-center">
      <h1 className="font-headline-xl text-headline-xl text-primary mb-md">Knowledge Commons</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
        Explore the latest research, frameworks, and community stories at the intersection of Artificial Intelligence and Cognitive Science.
      </p>
      <div className="max-w-2xl mx-auto relative group">
        <div className="flex items-center bg-surface-container-low rounded-xl border border-outline-variant/30 p-xs search-focus transition-all duration-300">
          <span className="material-symbols-outlined ml-md text-on-surface-variant">search</span>
          <input className="w-full bg-transparent border-none focus:ring-0 py-md px-sm font-body-md placeholder:text-outline" placeholder="Search whitepapers, cases, or guides..." type="text" />
          <button className="bg-[#FF7444] text-white px-lg py-sm rounded-lg font-label-md text-label-md mr-xs hover:opacity-90 transition-opacity">Search</button>
        </div>
        <div className="mt-md flex flex-wrap justify-center gap-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Popular:</span>
          <a className="font-label-sm text-label-sm px-sm py-xs bg-surface-container rounded-full text-primary hover:bg-primary/10 transition-colors" href="#">Neural Plasticity</a>
          <a className="font-label-sm text-label-sm px-sm py-xs bg-surface-container rounded-full text-primary hover:bg-primary/10 transition-colors" href="#">AI Ethics</a>
          <a className="font-label-sm text-label-sm px-sm py-xs bg-surface-container rounded-full text-primary hover:bg-primary/10 transition-colors" href="#">Case Studies</a>
        </div>
      </div>
    </div>
  </header>
  {/* Main Content: Bento Grid */}
  <main className="max-w-max_width mx-auto px-margin pb-xl">
    {/* Category Filters */}
    <div className="flex items-center justify-between mb-xl border-b border-outline-variant/20 pb-md overflow-x-auto gap-md">
      <div className="flex gap-md whitespace-nowrap">
        <button className="font-label-md text-label-md text-primary border-b-2 border-primary pb-md">All Resources</button>
        <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary pb-md">Whitepapers</button>
        <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary pb-md">Case Studies</button>
        <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary pb-md">Collections</button>
        <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary pb-md">Blog</button>
      </div>
      <div className="hidden md:flex items-center gap-sm text-on-surface-variant">
        <span className="font-label-sm text-label-sm">Sort by:</span>
        <select className="bg-transparent border-none text-label-sm focus:ring-0 cursor-pointer">
          <option>Latest</option>
          <option>Most Read</option>
          <option>Featured</option>
        </select>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Featured Blog Post (Large) */}
      <div className="md:col-span-8 group overflow-hidden rounded-xl warm-tech-card relative">
        <div className="aspect-[16/9] overflow-hidden">
          <img alt="Featured Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A sophisticated digital rendering of a human brain silhouette interconnected with glowing fiber-optic threads in shades of deep periwinkle and soft amber. The lighting is ethereal and focused, set against a dark, minimalist laboratory background to evoke a sense of high-tech cognitive research. The overall aesthetic is clean, professional, and forward-looking, perfectly matching a premium AI educational platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-sk6rsJGureJgxK4UQVK-P6NGkv2T4-G2Pak6sqF68zXxBqzJRh2GXPCIGCz2Ok0tt0Rc6JRlW5JizJwAQrBChH2ig9bnJocal2NXog3F61fpCJFHM5uTzS06WAEC1-6rgOKzvB2NErY74zqWDQCC3_VxlrvgaXqMZbw6oMOE6iStDjNmXmiP4c8Vc-pJR7BrF_4EbMZMGBbPlWinWVorf-Lcm8gy6ssEIXSDVagPd9unLlf3AnlQ_8yslZtaASvoTQmFxwbOMw" />
        </div>
        <div className="p-lg">
          <div className="flex items-center gap-sm mb-base">
            <span className="px-sm py-xs bg-[#FF7444]/10 text-[#FF7444] rounded-full font-label-sm text-label-sm">Featured Blog</span>
            <span className="text-on-surface-variant font-label-sm text-label-sm">12 Min Read</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-base group-hover:text-secondary transition-colors">The Future of Synaptic Learning: How LLMs Mimic Human Retention</h2>
          <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Recent breakthroughs in transformer architecture are bridging the gap between artificial weights and biological synapses. Discover how these patterns are revolutionizing the way we design educational tools.</p>
        </div>
      </div>
      {/* Whitepaper Card (Tall) */}
      <div className="md:col-span-4 warm-tech-card rounded-xl p-lg flex flex-col justify-between border border-primary/5">
        <div>
          <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-md">
            <span className="material-symbols-outlined text-on-primary-container">description</span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Whitepaper 2024</span>
          <h3 className="font-headline-md text-headline-md text-primary mt-xs mb-sm">AI-Driven Cognitive Loads in Remote Learning</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">A comprehensive 45-page analysis on optimizing student focus during deep-work sessions using predictive AI models.</p>
        </div>
        <button className="mt-xl flex items-center gap-sm text-primary font-label-md text-label-md hover:translate-x-1 transition-transform">
          Download PDF <span className="material-symbols-outlined text-sm">download</span>
        </button>
      </div>
      {/* AI Highlight Card (Bento Style) */}
      <div className="md:col-span-4 ai-gradient-border rounded-xl p-lg flex flex-col justify-center text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-sm" data-weight="fill">smart_toy</span>
        <h4 className="font-label-md text-label-md text-primary uppercase tracking-widest mb-xs">AI Recommendation</h4>
        <p className="font-body-md text-body-md text-on-surface italic">"Based on global learning trends, this week we recommend exploring 'Neuro-Symbolic Frameworks' for more structured knowledge synthesis."</p>
      </div>
      {/* Case Study (Image + Overlay) */}
      <div className="md:col-span-4 group relative overflow-hidden rounded-xl h-64">
        <img alt="Case Study" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A candid, high-quality photograph of a diverse group of university students collaborating around a sleek, modern table in a brightly lit, glass-walled library. They are interacting with futuristic digital interfaces on their laptops that show complex data visualizations. The lighting is warm and natural, creating a mood of collaborative innovation and focused academic achievement in a modern light-mode environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChoosJACq5_NHLi3XM0j4kLUmTWpEaQHN93Ld-juaMiKEceNSlKImVjrC-U6g8sN88pYGxQ07aT_7p_exxiwJohy8wapMkVAPO_fiCBokCcWPgmRtqB7zGBDSDINGBAsvcVN0WtVcmn_gPpqhcO35c7iDBR0a7JXMLFwTLv_0Ih0Qqqn9W2e8Cezdn13XThkZAc6DdJ0-hcM4QLcnHqNasON7UT3J7dqWeGl6dO70DnnqZV4Q4y64BW4ZDryEtnIqqRQbdOdih-yk" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <div className="absolute bottom-0 p-md text-white">
          <span className="font-label-sm text-label-sm bg-white/20 backdrop-blur-md px-sm py-xs rounded-full">Case Study</span>
          <h3 className="font-headline-md text-headline-md mt-sm">Stanford Neuro-Lab Integration</h3>
        </div>
      </div>
      {/* Resource Collection (List style in bento) */}
      <div className="md:col-span-4 warm-tech-card rounded-xl p-lg">
        <h3 className="font-headline-md text-headline-md text-primary mb-md">Curated Collections</h3>
        <ul className="space-y-sm">
          <li className="group flex items-center justify-between p-sm hover:bg-white/50 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">folder_open</span>
              <span className="font-label-md text-label-md">Learning Fundamentals</span>
            </div>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </li>
          <li className="group flex items-center justify-between p-sm hover:bg-white/50 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">folder_open</span>
              <span className="font-label-md text-label-md">AI Model Ethics</span>
            </div>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </li>
          <li className="group flex items-center justify-between p-sm hover:bg-white/50 rounded-lg transition-colors cursor-pointer">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">folder_open</span>
              <span className="font-label-md text-label-md">Prompt Engineering for Educators</span>
            </div>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </li>
        </ul>
      </div>
      {/* Blog Row (Smaller Cards) */}
      <div className="md:col-span-4 warm-tech-card rounded-xl overflow-hidden group">
        <img alt="Blog" className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity" data-alt="A close-up shot of a high-tech computer circuit board with glowing neon pathways in soft periwinkle and deep blue. The lighting is dramatic, highlighting the intricate architecture of the hardware. The aesthetic is clean and futuristic, representing the core of AI technology in a sophisticated, professional manner for an education-focused audience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfDTUL08CXlGuxxbaYjKGKQO6Vm4gRdFWHTuwzdCyk1HezKhcCIXY6Dqictoc8OZGIM4e52ChSLB6SXal0Q1FIiugQrEyTCW1IfX3SgPuzCL3AduqxFm7pe-RBhqpt7g5d2IsyuPDGj1MphWkGRa2zxw-79xWtR6g_WrjJGorTeheqCKB5_TFiWol2MMB0rPZy2uNc_3pFG_Chghsc00tRQ30-9ihZMZEQHPrKUS1RJo3tToUClkAw29erX1guLMcJijKPrWN6Xo8" />
        <div className="p-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant">July 14, 2024</span>
          <h4 className="font-headline-md text-headline-md text-primary mt-xs">Hardware vs Software: The AI Efficiency Race</h4>
        </div>
      </div>
      <div className="md:col-span-4 warm-tech-card rounded-xl overflow-hidden group">
        <img alt="Blog" className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity" data-alt="A professional scientist working in a clean, modern laboratory with advanced digital microscopes and holographic data screens. The room is filled with soft, cool-toned lighting that emphasizes a clinical yet technologically advanced mood. The scene conveys precision, deep research, and the future of science-based learning within an AI-enhanced ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NcMsFcaMUeIf2qa_RfI0sAJrD8gnMBks2lKFjpUZ6ngAjdY_Et4hx34ZHljcEq-GybR8S6L44Yqqcalut8szxGzvrG-V-KTYyW1-TH80ehYKPIWYaeIB5skVuIVdiu4RZwSwlkhwPW0WBwtVIa3E68hzE0qZRSAMUByiLxmVj3ha78jjUE7eh2gSB0ufT07AzXho-Qx7zRFC-dRicJrEMh9aBR29KtXVOeF2RsA4RPXNpg4XS29PxmKdfsmhsUvxApimmI0qfjE" />
        <div className="p-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant">July 08, 2024</span>
          <h4 className="font-headline-md text-headline-md text-primary mt-xs">How Data Privacy is Shaping Education</h4>
        </div>
      </div>
      <div className="md:col-span-4 warm-tech-card rounded-xl overflow-hidden group">
        <img alt="Blog" className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity" data-alt="A minimalist overhead shot of a workspace featuring a sleek laptop, a high-quality notebook, and a pair of designer glasses on a warm cream surface. The composition is clean, airy, and organized, lit by soft natural light from a window. The style is productive and calm, reflecting the personal development and 'warm tech' brand identity of a premium educational hub." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCShH6-iNEfNwsJFYFViqFB8mQtYulh61ye5Gocj5UF51HO5_FmSC0I4ppDThOPpayPpQMEmFURuWSBNH9dKdoChGih4djYJjtRtTZKiZyWCAq_KUUJJS5TdzarxXqyBpa-drWcHm_lGZto5W3lsmF2eX1D7pgGI7uIbxCQ7SkDKDsN7A3AVL4j7E9igpBXl6OrhBcFyVOP7B0p3iMulzSRZD1uTIbr8Q7KzFMO6Oy78CZDwpYONR7SGDFxD65m1cCpbiQyE1eea5g" />
        <div className="p-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant">June 29, 2024</span>
          <h4 className="font-headline-md text-headline-md text-primary mt-xs">5 Frameworks for Better Focus</h4>
        </div>
      </div>
    </div>
    {/* Newsletter Section */}
    <section className="mt-xl bg-primary text-on-primary rounded-3xl p-xl overflow-hidden relative">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-xl">
        <div className="max-w-xl">
          <h2 className="font-headline-xl text-headline-xl mb-md">Stay ahead of the curve.</h2>
          <p className="font-body-lg text-body-lg opacity-80">Join 20,000+ researchers and students receiving our bi-weekly digest on AI and human cognition.</p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-sm">
          <input className="bg-white/10 border border-white/20 rounded-xl px-lg py-md text-on-primary placeholder:text-white/40 focus:ring-2 focus:ring-white/30 min-w-[300px]" placeholder="Enter your email" type="email" />
          <button className="bg-[#FF7444] text-white px-lg py-md rounded-xl font-label-md text-label-md hover:scale-105 transition-transform shadow-lg">Subscribe</button>
        </div>
      </div>
      {/* Subtle background circle */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  </main>
  {/* Footer */}
  <footer className="w-full py-xl bg-surface border-t border-outline-variant/30">
    <div className="max-w-max_width mx-auto px-margin flex flex-col md:flex-row justify-between items-center gap-md">
      <div className="flex flex-col gap-sm">
        <span className="font-headline-md text-headline-md font-bold text-primary">Cognitive Flow</span>
        <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Cognitive Flow AI. All rights reserved.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-md">
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Privacy Policy</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Terms of Service</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Cookie Policy</a>
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity" href="#">Contact Us</a>
      </div>
      <div className="flex gap-md">
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">share</span>
        </a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined">public</span>
        </a>
      </div>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Resources
