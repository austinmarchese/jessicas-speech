'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 3500)
    return () => clearTimeout(t)
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
