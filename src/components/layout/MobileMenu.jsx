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
      className="fixed inset-0 z-[60] bg-[#F5F1E8] flex flex-col"
    >
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="p-2 text-[#111111]" aria-label="Close menu">
          <X size={20} />
        </button>
      </div>
      <nav className="flex flex-col items-center justify-center flex-1 gap-8">
        {nav.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            onClick={(e) => onNav(e, link.href)}
            className="font-cormorant text-3xl font-light text-[#111111] hover:text-[#B98A4A] transition-colors duration-300"
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
      <div className="p-8 text-center">
        <p className="font-manrope text-[10px] tracking-[0.2em] text-[#8C8A85] uppercase">
          info@platinumworld.net
        </p>
      </div>
    </motion.div>
  );
}
