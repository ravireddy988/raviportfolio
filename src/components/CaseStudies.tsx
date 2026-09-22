import { AlertTriangle, Lightbulb, TrendingUp } from 'lucide-react'
import { caseStudies } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

const colorClasses = {
  accent: {
    badge: 'bg-accent text-white',
    eyebrow: 'text-accent',
    border: 'border-accent/20 hover:border-accent/50',
    bg: 'bg-accent/5',
  },
  teal: {
    badge: 'bg-teal-500 text-white',
    eyebrow: 'text-teal-500',
    border: 'border-teal-500/20 hover:border-teal-500/50',
    bg: 'bg-teal-500/5',
  },
  'accent-2': {
    badge: 'bg-accent-2 text-white',
    eyebrow: 'text-accent-2',
    border: 'border-accent-2/20 hover:border-accent-2/50',
    bg: 'bg-accent-2/5',
  },
} as const

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-4xl px-4 py-14">
      <SectionHeading eyebrow="Case Studies" title="Deeper engineering write-ups" />
      <div className="grid gap-6 sm:grid-cols-3">
        {caseStudies.map((cs, i) => {
          const c = colorClasses[cs.color]
          return (
            <FadeIn key={cs.title} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border ${c.border} ${c.bg} p-6 transition-all hover:-translate-y-1`}
              >
                <span
                  className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${c.badge}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${c.eyebrow}`}>
                  {cs.eyebrow}
                </p>
                <h3 className="mb-2 text-base font-semibold text-text">{cs.title}</h3>
                <p className="mb-4 text-sm text-muted">{cs.description}</p>

                {cs.detail ? (
                  <div className="flex-1 space-y-4 text-sm">
                    <div>
                      <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text">
                        <AlertTriangle size={13} className={c.eyebrow} /> Problem
                      </p>
                      <ul className="space-y-1 text-muted">
                        {cs.detail.challenge.map((c2) => (
                          <li key={c2} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                            {c2}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text">
                        <Lightbulb size={13} className={c.eyebrow} /> Solution
                      </p>
                      <ul className="space-y-1 text-muted">
                        {cs.detail.solution.map((s) => (
                          <li key={s} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-text">
                        <TrendingUp size={13} className={c.eyebrow} /> Result
                      </p>
                      <ul className="space-y-1 text-muted">
                        {cs.detail.result.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <ol className="flex-1 space-y-1.5 text-sm text-muted">
                    {cs.steps.map((step) => (
                      <li key={step} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                        {step}
                      </li>
                    ))}
                  </ol>
                )}

                {cs.stats && (
                  <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-4">
                    {cs.stats.map((stat) => (
                      <div key={stat.label} className={`rounded-xl ${c.bg} px-3 py-2 text-center`}>
                        <p className={`text-lg font-bold ${c.eyebrow}`}>{stat.value}</p>
                        <p className="text-[11px] text-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
