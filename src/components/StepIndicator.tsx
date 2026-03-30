'use client'

import { Check } from 'lucide-react'

interface StepIndicatorProps {
  steps: string[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8 overflow-x-auto">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep
        return (
          <div key={step} className="flex items-center flex-shrink-0">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200 ${
                  isCompleted
                    ? 'bg-accent text-white'
                    : isCurrent
                    ? 'bg-primary text-white'
                    : 'bg-border text-muted'
                }`}
              >
                {isCompleted ? <Check size={18} /> : index + 1}
              </div>
              <span
                className={`text-xs mt-1 text-center max-w-[80px] ${
                  isCurrent ? 'text-primary font-semibold' : 'text-muted'
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-8 md:w-16 h-0.5 mx-1 ${
                  isCompleted ? 'bg-accent' : 'bg-border'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
