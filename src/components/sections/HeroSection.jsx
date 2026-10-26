import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// 6 Strongest Curated Client Photographs for the Hero
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
  },
  {
    image: atriumImg,
    attribute: "SOPHISTICATED",
    position: "center 24%",
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
    }, 4500); // Elegant 4.5s rhythm

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
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
    <section id="home" className="relative w-full bg-obsidian text-ivory overflow-hidden pt-20 md:pt-24">
      {/* Hero Presentation Canvas */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 pt-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center order-2 lg:order-1 z-10">
            {/* Founder Monogram & Badge */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-[1px] bg-bronze" />
              <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide uppercase text-bronze font-medium">
                Established 1989
              </span>
            </div>

            {/* Principal Name: DM Serif Display */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-ivory font-normal leading-[1.08] mb-4">
              SUSHILL WADDHWA
            </h1>

            {/* Credential Lines: Manrope & Inter */}
            <div className="space-y-1.5 mb-6 sm:mb-8">
              <p className="font-subheading text-base sm:text-lg md:text-xl font-medium tracking-wide text-bronze-light">
                Global Hospitality Entrepreneur • Investor
              </p>
              <p className="font-sans text-sm sm:text-base text-stone font-light">
                Founder & CMD, Platinum World Grroup
              </p>
            </div>

            {/* Concise Introduction: Inter */}
            <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed max-w-xl font-light mb-8 sm:mb-10">
              Shaping landmark hospitality, hotel buyouts, curated luxury destination experiences, and selective international business ventures across 82 countries.
            </p>

            {/* Quick Section Anchors: Manrope buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, '#about')}
                className="font-subheading inline-flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase bg-ivory text-ink hover:bg-bronze hover:text-ink transition-colors duration-300 font-medium rounded-[1px]"
              >
                <span>About Sushill</span>
                <ChevronRight className="w-3.5 h-3.5 text-ink" />
              </a>
              <a
                href="#business"
                onClick={(e) => scrollToSection(e, '#business')}
                className="font-subheading inline-flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase border border-bronze/40 text-ivory hover:border-bronze hover:text-bronze transition-colors duration-300 font-medium rounded-[1px]"
              >
                <span>Business Ventures</span>
              </a>
              <a
                href="#collaborations"
                onClick={(e) => scrollToSection(e, '#collaborations')}
                className="font-subheading inline-flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase border border-white/15 text-stone hover:text-ivory hover:border-white/30 transition-colors duration-300 font-medium rounded-[1px]"
              >
                <span>Collaborations</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Slideshow */}
          <div className="lg:col-span-6 xl:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              
              {/* Photo Frame Container */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-obsidian-deep border border-bronze/30 shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      style={{ objectPosition: activeSlide.position }}
                      className="w-full h-full object-cover filter contrast-[1.02]"
                      fetchPriority="high"
                      decoding="async"
                    />
                    {/* Subtle navy/obsidian gradient overlay for readability & tone */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Slideshow Progress Bar */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-obsidian/70 backdrop-blur-md px-3 py-1.5 border border-bronze/30">
                  <span className="font-subheading text-[10px] text-bronze tracking-widest font-mono">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
              </div>

              {/* MANDATORY: One corresponding word below currently active photo, changing in sync */}
              <div className="mt-4 p-3.5 bg-navy border border-bronze/25 flex items-center justify-between">
                <span className="font-subheading text-[10px] uppercase tracking-widest text-stone">
                  Attribute Focus
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeSlide.attribute}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="font-subheading text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-bronze"
                  >
                    {activeSlide.attribute}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Slide Selector Indicators */}
              <div className="mt-3 flex items-center justify-center gap-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.attribute}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? 'w-8 bg-bronze'
                        : 'w-2 bg-stone/30 hover:bg-stone/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}: ${slide.attribute}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* MANDATORY: Below the hero slideshow, show this compact line once:
          GLOBAL • SOPHISTICATED • TRUSTWORTHY • CHARISMATIC • DISCERNING • ADVENTUROUS */}
      <div className="w-full bg-navy border-y border-bronze/25 py-3.5 px-4 overflow-x-auto scrollbar-none">
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
