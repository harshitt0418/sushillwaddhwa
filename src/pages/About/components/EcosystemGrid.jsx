import React from 'react';
import { motion } from 'framer-motion';
import { selectedEcosystem } from '@/data/timeline';
import { fadeIn } from '@/lib/motion';

export const EcosystemGrid = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 bg-ivory text-ink border-b border-ink/10 relative overflow-hidden stacked-panel stacked-panel-ivory z-40">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mb-16 sm:mb-20 space-y-4"
        >
          <div className="flex items-center gap-3 font-mono">
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
            <span className="text-[11px] uppercase tracking-super-wide text-gold font-semibold">
              Venture Ecosystem
            </span>
            <span className="text-ink/30 text-[10px] font-mono">[ DOSSIER 02 ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink leading-[1.08] tracking-tight">
            Operating platforms & strategic initiatives.
          </h2>
        </motion.div>

        {/* 2-Column High-Craft Monograph Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {selectedEcosystem.map((venture, idx) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.14 }}
              className="p-8 sm:p-12 bg-ivory-dim/60 border border-ink/15 flex flex-col justify-between space-y-8 shadow-sm crosshair-corner"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-ink/10 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-semibold">
                    {venture.since}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-warmgrey font-mono">
                    {venture.role}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                    {venture.name}
                  </h3>
                  <span className="text-xs uppercase tracking-super-wide text-gold block mt-1.5 font-mono font-medium">
                    {venture.descriptor}
                  </span>
                </div>

                <p className="text-sm text-ink/80 font-light leading-relaxed pt-2">
                  {venture.description}
                </p>
              </div>

              <div className="pt-5 border-t border-ink/10 flex items-center justify-between text-xs text-warmgrey">
                <span className="font-mono text-[10px] text-warmgrey">Verified Entity</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-gold font-medium">Leadership Portfolio</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
