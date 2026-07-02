import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from '../components/MobileMenu'
import TestimonialCarousel, { type Testimonial } from '../components/TestimonialCarousel'

const startingSolidsTestimonials: Testimonial[] = [
  {
    stars: 5,
    text: 'We absolutely loved Jessica\'s starting solids class at Krayon Park JC! She is so knowledgeable, warm, and genuinely such a joy to learn from. She explains everything in such a simple, reassuring way and makes you feel totally confident starting solids with your baby. What I love most is how kind and accessible she is even after the class, she really doesn\'t just "teach and go," she stays available and supportive which means so much as a first time mom. You can tell she truly cares about the families she works with. Highly, highly recommend!',
    attribution: 'Zita Quezada · Starting Solids Class',
  },
  {
    stars: 5,
    text: 'Cannot speak highly enough of Jessica! Her passion is so evident and as a fellow SLP it is so refreshing to see. I attended her "Starting Solids" Virtual Class and left with new information that wasn\'t overwhelming. Her suggestions were very doable and approachable and I love her emphasis on "relationships first" at the dinner table! If you are on the fence about working with her do not hesistate! Thank you for the work you are doing Jess. Looking forward to applying what I learned with my 7 month old.',
    attribution: 'Sarah K. Brown · Starting Solids Virtual Class',
  },
  {
    stars: 5,
    text: 'I took Jessica\'s virtual intro to solids class. It was so informative and helpful! It really made starting solids seem less scary. She is very approachable and knowledgeable. Highly recommend taking her class if your child is starting solids!',
    attribution: 'Jessica Kady · Virtual Intro to Solids',
  },
  {
    stars: 5,
    text: 'I am an anxious mom and starting solids was my nightmare. I hate it, but doing it with Jess gives me some so much confidence. She finds ways to help my little guy eat things that are scary (to me) or that he just needs a little help with. I love not just following the latest "insta trends" for guidance, this is 100% expert information. I can\'t say enough great things. Also, my insurance covered it 100%! It\'s a win/win in my book! Thank you Jess for helping ME get through this phase. My son thanks you!',
    attribution: 'Stephanie Renee · 1:1 Coaching',
  },
  {
    stars: 5,
    text: 'Jessica is the best! I was so stressed about starting solids, but she shared product recommendations (like his favorite teether sticks!) to help develop his oral and motor skills in advance. Once I took her Starting Solids webinar, I felt more confident in giving it a go. At first, my son wasn\'t that interested in food and refused a bottle, but after working with Jess, he eventually turned a corner and is thriving with a straw cup. I love sharing photos of my messy eater and still pick her brain. Couldn\'t recommend working with Jess enough!',
    attribution: 'Kayla Pantano · Starting Solids Webinar + 1:1',
  },
  {
    stars: 5,
    text: 'The best in the business! She\'s so knowledge about feeding and makes you feel so comfortable. She has a way of explaining things that make it easy for anyone to understand. Can\'t recommend her enough!',
    attribution: 'Megan C. Larsen · Starting Solids',
  },
  {
    stars: 5,
    text: 'Jessica was great at answering all my questions and left me feeling more confident about starting the solids journey with my baby.',
    attribution: 'Meredith Borum · Starting Solids Class',
  },
  {
    stars: 5,
    text: 'We attended Jessica\'s Solid Starts class in Hoboken and loved it! I brought my 10 month old and she reassured me that everything I\'m doing is correct and to offering small amounts of solids! She explained the difference of gagging/choking which was extremely helpful!! She is my go to for any feeding questions.',
    attribution: 'Marissa Schlein · Hoboken Starting Solids Class',
  },
  {
    stars: 5,
    text: 'We attended Jessica\'s Starting Solids class with our six month old and it was such a wonderful first introduction! Jessica was warm, knowledgable and had everything ready to go so we could feel comfortable we are introducing foods in an age-appropriate manner. She was so attentive to questions and made us feel excited about offering whole foods.',
    attribution: 'Rhyan Truett Murphy · Starting Solids Class',
  },
  {
    stars: 5,
    text: 'I attended Jessica\'s "Starting Solids" class at The Bunny Hive and was so glad I did! I am a first time mom to a 5 month old and have been very anxious about starting solids with my little one, but feel incredibly more prepared and confident now. Jessica provided an incredibly informative "live" demonstration with various food examples, all while answering questions from parents. Her expertise and warm demeanor made this a really great experience!',
    attribution: 'Jessica Barbieri · Bunny Hive Starting Solids Class',
  },
]

