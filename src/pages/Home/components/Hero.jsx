import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { fadeIn, transitions } from '@/lib/motion';
import heroPortrait from '@/assets/images/editorial/sushill-atrium-portrait.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between bg-obsidian text-ivory overflow-hidden pt-28 sm:pt-36 stacked-panel stacked-sticky z-10">
      {/* Background Architectural Atmosphere with Near-Black Navy Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-charcoal/40 rounded-full blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F7F4EE_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Top Ledger: Architectural Metadata Stamp */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex items-center justify-between text-[9px] sm:text-[10px] tracking-super-wide uppercase font-mono text-warmgrey">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold/90">[ ARCHIVE REF. 1989 — 2026 ]</span>
        </div>
        <div className="hidden sm:block text-warmgrey tracking-widest">
          DESTINATION VISION · HOTEL BUYOUTS · CULTURE
        </div>
      </div>

      {/* Main Hero Narrative Composition - Editorial Asymmetric Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 my-auto py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Stature */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow: Heritage Ledger */}
            <motion.div
              variants={fadeIn('down', 0.15)}
              initial="initial"
              animate="animate"
              className="inline-flex items-center gap-3 mb-6 sm:mb-8 font-mono"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[10px] sm:text-[11.5px] uppercase tracking-super-wide text-gold font-medium">
                Founder & CMD, Platinum World Grroup · Since 1989
              </span>
            </motion.div>

            {/* Master Tagline as Large Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: transitions.luxuryEase, delay: 0.2 }}
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-ivory leading-[1.04] tracking-tight text-balance"
            >
              Building a world
              <br />
              <span className="italic font-light text-gold-champagne tracking-normal">
                worth experiencing.
              </span>
            </motion.h1>

            {/* Subtitle / Positioning Statement */}
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="initial"
              animate="animate"
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-ivory/80 max-w-2xl font-light leading-relaxed-luxury text-balance"
            >
              Sushill Waddhwa connects exceptional hospitality, destination vision, global investments, and cultural lifestyle — shaping moments that endure.
            </motion.p>

            {/* Primary & Secondary Actions */}
            <motion.div
              variants={fadeIn('up', 0.55)}
              initial="initial"
              animate="animate"
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
            >
              <Button to="/business" variant="dark" size="lg">
                Explore Ventures
              </Button>
              <Button to="/contact" variant="darkOutline" size="lg">
                Begin a Conversation
              </Button>
            </motion.div>

            {/* Micro-ledger Proofpoints */}
            <motion.div
              variants={fadeIn('up', 0.65)}
              initial="initial"
              animate="animate"
              className="mt-10 pt-6 border-t border-gold/15 hidden sm:grid grid-cols-3 gap-6 text-[10px] uppercase font-mono tracking-wider text-warmgrey"
            >
              <div>
                <span className="text-gold font-semibold block text-xs">35+ YEARS</span>
                <span className="text-ivory/70">Legacy of Leadership</span>
              </div>
              <div>
                <span className="text-gold font-semibold block text-xs">GLOBAL</span>
                <span className="text-ivory/70">Luxury Hotel Buyouts</span>
              </div>
              <div>
                <span className="text-gold font-semibold block text-xs">ADVISORY</span>
                <span className="text-ivory/70">Tourism & Hospitality</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Hero Portrait in Luxury Gallery Matting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: transitions.luxuryEase, delay: 0.3 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Museum gallery frame with subtle antique gold edge and crosshair registration marks */}
            <div className="relative border border-gold/30 p-2 sm:p-3 bg-charcoal/80 shadow-[0_30px_80px_rgba(0,0,0,0.8)] backdrop-blur-sm crosshair-corner">
              <div className="relative aspect-[3/4] overflow-hidden bg-obsidian border border-gold/20">
                <img
                  src={heroPortrait}
                  alt="Sushill Waddhwa, Global Hospitality Entrepreneur and Investor"
                  className="w-full h-full object-cover object-[center_20%] filter contrast-[1.04] brightness-95 transition-transform duration-1000 ease-out hover:scale-105"
                  fetchPriority="high"
                  decoding="async"
                />
                {/* Subtle vignette shadow for luxury depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-obsidian/90 backdrop-blur-md border border-gold/25 flex items-center justify-between text-ivory">
                  <div>
                    <span className="text-[9px] uppercase tracking-super-wide text-gold block font-mono">
                      Principal Dossier
                    </span>
                    <span className="font-serif text-sm text-ivory/95 font-medium">
                      Sushill Waddhwa
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-warmgrey uppercase tracking-widest">
                    1989 — 2026
                  </span>
                </div>
              </div>

              {/* Corner accent registration markers */}
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Refined Ivory Editorial Ledger Block (Establishes Immediate Dark & Light Contrast) */}
      <div className="relative z-10 w-full bg-ivory text-ink border-t border-gold/40 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="text-gold font-semibold">01 / PROLOGUE</span>
            <span className="w-6 h-[1px] bg-ink/30" />
            <span className="text-ink/80 font-medium">GLOBAL HOSPITALITY & BESPOKE ADVISORY</span>
          </div>

          {/* Scroll invitation */}
          <div className="flex items-center gap-2 text-ink/70 hover:text-gold transition-colors self-end sm:self-auto">
            <span className="text-[9px]">Scroll to enter journal</span>
            <ChevronDown className="w-3.5 h-3.5 stroke-[2] text-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
