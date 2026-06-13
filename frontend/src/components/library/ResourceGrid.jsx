import React from 'react'
import ResourceCard from './ResourceCard'
import FadeInSection from '../home/FadeInSection'

/** Static resource data — replace with API call when ready */
const resources = [
  {
    id: 1,
    type: 'video',
    title: 'Advanced React Patterns & Performance Optimization',
    description:
      'Master rendering strategies, memoization, and complex state management in modern React applications.',
    meta: '45 mins',
    metaIcon: 'schedule',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjRyQHnmexg0e8_Kjg3T3Yk60mk3xfDx35c1BBINRJyjEQ5B0pGYSMW9c_jBW64U-pypdrDgD7kMPw_6a_2wnBZZUuz77qFZg-LYvBAU38pls34tGPS9j6KXl--mvqbd-hc1auHpsCF3Owt4IVt4_-5EL4oI-QWagQp4p9VpOfnT732IG3gsZI7m3HXMQM6Lg-uhhCxj3zN7knv_4ceO7iVvTpSCTQb7tdAt8dgfgTR7nu4fvq-71r8rmHee1PK8U5TctrPUzRd7Y',
    imageAlt: 'Code editor on screen',
  },
  {
    id: 2,
    type: 'article',
    title: 'Implementing RAG Pipelines with Vector Databases',
    description:
      'A comprehensive guide to building Retrieval-Augmented Generation systems using Pinecone and LangChain.',
    meta: '12 min read',
    metaIcon: 'menu_book',
    tag: 'AI Integration',
  },
  {
    id: 3,
    type: 'course',
    title: 'Distributed Systems Foundations',
    description:
      'Learn the core concepts of scaling backends, consensus algorithms, and fault tolerance.',
    meta: '8 Modules',
    metaIcon: 'format_list_bulleted',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAiepiiizrsa-mPIT4M-8ZDBRpHv_VHExKxZJnztAJFs9Z-vALmJGAu6IPviqozwzAGdYbSDo6c85kHKGwyfD3NZzpbssTWYV3eeVrNgofosNVXBr9dgUZslbBF5rAqnoQelZDF8CjRpyC-s-NPad1f_WJS8eVrbseMeWLL5eauW_OJseYWK4t_DSF6OFARzjbUuI4JUzzt5TkdAsrNV37FoG06MM-HW30_qp_4s-0wdyI-SI3EzBn0ZjR9hlqxfntQHCq2GnWpIfk',
    imageAlt: 'Abstract database network visualization',
    hasProgress: true,
  },
]

/**
 * ResourceGrid
 * Renders all resource cards in a responsive 3-column grid plus a "Load More" button.
 */
function ResourceGrid() {
  return (
    <FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-xl flex justify-center w-full">
        <button className="bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md py-sm px-lg rounded-full border border-outline-variant/30 transition-colors shadow-sm active:scale-95">
          Load More Resources
        </button>
      </div>
    </FadeInSection>
  )
}

export default ResourceGrid
