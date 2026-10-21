import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const ContactHero = () => {
  return (
    <section className="pt-36 sm:pt-44 pb-16 sm:pb-24 bg-bone text-ink hairline-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl space-y-6">
          <motion.div
            variants={fadeIn('down', 0.1)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-bronze" />
            <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
              Executive Dialogue
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="initial"
            animate="animate"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-ink text-balance"
          >
            Begin with a conversation.
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="initial"
            animate="animate"
            className="text-base sm:text-lg text-stone-dark max-w-2xl font-light leading-relaxed pt-2"
          >
            Share the nature of your initiative. Every enquiry is approached with professionalism, prompt attention, and direct executive oversight.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
