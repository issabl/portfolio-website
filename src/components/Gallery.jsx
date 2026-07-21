import { useState, useEffect, useCallback } from 'react'

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

function GalleryRow({ label, desc, images, onImageClick }) {
  return (
    <div className="border border-ink/10 rounded-3xl p-6 md:p-10">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo">{label}</span>
        <p className="text-ink/65 mt-2 max-w-xl leading-relaxed">{desc}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => onImageClick(images, i)}
            className="aspect-square rounded-2xl overflow-hidden bg-ink/5 border border-ink/10 cursor-zoom-in"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function Lightbox({ images, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center px-4 md:px-16 py-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 md:top-8 md:right-8 text-cream/80 hover:text-cream font-mono text-xs uppercase tracking-widest border border-cream/30 rounded-full px-4 py-2 hover:border-cream/60 transition-colors"
      >
        Close
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream font-mono text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-cream/20 hover:border-cream/50 transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream font-mono text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-cream/20 hover:border-cream/50 transition-colors"
          >
            ›
          </button>
        </>
      )}

      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-lg"
      />

      {images.length > 1 && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cream/60 font-mono text-xs tracking-widest">
          {index + 1} / {images.length}
        </span>
      )}
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null) // { images, index }

  const openLightbox = useCallback((images, index) => {
    setLightbox({ images, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const next = useCallback(() => {
    setLightbox((lb) => lb && { ...lb, index: (lb.index + 1) % lb.images.length })
  }, [])

  const prev = useCallback(() => {
    setLightbox((lb) => lb && { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length })
  }, [])

  return (
    <section id="gallery" className="border-t border-ink/10 px-6 md:px-10 py-20 md:py-28">
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
            onImageClick={openLightbox}
          />
          <GalleryRow
            label="Pubmats"
            desc="Publication materials and graphic layouts designed for events, announcements, and features."
            images={PUBMATS}
            onImageClick={openLightbox}
          />
        </div>
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  )
}