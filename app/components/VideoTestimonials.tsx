'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

type VideoTestimonial = {
  src: string
  poster: string
  family: string
  caption?: string
}

const VIDEOS: VideoTestimonial[] = [
  {
    src: '/videos/testimonial-2.mp4',
    poster: '/images/testimonial-2-poster.jpg',
    family: 'The Waterfield Family',
    caption: 'On working with Jessica',
  },
  {
    src: '/videos/testimonial-roberts.mp4',
    poster: '/images/testimonial-roberts-poster.jpg',
    family: 'The Roberts Family',
    caption: 'On working with Jessica',
  },
]

function VideoPlayer({ video, sizeClass }: { video: VideoTestimonial; sizeClass: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className={`relative aspect-[9/16] w-full ${sizeClass} overflow-hidden rounded-xl md:rounded-2xl bg-black shadow-lg`}>
      {playing ? (
        <video
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play testimonial from ${video.family}`}
          className="group absolute inset-0 w-full h-full"
        >
          <Image
            src={video.poster}
            alt={`${video.family} testimonial`}
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/90 group-hover:bg-white transition flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 md:w-11 md:h-11 text-[#82b2b7] ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  )
}

function FeaturedVideo({ video }: { video: VideoTestimonial }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-5xl mx-auto">
      {/* Left column: text */}
      <div className="text-center lg:text-left">
        <div className="inline-flex gap-0.5 mb-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.169c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.363 1.118l1.286 3.965c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.371 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.965a1 1 0 00-.363-1.118L2.076 8.393c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.951-.69l1.286-3.966z" />
            </svg>
          ))}
        </div>
        <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Family Story</p>
        <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-3 md:mb-4 leading-tight">
          Hear from {video.family}
        </h3>
        {video.caption && (
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
            {video.caption} &mdash; a real family sharing how in-home therapy changed their child&apos;s eating, speech, and confidence.
          </p>
        )}
        <p className="text-gray-500 text-sm md:text-base">
          Tap play to watch their story.
        </p>
      </div>

      {/* Right column: video */}
      <div className="flex justify-center lg:justify-start">
        <VideoPlayer video={video} sizeClass="max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]" />
      </div>
    </div>
  )
}

function VideoCard({ video, sizeClass }: { video: VideoTestimonial; sizeClass: string }) {
  return (
    <div className="flex flex-col">
      <VideoPlayer video={video} sizeClass={sizeClass} />
      <div className="text-center mt-4">
        <div className="inline-flex gap-0.5 mb-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.169c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.363 1.118l1.286 3.965c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.371 2.448c-.784.57-1.838-.196-1.54-1.118l1.287-3.965a1 1 0 00-.363-1.118L2.076 8.393c-.783-.57-.38-1.81.588-1.81h4.168a1 1 0 00.951-.69l1.286-3.966z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-800 font-medium text-base md:text-lg">{video.family}</p>
        {video.caption && <p className="text-gray-500 text-sm mt-1">{video.caption}</p>}
      </div>
    </div>
  )
}

export default function VideoTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  if (VIDEOS.length === 1) {
    return <FeaturedVideo video={VIDEOS[0]} />
  }

  const handleScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    const slideWidth = el.scrollWidth / VIDEOS.length
    setActive(Math.min(VIDEOS.length - 1, Math.round(el.scrollLeft / slideWidth)))
  }

  const scrollTo = (i: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: (el.scrollWidth / VIDEOS.length) * i, behavior: 'smooth' })
  }

  const gridCols = VIDEOS.length === 2 ? 'sm:grid-cols-2 max-w-3xl' : 'sm:grid-cols-2 lg:grid-cols-3 max-w-6xl'
  return (
    <>
      {/* Mobile: swipe carousel */}
      <div className="sm:hidden">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {VIDEOS.map((v) => (
            <div key={v.src} className="snap-center shrink-0 w-[78%]">
              <VideoCard video={v} sizeClass="" />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {VIDEOS.map((v, i) => (
            <button
              key={v.src}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition ${i === active ? 'bg-[#82b2b7]' : 'bg-gray-300'}`}
              aria-label={`Go to video ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className={`hidden sm:grid ${gridCols} mx-auto gap-8 md:gap-10`}>
        {VIDEOS.map((v) => (
          <VideoCard key={v.src} video={v} sizeClass="max-w-[320px] mx-auto" />
        ))}
      </div>
    </>
  )
}
