import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feeding Tools & Recommendations',
  description: 'Expert-recommended feeding tools for babies and toddlers. Utensils, cups, plates, and accessories to support your child\'s feeding journey. From Jessica\'s Speech and Feeding Therapy.',
  openGraph: {
    title: 'Feeding Tools & Recommendations | Jessica\'s Speech and Feeding',
    description: 'Expert-recommended feeding tools for babies and toddlers. Utensils, cups, plates, and accessories to support your child\'s feeding journey.',
  },
  alternates: {
    canonical: 'https://jessicasspeechandfeeding.com/feeding-tools',
  },
}

export default function FeedingToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Feeding Tools & Recommendations',
    description: 'Expert-recommended feeding tools for babies and toddlers. Utensils, cups, plates, and accessories to support your child\'s feeding journey.',
    url: 'https://jessicasspeechandfeeding.com/feeding-tools',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Jessica\'s Speech and Feeding Therapy',
      url: 'https://jessicasspeechandfeeding.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
