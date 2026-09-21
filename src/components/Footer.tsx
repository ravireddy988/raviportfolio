import { profile } from '../data/resume'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-sm text-muted sm:flex-row sm:justify-center sm:gap-4">
        <a href={`mailto:${profile.email}`} className="hover:text-text">
          📧 Email
        </a>
        <span className="hidden sm:inline">|</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-text">
          🔗 LinkedIn
        </a>
        <span className="hidden sm:inline">|</span>
        <span>📍 {profile.location}</span>
      </div>
    </footer>
  )
}
