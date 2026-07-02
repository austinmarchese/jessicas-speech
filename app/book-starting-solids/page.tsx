'use client'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'
import MobileMenu from '../components/MobileMenu'

const EVENT_ID = '1754134847549'
const EVENTBRITE_URL = `https://www.eventbrite.com/e/hoboken-starting-solids-class-parent-baby-6-10-months-tickets-${EVENT_ID}?aff=oddtdtcreator&keep_tld=true`

declare global {
  interface Window {
    EBWidgets?: {
      createWidget: (opts: {
        widgetType: string
        eventId: string
        iframeContainerId: string
        iframeContainerHeight?: number
        themeSettings?: { brandColor?: string }
        onOrderComplete?: () => void
      }) => void
    }
  }
}

export default function BookStartingSolids() {
  const [widgetReady, setWidgetReady] = useState(false)
  const [scriptFailed, setScriptFailed] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)
  const initialized = useRef(false)

  useEffect(() => {
    if (!widgetReady || initialized.current || !window.EBWidgets) return
    initialized.current = true
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: EVENT_ID,
      iframeContainerId: `eventbrite-widget-container-${EVENT_ID}`,
      iframeContainerHeight: 625,
      themeSettings: {
        brandColor: '#7BADB2',
      },
    })

    const check = setTimeout(() => {
      const container = document.getElementById(`eventbrite-widget-container-${EVENT_ID}`)
      if (!container || !container.querySelector('iframe')) {
        setEmbedFailed(true)
      }
    }, 6000)
    return () => clearTimeout(check)
  }, [widgetReady])

  const showFallback = scriptFailed || embedFailed

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Script
        src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
        strategy="afterInteractive"
        onLoad={() => setWidgetReady(true)}
        onError={() => setScriptFailed(true)}
      />

      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="py-3 px-4 md:py-4 md:px-6 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Jessica's Speech and Feeding Therapy"
              width={200}
              height={92}
              className="h-10 md:h-14 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex gap-6 text-gray-700 font-medium text-sm uppercase tracking-wide">
            <Link href="/#miss-jessica" className="hover:text-[#82b2b7]">About Me</Link>
            <Link href="/#testimonials" className="hover:text-[#82b2b7]">Testimonials</Link>
            <Link href="/#contact-us" className="hover:text-[#82b2b7]">Contact Me</Link>
            <Link href="/starting-solids" className="hover:text-[#82b2b7]">Starting Solids</Link>
            <Link href="/feeding-tools" className="hover:text-[#82b2b7]">Feeding Tools</Link>
          </nav>
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://www.instagram.com/jessicasspeechandfeeding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#82b2b7] transition"
              aria-label="Follow on Instagram"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <Link
              href="/#contact-us"
              className="hidden sm:inline-block bg-[#82b2b7] text-white px-4 py-2 md:px-6 rounded-full font-medium hover:bg-[#6a9a9f] transition text-xs md:text-sm"
            >
              Contact Me
            </Link>
            <MobileMenu
              links={[
                { href: '/#miss-jessica', label: 'About Me' },
                { href: '/#testimonials', label: 'Testimonials' },
                { href: '/#contact-us', label: 'Contact Me' },
                { href: '/starting-solids', label: 'Starting Solids' },
                { href: '/feeding-tools', label: 'Feeding Tools' },
              ]}
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#82b2b7] mb-3 md:mb-4">
            In-Person · Hoboken, NJ · The Bunny Hive
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-gray-800 mb-4 md:mb-6 leading-tight">
            Book the Starting Solids Class
          </h1>
          <p className="text-gray-600 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
            Learn how to prevent choking, introduce allergens safely, and feed your baby real food.
            Pick your date below and reserve your spot in seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
            <span className="bg-white text-gray-700 px-3 py-1.5 rounded-full shadow-sm">Parents + babies 6–10 months</span>
            <span className="bg-white text-gray-700 px-3 py-1.5 rounded-full shadow-sm">Once monthly · Mondays 1:15 PM</span>
            <span className="bg-white text-gray-700 px-3 py-1.5 rounded-full shadow-sm">1001 Bloomfield St, Hoboken</span>
          </div>
        </div>
      </section>

      {/* Prominent booking card (always shows) */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl shadow-xl bg-gradient-to-br from-[#82b2b7] to-[#6a9a9f] text-white p-8 md:p-12 text-center">
            <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.25em] mb-3">Next Class</p>
            <h2 className="text-2xl md:text-4xl font-light mb-2">Starting Solids · Parent + Baby</h2>
            <p className="text-white/90 text-base md:text-lg mb-6">For babies 6–10 months</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-xl mx-auto mb-8 text-sm md:text-base">
              <div className="bg-white/15 rounded-xl px-4 py-3">
                <p className="text-white/70 text-xs uppercase tracking-wide mb-1">When</p>
                <p className="font-medium">Monthly · Mon 1:15 PM</p>
              </div>
              <div className="bg-white/15 rounded-xl px-4 py-3">
                <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Where</p>
                <p className="font-medium">The Bunny Hive · Hoboken</p>
              </div>
              <div className="bg-white/15 rounded-xl px-4 py-3">
                <p className="text-white/70 text-xs uppercase tracking-wide mb-1">Led by</p>
                <p className="font-medium">Jessica, MS CCC-SLP</p>
              </div>
            </div>
            <a
              href={EVENTBRITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#6a9a9f] px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition text-sm md:text-base uppercase tracking-wide shadow-lg"
            >
              Reserve Your Spot →
            </a>
            <p className="text-white/70 text-xs mt-4">Booking powered by Eventbrite · Instant confirmation</p>
          </div>
        </div>
      </section>

      {/* Eventbrite Embed (renders when Embedded Checkout is enabled in Eventbrite) */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-4">Or book directly below</p>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div
              id={`eventbrite-widget-container-${EVENT_ID}`}
              style={{ minHeight: 625 }}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">What You'll Learn</p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800">A therapist-led starting solids playbook</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { t: 'Choking vs. gagging', d: 'Know the difference so you can stay calm and respond correctly at every meal.' },
              { t: 'Safe food prep', d: 'How to cut, cook, and serve real foods for baby-led weaning and purees.' },
              { t: 'The top 9 allergens', d: 'Introduce peanut, egg, dairy, and more safely and on schedule.' },
              { t: 'Highchair setup', d: 'Positioning that supports safe swallowing and self-feeding.' },
              { t: 'Utensils, cups, straws', d: 'What to use, when to introduce it, and how to teach the skill.' },
              { t: 'Live Q&A with Jessica', d: 'Bring your baby, bring your questions. Leave with a plan.' },
            ].map((f) => (
              <div key={f.t} className="bg-white rounded-xl p-5 md:p-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-1.5">{f.t}</h3>
                <p className="text-gray-600 text-sm md:text-base">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Can't make Hoboken?</p>
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">Other ways to work with Jessica</h2>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              href="/starting-solids"
              className="inline-block bg-[#82b2b7] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6a9a9f] transition text-sm uppercase tracking-wide"
            >
              See all classes & coaching
            </Link>
            <Link
              href="/#contact-us"
              className="inline-block bg-white text-[#82b2b7] border-2 border-[#82b2b7] px-6 py-3 rounded-full font-medium hover:bg-[#f5f0eb] transition text-sm uppercase tracking-wide"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Jessica's Speech and Feeding Therapy</p>
          <div className="flex justify-center gap-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/starting-solids" className="hover:text-white">Starting Solids</Link>
            <Link href="/feeding-tools" className="hover:text-white">Feeding Tools</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
