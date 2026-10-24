import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn, imageMask } from '@/lib/motion';
import editorialPortrait from '@/assets/images/editorial/sushill-palace-portrait.jpg';

export const PersonalIntro = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 bg-ivory text-ink border-b border-ink/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Narrative Column: Desktop Left, Mobile Second */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 font-mono">
                <span className="w-8 sm:w-12 h-[1px] bg-gold" />
                <span className="text-[11px] uppercase tracking-super-wide text-gold font-semibold">
                  The Founder · Since 1989
                </span>
                <span className="text-ink/30 text-[10px] font-mono">[ 03 / 07 ]</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink leading-[1.08] tracking-tight">
                Global vision.
                <br />
                <span className="italic font-light text-gold">
                  Personally guided.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-5 text-ink/80 text-sm sm:text-base leading-relaxed-luxury font-light max-w-2xl"
            >
              <p>
                Sushill Waddhwa is a global hospitality entrepreneur, investor, and luxury lifestyle personality who has spent more than 35 years building enduring relationships across premier luxury hotels, international destinations, and hospitality platforms.
              </p>
              <p>
                As Founder & CMD of <span className="text-ink font-semibold">Platinum World Grroup</span>, his career began in 1989 pioneering experiential corporate gatherings and bespoke celebration tourism. Over decades, his focus expanded into luxury hotel buyouts, destination weddings, strategic hotel advisory through <span className="text-ink font-semibold">Artoso Hospitality Corp.</span>, and thought leadership forums such as <span className="text-ink font-semibold">WedTalks</span>.
              </p>
              <p>
                Grounded in the values of authentic Indian warmth and cosmopolitan sophistication, Sushill operates with quiet confidence, discretion, and an instinctive eye for experiences that endure.
              </p>
            </motion.div>

            {/* Actions with Magnetic Micro-Interaction */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6"
            >
              <Button to="/about" variant="primary" size="md">
                Explore Full Biography
              </Button>
              <Button to="/collaborate" variant="lightOutline" size="md">
                Partnership Opportunities
              </Button>
            </motion.div>
          </div>

          {/* Editorial Portrait Column: Desktop Right, Mobile First */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              variants={imageMask}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              {/* Refined Charcoal Frame with Thin Antique Gold Edge */}
              <div className="relative border border-ink/20 p-2 sm:p-3.5 bg-ivory-dim shadow-xl crosshair-corner">
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory border border-gold/40">
                  <img
                    src={editorialPortrait}
                    alt="Sushill Waddhwa, Global Hospitality Leader and Founder"
                    className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.03] transition-transform duration-1000 ease-out hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle inner gold accent border */}
                  <div className="absolute inset-0 border border-gold/25 pointer-events-none" />
                </div>
              </div>

              {/* Minimal caption plate */}
              <div className="mt-4 flex items-center justify-between text-xs text-ink/70 font-mono pt-1">
                <span className="tracking-widest uppercase text-[10px] text-warmgrey">Founder & CMD</span>
                <span className="text-gold tracking-wider text-[11px] font-semibold">Platinum World Grroup</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;
