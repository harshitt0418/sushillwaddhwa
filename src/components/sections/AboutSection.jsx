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
  const portraitParallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-[#F5F1E8] text-[#111111] py-24 sm:py-32 md:py-40 border-t border-[#111111]/10 z-20"
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24 border-b border-[#111111]/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-mono font-medium">
                CHAPTER 01
              </span>
              <span className="text-stone/60 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] sm:text-xs tracking-[0.24em] text-bronze uppercase font-medium">
                SINCE 1989 — PRINCIPAL NARRATIVE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal tracking-tight">
              About Sushill Waddhwa
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone-dark tracking-[0.2em] uppercase font-mono text-left md:text-right">
            Mumbai • Dubai • Sri Lanka • Europe
          </div>
        </div>

        {/* 12-Column Grid: Portrait Left (5 cols), Text Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 sm:mb-32">
          
          {/* Large Anchor Portrait with Subtle Parallax */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: portraitParallaxY }}
              className="relative w-full aspect-[3/4] overflow-hidden bg-[#EDE8DD] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-bronze/20"
            >
              <img
                src={portraitImg}
                alt="Sushill Waddhwa — Global Hospitality Entrepreneur & Investor"
                style={{ objectPosition: "65% 40%" }}
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#111111]/85 backdrop-blur-sm border border-bronze/30">
                <span className="font-subheading text-[10px] uppercase tracking-[0.2em] text-bronze block font-mono font-semibold">
                  Sushill Waddhwa
                </span>
                <span className="font-sans text-xs text-[#F5F1E8]/90 font-light block mt-0.5">
                  Founder & CMD, Platinum World Grroup • Global Hospitality Entrepreneur & Investor
                </span>
              </div>
            </motion.div>
          </div>

          {/* Long-Form Editorial Column */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            
            <div className="space-y-4">
              <span className="font-subheading text-xs tracking-[0.22em] uppercase text-bronze font-mono font-semibold">
                Trajectory & Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal leading-snug">
                An international career spanning events, weddings, celebrations, hospitality, luxury hotels, destinations and travel.
              </h3>
            </div>

            {/* Approved Narrative Text */}
            <div className="space-y-5 font-sans text-base sm:text-lg text-[#6B6966] leading-relaxed font-light">
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
            <div className="pt-6 border-t border-[#111111]/10 space-y-2">
              <h4 className="font-subheading text-xs uppercase tracking-[0.18em] text-bronze font-semibold font-mono">
                Entrepreneurial Interests
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#6B6966] leading-relaxed font-light">
                Events and wedding tourism, hospitality, investments, lifestyle experiences, media, and entertainment.
              </p>
            </div>

          </div>

        </div>

        {/* Stats Strip: Warm Ivory/White Background with Dark Numbers, Thin Bronze Dividers */}
        <div className="w-full border-y border-bronze/30 py-10 sm:py-14 mb-24 sm:mb-32 bg-[#FAF7F2]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            
            <div className="space-y-2 border-l-2 border-bronze pl-6">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#111111] block font-normal tracking-tight">
                1989
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono font-semibold">
                First Event
              </span>
              <p className="font-sans text-xs text-[#6B6966] font-light">
                During 1st year of Hotel Management
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-bronze pl-6">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#111111] block font-normal tracking-tight">
                82
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono font-semibold">
                Countries
              </span>
              <p className="font-sans text-xs text-[#6B6966] font-light">
                Explored across international hospitality
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-bronze pl-6">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#111111] block font-normal tracking-tight">
                2,040+
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono font-semibold">
                Luxury Hotels
              </span>
              <p className="font-sans text-xs text-[#6B6966] font-light">
                Evaluated for buyouts & celebrations
              </p>
            </div>

            <div className="space-y-2 border-l-2 border-bronze pl-6">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#111111] block font-normal tracking-tight">
                4 Hubs
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-[0.2em] text-bronze block font-mono font-semibold">
                Global Bases
              </span>
              <p className="font-sans text-xs text-[#6B6966] font-light">
                Mumbai • Dubai • Sri Lanka • Europe
              </p>
            </div>

          </div>
        </div>

        {/* Second Row: Fitness & Passions (Interests) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#EDE8DD] border border-bronze/25 shadow-lg">
              <img
                src={fitnessImg}
                alt="Sushill Waddhwa during a fitness and wellbeing moment"
                style={{ objectPosition: "center 20%" }}
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="font-subheading text-[9px] uppercase tracking-[0.2em] text-bronze bg-[#111111]/90 px-3 py-1 border border-bronze/20 font-mono font-semibold">
                  Personal Interlude • Fitness & Wellbeing
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="font-subheading text-xs tracking-[0.22em] text-bronze uppercase font-mono font-semibold">
              Beyond Enterprise
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#111111] font-normal leading-snug">
              Passionate about travel, fitness, style, hotels, astrology, numerology, and discovering new experiences.
            </h3>
            <p className="font-sans text-base text-[#6B6966] leading-relaxed font-light">
              He continues to explore new ventures, creative storytelling, and emerging technologies—continually seeking out landmark hotels and undiscovered destinations to promote for world-class destination weddings, private celebrations, and luxury travel.
            </p>
          </div>

        </div>

        {/* Closing Quote: Art-Directed Cormorant Garamond in Bronze */}
        <div className="text-center border-t border-[#111111]/10 pt-16 sm:pt-20">
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bronze font-normal tracking-tight">
            “Celebrating Life with Sushill Waddhwa”
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
