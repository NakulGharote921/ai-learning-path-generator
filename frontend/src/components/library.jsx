import React from 'react'
import Sidebar from './dashboard/Sidebar'
import MobileTopNav from './dashboard/MobileTopNav'
import MobileBottomNav from './dashboard/MobileBottomNav'
import LibraryHeader from './library/LibraryHeader'
import LibraryFilters from './library/LibraryFilters'
import ResourceGrid from './library/ResourceGrid'

/**
 * Library page — Full-page resource browser.
 * Shares the same Sidebar/navigation shell as Dashboard & Roadmap.
 */
function Laibray() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #FFF8DE; }
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #dce2f5; border-radius: 4px; }

            @media (max-width: 767px) {
              .side-nav          { transform: translateX(-100%); }
              .mobile-bottom-nav { display: flex; }
              .main-content      { margin-left: 0; }
            }
            @media (min-width: 768px) {
              .mobile-bottom-nav { display: none; }
              .top-nav           { display: none; }
            }
          `,
        }}
      />

      <MobileTopNav />
      <Sidebar />

      <main className="main-content md:ml-64 p-margin pt-24 md:pt-margin pb-32 md:pb-margin min-h-screen">
        <div className="max-w-[1200px] mx-auto">
          <LibraryHeader />
          <LibraryFilters />
          <ResourceGrid />
        </div>
      </main>

      <MobileBottomNav />
    </div>
  )
}

export default Laibray