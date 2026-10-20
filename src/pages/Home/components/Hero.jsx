import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';
import { fadeIn, transitions } from '@/lib/motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink text-bone overflow-hidden pt-24 pb-16">
      {/* Background Architectural Image Layer with subtle cinematic treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural luxury interior"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105 animate-pulseSlow"
        />
        {/* Editorial monochromatic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeIn('down', 0.1)}
          initial="initial"
          animate="animate"
          className="inline-flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="w-8 h-[1px] bg-bronze" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-super-wide text-stone-light font-medium">
            Global Hospitality · Private Access · Strategic Partnerships
          </span>
          <span className="w-8 h-[1px] bg-bronze" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: transitions.luxuryEase, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-bone leading-[1.05] tracking-tight max-w-5xl text-balance"
        >
          Access is not a luxury.
          <br />
          <span className="italic font-light text-stone-light">It is the beginning.</span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="initial"
          animate="animate"
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-stone max-w-2xl font-light leading-relaxed text-balance"
        >
          Sushill Waddhwa connects exceptional hospitality, global opportunity and considered relationships — creating possibilities where discretion matters.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="initial"
          animate="animate"
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Button to="/private-access" variant="dark" size="lg">
            Explore Private Access
          </Button>
          <Button to="/contact" variant="darkOutline" size="lg">
            Begin a Conversation
          </Button>
        </motion.div>
      </div>

      {/* Subtle Vertical Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone/60"
      >
        <span className="text-[9px] uppercase tracking-super-wide font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 stroke-[1.5]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
