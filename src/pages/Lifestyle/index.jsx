import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn, imageMask } from '@/lib/motion';
import { lifestylePillars } from '@/data/lifestyle';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';
import { cn } from '@/lib/utils';

export const Lifestyle = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Lifestyle Hero - High-Fashion Magazine Header */}
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
                The Editorial Journal · Living With Intention
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ JOURNAL ]</span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-ivory text-balance"
            >
              The art of living well across time zones.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-ivory/80 max-w-2xl font-light leading-relaxed-luxury pt-2"
            >
              For Sushill Waddhwa, luxury is never loud or performative. It is the natural consequence of curiosity, refined taste, physical discipline, and deep respect for the places, people, and traditions encountered along the way.
            </motion.p>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest font-mono text-warmgrey-light">
              <span>Travel</span>
              <span className="text-gold">·</span>
              <span>Hotels</span>
              <span className="text-gold">·</span>
              <span>Fitness</span>
              <span className="text-gold">·</span>
              <span>Style</span>
              <span className="text-gold">·</span>
              <span>Culture</span>
              <span className="text-gold">·</span>
              <span>Wellbeing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Lifestyle Chapters - Luxury Magazine Feature Format with Alternating Rhythm */}
      <div className="divide-y divide-gold/15">
        {lifestylePillars.map((pillar, index) => {
          // Alternating: Even -> Warm Ivory, Odd -> Soft Charcoal
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
                    viewport={{ once: true, margin: '-60px' }}
                    className={cn(
                      "lg:col-span-5 relative",
                      !isIvory ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className={cn(
                      "relative aspect-[3/4] overflow-hidden shadow-2xl group crosshair-corner",
                      isIvory
                        ? "bg-ivory-dim border border-ink/20"
                        : "bg-obsidian border border-gold/30"
                    )}>
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter contrast-[1.03]"
                        loading="lazy"
                      />
                      <div className={cn(
                        "absolute inset-0 mix-blend-multiply",
                        isIvory ? "bg-ink/10" : "bg-obsidian/20"
                      )} />
                    </div>

                    <div className={cn(
                      "mt-4 flex items-center justify-between text-[10px] tracking-super-wide uppercase font-mono pt-1",
                      isIvory ? "text-warmgrey" : "text-ivory/70"
                    )}>
                      <span>Chapter 0{index + 1}</span>
                      <span className="text-gold font-semibold">{pillar.title}</span>
                    </div>
                  </motion.div>

                  {/* Narrative Column */}
                  <div
                    className={cn(
                      "lg:col-span-7 space-y-7",
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
                      <span className={cn(
                        "text-[11px] uppercase tracking-super-wide font-medium block font-mono",
                        isIvory ? "text-gold font-semibold" : "text-gold"
                      )}>
                        {pillar.subtitle}
                      </span>
                      <h2 className={cn(
                        "font-serif text-3xl sm:text-5xl font-normal leading-[1.08] tracking-tight",
                        isIvory ? "text-ink" : "text-ivory"
                      )}>
                        {pillar.title}
                      </h2>
                    </motion.div>

                    {/* Pullquote Box */}
                    <motion.div
                      variants={fadeIn('up', 0.2)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className={cn(
                        "p-6 sm:p-7 border-l-2 border-gold shadow-md",
                        isIvory ? "bg-ivory-dim/70 text-ink" : "bg-obsidian/60 text-ivory"
                      )}
                    >
                      <p className={cn(
                        "font-serif italic text-lg sm:text-xl md:text-2xl leading-snug",
                        isIvory ? "text-ink" : "text-ivory"
                      )}>
                        “{pillar.quote}”
                      </p>
                    </motion.div>

                    <motion.p
                      variants={fadeIn('up', 0.25)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className={cn(
                        "text-sm sm:text-base font-light leading-relaxed-luxury",
                        isIvory ? "text-ink/80" : "text-ivory/80"
                      )}
                    >
                      {pillar.narrative}
                    </motion.p>

                    {/* Tags */}
                    <motion.div
                      variants={fadeIn('up', 0.3)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="pt-2 flex flex-wrap gap-2"
                    >
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "text-[10px] uppercase tracking-widest px-3 py-1.5 font-mono shadow-sm",
                            isIvory
                              ? "bg-ivory-dim text-ink/80 border border-ink/15"
                              : "bg-obsidian text-ivory/80 border border-gold/25"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 03. Concluding CTA */}
      <EnquiryCTA
        headline="Collaborate on lifestyle & luxury campaigns."
        subtext="Sushill selectively aligns with luxury automotive, horology, travel, and sartorial brands that share an appreciation for timeless craftsmanship and authentic storytelling."
        buttonText="Explore Brand Collaborations"
        to="/collaborate"
      />
    </motion.div>
  );
};

export default Lifestyle;
