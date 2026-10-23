import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const Manifesto = () => {
  return (
    <section className="py-24 md:py-36 bg-midnight text-porcelain relative overflow-hidden border-b border-gold/15">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column / Eyebrow */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium font-mono">
                The Philosophy
              </span>
            </div>
            <p className="mt-4 text-xs font-mono text-warmstone/75">
              EST. 1989 · GLOBAL PERSPECTIVE
            </p>
          </div>

          {/* Right Column / Oversized Typography */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-porcelain text-balance">
              Building a world
              <br />
              <span className="italic font-light text-gold-champagne">
                worth experiencing.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-gold/10">
              <p className="text-sm sm:text-base text-warmstone leading-relaxed font-light">
                In an era dominated by superficial trends and algorithmic recommendations, extraordinary hospitality remains an inherently human art. It thrives within trusted relationships nurtured across decades, deep respect for cultural nuance, and an instinctive understanding of how to make people feel truly welcomed.
              </p>
              <p className="text-sm sm:text-base text-warmstone leading-relaxed font-light">
                Whether structuring a luxury hotel buyout for a landmark wedding, advising tourism boards on high-yield celebration economies, or concepting boutique hotels with soul, Sushill Waddhwa approaches every endeavor with quiet confidence, intellectual rigor, and genuine warmth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
