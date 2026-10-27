import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

// Desktop WebP sources
import g1d from '@/assets/images/client/hero-01-global-desktop.webp';
import g2d from '@/assets/images/client/hero-02-sophisticated-desktop.webp';
import g3d from '@/assets/images/client/hero-03-trustworthy-desktop.webp';
import g4d from '@/assets/images/client/hero-04-charismatic-desktop.webp';
import g5d from '@/assets/images/client/hero-05-discerning-desktop.webp';
import g6d from '@/assets/images/client/hero-06-adventurous-desktop.webp';

// Mobile WebP sources
import g1m from '@/assets/images/client/hero-01-global-mobile.webp';
import g2m from '@/assets/images/client/hero-02-sophisticated-mobile.webp';
import g3m from '@/assets/images/client/hero-03-trustworthy-mobile.webp';
import g4m from '@/assets/images/client/hero-04-charismatic-mobile.webp';
import g5m from '@/assets/images/client/hero-05-discerning-mobile.webp';
import g6m from '@/assets/images/client/hero-06-adventurous-mobile.webp';

// JPEG Fallback
import g1j from '@/assets/images/client/hero-01-global.jpg';
import g2j from '@/assets/images/client/hero-02-sophisticated.jpg';
import g3j from '@/assets/images/client/hero-03-trustworthy.jpg';
import g4j from '@/assets/images/client/hero-04-charismatic.jpg';
import g5j from '@/assets/images/client/hero-05-discerning.jpg';
import g6j from '@/assets/images/client/hero-06-adventurous.jpg';

