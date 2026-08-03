'use client'

import { useEffect, useState } from 'react'

import FormSubmitButton from './FormSubmitButton'

const inputClass =
  'w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base'
const labelClass = 'block text-gray-700 mb-2 text-sm md:text-base'

export default function BootCampApplicationForm() {
  const [referralSource, setReferralSource] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Coming back via the back button can restore this form from cache mid-submit.
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => {
      if (e.persisted) setSubmitting(false)
    }
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  // Every age option here is under 12 months, so the 12-month milestones guide always applies.
  const handleSubmit = () => {
    setSubmitting(true)
    try {
      sessionStorage.setItem('milestonesGifts', '12')
    } catch {
      // sessionStorage can be unavailable in private browsing; the query param still covers it.
    }
  }

  return (
    <form
      action="https://formsubmit.co/jess@jessicasspeechandfeeding.com"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-4 md:space-y-6"
    >
      <input type="hidden" name="_subject" value="New Baby Boot Camp application!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://jessicasspeechandfeeding.com/thank-you?gifts=12" />
      <input type="hidden" name="form_source" value="Baby Boot Camp application" />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>First name *</label>
          <input type="text" name="first_name" className={inputClass} required />
        </div>
        <div>
          <label className={labelClass}>Last name *</label>
          <input type="text" name="last_name" className={inputClass} required />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email *</label>
        <input type="email" name="email" className={inputClass} required />
      </div>

      <div>
        <label className={labelClass}>Phone number *</label>
        <input type="tel" name="phone" className={inputClass} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>How old is your baby? *</label>
          <select name="baby_age" className={inputClass} required>
            <option value="">Select one option</option>
            <option value="Under 4 months">Under 4 months</option>
            <option value="4-5 months">4&ndash;5 months</option>
            <option value="6 months">6 months</option>
            <option value="7 months">7 months</option>
            <option value="8 months">8 months</option>
            <option value="9-10 months">9&ndash;10 months</option>
            <option value="11+ months">11+ months</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Have you started solids yet? *</label>
          <select name="solids_status" className={inputClass} required>
            <option value="">Select one option</option>
            <option value="Not yet - planning ahead">Not yet, planning ahead</option>
            <option value="Just started">Just started</option>
            <option value="A few weeks in and could use help">A few weeks in and could use help</option>
            <option value="Going well, want to level up">Going well, want to level up</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Are you on maternity or parental leave right now? *</label>
        <select name="leave_status" className={inputClass} required>
          <option value="">Select one option</option>
          <option value="Yes - leave ends within 2 months">Yes, and my leave ends within 2 months</option>
          <option value="Yes - leave ends in 3+ months">Yes, my leave ends in 3+ months</option>
          <option value="Yes - not returning to work">Yes, and I am not returning to work</option>
          <option value="No - already back at work">No, I am already back at work</option>
          <option value="Other caregiver / partner applying">I am a partner or other caregiver applying</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Where are you located? (city, state) *</label>
        <input type="text" name="location" className={inputClass} placeholder="Hoboken, NJ" required />
      </div>

      <div>
        <label className={labelClass}>
          <em>How did you hear about me?</em> *
        </label>
        <select
          name="referral_source"
          value={referralSource}
          onChange={(e) => setReferralSource(e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Select one option</option>
          <option value="Instagram">Instagram</option>
          <option value="Google search">Google search</option>
          <option value="ChatGPT / AI">ChatGPT / AI</option>
          <option value="Word of mouth">Word of mouth</option>
          <option value="Took a class with Jessica">I took a class with Jessica</option>
          <option value="Referral from a practitioner">Referral from a practitioner</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {referralSource === 'Other' && (
        <div>
          <label className={labelClass}>Please specify *</label>
          <input
            type="text"
            name="referral_source_other"
            className={inputClass}
            placeholder="How did you hear about me?"
            required
          />
        </div>
      )}

      <div>
        <label className={labelClass}>What would you love help with? *</label>
        <textarea
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Choking, allergens, gagging, refusing the spoon, feeling more confident at mealtimes..."
          required
        ></textarea>
      </div>

      <p className="text-xs md:text-sm text-gray-600 italic">
        The boot camp runs live over video, so you can join from anywhere in the US. I keep each group small,
        and I read every application myself. You will hear back from me with the dates for the next cohort.
      </p>

      <FormSubmitButton
        pending={submitting}
        label="Apply for the next boot camp"
        pendingLabel="Sending..."
      />
      {submitting && (
        <p className="text-xs md:text-sm text-gray-500 text-center" role="status">
          Sending your application, this can take a few seconds.
        </p>
      )}
    </form>
  )
}
