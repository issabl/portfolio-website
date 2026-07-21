const TIMELINE = [
  {
    period: 'Oct 2024 – Present',
    title: 'Photojournalist',
    org: 'Southern Ripples Publication',
    desc: 'Documented 30+ campus events, collaborating with writers and layout artists on visual storytelling.',
    tag: 'Photography',
  },
  {
    period: 'Nov 2022 – Present',
    title: 'Sector Youth Head',
    org: 'CFC Youth for Christ',
    desc: 'Leading and mentoring youth members across the Sibonga–Ginatilan sector, organizing conferences and leadership training in line with CFC Youth for Christs mission of bringing and being Christ wherever we are.',
    tag: 'Leadership',
  },
  {
    period: 'Jun 2025 – Nov 2025',
    title: 'Front-End Developer',
    org: 'VIRNO IT Consultancy',
    desc: 'Delivered front-end work across two client projects — building responsive UI components, converting Figma designs into interactive interfaces, and integrating backend services with Node.js and Drizzle ORM.',
    tag: 'Development',
  },
  {
    period: 'May 16 – Jun 10, 2024',
    title: 'Creative Web Design NC III',
    org: 'TESDA',
    desc: 'Completed a 102-hour training program in Creative Web Design, covering front-end fundamentals and web layout design principles.',
    tag: 'Certification',
  },
  {
    period: '2022 Season',
    title: 'Official Photographer',
    org: 'CESAFI Season 22',
    desc: 'Covered live collegiate sporting events for CESAFI Season 22, capturing key game moments and athlete coverage for official media use.',
    tag: 'Photography',
  },
  {
    period: '2019 – 2020',
    title: 'Photojournalist',
    org: 'The Josenian Premiere — USJ-R Senior High School Publication',
    desc: 'Served as photojournalist for one year, documenting school events, features, and campus life for the official senior high school publication.',
    tag: 'Photography',
  },
]

const TAG_STYLES = {
  Development: 'bg-indigo/15 text-indigo border-indigo/30',
  Leadership: 'bg-coral/15 text-coral border-coral/30',
  Photography: 'bg-lime/20 text-lime-700 border-lime-700/30',
  Certification: 'bg-ink/10 text-ink/80 border-ink/20',
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">Experience</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mt-3">
            Where I've put in the work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {TIMELINE.map((t) => (
            <div
              key={t.title + t.org + t.period}
              className="flex flex-col gap-4 p-6 border border-ink/20 rounded-2xl hover:border-ink/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink/55 font-semibold">
                  {t.period}
                </span>
                <span className={`shrink-0 font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${TAG_STYLES[t.tag] || 'bg-ink/10 text-ink/70 border-ink/20'}`}>
                  {t.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-ink leading-snug">
                  {t.title}
                </h3>
                <p className="text-ink/55 text-sm mt-0.5">{t.org}</p>
              </div>

              <p className="text-ink/70 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}