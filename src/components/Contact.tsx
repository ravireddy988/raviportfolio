import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/resume'
import { FadeIn } from './FadeIn'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 text-center">
      <FadeIn>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Have a project or frontend challenge?
          <br />
          Let's discuss how I can help.
        </h2>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to Full-Time · Contract · Freelance Opportunities
        </span>

        <div className="mt-8 flex flex-col items-center gap-3 text-muted sm:flex-row sm:justify-center sm:gap-6">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-text">
            <Mail size={16} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-text">
            <Phone size={16} /> {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-text">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-text">
            <GithubIcon size={16} /> GitHub
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {profile.location}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Let's Work Together
          </a>
          <a
            href="/resume.pdf"
            className="inline-block rounded-full border border-border px-6 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
