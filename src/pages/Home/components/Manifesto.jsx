import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const Manifesto = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-24 xl:py-32 lg:min-h-screen flex flex-col justify-center bg-ivory text-ink relative overflow-hidden border-b border-ink/10 stacked-panel stacked-panel-ivory stacked-sticky z-20">
      {/* Subtle paper grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-noise" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          {/* Left Column / Editorial Chapter Stamp */}
          <div className="lg:col-span-3 space-y-6 lg:border-r border-ink/10 lg:pr-8">
            <div className="flex items-center gap-3 font-mono">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-semibold">
                The Philosophy
              </span>
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-2xl sm:text-3xl text-ink/30 block font-light">
                02 / 07
              </span>
              <p className="text-xs font-mono text-warmgrey tracking-widest uppercase">
                EST. 1989 · GLOBAL PERSPECTIVE
              </p>
            </div>

            <div className="hidden lg:block pt-8 text-[11px] font-mono text-warmgrey space-y-1">
              <p>HUMAN CONNECTION</p>
              <p>CULTURAL NUANCE</p>
              <p>OPERATIONAL RIGOR</p>
            </div>
          </div>

          {/* Right Column / Oversized Haute-Couture Statement */}
          <div className="lg:col-span-9 space-y-10 lg:pl-4">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.06] tracking-tight text-ink text-balance">
              Building a world
              <br />
              <span className="italic font-light text-gold">
                worth experiencing.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pt-6 border-t border-ink/10">
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed-luxury font-light">
                In an era dominated by superficial trends and algorithmic recommendations, extraordinary hospitality remains an inherently human art. It thrives within trusted relationships nurtured across decades, deep respect for cultural nuance, and an instinctive understanding of how to make people feel truly welcomed.
              </p>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed-luxury font-light">
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
