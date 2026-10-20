import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn } from '@/lib/motion';

export const EnquiryCTA = ({
  headline = "The most valuable opportunities are rarely public.",
  subtext = "Whether structuring an exclusive resort buyout for a royal wedding, acquiring prime residential real estate off-market, or chartering private aviation, our desk operates with absolute discretion.",
  buttonText = "Start a Private Conversation",
  to = "/contact"
}) => {
  return (
    <section className="bg-ink text-bone py-24 sm:py-32 relative overflow-hidden border-t border-b border-white/10">
      {/* Background Architectural Grid/Texture hint */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F4F0E8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-bronze" />
            <span className="text-[11px] uppercase tracking-super-wide text-bronze font-medium">
              Private Representation
            </span>
            <span className="w-8 h-[1px] bg-bronze" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-bone font-normal leading-tight text-balance max-w-4xl mx-auto">
            {headline}
          </h2>

          <p className="text-stone text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {subtext}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to={to} variant="dark" size="lg">
              {buttonText}
            </Button>
            <Button to="/private-access" variant="darkOutline" size="lg" icon={false}>
              Explore Capabilities
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
