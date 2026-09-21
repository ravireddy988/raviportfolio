import { caseStudies } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Case Studies" title="Deeper engineering write-ups" />
      <div className="grid gap-6 sm:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <FadeIn key={cs.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 text-base font-semibold text-text">{cs.title}</h3>

              {cs.detail ? (
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">Challenge</p>
                    <ul className="space-y-1 text-muted">
                      {cs.detail.challenge.map((c) => (
                        <li key={c} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">Solution</p>
                    <ul className="space-y-1 text-muted">
                      {cs.detail.solution.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">Result</p>
                    <ul className="space-y-1 text-muted">
                      {cs.detail.result.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <ol className="space-y-1.5 text-sm text-muted">
                  {cs.steps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {step}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
