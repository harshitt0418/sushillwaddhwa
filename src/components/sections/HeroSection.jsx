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
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const img0 = new Image();
    img0.src = SLIDES[0].desktopWebp;
  }, []);

  useEffect(() => {
    const nextIdx = (current + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIdx].desktopWebp;
  }, [current]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    cancelAnimationFrame(progressRef.current);

    const tick = (ts) => {
      const elapsed = ts - startTimeRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct < 1) {
        progressRef.current = requestAnimationFrame(tick);
      } else {
        setCurrent((c) => (c + 1) % SLIDES.length);
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
      {/* Full-screen hero image area */}
      <div className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: '600px' }}>
        {/* Slide images */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <picture className="absolute inset-0 w-full h-full">
              <source media="(max-width: 768px)" srcSet={slide.mobileWebp} type="image/webp" />
              <source srcSet={slide.desktopWebp} type="image/webp" />
              <img
                src={slide.fallback}
                alt={slide.alt}
                className="hero-slide-img w-full h-full"
                style={{
                  objectFit: 'cover',
                  animation: 'heroKenBurns 5.5s ease-out forwards',
                  '--hero-pos-desk': slide.desktopPos,
                  '--hero-pos-mob': slide.mobilePos,
                }}
                loading={current === 0 ? 'eager' : 'lazy'}
              />
            </picture>
            {/* Bottom gradient for text readability only */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: '55%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Hero text — bottom center, never over the face */}
        <div className="absolute inset-x-0 bottom-20 md:bottom-24 z-10 flex flex-col items-center text-center px-6">
          <p
            className="font-manrope uppercase tracking-[0.22em] text-[9px] md:text-[10px] mb-4"
            style={{ color: 'rgba(185,138,74,0.9)' }}
          >
            SINCE 1989 · GLOBAL HOSPITALITY & ADVISORY
          </p>
          <h1
            className="font-cormorant font-light leading-none tracking-wide mb-3"
            style={{
              fontSize: 'clamp(44px, 8vw, 96px)',
              color: '#F5F1E8',
              letterSpacing: '0.06em',
            }}
          >
            SUSHILL WADDHWA
          </h1>
          <p
            className="font-manrope tracking-[0.14em] uppercase text-[10px] md:text-[11px] mb-1"
            style={{ color: 'rgba(245,241,232,0.75)' }}
          >
            Global Hospitality Entrepreneur · Investor
          </p>
          <p
            className="font-inter font-light text-[11px] md:text-[12px]"
            style={{ color: 'rgba(140,138,133,0.8)' }}
          >
            Founder & CMD, Platinum World Grroup
          </p>
        </div>

        {/* Minimal arrow controls — overlaid at sides, very discreet */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-ivory/40 hover:text-ivory transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-ivory/40 hover:text-ivory transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Sub-bar: attribute label + progress BELOW the image */}
      <div
        className="w-full px-6 md:px-10 flex items-center justify-between gap-4"
        style={{
          backgroundColor: '#111111',
          height: '48px',
          borderTop: '1px solid rgba(185,138,74,0.15)',
        }}
      >
        <div className="flex items-center gap-4">
          <span
            className="font-manrope uppercase tracking-[0.25em] text-[9px]"
            style={{ color: '#B98A4A' }}
          >
            {slide.attribute}
          </span>
          <span
            className="font-manrope text-[9px] tracking-[0.1em]"
            style={{ color: 'rgba(140,138,133,0.5)' }}
          >
            {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>
        {/* Progress bar */}
        <div className="flex-1 max-w-48 h-px" style={{ backgroundColor: 'rgba(185,138,74,0.15)' }}>
          <div
            className="h-full bg-[#B98A4A] transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="w-1 h-1 rounded-full transition-colors duration-300"
              style={{ backgroundColor: i === current ? '#B98A4A' : 'rgba(140,138,133,0.4)' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Ken Burns keyframe and responsive object-position */}
      <style>{`
        @keyframes heroKenBurns {
          from { transform: scale(1.0); }
          to { transform: scale(1.04); }
        }
        .hero-slide-img {
          object-position: var(--hero-pos-desk, center 22%);
        }
        @media (max-width: 768px) {
          .hero-slide-img {
            object-position: var(--hero-pos-mob, center 22%);
          }
        }
      `}</style>
    </section>
  );
}
