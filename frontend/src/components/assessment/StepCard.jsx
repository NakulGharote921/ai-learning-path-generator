function StepCard({ className = '', children, onClick, selected, value }) {
  return (
    <div
      className={`selectable-card ${className} ${selected ? 'selected' : ''}`}
      data-value={value}
      onClick={onClick}
    >
      {children}
    </div>
  )
} 

export default StepCard
