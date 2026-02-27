import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Speech & Feeding Resources',
  description: 'Recommended books on pediatric speech therapy, feeding challenges, tongue ties, and child development. Expert reading list from Jessica\'s Speech and Feeding Therapy in Hoboken.',
  openGraph: {
    title: 'Speech & Feeding Resources | Jessica\'s Speech and Feeding',
    description: 'Recommended books on pediatric speech therapy, feeding challenges, tongue ties, and child development.',
  },
  alternates: {
    canonical: 'https://jessicasspeechandfeeding.com/resources',
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
