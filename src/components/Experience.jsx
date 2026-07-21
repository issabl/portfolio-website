const TIMELINE = [
  {
    period: 'Jun 2025 – Nov 2025',
    title: 'Front-End Developer',
    org: 'VIRNO IT Consultancy',
    desc: 'Delivered front-end work across two client projects — building responsive UI components, converting Figma designs into interactive interfaces, and integrating backend services with Node.js and Drizzle ORM.',
    tag: 'Development',
  },
  {
    period: 'Nov 2022 – Present',
    title: 'Sector Youth Head',
    org: 'CFC Youth for Christ',
    desc: 'Leading and mentoring 100+ youth members across chapters, organizing conferences and leadership training.',
    tag: 'Leadership',
  },
  {
    period: '2025 Season',
    title: 'Official Photographer',
    org: 'CESAFI Season 22',
    desc: 'Covered live collegiate sporting events for CESAFI Season 22, capturing key game moments and athlete coverage for official media use.',
    tag: 'Photography',
  },
  {
    period: 'Oct 2024 – Present',
    title: 'Photojournalist',
    org: 'Southern Ripples Publication',
    desc: 'Documented 30+ campus events, collaborating with writers and layout artists on visual storytelling.',
    tag: 'Photography',
  },
  {
    period: '2019 – 2022',
    title: 'Photojournalist',
    org: 'Josenian Premiere — USJ-R Senior High School Publication',
    desc: 'Served as photojournalist for four years, documenting school events, features, and campus life for the official senior high school publication.',
    tag: 'Photography',
  },
  {
    period: 'May 16 – Jun 10, 2024',
    title: 'Creative Web Design NC III',
    org: 'TESDA',
    desc: 'Completed a 102-hour training program in Creative Web Design, covering front-end fundamentals and web layout design principles.',
    tag: 'Certification',
  },
]

const TAG_STYLES = {
  Development: 'bg-indigo/15 text-indigo',
  Leadership: 'bg-coral/15 text-coral',
  Photography: 'bg-lime/20 text-lime-700',
  Certification: 'bg-ink/10 text-ink/80',
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">Experience</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mt-3">
            Where I've put in the work.
          </h2>
        </div>

        <div className="md:col-span-8">
          {TIMELINE.map((t) => (
            <div
              key={t.title + t.org + t.period}
              className="grid md:grid-cols-12 gap-2 md:gap-6 py-7 border-t border-ink/10 first:border-t-0 md:first:border-t"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-[12px] uppercase tracking-wide text-ink/60 font-semibold block">
                  {t.period}
                </span>
                <span className={`mt-2 inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${TAG_STYLES[t.tag] || 'bg-ink/10 text-ink/70'}`}>
                  {t.tag}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display font-bold text-xl text-ink">
                  {t.title} <span className="text-ink/55 font-body font-normal">— {t.org}</span>
                </h3>
                <p className="text-ink/75 mt-2 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}