import React from 'react';
import { motion } from 'framer-motion';
import { selectedEcosystem } from '@/data/timeline';
import { fadeIn } from '@/lib/motion';

export const EcosystemGrid = () => {
  return (
    <section className="py-24 sm:py-32 bg-bone text-ink hairline-b">
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
            <span className="w-8 h-[1px] bg-bronze" />
            <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
              Venture Ecosystem
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
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
              className="p-8 sm:p-10 bg-bone-light border border-stone/30 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-stone/20 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-bronze font-mono">
                    {venture.since}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-stone-dark font-sans">
                    {venture.role}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                    {venture.name}
                  </h3>
                  <span className="text-xs uppercase tracking-super-wide text-bronze-dim block mt-1">
                    {venture.descriptor}
                  </span>
                </div>

                <p className="text-sm text-stone-dark font-light leading-relaxed pt-2">
                  {venture.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone/20 flex items-center justify-between text-xs text-stone-dark">
                <span>Verified Entity</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-bronze">Leadership Portfolio</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
