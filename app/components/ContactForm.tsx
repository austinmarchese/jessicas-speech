'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [referralSource, setReferralSource] = useState('')

  return (
    <form action="https://formsubmit.co/jessica.njslp@gmail.com" method="POST" className="space-y-4 md:space-y-6">
      <input type="hidden" name="_subject" value="New inquiry from Jessica's Speech website!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://jessicas-speech.vercel.app/thank-you" />
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
      <button type="submit" className="w-full bg-[#82b2b7] text-white py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#6a9a9f] transition uppercase tracking-wider">
        Send
      </button>
    </form>
  )
}
