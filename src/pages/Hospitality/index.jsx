import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn, imageMask } from '@/lib/motion';
import { hospitalityPillars, hospitalityHubs } from '@/data/hospitality';
import { Button } from '@/components/ui/Button';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hospitality = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Hospitality Hero - Full-Scale Editorial Opening */}
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
                Hospitality Leadership · Buyouts · Destination Tourism
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ DOSSIER ]</span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-ivory text-balance"
            >
              Where world-class hotels and landmark celebrations align.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-ivory/80 max-w-2xl font-light leading-relaxed-luxury pt-2"
            >
              Sushill Waddhwa has built his reputation as an indispensable bridge in global hospitality — uniting luxury hoteliers, destination tourism authorities, and premier celebration designers to realize gatherings of rare scale and distinction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. The Five Core Hospitality Pillars - Alternating Warm Ivory & Charcoal Rhythm */}
      {hospitalityPillars.map((pillar, index) => {
        // Alternating rhythm: 0: Ivory, 1: Charcoal, 2: Ivory, 3: Charcoal, 4: Ivory
        const isIvory = index % 2 === 0;

        return (
          <section
            key={pillar.id}
            id={pillar.id}
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
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={cn(
                      "absolute inset-0 mix-blend-multiply transition-opacity group-hover:opacity-10",
                      isIvory ? "bg-ink/10" : "bg-obsidian/25"
                    )} />

                    {/* Number Overlay */}
                    <div className={cn(
                      "absolute top-6 left-6 font-mono text-xs tracking-widest px-3.5 py-1.5 uppercase shadow-md",
                      isIvory
                        ? "bg-ivory/95 text-ink border border-ink/20 font-semibold"
                        : "bg-obsidian/90 text-gold border border-gold/30"
                    )}>
                      Pillar {pillar.number} / 05
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
                        {pillar.subtitle}
                      </span>
                    </div>

                    <h2 className={cn(
                      "font-serif text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight",
                      isIvory ? "text-ink" : "text-ivory"
                    )}>
                      {pillar.title}
                    </h2>
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
                    {pillar.description}
                  </motion.p>

                  {/* Scope Checklist */}
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
                      Scope of Strategic Engagement:
                    </span>
                    <ul className="grid grid-cols-1 gap-3">
                      {pillar.scope.map((item, idx) => (
                        <li key={idx} className={cn(
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
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* CTA */}
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
                    <span className={cn(
                      "text-xs italic font-serif",
                      isIvory ? "text-warmgrey" : "text-ivory/70"
                    )}>
                      Direct executive collaboration
                    </span>

                    <Button
                      to={`/contact?interest=Hospitality%20Partnerships`}
                      variant={isIvory ? "primary" : "dark"}
                      size="md"
                    >
                      Discuss Hospitality Partnerships
                    </Button>
                  </motion.div>

                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* 03. Global Corridors & Destination Focus - Styled as Luxury World Atlas */}
      <section className="py-24 sm:py-36 md:py-44 bg-obsidian text-ivory relative overflow-hidden border-b border-gold/15 stacked-panel stacked-panel-obsidian z-[70]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <div className="flex items-center gap-3 font-mono">
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Geographic Corridors
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ ATLAS ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ivory leading-[1.08] tracking-tight">
              Primary destination corridors across the globe.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-ivory/75 font-light leading-relaxed">
              Centering on destinations and luxury regions where Sushill maintains longstanding relationships with hotel ownership, destination leaders, and event architects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {hospitalityHubs.map((hub, idx) => (
              <motion.div
                key={hub.region}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: idx * 0.12 }}
                className="p-7 sm:p-8 bg-charcoal border border-gold/25 hover:border-gold transition-colors shadow-xl group crosshair-corner"
              >
                <span className="font-mono text-[10px] text-gold uppercase block mb-3">
                  Corridor 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl text-ivory mb-1 font-normal">
                  {hub.region}
                </h3>
                <span className="text-[10px] tracking-widest uppercase text-gold-champagne block mb-4 font-mono">
                  {hub.role}
                </span>
                <p className="text-xs text-ivory/70 font-light leading-relaxed">
                  {hub.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Concluding CTA */}
      <EnquiryCTA
        headline="Collaborate on destination celebrations & buyouts."
        subtext="Whether planning a milestone hotel privatization, engaging on tourism board strategy, or participating in the WedTalks Forum, connect directly with Sushill Waddhwa."
        buttonText="Connect on Hospitality"
        to="/contact?interest=Hospitality%20Partnerships"
      />
    </motion.div>
  );
};

export default Hospitality;
