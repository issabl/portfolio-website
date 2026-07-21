import PixelGrid from './PixelGrid'

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-ink/10 px-6 md:px-10 py-24 md:py-32 overflow-hidden bg-ink text-cream">
      <div className="max-w-6xl mx-auto relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-lime">Contact</span>
        <h2 className="font-display font-extrabold text-[11vw] md:text-6xl leading-[0.95] mt-4 max-w-3xl">
          Let's build something people love using.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:shashaolasiman@gmail.com"
            className="bg-lime text-ink font-mono text-xs uppercase tracking-wide px-6 py-4 rounded-full hover:bg-cream transition-colors"
          >
            shashaolasiman@gmail.com
          </a>
          <a
            href="tel:+639945955815"
            className="border border-cream/25 font-mono text-xs uppercase tracking-wide px-6 py-4 rounded-full hover:border-cream transition-colors"
          >
            0994 5955 815
          </a>
        </div>

        <p className="font-mono text-xs uppercase tracking-widest text-cream/40 mt-10">
          Cebu, Philippines · Open to internships &amp; freelance projects
        </p>
      </div>

      <PixelGrid
        cols={16}
        rows={7}
        size={11}
        gap={4}
        speed={700}
        className="hidden md:grid absolute -right-4 -bottom-4 opacity-70"
      />
    </section>
  )
}
