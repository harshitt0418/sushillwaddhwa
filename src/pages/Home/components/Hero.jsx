import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import { fadeIn, transitions } from '@/lib/motion';
import heroImg from '@/assets/images/editorial/editorial-hero-architecture.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-obsidian text-porcelain overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16">
      {/* Background Architectural Visual Layer with Cinematic Depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          src={heroImg}
          alt="Architectural luxury hospitality interior"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1.03, opacity: 1 }}
          transition={{ duration: 2.4, ease: transitions.luxuryEase }}
          className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-[1.15] saturate-[0.9]"
        />
        {/* Obsidian Navy & Deep Midnight Atmospheric Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-transparent to-obsidian/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,40,74,0.35)_0%,rgba(8,13,23,0.95)_80%)]" />
      </div>

      {/* Architectural Corner Registration Marks & Ledger Stamp */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex items-center justify-between text-[9px] sm:text-[10px] tracking-super-wide uppercase font-mono text-warmstone/60">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold/80">[ ARCHIVE REF. 1989 — 2026 ]</span>
        </div>
        <div className="hidden sm:block text-warmstone/50 tracking-widest">
          DESTINATION VISION · HOTEL BUYOUTS · CULTURE
        </div>
      </div>

      {/* Main Hero Narrative Composition */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-12 my-auto py-12">
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
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-porcelain leading-[1.04] tracking-tight text-balance"
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
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-warmstone max-w-2xl font-light leading-relaxed-luxury text-balance"
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
            <Button to="/business" variant="primary" size="lg">
              Explore Ventures
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Begin a Conversation
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ledger & Editorial Scroll Invitation */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 flex items-end justify-between text-[10px] sm:text-[11px] font-mono text-warmstone/60 pt-4 border-t border-white/5">
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-gold">01</span>
          <span className="w-6 h-[1px] bg-gold/40" />
          <span>PROLOGUE</span>
        </div>

        {/* Scroll indicator with animated kinetic pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-center gap-2.5 mx-auto sm:mx-0 text-warmstone/70 hover:text-gold transition-colors cursor-pointer"
        >
          <span className="uppercase tracking-super-wide text-[9px] font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-3.5 h-3.5 stroke-[1.75] text-gold" />
          </motion.div>
        </motion.div>

        <div className="hidden sm:block text-right">
          <span>GLOBAL HOSPITALITY · INVESTMENTS · LIFESTYLE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
