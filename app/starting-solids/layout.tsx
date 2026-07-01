import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Starting Solids Classes & Baby-Led Weaning Help | Hoboken & Jersey City',
  description: 'Learn how to prevent choking, introduce allergens safely, and feed your baby real food. Join Jessica for monthly in-person classes in Hoboken and Jersey City Heights, virtual coaching from anywhere, or apply for the 4-week Confident Feeders 1:1 program.',
  alternates: {
    canonical: 'https://jessicasspeechandfeeding.com/starting-solids',
  },
  openGraph: {
    title: 'Starting Solids Classes & Baby-Led Weaning Help | Hoboken & Jersey City',
    description: 'Monthly in-person Starting Solids classes at The Bunny Hive (Hoboken) and Hudson City Kids (Jersey City Heights), plus virtual coaching and 1:1 Confident Feeders program.',
    url: 'https://jessicasspeechandfeeding.com/starting-solids',
    type: 'website',
    images: [{ url: '/images/starting-solids/hero-baby.jpg', width: 1200, height: 630, alt: 'Baby starting solids with Jessica' }],
  },
}

export default function StartingSolidsLayout({ children }: { children: React.ReactNode }) {
  return children
}
