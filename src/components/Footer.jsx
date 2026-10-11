function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.19C22 6.58 17.52 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/50 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest">
      <span className="text-center md:text-left">
        Creating digital experiences through technology, creativity, and purpose.
      </span>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <a
          href="https://www.linkedin.com/in/ni%C3%B1a-issabela-olasiman-210558276/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex items-center gap-2 text-cream/50 hover:text-cream transition-colors"
        >
          <LinkedinIcon />
          LinkedIn
        </a>
        <a
          href="https://github.com/issabl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex items-center gap-2 text-cream/50 hover:text-cream transition-colors"
        >
          <GithubIcon />
          github.com/issabl
        </a>
      </div>
    </footer>
  )
}