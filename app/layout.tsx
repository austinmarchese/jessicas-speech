import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jessicaspeechandfeeding.com'),
  title: {
    default: 'Hoboken Pediatric In-Home Speech and Feeding Therapy | Jessica\'s Speech and Feeding',
    template: '%s | Jessica\'s Speech and Feeding'
  },
  description: 'Holistic, compassionate speech and feeding therapy in Hoboken, NJ. In-home pediatric therapy for feeding challenges, speech delays, tongue ties, picky eating, and more. SOFFI® Certified, PROMPT-trained Speech-Language Pathologist serving Hoboken, Jersey City, and Weehawken.',
  keywords: [
    'speech therapy Hoboken',
    'feeding therapy Hoboken', 
    'pediatric speech therapist',
    'in-home speech therapy',
    'tongue tie therapy',
    'picky eating help',
    'toddler speech delay',
    'Jersey City speech therapy',
    'Weehawken speech therapist',
    'SOFFI certified',
    'PROMPT trained',
    'feeding specialist',
    'pediatric feeding therapy',
    'speech language pathologist NJ',
    'early intervention speech',
    'articulation therapy',
    'language delay therapy'
  ],
  authors: [{ name: 'Jessica\'s Speech and Feeding Therapy' }],
  creator: 'Jessica\'s Speech and Feeding Therapy',
  publisher: 'Jessica\'s Speech and Feeding Therapy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jessicaspeechandfeeding.com',
    siteName: 'Jessica\'s Speech and Feeding Therapy',
    title: 'Hoboken Pediatric In-Home Speech and Feeding Therapy',
    description: 'Holistic, compassionate speech and feeding therapy in Hoboken. In-home pediatric therapy for feeding challenges, speech delays, and more. SOFFI® Certified, PROMPT-trained.',
    images: [
      {
        url: '/images/headshot.webp',
        width: 1200,
        height: 630,
        alt: 'Jessica - Pediatric Speech and Feeding Therapist in Hoboken',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hoboken Pediatric In-Home Speech and Feeding Therapy',
    description: 'Holistic, compassionate speech and feeding therapy in Hoboken. In-home pediatric therapy for feeding challenges, speech delays, and more.',
    images: ['/images/headshot.webp'],
  },
  alternates: {
    canonical: 'https://jessicaspeechandfeeding.com',
  },
  category: 'Health',
  verification: {
    // Add Google Search Console verification if available
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jessicaspeechandfeeding.com',
    name: 'Jessica\'s Speech and Feeding Therapy',
    description: 'Holistic, compassionate in-home speech and feeding therapy for children in Hoboken, Jersey City, and Weehawken. SOFFI® Certified, PROMPT-trained Speech-Language Pathologist.',
    url: 'https://jessicaspeechandfeeding.com',
    telephone: '',
    email: 'jessicaspeechandfeeding@gmail.com',
    image: 'https://jessicaspeechandfeeding.com/images/headshot.webp',
    logo: 'https://jessicaspeechandfeeding.com/images/logo.png',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hoboken',
      addressRegion: 'NJ',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7439905,
      longitude: -74.0323626
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Hoboken',
        '@id': 'https://www.wikidata.org/wiki/Q131436'
      },
      {
        '@type': 'City',
        name: 'Jersey City'
      },
      {
        '@type': 'City',
        name: 'Weehawken'
      }
    ],
    serviceType: [
      'Pediatric Speech Therapy',
      'Feeding Therapy',
      'In-Home Therapy',
      'Tongue Tie Therapy',
      'Early Intervention'
    ],
    sameAs: [
      'https://www.instagram.com/jessicasspeechandfeeding'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#82b2b7" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
