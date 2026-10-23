import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LuxuryPreloader = ({ onComplete }) => {
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Respect reduced motion preferences or if already played this session
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let alreadyPlayed = false;
    try {
      alreadyPlayed = typeof window !== 'undefined' && !!sessionStorage.getItem('sw_intro_played');
    } catch (e) {}

    if (prefersReducedMotion || alreadyPlayed) {
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll during arrival moment
    document.body.style.overflow = 'hidden';

    // Sequence timing: ~1.2s, then smooth parting reveal (total ~1.8s)
    const dismissTimer = setTimeout(() => {
      setIsDismissing(true);
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        try {
          sessionStorage.setItem('sw_intro_played', 'true');
        } catch (e) {}
        if (onComplete) onComplete();
      }, 650);
    }, 1150);

    return () => {
      clearTimeout(dismissTimer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      try {
        sessionStorage.setItem('sw_intro_played', 'true');
      } catch (e) {}
      if (onComplete) onComplete();
    }, 350);
  };

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-50 pointer-events-auto cursor-pointer select-none overflow-hidden bg-obsidian"
    >
      <AnimatePresence>
        {/* Central Monograph Content - Clean, Minimalist, Fast */}
        {!isDismissing && (
          <motion.div
            key="preloader-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-ivory pointer-events-none"
          >
            {/* Architectural Diamond Monogram Badge with Antique Gold Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-12 h-12 mb-5 border border-gold/60 rotate-45 flex items-center justify-center bg-charcoal shadow-2xl"
            >
              <span className="-rotate-45 font-serif text-base text-ivory tracking-widest font-normal">
                SW
              </span>
            </motion.div>

            {/* Primary Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-4xl uppercase tracking-[0.22em] font-normal text-ivory text-center"
            >
              Sushill Waddhwa
            </motion.h1>

            {/* Master Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif italic text-sm sm:text-base text-ivory/80 font-light mt-2 text-center"
            >
              “Building a world worth experiencing.”
            </motion.p>

            {/* Delicate Gold Hairline Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="w-24 sm:w-32 h-[1px] bg-white/10 overflow-hidden relative mt-6"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full bg-gold"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Solid Opaque Symmetrical Shutter Doors in Obsidian Black */}
        {!isDismissing ? (
          <>
            <motion.div
              key="shutter-top-solid"
              initial={{ y: 0 }}
              className="absolute inset-x-0 top-0 h-1/2 bg-obsidian z-10 border-none"
            />
            <motion.div
              key="shutter-bottom-solid"
              initial={{ y: 0 }}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-obsidian z-10 border-none"
            />
          </>
        ) : (
          <>
            {/* The parting doors during dismissal */}
            <motion.div
              key="shutter-top-parting"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-x-0 top-0 h-1/2 bg-obsidian z-30 border-b border-gold/60 shadow-2xl"
            />
            <motion.div
              key="shutter-bottom-parting"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-obsidian z-30 border-t border-gold/60 shadow-2xl"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LuxuryPreloader;