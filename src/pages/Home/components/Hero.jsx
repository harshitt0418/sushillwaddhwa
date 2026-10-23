import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import { fadeIn, transitions } from '@/lib/motion';
import heroImg from '@/assets/images/editorial/editorial-hero-architecture.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-obsidian text-ivory overflow-hidden pt-28 sm:pt-36">
      {/* Background Architectural Visual Layer with Neutral Black Depth (No blue tints!) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          src={heroImg}
          alt="Architectural luxury hospitality interior"
          initial={{ scale: 1.08, opacity: 0.8 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{ duration: 2.4, ease: transitions.luxuryEase }}
          className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-[1.15] grayscale-[0.2]"
        />
        {/* Obsidian Black & Charcoal Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-transparent to-obsidian/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,21,23,0.4)_0%,rgba(10,10,11,0.95)_85%)]" />
      </div>

      {/* Top Ledger: Architectural Metadata Stamp */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex items-center justify-between text-[9px] sm:text-[10px] tracking-super-wide uppercase font-mono text-warmgrey-light">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold/90">[ ARCHIVE REF. 1989 — 2026 ]</span>
        </div>
        <div className="hidden sm:block text-warmgrey tracking-widest">
          DESTINATION VISION · HOTEL BUYOUTS · CULTURE
        </div>
      </div>

      {/* Main Hero Narrative Composition */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 my-auto py-12 sm:py-16">
        <div className="max-w-4xl">
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

          {/* Master Tagline as Large Editorial Headline with Staggered Word Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: transitions.luxuryEase, delay: 0.2 }}
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

          {/* Magnetic Primary & Secondary Actions */}
          <motion.div
            variants={fadeIn('up', 0.55)}
            initial="initial"
            animate="animate"
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Button to="/business" variant="dark" size="lg">
              Explore Ventures
            </Button>
            <Button to="/contact" variant="darkOutline" size="lg">
              Begin a Conversation
            </Button>
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
