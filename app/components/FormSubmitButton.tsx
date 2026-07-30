'use client'

export default function FormSubmitButton({
  pending,
  label,
  pendingLabel,
}: {
  pending: boolean
  label: string
  pendingLabel: string
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      aria-busy={pending}
      className="w-full bg-[#82b2b7] text-white py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#6a9a9f] transition uppercase tracking-wider inline-flex items-center justify-center gap-3 disabled:cursor-wait disabled:hover:bg-[#82b2b7]"
    >
      {pending && (
        <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-30" />
          <path d="M12 2a10 10 0 019.54 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )}
      {pending ? pendingLabel : label}
    </button>
  )
}
