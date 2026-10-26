import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { navigationLinks, headerCTA } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

export const MobileMenu = ({ isOpen, onClose, activeSection, onNavClick }) => {
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

  const handleLinkClick = (e, href) => {
    onClose();
    if (onNavClick) {
      onNavClick(e, href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-obsidian text-ivory flex flex-col justify-between p-6 sm:p-8 nav:hidden overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between border-b border-bronze/25 pb-4">
            <div>
              <div className="font-serif tracking-[0.16em] text-lg text-ivory uppercase">
                Sushill Waddhwa
              </div>
              <div className="font-subheading text-[8px] sm:text-[9px] tracking-super-wide text-bronze uppercase font-medium">
                Founder & CMD, Platinum World Grroup
              </div>
            </div>
            <button
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] -mr-2 flex items-center justify-center text-stone hover:text-bronze transition-colors duration-300"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Exactly 6 Links: HOME | ABOUT | BUSINESS | BRAND COLLABORATIONS | MEDIA | CONTACT */}
          <div className="relative z-10 py-8 flex flex-col gap-3 my-auto">
            {navigationLinks.map((link, idx) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + idx * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`group flex items-baseline justify-between py-2 border-b border-white/5 transition-all duration-300 ${
                      isActive ? 'text-bronze' : 'text-ivory hover:text-bronze'
                    }`}
                  >
                    <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide flex items-baseline gap-4">
                      <span className="font-subheading text-xs tracking-widest text-bronze/60">
                        0{idx + 1}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-bronze" />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Area */}
          <div className="relative z-10 pt-6 border-t border-bronze/25 space-y-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="font-subheading block w-full py-3.5 text-center bg-ivory text-ink hover:bg-bronze hover:text-ink uppercase tracking-[0.2em] text-xs font-semibold transition-all rounded-[1px]"
            >
              Contact Executive Office
            </a>

            <div className="flex items-center justify-between text-xs text-stone font-subheading">
              <span className="text-[10px] tracking-widest uppercase">Est. 1989 • Global Hospitality</span>
              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-bronze transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4 text-bronze" />
                </a>
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-bronze transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-bronze" />
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
