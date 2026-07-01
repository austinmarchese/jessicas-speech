'use client'

import { useState, useEffect } from 'react'

type Testimonial = {
  stars: number
  text: string
  attribution: string
}

const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: 'Jessica is great! She is so patient and knowledgeable.',
    attribution: 'Y.P. (2025) · Speech Therapy',
  },
  {
    stars: 5,
    text: 'Jessica was great at answering all my questions and left me feeling more confident about starting the solids journey with my baby.',
    attribution: 'M.B. (2025) · Starting Solids Class',
  },
  {
    stars: 5,
    text: 'Super knowledgeable, caring, trustworthy, and just a great person through and through. Will help with all language therapy and feeding needs.',
    attribution: 'S.P. (2025) · Speech and Feeding Therapy',
  },
  {
    stars: 5,
    text: "The best in the business! She's so knowledgeable about feeding and makes you feel so comfortable. She has a way of explaining things that make it easy for anyone to understand. Can't recommend her enough!",
    attribution: 'M.L. (2025) · Starting Solids Class',
  },
  {
    stars: 5,
    text: "We attended Jessica's Solid Starts class in Hoboken and loved it! I brought my 10 month old and she reassured me that everything I'm doing is correct and to offer small amounts of solids! She explained the difference of gagging vs. choking which was extremely helpful!! She is my go-to for any feeding questions.",
    attribution: 'M.S. (2025) · Starting Solids Class',
  },
  {
    stars: 5,
    text: "We've had such a wonderful experience working with Jessica. She has helped my 1.5 year old Isabella with self-feeding, trying new foods, and making mealtimes so much more positive—no more needing Miss Rachel just to get through a meal! Jessica has also supported her language development in such a fun, engaging way. She truly gets down on a child's level and makes every session feel playful and functional. Isabella has made so much progress, and we are so grateful for Jessica's support!",
    attribution: 'S.R. (2025) · Speech and Feeding Therapy',
  },
  {
    stars: 5,
    text: "I cannot say enough wonderful things about Jess! From the very first session, they created such a warm, welcoming environment that instantly put both me and my child at ease. Their expertise as a speech pathologist is matched only by her genuine kindness and patience. Our kid truly loved Jess! What truly stands out is how Jess tailors her approach to my boy, she always takes the time to explain strategies and involve the whole family in the process. My child's confidence and communication skills have blossomed in ways I never imagined possible. Plus, their creativity (hello, fun games and engaging activities!) keeps little ones motivated and excited to learn. If you're looking for a speech pathologist who feels like family, radiates positivity, and truly makes a difference, look no further. Jess is a miracle worker with a heart of gold! Thank you for all you do!",
    attribution: 'S.P. (2025) · Speech Therapy',
  },
  {
    stars: 5,
    text: "We had the absolute pleasure of working with Jess for our 2-year-old. I truly can't say enough good things about the experience. From our very first session, Jess made us feel supported, understood, and hopeful. She has a special gift for connecting with little ones—our child responded to her warmth and gentle approach right away. Jess was not only knowledgeable and professional, but also incredibly patient, creative, and encouraging throughout the process. She tailored every session to meet our child where they were, and celebrated every small win with us, which made such a difference in building our confidence as parents. We saw meaningful progress in both feeding and communication, and perhaps most importantly, our child began to enjoy the learning process. If you're looking for someone who blends clinical expertise with kindness and heart, we wholeheartedly recommend Jess. She was a game-changer for our family, and we're so grateful to have found her.",
    attribution: 'L.P. (2025) · Feeding Therapy / Picky Eating',
  },
]

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-5 h-5 md:w-6 md:h-6 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.169c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.363 1.118l1.286 3.965c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.371 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.965a1 1 0 00-.363-1.118L2.076 8.393c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.951-.69l1.286-3.966z" />
    </svg>
  )
}

const TRUNCATE_LIMIT = 220

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (expanded) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [expanded])

  useEffect(() => {
    setExpanded(false)
  }, [current])

  const goTo = (index: number) => setCurrent(index)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  const t = testimonials[current]
  const isLong = t.text.length > TRUNCATE_LIMIT
  const displayText = isLong && !expanded
    ? t.text.slice(0, TRUNCATE_LIMIT).trimEnd() + '…'
    : t.text

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Card */}
      <div className="relative bg-[#f5f0eb] rounded-2xl md:rounded-3xl shadow-lg px-6 py-8 md:px-16 md:py-12 min-h-[280px] md:min-h-[340px] flex flex-col items-center text-center">
        {/* Quote icon */}
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#82b2b7]/60 mb-3 md:mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>

        {/* Stars */}
        <div className="flex gap-1 mb-4 md:mb-6">
          {[...Array(t.stars)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>

        {/* Body */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-3 max-w-2xl">
          {displayText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="text-[#82b2b7] hover:text-[#6a9a9f] text-sm font-medium underline underline-offset-2 mb-4 md:mb-6 transition"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        )}

        {!isLong && <div className="mb-4 md:mb-6" />}

        {/* Attribution */}
        <p className="text-[#82b2b7] text-xs md:text-sm uppercase tracking-widest font-medium">
          {t.attribution}
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-1 sm:left-2 md:-left-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-9 h-9 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-1 sm:right-2 md:-right-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-9 h-9 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8 flex-wrap">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition ${
              i === current ? 'bg-[#82b2b7]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
