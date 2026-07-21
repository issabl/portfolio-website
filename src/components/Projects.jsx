const PROJECTS = [
  {
    tag: 'Current · Capstone',
    title: 'CORELINE',
    subtitle: 'College of Education Information System',
    role: 'Capstone Team Leader & Front-End Developer',
    desc: 'A role-based platform for Dean, Chair, Faculty, Student, and Alumni users — streamlining approvals, announcements, reporting, and a public CMS-driven landing page.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    accent: 'bg-indigo',
  },
  {
    tag: 'Client work',
    title: 'Sidlak',
    subtitle: 'Official organization website',
    role: 'Front-End Developer',
    desc: 'Converted Figma designs into responsive, production-ready interfaces, working alongside a development team through to launch at sidlak.ph.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    accent: 'bg-coral',
  },
  {
    tag: 'Project Based · Jun–Aug 2025',
    title: 'Propedad',
    subtitle: 'Web Developer (Project Based)',
    role: 'Web Developer',
    desc: 'Developed responsive websites that improved user experience and performance using TypeScript, HTML, Tailwind CSS, and JavaScript. Translated UI designs from Figma into functional, interactive components, integrated backend services using Node.js and Drizzle ORM, and collaborated using Git for version control and team-based development.',
    stack: ['TypeScript', 'HTML', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Drizzle ORM', 'Git'],
    accent: 'bg-ink',
  },
]

export default function Projects() {
  return (
    <section id="work" className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">Selected work</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">Things I've shipped.</h2>
        </div>

        <div className="grid gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="group grid md:grid-cols-12 gap-6 border border-ink/10 rounded-3xl p-6 md:p-10 hover:border-ink/25 transition-colors"
            >
              <div className="md:col-span-1 flex md:block items-center gap-3">
                <span className={`inline-flex w-9 h-9 rounded-full ${p.accent} text-cream items-center justify-center font-mono text-xs`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink/70 font-semibold">{p.tag}</span>
                <h3 className="font-display font-extrabold text-3xl mt-2">{p.title}</h3>
                <p className="text-ink/70 mt-1">{p.subtitle}</p>
              </div>

              <div className="md:col-span-7">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/70 font-semibold mb-2">{p.role}</p>
                <p className="text-ink/85 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-3 py-1 rounded-full border border-ink/20 text-ink/75 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}