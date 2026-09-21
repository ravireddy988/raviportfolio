import { experience } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="space-y-10">
        {experience.map((job, i) => (
          <FadeIn key={`${job.company}-${job.role}`} delay={i * 0.05}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-text">{job.role}</h3>
                <span className="text-sm text-muted">{job.duration}</span>
              </div>
              <p className="mt-1 text-sm text-accent">{job.company}</p>
              <p className="mt-1 text-sm text-muted">Project: {job.project}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
