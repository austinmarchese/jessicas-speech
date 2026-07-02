'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const OVERLAY_DURATION_MS = 3500

export default function HeroIntro() {
  const [visible, setVisible] = useState(true)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const showOverlay = () => {
      setVisible(true)
      if (hideTimer.current) clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => setVisible(false), OVERLAY_DURATION_MS)
    }

    showOverlay()

    const video = document.querySelector<HTMLVideoElement>('video[poster="/images/hero-poster.jpg"]')
    if (!video) return

    let lastTime = video.currentTime
    const onTimeUpdate = () => {
      if (video.currentTime + 0.25 < lastTime) {
        showOverlay()
      }
      lastTime = video.currentTime
    }
    const onSeeked = () => {
      if (video.currentTime < 0.25) showOverlay()
    }

    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('seeked', onSeeked)

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('seeked', onSeeked)
      if (hideTimer.current) clearTimeout(hideTimer.current)
    }
  }, [])

  return (
    <div
      className={`absolute inset-0 z-[1] overflow-hidden transition-opacity duration-[1500ms] ease-in-out ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Image
        src="/images/hero-therapy-session.png"
        alt="Jessica working with a child on speech and communication"
        fill
        priority
        className="object-cover hero-ken-burns"
        style={{ objectPosition: '60% 45%' }}
      />
    </div>
  )
}
