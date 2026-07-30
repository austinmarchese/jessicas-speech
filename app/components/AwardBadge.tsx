import Image from 'next/image'

export default function AwardBadge({ className = 'h-14 md:h-[72px]' }: { className?: string }) {
  return (
    <Image
      src="/images/nj-family-favorite-kids-docs-transparent.png"
      alt="New Jersey Family - NJ's Favorite Kids' Docs award winner"
      width={707}
      height={248}
      className={`${className} w-auto`}
    />
  )
}
