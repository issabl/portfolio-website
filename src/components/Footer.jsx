export default function Footer() {
  return (
    <footer className="bg-ink text-cream/50 px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-widest">
      <span>Designed &amp; built by Niña Issabela Olasiman © {new Date().getFullYear()}</span>
      <span>Creating digital experiences through technology, creativity, and purpose.</span>
    </footer>
  )
}
