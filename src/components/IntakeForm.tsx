/*
 * INTAKE FORM - Multi-step application form (6 steps)
 *
 * This is the online version of the PDF intake packet.
 * On submission, it sends the application via email to the Program Director.
 *
 * Steps:
 *   1. Personal Information (name, phone, email, emergency contact)
 *   2. Substance Use History (drug of choice, length/last date of use)
 *   3. Medical History (conditions, medications, mental health, allergies)
 *   4. Legal Background (criminal history, probation/parole)
 *   5. Personal Statement (why join, why sobriety matters)
 *   6. Review & Agreement (summary, checkboxes, submit)
 *
 * To add a new field:
 *   1. Add to the FormData interface and initialFormData below
 *   2. Add the input in the appropriate step section
 *   3. Add validation in validateCurrentStep() if required
 *   4. Update the API route (src/app/api/intake/route.ts) to read the new field
 *
 * To add a new step:
 *   1. Add step name to the STEPS array
 *   2. Add a new {currentStep === N} section in the JSX
 *   3. Add validation logic in validateCurrentStep()
 */
'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import StepIndicator from '@/components/StepIndicator'

const STEPS = ['Personal', 'Substance', 'Medical', 'Legal', 'Statement', 'Review']

interface FormData {
  fullName: string
  phone: string
  email: string
  emergencyContactName: string
  emergencyContactPhone: string
  moveInDate: string
  drugOfChoice: string
  lengthOfUse: string
  lastDateOfUse: string
  medicalConditions: string
  medications: string
  mentalHealth: string
  allergies: string
  criminalBackground: string
  onProbation: string
  pendingCases: string
  whyJoin: string
  whySobriety: string
  agreeRules: boolean
  agreeFaith: boolean
  agreeDrugTest: boolean
}

const initialFormData: FormData = {
  fullName: '',
  phone: '',
  email: '',
  emergencyContactName: '',
  emergencyContactPhone: '',
  moveInDate: '',
  drugOfChoice: '',
  lengthOfUse: '',
  lastDateOfUse: '',
  medicalConditions: '',
  medications: '',
  mentalHealth: '',
  allergies: '',
  criminalBackground: '',
  onProbation: 'no',
  pendingCases: '',
  whyJoin: '',
  whySobriety: '',
  agreeRules: false,
  agreeFaith: false,
  agreeDrugTest: false,
}

