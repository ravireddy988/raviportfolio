import { MapPin } from 'lucide-react'
import { profile } from '../data/resume'
import { GmailIcon, LinkedinIcon } from './icons'

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 text-sm text-muted sm:flex-row sm:justify-center sm:gap-4">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-text">
          <GmailIcon size={15} /> Email
        </a>
        <span className="hidden sm:inline">|</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-text">
          <LinkedinIcon size={15} /> LinkedIn
        </a>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1.5">
          <MapPin size={15} /> {profile.location}
        </span>
      </div>
    </footer>
  )
}
