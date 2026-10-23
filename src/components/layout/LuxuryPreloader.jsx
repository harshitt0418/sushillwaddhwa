import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LuxuryPreloader = ({ onComplete }) => {
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Respect reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll during arrival moment
    document.body.style.overflow = 'hidden';

    // Sequence timing: ~2.4s, then doors part open decisively
    const dismissTimer = setTimeout(() => {
      setIsDismissing(true);
      setTimeout(() => {
        document.body.style.overflow = 'auto';
        if (onComplete) onComplete();
      }, 1000);
    }, 2400);

    return () => {
      clearTimeout(dismissTimer);
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      if (onComplete) onComplete();
    }, 450);
  };

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-50 pointer-events-auto cursor-pointer select-none overflow-hidden bg-obsidian"
    >
      <AnimatePresence>
        {/* Central Monograph Content (Fades out when doors part) */}
        {!isDismissing && (
          <motion.div
            key="preloader-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 0.98,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-between p-6 sm:p-10 md:p-16 text-porcelain pointer-events-none"
          >
            {/* Opaque Internal Radial Sapphire & Gold Glow */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(20,40,74,0.45)_0%,#080D17_75%)] pointer-events-none" />

            {/* Inset Hairline Frame in Maybach Gold */}
            <div className="absolute inset-4 sm:inset-8 border border-gold/20 pointer-events-none z-10">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold" />
            </div>

            {/* Top Ledger: Institutional Details */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="w-full max-w-5xl mx-auto flex items-center justify-between text-[9px] sm:text-[10px] tracking-super-wide uppercase font-mono z-20 pt-2"
            >
              <div className="flex items-center gap-2.5 text-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span>FOUNDER & CMD, PLATINUM WORLD GRROUP</span>
              </div>
              <div className="hidden sm:flex items-center gap-6 text-warmstone/70">
                <span>GLOBAL HOSPITALITY & ADVISORY</span>
              </div>
              <div className="text-warmstone-dark">
                <span>SINCE 1989</span>
              </div>
            </motion.div>

            {/* Centerpiece: Monogram, Name & Master Tagline */}
            <div className="text-center max-w-3xl mx-auto z-20 my-auto px-4 flex flex-col items-center">
              
              {/* Architectural Diamond Monogram Badge with Maybach Gold Accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-12 h-12 sm:w-14 sm:h-14 mb-6 border border-gold/60 rotate-45 flex items-center justify-center bg-midnight shadow-2xl"
              >
                <span className="-rotate-45 font-serif text-lg sm:text-xl text-porcelain tracking-widest font-normal">
                  SW
                </span>
              </motion.div>

              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-2 max-w-xs sm:max-w-none"
              >
                <span className="text-[9px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.18em] sm:tracking-[0.28em] text-gold break-words">
                  GLOBAL HOSPITALITY ENTREPRENEUR · INVESTOR · LIFESTYLE
                </span>
              </motion.div>

              {/* Primary Name */}
              <div className="overflow-hidden py-1">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-2xl sm:text-5xl md:text-6xl uppercase tracking-[0.16em] sm:tracking-[0.2em] font-normal text-porcelain"
                >
                  Sushill Waddhwa
                </motion.h1>
              </div>

              {/* Master Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="font-serif italic text-lg sm:text-2xl text-porcelain/85 font-light mt-2 text-balance max-w-xl"
              >
                “Building a world worth experiencing.”
              </motion.p>

              {/* Expanding Gold Hairline Divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 sm:w-36 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-5"
              />

              {/* Four Ecosystem Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.05 }}
                className="space-y-2 max-w-2xl"
              >
                <p className="text-[10px] sm:text-[11px] uppercase tracking-super-wide text-porcelain/90 font-light">
                  Platinum World Grroup · Artoso Hospitality · WedTalks · Platinum World Pictures
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-warmstone-dark font-light">
                  Hotels & Resorts · Destination Celebrations · Media · Culture
                </p>
              </motion.div>
            </div>

            {/* Bottom Arrival Detail & Progress */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] sm:text-[10px] tracking-super-wide uppercase font-mono z-20 pb-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-warmstone">Entering a world of considered hospitality</span>
                <div className="w-28 sm:w-36 h-[1px] bg-white/10 overflow-hidden relative inline-block">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="h-full bg-gold"
                  />
                </div>
              </div>

              <div className="hover:text-gold text-warmstone/75 transition-colors flex items-center gap-1.5 cursor-pointer">
                <span>Click anywhere to enter</span>
                <span className="text-gold">→</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* 100% Solid Opaque Symmetrical Shutter Doors in Obsidian Navy */}
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
            {/* The parting doors during dismissal - Maybach Gold line appears only on transition */}
            <motion.div
              key="shutter-top-parting"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-x-0 top-0 h-1/2 bg-obsidian z-30 border-b-2 border-gold shadow-2xl"
            />
            <motion.div
              key="shutter-bottom-parting"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.95, ease: [0.77, 0, 0.175, 1] }}
              className="absolute inset-x-0 bottom-0 h-1/2 bg-obsidian z-30 border-t-2 border-gold shadow-2xl"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LuxuryPreloader;
