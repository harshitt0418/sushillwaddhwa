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
      <section className="pt-36 sm:pt-48 pb-20 sm:pb-32 bg-obsidian text-porcelain border-b border-gold/15 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[550px] h-[550px] bg-sapphire/20 rounded-full blur-[140px] pointer-events-none" />

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
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-porcelain text-balance"
            >
              Where world-class hotels and landmark celebrations align.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-warmstone max-w-2xl font-light leading-relaxed-luxury pt-2"
            >
              Sushill Waddhwa has built his reputation as an indispensable bridge in global hospitality — uniting luxury hoteliers, destination tourism authorities, and premier celebration designers to realize gatherings of rare scale and distinction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02. The Five Core Hospitality Pillars */}
      {hospitalityPillars.map((pillar, index) => {
        const isEven = index % 2 === 1;

        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={cn(
              "py-24 sm:py-36 md:py-44 relative overflow-hidden border-b border-gold/15 scroll-mt-20",
              isEven ? "bg-midnight text-porcelain" : "bg-obsidian text-porcelain"
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
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-sapphire border border-gold/30 shadow-[0_24px_60px_rgba(0,0,0,0.7)] group crosshair-corner">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-95 contrast-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply transition-opacity group-hover:opacity-10" />

                    {/* Number Overlay */}
                    <div className="absolute top-6 left-6 font-mono text-xs tracking-widest text-gold bg-obsidian/90 backdrop-blur-md px-3.5 py-1.5 border border-gold/30 uppercase shadow-md">
                      Pillar {pillar.number} / 05
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
                    <div className="flex items-center gap-3 font-mono">
                      <span className="w-8 h-[1px] bg-gold" />
                      <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-5xl font-normal text-porcelain leading-[1.08] tracking-tight">
                      {pillar.title}
                    </h2>
                  </motion.div>

                  <motion.p
                    variants={fadeIn('up', 0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-sm sm:text-base text-warmstone font-light leading-relaxed-luxury"
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
                    <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                      Scope of Strategic Engagement:
                    </span>
                    <ul className="grid grid-cols-1 gap-3">
                      {pillar.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-porcelain/90 font-light">
                          <span className="mt-1 w-4 h-4 rounded-[1px] bg-sapphire/60 border border-gold/30 flex items-center justify-center flex-shrink-0 text-gold">
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
                    className="pt-6 border-t border-gold/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <span className="text-xs text-warmstone italic font-serif">
                      Direct executive collaboration
                    </span>

                    <Button
                      to={`/contact?interest=Hospitality%20Partnerships`}
                      variant="primary"
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
      <section className="py-24 sm:py-36 md:py-44 bg-midnight text-porcelain relative overflow-hidden border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
            <div className="flex items-center gap-3 font-mono">
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Geographic Corridors
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ ATLAS ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-porcelain leading-[1.08] tracking-tight">
              Primary destination corridors across the globe.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-warmstone font-light leading-relaxed">
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
                className="p-7 sm:p-8 bg-obsidian border border-gold/25 hover:border-gold transition-colors shadow-[0_16px_40px_rgba(0,0,0,0.6)] group crosshair-corner"
              >
                <span className="font-mono text-[10px] text-gold uppercase block mb-3">
                  Corridor 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl text-porcelain mb-1 font-normal">
                  {hub.region}
                </h3>
                <span className="text-[10px] tracking-widest uppercase text-gold-champagne block mb-4 font-mono">
                  {hub.role}
                </span>
                <p className="text-xs text-warmstone font-light leading-relaxed">
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
