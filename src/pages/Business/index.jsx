import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn, imageMask } from '@/lib/motion';
import { businessEntities } from '@/data/business';
import { Button } from '@/components/ui/Button';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';
import { Check } from 'lucide-react';
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
      {/* 01. Business Hero - Cinematic Obsidian Opening */}
      <section className="pt-36 sm:pt-48 pb-20 sm:pb-32 bg-obsidian text-ivory border-b border-gold/15 relative overflow-hidden stacked-panel stacked-sticky z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3 font-mono"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Ventures & Enterprise Leadership · Since 1989
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ PORTFOLIO ]</span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-ivory text-balance"
            >
              Building enduring platforms across global hospitality, investment and media.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-ivory/80 max-w-2xl font-light leading-relaxed-luxury pt-2"
            >
              From pioneering luxury group travel in 1989 through Platinum World Grroup to developing contemporary boutique hotel concepts with Artoso Hospitality, Sushill Waddhwa's commercial endeavors pair operational discipline with visionary creativity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. Four Curated Business Entity Monographs - Alternating Light & Dark Rhythm */}
      {businessEntities.map((entity, index) => {
        // Even indices (0: Platinum World, 2: Strategic Investments) -> Warm Ivory
        // Odd indices (1: Artoso, 3: Pictures) -> Soft Charcoal
        const isIvory = index % 2 === 0;

        return (
          <section
            key={entity.id}
            id={entity.id}
            style={{ zIndex: 20 + index * 10 }}
            className={cn(
              "py-24 sm:py-36 md:py-44 relative overflow-hidden scroll-mt-20 stacked-panel",
              isIvory
                ? "stacked-panel-ivory border-b border-ink/10"
                : "stacked-panel-charcoal border-b border-gold/15"
            )}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                
                {/* Visual Column */}
                <motion.div
                  variants={imageMask}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.1 }}
                  className={cn(
                    "lg:col-span-6 relative",
                    !isIvory ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className={cn(
                    "relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden shadow-2xl group crosshair-corner",
                    isIvory
                      ? "bg-ivory-dim border border-ink/20"
                      : "bg-obsidian border border-gold/30"
                  )}>
                    <img
                      src={entity.image}
                      alt={entity.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={cn(
                      "absolute inset-0 mix-blend-multiply transition-opacity group-hover:opacity-10",
                      isIvory ? "bg-ink/10" : "bg-obsidian/25"
                    )} />

                    {/* Metadata Overlay Badge */}
                    <div className={cn(
                      "absolute top-6 left-6 font-mono text-xs tracking-widest px-3.5 py-1.5 uppercase shadow-md",
                      isIvory
                        ? "bg-ivory/95 text-ink border border-ink/20 font-semibold"
                        : "bg-obsidian/90 text-gold border border-gold/30"
                    )}>
                      {entity.since}
                    </div>
                  </div>
                </motion.div>

                {/* Editorial Content Column */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-8",
                    !isIvory ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <motion.div
                    variants={fadeIn('up', 0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3 font-mono">
                      <span className="w-8 h-[1px] bg-gold" />
                      <span className={cn(
                        "text-[11px] uppercase tracking-super-wide font-medium",
                        isIvory ? "text-gold font-semibold" : "text-gold"
                      )}>
                        {entity.descriptor}
                      </span>
                      <span className={cn(
                        "text-[10px] font-mono",
                        isIvory ? "text-ink/30" : "text-gold/40"
                      )}>0{index + 1} / 04</span>
                    </div>

                    <h2 className={cn(
                      "font-serif text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight",
                      isIvory ? "text-ink" : "text-ivory"
                    )}>
                      {entity.name}
                    </h2>

                    {entity.role && (
                      <div className={cn(
                        "text-xs uppercase tracking-widest font-mono pt-1",
                        isIvory ? "text-warmgrey" : "text-ivory/70"
                      )}>
                        Role: <span className={cn(
                          "font-sans font-medium",
                          isIvory ? "text-ink" : "text-ivory"
                        )}>{entity.role}</span>
                      </div>
                    )}
                  </motion.div>

                  <motion.p
                    variants={fadeIn('up', 0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className={cn(
                      "text-sm sm:text-base font-light leading-relaxed-luxury",
                      isIvory ? "text-ink/80" : "text-ivory/80"
                    )}
                  >
                    {entity.summary}
                  </motion.p>

                  {/* Capabilities List */}
                  {entity.capabilities && entity.capabilities.length > 0 && (
                    <motion.div
                      variants={fadeIn('up', 0.25)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="space-y-3 pt-2"
                    >
                      <span className={cn(
                        "text-[10px] uppercase tracking-widest font-mono block",
                        isIvory ? "text-gold font-semibold" : "text-gold"
                      )}>
                        Core Scope & Operating Capabilities:
                      </span>
                      <ul className="grid grid-cols-1 gap-3">
                        {entity.capabilities.map((cap, i) => (
                          <li key={i} className={cn(
                            "flex items-start gap-3 text-xs sm:text-sm font-light",
                            isIvory ? "text-ink/90" : "text-ivory/90"
                          )}>
                            <span className={cn(
                              "mt-1 w-4 h-4 rounded-[1px] flex items-center justify-center flex-shrink-0 text-gold",
                              isIvory
                                ? "bg-ivory-dim border border-ink/15"
                                : "bg-obsidian border border-gold/30"
                            )}>
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Strategic Note & Action */}
                  <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className={cn(
                      "pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-6",
                      isIvory ? "border-ink/10" : "border-gold/20"
                    )}
                  >
                    {entity.highlight ? (
                      <div className="max-w-xs">
                        <span className={cn(
                          "text-[10px] uppercase tracking-widest font-mono block mb-1",
                          isIvory ? "text-warmgrey" : "text-gold"
                        )}>
                          Strategic Focus
                        </span>
                        <span className={cn(
                          "text-xs italic font-serif",
                          isIvory ? "text-ink/85 font-normal" : "text-ivory/85"
                        )}>
                          {entity.highlight}
                        </span>
                      </div>
                    ) : (
                      <div className="max-w-xs">
                        <span className={cn(
                          "text-[10px] uppercase tracking-widest font-mono block mb-1",
                          isIvory ? "text-warmgrey" : "text-gold"
                        )}>
                          Executive Discretion
                        </span>
                        <span className={cn(
                          "text-xs italic font-serif",
                          isIvory ? "text-ink/85 font-normal" : "text-ivory/85"
                        )}>
                          Specific investment details are shared only where approved.
                        </span>
                      </div>
                    )}

                    <Button
                      to={`/contact?interest=${encodeURIComponent(entity.name)}`}
                      variant={isIvory ? "primary" : "dark"}
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
