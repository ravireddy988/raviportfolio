import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/resume'
import { projectFilters, projects } from '../data/resume'
import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full w-72 shrink-0 snap-start rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lg hover:shadow-accent/10 sm:w-80"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-base font-semibold text-text">{project.title}</h4>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      <span className="mt-4 inline-block text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
        View Case Study →
      </span>
    </Link>
  )
}

export function Projects() {
  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('All')
  const scrollerRef = useRef<HTMLDivElement>(null)

  const filteredRest = useMemo(
    () => (filter === 'All' ? rest : rest.filter((p) => p.category === filter)),
    [filter, rest],
  )

  const scrollByCard = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Selected Work" title="Products, platforms and engineering work" />
      <FadeIn delay={0.05} className="-mt-6 mb-10 max-w-2xl text-sm text-muted">
        A selection of products, platforms, and engineering work I've contributed to across
        frontend development, enterprise applications, and media technology.
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-2xl border border-border bg-surface p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-accent">Featured Project</p>
          <h3 className="mt-2 text-xl font-semibold text-text">{featured.title}</h3>
          <p className="mt-1 text-muted">{featured.tagline}</p>
          {featured.highlight && (
            <p className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm text-muted">
              {featured.highlight}
            </p>
          )}
          {featured.architectureFlow && (
            <p className="mt-4 overflow-x-auto whitespace-nowrap font-mono text-xs text-muted">
              {featured.architectureFlow}
            </p>
          )}
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
              View Case Study <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            {featured.confidential && (
              <span className="inline-flex items-center rounded-full border border-border px-5 py-2 text-sm text-muted">
                Enterprise Project — Confidential
              </span>
            )}
          </div>
        </div>
      </FadeIn>

      <div className="mb-6 mt-16 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">Other Projects</h3>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  filter === f
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border text-muted hover:border-accent hover:text-text'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Scroll left"
              className="rounded-full border border-border p-1.5 text-muted transition-colors hover:border-accent hover:text-text"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Scroll right"
              className="rounded-full border border-border p-1.5 text-muted transition-colors hover:border-accent hover:text-text"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pt-2 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredRest.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06} className="shrink-0">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg via-bg/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg via-bg/80 to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
