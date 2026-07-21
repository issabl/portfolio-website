import { useEffect, useRef, useState } from 'react'

const COLORS = ['transparent', 'var(--color-line)', 'var(--color-indigo)', 'var(--color-lime)', 'var(--color-coral)']

export default function PixelGrid({ cols = 14, rows = 6, className = '', size = 12, gap = 4, speed = 900 }) {
  const [cells, setCells] = useState(() => Array(cols * rows).fill(0))
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setCells((prev) => {
        const next = [...prev]
        const flips = Math.max(1, Math.floor((cols * rows) * 0.06))
        for (let i = 0; i < flips; i++) {
          const idx = Math.floor(Math.random() * next.length)
          next[idx] = Math.floor(Math.random() * COLORS.length)
        }
        return next
      })
    }, speed)
    return () => clearInterval(timer.current)
  }, [cols, rows, speed])

  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gap: `${gap}px`,
      }}
      aria-hidden="true"
    >
      {cells.map((c, i) => (
        <div
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: 3,
            background: COLORS[c],
            transition: 'background 700ms ease',
          }}
        />
      ))}
    </div>
  )
}
