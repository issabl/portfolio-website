function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 015 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.19C22 6.58 17.52 2 12 2z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/50 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest">
      <span>Designed &amp; built by Niña Issabela Olasiman © {new Date().getFullYear()}</span>
      <span className="text-center">Creating digital experiences through technology, creativity, and purpose.</span>
      <a
        href="https://github.com/issabl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-cream/50 hover:text-cream transition-colors"
      >
        <GithubIcon />
        github.com/issabl
      </a>
    </footer>
  )
}