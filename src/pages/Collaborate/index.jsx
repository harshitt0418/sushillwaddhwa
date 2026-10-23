import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn } from '@/lib/motion';
import { collaborationMasterCopy, collaborationCategories, collaborationPillars } from '@/data/collaborate';
import { Button } from '@/components/ui/Button';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';
import { 
  Building2, 
  Compass, 
  Plane, 
  Car, 
  Watch, 
  Shirt, 
  Glasses, 
  HeartPulse, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

const iconMap = {
  Building2,
  Compass,
  Plane,
  Car,
  Watch,
  Shirt,
  Glasses,
  HeartPulse,
};

export const Collaborate = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Collaborate Hero with Exact Required Master Copy */}
      <section className="pt-36 sm:pt-48 pb-20 sm:pb-32 bg-obsidian text-porcelain border-b border-gold/15 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sapphire/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3 font-mono"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Selective Brand Alignments & Ambassadorship
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ ATELIER ]</span>
            </motion.div>

            {/* Exact Required Master Copy as Focal Statement */}
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-porcelain text-balance"
            >
              “{collaborationMasterCopy}”
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-warmstone max-w-2xl font-light leading-relaxed-luxury pt-2"
            >
              Every collaboration is evaluated based on shared authenticity, aesthetic resonance, and enduring mutual value. Sushill works closely with select global houses to create meaningful cultural impact rather than transient promotional noise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. The Eight Specified Collaboration Categories */}
      <section className="py-24 sm:py-36 md:py-44 bg-midnight text-porcelain border-b border-gold/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <div className="flex items-center gap-3 font-mono">
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Sectors of Engagement
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ 08 DISCIPLINES ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-porcelain leading-[1.08] tracking-tight">
              Eight curated categories of alignment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {collaborationCategories.map((cat, idx) => {
              const IconComp = iconMap[cat.icon] || Compass;

              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  className="p-7 sm:p-8 bg-obsidian border border-gold/25 hover:border-gold transition-colors flex flex-col justify-between space-y-5 group shadow-[0_16px_40px_rgba(0,0,0,0.6)] crosshair-corner"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-[1px] bg-sapphire/50 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors duration-300">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-porcelain font-normal leading-snug">
                      {cat.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-warmstone font-light leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gold/15 flex items-center justify-between text-[10px] font-mono uppercase text-gold">
                    <span>Category 0{idx + 1}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. Partnership Models */}
      <section className="py-24 sm:py-36 md:py-44 bg-obsidian text-porcelain border-b border-gold/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <div className="flex items-center gap-3 font-mono">
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Partnership Frameworks
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ STRUCTURES ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-porcelain leading-[1.08] tracking-tight">
              Four tailored engagement formats.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {collaborationPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: i * 0.12 }}
                className="p-8 sm:p-12 bg-midnight border border-gold/25 space-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] crosshair-corner"
              >
                <span className="font-mono text-xs text-gold uppercase tracking-widest">Framework 0{i + 1}</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-porcelain font-normal">{pillar.title}</h3>
                <p className="text-sm text-warmstone font-light leading-relaxed-luxury">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 p-6 sm:p-8 bg-midnight border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0" />
              <span className="text-xs sm:text-sm text-warmstone font-light leading-relaxed">
                Strict brand exclusivity and category protection offered for multi-season ambassadorial alignments.
              </span>
            </div>
            <Button to="/contact?interest=Brand%20Collaborations" variant="primary" size="md">
              Submit Collaboration Brief
            </Button>
          </div>
        </div>
      </section>

      {/* 04. Concluding CTA */}
      <EnquiryCTA
        headline="Initiate a selective collaboration."
        subtext="Share your brand vision, campaign parameters, and target timeline. The executive office evaluates each inquiry with prompt consideration."
        buttonText="Explore Brand Collaboration"
        to="/contact?interest=Brand%20Collaborations"
      />
    </motion.div>
  );
};

export default Collaborate;
