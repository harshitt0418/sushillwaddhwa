import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Globe, Sparkles, Building2 } from 'lucide-react';
import portraitImg from '@/assets/images/editorial/sushill-framed-portrait.jpg';
import fitnessImg from '@/assets/images/editorial/editorial-lifestyle-fitness.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-obsidian text-ivory py-20 md:py-28 border-t border-bronze/20">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16 border-b border-bronze/25 pb-6">
          <div>
            <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide text-bronze uppercase font-medium block mb-2">
              01 • Profile & Trajectory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
              About Sushill Waddhwa
            </h2>
          </div>
          <div className="font-subheading text-xs text-stone tracking-widest uppercase">
            Mumbai • Dubai • Sri Lanka • Europe
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Visual Presentation (Client Executive Portrait) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-navy border border-bronze/30 shadow-2xl">
              <img
                src={portraitImg}
                alt="Sushill Waddhwa — Global Hospitality Entrepreneur & Investor"
                style={{ objectPosition: "center 18%" }}
                className="w-full h-full object-cover filter contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian/80 backdrop-blur-sm border border-bronze/25">
                <span className="font-subheading text-[10px] uppercase tracking-super-wide text-bronze block font-medium">
                  Founder & CMD, Platinum World Grroup
                </span>
                <span className="font-sans text-xs text-ivory/80">
                  Global Hospitality Entrepreneur & Investor
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Concise Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-snug">
              Building international relationships across hospitality, destinations, and investments.
            </h3>

            {/* Paragraphs strictly from the revised brief */}
            <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
              Sushill Waddhwa is a Global Hospitality Entrepreneur, Investor and Founder & CMD of Platinum World Grroup. He divides his time between Mumbai, Dubai, Sri Lanka and Europe.
            </p>

            <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
              His journey began with his first event in the first year of Hotel Management in 1989 and evolved into an international career spanning events, weddings, celebrations, hospitality, luxury hotels, destinations and travel.
            </p>

            <p className="font-sans text-sm sm:text-base text-ivory/85 leading-relaxed font-light">
              His work has taken him across 82 countries and 2,040+ luxury hotels, building extensive relationships with hotels, destinations, planners and hospitality leaders worldwide. He is constantly exploring new hotels and destinations to promote for events, destination weddings, celebrations and luxury travel.
            </p>

            {/* Four Milestone Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-bronze/20">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-bronze block font-normal">1989</span>
                <span className="font-subheading text-[10px] uppercase tracking-wider text-stone">First Event</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-bronze block font-normal">82</span>
                <span className="font-subheading text-[10px] uppercase tracking-wider text-stone">Countries</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-bronze block font-normal">2,040+</span>
                <span className="font-subheading text-[10px] uppercase tracking-wider text-stone">Luxury Hotels</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-bronze block font-normal">4 Hubs</span>
                <span className="font-subheading text-[10px] uppercase tracking-wider text-stone">Global Bases</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interests & Lifestyle Section (Brief-Supported) */}
        <div className="bg-navy border border-bronze/25 p-6 sm:p-10 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="font-subheading text-[10px] sm:text-xs tracking-super-wide text-bronze uppercase font-medium block">
                Fields of Focus & Personal Pursuits
              </span>

              <div className="space-y-4">
                <div>
                  <h4 className="font-subheading text-xs uppercase tracking-wider text-ivory font-semibold mb-1.5">
                    Entrepreneurial Interests
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed">
                    Events and wedding tourism, hospitality, investments, lifestyle experiences, media, and entertainment.
                  </p>
                </div>

                <div>
                  <h4 className="font-subheading text-xs uppercase tracking-wider text-ivory font-semibold mb-1.5">
                    Personal Passions & Exploration
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-stone leading-relaxed">
                    Beyond business, he is passionate about travel, fitness, style, hotels, astrology, numerology, and discovering new experiences. He continues to explore new ventures, creative storytelling, and emerging technologies.
                  </p>
                </div>
              </div>

              {/* MANDATORY Closing Line from Brief */}
              <div className="pt-4 border-t border-bronze/20">
                <p className="font-serif italic text-lg sm:text-xl text-bronze-champagne">
                  “Celebrating Life with Sushill Waddhwa”
                </p>
              </div>
            </div>

            {/* Client Fitness & Wellbeing Photo */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-obsidian border border-bronze/30 shadow-xl">
                <img
                  src={fitnessImg}
                  alt="Sushill Waddhwa during a fitness and wellbeing moment"
                  style={{ objectPosition: "center 20%" }}
                  className="w-full h-full object-cover filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="font-subheading text-[9px] uppercase tracking-widest text-bronze/90 bg-obsidian/80 px-2.5 py-1 border border-bronze/20 inline-block font-mono">
                    Fitness & Wellbeing
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
