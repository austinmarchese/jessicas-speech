'use client'

import Link from 'next/link'

const categories = [
  {
    title: 'Essential Utensils',
    icon: '🥄',
    items: [
      {
        name: 'Self Feeding Spoons',
        link: 'https://amzn.to/465EfWB',
        desc: 'Perfect for babies starting solids. Mash soft foods right into the utensil and let your baby self-feed—great for learning to bring a utensil to their mouth!',
        note: 'Their first spoon',
      },
      {
        name: 'Baby Spoons and Forks',
        link: 'https://amzn.to/3VgxUCV',
        desc: 'Built-in stoppers prevent putting the utensil too far back. Perfect for practicing intentional poking and scooping.',
        note: 'Next step utensils',
      },
      {
        name: 'Suction Plates & Bowls',
        link: 'https://amzn.to/4nav4ef',
        desc: 'These suction to the table, keeping mealtime a bit more organized. They won\'t stop messy play but will keep most food on the table!',
        note: 'Plates & bowls',
      },
    ],
  },
  {
    title: 'Foundational Drinkware',
    icon: '🥤',
    items: [
      {
        name: 'First Straw Cup',
        link: 'https://amzn.to/482EoMW',
        desc: 'My favorite first straw cup! Gently squeeze the bottle to push liquid into the straw, helping your baby take their very first sips.',
        note: 'Straw cup',
      },
      {
        name: 'First Open Cup',
        link: 'https://amzn.to/41y9f04',
        desc: 'Introduce open cup drinking around 6 months. Soft silicone is safe for biting, weighted bottom helps with stability.',
        note: 'Open cup',
      },
    ],
  },
  {
    title: 'The Mealtime Setup',
    icon: '🪑',
    items: [
      {
        name: 'Floor Seat and Booster',
        link: 'https://amzn.to/3VzWDlr',
        desc: 'Affordable and effective floor seat for starting solids. Can also strap to your dining chair so baby can join mealtime.',
        note: 'Floor & booster seat',
      },
      {
        name: 'Toddler High Chair',
        link: 'https://amzn.to/3UW7S7K',
        desc: 'An investment worth every penny! Grows with your child—even adults can sit in it. Adjustable seat and footrest for proper support throughout childhood.',
        note: '18+ months',
      },
    ],
  },
  {
    title: 'Preparing for Solids',
    icon: '🍼',
    items: [
      {
        name: 'Silicone Fruit Teethers',
        link: 'https://amzn.to/4n6WMZn',
        desc: 'Dense teethers that give babies different ways to chew—a must-have before and during introduction of solids.',
        note: 'Teethers',
      },
      {
        name: 'Stick-Shaped Teethers',
        link: 'https://amzn.to/481NwkX',
        desc: 'Easy to grasp and long enough to chew on back gums. Bonus: squeeze purée in the middle, freeze it, and give as a treat!',
        note: 'Long teethers',
      },
    ],
  },
  {
    title: 'Oral Motor Tools',
    icon: '💪',
    items: [
      {
        name: 'TalkTools Sensi',
        link: 'https://amzn.to/45VW5g4',
        desc: 'My go-to for helping babies and toddlers explore their oral cavity. Soft, vibrating tips feel gentle on gums and help desensitize for new textures.',
        note: 'Oral exploration',
      },
      {
        name: 'Red Chewy Tube',
        link: 'https://amzn.to/4gwAKgV',
        desc: 'Great for beginners—helps learn big, foundational chewing motions. Perfect for building initial jaw strength.',
        note: 'Beginner chewing',
      },
      {
        name: 'Yellow Chewy Tube',
        link: 'https://amzn.to/3V6eLn4',
        desc: 'For more refined and defined chewing. Smaller than the red tube, perfect for building precise chewing skills.',
        note: 'Advanced chewing',
      },
    ],
  },
]

export default function FeedingTools() {
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
            <Link href="/resources" className="text-sage-600 hover:text-sage-800 transition text-sm font-medium">Resources</Link>
            <Link href="/feeding-tools" className="text-sage-800 font-semibold text-sm">Feeding Tools</Link>
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
            Curated Recommendations
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-sage-800 leading-tight mb-6">
            Favorite Feeding Tools
          </h1>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Navigating the world of feeding tools can be overwhelming. I&apos;ve personally curated this list of go-to products that I use and trust in my practice.
          </p>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {categories.map((category, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="font-display text-2xl text-sage-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, j) => (
                    <a 
                      key={j}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-cream-50 rounded-2xl p-6 border border-sage-200/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <p className="text-sage-400 text-xs uppercase tracking-wider mb-2">{item.note}</p>
                      <h3 className="font-display text-lg text-sage-800 group-hover:text-sage-600 transition mb-3">
                        {item.name}
                      </h3>
                      <p className="text-sage-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="mt-4 text-sage-500 text-sm font-medium group-hover:text-sage-700 transition">
                        View on Amazon →
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sage-400 text-sm text-center mt-16">
            As an Amazon Affiliate, I earn from qualifying purchases. This helps support my work and allows me to provide you with a curated list of my favorite products.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl mb-6">Need Personalized Guidance?</h2>
          <p className="text-sage-200 mb-8">
            Every child is different. Let&apos;s discuss what tools would work best for your little one.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-sage-700 font-medium rounded-full hover:bg-cream-100 transition-all duration-300">
            Schedule Free Consultation
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
