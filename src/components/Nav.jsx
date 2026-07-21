import { useState } from 'react'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 bg-cream/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold text-lg tracking-tight">
          niña<span className="text-indigo">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/70 hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
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
        </nav>
      )}
    </header>
  )
}