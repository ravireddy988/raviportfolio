import { Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { profile } from '../data/resume'
import { GithubIcon, LinkedinIcon } from './icons'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
]

export function Sidebar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const navContent = (
    <>
      <div>
        <Link to="/" className="text-lg font-semibold tracking-tight text-text">
          {profile.name}
        </Link>
        <p className="mt-1 text-xs text-muted">{profile.role}</p>
      </div>

      <nav className="mt-10 flex flex-1 flex-col gap-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-text"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto space-y-4">
        <a
          href="/resume.pdf"
          className="block rounded-full border border-border px-4 py-2 text-center text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-muted">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-text">
              <LinkedinIcon size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-text">
              <GithubIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-text">
              <Mail size={18} />
            </a>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-text"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <header className="flex items-center justify-between border-b border-border bg-bg/80 px-4 py-3 backdrop-blur-md md:hidden">
        <Link to="/" className="text-base font-semibold text-text">
          {profile.name}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="text-muted"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {open && (
        <div className="flex flex-col border-b border-border bg-bg px-4 py-6 md:hidden">
          {navContent}
        </div>
      )}

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-border bg-bg px-6 py-8 md:flex">
        {navContent}
      </aside>
    </>
  )
}
