import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book the Starting Solids Class | Hoboken, NJ',
  description: 'Reserve your spot in Jessica\'s next Starting Solids class at The Bunny Hive in Hoboken. Learn how to prevent choking, introduce allergens safely, and feed your baby real food. Book directly below.',
  alternates: {
    canonical: 'https://jessicasspeechandfeeding.com/book-starting-solids',
  },
  openGraph: {
    title: 'Book the Starting Solids Class | Hoboken, NJ',
    description: 'Reserve your spot in Jessica\'s next Starting Solids class at The Bunny Hive in Hoboken.',
    url: 'https://jessicasspeechandfeeding.com/book-starting-solids',
    type: 'website',
    images: [{ url: '/images/starting-solids/hero-baby.jpg', width: 1200, height: 630, alt: 'Baby starting solids with Jessica' }],
  },
}

export default function BookStartingSolidsLayout({ children }: { children: React.ReactNode }) {
  return children
}
