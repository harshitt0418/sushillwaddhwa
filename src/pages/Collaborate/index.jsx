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
      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-bone text-ink hairline-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-5xl space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                Selective Brand Alignments & Ambassadorship
              </span>
            </motion.div>

            {/* Exact Required Master Copy as Focal Statement */}
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-ink text-balance"
            >
              “{collaborationMasterCopy}”
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-stone-dark max-w-2xl font-light leading-relaxed pt-2"
            >
              Every collaboration is evaluated based on shared authenticity, aesthetic resonance, and enduring mutual value. Sushill works closely with select global houses to create meaningful cultural impact rather than transient promotional noise.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. The Eight Specified Collaboration Categories */}
      <section className="py-24 sm:py-36 bg-bone-light text-ink hairline-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                Sectors of Engagement
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
              Eight curated categories of alignment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {collaborationCategories.map((cat, idx) => {
              const IconComp = iconMap[cat.icon] || Compass;

              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.08 }}
                  className="p-6 bg-bone border border-stone/30 hover:border-bronze transition-colors flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-none bg-bone-dim flex items-center justify-center text-bronze group-hover:bg-ink group-hover:text-bone transition-colors">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <h3 className="font-serif text-xl text-ink font-normal leading-snug">
                      {cat.name}
                    </h3>

                    <p className="text-xs text-stone-dark font-light leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone/20 flex items-center justify-between text-[10px] font-mono uppercase text-bronze">
                    <span>Category 0{idx + 1}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. Partnership Models */}
      <section className="py-24 sm:py-32 bg-bone text-ink hairline-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                Partnership Frameworks
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
              Four tailored engagement formats.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {collaborationPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="p-8 bg-bone-light border border-stone/30 space-y-3"
              >
                <span className="font-mono text-xs text-bronze uppercase">Framework 0{i + 1}</span>
                <h3 className="font-serif text-2xl text-ink font-normal">{pillar.title}</h3>
                <p className="text-sm text-stone-dark font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-ink text-bone border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-bronze flex-shrink-0" />
              <span className="text-xs text-stone font-light">
                Strict brand exclusivity and category protection offered for multi-season ambassadorial alignments.
              </span>
            </div>
            <Button to="/contact?interest=Brand%20Collaborations" variant="dark" size="sm">
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
