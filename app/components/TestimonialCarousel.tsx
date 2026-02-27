'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const testimonials = [
  '/images/service-1.png',
  '/images/service-2.png',
  '/images/testimonial-3.png',
  '/images/testimonial-4.png',
  '/images/testimonial-5.png',
  '/images/testimonial-6.png',
  '/images/testimonial-7.png',
  '/images/testimonial-8.png',
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index: number) => setCurrent(index)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((current + 1) % testimonials.length)

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Navigation Arrows - Outside the carousel */}
      <button 
        onClick={prev}
        className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={next}
        className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg bg-[#DDD8C4] mx-6 md:mx-0">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 flex items-center justify-center py-4 md:py-6">
              <Image 
                src={src}
                alt={`Testimonial ${i + 1}`}
                width={900}
                height={300}
                className="max-w-[95%] h-auto mx-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-4 md:mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              i === current ? 'bg-[#82b2b7]' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
