'use client'

import { useEffect, useState } from 'react'

import FormSubmitButton from './FormSubmitButton'

const CHILD_AGES = [
  'Under 6 months',
  '6-12 months',
  '12-18 months',
  '18 months - 2 years',
  '2-3 years',
  '3-5 years',
  '5+ years',
] as const

// Which milestone guides to gift for each child age. Ids map to gifts in MilestonesGift.
const GIFTS_BY_AGE: Record<string, string[]> = {
  'Under 6 months': ['12'],
  '6-12 months': ['12'],
  '12-18 months': ['12', '18'],
  '18 months - 2 years': ['18', '24'],
  '2-3 years': ['24'],
}

export default function ContactForm() {
  const [referralSource, setReferralSource] = useState('')
  const [childAge, setChildAge] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Coming back via the back button can restore this form from cache mid-submit.
  useEffect(() => {
    const reset = (e: PageTransitionEvent) => {
      if (e.persisted) setSubmitting(false)
    }
    window.addEventListener('pageshow', reset)
    return () => window.removeEventListener('pageshow', reset)
  }, [])

  const giftsParam = (GIFTS_BY_AGE[childAge] ?? []).join(',')
  const nextUrl = giftsParam
    ? `https://jessicasspeechandfeeding.com/thank-you?gifts=${giftsParam}`
    : 'https://jessicasspeechandfeeding.com/thank-you'

  // Backup for the query string above in case the form host drops it on redirect.
  const handleSubmit = () => {
    setSubmitting(true)
    try {
      if (giftsParam) {
        sessionStorage.setItem('milestonesGifts', giftsParam)
      } else {
        sessionStorage.removeItem('milestonesGifts')
      }
    } catch {
      // sessionStorage can be unavailable in private browsing; the query param still covers it.
    }
  }

  return (
    <form action="https://formsubmit.co/jess@jessicasspeechandfeeding.com" method="POST" onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <input type="hidden" name="_subject" value="New inquiry from Jessica's Speech website!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 mb-2 text-sm md:text-base">First name *</label>
          <input type="text" name="first_name" className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 text-sm md:text-base">Last name *</label>
          <input type="text" name="last_name" className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" required />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 mb-2 text-sm md:text-base">Email *</label>
        <input type="email" name="email" className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2 text-sm md:text-base">Phone number *</label>
        <input type="tel" name="phone" className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" required />
      </div>
      <div>
        <label className="block text-gray-700 mb-2 text-sm md:text-base"><em>How did you hear about me?</em> *</label>
        <select 
          name="referral_source" 
          value={referralSource}
          onChange={(e) => setReferralSource(e.target.value)}
          className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" 
          required
        >
          <option value="">Select one option</option>
          <option value="Google search">Google search</option>
          <option value="ChatGPT / AI">ChatGPT / AI</option>
          <option value="Word of mouth">Word of mouth</option>
          <option value="Referral from a practitioner">Referral from a practitioner</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {referralSource === 'Other' && (
        <div>
          <label className="block text-gray-700 mb-2 text-sm md:text-base">Please specify *</label>
          <input 
            type="text" 
            name="referral_source_other" 
            className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" 
            placeholder="How did you hear about me?"
            required 
          />
        </div>
      )}
      <div>
        <label className="block text-gray-700 mb-2 text-sm md:text-base">How old is your child? *</label>
        <select
          name="child_age"
          value={childAge}
          onChange={(e) => setChildAge(e.target.value)}
          className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base"
          required
        >
          <option value="">Select one option</option>
          {CHILD_AGES.map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2 text-sm md:text-base">Where do you live? *</label>
        <select name="location" className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" required>
          <option value="">Select one option</option>
          <option value="Hoboken">Hoboken</option>
          <option value="Jersey City">Jersey City</option>
          <option value="Weehawken">Weehawken</option>
          <option value="Other / Virtual">Other / Interested in virtual coaching support</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2 text-sm md:text-base">Tell me about your child! 👇 *</label>
        <textarea name="message" rows={4} className="w-full px-3 py-2.5 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#82b2b7] bg-[#eee] text-base" required></textarea>
      </div>
      <p className="text-xs md:text-sm text-gray-600 italic">
        In-home and daycare-based services are currently offered to families within approximately a 2-mile radius of Hoboken. Virtual coaching is available.
      </p>
      <FormSubmitButton pending={submitting} label="Send" pendingLabel="Sending..." />
      {submitting && (
        <p className="text-xs md:text-sm text-gray-500 text-center" role="status">
          Sending your message, this can take a few seconds.
        </p>
      )}
    </form>
  )
}
