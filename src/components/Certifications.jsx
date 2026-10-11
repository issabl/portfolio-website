import { useState, useEffect, useCallback } from 'react'

const CERTIFICATIONS = [
  {
    issued: 'Oct 4, 2026',
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    desc: 'Student-level credential covering PC assembly, repair and upgrades, preventive maintenance, laptop and mobile device fundamentals, and general and fire safety standards.',
    tag: 'Cisco',
    file: '/certificates/cisco-computer-hardware-basics.pdf',
  },
  {
    issued: 'Oct 3, 2026',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    desc: 'Student-level credential covering online safety, common cyber threats, attacks and vulnerabilities, organizational defense strategies, and cybersecurity career pathways.',
    tag: 'Cisco',
    file: '/certificates/cisco-intro-to-cybersecurity.pdf',
  },
  {
    issued: 'May 16 – Jun 10, 2024',
    title: 'Creative Web Design',
    issuer: 'Call Center Academy',
    desc: '102-hour TESDA-standard program covering HTML markup, CSS document structure and page layout, positioning, transitions, transforms, and animation.',
    tag: 'TESDA',
    file: '/certificates/tesda-creative-web-design.jpg',
    meta: 'NTR No. 202107220063',
  },
]

const TAG_STYLES = {
  Cisco: 'bg-indigo/15 text-indigo border-indigo/30',
  TESDA: 'bg-ink/10 text-ink/80 border-ink/20',
}

const isPdf = (file) => file.toLowerCase().endsWith('.pdf')

function Lightbox({ items, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  const cert = items[index]

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center px-4 md:px-20 py-14"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} certificate`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 text-cream/80 hover:text-cream font-mono text-xs uppercase tracking-widest border border-cream/30 rounded-full px-4 py-2 hover:border-cream/60 transition-colors"
      >
        Close
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous certificate"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream font-mono text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-cream/20 hover:border-cream/50 transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next certificate"
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream font-mono text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-cream/20 hover:border-cream/50 transition-colors"
          >
            ›
          </button>
        </>
      )}

      {isPdf(cert.file) ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-5xl h-full rounded-lg overflow-hidden bg-cream"
        >
          <iframe
            key={cert.file}
            src={`${cert.file}#toolbar=0&navpanes=0`}
            title={`${cert.title} certificate`}
            className="w-full h-full border-0"
          />
        </div>
      ) : (
        <img
          key={cert.file}
          src={cert.file}
          alt={`${cert.title} certificate`}
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 text-cream/60 font-mono text-xs tracking-widest whitespace-nowrap">
        <span className="hidden sm:inline">{cert.title}</span>
        <span className="hidden sm:inline text-cream/30">|</span>
        <span>{index + 1} / {items.length}</span>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = useCallback(() => setActiveIndex(null), [])

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? i : (i + 1) % CERTIFICATIONS.length))
  }, [])

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? i : (i - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length))
  }, [])

  return (
    <section id="certifications" className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">Certifications</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mt-3">
            Credentials &amp; training.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((c, i) => (
            <div
              key={c.title + c.issuer}
              className="flex flex-col gap-4 p-6 border border-ink/20 rounded-2xl hover:border-ink/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink/55 font-semibold">
                  {c.issued}
                </span>
                <span className={`shrink-0 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${TAG_STYLES[c.tag] || 'bg-ink/10 text-ink/70 border-ink/20'}`}>
                  {c.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-ink leading-snug">
                  {c.title}
                </h3>
                <p className="text-ink/55 text-sm mt-0.5">{c.issuer}</p>
                {c.meta && (
                  <p className="font-mono text-[11px] text-ink/45 mt-1">{c.meta}</p>
                )}
              </div>

              <p className="text-ink/70 text-sm leading-relaxed">{c.desc}</p>

              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                className="mt-auto pt-4 border-t border-ink/10 w-full inline-flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink/70 hover:text-indigo transition-colors cursor-zoom-in"
              >
                <span>View Certificate</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          items={CERTIFICATIONS}
          index={activeIndex}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  )
}