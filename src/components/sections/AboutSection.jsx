import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import portraitImg from '@/assets/images/editorial/sushill-framed-portrait.jpg';
import fitnessImg from '@/assets/images/editorial/editorial-lifestyle-fitness.jpg';

export const AboutSection = () => {
  const sectionRef = useRef(null);

  // Subtle parallax on the anchor portrait
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const portraitParallaxY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-obsidian text-ivory py-24 md:py-32 border-t border-bronze/25"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20 border-b border-bronze/20 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-subheading text-[10px] tracking-super-wide text-bronze uppercase font-mono">
                CHAPTER 01
              </span>
              <span className="text-stone/40 font-mono text-xs">//</span>
              <span className="font-subheading text-[10px] tracking-super-wide text-stone uppercase">
                TRAJECTORY & VISION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              About Sushill Waddhwa
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase font-mono">
            Mumbai • Dubai • Sri Lanka • Europe
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 sm:mb-28">
          
          {/* Left Column: Anchor Visual with Secondary Inset Moment */}
          <div className="lg:col-span-5 relative">
            
            {/* Primary Anchor Portrait */}
            <motion.div
              style={{ y: portraitParallaxY }}
              className="relative aspect-[3/4] w-full overflow-hidden bg-navy border border-bronze/35 shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
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
              
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian/90 backdrop-blur-sm border border-bronze/20">
                <span className="font-subheading text-[9px] uppercase tracking-super-wide text-bronze block font-mono font-medium">
                  Sushill Waddhwa
                </span>
                <span className="font-sans text-xs text-ivory/80 font-light">
                  Founder & CMD, Platinum World Grroup
                </span>
              </div>
            </motion.div>

            {/* Secondary Visual Moment: Integrated Fitness Image (Editorial Inset) */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 lg:-right-8 w-44 md:w-52 aspect-[3/4] overflow-hidden bg-obsidian border-2 border-bronze/40 shadow-2xl z-20">
              <img
                src={fitnessImg}
                alt="Sushill Waddhwa during a fitness and wellbeing moment"
                style={{ objectPosition: "center 20%" }}
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="font-subheading text-[8px] uppercase tracking-widest text-bronze bg-obsidian/90 px-2 py-0.5 border border-bronze/25 font-mono">
                  Fitness & Vitality
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Narrative & Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            
            <div className="space-y-4">
              <span className="font-subheading text-[10px] tracking-super-wide uppercase text-bronze font-mono">
                Global Track Record
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal leading-snug">
                An international career spanning events, weddings, celebrations, hospitality, luxury hotels, destinations and travel.
              </h3>
            </div>

            {/* Approved Revised Brief Text */}
            <div className="space-y-5 font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
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

            {/* Mobile Fitness Inset for small screens */}
            <div className="sm:hidden block pt-4">
              <div className="relative aspect-[4/5] max-w-[240px] mx-auto overflow-hidden bg-obsidian border border-bronze/30 shadow-lg">
                <img
                  src={fitnessImg}
                  alt="Sushill Waddhwa during a fitness and wellbeing moment"
                  style={{ objectPosition: "center 20%" }}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-2 left-2 right-2 text-center">
                  <span className="font-subheading text-[8px] uppercase tracking-widest text-bronze bg-obsidian/90 px-2 py-0.5 border border-bronze/20 font-mono">
                    Fitness & Vitality
                  </span>
                </div>
              </div>
            </div>

            {/* Fields of Focus from Brief */}
            <div className="pt-6 border-t border-bronze/20 space-y-4">
              <div>
                <h4 className="font-subheading text-[11px] uppercase tracking-wider text-bronze font-semibold mb-1 font-mono">
                  Entrepreneurial Interests
                </h4>
                <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                  Events and wedding tourism, hospitality, investments, lifestyle experiences, media and entertainment.
                </p>
              </div>

              <div>
                <h4 className="font-subheading text-[11px] uppercase tracking-wider text-bronze font-semibold mb-1 font-mono">
                  Personal Passions
                </h4>
                <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed font-light">
                  Beyond business, he is passionate about travel, fitness, style, hotels, astrology, numerology and discovering new experiences. He continues to explore new ventures, creative storytelling and emerging technologies.
                </p>
              </div>
            </div>

            {/* MANDATORY Closing Line */}
            <div className="pt-4">
              <p className="font-serif italic text-xl sm:text-2xl text-bronze-champagne">
                “Celebrating Life with Sushill Waddhwa”
              </p>
            </div>

          </div>

        </div>

        {/* Refined Typographic Milestone Strip */}
        <div className="w-full bg-navy border border-bronze/30 p-6 sm:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-bronze/20">
            
            <div className="pt-4 sm:pt-0 sm:px-4 first:pl-0">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory block font-normal tracking-tight">
                1989
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-bronze block mt-1 font-mono">
                First Event Organized
              </span>
              <p className="font-sans text-[11px] text-stone mt-1 font-light">
                During 1st year of Hotel Management
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory block font-normal tracking-tight">
                82
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-bronze block mt-1 font-mono">
                Countries Experienced
              </span>
              <p className="font-sans text-[11px] text-stone mt-1 font-light">
                Global footprint & relationships
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory block font-normal tracking-tight">
                2,040+
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-bronze block mt-1 font-mono">
                Luxury Hotels
              </span>
              <p className="font-sans text-[11px] text-stone mt-1 font-light">
                Explored & evaluated worldwide
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory block font-normal tracking-tight">
                4 Hubs
              </span>
              <span className="font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-bronze block mt-1 font-mono">
                Bases of Operation
              </span>
              <p className="font-sans text-[11px] text-stone mt-1 font-light">
                Mumbai • Dubai • Sri Lanka • Europe
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
