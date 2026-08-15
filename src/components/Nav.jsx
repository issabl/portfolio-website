import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.19C22 6.58 17.52 2 12 2z"/>
    </svg>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold text-lg tracking-tight">
          niña<span className="text-indigo">.</span>issabela
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/70 hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/issabl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink/70 hover:text-ink transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="#contact"
            className="bg-ink text-cream px-4 py-2 rounded-full hover:bg-indigo transition-colors"
          >
            Let's talk
          </a>
        </nav>

        <button
          className="md:hidden font-mono text-xs uppercase tracking-wide border border-ink/20 rounded-full px-3 py-1.5"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col border-t border-ink/10 bg-cream px-6 py-4 gap-4 font-mono text-sm uppercase tracking-wide">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink/80">
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/issabl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/80"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  )
}