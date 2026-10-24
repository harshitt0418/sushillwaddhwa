import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, imageMask } from '@/lib/motion';
import editorialPortrait from '@/assets/images/editorial/sushill-framed-portrait.jpg';

export const PrincipalHero = () => {
  return (
    <section className="pt-36 sm:pt-48 pb-20 sm:pb-32 bg-obsidian text-ivory border-b border-gold/15 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Headline & Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3 font-mono"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                The Principal · Executive Profile
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ DOSSIER 01 ]</span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-3xl sm:text-5xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-ivory text-balance break-words"
            >
              Built on relationships.
              <br />
              <span className="italic font-light text-gold-champagne">
                Recognised by results.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-warmstone max-w-xl font-light leading-relaxed-luxury pt-2"
            >
              An enduring career navigating international hospitality, destination partnerships, hotel advisory, and boutique hospitality development.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="initial"
              animate="animate"
              className="pt-6 border-t border-gold/20 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono text-warmstone"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-ivory tracking-wider">Platinum World Grroup</span>
              </div>
              <span className="text-gold/30">/</span>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-ivory tracking-wider">Artoso Hospitality Corp.</span>
              </div>
            </motion.div>
          </div>

          {/* Large Vertical Editorial Portrait Column */}
          <motion.div
            variants={imageMask}
            initial="initial"
            animate="animate"
            className="lg:col-span-5 relative"
          >
            {/* Museum matting frame with fine gold corner registration marks */}
            <div className="relative border border-gold/30 p-2 sm:p-3 bg-charcoal shadow-[0_24px_60px_rgba(0,0,0,0.7)] crosshair-corner">
              <div className="relative aspect-[2/3] overflow-hidden bg-obsidian border border-gold/20">
                <img
                  src={editorialPortrait}
                  alt="Sushill Waddhwa, Global Hospitality Leader and Founder"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-1000 hover:scale-105"
                />
              </div>

              {/* Minimalist corner registration mark */}
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold pointer-events-none" />
            </div>

            {/* Discreet caption pill */}
            <div className="mt-4 flex items-center justify-between text-[10px] tracking-super-wide uppercase font-mono text-warmstone pt-1">
              <span>Sushill Waddhwa</span>
              <span className="text-gold tracking-wider">Founder & CMD</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PrincipalHero;
