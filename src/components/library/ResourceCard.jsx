import React from 'react'

/**
 * ResourceCard
 * A single resource card. Supports three visual variants driven by props.
 *
 * @param {object}  props
 * @param {'video'|'article'|'course'} props.type
 * @param {string}  props.title
 * @param {string}  props.description
 * @param {string}  props.meta          - e.g. "45 mins" / "12 min read" / "8 Modules"
 * @param {string}  props.metaIcon      - material symbol name for the meta row
 * @param {string}  [props.imageSrc]    - thumbnail URL (video / course cards)
 * @param {string}  [props.imageAlt]
 * @param {string}  [props.tag]         - optional pill label (e.g. "AI Integration")
 * @param {boolean} [props.hasProgress] - show hover progress bar (course cards)
 */
function ResourceCard({
  type,
  title,
  description,
  meta,
  metaIcon,
  imageSrc,
  imageAlt = '',
  tag,
  hasProgress = false,
}) {
  const typeConfig = {
    video:   { icon: 'play_circle', label: 'Video',   labelClass: 'text-primary' },
    article: { icon: 'article',     label: 'Article',  labelClass: 'text-secondary' },
    course:  { icon: 'school',      label: 'Course',   labelClass: 'text-tertiary-container' },
  }[type] ?? { icon: 'description', label: type, labelClass: 'text-on-surface-variant' }

  const isAiCard = type === 'article' && !imageSrc

  return (
    <article
      className={`group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer relative
        ${isAiCard
          ? 'border border-primary-container/20 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(87,106,143,0.12)]'
          : 'border border-outline-variant/30 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(87,106,143,0.08)]'
        }`}
    >
      {/* Top accent stripe (AI / article card only) */}
      {isAiCard && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-secondary-container" />
      )}

      {/* Thumbnail */}
      <div className="h-40 w-full bg-surface-container overflow-hidden relative flex items-center justify-center">
        {imageSrc ? (
          <>
            {type === 'video' && (
              <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-variant opacity-50 mix-blend-multiply" />
            )}
            <img
              alt={imageAlt}
              src={imageSrc}
              className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-500"
            />
          </>
        ) : (
          /* Pattern background for icon-only cards */
          <>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #576a8f 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />
            <span className="material-symbols-outlined text-[64px] text-primary/40 group-hover:scale-110 transition-transform duration-500">
              neurology
            </span>
          </>
        )}

        {/* Type badge */}
        <div
          className={`absolute top-sm left-sm bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-1 rounded font-label-sm text-label-sm border border-outline-variant/20 shadow-sm flex items-center gap-1 ${typeConfig.labelClass}`}
        >
          <span className="material-symbols-outlined text-[14px]">{typeConfig.icon}</span>
          {typeConfig.label}
        </div>
      </div>

      {/* Body */}
      <div className="p-md flex flex-col flex-1">
        {/* Optional topic tag */}
        {tag && (
          <div className="flex gap-xs mb-sm">
            <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-on-secondary-container font-label-sm text-[10px] uppercase tracking-wider">
              {tag}
            </span>
          </div>
        )}

        <h3 className="font-headline-md text-[20px] leading-[28px] font-semibold text-on-surface mb-xs group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-md line-clamp-2">
          {description}
        </p>

        {/* Hover progress bar (courses) */}
        {hasProgress && (
          <div className="w-full bg-surface-variant h-1.5 rounded-full mb-md overflow-hidden hidden group-hover:block">
            <div className="bg-primary h-full w-1/3 rounded-full" />
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-md border-t border-outline-variant/20">
          <div className="flex items-center gap-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">{metaIcon}</span>
            <span className="font-label-sm text-label-sm">{meta}</span>
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
  )
}

export default ResourceCard
