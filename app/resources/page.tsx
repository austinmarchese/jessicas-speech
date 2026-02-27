'use client'

import Link from 'next/link'

const books = [
  {
    title: 'Gasp!',
    author: 'Dr. Michael Gelb and Dr. Howard Hindin',
    link: 'https://amzn.to/460wQIe',
    takeaway: 'If left untreated, a child\'s improper breathing and sleep patterns will lead to multiple systemic disorders that affect their health, mood, energy, and focus.',
    howIHelp: 'My services serve as both a preventative and treatment approach to identify and correct these issues early. I can help guide your child to establish proper breathing patterns, which is the foundational step in avoiding these long-term health problems.',
  },
  {
    title: 'Tongue-Tied',
    author: 'Richard Baxter',
    link: 'https://amzn.to/4lTYtsk',
    takeaway: 'A tongue-tie is often the hidden reason behind a child\'s difficulties with nursing, feeding, and speech.',
    howIHelp: 'My therapy provides the specialized assessment and treatment to uncover and resolve the functional issues that can be caused by a suspected tethered oral tissue. I can help you navigate a suspected tongue/lip/cheek tie with a team of other providers.',
  },
  {
    title: 'Nobody Ever Told Me (or My Mother) That!',
    author: 'Diane Bahr',
    link: 'https://amzn.to/45V333y',
    takeaway: 'Good feeding techniques and appropriate mouth activities are essential for your child\'s overall health, well-being, and ultimately, proper speech development.',
    howIHelp: 'By providing proactive support, my work helps guide the optimal facial and oral growth that is essential for a lifetime of healthy eating, breathing, and communication.',
  },
  {
    title: 'Breathe',
    author: 'James Nestor',
    link: 'https://amzn.to/3HGMksO',
    takeaway: 'Breathing is a power switch to your child\'s nervous system, and chronic mouth breathing is actively harming their body.',
    howIHelp: 'My services are crucial for helping a child\'s breathing habits become a source of health, not stress. We can guide their body to use their nose for its intended purpose, which calms the nervous system and improves sleep.',
  },
  {
    title: 'The Dental Diet',
    author: 'Dr. Steven Lin',
    link: 'https://amzn.to/45ZyXM7',
    takeaway: 'Many of the breathing and sleep deficits you see in your child are a direct result of their jaw not developing properly due to a soft, modern diet.',
    howIHelp: 'My therapy addresses the root cause of these issues by providing a treatment plan that includes strengthening the muscles of the face and jaw.',
  },
]

export default function Resources() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-sage-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-sage-700 text-lg font-semibold">Jessica&apos;s Speech & Feeding</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-sage-600 hover:text-sage-800 transition text-sm font-medium">About</Link>
            <Link href="/#services" className="text-sage-600 hover:text-sage-800 transition text-sm font-medium">Services</Link>
            <Link href="/resources" className="text-sage-800 font-semibold text-sm">Resources</Link>
            <Link href="/feeding-tools" className="text-sage-600 hover:text-sage-800 transition text-sm font-medium">Feeding Tools</Link>
            <a href="/#contact" className="btn-primary text-sm !px-6 !py-2.5">
              Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-sage-50/50 to-cream-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sage-500 uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Learn More
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-sage-800 leading-tight mb-6">
            Resources for Parents
          </h1>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Educate yourself with these recommended reads. Each book provides valuable insights into your child&apos;s development.
          </p>
        </div>
      </section>

      {/* Books List */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {books.map((book, i) => (
              <div key={i} className="bg-cream-50 rounded-3xl p-8 border border-sage-200/30">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">📚</span>
                  <div>
                    <a 
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl text-sage-800 hover:text-sage-600 transition"
                    >
                      {book.title}
                    </a>
                    <p className="text-sage-500 text-sm">by {book.author}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5">
                    <p className="text-sage-500 text-xs uppercase tracking-wider mb-2 font-medium">Key Takeaway</p>
                    <p className="text-sage-700 italic leading-relaxed">&ldquo;{book.takeaway}&rdquo;</p>
                  </div>
                  
                  <div className="bg-sage-50 rounded-xl p-5">
                    <p className="text-sage-500 text-xs uppercase tracking-wider mb-2 font-medium">How I Can Help</p>
                    <p className="text-sage-600 leading-relaxed">{book.howIHelp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sage-400 text-sm text-center mt-12">
            I receive a small commission as an Amazon affiliate if you purchase a book through one of the links on this page. Thank you for supporting my work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl mb-6">Ready to Get Started?</h2>
          <p className="text-sage-200 mb-8">
            Schedule a free phone consultation to discuss your child&apos;s needs.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-700 font-medium rounded-full hover:bg-cream-100 transition-all duration-300">
            Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-sage-800 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🌿</span>
          <span className="font-display text-white text-lg">Jessica&apos;s Speech & Feeding</span>
        </div>
        <p className="text-sage-300 text-sm mb-4">
          Hoboken, NJ | Jersey City | Weehawken
        </p>
        <p className="text-sage-400 text-sm">
          © {new Date().getFullYear()} Jessica&apos;s Speech and Feeding Therapy. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
