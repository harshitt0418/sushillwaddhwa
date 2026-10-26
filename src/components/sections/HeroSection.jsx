import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowDownRight, Compass } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// 6 Curated Authentic Client Photographs for the Hero
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
    position: "center 22%",
    alt: "Sushill Waddhwa — Global Hospitality Entrepreneur aboard private aviation",
    badge: "International Reach",
  },
  {
    image: atriumImg,
    attribute: "SOPHISTICATED",
    position: "center 24%",
    alt: "Sushill Waddhwa — Sophisticated hospitality leader at luxury hotel atrium",
    badge: "Architectural Grandeur",
  },
  {
    image: palaceImg,
    attribute: "TRUSTWORTHY",
    position: "center 18%",
    alt: "Sushill Waddhwa — Trustworthy Founder & CMD, Platinum World Grroup",
    badge: "Since 1989",
  },
  {
    image: jetSeatedImg,
    attribute: "CHARISMATIC",
    position: "center 20%",
    alt: "Sushill Waddhwa — Charismatic international investor",
    badge: "Executive Presence",
  },
  {
    image: campaignImg,
    attribute: "DISCERNING",
    position: "center 22%",
    alt: "Sushill Waddhwa — Discerning style and brand alignments",
    badge: "Curated Alignments",
  },
  {
    image: yachtImg,
    attribute: "ADVENTUROUS",
    position: "center 25%",
    alt: "Sushill Waddhwa — Adventurous explorer across international waters",
    badge: "Worldwide Discovery",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  // Subtle parallax on the hero container for desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500); // 4.5s rhythm

    return () => clearInterval(timer);
  }, []);

  const scrollToAnchor = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      if (window.lenis) {
        window.lenis.scrollTo(elem, { offset: -70 });
      } else {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full bg-obsidian text-ivory overflow-hidden pt-24 md:pt-28 pb-12 lg:pb-16"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Top Editorial Monogram & Metadata Bar */}
        <div className="flex items-center justify-between border-b border-bronze/20 pb-4 mb-6 sm:mb-8 text-[9px] sm:text-[10px] uppercase font-subheading tracking-super-wide text-stone">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
            <span className="text-bronze font-medium">Bespoke Editorial Portfolio</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-stone/80">
            <span>Est. 1989</span>
            <span>•</span>
            <span>Mumbai • Dubai • Sri Lanka • Europe</span>
          </div>
          <div className="font-mono text-bronze/80">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </div>
        </div>

        {/* REBUILT HERO: Centred, Full-Viewport Editorial Composition */}
        <div className="relative w-full mx-auto max-w-5xl">
          
          {/* Main Visual Centerpiece: Framed Slideshow with Subtle Parallax */}
          <motion.div
            style={{ y: heroImageY }}
            className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9.5] lg:aspect-[16/9] overflow-hidden bg-obsidian-deep border border-bronze/35 shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
          >
            {/* Crossfading Slide Layer with subtle scale motion */}
            <AnimatePresence mode="sync">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  style={{ objectPosition: activeSlide.position }}
                  className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.92]"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>

            {/* Editorial Vignette & Contrast Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian/40 to-obsidian/25 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,17,29,0.6)_100%)] pointer-events-none" />

            {/* Overlay Editorial Text: Centred & Elevated */}
            <motion.div
              style={{ y: heroTextY }}
              className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-12 lg:p-14 z-20 pointer-events-none"
            >
              <div className="max-w-3xl mx-auto text-center w-full">
                
                {/* Micro Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-obsidian/80 backdrop-blur-md border border-bronze/30 mb-3 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                  <span className="font-subheading text-[9px] sm:text-[10px] tracking-super-wide text-bronze uppercase font-medium">
                    {activeSlide.badge}
                  </span>
                </div>

                {/* SUSHILL WADDHWA — Monolithic Serif */}
                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-ivory font-normal tracking-tight leading-[1.04] mb-3 sm:mb-4 drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
                  SUSHILL WADDHWA
                </h1>

                {/* Designation: Manrope Subheading */}
                <p className="font-subheading text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-[0.16em] uppercase text-bronze-light mb-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  Global Hospitality Entrepreneur • Investor
                </p>

                {/* Founder Title */}
                <p className="font-sans text-[11px] sm:text-xs md:text-sm text-stone tracking-wide font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  Founder & CMD, Platinum World Grroup
                </p>
              </div>
            </motion.div>

            {/* Corner Registration Crosshairs */}
            <div className="absolute top-3 left-3 text-bronze/40 text-[10px] font-mono pointer-events-none">⌜ 1989</div>
            <div className="absolute top-3 right-3 text-bronze/40 text-[10px] font-mono pointer-events-none">2026 ⌝</div>
            <div className="absolute bottom-3 left-3 text-bronze/40 text-[10px] font-mono pointer-events-none">⌞ GLOBAL</div>
            <div className="absolute bottom-3 right-3 text-bronze/40 text-[10px] font-mono pointer-events-none">EDITORIAL ⌟</div>
          </motion.div>

          {/* Centred Synchronized Attribute Word & Slideshow Controls */}
          <div className="mt-5 p-4 sm:p-5 bg-navy border border-bronze/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Active Attribute: Bold Editorial Typography */}
            <div className="flex items-center gap-3">
              <span className="font-subheading text-[9px] uppercase tracking-super-wide text-stone">
                Current Attribute:
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSlide.attribute}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="font-subheading text-xs sm:text-sm md:text-base font-semibold tracking-[0.24em] text-bronze uppercase"
                >
                  {activeSlide.attribute}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Understated Slide Line Progress & Dots */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.attribute}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 transition-all duration-400 rounded-full ${
                    idx === currentSlide
                      ? 'w-8 sm:w-10 bg-bronze'
                      : 'w-2 bg-stone/30 hover:bg-stone/60'
                  }`}
                  aria-label={`Switch to slide ${idx + 1}: ${slide.attribute}`}
                />
              ))}
              <span className="font-mono text-[10px] text-stone ml-2">
                0{currentSlide + 1}
              </span>
            </div>
          </div>

          {/* Concise Introduction Narrative */}
          <div className="mt-8 text-center max-w-2xl mx-auto space-y-4">
            <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
              Shaping landmark hospitality, luxury hotel buyouts, destination tourism, and selective international business ventures across 82 countries.
            </p>

            {/* Editorial Anchor Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#about"
                onClick={(e) => scrollToAnchor(e, '#about')}
                className="font-subheading inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-widest uppercase bg-ivory text-ink hover:bg-bronze hover:text-ink transition-colors font-medium rounded-[1px]"
              >
                <span>About Chapter</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#business"
                onClick={(e) => scrollToAnchor(e, '#business')}
                className="font-subheading inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-widest uppercase border border-bronze/40 text-ivory hover:border-bronze hover:text-bronze transition-colors font-medium rounded-[1px]"
              >
                <span>Venture Ledger</span>
              </a>
              <a
                href="#collaborations"
                onClick={(e) => scrollToAnchor(e, '#collaborations')}
                className="font-subheading inline-flex items-center gap-2 px-5 py-2.5 text-[11px] tracking-widest uppercase border border-white/15 text-stone hover:text-ivory hover:border-white/30 transition-colors font-medium rounded-[1px]"
              >
                <span>Selected Collaborations</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* MANDATORY COMPACT LINE: Below the Hero Slideshow */}
      <div className="mt-12 w-full bg-navy border-y border-bronze/25 py-3.5 px-4 overflow-x-auto scrollbar-none">
        <div className="max-w-[1560px] mx-auto flex items-center justify-center">
          <p className="font-subheading text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-ivory uppercase whitespace-nowrap text-center font-medium">
            <span className="text-bronze font-semibold">GLOBAL</span>
            <span className="mx-2 sm:mx-3 text-bronze/50">•</span>
            <span className="text-bronze font-semibold">SOPHISTICATED</span>
            <span className="mx-2 sm:mx-3 text-bronze/50">•</span>
            <span className="text-bronze font-semibold">TRUSTWORTHY</span>
            <span className="mx-2 sm:mx-3 text-bronze/50">•</span>
            <span className="text-bronze font-semibold">CHARISMATIC</span>
            <span className="mx-2 sm:mx-3 text-bronze/50">•</span>
            <span className="text-bronze font-semibold">DISCERNING</span>
            <span className="mx-2 sm:mx-3 text-bronze/50">•</span>
            <span className="text-bronze font-semibold">ADVENTUROUS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
