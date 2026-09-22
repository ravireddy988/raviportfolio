import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { profile } from '../data/resume'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
  { label: 'Freelance', href: '#freelance', id: 'freelance' },
  { label: 'Notes', href: '#engineering-notes', id: 'engineering-notes' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const sectionIds = links.map((link) => link.id)

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-surface p-1">
      <button
        type="button"
        onClick={() => theme !== 'light' && toggleTheme()}
        aria-label="Light theme"
        className={`rounded-full p-1.5 transition-colors ${
          theme === 'light' ? 'bg-accent text-white' : 'text-muted hover:text-text'
        }`}
      >
        <Sun size={14} />
      </button>
      <button
        type="button"
        onClick={() => theme !== 'dark' && toggleTheme()}
        aria-label="Dark theme"
        className={`rounded-full p-1.5 transition-colors ${
          theme === 'dark' ? 'bg-accent text-white' : 'text-muted hover:text-text'
        }`}
      >
        <Moon size={14} />
      </button>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-bg/80 py-3 backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-white">
            R
          </span>
          <span>
            <span className="block text-sm font-semibold leading-tight text-text">{profile.name}</span>
            <span className="block text-xs leading-tight text-muted">{profile.role}</span>
          </span>
        </Link>

        <ul className="hidden gap-4 text-sm lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-text ${
                  activeId === link.id ? 'font-medium text-accent' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeSwitch />
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Let's Talk →
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="text-muted lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-1 border-t border-border px-4 pt-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-2 py-2 text-sm hover:bg-surface-hover hover:text-text ${
                activeId === link.id ? 'font-medium text-accent' : 'text-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <ThemeSwitch />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