const SLIDES = [
  {
    attribute: 'GLOBAL',
    desktopWebp: g1d, mobileWebp: g1m, fallback: g1j,
    desktopPos: 'center 20%', tabletPos: 'center 22%', mobilePos: 'center 22%',
    origin: 'center 20%',
    alt: 'Sushill Waddhwa — Global Hospitality Entrepreneur',
  },
  {
    attribute: 'SOPHISTICATED',
    desktopWebp: g2d, mobileWebp: g2m, fallback: g2j,
    desktopPos: 'center 8%', tabletPos: 'center 10%', mobilePos: 'center 12%',
    origin: 'center 8%',
    alt: 'Sushill Waddhwa — Sophisticated international entrepreneur',
  },
  {
    attribute: 'TRUSTWORTHY',
    desktopWebp: g3d, mobileWebp: g3m, fallback: g3j,
    desktopPos: '68% 42%', tabletPos: '65% 42%', mobilePos: '60% 42%',
    origin: '68% 42%',
    alt: 'Sushill Waddhwa — Trustworthy Founder & CMD, Platinum World Grroup',
  },
  {
    attribute: 'CHARISMATIC',
    desktopWebp: g4d, mobileWebp: g4m, fallback: g4j,
    desktopPos: 'center 30%', tabletPos: 'center 32%', mobilePos: 'center 35%',
    origin: 'center 30%',
    alt: 'Sushill Waddhwa — Charismatic hospitality leader',
  },
  {
    attribute: 'DISCERNING',
    desktopWebp: g5d, mobileWebp: g5m, fallback: g5j,
    desktopPos: 'center 28%', tabletPos: 'center 30%', mobilePos: '65% 28%',
    origin: 'center 28%',
    alt: 'Sushill Waddhwa — Discerning style and brand collaborations',
  },
  {
    attribute: 'ADVENTUROUS',
    desktopWebp: g6d, mobileWebp: g6m, fallback: g6j,
    desktopPos: 'center 25%', tabletPos: 'center 27%', mobilePos: 'center 27%',
    origin: 'center 25%',
    alt: 'Sushill Waddhwa — Adventurous explorer across international waters',
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewport, setViewport] = useState('desktop');

  // Viewport tracking for precise calibrated focal positions
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewport('mobile');
      } else if (width < 1024) {
        setViewport('tablet');
      } else {
        setViewport('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload all slides on mount
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = isMobile ? slide.mobileWebp : slide.desktopWebp;
    });
  }, []);

  // Preload next slide actively
  useEffect(() => {
    const nextIdx = (currentSlide + 1) % SLIDES.length;
    const nextSlide = SLIDES[nextIdx];
    const isMobile = window.innerWidth < 768;
    const img = new Image();
    img.src = isMobile ? nextSlide.mobileWebp : nextSlide.desktopWebp;
  }, [currentSlide]);

  // 5.5s slide change cadence
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleScrollToExplore = (e) => {
    e.preventDefault();
    const aboutElem = document.querySelector('#about');
    if (aboutElem) {
      if (window.lenis) {
        window.lenis.scrollTo(aboutElem, { offset: 0 });
      } else {
        aboutElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const activeSlide = SLIDES[currentSlide];

  const currentPos =
    viewport === 'mobile'
      ? activeSlide.mobilePos
      : viewport === 'tablet'
      ? activeSlide.tabletPos
      : activeSlide.desktopPos;

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[640px] overflow-hidden flex flex-col justify-between text-ivory z-10 bg-[#111111]"
    >
      {/* 1. Full-screen responsive background with crossfade */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#111111]">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <picture className="w-full h-full block">
              <source media="(max-width: 767px)" srcSet={activeSlide.mobileWebp} type="image/webp" />
              <source media="(min-width: 768px)" srcSet={activeSlide.desktopWebp} type="image/webp" />
              <motion.img
                src={activeSlide.fallback}
                alt={activeSlide.alt}
                initial={{ scale: 1.0 }}
                animate={{ scale: 1.025 }}
                transition={{ duration: 5.5, ease: "easeOut" }}
                style={{
                  objectPosition: currentPos,
                  transformOrigin: activeSlide.origin,
                }}
                className="w-full h-full object-cover filter contrast-[1.02]"
                fetchPriority={currentSlide === 0 ? "high" : "auto"}
                loading={currentSlide === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </picture>
          </motion.div>
        </AnimatePresence>

        {/* Subtle, calibrated gradients for text contrast without muting photo luminosity */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent pointer-events-none hidden sm:block" />
      </div>

      {/* Top Spacer for Masthead */}
      <div className="relative z-10 pt-24 sm:pt-28" />

      {/* 2. Text Block: Confident Editorial Layout */}
      <div className="relative z-10 max-w-[1720px] w-full mx-auto px-6 sm:px-10 md:px-14 pb-8 sm:pb-12">
        <div className="max-w-4xl space-y-4 sm:space-y-6 text-left">
          
          {/* Pretext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-bronze" />
            <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-medium">
              SINCE 1989 • GLOBAL HOSPITALITY & ADVISORY
            </span>
          </motion.div>

          {/* SUSHILL WADDHWA — Monolithic Cormorant Garamond */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory font-normal tracking-tight leading-[0.92] drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
          >
            SUSHILL<br />
            <span className="italic font-light text-ivory/95">WADDHWA</span>
          </motion.h1>

          {/* Role & Company */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-1.5 pt-2"
          >
            <p className="font-subheading text-sm sm:text-base md:text-lg tracking-[0.16em] uppercase text-ivory/85 font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Global Hospitality Entrepreneur • Investor
            </p>
            <p className="font-sans text-xs sm:text-sm text-stone tracking-wide font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Founder & CMD, Platinum World Grroup
            </p>
          </motion.div>

          {/* Dynamic Attribute Word */}
          <div className="pt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSlide.attribute}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="font-subheading text-xs sm:text-sm font-semibold tracking-[0.28em] text-bronze uppercase inline-block border-l-2 border-bronze pl-3"
              >
                {activeSlide.attribute}
              </motion.span>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* 3. Bottom Editorial Strip: Counter, Thin Line Progress, Arrows & Explore */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/60 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between gap-6">
          
          {/* Left: Attribute label with index counter */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-mono text-xs sm:text-sm text-ivory tracking-widest font-medium">
              0{currentSlide + 1} / 0{SLIDES.length}
            </span>
            <span className="text-bronze/40 font-mono text-xs">—</span>
            <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.22em] text-bronze font-semibold">
              {activeSlide.attribute}
            </span>
          </div>

          {/* Center: Thin line progress indicators */}
          <div className="flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-[2px] transition-all duration-500 ${
                  idx === currentSlide
                    ? 'w-10 sm:w-14 bg-bronze'
                    : 'w-3 sm:w-5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Right: Arrow controls & Explore Cue */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-full hover:bg-white/10 text-stone hover:text-ivory transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-full hover:bg-white/10 text-stone hover:text-ivory transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />

            <a
              href="#about"
              onClick={handleScrollToExplore}
              className="group flex items-center gap-2 text-[10px] sm:text-[11px] font-subheading uppercase tracking-[0.2em] text-stone hover:text-ivory transition-colors"
            >
              <span className="hidden sm:inline">Explore</span>
              <ArrowDown className="w-3.5 h-3.5 text-bronze group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* 4. Attribute strip below slideshow */}
      <div className="w-full bg-[#0D1B2A] border-t border-bronze/20 py-3.5 px-6 overflow-x-auto scrollbar-none">
        <div className="max-w-[1720px] mx-auto flex items-center justify-center">
          <p className="font-subheading text-[10px] sm:text-xs md:text-sm tracking-[0.22em] text-ivory uppercase whitespace-nowrap text-center font-medium">
            <span className="text-bronze font-semibold">GLOBAL</span>
            <span className="mx-2 sm:mx-3 text-bronze/40">•</span>
            <span className="text-bronze font-semibold">SOPHISTICATED</span>
            <span className="mx-2 sm:mx-3 text-bronze/40">•</span>
            <span className="text-bronze font-semibold">TRUSTWORTHY</span>
            <span className="mx-2 sm:mx-3 text-bronze/40">•</span>
            <span className="text-bronze font-semibold">CHARISMATIC</span>
            <span className="mx-2 sm:mx-3 text-bronze/40">•</span>
            <span className="text-bronze font-semibold">DISCERNING</span>
            <span className="mx-2 sm:mx-3 text-bronze/40">•</span>
            <span className="text-bronze font-semibold">ADVENTUROUS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
