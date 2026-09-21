import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/resume'
import { FadeIn } from './FadeIn'
import { GithubIcon, LinkedinIcon } from './icons'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <FadeIn>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Let's build something impactful.
        </h2>
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
        <a
          href="/resume.pdf"
          className="mt-10 inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Download Resume
        </a>
      </FadeIn>
    </section>
  )
}
