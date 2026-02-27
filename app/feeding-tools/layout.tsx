import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feeding Tools & Recommendations',
  description: 'Expert-recommended feeding tools for babies and toddlers. Utensils, cups, plates, and accessories to support your child\'s feeding journey. From Jessica\'s Speech and Feeding Therapy.',
  openGraph: {
    title: 'Feeding Tools & Recommendations | Jessica\'s Speech and Feeding',
    description: 'Expert-recommended feeding tools for babies and toddlers. Utensils, cups, plates, and accessories to support your child\'s feeding journey.',
  },
  alternates: {
    canonical: 'https://jessicaspeechandfeeding.com/feeding-tools',
  },
}

export default function FeedingToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
