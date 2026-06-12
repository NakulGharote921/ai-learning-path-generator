function SupportStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .accordion-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out, padding 0.3s ease;
        }
        .accordion-item.active .accordion-content {
            max-height: 200px;
            padding-bottom: 24px;
        }
        .accordion-item.active .chevron-icon {
            transform: rotate(180deg);
        }
        .glass-card {
            background: rgba(183, 189, 247, 0.15);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(87, 106, 143, 0.1);
        }
        .hero-pattern {
            background-color: #f9f9ff;
            background-image: radial-gradient(#3f5275 0.5px, transparent 0.5px);
            background-size: 24px 24px;
        }
        @media (max-width: 767px) {
          .side-nav { transform: translateX(-100%); }
          .main-content { margin-left: 0; }
        }
    `,
      }}
    />
  )
}

export default SupportStyles
