function FeaturesStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(87, 106, 143, 0.1);
        }
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 24px;
        }
        .feature-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08);
        }
        @keyframes pulse-node {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
        }
        .node-pulse { animation: pulse-node 3s infinite ease-in-out; }
    `,
      }}
    />
  )
}

export default FeaturesStyles
