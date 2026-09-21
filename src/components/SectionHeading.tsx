import { FadeIn } from './FadeIn'

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <FadeIn className="mb-10">
      <p className="mb-2 text-sm font-medium tracking-wide text-accent">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    </FadeIn>
  )
}
