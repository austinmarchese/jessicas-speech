import Image from 'next/image'
import Link from 'next/link'

import TestimonialCarousel from './components/TestimonialCarousel'
import VideoTestimonials from './components/VideoTestimonials'
import ContactForm from './components/ContactForm'
import MobileMenu from './components/MobileMenu'
import HeroIntro from './components/HeroIntro'
import ReviewStats from './components/ReviewStats'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="py-3 px-4 md:py-4 md:px-6 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Jessica's Speech and Feeding Therapy"
            width={200}
            height={92}
            className="h-14 md:h-[5.5rem] w-auto"
          />
        </Link>
        <nav className="hidden lg:flex gap-6 text-gray-700 font-medium text-sm uppercase tracking-wide">
          <Link href="#miss-jessica" className="hover:text-[#82b2b7]">About Me</Link>
          <Link href="#testimonials" className="hover:text-[#82b2b7]">Testimonials</Link>
          <Link href="#contact-us" className="hover:text-[#82b2b7]">Contact Me</Link>
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
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <Link
            href="#contact-us"
            className="hidden sm:inline-block bg-[#82b2b7] text-white px-4 py-2 md:px-6 rounded-full font-medium hover:bg-[#6a9a9f] transition text-xs md:text-sm"
          >
            Get Started
          </Link>
          <MobileMenu
            links={[
              { href: '/#miss-jessica', label: 'About Me' },
              { href: '/#testimonials', label: 'Testimonials' },
              { href: '/#contact-us', label: 'Contact Me' },
              { href: '/starting-solids', label: 'Starting Solids' },
              { href: '/feeding-tools', label: 'Feeding Tools' },
              { href: '/#contact-us', label: 'Get Started' },
            ]}
          />
        </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[500px] md:min-h-[722px] flex items-end pt-16 md:pt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '46% 24%' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <HeroIntro />
        <div className="absolute inset-0 bg-black/20 z-[2]"></div>
        <div className="relative z-[3] max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-20 w-full">
          <h1 className="mb-6 md:mb-8 max-w-3xl">
            <span
              className="block text-white font-extrabold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] tracking-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}
            >
              From tiny struggles to big milestones.
            </span>
            <span
              className="block text-white/95 font-light leading-snug text-lg sm:text-xl md:text-2xl lg:text-[28px] mt-3 md:mt-5 max-w-2xl"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Help your child eat, sleep, and speak with confidence.
            </span>
          </h1>
          <Link
            href="#contact-us"
            className="inline-block bg-white text-gray-800 px-5 py-3 md:px-8 md:py-4 rounded-md font-semibold hover:bg-gray-100 transition text-[13px] md:text-sm uppercase tracking-wider md:tracking-widest"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Family-Friendly + Holistic Approach */}
      <section className="bg-[#f5f0eb] py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="order-1 md:order-1">
            <ReviewStats />
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-3 md:mb-4">Jessica&apos;s Speech and Feeding Therapy</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 md:mb-6 leading-tight">
              In-Home Speech and Feeding Therapy
            </h2>
            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#82b2b7] text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8z"/></svg>
                In Your Home
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#82b2b7] text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M4 6h16v2H4V6zm0 4h16v10H4V10zm3 2v2h4v-2H7z"/></svg>
                At Daycare
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#82b2b7] text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"/></svg>
                Virtual Sessions
              </span>
            </div>
            {/* Condensed mobile version */}
            <p className="md:hidden text-gray-600 text-base leading-relaxed mb-4">
              I look at your child's whole well-being, from sleep and breathing to oral-motor development, and partner with trusted ENTs, airway dentists, and orthodontists for care that lasts.
            </p>
            {/* Full desktop version */}
            <p className="hidden md:block text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              I meet children where they're most comfortable and I don't just treat a single symptom. I look at your child's whole well-being, from sleep and breathing to oral-motor development, and collaborate with trusted ENTs, airway-focused dentists, and orthodontists for a healthy foundation that lasts a lifetime.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium mb-6 md:mb-0">
              If you suspect your child may have a feeding, breathing, or speech challenge, let's connect.
            </p>
            <Link
              href="#contact-us"
              className="inline-block md:hidden bg-[#82b2b7] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6a9a9f] transition text-sm uppercase tracking-wide mt-4"
            >
              Get a Free Consultation
            </Link>
          </div>
          <div className="relative order-2 md:order-2">
            <Image
              src="/images/jessica-with-family.webp"
              alt="Jessica working with a family and baby during a therapy session"
              width={600}
              height={600}
              className="rounded-xl md:rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* About Jessica */}
      <section id="miss-jessica" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <Image
                src="/images/jessica-bubbles.webp"
                alt="Jessica Aleman during a therapy session with bubbles"
                width={600}
                height={600}
                className="rounded-xl md:rounded-2xl shadow-lg w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-3 md:mb-4">Your Certified Speech Language Pathologist</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">Jessica Aleman</h2>
              <p className="text-lg md:text-xl text-[#82b2b7] mb-4 md:mb-6">MSEd, CCC-SLP</p>
              {/* Condensed mobile version */}
              <p className="md:hidden text-gray-600 text-base leading-relaxed">
                I&apos;m Jessica, a Hoboken speech-language pathologist. As a child, I lived with untreated mouth breathing, a tongue tie, and a high, narrow palate, so I know how much foundational care matters. My mission is to provide holistic, compassionate therapy that gets to the root cause of speech, feeding, and oral development issues, and to partner with families on a clear, careful path to helping their children thrive.
              </p>
              {/* Full desktop version */}
              <p className="hidden md:block text-gray-600 text-base md:text-lg leading-relaxed">
                I&apos;m Jessica, a Hoboken speech-language pathologist dedicated to helping children and families thrive. My work is personal: as a child, I experienced untreated mouth breathing, a tongue thrust, a high, narrow palate, and a tongue tie, and later needed a palate expander, tongue tie release, and septoplasty. Those early struggles shape my mission today, to provide holistic, compassionate therapy that gets to the root cause of speech, feeding, and oral development issues, and to partner with families on a clear, careful path toward helping their children thrive.
              </p>
            </div>
          </div>

          {/* Quick nav pills band */}
          <div className="mt-10 md:mt-14 pt-8 md:pt-10 border-t border-gray-100 flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-10">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <p className="text-[11px] md:text-xs uppercase tracking-widest text-gray-500 md:whitespace-nowrap">Services</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Feeding Therapy', href: '#service-feeding' },
                  { label: 'Speech & Language', href: '#service-speech' },
                  { label: 'Sleep Intervention', href: '#service-sleep' },
                  { label: 'TOTs Support', href: '#service-tots' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-block bg-white border border-[#82b2b7]/40 text-[#82b2b7] hover:bg-[#82b2b7] hover:text-white transition rounded-full px-4 py-1.5 text-xs md:text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-200" />
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
              <p className="text-[11px] md:text-xs uppercase tracking-widest text-gray-500 md:whitespace-nowrap">Areas I Travel To</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Hoboken', href: '#zone-hoboken' },
                  { label: 'Jersey City', href: '#zone-jersey-city' },
                  { label: 'Weehawken', href: '#zone-weehawken' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-block bg-[#f5f0eb] border border-transparent text-gray-700 hover:bg-[#82b2b7] hover:text-white transition rounded-full px-4 py-1.5 text-xs md:text-sm font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="process" className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 text-center mb-8 md:mb-12">What to Expect</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#82b2b7] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-light mx-auto mb-3 md:mb-4">1</div>
              <h3 className="text-base md:text-xl font-medium text-gray-800 mb-2 md:mb-3">Free Phone Consultation</h3>
              <p className="text-gray-600 text-xs md:text-base">
                This initial phone call is an opportunity for you to share your concerns about your child.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#82b2b7] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-light mx-auto mb-3 md:mb-4">2</div>
              <h3 className="text-base md:text-xl font-medium text-gray-800 mb-2 md:mb-3">In-Person Evaluation</h3>
              <p className="text-gray-600 text-xs md:text-base">
                A thorough one-hour, in-home assessment including oral mechanism exam and feeding observation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#82b2b7] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-light mx-auto mb-3 md:mb-4">3</div>
              <h3 className="text-base md:text-xl font-medium text-gray-800 mb-2 md:mb-3">Treatment Plan</h3>
              <p className="text-gray-600 text-xs md:text-base">
                Individualized therapy sessions for 30-45 minutes at home, daycare or virtually.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#82b2b7] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-light mx-auto mb-3 md:mb-4">4</div>
              <h3 className="text-base md:text-xl font-medium text-gray-800 mb-2 md:mb-3">Care Team</h3>
              <p className="text-gray-600 text-xs md:text-base">
                Referrals to dentists, ENT physicians, orthodontists, and occupational therapists as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 text-center mb-8 md:mb-12">What Parents Are Saying</h2>
          <VideoTestimonials />
          <div className="mt-12 md:mt-16">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-us" className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] text-center mb-3 md:mb-4">Safety & Comfort Come First</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 text-center mb-4 md:mb-6">
            Let&apos;s turn tiny struggles into big milestones!
          </h2>
          <p className="text-gray-600 text-center text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Tell me a little about your child and what you&apos;re hoping to work on. I&apos;ll share some simple, free tips to help you get started.
          </p>

          <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Therapy Services */}
      <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-[#82b2b7] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-center mb-3 md:mb-4">Therapy Services</h2>
          <p className="text-center text-base md:text-xl opacity-90 mb-8 md:mb-12">
            I am committed to helping your child thrive. My services are tailored to meet their unique needs, creating a path to healthy communication and development.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {/* Feeding Therapy */}
            <div id="service-feeding" className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm scroll-mt-24">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Feeding Therapy</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Starting Solids:</strong> Guidance for a smooth transition to solid foods.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Picky Eating:</strong> Strategies to make mealtimes less stressful and more enjoyable.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Chewing & Swallowing Difficulties:</strong> Support for specific oral-motor challenges.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Specialized Bottle Feeding (SOFFI® Certified):</strong> An evidence-based, infant-guided approach for infants with complex medical needs, reflux, or feeding transitions.</span>
                </li>
              </ul>
            </div>

            {/* Speech & Language Therapy */}
            <div id="service-speech" className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm scroll-mt-24">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Speech & Language Therapy</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Early Intervention:</strong> Specialized support for children from ages 0 to 3 who show signs of speech or language delays.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Articulation & Motor Speech Disorders:</strong> Helping children produce sounds correctly and clearly. I am PROMPT-trained, using this specialized, hands-on approach to guide your child&apos;s speech movements.</span>
                </li>
              </ul>
            </div>

            {/* Sleep Intervention */}
            <div id="service-sleep" className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm scroll-mt-24">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Sleep Intervention</h3>
              <p className="mb-3 md:mb-4 opacity-90 text-sm md:text-base">If you&apos;re concerned about your child&apos;s sleep, I can help with signs like these:</p>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Difficulty staying asleep or tossing and turning.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Waking up sweaty or drooling on the pillow.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Snoring</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Sleep talking and/or sleep walking.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>Sleeping with arms and/or head extended.</span>
                </li>
              </ul>
            </div>

            {/* TOTs Support */}
            <div id="service-tots" className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm scroll-mt-24">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Tethered Oral Tissues (TOTs) Support</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>I focus on improving the function of speech, feeding, and oral rest posture.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>I provide therapeutic support before and after a frenectomy to ensure your child can use their tongue effectively.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span>I collaborate with other providers to ensure a comprehensive care plan. I do not diagnose or perform frenectomies.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="service-area" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Local, In-Home Therapy</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-3 md:mb-4">Serving Local Families</h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Individualized, in-home therapy for families in Hoboken and its immediate neighbors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                id: 'zone-hoboken',
                city: 'Hoboken',
                zone: 'All of Hoboken',
                detail: 'Full coverage across every neighborhood.',
              },
              {
                id: 'zone-jersey-city',
                city: 'Jersey City',
                zone: 'East Side of The Heights & Newport',
                detail: 'Serving families along the waterfront and Heights.',
              },
              {
                id: 'zone-weehawken',
                city: 'Weehawken',
                zone: 'South Weehawken',
                detail: 'Waterfront and Port Imperial families.',
              },
            ].map((loc) => (
              <div
                key={loc.city}
                id={loc.id}
                className="group bg-[#f5f0eb] rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-md transition border border-transparent hover:border-[#82b2b7]/30 scroll-mt-24"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#82b2b7] transition">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#82b2b7] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-gray-800">{loc.city}</h3>
                    <p className="text-[#82b2b7] text-sm md:text-base font-medium mb-2">{loc.zone}</p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{loc.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-[#f5f0eb] rounded-2xl sm:rounded-full px-6 py-4 sm:py-3 md:py-4">
              <p className="text-gray-700 text-sm md:text-base">
                Not sure if you&apos;re in my zone?
              </p>
              <Link
                href="#contact-us"
                className="inline-block bg-[#82b2b7] text-white px-5 py-2 rounded-full font-medium hover:bg-[#6a9a9f] transition text-xs md:text-sm uppercase tracking-wide"
              >
                Reach Out
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#82b2b7] text-white py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <Image 
            src="/images/logo.png" 
            alt="Jessica's Speech and Feeding Therapy" 
            width={150} 
            height={69}
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/jessicasspeechandfeeding" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
              aria-label="Follow on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <p className="text-xs md:text-sm opacity-80 text-center">
              © {new Date().getFullYear()} Jessica's Speech and Feeding Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
