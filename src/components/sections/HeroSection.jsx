import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowDown } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// 6 Full-Bleed Authentic Client Photographs for the Hero
import jetStandingImg from '@/assets/images/editorial/sushill-private-jet-standing.jpg';
import atriumImg from '@/assets/images/editorial/sushill-atrium-portrait.jpg';
import palaceImg from '@/assets/images/editorial/sushill-palace-portrait.jpg';
import jetSeatedImg from '@/assets/images/editorial/sushill-private-jet-seated.jpg';
import campaignImg from '@/assets/images/editorial/sushill-brand-campaign.jpg';
import yachtImg from '@/assets/images/editorial/sushill-yacht-lifestyle.jpg';

const HERO_SLIDES = [
  {
    image: jetStandingImg,
    attribute: "GLOBAL",
    position: "center 20%",
    alt: "Sushill Waddhwa — Global Hospitality Entrepreneur aboard private aviation",
  },
  {
    image: atriumImg,
    attribute: "SOPHISTICATED",
    position: "center 22%",
    alt: "Sushill Waddhwa — Sophisticated hospitality leader at luxury hotel atrium",
  },
  {
    image: palaceImg,
    attribute: "TRUSTWORTHY",
    position: "center 18%",
    alt: "Sushill Waddhwa — Trustworthy Founder & CMD, Platinum World Grroup",
  },
  {
    image: jetSeatedImg,
    attribute: "CHARISMATIC",
    position: "center 20%",
    alt: "Sushill Waddhwa — Charismatic international investor",
  },
  {
    image: campaignImg,
    attribute: "DISCERNING",
    position: "center 22%",
    alt: "Sushill Waddhwa — Discerning style and brand alignments",
  },
  {
    image: yachtImg,
    attribute: "ADVENTUROUS",
    position: "center 25%",
    alt: "Sushill Waddhwa — Adventurous explorer across international waters",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // 5-second cinematic cadence

    return () => clearInterval(timer);
  }, []);

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

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-between text-ivory z-10"
    >
      {/* 1. FULL-BLEED IMMERSIVE BACKGROUND SLIDESHOW (Edge-to-Edge, Zero Margins) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0, scale: 0.995 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.alt}
              style={{ objectPosition: activeSlide.position }}
              className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.93]"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle, refined obsidian vignette for pristine readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-obsidian/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top Spacer for Masthead */}
      <div className="relative z-10 pt-24 sm:pt-28" />

      {/* 2. CONFIDENT HERO TYPOGRAPHY: Editorial Placement */}
      <div className="relative z-10 max-w-[1720px] w-full mx-auto px-6 sm:px-10 md:px-14 pb-8 sm:pb-12">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          
          {/* Subtle Heritage Pretitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-bronze" />
            <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-medium">
              Since 1989 • Global Hospitality & Advisory
            </span>
          </motion.div>

          {/* SUSHILL WADDHWA — Monolithic Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ivory font-normal tracking-tight leading-[0.92] drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
          >
            SUSHILL<br />
            <span className="italic font-light text-ivory/95">WADDHWA</span>
          </motion.h1>

          {/* Designation & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-1.5 pt-2"
          >
            <p className="font-subheading text-sm sm:text-base md:text-lg tracking-[0.16em] uppercase text-bronze-light font-medium drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Global Hospitality Entrepreneur • Investor
            </p>
            <p className="font-sans text-xs sm:text-sm text-stone tracking-wide font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Founder & CMD, Platinum World Grroup
            </p>
          </motion.div>

        </div>
      </div>

      {/* 3. BOTTOM EDITORIAL BAR: Synchronised Active Word, Progress & Explore Cue */}
      <div className="relative z-10 w-full border-t border-white/10 bg-obsidian/60 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between gap-6">
          
          {/* Synchronised Active Attribute Word */}
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="font-subheading text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-stone font-mono">
              Attribute
            </span>
            <div className="h-4 w-[1px] bg-bronze/30" />
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSlide.attribute}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="font-subheading text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-bronze uppercase"
              >
                {activeSlide.attribute}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* 01 — 06 Progress Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-xs sm:text-sm text-ivory tracking-widest">
              0{currentSlide + 1}
            </span>
            <span className="text-bronze/40 font-mono text-xs">—</span>
            <span className="font-mono text-xs text-stone/60">
              0{HERO_SLIDES.length}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-[2px] transition-all duration-400 ${
                    idx === currentSlide ? 'w-8 bg-bronze' : 'w-3 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Understated Explore Scroll Cue */}
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

      {/* 4. MANDATORY COMPACT LINE: Below Hero Slideshow */}
      <div className="w-full bg-navy border-t border-bronze/20 py-3.5 px-6 overflow-x-auto scrollbar-none">
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
