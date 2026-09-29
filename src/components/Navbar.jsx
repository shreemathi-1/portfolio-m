import { useState } from 'react'
import { profile } from '../data/portfolioData'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#highlights', label: 'Highlights' },
  { href: '#contact', label: 'Contact' },    
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container">
        <a href="#top" className="nav-brand">
          <span>{profile.name.split(' ')[0]}.</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
