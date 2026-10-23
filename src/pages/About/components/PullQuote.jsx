import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const PullQuote = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 bg-charcoal text-ivory relative overflow-hidden border-t border-b border-gold/15">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-4xl sm:text-5xl font-serif text-gold block select-none">
            “
          </span>

          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-ivory tracking-tight text-balance">
            The real value is not access alone — it is knowing what deserves to be accessed, and honoring the relationships that make it possible.
          </blockquote>

          <div className="pt-4 flex flex-col items-center gap-1.5">
            <cite className="not-italic text-sm tracking-widest text-gold uppercase font-mono font-semibold">
              Sushill Waddhwa
            </cite>
            <span className="text-xs text-warmgrey font-light font-mono">
              Founder & CMD, Platinum World Grroup · Since 1989
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PullQuote;
