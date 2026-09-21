import { helpWith } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function HelpWith() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Freelance" title="What I Can Help With" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {helpWith.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-5">
              <h3 className="text-sm font-semibold text-accent">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
