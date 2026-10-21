import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn } from '@/lib/motion';
import editorialPortrait from '@/assets/images/sushill-waddhwa-editorial-portrait.png';

export const PersonalIntro = () => {
  return (
    <section className="py-24 sm:py-36 bg-bone-light text-ink hairline-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Column: Desktop Left, Mobile Second */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-bronze" />
                <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                  The Founder · Since 1989
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink leading-tight">
                Global vision.
                <br />
                <span className="italic font-light text-stone-dark">
                  Personally guided.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4 text-stone-dark text-sm sm:text-base leading-relaxed font-light"
            >
              <p>
                Sushill Waddhwa is a global hospitality entrepreneur, investor, and luxury lifestyle personality who has spent more than 35 years building enduring relationships across premier luxury hotels, international destinations, and hospitality platforms.
              </p>
              <p>
                As Founder & CMD of <span className="text-ink font-medium">Platinum World Grroup</span>, his career began in 1989 pioneering experiential corporate gatherings and bespoke celebration tourism. Over decades, his focus expanded into luxury hotel buyouts, destination weddings, strategic hotel advisory through <span className="text-ink font-medium">Artoso Hospitality Corp.</span>, and thought leadership forums such as <span className="text-ink font-medium">WedTalks</span>.
              </p>
              <p>
                Grounded in the values of authentic Indian warmth and cosmopolitan sophistication, Sushill operates with quiet confidence, discretion, and an instinctive eye for experiences that endure.
              </p>
            </motion.div>

            {/* Signature & Profile Action */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="pt-4 flex flex-wrap items-center gap-6"
            >
              <Button to="/about" variant="primary" size="md">
                Explore Full Biography
              </Button>
              <Button to="/collaborate" variant="secondary" size="md">
                Partnership Opportunities
              </Button>
            </motion.div>
          </div>

          {/* Editorial Portrait Column: Desktop Right, Mobile First */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              {/* Refined charcoal and thin bronze border frame */}
              <div className="relative border border-charcoal/30 p-2 sm:p-3 bg-bone shadow-sm">
                <div className="relative aspect-[3/4] overflow-hidden bg-bone-dim">
                  <img
                    src={editorialPortrait}
                    alt="Sushill Waddhwa, Global Hospitality Leader and Founder"
                    className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.02]"
                    loading="lazy"
                  />
                  {/* Subtle inner bronze accent line */}
                  <div className="absolute inset-0 border border-bronze/20 pointer-events-none" />
                </div>
              </div>

              {/* Minimal caption plate */}
              <div className="mt-4 flex items-center justify-between text-xs text-stone-dark font-mono">
                <span className="tracking-widest uppercase text-[10px]">Founder & CMD</span>
                <span className="text-bronze">Platinum World Grroup</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalIntro;
