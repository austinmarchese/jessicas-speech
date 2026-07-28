import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../components/MobileMenu'
import ReviewStats from '../components/ReviewStats'
import TestimonialCarousel from '../components/TestimonialCarousel'
import VideoTestimonials from '../components/VideoTestimonials'
import BootCampApplicationForm from '../components/BootCampApplicationForm'
import { startingSolidsTestimonials } from '../data/startingSolidsTestimonials'

const weekOne = [
  {
    t: 'Is my baby actually ready?',
    d: 'The readiness signs that matter (and the ones Instagram made up). We check your baby together, live.',
  },
  {
    t: 'Choking vs. gagging',
    d: 'What each one looks and sounds like, why gagging is normal and protective, and exactly what to do in the moment.',
  },
  {
    t: 'Highchair setup',
    d: 'Hips, feet, and trunk. Good positioning is the biggest safety win there is, and it is an easy one to get right.',
  },
  {
    t: 'Your first foods',
    d: 'How to cut, cook, and serve real food for baby-led weaning, purees, or the mix of both that fits your family.',
  },
]

const weekTwo = [
  {
    t: 'The top 9 allergens',
    d: 'A safe, paced schedule for peanut, egg, dairy, and the rest, plus what a reaction actually looks like.',
  },
  {
    t: 'Cups, straws, and spoons',
    d: 'When to introduce each one and how to teach the skill instead of hoping it clicks.',
  },
  {
    t: 'Textures and progression',
    d: 'How to move forward without stalling at purees, and what to do when your baby refuses or turns away.',
  },
  {
    t: 'Keeping it going',
    d: 'How meals, bottles, and daycare fit together, so solids keep going smoothly whatever comes next for your family.',
  },
]

const included = [
  {
    t: 'Four live sessions',
    d: 'Two per week over video with a small group of parents. Bring your baby, bring your highchair, and ask me anything.',
  },
  {
    t: 'Individualized meal plan',
    d: "Built around your family, your kitchen, and your baby's texture progression. Not a generic PDF.",
  },
  {
    t: 'Allergen tracker',
    d: 'A step-by-step framework for introducing the top high-risk allergens without guessing.',
  },
  {
    t: 'Feeding tool list',
    d: 'The exact highchairs, cups, spoons, and plates I recommend to my 1:1 families, so you can shop with confidence.',
  },
  {
    t: 'Direct text access',
    d: 'Real-time support with me for the full two weeks. Send a photo of the plate, get an answer.',
  },
  {
    t: 'Replays you keep',
    d: 'Every session recorded, because naps do not respect calendars.',
  },
]

const faqs = [
  {
    q: 'What age is this for?',
    a: 'Babies roughly 4 to 10 months. That includes parents who have not started solids yet and want to be ready, and parents a few weeks in who feel stuck.',
  },
  {
    q: 'Is it in person?',
    a: 'No. The boot camp runs live over video so you can join from anywhere in the US, from your own kitchen, in whatever you are wearing.',
  },
  {
    q: 'What if my baby naps through a session?',
    a: 'Every session is recorded and yours to keep. You also have direct text access to me for the full two weeks, so nothing has to wait for the next call.',
  },
  {
    q: 'Why two weeks?',
    a: 'Long enough to build real confidence and see your baby change, short enough to feel doable with a little one at home. Week one gets food safely to the tray. Week two builds the plan you keep using long after we finish.',
  },
  {
    q: 'Why is it an application?',
    a: "I keep each group small so everyone gets plenty of time with me. Applying tells me your baby's age and where you are in the process, so I can put together a group of families who are in the same season.",
  },
  {
    q: 'What happens after I apply?',
    a: 'I read every application myself and write back with the dates for the next cohort, what it costs, and how to save your spot. No sales call, just a friendly note from me.',
  },
]

