const SHOTS = [
  '/shots/photo1.jpg',
  '/shots/photo2.jpg',
  '/shots/photo3.JPG',
  '/shots/photo4.jpg',
]

const PUBMATS = [
  '/pubmats/pubmat1.png',
  '/pubmats/pubmat2.png',
  '/pubmats/pubmat3.png',
  '/pubmats/pubmat4.png',
]

function GalleryRow({ label, desc, images }) {
  return (
    <div className="border border-ink/10 rounded-3xl p-6 md:p-10">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo">{label}</span>
        <p className="text-ink/65 mt-2 max-w-xl leading-relaxed">{desc}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src) => (
          <div
            key={src}
            className="aspect-square rounded-2xl overflow-hidden bg-ink/5 border border-ink/10"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-indigo">Beyond the code</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3">Behind the lens.</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <GalleryRow
            label="Shots"
            desc="Photography work — from CESAFI Season 22 coverage to campus events and everyday moments."
            images={SHOTS}
          />
          <GalleryRow
            label="Pubmats"
            desc="Publication materials and graphic layouts designed for events, announcements, and features."
            images={PUBMATS}
          />
        </div>
      </div>
    </section>
  )
}