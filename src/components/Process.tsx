import { process } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Process() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Freelance" title="How I Work" />
      <div className="space-y-4">
        {process.map((item, i) => (
          <FadeIn key={item.step} delay={i * 0.05}>
            <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="text-lg font-semibold text-accent">{item.step}</span>
              <div>
                <h3 className="text-sm font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
