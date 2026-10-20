import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn, imageMask } from '@/lib/motion';

export const PersonalIntro = () => {
  return (
    <section className="py-24 sm:py-36 bg-bone-light text-ink hairline-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Image Column */}
          <motion.div
            variants={imageMask}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-ink/5 border border-stone/30">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="Sushill Waddhwa — The Principal"
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
              {/* Subtle tint overlay */}
              <div className="absolute inset-0 bg-bronze/10 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Frame Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-ink text-bone p-5 border border-bronze/30 shadow-xl max-w-xs">
              <span className="text-[10px] uppercase tracking-super-wide text-bronze block mb-1">
                Leadership
              </span>
              <p className="font-serif text-lg leading-snug">
                Discretion is the architecture of trust.
              </p>
            </div>
          </motion.div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-bronze" />
                <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                  The Principal
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                Architecting relationships across the world’s most private rooms.
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
                As the founder of <span className="text-ink font-normal">Platinum World Group</span> and <span className="text-ink font-normal">Platinum World Lifestyle</span>, Sushill Waddhwa has spent decades operating as a trusted strategic ally to royal families, luxury wedding directors, corporate leaders, and sovereign property holders.
              </p>
              <p>
                His reputation rests upon solving what seems impossible: completely closing luxury island resorts for exclusive three-day nuptials, sourcing off-market prime penthouses, and commissioning heavy aircraft charters at zero notice.
              </p>
              <p>
                Every transaction and connection is built upon a single standard: uncompromising discretion and absolute alignment of values.
              </p>
            </motion.div>

            {/* Signature & CTA Lockup */}
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
                  Founder · Global Hospitality Leader
                </span>
              </div>

              <Button to="/about" variant="outline" size="md">
                Read Principal Profile
              </Button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
