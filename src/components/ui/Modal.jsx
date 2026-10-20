import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Modal = ({ isOpen, onClose, title, message, referenceId }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-ink border border-bone/20 p-8 sm:p-10 shadow-2xl text-bone z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-stone hover:text-bone transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full border border-bronze/40 flex items-center justify-center text-bronze">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span className="text-[11px] tracking-super-wide text-bronze uppercase">
                Private Transmission Confirmed
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-bone mb-4 font-normal">
              {title || "Your enquiry has been prepared for review."}
            </h3>

            <p className="text-stone text-sm leading-relaxed mb-6 font-light">
              {message || "Thank you for reaching out to the private desk of Sushill Waddhwa. Given the confidential nature of our relationships, your requirement will be evaluated with complete discretion. A senior representative will reach out via your preferred channel."}
            </p>

            {referenceId && (
              <div className="p-3 bg-white/5 border border-white/10 mb-8 font-mono text-xs text-stone-light flex justify-between items-center">
                <span className="text-[10px] tracking-widest text-stone uppercase font-sans">Reference Protocol</span>
                <span>{referenceId}</span>
              </div>
            )}

            <div className="pt-2 border-t border-white/10 flex justify-end">
              <Button variant="dark" size="md" onClick={onClose}>
                Return to Overview
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
