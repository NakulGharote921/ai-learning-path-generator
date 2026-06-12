import React from 'react'

function Learning() {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Resource Library - Cognitive Flow</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700&family=Inter:wght@400;500;600&family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .icon-fill {\n            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
          }}
        />
        {/* Main Content Canvas */}
        <main className="flex-1 md:ml-64 px-margin py-xl max-w-max_width mx-auto w-full">
          {/* Header & Search */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface mb-xs">
                Library
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Explore curated learning materials tailored to your path.
              </p>
            </div>
            <div className="relative w-full md:w-96 group">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg pl-lg pr-xl py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow placeholder:text-on-surface-variant/70 shadow-sm"
                placeholder="Search resources..."
                type="text"
              />
              <div className="absolute right-sm top-1/2 -translate-y-1/2 flex items-center gap-1 bg-surface-container px-2 py-1 rounded border border-outline-variant/30">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Ctrl
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  K
                </span>
              </div>
            </div>
          </header>
          {/* Filters Section */}
          <section className="flex flex-col gap-sm mb-xl">
            <div className="flex items-center gap-md pb-xs border-b border-outline-variant/20 overflow-x-auto no-scrollbar">
              <span className="font-label-md text-label-md text-on-surface-variant shrink-0 w-24">
                Content Type:
              </span>
              <div className="flex gap-sm">
                <button className="px-sm py-xs rounded-full bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap transition-transform active:scale-95">
                  All
                </button>
                <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap active:scale-95">
                  Video
                </button>
                <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap active:scale-95">
                  Article
                </button>
                <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap active:scale-95">
                  Course
                </button>
              </div>
            </div>
            <div className="flex items-center gap-md overflow-x-auto no-scrollbar mt-xs">
              <span className="font-label-md text-label-md text-on-surface-variant shrink-0 w-24">
                Topics:
              </span>
              <div className="flex gap-sm">
                <button className="px-sm py-xs rounded-full bg-secondary-container/50 text-on-secondary-container font-label-md text-label-md border border-secondary-container hover:bg-secondary-container transition-colors whitespace-nowrap">
                  Frontend
                </button>
                <button className="px-sm py-xs rounded-full bg-secondary-container/50 text-on-secondary-container font-label-md text-label-md border border-secondary-container hover:bg-secondary-container transition-colors whitespace-nowrap">
                  Backend
                </button>
                <button className="px-sm py-xs rounded-full bg-primary-container/20 text-primary border border-primary-container/30 font-label-md text-label-md hover:bg-primary-container/40 transition-colors whitespace-nowrap">
                  AI &amp; ML
                </button>
                <button className="px-sm py-xs rounded-full bg-surface-container-lowest border border-outline-variant/50 text-on-surface-variant font-label-md text-label-md hover:bg-surface-variant transition-colors whitespace-nowrap">
                  Systems Design
                </button>
              </div>
            </div>
          </section>
          {/* Grid Layout (Notion-style minimal cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <article className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(87,106,143,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer relative">
              <div className="h-40 w-full bg-surface-container overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-variant opacity-50 mix-blend-multiply" />
                <img
                  alt="Code editor on screen"
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                  data-alt="A clean, modern workspace featuring a high-resolution computer monitor displaying colorful code in an IDE. The lighting is soft and natural, casting subtle shadows on a minimalist white desk. The overall color palette is cool and focused, dominated by deep slate blues, soft periwinkles, and pristine whites, creating a calm, tech-forward learning environment."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjRyQHnmexg0e8_Kjg3T3Yk60mk3xfDx35c1BBINRJyjEQ5B0pGYSMW9c_jBW64U-pypdrDgD7kMPw_6a_2wnBZZUuz77qFZg-LYvBAU38pls34tGPS9j6KXl--mvqbd-hc1auHpsCF3Owt4IVt4_-5EL4oI-QWagQp4p9VpOfnT732IG3gsZI7m3HXMQM6Lg-uhhCxj3zN7knv_4ceO7iVvTpSCTQb7tdAt8dgfgTR7nu4fvq-71r8rmHee1PK8U5TctrPUzRd7Y"
                />
                <div className="absolute top-sm left-sm bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-primary font-label-sm text-label-sm border border-outline-variant/20 shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    play_circle
                  </span>{" "}
                  Video
                </div>
              </div>
              <div className="p-md flex flex-col flex-1">
                <h3 className="font-headline-md text-[20px] leading-[28px] font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors line-clamp-2">
                  Advanced React Patterns &amp; Performance Optimization
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                  Master rendering strategies, memoization, and complex state
                  management in modern React applications.
                </p>
                <div className="mt-auto flex items-center justify-between pt-md border-t border-outline-variant/20">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">
                      schedule
                    </span>
                    <span className="font-label-sm text-label-sm">45 mins</span>
                  </div>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-colors group/btn"
                    title="Save to Roadmap"
                  >
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:icon-fill transition-all">
                      bookmark_add
                    </span>
                  </button>
                </div>
              </div>
            </article>
            {/* Card 2 (AI Focus) */}
            <article className="group bg-surface-container-lowest rounded-xl border border-primary-container/20 overflow-hidden hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(87,106,143,0.12)] transition-all duration-300 flex flex-col h-full cursor-pointer relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container" />
              <div className="h-40 w-full bg-surface-container overflow-hidden relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, #576a8f 1px, transparent 0)",
                    backgroundSize: "24px 24px"
                  }}
                />
                <span className="material-symbols-outlined text-[64px] text-primary/40 group-hover:scale-110 transition-transform duration-500">
                  neurology
                </span>
                <div className="absolute top-sm left-sm bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-secondary font-label-sm text-label-sm border border-outline-variant/20 shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    article
                  </span>{" "}
                  Article
                </div>
              </div>
              <div className="p-md flex flex-col flex-1">
                <div className="flex gap-xs mb-sm">
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-[10px] uppercase tracking-wider">
                    AI Integration
                  </span>
                </div>
                <h3 className="font-headline-md text-[20px] leading-[28px] font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors line-clamp-2">
                  Implementing RAG Pipelines with Vector Databases
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                  A comprehensive guide to building Retrieval-Augmented Generation
                  systems using Pinecone and LangChain.
                </p>
                <div className="mt-auto flex items-center justify-between pt-md border-t border-outline-variant/20">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">
                      menu_book
                    </span>
                    <span className="font-label-sm text-label-sm">12 min read</span>
                  </div>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-colors group/btn"
                    title="Save to Roadmap"
                  >
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:icon-fill transition-all">
                      bookmark_add
                    </span>
                  </button>
                </div>
              </div>
            </article>
            {/* Card 3 */}
            <article className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(87,106,143,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer relative">
              <div className="h-40 w-full bg-surface-container overflow-hidden relative">
                <img
                  alt="Abstract database network visualization"
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
                  data-alt="An abstract, stylized visualization of a database network. Glowing nodes and connecting lines represent data flow against a very soft, minimal, off-white background. The aesthetic is clean, structured, and modern, utilizing a warm tech color palette of deep slate blues and gentle periwinkles to convey complex backend systems in an approachable, clear manner."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiepiiizrsa-mPIT4M-8ZDBRpHv_VHExKxZJnztAJFs9Z-vALmJGAu6IPviqozwzAGdYbSDo6c85kHKGwyfD3NZzpbssTWYV3eeVrNgofosNVXBr9dgUZslbBF5rAqnoQelZDF8CjRpyC-s-NPad1f_WJS8eVrbseMeWLL5eauW_OJseYWK4t_DSF6OFARzjbUuI4JUzzt5TkdAsrNV37FoG06MM-HW30_qp_4s-0wdyI-SI3EzBn0ZjR9hlqxfntQHCq2GnWpIfk"
                />
                <div className="absolute top-sm left-sm bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded text-tertiary-container font-label-sm text-label-sm border border-outline-variant/20 shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    school
                  </span>{" "}
                  Course
                </div>
              </div>
              <div className="p-md flex flex-col flex-1">
                <h3 className="font-headline-md text-[20px] leading-[28px] font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors line-clamp-2">
                  Distributed Systems Foundations
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
                  Learn the core concepts of scaling backends, consensus algorithms,
                  and fault tolerance.
                </p>
                <div className="w-full bg-surface-variant h-1.5 rounded-full mb-md overflow-hidden hidden group-hover:block">
                  <div className="bg-primary h-full w-1/3 rounded-full" />
                </div>
                <div className="mt-auto flex items-center justify-between pt-md border-t border-outline-variant/20">
                  <div className="flex items-center gap-xs text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">
                      format_list_bulleted
                    </span>
                    <span className="font-label-sm text-label-sm">8 Modules</span>
                  </div>
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary transition-colors group/btn"
                    title="Save to Roadmap"
                  >
                    <span className="material-symbols-outlined text-[18px] group-hover/btn:icon-fill transition-all">
                      bookmark_add
                    </span>
                  </button>
                </div>
              </div>
            </article>
          </div>
          {/* Empty State / Load More (Optional context) */}
          <div className="mt-xl flex justify-center w-full">
            <button className="bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md py-sm px-lg rounded-full border border-outline-variant/30 transition-colors shadow-sm active:scale-95">
              Load More Resources
            </button>
          </div>
        </main>
      </>

    </div>
  )
}

export default Learning
