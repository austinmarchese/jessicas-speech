import Image from 'next/image'
import Link from 'next/link'
import TestimonialCarousel from './components/TestimonialCarousel'
import ContactForm from './components/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white py-3 px-4 md:py-4 md:px-6 flex justify-between items-center shadow-sm fixed top-0 left-0 right-0 z-50">
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
          <Link href="#miss-jessica" className="hover:text-[#82b2b7]">About Me</Link>
          <Link href="#testimonials" className="hover:text-[#82b2b7]">Testimonials</Link>
          <Link href="#contact-us" className="hover:text-[#82b2b7]">Contact Me</Link>
          <Link href="/resources" className="hover:text-[#82b2b7]">Resources</Link>
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
            className="bg-[#82b2b7] text-white px-4 py-2 md:px-6 rounded-full font-medium hover:bg-[#6a9a9f] transition text-xs md:text-sm"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[500px] md:min-h-[722px] flex items-end pt-16 md:pt-20">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '46% 24%' }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 pb-12 md:pb-20 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[63px] font-extrabold leading-tight mb-2">
            <span className="text-[#82b2b7]">The Foundation of Wellness:</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[63px] font-extrabold leading-tight mb-6 md:mb-8">
            <span className="text-[#82b2b7]">breathing, eating, speaking better.</span>
          </h1>
          <Link 
            href="#contact-us"
            className="inline-block bg-white text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold hover:bg-gray-100 transition text-xs md:text-sm uppercase tracking-widest"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-[#82b2b7] text-white py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 opacity-90">Mission Statement</p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
            At Jessica's Speech and Feeding Therapy, my mission is to provide holistic, compassionate therapy that gets to the root cause of speech, feeding, and oral development issues. I partner with families to create a clear and careful path toward helping their children thrive.
          </p>
        </div>
      </section>

      {/* Family-Friendly Hero */}
      <section className="bg-[#f5f0eb] py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-3 md:mb-4">A Family-Friendly, In-Home Approach</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 md:mb-6 leading-tight">
              Providing Answers & Solutions for Your Child
            </h2>
          </div>
          <div className="relative order-1 md:order-2">
            <Image 
              src="/images/hero-teaching.webp" 
              alt="Jessica teaching a child" 
              width={600} 
              height={400}
              className="rounded-xl md:rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* My Personal Journey */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-6 md:mb-8 text-center">My Personal Journey</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            As a speech-language pathologist, I have a deep understanding of the challenges children face when their foundational development is impacted. My personal journey began in childhood when I experienced firsthand the effects of untreated mouth breathing, a tongue thrust, high and narrow palate, a tongue tie, and crowded teeth—from difficulty focusing in school to chronic tiredness.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Despite receiving a palate expander and a tongue tie release as an older child and a septoplasty in adulthood, the experience left a lasting impression on me. I realized that my own attention and learning challenges were likely connected to these early structural deficits.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            This experience revealed the crucial importance of early intervention and education, which is now the driving force behind my practice. My goal is to prevent other children from having to navigate these challenges, offering the proactive support and holistic care that I wish I had received.
          </p>
        </div>
      </section>

      {/* A Holistic Approach */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-6 md:mb-8 text-center">A Holistic Approach</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            I don't just treat a single symptom. I look at your child's entire well-being—from how they sleep and breathe, to their oral-motor development. I also collaborate with other trusted providers (ENT, airway focused dentists, orthodontists) to ensure your child gets comprehensive support for a healthy foundation that lasts a lifetime.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed text-center font-medium">
            If you suspect your child may have a feeding, breathing, or speech challenge, let's connect.
          </p>
        </div>
      </section>

      {/* About Jessica */}
      <section id="miss-jessica" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <Image 
              src="/images/headshot.webp" 
              alt="Jessica Aleman" 
              width={400} 
              height={500}
              className="rounded-xl md:rounded-2xl shadow-lg w-full max-w-sm md:max-w-md mx-auto"
            />
          </div>
          <div>
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-3 md:mb-4">Your Certified Speech Language Pathologist</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">Jessica Aleman</h2>
            <p className="text-lg md:text-xl text-[#82b2b7] mb-4 md:mb-6">MSEd, CCC-SLP</p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              I'm Jessica, a Hoboken speech-language pathologist dedicated to helping children and families thrive. My passion is rooted in a holistic approach that goes beyond addressing a single symptom. I focus on the foundational connections between breathing, eating, and communication to provide your child with a clear path to wellness. With my experience, compassionate guidance, and commitment to continuous learning, I am here to partner with you and your family on this important journey.
            </p>
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
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm">
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
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Speech & Language Therapy</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Language Delay & AAC:</strong> Addressing communication milestones and providing support for augmentative and alternative communication.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300">✓</span>
                  <span><strong>Articulation & Motor Speech Disorders:</strong> Helping children produce sounds correctly and clearly. I am PROMPT-trained, using this specialized, hands-on approach to guide your child's speech movements.</span>
                </li>
              </ul>
            </div>

            {/* Sleep Intervention */}
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-medium mb-4 md:mb-6">Sleep Intervention</h3>
              <p className="mb-3 md:mb-4 opacity-90 text-sm md:text-base">If you're concerned about your child's sleep, I can help with signs like these:</p>
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
            <div className="bg-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 backdrop-blur-sm">
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

      {/* What to Expect */}
      <section id="process" className="py-12 md:py-20 px-4 md:px-6 bg-white">
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

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 text-center mb-8 md:mb-12">What Parents Are Saying</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-us" className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] text-center mb-3 md:mb-4">Safety & Comfort Come First</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 text-center mb-4 md:mb-6">
            Let's turn tiny struggles into big milestones!
          </h2>
          <p className="text-gray-600 text-center text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Tell me a little about your child and what you're hoping to work on. I'll share some simple, free tips to help you get started.
          </p>

          <div className="bg-[#f5f0eb] rounded-xl md:rounded-2xl shadow-lg p-5 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">Serving Local Families</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
            I am proud to provide individualized, in-home therapy to families in Hoboken and its immediate neighbors.
          </p>
          <ul className="text-gray-600 text-base md:text-lg space-y-1 md:space-y-2 mb-4 md:mb-6">
            <li>• All of Hoboken</li>
            <li>• Jersey City: East Side of The Heights and Newport</li>
            <li>• Weehawken: South Weehawken (Waterfront/Port Imperial)</li>
          </ul>
          <p className="text-gray-600 text-sm md:text-base">
            Not sure if you're in my zone? Reach out with your cross-streets!
          </p>
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
