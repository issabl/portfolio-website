const FACTS = [
  ['Based in', 'Cebu, Philippines'],
  ['Studying', 'BS Information Technology'],
  ['School', 'Cebu Technological University – Argao'],
  ['Graduating', 'May 2027'],
  ['Leading', 'Team Coreline (Capstone)'],
  ['Also into', 'Photography &amp; video editing'],
]

export default function About() {
  return (
    <section id="about" className="px-8 md:px-10 py-20 md:py-18">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-5">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">About</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mt-3">
            Creative on paper,
            <br />
            technical in practice.
          </h2>
        </div>

        <div className="md:col-span-7 space-y-6 text-ink/75 leading-relaxed">
          <p>
            I'm <strong className="text-ink">Niña Issabela S. Olasiman</strong>, currently a
            4th year BS Information Technology student, working toward graduation in
            May 2027. Most of my time goes into leading{' '}
            <strong className="text-ink">Team Coreline</strong>, our capstone project — a
            role-based information system for the College of Education, built with
            React, TypeScript, Tailwind, and Supabase.
          </p>
          <p>
            Outside of code, I shoot and edit photos and video, design event materials for
            campus organizations, and mentor youth through Youth for Christ. I like projects
            where design, technology, and people intersect — and I try to bring the same
            attention to detail to a pixel-perfect UI as I do to a poster or a photo edit.
          </p>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-ink/10">
            {FACTS.map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-ink/45">{k}</dt>
                <dd className="mt-1 font-medium" dangerouslySetInnerHTML={{ __html: v }} />
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}