import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function MobileMenu({ nav, onClose, onNav }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[60] min-h-[100svh] overflow-y-auto bg-[#F5F1E8] flex flex-col"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex justify-end px-6 pt-6 pb-2 sm:px-8">
        <button onClick={onClose} className="p-2 text-[#111111]" aria-label="Close menu">
          <X size={20} />
        </button>
      </div>
      <nav className="flex w-full flex-1 flex-col items-center justify-center gap-5 px-7 py-8 sm:gap-6 sm:px-10" aria-label="Mobile navigation">
        {nav.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            onClick={(e) => onNav(e, link.href)}
            className="w-full max-w-[21rem] whitespace-pre-line break-words text-center font-cormorant text-[clamp(2rem,9vw,2.75rem)] font-light leading-[0.94] tracking-[0.015em] text-[#111111] transition-colors duration-300 hover:text-[#8C6734]"
          >
            {link.label === 'BRAND COLLABORATIONS' ? 'BRAND\nCOLLABORATIONS' : link.label}
          </motion.a>
        ))}
      </nav>
      <div className="px-6 pb-8 pt-3 text-center sm:px-8">
        <p className="font-manrope text-[9px] tracking-[0.16em] text-[#6B6966] uppercase">
          info@platinumworld.net
        </p>
      </div>
    </motion.div>
  );
}
