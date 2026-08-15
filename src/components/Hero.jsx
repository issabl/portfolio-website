import PixelGrid from './PixelGrid'
import { motion } from "framer-motion";

function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-20 md:pt-28 md:pb-28 px-6 md:px-10 overflow-hidden">
      <style>{`
        @keyframes float-pill {
          0%, 100% { transform: translateY(0) rotate(var(--pill-rot)); }
          50% { transform: translateY(-8px) rotate(var(--pill-rot)); }
        }
        .float-pill {
          animation: float-pill 4s ease-in-out infinite;
          transition: transform 0.25s ease;
        }
        .float-pill:hover {
          animation-play-state: paused;
          transform: translateY(-4px) rotate(0deg) scale(1.05) !important;
        }
      `}</style>

      <FadeInSection>
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/90 mb-8">
            Hello! I am Issabela
          </div>

          <h1 className="font-display font-extrabold leading-[0.92] tracking-tight text-[15vw] md:text-[6.4rem]">
            <span className="relative inline-block">
              Design.
              <span
                style={{ '--pill-rot': '-6deg', animationDelay: '0s' }}
                className="float-pill hidden md:block absolute -right-8 top-2 rotate-[-6deg] bg-indigo text-cream font-mono text-sm normal-case tracking-normal font-medium px-4 py-1.5 rounded-full whitespace-nowrap"
              >
                User Interfaces &amp; Experiences
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              Develop.
              <span
                style={{ '--pill-rot': '4deg', animationDelay: '0.6s' }}
                className="float-pill hidden md:block absolute left-[15rem] -top-1 rotate-[4deg] bg-ink text-cream font-mono text-sm normal-case tracking-normal font-medium px-4 py-1.5 rounded-full whitespace-nowrap"
              >
                React · TypeScript · Node.js
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              Lead.
              <span
                style={{ '--pill-rot': '-4deg', animationDelay: '1.2s' }}
                className="float-pill hidden md:block absolute -right-4 top-4 rotate-[-4deg] bg-coral text-cream font-mono text-sm normal-case tracking-normal font-medium px-4 py-1.5 rounded-full whitespace-nowrap"
              >
                Team Coreline
              </span>
            </span>
            <br />
            <span className="relative inline-block text-ink/15">
              Innovate.
            </span>
          </h1>

          <div className="mt-10 md:mt-1 flex flex-col gap-6">
            <p className="max-w-md text-ink/70 leading-relaxed">
              I'm a Bachelor of Information Technology student, Front-End Developer, and Capstone
              Team Leader from Cebu, Philippines.
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
      </FadeInSection>

      <img
        src="/issa.png"
        alt="Niña Issabela Olasiman"
        style={{
          width: '900px',
          height: '900px',
          top: '10px',
          right: '-60px',
        }}
        className="hidden lg:block absolute object-cover object-bottom pointer-events-none z-10"
      />

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