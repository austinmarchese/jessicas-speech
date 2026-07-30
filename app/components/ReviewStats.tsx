'use client'

import { useEffect, useRef, useState } from 'react'

const TARGET = 30
const RATING = 5.0
const DURATION_MS = 1500

export default function ReviewStats() {
  const [count, setCount] = useState(0)
  const [rating, setRating] = useState(0)
  const [started, setStarted] = useState(false)
  const [starsLit, setStarsLit] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / DURATION_MS)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(eased * TARGET))
      setRating(parseFloat((eased * RATING).toFixed(1)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started])

  useEffect(() => {
    if (!started) return
    let i = 0
    const step = () => {
      i += 1
      setStarsLit(i)
      if (i < 5) setTimeout(step, 140)
    }
    setTimeout(step, 120)
  }, [started])

  return (
    <div ref={ref} className="mt-2 md:mt-6 mb-4 md:mb-6">
      <a
        href="https://maps.app.goo.gl/cMaY4dE2r8hy1D8x7?g_st=ic"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-br from-white to-[#f5f0eb] border border-gray-200 hover:border-[#82b2b7] hover:shadow-md rounded-full px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 shadow-sm transition max-w-full"
      >
        <div className="flex items-center gap-1 sm:gap-1.5">
          <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          </svg>
          <span className="hidden sm:inline text-xs md:text-sm font-medium text-gray-700">Google</span>
        </div>

        <span className="text-gray-300 hidden sm:inline">·</span>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="text-sm md:text-base font-semibold text-gray-800 tabular-nums leading-none">
            {rating.toFixed(1)}
          </span>
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-all duration-300 ${
                  i < starsLit ? 'text-yellow-400 scale-100' : 'text-gray-300 scale-90'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.169c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.363 1.118l1.286 3.965c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.371 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.965a1 1 0 00-.363-1.118L2.076 8.393c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.951-.69l1.286-3.966z" />
              </svg>
            ))}
          </div>
        </div>

        <span className="text-gray-300">·</span>

        <span className="text-xs md:text-sm text-gray-700 whitespace-nowrap">
          <span className="font-semibold tabular-nums">{count}</span>{' '}
          <span className="text-gray-500">reviews</span>
        </span>

        <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-400 group-hover:text-[#82b2b7] transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}
