const TOTAL = 10

export default function SkillRow({ name, level, accent = 'var(--color-indigo)', textClass = 'text-ink/70 group-hover:text-ink' }) {
  return (
    <div className="flex items-center gap-4 py-2 group">
      <span className={`font-mono text-[13px] w-36 shrink-0 transition-colors ${textClass}`}>
        {name}
      </span>
      <div className="flex gap-[3px]">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <div
            key={i}
            className="w-[9px] h-[9px] rounded-[2px] transition-colors duration-300"
            style={{
              background: i < level ? accent : 'var(--color-line)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
