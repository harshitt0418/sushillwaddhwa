import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { principalBio } from '@/data/timeline';

export const NarrativeBio = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 bg-midnight text-porcelain border-b border-gold/15 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Metadata / Archival Column */}
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6 md:sticky md:top-36"
          >
            <div>
              <span className="text-[10px] uppercase tracking-super-wide text-gold block mb-1 font-mono">
                The Heritage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-porcelain font-normal">
                35+ Years of Trust & Discretion
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-warmstone leading-relaxed font-light">
              True leadership in global luxury hospitality is rooted in long-term trust, cultural empathy, and an uncompromising standard of execution.
            </p>

            <div className="pt-6 border-t border-gold/20 text-xs font-mono text-warmstone space-y-3">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-warmstone/70">Founded:</span>
                <span className="text-porcelain font-sans font-medium">1989</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-warmstone/70">Core Venture:</span>
                <span className="text-porcelain font-sans font-medium">Platinum World Grroup</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-warmstone/70">Reach:</span>
                <span className="text-porcelain font-sans font-medium">Global Hospitality Network</span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Copy */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:col-span-8 space-y-7 text-sm sm:text-base md:text-lg text-warmstone font-light leading-relaxed-luxury"
          >
            <p className="text-porcelain font-normal text-xl sm:text-2xl font-serif leading-snug">
              {principalBio.lead}
            </p>

            {principalBio.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed-luxury">
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <div className="p-6 sm:p-8 bg-obsidian border border-gold/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] crosshair-corner">
                <span className="text-[10px] uppercase tracking-widest text-gold font-mono block mb-3">
                  Guiding Principles
                </span>
                <ul className="text-xs sm:text-sm text-porcelain space-y-3 font-normal">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>Relationship-first approach: honor commitments and nurture alliances across decades.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>Bridge artistic and emotional vision with rigorous commercial and operational discipline.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>Celebrate authentic Indian warmth while delivering seamless international standards.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NarrativeBio;
