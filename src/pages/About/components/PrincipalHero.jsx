import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, imageMask } from '@/lib/motion';

export const PrincipalHero = () => {
  return (
    <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-bone text-ink hairline-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          
          {/* Headline Column */}
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
              An enduring career navigating international hospitality, confidential sovereign partnerships, and high-value asset positioning.
            </motion.p>
          </div>

          {/* Portrait Framed Column */}
          <motion.div
            variants={imageMask}
            initial="initial"
            animate="animate"
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] bg-ink-soft overflow-hidden border border-stone/30 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Sushill Waddhwa — Portrait"
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-super-wide text-bronze uppercase block">
                  Sushill Waddhwa
                </span>
                <span className="font-serif text-bone text-lg font-light">
                  Founder & Global Hospitality Leader
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
