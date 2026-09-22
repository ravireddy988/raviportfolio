import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { FadeIn } from '../components/FadeIn'
import { projects } from '../data/resume'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/#projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-text">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <FadeIn delay={0.1} className="mt-8">
        <p className="mb-2 text-sm font-medium text-accent">{project.tagline}</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>

        {project.confidential && (
          <p className="mt-4 text-sm text-muted">Enterprise Project — Confidential</p>
        )}
      </FadeIn>

      <FadeIn delay={0.15} className="mt-10">
        <h2 className="mb-3 text-lg font-semibold text-text">Features</h2>
        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </FadeIn>

      {project.architecture && (
        <FadeIn delay={0.2} className="mt-10">
          <h2 className="mb-3 text-lg font-semibold text-text">Architecture</h2>
          <ul className="space-y-2 text-sm text-muted">
            {project.architecture.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {a}
              </li>
            ))}
          </ul>
        </FadeIn>
      )}

      {project.challenge && (
        <FadeIn delay={0.25} className="mt-10 rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-semibold text-text">{project.challenge.title}</h2>
          <p className="text-sm text-muted">
            <span className="font-medium text-text">Problem: </span>
            {project.challenge.problem}
          </p>
          <p className="mt-3 text-sm text-muted">
            <span className="font-medium text-text">Solution: </span>
            {project.challenge.solution}
          </p>
        </FadeIn>
      )}
    </main>
  )
}