const amazonPicks = [
  {
    name: 'Self Feeding Spoons',
    link: 'https://www.amazon.com/dp/B0CZHM696T?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0CZHM696T&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
    desc: 'Mash soft foods right into the utensil so baby can self-feed from day one.',
    note: 'First spoon',
  },
  {
    name: 'Straw Cup',
    link: 'https://www.amazon.com/dp/B0FXYD44SY?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0FXYD44SY&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
    desc: 'Gently squeeze the bottle to push liquid up the straw for those first sips.',
    note: 'Straw cup',
  },
  {
    name: 'Open Cup',
    link: 'https://www.amazon.com/dp/B0B7DXMLBY?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0B7DXMLBY&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
    desc: 'Soft silicone, weighted bottom, safe for teething gums. Ready around 6 months.',
    note: 'Open cup',
  },
  {
    name: 'High Chair',
    link: 'https://www.amazon.com/dp/B0D5KLGSYS?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0D5KLGSYS&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
    desc: 'Grows with your child. Adjustable seat and footrest for proper support at the table.',
    note: 'High chair',
  },
  {
    name: 'Floor Seat',
    link: 'https://www.amazon.com/dp/B07NDD9SF9?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B07NDD9SF9&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
    desc: 'Affordable floor seat for starting solids. Straps to a dining chair so baby can join the table.',
    note: 'Floor seat',
  },
  {
    name: 'Silicone Feeder',
    link: 'https://www.amazon.com/dp/B0FQKSRGCW?linkCode=ssc&tag=onamzjes0fb7b-20&creativeASIN=B0FQKSRGCW&asc_item-id=amzn1.ideas.2BAO5C00EXET8&ref_=aip_sf_list_spv_ons_mixed_d_asin',
    desc: 'Gives babies a safe way to chew and explore textures as they start solids.',
    note: 'Silicone feeder',
  },
]

