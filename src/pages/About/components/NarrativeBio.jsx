import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';
import { principalBio } from '@/data/timeline';

export const NarrativeBio = () => {
  return (
    <section className="py-24 sm:py-32 bg-midnight text-porcelain border-b border-gold/15">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Metadata */}
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:col-span-4 space-y-6 md:sticky md:top-32"
          >
            <div>
              <span className="text-[10px] uppercase tracking-super-wide text-gold block mb-1 font-mono">
                The Heritage
              </span>
              <h3 className="font-serif text-2xl text-porcelain font-normal">
                35+ Years of Trust & Discretion
              </h3>
            </div>

            <p className="text-xs text-warmstone leading-relaxed font-light">
              True leadership in global luxury hospitality is rooted in long-term trust, cultural empathy, and an uncompromising standard of execution.
            </p>

            <div className="pt-4 border-t border-gold/20 text-xs font-mono text-warmstone space-y-2">
              <div className="flex justify-between">
                <span>Founded:</span>
                <span className="text-porcelain font-sans">1989</span>
              </div>
              <div className="flex justify-between">
                <span>Core Venture:</span>
                <span className="text-porcelain font-sans">Platinum World Grroup</span>
              </div>
              <div className="flex justify-between">
                <span>Reach:</span>
                <span className="text-porcelain font-sans">Global Hospitality Network</span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Copy */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="md:col-span-8 space-y-6 text-sm sm:text-base md:text-lg text-warmstone font-light leading-relaxed"
          >
            <p className="text-porcelain font-normal text-lg sm:text-xl font-serif">
              {principalBio.lead}
            </p>

            {principalBio.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-6">
              <div className="p-6 bg-obsidian border border-gold/30 shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-gold font-mono block mb-2">
                  Guiding Principles
                </span>
                <ul className="text-xs sm:text-sm text-porcelain space-y-2.5 font-normal">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Relationship-first approach: honor commitments and nurture alliances across decades.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Bridge artistic and emotional vision with rigorous commercial and operational discipline.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Celebrate authentic Indian warmth while delivering seamless international standards.
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
