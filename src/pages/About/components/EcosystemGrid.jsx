import React from 'react';
import { motion } from 'framer-motion';
import { selectedEcosystem } from '@/data/timeline';
import { fadeIn } from '@/lib/motion';

export const EcosystemGrid = () => {
  return (
    <section className="py-24 sm:py-32 bg-obsidian text-porcelain border-b border-gold/15">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium font-mono">
              Venture Ecosystem
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-porcelain leading-tight">
            Operating platforms & strategic initiatives.
          </h2>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {selectedEcosystem.map((venture, idx) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="p-8 sm:p-10 bg-midnight border border-gold/25 flex flex-col justify-between space-y-6 shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gold/20 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono">
                    {venture.since}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-warmstone font-sans">
                    {venture.role}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-porcelain font-normal">
                    {venture.name}
                  </h3>
                  <span className="text-xs uppercase tracking-super-wide text-gold-champagne block mt-1 font-mono">
                    {venture.descriptor}
                  </span>
                </div>

                <p className="text-sm text-warmstone font-light leading-relaxed pt-2">
                  {venture.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-warmstone">
                <span>Verified Entity</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-gold">Leadership Portfolio</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
