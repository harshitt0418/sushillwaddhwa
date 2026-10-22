import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn, imageMask } from '@/lib/motion';
import { businessEntities } from '@/data/business';
import { Button } from '@/components/ui/Button';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';
import { Check, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Business = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Business Hero */}
      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-bone text-ink hairline-b">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                Ventures & Enterprise Leadership · Since 1989
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-ink text-balance"
            >
              Building enduring platforms across global hospitality, investment and media.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-stone-dark max-w-2xl font-light leading-relaxed pt-2"
            >
              From pioneering luxury group travel in 1989 through Platinum World Grroup to developing contemporary boutique hotel concepts with Artoso Hospitality, Sushill Waddhwa's commercial endeavors pair operational discipline with visionary creativity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. Four Dedicated Business Entities */}
      {businessEntities.map((entity, index) => {
        const isEven = index % 2 === 1;

        return (
          <section
            key={entity.id}
            id={entity.id}
            className={cn(
              "py-24 sm:py-36 relative overflow-hidden hairline-b scroll-mt-20",
              isEven ? "bg-bone-light" : "bg-bone"
            )}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Visual Column */}
                <motion.div
                  variants={imageMask}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-60px' }}
                  className={cn(
                    "lg:col-span-6 relative",
                    isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-ink/5 border border-stone/30 shadow-xl group">
                    <img
                      src={entity.image}
                      alt={entity.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95 contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ink/20 mix-blend-multiply transition-opacity group-hover:opacity-10" />

                    {/* Metadata Overlay Badge */}
                    <div className="absolute top-6 left-6 font-mono text-xs tracking-widest text-bone bg-ink/85 backdrop-blur-md px-3.5 py-1.5 border border-white/10 uppercase">
                      {entity.since}
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Content Column */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-8",
                    isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-[1px] bg-bronze" />
                      <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                        {entity.descriptor}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                      {entity.name}
                    </h2>

                    <div className="text-xs uppercase tracking-widest font-mono text-stone-dark">
                      Role: <span className="text-ink font-sans font-medium">{entity.role}</span>
                    </div>
                  </motion.div>

                  <motion.p
                    variants={fadeIn('up', 0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-sm sm:text-base text-stone-dark font-light leading-relaxed"
                  >
                    {entity.summary}
                  </motion.p>

                  {/* Capabilities List */}
                  <motion.div
                    variants={fadeIn('up', 0.25)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="space-y-3 pt-2"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-stone-dark font-mono block">
                      Core Scope & Operating Capabilities:
                    </span>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {entity.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 font-light">
                          <span className="mt-1 w-4 h-4 rounded-full bg-bone-dim flex items-center justify-center flex-shrink-0 text-bronze">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Strategic Note & Action */}
                  <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="pt-4 border-t border-stone/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="max-w-xs">
                      <span className="text-[10px] uppercase tracking-widest text-stone-dark block mb-0.5">
                        Strategic Rationale
                      </span>
                      <span className="text-xs text-ink/80 italic font-serif">
                        {entity.highlight}
                      </span>
                    </div>

                    <Button
                      to={`/contact?interest=${encodeURIComponent(entity.name)}`}
                      variant="primary"
                      size="md"
                    >
                      Explore Venture Partnerships
                    </Button>
                  </motion.div>

                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* 03. Concluding CTA */}
      <EnquiryCTA
        headline="Collaborate on institutional ventures."
        subtext="For commercial hotel operator alignment, hospitality joint ventures, or strategic investment opportunities, connect directly with the executive office."
        buttonText="Explore Business Collaboration"
        to="/contact?interest=Business%20Enquiries"
      />
    </motion.div>
  );
};

export default Business;
