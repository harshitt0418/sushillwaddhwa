import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { allRoutes, headerCTA } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-obsidian text-porcelain flex flex-col justify-between p-6 sm:p-12 lg:hidden overflow-y-auto"
        >
          {/* Subtle noise and radial background glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(20,40,74,0.4)_0%,transparent_60%)]" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-gold/20 pb-5">
            <div>
              <div className="font-serif tracking-[0.16em] text-lg text-porcelain uppercase">
                Sushill Waddhwa
              </div>
              <div className="text-[9px] tracking-super-wide text-gold uppercase font-mono">
                Founder & CMD, Platinum World Grroup · Since 1989
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-warmstone hover:text-gold transition-colors duration-300"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Links List - Large Editorial Magazine Numerals */}
          <div className="relative z-10 py-10 flex flex-col gap-5 sm:gap-6">
            {allRoutes.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between py-2 border-b border-white/5 transition-all duration-300 ${
                      isActive ? 'text-gold' : 'text-porcelain hover:text-gold-champagne'
                    }`
                  }
                >
                  <span className="font-serif text-3xl sm:text-4xl font-normal tracking-wide flex items-baseline gap-4 sm:gap-6">
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
              className="block w-full py-4 text-center bg-porcelain text-obsidian hover:bg-gold hover:text-obsidian uppercase tracking-[0.2em] text-xs font-medium transition-all duration-300 rounded-[1px] shadow-lg"
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
                  className="hover:text-gold transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gold" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                  aria-label="LinkedIn"
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
