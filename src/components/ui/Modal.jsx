import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Modal = ({ isOpen, onClose, title, message, referenceId, children }) => {
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
            className="absolute inset-0 bg-obsidian/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-obsidian border border-gold/30 p-8 sm:p-10 shadow-2xl text-porcelain z-10 rounded-[1px]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-warmstone hover:text-gold transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <span className="text-[11px] tracking-super-wide text-gold uppercase font-mono">
                Transmission Dossier
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-porcelain mb-4 font-normal">
              {title || "Your enquiry has been prepared for review."}
            </h3>

            <p className="text-warmstone text-sm leading-relaxed mb-6 font-light">
              {message || "Thank you for reaching out to the executive office of Sushill Waddhwa. Your requirement will be evaluated with complete discretion. An executive representative will reach out via your preferred channel."}
            </p>

            {referenceId && (
              <div className="p-3 bg-midnight border border-gold/20 mb-6 font-mono text-xs text-porcelain flex justify-between items-center">
                <span className="text-[10px] tracking-widest text-gold uppercase font-sans">Reference Protocol</span>
                <span>{referenceId}</span>
              </div>
            )}

            {children && (
              <div className="mb-6">
                {children}
              </div>
            )}

            <div className="pt-2 border-t border-gold/15 flex justify-end">
              <Button variant="primary" size="md" onClick={onClose}>
                Return to Overview
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
