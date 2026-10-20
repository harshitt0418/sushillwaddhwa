import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const Manifesto = () => {
  return (
    <section className="py-28 md:py-40 bg-bone text-ink relative overflow-hidden hairline-b">
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
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                The Philosophy
              </span>
            </div>
            <p className="mt-4 text-xs font-mono text-stone-dark">
              01 / 05 · A PRIVATE ACCESS HOUSE
            </p>
          </div>

          {/* Right Column / Oversized Typography */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-ink text-balance">
              Not more options.
              <br />
              <span className="italic font-light text-stone-dark">
                The right introduction.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <p className="text-sm sm:text-base text-stone-dark leading-relaxed font-light">
                In an era overwhelmed by platforms, listings, and algorithmic concierge desks, true influence remains deeply personal. The most valuable hotel buyouts, secluded estates, and maritime charters are never cataloged for public consumption.
              </p>
              <p className="text-sm sm:text-base text-stone-dark leading-relaxed font-light">
                Sushill Waddhwa acts as an uncompromising curator and confidential conduit — translating decades of institutional hospitality trust into seamless introductions where reputation, privacy, and precision are paramount.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
