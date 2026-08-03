'use client'

import { useEffect, useState } from 'react'

type Gift = {
  id: string
  title: string
  description: string
  href: string
}

const GIFTS: Record<string, Gift> = {
  '12': {
    id: '12',
    title: "Your Baby's 12-Month Developmental Milestones",
    description:
      'My free guide to what to expect at 12 months across speech, understanding, play, and feeding, plus the red flags worth a call.',
    href: '/downloads/12-month-developmental-milestones.pdf',
  },
  '18': {
    id: '18',
    title: "Your Toddler's 18-Month Developmental Milestones",
    description:
      'My free guide to what to expect at 18 months across speech, understanding, play, and feeding, plus the red flags worth a call.',
    href: '/downloads/18-month-developmental-milestones.pdf',
  },
}

// Only keep ids we actually have a gift for, in a stable order.
const normalize = (ids: string[]): string[] =>
  ['12', '18'].filter((id) => ids.includes(id))

export default function MilestonesGift({ initialGifts = [] }: { initialGifts?: string[] }) {
  const [gifts, setGifts] = useState<string[]>(() => normalize(initialGifts))

  // Fallback for when the form host drops the query string on redirect.
  useEffect(() => {
    if (gifts.length) return
    try {
      const stored = sessionStorage.getItem('milestonesGifts')
      if (stored) setGifts(normalize(stored.split(',')))
    } catch {
      // sessionStorage can be unavailable in private browsing.
    }
  }, [gifts.length])

  if (!gifts.length) return null

  return (
    <div className="mb-8 text-left space-y-4">
      <p className="text-[11px] md:text-xs uppercase tracking-widest text-[#82b2b7] font-semibold text-center">
        {gifts.length > 1 ? 'Free gifts for you' : 'A free gift for you'}
      </p>
      {gifts.map((id) => {
        const gift = GIFTS[id]
        return (
          <div
            key={gift.id}
            className="bg-white border border-[#82b2b7]/40 rounded-2xl shadow-sm p-5 md:p-7"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f5f0eb] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-[#82b2b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-lg md:text-xl font-medium text-gray-800 mb-1">{gift.title}</h2>
                <p className="text-gray-600 text-sm md:text-base">{gift.description}</p>
              </div>
            </div>
            <a
              href={gift.href}
              download
              className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[#82b2b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6a9a9f] transition text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download the free guide
            </a>
          </div>
        )
      })}
    </div>
  )
}
