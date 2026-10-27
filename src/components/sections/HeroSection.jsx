import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import h1d from '@/assets/images/client/hero-01-global-desktop.webp';
import h2d from '@/assets/images/client/hero-02-sophisticated-desktop.webp';
import h3d from '@/assets/images/client/hero-03-trustworthy-desktop.webp';
import h4d from '@/assets/images/client/hero-04-charismatic-desktop.webp';
import h5d from '@/assets/images/client/hero-05-discerning-desktop.webp';
import h6d from '@/assets/images/client/hero-06-adventurous-desktop.webp';
import h1m from '@/assets/images/client/hero-01-global-mobile.webp';
import h2m from '@/assets/images/client/hero-02-sophisticated-mobile.webp';
import h3m from '@/assets/images/client/hero-03-trustworthy-mobile.webp';
import h4m from '@/assets/images/client/hero-04-charismatic-mobile.webp';
import h5m from '@/assets/images/client/hero-05-discerning-mobile.webp';
import h6m from '@/assets/images/client/hero-06-adventurous-mobile.webp';
import h1j from '@/assets/images/client/hero-01-global.jpg';
import h2j from '@/assets/images/client/hero-02-sophisticated.jpg';
import h3j from '@/assets/images/client/hero-03-trustworthy.jpg';
import h4j from '@/assets/images/client/hero-04-charismatic.jpg';
import h5j from '@/assets/images/client/hero-05-discerning.jpg';
import h6j from '@/assets/images/client/hero-06-adventurous.jpg';

const SLIDES = [
  { attribute: 'GLOBAL', desktopWebp: h1d, mobileWebp: h1m, fallback: h1j, desktopPos: 'center 22%', mobilePos: 'center 22%', alt: 'Sushill Waddhwa — Global hospitality entrepreneur' },
  { attribute: 'SOPHISTICATED', desktopWebp: h2d, mobileWebp: h2m, fallback: h2j, desktopPos: 'center 10%', mobilePos: 'center 12%', alt: 'Sushill Waddhwa — Sophisticated international presence' },
  { attribute: 'TRUSTWORTHY', desktopWebp: h3d, mobileWebp: h3m, fallback: h3j, desktopPos: '68% 44%', mobilePos: '62% 44%', alt: 'Sushill Waddhwa — Trustworthy founder and leader' },
  { attribute: 'CHARISMATIC', desktopWebp: h4d, mobileWebp: h4m, fallback: h4j, desktopPos: 'center 32%', mobilePos: 'center 35%', alt: 'Sushill Waddhwa — Charismatic hospitality leader' },
  { attribute: 'DISCERNING', desktopWebp: h5d, mobileWebp: h5m, fallback: h5j, desktopPos: 'center 28%', mobilePos: '62% 28%', alt: 'Sushill Waddhwa — Discerning style and brand collaborations' },
  { attribute: 'ADVENTUROUS', desktopWebp: h6d, mobileWebp: h6m, fallback: h6j, desktopPos: 'center 26%', mobilePos: 'center 28%', alt: 'Sushill Waddhwa — Adventurous explorer' },
];

const DURATION = 5500;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setProgress(0);
    startTimeRef.current = performance.now();
  }, []);

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length, [current, goTo]));

  useEffect(() => {
    const img = new Image();
    img.src = SLIDES[0].desktopWebp;
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = SLIDES[(current + 1) % SLIDES.length].desktopWebp;
  }, [current]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    cancelAnimationFrame(progressRef.current);
    const tick = (ts) => {
      const pct = Math.min((ts - startTimeRef.current) / DURATION, 1);
      setProgress(pct);
      if (pct < 1) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent((value) => (value + 1) % SLIDES.length);
        startTimeRef.current = performance.now();
        setProgress(0);
        progressRef.current = requestAnimationFrame(tick);
      }
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section id="home" className="relative">
      <div className="relative w-full overflow-hidden" style={{ height: 'min(100svh, 900px)', minHeight: '560px' }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <picture className="absolute inset-0 h-full w-full">
              <source media="(max-width: 768px)" srcSet={slide.mobileWebp} type="image/webp" />
              <source srcSet={slide.desktopWebp} type="image/webp" />
              <img
                src={slide.fallback}
                alt={slide.alt}
                className="hero-slide-img h-full w-full"
                style={{
                  objectFit: 'cover',
                  animation: 'heroKenBurns 5.5s ease-out forwards',
                  '--hero-pos-desk': slide.desktopPos,
                  '--hero-pos-mob': slide.mobilePos,
                }}
                loading={current === 0 ? 'eager' : 'lazy'}
              />
            </picture>
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{ height: '58%', background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.24) 48%, transparent 100%)' }}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-16 z-10 flex flex-col items-center px-6 text-center md:bottom-24">
          <p className="mb-4 font-manrope text-[9px] uppercase tracking-[0.22em] md:text-[10px]" style={{ color: 'rgba(213,170,106,0.96)' }}>
            SINCE 1989 · GLOBAL HOSPITALITY & ADVISORY
          </p>
          <h1
            className="mb-3 font-cormorant font-light leading-none"
            style={{ fontSize: 'clamp(36px, 8vw, 92px)', color: '#F5F1E8', letterSpacing: '0.035em', maxWidth: 'min(92vw, 900px)', textWrap: 'balance' }}
          >
            SUSHILL WADDHWA
          </h1>
          <p className="mb-1 font-manrope text-[10px] uppercase tracking-[0.14em] md:text-[11px]" style={{ color: 'rgba(245,241,232,0.9)' }}>
            Global Hospitality Entrepreneur · Investor
          </p>
          <p className="font-inter text-[11px] font-light md:text-[12px]" style={{ color: 'rgba(245,241,232,0.82)' }}>
            Founder & CMD, Platinum World Grroup
          </p>
        </div>

        <button onClick={prev} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 p-3 text-ivory/60 transition-colors duration-300 hover:text-ivory md:left-8" aria-label="Previous slide">
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 z-10 -translate-y-1/2 p-3 text-ivory/60 transition-colors duration-300 hover:text-ivory md:right-8" aria-label="Next slide">
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex min-h-[52px] w-full items-center justify-between gap-4 bg-[#111111] px-6 md:px-10" style={{ borderTop: '1px solid rgba(185,138,74,0.15)' }}>
        <div className="flex items-center gap-4">
          <span className="font-manrope text-[9px] uppercase tracking-[0.25em]" style={{ color: '#D4AA6A' }}>{slide.attribute}</span>
          <span className="font-manrope text-[9px] tracking-[0.1em]" style={{ color: 'rgba(245,241,232,0.58)' }}>
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
        <div className="h-px max-w-48 flex-1 bg-[rgba(185,138,74,0.15)]">
          <div className="h-full bg-[#B98A4A]" style={{ width: progress * 100 + '%' }} />
        </div>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className="h-1 w-1 rounded-full transition-colors duration-300" style={{ backgroundColor: i === current ? '#D4AA6A' : 'rgba(245,241,232,0.42)' }} aria-label={'Go to slide ' + (i + 1)} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroKenBurns { from { transform: scale(1); } to { transform: scale(1.04); } }
        .hero-slide-img { object-position: var(--hero-pos-desk, center 22%); }
        @media (max-width: 768px) { .hero-slide-img { object-position: var(--hero-pos-mob, center 22%); } }
      `}</style>
    </section>
  );
}
