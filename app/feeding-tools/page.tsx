import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../components/MobileMenu'

const categories = [
  {
    title: 'Essential Utensils',
    icon: '🥄',
    items: [
      {
        name: 'Self Feeding Spoons',
        link: 'https://www.amazon.com/dp/B0CZHM696T?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0CZHM696T&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
        desc: 'Mash soft foods right into the utensil so baby can self-feed from day one.',
        note: 'First spoon',
      },
    ],
  },
  {
    title: 'Foundational Drinkware',
    icon: '🥤',
    items: [
      {
        name: 'First Straw Cup',
        link: 'https://www.amazon.com/dp/B0FXYD44SY?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0FXYD44SY&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
        desc: 'Gently squeeze the bottle to push liquid up the straw for those first sips.',
        note: 'Straw cup',
      },
      {
        name: 'First Open Cup',
        link: 'https://www.amazon.com/dp/B0B7DXMLBY?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0B7DXMLBY&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
        desc: 'Soft silicone, weighted bottom, safe for teething gums. Ready around 6 months.',
        note: 'Open cup',
      },
    ],
  },
  {
    title: 'The Mealtime Setup',
    icon: '🪑',
    items: [
      {
        name: 'Floor Seat & Booster',
        link: 'https://www.amazon.com/dp/B07NDD9SF9?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B07NDD9SF9&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
        desc: 'Affordable floor seat for starting solids. Straps to a dining chair so baby can join the table.',
        note: 'Floor seat',
      },
      {
        name: 'Toddler High Chair',
        link: 'https://www.amazon.com/dp/B0D5KLGSYS?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0D5KLGSYS&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
        desc: 'Grows with your child. Adjustable seat and footrest for proper support at the table.',
        note: 'High chair',
      },
    ],
  },
  {
    title: 'Preparing for Solids',
    icon: '🍼',
    items: [
      {
        name: 'Silicone Feeder',
        link: 'https://www.amazon.com/dp/B0FQKSRGCW?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0FQKSRGCW&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
        desc: 'Gives babies a safe way to chew and explore textures as they start solids.',
        note: 'Silicone feeder',
      },
    ],
  },
]

export default function FeedingTools() {
  return (
    <main className="min-h-screen bg-white">
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
            <Link href="/feeding-tools" className="text-[#82b2b7] font-semibold">Feeding Tools</Link>
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
              href="/#contact-us"
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
                { href: '/feeding-tools', label: 'Feeding Tools', active: true },
                { href: '/#contact-us', label: 'Get Started' },
              ]}
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-3 md:mb-4">
            Curated Recommendations
          </p>
          <h1 className="text-3xl md:text-5xl font-light text-gray-800 leading-tight mb-4 md:mb-6">
            Favorite Feeding Tools
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The exact products I use and trust with my 1:1 families. Every link matches the picks featured on my Starting Solids page.
          </p>
        </div>
      </section>

      {/* Amazon Storefront Callout */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <a
            href="https://www.amazon.com/shop/jessicasspeec/list/2BAO5C00EXET8?ref_=aipsflist"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl md:rounded-3xl overflow-hidden bg-[#f5f0eb] shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative h-72 md:h-[440px] overflow-hidden">
                <Image
                  src="/images/starting-solids/amazon-favorites.jpg"
                  alt="Jessica holding her favorite feeding tools"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-12 text-center md:text-left">
                <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Shop the Storefront</p>
                <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-3 md:mb-4 leading-tight">
                  Shop All of My Favorites on Amazon
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-5 md:mb-6">
                  Every tool I recommend, in one place. Skip the registry clutter and shop the exact products I use with my families.
                </p>
                <span className="inline-flex items-center justify-center bg-[#82b2b7] text-white px-6 py-3 rounded-full text-sm font-medium uppercase tracking-wide group-hover:bg-[#6a9a9f] transition">
                  Browse My Amazon Storefront →
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Tools Categories */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12 md:space-y-16">
            {categories.map((category, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-800">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {category.items.map((item, j) => (
                    <a
                      key={j}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#82b2b7] mb-2">{item.note}</p>
                      <h3 className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-[#82b2b7] transition mb-3">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <span className="text-[#82b2b7] text-sm font-medium">
                        View on Amazon →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-xs md:text-sm text-center mt-12 md:mt-16 max-w-2xl mx-auto">
            As an Amazon Affiliate, I earn from qualifying purchases. This helps support my work and allows me to provide you with a curated list of my favorite products.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#82b2b7] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-light mb-4 md:mb-6">Need Personalized Guidance?</h2>
          <p className="text-base md:text-lg opacity-95 mb-6 md:mb-8">
            Every child is different. Let&apos;s discuss what tools would work best for your little one.
          </p>
          <Link
            href="/#contact-us"
            className="inline-block bg-white text-[#82b2b7] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-sm uppercase tracking-widest"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#82b2b7] text-white py-6 md:py-8 px-4 md:px-6 border-t border-white/20">
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
              © {new Date().getFullYear()} Jessica&apos;s Speech and Feeding Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
