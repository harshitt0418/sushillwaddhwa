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
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-ink text-bone flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-bone/10 pb-5">
            <div>
              <div className="font-serif tracking-widest text-lg text-bone uppercase">
                Sushill Waddhwa
              </div>
              <div className="text-[10px] tracking-super-wide text-bronze uppercase">
                Founder & CMD, Platinum World Grroup · Since 1989
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone hover:text-bone transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Links List */}
          <div className="py-8 flex flex-col gap-5">
            {allRoutes.map((link, idx) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + idx * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-baseline justify-between py-2 border-b border-white/5 transition-all ${
                      isActive ? 'text-bronze' : 'text-bone hover:text-bronze'
                    }`
                  }
                >
                  <span className="font-serif text-2xl sm:text-3xl font-light tracking-wide flex items-baseline gap-4">
                    <span className="font-sans text-xs tracking-widest text-stone/60">
                      0{idx + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-bronze" />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Bottom Area */}
          <div className="pt-6 border-t border-bone/10 space-y-4">
            <NavLink
              to={headerCTA.path}
              onClick={onClose}
              className="block w-full py-3.5 text-center bg-bone text-ink hover:bg-bronze hover:text-white uppercase tracking-widest text-xs font-medium transition-colors"
            >
              Connect with the Executive Desk
            </NavLink>

            <div className="flex items-center justify-between text-xs text-stone">
              <span>{siteConfig.contact.hubs}</span>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bone transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bone transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