export default function StartingSolids() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
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
            <Link href="/starting-solids" className="text-[#82b2b7] font-semibold">Starting Solids</Link>
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
                { href: '/starting-solids', label: 'Starting Solids', active: true },
                { href: '/feeding-tools', label: 'Feeding Tools' },
                { href: '/#contact-us', label: 'Get Started' },
              ]}
            />
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative pt-16 md:pt-20">
        <div className="relative h-[380px] md:h-[520px] w-full overflow-hidden">
          <Image
            src="/images/starting-solids/hero-baby.jpg"
            alt="Baby experiencing real food during a starting solids session"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center max-w-3xl">
              <p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.25em] mb-3 md:mb-4">Baby-Led Weaning · Purees · Allergens</p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 md:mb-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                Starting Solids with Confidence
              </h1>
              <p className="text-white/95 text-base md:text-xl leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                Learn how to prevent choking, introduce allergens, and raise a happy, independent eater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-Person + Virtual Classes */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Classes & Coaching</p>
            <h2 className="text-2xl md:text-4xl font-light text-gray-800">Starting Solids Classes</h2>
            <p className="text-gray-600 text-base md:text-lg mt-3 md:mt-4 max-w-2xl mx-auto">
              Learn in person in Hoboken and Jersey City Heights, or join from anywhere with virtual coaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Hoboken - Bunny Hive */}
            <div className="group rounded-2xl overflow-hidden shadow-lg bg-[#f5f0eb] flex flex-col">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/images/starting-solids/bunny-hive.jpg"
                  alt="Jessica teaching a Starting Solids class at The Bunny Hive in Hoboken"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-widest text-[#82b2b7] mb-2">In-Person · Hoboken, NJ</p>
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Starting Solids Class</h3>
                <p className="text-gray-600 text-sm md:text-base mb-1"><strong>The Bunny Hive</strong></p>
                <p className="text-gray-500 text-sm mb-3">1001 Bloomfield St, Hoboken</p>
                <p className="text-gray-600 text-sm md:text-base mb-6">Once monthly on Mondays at 1:15 PM</p>
                <a
                  href="https://www.eventbrite.com/e/hoboken-starting-solids-class-parent-baby-6-10-months-tickets-1754134847549?aff=oddtdtcreator&keep_tld=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center bg-[#82b2b7] text-white px-5 py-3 rounded-full font-medium hover:bg-[#6a9a9f] transition text-sm uppercase tracking-wide"
                >
                  Book at The Bunny Hive
                </a>
              </div>
            </div>

            {/* Jersey City - Hudson City Kids */}
            <div className="group rounded-2xl overflow-hidden shadow-lg bg-[#f5f0eb] flex flex-col">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/images/starting-solids/hudson-city.jpg"
                  alt="Starting Solids class at Hudson City Kids in Jersey City Heights"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  style={{ objectPosition: '55% 40%' }}
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-widest text-[#82b2b7] mb-2">In-Person · Jersey City Heights</p>
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Starting Solids Class</h3>
                <p className="text-gray-600 text-sm md:text-base mb-1"><strong>Hudson City Kids</strong></p>
                <p className="text-gray-500 text-sm mb-3">474 Central Ave, JC Heights</p>
                <p className="text-gray-600 text-sm md:text-base mb-6">Once monthly on Tuesdays at 5:30 PM</p>
                <a
                  href="https://hudsoncitykids.as.me/schedule/c31d8a13/appointment/90024016/calendar/13687827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center bg-[#82b2b7] text-white px-5 py-3 rounded-full font-medium hover:bg-[#6a9a9f] transition text-sm uppercase tracking-wide"
                >
                  Book at Hudson City Kids
                </a>
              </div>
            </div>

            {/* Virtual */}
            <div className="group rounded-2xl overflow-hidden shadow-lg bg-[#f5f0eb] flex flex-col">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/images/starting-solids/confident-feeders.jpg"
                  alt="Jessica offering virtual starting solids coaching over video"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-widest text-[#82b2b7] mb-2">Virtual · Anywhere</p>
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">Virtual Starting Solids Coaching</h3>
                <p className="text-gray-600 text-sm md:text-base mb-1"><strong>Live 1:1 Over Video</strong></p>
                <p className="text-gray-500 text-sm mb-3">Book anywhere in the US</p>
                <p className="text-gray-600 text-sm md:text-base mb-6">Same therapist-recommended strategies, delivered live over video with real-time feedback at the highchair.</p>
                <Link
                  href="/#contact-us"
                  className="mt-auto inline-block text-center bg-[#82b2b7] text-white px-5 py-3 rounded-full font-medium hover:bg-[#6a9a9f] transition text-sm uppercase tracking-wide"
                >
                  Book Virtual Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confident Feeders Program */}
      <section className="bg-[#82b2b7] text-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-1 md:order-1 max-w-xs sm:max-w-sm md:max-w-none mx-auto md:mx-0">
            <Image
              src="/images/starting-solids/confident-feeders-1on1.png"
              alt="Jessica coaching a parent 1:1 during a starting solids session"
              width={700}
              height={800}
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="order-2 md:order-2">
            <p className="text-xs md:text-sm uppercase tracking-widest opacity-90 mb-2 md:mb-3">Premium 1:1 Coaching</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 leading-tight">
              The Confident Feeders Program
            </h2>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed mb-5 md:mb-6">
              Personalized 1:1 Starting Solids Coaching for Babies 6–10 Months.
            </p>
            <p className="text-base md:text-lg opacity-95 leading-relaxed mb-6 md:mb-8">
              The Confident Feeders Program is an exclusive, 4-week intensive coaching experience designed to transition your baby to solid foods safely, seamlessly, and joyfully.
            </p>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex gap-3">
                <span className="text-green-200 mt-1">✓</span>
                <p className="text-sm md:text-base opacity-95"><strong>Individualized Meal Plan:</strong> Fully customized to your family, with therapist-recommended texture progression.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-200 mt-1">✓</span>
                <p className="text-sm md:text-base opacity-95"><strong>Feeding Tool Favorites:</strong> Expert-curated highchairs, cups, spoons, and plates so you don&apos;t waste money.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-200 mt-1">✓</span>
                <p className="text-sm md:text-base opacity-95"><strong>Allergen Tracker:</strong> A step-by-step, safe framework to introduce the top high-risk allergens.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-green-200 mt-1">✓</span>
                <p className="text-sm md:text-base opacity-95"><strong>Direct Text Message Access:</strong> Real-time 1:1 text support with me for the full 4 weeks.</p>
              </div>
            </div>
            <Link
              href="/#contact-us"
              className="inline-block bg-white text-[#82b2b7] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition text-sm uppercase tracking-widest"
            >
              Book 1:1 Coaching
            </Link>
          </div>
        </div>
      </section>

      {/* Amazon Favorites */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-[#f5f0eb]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-center">
            <div className="md:col-span-2 text-center md:text-left">
              <div className="relative w-full max-w-[220px] md:max-w-xs mx-auto md:mx-0 mb-6">
                <Image
                  src="/images/starting-solids/amazon-favorites.jpg"
                  alt="Jessica holding her favorite starting solids feeding tools"
                  width={500}
                  height={700}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">Shop the Storefront</p>
              <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-3 md:mb-4">
                Jessica&apos;s Feeding Favorites
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-5 md:mb-6">
                Curated by a feeding specialist. Skip the registry clutter and shop the exact tools I recommend to all my 1:1 families.
              </p>
              <a
                href="https://www.amazon.com/shop/jessicasspeec/list/2BAO5C00EXET8?ref_=aipsflist"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#82b2b7] text-white px-6 py-3 rounded-full font-medium hover:bg-[#6a9a9f] transition text-sm uppercase tracking-wide"
              >
                Browse My Amazon Storefront →
              </a>
            </div>

            <div className="md:col-span-3">
              <div className="grid grid-cols-2 gap-3 md:flex md:gap-5 md:overflow-x-auto md:pb-4 md:scrollbar-hide md:snap-x md:snap-mandatory">
                {amazonPicks.map((pick, i) => (
                  <a
                    key={i}
                    href={pick.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full md:w-72 md:flex-shrink-0 md:snap-start bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-[#82b2b7] mb-2">{pick.note}</p>
                    <h3 className="text-base md:text-xl font-medium text-gray-800 mb-2 group-hover:text-[#82b2b7] transition">
                      {pick.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                      {pick.desc}
                    </p>
                    <span className="text-[#82b2b7] text-xs md:text-sm font-medium">View on Amazon →</span>
                  </a>
                ))}
              </div>
              <p className="hidden md:block text-gray-400 text-xs text-center mt-3">Swipe to see more →</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-[#82b2b7] mb-2 md:mb-3">5-Star Google Reviews</p>
          <h2 className="text-2xl md:text-4xl font-light text-gray-800 mb-8 md:mb-12">What Parents Are Saying</h2>
          <TestimonialCarousel testimonials={startingSolidsTestimonials} />
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
              © {new Date().getFullYear()} Jessica&apos;s Speech and Feeding Therapy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
