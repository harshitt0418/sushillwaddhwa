import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { allRoutes, headerCTA } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

export const MobileMenu = ({ isOpen, onClose }) => {
  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-obsidian text-ivory flex flex-col justify-between p-5 sm:p-8 md:p-10 nav:hidden overflow-y-auto"
        >
          {/* Subtle noise and radial background glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(199,162,74,0.08)_0%,transparent_60%)]" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-gold/20 pb-4">
            <div>
              <div className="font-serif tracking-[0.16em] text-base sm:text-lg text-ivory uppercase">
                Sushill Waddhwa
              </div>
              <div className="text-[7.5px] sm:text-[9px] tracking-super-wide text-gold uppercase font-mono truncate max-w-[210px] sm:max-w-none">
                Founder & CMD, Platinum World Grroup · Since 1989
              </div>
            </div>
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center text-warmstone hover:text-gold transition-colors duration-300"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Links List - Large Editorial Magazine Numerals */}
          <div className="relative z-10 py-8 flex flex-col gap-4 sm:gap-5 my-auto">
            {allRoutes.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.08 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between py-2 border-b border-white/5 transition-all duration-300 ${
                      isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                    }`
                  }
                >
                  <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm tracking-widest text-gold/60">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Bottom Area */}
          <div className="relative z-10 pt-6 border-t border-gold/20 space-y-5">
            <NavLink
              to={headerCTA.path}
              onClick={onClose}
              className="block w-full py-3.5 text-center bg-ivory text-ink hover:bg-gold hover:text-ink uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300 rounded-[1px] shadow-lg"
            >
              Connect with the Executive Desk
            </NavLink>

            <div className="flex items-center justify-between text-xs text-warmstone font-mono">
              <span className="text-[10px] tracking-widest uppercase">Est. 1989 · Global Hospitality</span>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-gold transition-colors duration-300"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-gold" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-gold transition-colors duration-300"
                  aria-label="LinkedIn Network"
                >
                  <Linkedin className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;