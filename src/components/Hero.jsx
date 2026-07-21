import PixelGrid from './PixelGrid'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/60 mb-8">
          <span className="w-2 h-2 rounded-full bg-lime border border-ink/20" />
          Available for internships &amp; freelance
        </div>

        <h1 className="font-display font-extrabold leading-[0.92] tracking-tight text-[15vw] md:text-[6.4rem]">
          <span className="relative inline-block">
            Design.
            <span className="hidden md:block absolute -right-8 top-2 rotate-[-6deg] bg-indigo text-cream font-mono text-sm normal-case tracking-normal font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
              Figma &amp; UI systems
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            Build.
            <span className="hidden md:block absolute left-[15rem] -top-1 rotate-[4deg] bg-ink text-cream font-mono text-sm normal-case tracking-normal font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
              React · TypeScript · Node
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            Lead.
            <span className="hidden md:block absolute -right-4 top-4 rotate-[-4deg] bg-coral text-cream font-mono text-sm normal-case tracking-normal font-medium px-4 py-1.5 rounded-full whitespace-nowrap">
              Team Coreline
            </span>
          </span>
          <br />
          <span className="relative inline-block text-ink/15">
            Repeat.
          </span>
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="max-w-md text-ink/70 leading-relaxed">
            I'm Niña Issabela Olasiman — a front-end developer, UI designer, and capstone
            team leader from Cebu, turning ideas into interfaces people actually enjoy using.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#work" className="bg-ink text-cream font-mono text-xs uppercase tracking-wide px-5 py-3 rounded-full hover:bg-indigo transition-colors">
              View my work
            </a>
            <a href="#contact" className="border border-ink/20 font-mono text-xs uppercase tracking-wide px-5 py-3 rounded-full hover:border-ink transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <PixelGrid
        cols={10}
        rows={5}
        size={10}
        gap={4}
        className="hidden md:grid absolute right-6 bottom-10 opacity-90"
      />
    </section>
  )
}
