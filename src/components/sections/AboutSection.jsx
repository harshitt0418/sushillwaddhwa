import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import portraitImg from '@/assets/images/editorial/sushill-framed-portrait.jpg';
import fitnessImg from '@/assets/images/editorial/editorial-lifestyle-fitness.jpg';

export const AboutSection = () => {
  const containerRef = useRef(null);

  // Subtle parallax on the anchor portrait
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const portraitParallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-obsidian text-ivory py-28 sm:py-36 md:py-44 border-t border-bronze/20 z-20"
    >
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 sm:mb-28 border-b border-bronze/20 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] tracking-[0.24em] text-bronze uppercase font-mono">
                CHAPTER 01
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-[0.24em] text-stone uppercase">
                PRINCIPAL NARRATIVE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal tracking-tight">
              About Sushill Waddhwa
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-[0.2em] uppercase font-mono text-right">
            Mumbai • Dubai • Sri Lanka • Europe
          </div>
        </div>

        {/* Magazine Profile Spread: Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 sm:mb-32">
          
          {/* Large Anchor Portrait with Subtle Parallax */}
          <div className="lg:col-span-6 relative">
            <motion.div
              style={{ y: portraitParallaxY }}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-navy border border-bronze/30 shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
            >
              <img
                src={portraitImg}
                alt="Sushill Waddhwa — Global Hospitality Entrepreneur & Investor"
                style={{ objectPosition: "center 18%" }}
                className="w-full h-full object-cover filter contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-obsidian/80 backdrop-blur-md border border-bronze/20">
                <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-bronze block font-mono font-medium">
                  Sushill Waddhwa
                </span>
                <span className="font-sans text-xs sm:text-sm text-ivory/80 font-light">
                  Founder & CMD, Platinum World Grroup • Global Hospitality Entrepreneur & Investor
                </span>
              </div>
            </motion.div>
          </div>

          {/* Long-Form Editorial Column */}
          <div className="lg:col-span-6 space-y-10 lg:pt-4">
            
            <div className="space-y-4">
              <span className="font-subheading text-[10px] tracking-[0.24em] uppercase text-bronze font-mono">
                Trajectory & Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal leading-snug">
                An international career spanning events, weddings, celebrations, hospitality, luxury hotels, destinations and travel.
              </h3>
            </div>

            {/* Approved Narrative Text from Brief */}
            <div className="space-y-6 font-sans text-base sm:text-lg text-ivory/85 leading-relaxed font-light">
              <p>
                Sushill Waddhwa is a Global Hospitality Entrepreneur, Investor and Founder & CMD of Platinum World Grroup. He divides his time between Mumbai, Dubai, Sri Lanka and Europe.
              </p>
              <p>
                His journey began with his first event in the first year of Hotel Management in 1989 and evolved into an international career spanning events, weddings, celebrations, hospitality, luxury hotels, destinations and travel.
              </p>
              <p>
                His work has taken him across 82 countries and 2,040+ luxury hotels, building extensive relationships with hotels, destinations, planners and hospitality leaders worldwide. He is constantly exploring new hotels and destinations to promote for events, destination weddings, celebrations and luxury travel.
              </p>
            </div>

            {/* Entrepreneurial Focus */}
            <div className="pt-6 border-t border-bronze/20 space-y-2">
              <h4 className="font-subheading text-xs uppercase tracking-[0.18em] text-bronze font-medium font-mono">
                Entrepreneurial Interests
              </h4>
              <p className="font-sans text-sm sm:text-base text-stone leading-relaxed font-light">
                Events and wedding tourism, hospitality, investments, lifestyle experiences, media, and entertainment.
              </p>
            </div>

          </div>

        </div>

        {/* REFINED TYPOGRAPHIC MILESTONE STRIP (Cinematic, not small cards) */}
        <div className="w-full border-y border-bronze/30 py-12 sm:py-16 mb-24 sm:mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            <div className="space-y-2 border-l border-bronze/30 pl-6">
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory block font-normal tracking-tight">
                1989
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono">
                First Event
              </span>
              <p className="font-sans text-xs text-stone font-light">
                During 1st year of Hotel Management
              </p>
            </div>

            <div className="space-y-2 border-l border-bronze/30 pl-6">
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory block font-normal tracking-tight">
                82
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono">
                Countries
              </span>
              <p className="font-sans text-xs text-stone font-light">
                Explored across international hospitality
              </p>
            </div>

            <div className="space-y-2 border-l border-bronze/30 pl-6">
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory block font-normal tracking-tight">
                2,040+
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono">
                Luxury Hotels
              </span>
              <p className="font-sans text-xs text-stone font-light">
                Evaluated for buyouts & celebrations
              </p>
            </div>

            <div className="space-y-2 border-l border-bronze/30 pl-6">
              <span className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory block font-normal tracking-tight">
                4 Hubs
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono">
                Global Bases
              </span>
              <p className="font-sans text-xs text-stone font-light">
                Mumbai • Dubai • Sri Lanka • Europe
              </p>
            </div>

          </div>
        </div>

        {/* PERSONAL VISUAL INTERLUDE: Fitness & Emerging Passions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden bg-navy border border-bronze/30 shadow-2xl">
              <img
                src={fitnessImg}
                alt="Sushill Waddhwa during a fitness and wellbeing moment"
                style={{ objectPosition: "center 20%" }}
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-subheading text-[9px] uppercase tracking-[0.2em] text-bronze bg-obsidian/90 px-3 py-1 border border-bronze/20 font-mono">
                  Personal Interlude • Fitness & Wellbeing
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="font-subheading text-[10px] tracking-[0.24em] text-bronze uppercase font-mono">
              Beyond Enterprise
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal leading-snug">
              Passionate about travel, fitness, style, hotels, astrology, numerology, and discovering new experiences.
            </h3>
            <p className="font-sans text-sm sm:text-base text-stone leading-relaxed font-light">
              He continues to explore new ventures, creative storytelling, and emerging technologies—continually seeking out landmark hotels and undiscovered destinations to promote for world-class destination weddings, private celebrations, and luxury travel.
            </p>
          </div>

        </div>

        {/* MANDATORY CLOSING LINE: Art-Directed Typography */}
        <div className="text-center border-t border-bronze/20 pt-16 sm:pt-20">
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bronze-champagne font-normal tracking-tight">
            “Celebrating Life with Sushill Waddhwa”
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
