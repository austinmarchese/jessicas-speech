import Image from 'next/image'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#f5f0eb] flex flex-col">
      {/* Header */}
      <header className="bg-white py-3 px-4 md:py-4 md:px-6 flex justify-center items-center shadow-sm">
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Jessica's Speech and Feeding Therapy" 
            width={200} 
            height={92}
            className="h-12 md:h-14 w-auto"
          />
        </Link>
      </header>

      {/* Success Message */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg text-center">
          <div className="w-20 h-20 bg-[#82b2b7] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Thank You!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            I've received your message and will reach out to you shortly!
          </p>
          
          <p className="text-gray-500 mb-8">
            In the meantime, feel free to explore more about my services.
          </p>
          
          <Link 
            href="/"
            className="inline-block bg-[#82b2b7] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6a9a9f] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#82b2b7] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Jessica's Speech and Feeding Therapy. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
