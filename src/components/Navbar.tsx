import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/resume'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Freelance', href: '#freelance' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-md border-b border-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-text">
          {profile.name}
        </Link>
        <ul className="hidden gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          className="rounded-full border border-border px-4 py-1.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
      </nav>
    </header>
  )
}
