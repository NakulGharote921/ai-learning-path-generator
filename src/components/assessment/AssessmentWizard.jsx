import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StepCard from './StepCard'
import { stepContent, stepTitles } from './steps'

function AssessmentWizard() {
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(1)
  const [selections, setSelections] = useState({})

  const isMultiSelectStep = activeStep === 3
  const currentSelection = selections[activeStep]
  const canContinue = isMultiSelectStep
    ? Array.isArray(currentSelection) && currentSelection.length > 0
    : Boolean(currentSelection)

  const progressWidth = useMemo(() => `${(activeStep / 5) * 100}%`, [activeStep])

  const handleCardClick = (value) => {
    setSelections((prev) => {
      if (activeStep === 3) {
        const currentValues = Array.isArray(prev[activeStep]) ? prev[activeStep] : []
        const exists = currentValues.includes(value)
        const nextValues = exists
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value].slice(0, 3)

        return { ...prev, [activeStep]: nextValues }
      }

      return { ...prev, [activeStep]: value }
    })
  }

  const handleContinue = () => {
    if (activeStep < 5) {
      setActiveStep((step) => step + 1)
      return
    }

    navigate('/dashboard')
  }

  const handleBack = () => {
    if (activeStep > 1) setActiveStep((step) => step - 1)
  }

  return (
    <div className="min-h-screen bg-[#FFF8DE] text-on-surface">
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Cognitive Flow - AI Assessment Wizard</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Geist:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background-color: #FFF8DE; }
            .step-container { display: none; opacity: 0; transform: translateY(20px); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
            .step-container.active { display: flex; opacity: 1; transform: translateY(0); }
            .selectable-card { transition: all 0.2s ease-in-out; cursor: pointer; border: 2px solid transparent; background-color: #ffffff; }
            .selectable-card:hover { transform: translateY(-4px); box-shadow: 0px 10px 30px rgba(87, 106, 143, 0.08); border-color: #e8eeff; }
            .selectable-card.selected { background-color: #B7BDF7; border-color: #576a8f; box-shadow: 0px 12px 40px rgba(87, 106, 143, 0.15); }
            .selectable-card.selected .card-text { color: #151c29; }
            .progress-fill { transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
            .action-btn { background-color: #FF7444; color: white; transition: all 0.2s ease; box-shadow: 0 4px 0 #d95a2e; }
            .action-btn:active { transform: translateY(4px); box-shadow: 0 0 0 #d95a2e; }
            .action-btn:disabled { background-color: #e5e7eb; box-shadow: 0 4px 0 #d1d5db; color: #9ca3af; cursor: not-allowed; transform: none; }
          `,
        }}
      />

      <header className="w-full py-md px-margin flex justify-center items-center fixed top-0 z-50 bg-[#FFF8DE]/90 backdrop-blur-sm">
        <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
            psychology
          </span>
          Cognitive Flow
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-margin pt-xl pb-xl max-w-4xl mx-auto w-full mt-16">
        <div className="w-full max-w-xl mb-xl">
          <div className="flex justify-between items-center mb-sm px-2">
            <span className="font-label-md text-label-md text-on-surface-variant">
              Step {activeStep} of 5
            </span>
            <span className="font-label-md text-label-md text-primary font-bold">
              {stepTitles[activeStep - 1]}
            </span>
          </div>
          <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary progress-fill rounded-full" style={{ width: progressWidth }} />
          </div>
        </div>

        <div className="w-full relative flex-grow flex flex-col items-center">
          <StepSection
            active={activeStep === 1}
            className="max-w-2xl"
            data={stepContent[1]}
            selection={selections[1]}
            onSelect={handleCardClick}
          />
          <StepSection
            active={activeStep === 2}
            className="max-w-2xl"
            data={stepContent[2]}
            selection={selections[2]}
            onSelect={handleCardClick}
          />
          <StepSection
            active={activeStep === 3}
            className="max-w-3xl"
            data={stepContent[3]}
            selection={selections[3]}
            onSelect={handleCardClick}
            multiSelect
          />
          <StepSection
            active={activeStep === 4}
            className="max-w-2xl"
            data={stepContent[4]}
            selection={selections[4]}
            onSelect={handleCardClick}
          />
          <StepSection
            active={activeStep === 5}
            className="max-w-2xl"
            data={stepContent[5]}
            selection={selections[5]}
            onSelect={handleCardClick}
          />
        </div>

        <div className="w-full max-w-2xl mt-xl flex justify-between items-center px-4">
          <button
            className={`font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 ${
              activeStep === 1 ? 'opacity-0 pointer-events-none' : ''
            }`}
            onClick={handleBack}
            type="button"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back
          </button>
          <button
            className="action-btn font-label-md text-label-md px-xl py-sm rounded-xl flex items-center gap-2 text-lg"
            disabled={!canContinue}
            onClick={handleContinue}
            type="button"
          >
            {activeStep === 5 ? 'Finish' : 'Continue'}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  )
}

function StepSection({ active, className, data, multiSelect = false, onSelect, selection }) {
  return (
    <div className={`step-container ${active ? 'active' : ''} flex-col items-center w-full ${className} gap-lg`}>
      <div className="text-center">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-sm">{data.title}</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">{data.description}</p>
      </div>

      <div className={multiSelect ? 'flex flex-wrap justify-center gap-sm w-full' : 'grid grid-cols-1 md:grid-cols-3 gap-md w-full'}>
        {data.options.map((option) => (
          <OptionCard
            key={option.value}
            multiSelect={multiSelect}
            onSelect={onSelect}
            option={option}
            selected={multiSelect ? Array.isArray(selection) && selection.includes(option.value) : selection === option.value}
          />
        ))}
      </div>
    </div>
  )
}

function OptionCard({ multiSelect, onSelect, option, selected }) {
  if (multiSelect) {
    return (
      <StepCard
        className="rounded-full px-lg py-sm flex items-center gap-sm"
        selected={selected}
        value={option.value}
        onClick={() => onSelect(option.value)}
      >
        <span className="material-symbols-outlined">{option.icon}</span>
        <span className="font-label-md text-label-md text-base">{option.title}</span>
      </StepCard>
    )
  }

  const isCompact = option.description == null

  return (
    <StepCard
      className={`rounded-2xl p-md flex ${isCompact ? 'flex-col items-center text-center gap-sm' : 'items-center gap-md'}`}
      selected={selected}
      value={option.value}
      onClick={() => onSelect(option.value)}
    >
      <div className={`${isCompact ? 'w-16 h-16 mb-sm' : 'w-12 h-12 shrink-0'} rounded-full bg-surface-container-high flex items-center justify-center`}>
        <span className={`material-symbols-outlined ${isCompact ? 'text-3xl' : 'text-2xl'} text-primary`}>
          {option.icon}
        </span>
      </div>
      <div className={isCompact ? '' : 'text-left'}>
        <h3 className="font-headline-md text-headline-md card-text text-lg">{option.title}</h3>
        {option.description ? (
          <p className="font-body-sm text-body-sm text-on-surface-variant">{option.description}</p>
        ) : null}
      </div>
    </StepCard>
  )
}

export default AssessmentWizard
