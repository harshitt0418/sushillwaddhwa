import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const PullQuote = () => {
  return (
    <section className="py-24 sm:py-36 bg-ink text-bone relative overflow-hidden hairline-dark-y">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <span className="text-4xl sm:text-5xl font-serif text-bronze block select-none">
            “
          </span>

          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-bone-light tracking-tight text-balance">
            The real value is not access alone — it is knowing what deserves to be accessed, and honoring the relationships that make it possible.
          </blockquote>

          <div className="pt-4 flex flex-col items-center gap-1">
            <cite className="not-italic text-sm tracking-widest text-bronze uppercase font-sans font-medium">
              Sushill Waddhwa
            </cite>
            <span className="text-xs text-stone font-light">
              Founder & CMD, Platinum World Grroup · Since 1989
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