export default function BabyBootCamp() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              className="h-14 md:h-[5.5rem] w-auto"
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
              href="#apply"
              className="hidden sm:inline-block bg-[#82b2b7] text-white px-4 py-2 md:px-6 rounded-full font-medium hover:bg-[#6a9a9f] transition text-xs md:text-sm"
            >
              Apply Now
            </Link>
            <MobileMenu
              links={[
                { href: '/#miss-jessica', label: 'About Me' },
                { href: '/#testimonials', label: 'Testimonials' },
                { href: '/#contact-us', label: 'Contact Me' },
                { href: '/starting-solids', label: 'Starting Solids' },
                { href: '/feeding-tools', label: 'Feeding Tools' },
                { href: '#apply', label: 'Apply Now' },
              ]}
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 md:pt-20">
        <div className="relative h-[480px] md:h-[560px] w-full overflow-hidden">
          <Image
            src="/images/starting-solids/hero-baby.jpg"
            alt="Baby eating real food during a starting solids session"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-3xl">
              <p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.25em] mb-3 md:mb-4">
                Virtual · 2 Weeks · Small Cohort
              </p>
              <h1
                className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 md:mb-4"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
              >
                The Starting Solids Baby Boot Camp
              </h1>
              <p
                className="text-white/95 text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
              >
                Two weeks, a small group of parents on maternity leave, and a feeding therapist right there with
                you. Together we will get your baby happily eating real food at your table.
              </p>
              <Link
                href="#apply"
                className="inline-block bg-white text-[#6a9a9f] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-sm md:text-base uppercase tracking-widest shadow-lg"
              >
                Apply for the next boot camp
              </Link>
              <p className="text-white/80 text-xs md:text-sm mt-4">
                Babies 4&ndash;10 months · Led by a feeding-specialist SLP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#f5f0eb] py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <ReviewStats />
          <p className="text-gray-600 text-sm md:text-base max-w-2xl">
            Taught by Jessica, MSEd, CCC-SLP. SOFFI&reg; Certified and PROMPT-trained. Hundreds of Hoboken and
            Jersey City families have already learned to start solids in her classes.
          </p>
        </div>
      </section>

      {/* Built for maternity leave */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">
              Made for this season
            </p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
              A gentle place to start, while you are home together
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              These early months at home are such a sweet window. Starting solids can feel like a lot to figure out
              on your own, so let us do it side by side, at a pace that feels good for you and your baby.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
            {[
              {
                t: 'Fits around naps',
                d: 'Short live sessions at baby-friendly hours, all recorded, so a rough nap day never sets you back.',
              },
              {
                t: 'You are in good company',
                d: 'A small group of parents in the exact same season. Whatever you are wondering, someone else is wondering it too.',
              },
              {
                t: 'Two easy weeks',
                d: 'Short and doable. Fourteen days together, a plan that fits your family, and a baby who is enjoying food.',
              },
            ].map((c) => (
              <div key={c.t} className="bg-[#f5f0eb] rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-2">{c.t}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The two weeks */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">The Curriculum</p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800">Fourteen days, start to finish</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div>
              <div className="flex items-baseline gap-3 mb-4 md:mb-6">
                <span className="text-4xl md:text-5xl font-extrabold text-[#82b2b7]">01</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#82b2b7]">Week One</p>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800">Safety and first foods</h3>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                {weekOne.map((item) => (
                  <div key={item.t} className="bg-white rounded-xl p-5 md:p-6 shadow-sm">
                    <h4 className="text-base md:text-lg font-medium text-gray-800 mb-1.5">{item.t}</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-3 mb-4 md:mb-6">
                <span className="text-4xl md:text-5xl font-extrabold text-[#82b2b7]">02</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#82b2b7]">Week Two</p>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800">Allergens, skills, and the plan</h3>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                {weekTwo.map((item) => (
                  <div key={item.t} className="bg-white rounded-xl p-5 md:p-6 shadow-sm">
                    <h4 className="text-base md:text-lg font-medium text-gray-800 mb-1.5">{item.t}</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#82b2b7] text-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-14">
            <div className="relative order-1 max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0">
              <Image
                src="/images/starting-solids/confident-feeders-1on1.png"
                alt="Jessica coaching a parent through a starting solids session"
                width={700}
                height={800}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-2">
              <p className="text-xs md:text-sm uppercase tracking-widest opacity-90 mb-2 md:mb-3">What you get</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 leading-tight">
                Everything my 1:1 families get, in a warm little group
              </h2>
              <p className="text-base md:text-lg opacity-95 leading-relaxed">
                The boot camp takes the heart of my private Confident Feeders program and runs it live with a
                handful of families at once. Same frameworks, same tools, same me. You just get to share the room.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {included.map((item) => (
              <div key={item.t} className="bg-white/15 rounded-2xl p-5 md:p-6">
                <div className="flex gap-3">
                  <span className="text-green-200 mt-0.5">&#10003;</span>
                  <div>
                    <h3 className="font-semibold mb-1 text-base md:text-lg">{item.t}</h3>
                    <p className="text-sm md:text-base opacity-95 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-14">
            <Link
              href="#apply"
              className="inline-block bg-white text-[#6a9a9f] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-sm uppercase tracking-widest shadow-lg"
            >
              Apply for the next boot camp
            </Link>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Real Families</p>
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-8 md:mb-12">
            Hear it from parents who worked with Jessica
          </h2>
          <VideoTestimonials />
        </div>
      </section>

      {/* Written reviews */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">
            5-Star Google Reviews
          </p>
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-8 md:mb-12">
            What parents say after learning solids with Jessica
          </h2>
          <TestimonialCarousel testimonials={startingSolidsTestimonials} />
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Is this a good fit?</p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800">Who this is for</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#f5f0eb] rounded-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">This is for you if</h3>
              <ul className="space-y-3">
                {[
                  'Your baby is roughly 4 to 10 months old.',
                  'You are home with your baby and would love company while you start.',
                  'Choking and allergens feel scary, and you want to feel calm about them.',
                  'You have read a lot online and would love one clear plan you can trust.',
                  'You want guidance built around your baby, not a generic chart.',
                ].map((li) => (
                  <li key={li} className="flex gap-3 text-gray-600 text-sm md:text-base">
                    <span className="text-[#82b2b7] mt-0.5">&#10003;</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg md:text-xl font-medium text-gray-800 mb-4">This might not be the right fit if</h3>
              <ul className="space-y-3">
                {[
                  'Your child is over two and you are dealing with entrenched picky eating.',
                  'Your child has a complex medical feeding history that needs 1:1 evaluation.',
                  'You want a self-paced video course to watch alone.',
                  'You are looking for a single class rather than two weeks of support.',
                ].map((li) => (
                  <li key={li} className="flex gap-3 text-gray-600 text-sm md:text-base">
                    <span className="text-gray-400 mt-0.5">&mdash;</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm mt-5">
                Sound like you?{' '}
                <Link href="/#contact-us" className="text-[#82b2b7] font-medium hover:underline">
                  Message me
                </Link>{' '}
                and I will happily point you toward the right support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Jessica */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2 max-w-[240px] sm:max-w-xs mx-auto md:max-w-none">
            <Image
              src="/images/headshot.webp"
              alt="Jessica, pediatric speech and feeding therapist"
              width={600}
              height={700}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="md:col-span-3">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Your instructor</p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-2">Jessica</h2>
            <p className="text-base md:text-lg text-[#82b2b7] mb-4 md:mb-6">MSEd, CCC-SLP</p>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-4">
              I am a pediatric speech-language pathologist and feeding specialist in Hoboken, NJ. SOFFI&reg;
              Certified and PROMPT-trained, I spend my days in real kitchens with real families, at the highchair,
              at the actual dinner hour.
            </p>
            <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
              I built this boot camp because the same lovely questions came up in every class I taught: is that
              gagging or choking, when do I offer peanut, why will she not take the spoon. Two weeks together gives
              us time to answer all of them, with your baby right there in front of me.
            </p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-12 md:py-20 px-4 md:px-6 bg-white scroll-mt-20 md:scroll-mt-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">
              Applications open
            </p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
              Apply for the next boot camp
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              I keep each group small so everyone gets plenty of time with me. Tell me a little about your baby and
              I will write back with the dates for the next cohort and how to save your spot.
            </p>
          </div>
          <div className="bg-[#f5f0eb] rounded-2xl p-5 md:p-8 shadow-sm">
            <BootCampApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Questions</p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800">Before you apply</h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-xl p-5 md:p-6 shadow-sm">
                <summary className="flex justify-between items-center cursor-pointer list-none text-base md:text-lg font-medium text-gray-800">
                  <span>{f.q}</span>
                  <span className="text-[#82b2b7] ml-4 transition group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#82b2b7] text-white py-6 md:py-8 px-4 md:px-6 pb-24 md:pb-8">
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <p className="text-xs md:text-sm opacity-80 text-center">
              &copy; {new Date().getFullYear()} Jessica&apos;s Speech and Feeding Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur border-t border-gray-200 px-4 py-3">
        <Link
          href="#apply"
          className="block text-center bg-[#82b2b7] text-white py-3 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#6a9a9f] transition"
        >
          Apply for the next boot camp
        </Link>
      </div>
    </main>
  )
}
