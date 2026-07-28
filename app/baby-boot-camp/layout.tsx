import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baby Boot Camp | 2-Week Starting Solids Program for Parents on Leave',
  description:
    'A two-week, live virtual starting solids boot camp for parents on maternity leave with babies 4-10 months. Learn choking vs. gagging, safe food prep, the top 9 allergens, and highchair setup from a feeding-specialist SLP. Small cohorts, apply for the next one.',
  keywords: [
    'starting solids boot camp',
    'baby led weaning course',
    'starting solids class online',
    'maternity leave baby class',
    'introducing solids 6 months',
    'allergen introduction schedule',
    'feeding therapist starting solids',
  ],
  // Unlisted preview page: reachable only by direct link, kept out of search and the sitemap.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: 'https://jessicasspeechandfeeding.com/baby-boot-camp',
  },
  openGraph: {
    title: 'The Baby Boot Camp | 2-Week Starting Solids Program',
    description:
      'Two weeks, one small cohort of parents on maternity leave. Go from "what if she chokes" to a baby who eats real food at your table. Led by a feeding-specialist SLP.',
    url: 'https://jessicasspeechandfeeding.com/baby-boot-camp',
    type: 'website',
    images: [
      {
        url: '/images/starting-solids/hero-baby.jpg',
        width: 1200,
        height: 630,
        alt: 'Baby eating real food during the Starting Solids Baby Boot Camp',
      },
    ],
  },
}

export default function BabyBootCampLayout({ children }: { children: React.ReactNode }) {
  return children
}