export default function IntakeForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [stepErrors, setStepErrors] = useState<string[]>([])

  function updateField(field: keyof FormData, value: string | boolean) {
    setFormData(prev => ({ ...prev, [field]: value }))
    setStepErrors([])
  }

  function validateCurrentStep(): string[] {
    const errors: string[] = []
    switch (currentStep) {
      case 0:
        if (!formData.fullName.trim()) errors.push('Full name is required')
        if (!formData.phone.trim()) errors.push('Phone number is required')
        if (!formData.email.trim()) errors.push('Email address is required')
        if (!formData.emergencyContactName.trim()) errors.push('Emergency contact name is required')
        if (!formData.emergencyContactPhone.trim()) errors.push('Emergency contact phone is required')
        break
      case 1:
        if (!formData.drugOfChoice.trim()) errors.push('Drug of choice is required')
        if (!formData.lengthOfUse.trim()) errors.push('Length of use is required')
        if (!formData.lastDateOfUse.trim()) errors.push('Last date of use is required')
        break
      case 4:
        if (!formData.whyJoin.trim()) errors.push('Please tell us why you want to join')
        if (!formData.whySobriety.trim()) errors.push('Please tell us why sobriety is important to you')
        break
      case 5:
        if (!formData.agreeRules) errors.push('You must agree to the house rules')
        if (!formData.agreeFaith) errors.push('You must acknowledge the faith-based program')
        if (!formData.agreeDrugTest) errors.push('You must agree to the drug testing policy')
        break
    }
    return errors
  }

  function nextStep() {
    const errors = validateCurrentStep()
    if (errors.length > 0) {
      setStepErrors(errors)
      return
    }
    setStepErrors([])
    setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
  }

  function prevStep() {
    setStepErrors([])
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  async function handleSubmit() {
    const errors = validateCurrentStep()
    if (errors.length > 0) {
      setStepErrors(errors)
      return
    }

    setStatus('sending')
    setErrorMessage('')

    const submitData = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, String(value))
    })

    try {
      const response = await fetch('/api/intake', {
        method: 'POST',
        body: submitData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again or call us directly at 940-232-8252.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-accent-light border border-accent/30 rounded-xl p-8 text-center max-w-lg mx-auto">
        <CheckCircle className="text-accent mx-auto mb-4" size={56} />
        <h3 className="text-2xl font-bold text-foreground mb-3">Application Submitted</h3>
        <p className="text-muted mb-2">
          Thank you for your application, {formData.fullName}. We have received your intake form.
        </p>
        <p className="text-muted">
          Our Program Director will review your application and contact you soon. For immediate
          questions, call <a href="tel:940-232-8252" className="text-primary font-semibold">940-232-8252</a>.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator steps={STEPS} currentStep={currentStep} />

      {stepErrors.length > 0 && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          {stepErrors.map((error, i) => (
            <div key={i} className="flex items-start gap-2 text-red-600 text-sm">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              {error}
            </div>
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start gap-2 text-red-600">
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="bg-card-bg border border-border rounded-xl p-6 md:p-8">
        {/* Step 1: Personal Information */}
        {currentStep === 0 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-4">Personal Information</h3>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
              <input type="text" value={formData.fullName} onChange={e => updateField('fullName', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your full legal name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
              <input type="tel" value={formData.phone} onChange={e => updateField('phone', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(555) 555-5555" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
              <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Emergency Contact Name *</label>
              <input type="text" value={formData.emergencyContactName} onChange={e => updateField('emergencyContactName', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Emergency contact full name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Emergency Contact Phone *</label>
              <input type="tel" value={formData.emergencyContactPhone} onChange={e => updateField('emergencyContactPhone', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="(555) 555-5555" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Desired Move-in Date</label>
              <input type="date" value={formData.moveInDate} onChange={e => updateField('moveInDate', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        )}

        {/* Step 2: Substance Use */}
        {currentStep === 1 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-4">Substance Use History</h3>
            <p className="text-muted text-sm mb-4">This information is confidential and used only for intake evaluation.</p>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Drug of Choice *</label>
              <input type="text" value={formData.drugOfChoice} onChange={e => updateField('drugOfChoice', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Primary substance(s)" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Length of Use *</label>
              <input type="text" value={formData.lengthOfUse} onChange={e => updateField('lengthOfUse', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g., 5 years, 6 months" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Last Date of Use *</label>
              <input type="date" value={formData.lastDateOfUse} onChange={e => updateField('lastDateOfUse', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
        )}

        {/* Step 3: Medical History */}
        {currentStep === 2 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-4">Medical History</h3>
            <p className="text-muted text-sm mb-4">All medical information is kept confidential. These fields are optional but help us support your recovery.</p>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Medical Conditions</label>
              <textarea value={formData.medicalConditions} onChange={e => updateField('medicalConditions', e.target.value)} rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="List any current medical conditions" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Current Medications</label>
              <textarea value={formData.medications} onChange={e => updateField('medications', e.target.value)} rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="List all current medications" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Mental Health Diagnoses</label>
              <textarea value={formData.mentalHealth} onChange={e => updateField('mentalHealth', e.target.value)} rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="List any mental health diagnoses" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Allergies</label>
              <textarea value={formData.allergies} onChange={e => updateField('allergies', e.target.value)} rows={2} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="List any allergies (food, medication, etc.)" />
            </div>
          </div>
        )}

        {/* Step 4: Legal Background */}
        {currentStep === 3 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-4">Legal Background</h3>
            <p className="text-muted text-sm mb-4">This information is confidential and used to understand your situation. Having a criminal background does not automatically disqualify you.</p>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Criminal Background</label>
              <textarea value={formData.criminalBackground} onChange={e => updateField('criminalBackground', e.target.value)} rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="Please describe any criminal history" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Currently on Probation or Parole?</label>
              <select value={formData.onProbation} onChange={e => updateField('onProbation', e.target.value)} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="no">No</option>
                <option value="probation">Yes - Probation</option>
                <option value="parole">Yes - Parole</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Pending Legal Cases</label>
              <textarea value={formData.pendingCases} onChange={e => updateField('pendingCases', e.target.value)} rows={3} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="Describe any pending legal matters" />
            </div>
          </div>
        )}

        {/* Step 5: Personal Statement */}
        {currentStep === 4 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-4">Personal Statement</h3>
            <p className="text-muted text-sm mb-4">Tell us about yourself and your goals in your own words.</p>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Why do you want to join Isaac&apos;s Recovery Home? *</label>
              <textarea value={formData.whyJoin} onChange={e => updateField('whyJoin', e.target.value)} rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="Tell us what brought you here and what you hope to achieve..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Why is sobriety important to you? *</label>
              <textarea value={formData.whySobriety} onChange={e => updateField('whySobriety', e.target.value)} rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-y" placeholder="Share what sobriety means to you and your life..." />
            </div>
          </div>
        )}

        {/* Step 6: Review & Agreement */}
        {currentStep === 5 && (
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-foreground mb-4">Review & Agreement</h3>

            <div className="bg-section-alt rounded-lg p-4 space-y-2 text-sm">
              <h4 className="font-semibold text-foreground">Application Summary</h4>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Emergency Contact:</strong> {formData.emergencyContactName} ({formData.emergencyContactPhone})</p>
              {formData.moveInDate && <p><strong>Desired Move-in:</strong> {formData.moveInDate}</p>}
              <p><strong>Drug of Choice:</strong> {formData.drugOfChoice}</p>
              <p><strong>Length of Use:</strong> {formData.lengthOfUse}</p>
            </div>

            <div className="bg-secondary-light border border-secondary/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">House Rules Agreement</h4>
              <ul className="text-sm text-muted space-y-1 mb-4">
                <li>- Curfew: 10 PM weekdays, 11 PM weekends</li>
                <li>- Employment search daily 9 AM to 4 PM</li>
                <li>- 2+ AA meetings per week, Sunday church</li>
                <li>- Zero-tolerance drug and alcohol policy</li>
                <li>- $150 weekly rent</li>
                <li>- Random drug testing</li>
              </ul>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.agreeRules} onChange={e => updateField('agreeRules', e.target.checked)} className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary" />
                <span className="text-sm text-foreground">I have read and agree to follow the House Rules *</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.agreeFaith} onChange={e => updateField('agreeFaith', e.target.checked)} className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary" />
                <span className="text-sm text-foreground">I understand this is a faith-based program with required church attendance *</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.agreeDrugTest} onChange={e => updateField('agreeDrugTest', e.target.checked)} className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary" />
                <span className="text-sm text-foreground">I agree to random drug testing with a zero-tolerance policy *</span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 0 ? (
            <button onClick={prevStep} className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-section-alt transition-colors min-h-[48px]">
              <ArrowLeft size={18} />
              Back
            </button>
          ) : (
            <div />
          )}

          {currentStep < STEPS.length - 1 ? (
            <button onClick={nextStep} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-semibold min-h-[48px]">
              Next
              <ArrowRight size={18} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors font-semibold min-h-[48px] disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Application
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
