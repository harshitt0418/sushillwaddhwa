import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

export const ContactHero = () => {
  return (
    <section className="pt-36 sm:pt-48 pb-16 sm:pb-24 bg-obsidian text-ivory border-b border-gold/15 relative overflow-hidden stacked-panel stacked-sticky z-10">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl space-y-6">
          <motion.div
            variants={fadeIn('down', 0.1)}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3 font-mono"
          >
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
            <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
              Executive Dialogue
            </span>
            <span className="text-gold/40 text-[10px] font-mono">[ DIRECT OFFICE ]</span>
          </motion.div>

          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial="initial"
            animate="animate"
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-ivory text-balance"
          >
            Begin with a conversation.
          </motion.h1>

          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="initial"
            animate="animate"
            className="text-base sm:text-lg text-warmstone max-w-2xl font-light leading-relaxed-luxury pt-2"
          >
            Share the nature of your initiative. Every enquiry is approached with professionalism, prompt attention, and direct executive oversight.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;