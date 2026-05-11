import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HERO_SLIDES, waLink, SITE } from '../../lib/content';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((x) => (x + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reduce]);

  const slide = HERO_SLIDES[i];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-sand-200">
      <AnimatePresence>
        <motion.img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          decoding={i === 0 ? 'sync' : 'async'}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/15 to-sand-50/30" />

      <div className="relative z-10 flex h-full flex-col">
        <header className="flex items-center justify-between px-4 py-6 sm:px-6 md:px-12 md:py-8">
          <a href="#" aria-label={`${SITE.name} · ${SITE.role}`} className="block">
            <img
              src="/images/logo.png"
              alt={`Logo ${SITE.name} · Arquitecta`}
              width="240"
              height="134"
              fetchPriority="high"
              decoding="sync"
              className="h-10 w-auto md:h-12"
            />
          </a>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-sand-50/90 md:block">
            Arquitecta · Villa Carlos Paz · Córdoba
          </span>
        </header>

        <div className="mt-auto flex items-end px-4 pb-16 sm:px-6 md:px-12 md:pb-[12vh]">
          <div className="max-w-4xl">
            <motion.h1
              className="text-display-xl text-sand-50"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              Arquitectura real{' '}
              <em className="italic font-light">para la vida cotidiana.</em>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-prose text-base leading-relaxed text-sand-100/95 md:text-lg"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            >
              Estudio de arquitectura en Villa Carlos Paz y Córdoba.
              Transformamos tus ideas en espacios funcionales y estéticos,
              acompañándote en cada paso del proceso.
            </motion.p>

            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex min-h-[48px] items-center gap-3 border border-sand-50/80 px-7 py-3.5 text-sm uppercase tracking-[0.18em] text-sand-50 transition-colors duration-500 hover:bg-sand-50 hover:text-ink"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
            >
              Hablemos de tu proyecto
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </motion.a>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex gap-2 sm:bottom-6 sm:right-6 md:right-12">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Ir a la imagen ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px w-10 transition-all duration-500 ${
                idx === i ? 'bg-sand-50' : 'bg-sand-50/30 hover:bg-sand-50/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
