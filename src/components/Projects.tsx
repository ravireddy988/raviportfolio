import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { otherProjects, projects } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const featured = projects.find((p) => p.featured)!

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Featured Project" title={featured.title} />

      <FadeIn delay={0.1}>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-muted">{featured.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
          <ul className="mt-6 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {featured.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={`/projects/${featured.slug}`}
              className="inline-flex items-center gap-1 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Case Study <ArrowUpRight size={16} />
            </Link>
            {featured.confidential && (
              <span className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm text-muted">
                Enterprise Project — Confidential
              </span>
            )}
          </div>
        </div>
      </FadeIn>

      <h3 className="mb-6 mt-16 text-xl font-semibold">Other Projects</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {otherProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.06}>
            <Link
              to={`/projects/${project.slug}`}
              className="block h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <h4 className="text-base font-semibold text-text">{project.title}</h4>
              <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
