import Image from 'next/image'

export default function AwardBadge({ className = 'h-14 md:h-[72px]' }: { className?: string }) {
  return (
    <Image
      src="/images/nj-family-favorite-kids-docs-transparent.png"
      alt="New Jersey Family - NJ's Favorite Kids' Docs award winner"
      width={707}
      height={248}
      // self-start keeps a flex-col parent from stretching the width and skewing the aspect ratio
      className={`w-auto max-w-full self-start ${className}`}
    />
  )
}
