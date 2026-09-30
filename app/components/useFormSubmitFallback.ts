'use client'

import { useEffect, useRef, type FormEvent } from 'react'

// How long to wait on formsubmit.co before assuming it hung.
const FALLBACK_AFTER_MS = 10000

// If the native POST to formsubmit.co hasn't navigated away after a while, send the
// full submission to our Slack backup route and move the visitor to the thank-you page.
export function useFormSubmitFallback() {
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const clear = () => clearTimeout(timer.current)
    // Leaving the page means formsubmit.co responded, so the backup isn't needed.
    window.addEventListener('pagehide', clear)
    return () => {
      clear()
      window.removeEventListener('pagehide', clear)
    }
  }, [])

  return (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const fields = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)])
    )
    const nextUrl = fields._next || '/thank-you'

    clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      try {
        await fetch('/api/form-fallback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fields),
          keepalive: true,
        })
      } catch {
        // Nothing more we can do client-side; still move them along.
      }
      // Stay on the current origin so this also works on previews and localhost.
      const next = new URL(nextUrl, window.location.origin)
      window.location.href = next.pathname + next.search
    }, FALLBACK_AFTER_MS)
  }
}
