import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn } from '@/lib/motion';

export const EnquiryCTA = ({
  headline = "Building a world worth experiencing.",
  subtext = "Sushill Waddhwa collaborates with luxury hospitality brands, tourism authorities, investment partners, and cultural creators on landmark initiatives worldwide.",
  buttonText = "Connect with the Executive Office",
  to = "/contact"
}) => {
  return (
    <section className="bg-gradient-to-b from-midnight via-obsidian to-obsidian text-porcelain py-28 sm:py-36 md:py-44 relative overflow-hidden border-t border-b border-gold/20">
      {/* Background Architectural Grid / Subtle Maybach luxury pinstriping */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#B8954F_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sapphire/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
            <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium font-mono">
              Executive Dialogue · Strategic Partnerships
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-porcelain font-normal leading-[1.06] text-balance max-w-4xl mx-auto">
            {headline}
          </h2>

          <p className="text-warmstone text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {subtext}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button to={to} variant="primary" size="lg">
              {buttonText}
            </Button>
            <Button to="/collaborate" variant="outline" size="lg" icon={false}>
              Collaboration Frameworks
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnquiryCTA;
