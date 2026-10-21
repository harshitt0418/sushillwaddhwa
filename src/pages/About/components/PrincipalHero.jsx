import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, imageMask } from '@/lib/motion';
import editorialPortrait from '@/assets/images/sushill-waddhwa-editorial-portrait.png';

export const PrincipalHero = () => {
  return (
    <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-bone text-ink hairline-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Headline & Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                The Principal · Executive Profile
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-ink text-balance"
            >
              Built on relationships.
              <br />
              <span className="italic font-light text-stone-dark">
                Recognised by results.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-stone-dark max-w-xl font-light leading-relaxed"
            >
              An enduring career navigating international hospitality, destination partnerships, hotel advisory, and boutique hospitality development.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="initial"
              animate="animate"
              className="pt-4 border-t border-stone/20 flex flex-wrap items-center gap-6 text-xs font-mono text-stone-dark"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                <span>Platinum World Grroup</span>
              </div>
              <span className="text-stone/40">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                <span>Artoso Hospitality Corp.</span>
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
            {/* Subtle dark-charcoal frame with thin bronze edge */}
            <div className="relative border border-ink/20 p-2 sm:p-2.5 bg-ink/5">
              <div className="relative aspect-[2/3] overflow-hidden bg-stone/10 border border-bronze/30">
                <img
                  src={editorialPortrait}
                  alt="Sushill Waddhwa, Global Hospitality Leader and Founder"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>

              {/* Minimalist corner registration mark */}
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-bronze pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-bronze pointer-events-none" />
            </div>

            {/* Discreet caption pill */}
            <div className="mt-3 flex items-center justify-between text-[10px] tracking-super-wide uppercase font-mono text-stone-dark">
              <span>Sushill Waddhwa</span>
              <span className="text-bronze">Founder & CMD</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
