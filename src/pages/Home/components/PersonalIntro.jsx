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
                  The Principal · Since 1989
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink leading-tight">
                Global access.
                <br />
                <span className="italic font-light text-stone-dark">
                  Personally curated.
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
                Sushill Waddhwa is a global hospitality entrepreneur, investor, and luxury lifestyle personality who has spent more than 35 years building enduring relationships across the world's most guarded hospitality icons, sovereign destinations, and luxury platforms.
              </p>
              <p>
                As Founder & CMD of <span className="text-ink font-medium">Platinum World Grroup</span>, his career began in 1989 pioneering experiential corporate gatherings and bespoke celebration tourism. Over decades, his influence expanded into total hotel buyouts, destination weddings, strategic hotel advisory through <span className="text-ink font-medium">Artoso Hospitality Corp.</span>, and thought leadership forums such as <span className="text-ink font-medium">WedTalks</span>.
              </p>
              <p>
                Grounded in the values of authentic Indian warmth and cosmopolitan sophistication, Sushill operates with quiet confidence, discretion, and an instinctive eye for moments that transcend standard luxury.
              </p>
            </motion.div>

            {/* Signature & Profile Action */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="pt-6 border-t border-stone/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div>
                <span className="font-serif italic text-2xl text-ink tracking-wide block font-normal">
                  Sushill Waddhwa
                </span>
                <span className="text-[11px] uppercase tracking-widest text-stone-dark block mt-0.5">
                  Founder & CMD, Platinum World Grroup · Since 1989
                </span>
              </div>

              <Button to="/about" variant="outline" size="md">
                Read Full Journey
              </Button>
            </motion.div>
          </div>

          {/* Portrait Column: Desktop Right, Mobile First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
            {/* Subtle dark-charcoal image frame with thin bronze edge */}
            <div className="relative border border-ink/20 p-2 sm:p-2.5 bg-ink/5">
              <div className="relative aspect-[2/3] overflow-hidden bg-stone/10 border border-bronze/30">
                <img
                  src={editorialPortrait}
                  alt="Sushill Waddhwa, Global Hospitality Leader and Founder"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Minimalist corner registration mark */}
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-bronze pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-bronze pointer-events-none" />
            </div>

            {/* Caption mark */}
            <div className="mt-3 flex items-center justify-between text-[10px] tracking-super-wide uppercase font-mono text-stone-dark">
              <span>Sushill Waddhwa</span>
              <span className="text-bronze">Executive Profile</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
