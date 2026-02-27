import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream-50 flex items-center justify-center px-6">
      <div className="text-center">
        <span className="text-6xl mb-6 block">🌿</span>
        <h1 className="font-display text-4xl text-sage-800 mb-4">Page Not Found</h1>
        <p className="text-sage-600 mb-8">
          Sorry, we couldn&apos;t find what you&apos;re looking for.
        </p>
        <Link 
          href="/"
          className="btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
