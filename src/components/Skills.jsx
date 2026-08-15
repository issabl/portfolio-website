const SKILLS = [
  { name: 'HTML', level: 70, color: '#E44D26', icon: 'html' },
  { name: 'React.js', level: 70, color: '#61DAFB', icon: 'react' },
  { name: 'Node.js', level: 60, color: '#3C873A', icon: 'node' },
  { name: 'CSS', level: 80, color: '#264DE4', icon: 'css' },
  { name: 'Next.js', level: 60, color: '#FFFFFF', icon: 'next' },
  { name: 'Tailwind CSS', level: 80, color: '#38BDF8', icon: 'tailwind' },
  { name: 'JavaScript', level: 70, color: '#F0DB4F', icon: 'js' },
  { name: 'TypeScript', level: 70, color: '#3178C6', icon: 'ts' },
  { name: 'Git', level: 80, color: '#F1502F', icon: 'git' },
]

const SOFTWARE = [
  { name: 'Figma', level: 60, color: '#F24E1E', icon: 'figma' },
  { name: 'Canva', level: 75, color: '#00C4CC', icon: 'canva' },
  { name: 'Lightroom', level: 75, color: '#31A8FF', icon: 'lightroom' },,
]

function Icon({ type, color }) {
  const base = 'w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm'
  switch (type) {
    case 'html':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M2 2l1.8 20L12 24l8.2-2L22 2H2zm16.1 6.3H8.3l.2 2.4h9.4l-.7 7.5-5.2 1.5v-2.1l3.2-.9.3-3.1H7.9L7.3 6h10.9l-.1 2.3z"/>
          </svg>
        </span>
      )
    case 'css':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M2 2l1.8 20L12 24l8.2-2L22 2H2zm15.9 6.3H8.2l.2 2.3h9.3l-.7 8-4.9 1.4-5-1.4-.3-3.5h2.3l.2 1.8 2.8.8 2.8-.8.3-3.1H7.6l-.7-7.8h11.2l-.2 2.3z"/>
          </svg>
        </span>
      )
    case 'js':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#1a1a1a' }}>
          JS
        </span>
      )
    case 'ts':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          TS
        </span>
      )
    case 'react':
      return (
        <span className={base} style={{ backgroundColor: '#1a1a2e' }}>
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={color} strokeWidth="1">
            <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke={color} strokeWidth="1"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke={color} strokeWidth="1" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke={color} strokeWidth="1" transform="rotate(120 12 12)"/>
            <circle cx="12" cy="12" r="1.8" fill={color}/>
          </svg>
        </span>
      )
    case 'next':
      return (
        <span className={base} style={{ backgroundColor: '#000' }}>
          <span className="font-display font-black text-white text-sm">N</span>
        </span>
      )
    case 'node':
      return (
        <span className={base} style={{ backgroundColor: '#1a1a2e' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
            <path d="M12 1.5L3 6.5v11L12 22.5l9-5V6.5L12 1.5zm0 2.3l6.7 3.8v7.8L12 19.2l-6.7-3.8V7.6L12 3.8z"/>
          </svg>
        </span>
      )
    case 'tailwind':
      return (
        <span className={base} style={{ backgroundColor: '#0F172A' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
            <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.36.98 1 2.11 2.14 4.6 2.14 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.36C15.62 7.14 14.49 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.36.98 1 2.11 2.14 4.6 2.14 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.36-.98-1-2.11-2.14-4.6-2.14z"/>
          </svg>
        </span>
      )
    case 'git':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M21.6 11.1L12.9 2.4a1.4 1.4 0 00-2 0l-1.8 1.8 2.3 2.3a1.7 1.7 0 012.1 2.1l2.2 2.2a1.7 1.7 0 111 .5l-2.9-2.9v7.6a1.7 1.7 0 11-1.4 0V8.6c-.4-.1-.7-.4-.9-.8L8.9 5.2 2.4 11.7a1.4 1.4 0 000 2l8.7 8.7a1.4 1.4 0 002 0l8.5-8.5a1.4 1.4 0 000-2z"/>
          </svg>
        </span>
      )
    case 'figma':
      return (
        <span className={base} style={{ backgroundColor: '#1a1a2e' }}>
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <circle cx="9" cy="6" r="3" fill="#F24E1E"/>
            <circle cx="15" cy="6" r="3" fill="#FF7262"/>
            <circle cx="9" cy="12" r="3" fill="#A259FF"/>
            <circle cx="9" cy="18" r="3" fill="#1ABCFE"/>
            <circle cx="15" cy="12" r="3" fill="#0ACF83"/>
          </svg>
        </span>
      )
    case 'canva':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <span className="font-display font-black text-sm">C</span>
        </span>
      )
    case 'lightroom':
      return (
        <span className={base} style={{ backgroundColor: '#001B36', color: color }}>
          <span className="font-display font-black text-sm">Lr</span>
        </span>
      )
    case 'excel':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <span className="font-display font-black text-sm">X</span>
        </span>
      )
    case 'word':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <span className="font-display font-black text-sm">W</span>
        </span>
      )
    case 'powerpoint':
      return (
        <span className={base} style={{ backgroundColor: color, color: '#fff' }}>
          <span className="font-display font-black text-sm">P</span>
        </span>
      )
    default:
      return <span className={base} style={{ backgroundColor: color }} />
  }
}

function SkillBar({ skill }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <Icon type={skill.icon} color={skill.color} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-cream font-semibold text-sm">{skill.name}</span>
          <span className="text-cream/60 font-mono text-xs">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-cream/10 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${skill.level}%`,
              background: 'linear-gradient(90deg, var(--color-indigo), #A78BFA)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function ThreeColGrid({ items }) {
  const col1 = items.filter((_, i) => i % 3 === 0)
  const col2 = items.filter((_, i) => i % 3 === 1)
  const col3 = items.filter((_, i) => i % 3 === 2)

  return (
    <div className="grid md:grid-cols-3 gap-x-12 gap-y-2">
      <div>{col1.map((s) => <SkillBar key={s.name} skill={s} />)}</div>
      <div>{col2.map((s) => <SkillBar key={s.name} skill={s} />)}</div>
      <div>{col3.map((s) => <SkillBar key={s.name} skill={s} />)}</div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28 bg-ink text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">My Skills</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
            Technologies I Master
          </h2>
        </div>

        <ThreeColGrid items={SKILLS} />

        <div className="text-center mt-20 mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">Design &amp; Software</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">
            Tools I Work With
          </h2>
        </div>

        <ThreeColGrid items={SOFTWARE} />
      </div>
    </section>
  )
}