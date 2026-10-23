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
      {/* 01. Lifestyle Hero */}
      <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-obsidian text-porcelain border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl space-y-6">
            <motion.div
              variants={fadeIn('down', 0.1)}
              initial="initial"
              animate="animate"
              className="flex items-center gap-3 font-mono"
            >
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                The Editorial Journal · Living With Intention
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-porcelain text-balance"
            >
              The art of living well across time zones.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-warmstone max-w-2xl font-light leading-relaxed pt-2"
            >
              For Sushill Waddhwa, luxury is never loud or performative. It is the natural consequence of curiosity, refined taste, physical discipline, and deep respect for the places, people, and traditions encountered along the way.
            </motion.p>

            <div className="pt-4 flex flex-wrap gap-3 text-xs uppercase tracking-widest font-mono text-warmstone">
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

      {/* 02. Lifestyle Chapters */}
      <div className="divide-y divide-gold/15">
        {lifestylePillars.map((pillar, index) => {
          const isEven = index % 2 === 1;

          return (
            <section
              key={pillar.id}
              id={pillar.id}
              className={cn(
                "py-24 sm:py-36 relative overflow-hidden scroll-mt-20",
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
                      "lg:col-span-5 relative",
                      isEven ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-sapphire border border-gold/25 shadow-2xl group">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply" />
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] tracking-super-wide uppercase font-mono text-warmstone">
                      <span>Chapter 0{index + 1}</span>
                      <span className="text-gold">{pillar.title}</span>
                    </div>
                  </motion.div>

                  {/* Narrative Column */}
                  <div
                    className={cn(
                      "lg:col-span-7 space-y-6",
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
                      <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium block font-mono">
                        {pillar.subtitle}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-5xl font-normal text-porcelain leading-tight">
                        {pillar.title}
                      </h2>
                    </motion.div>

                    {/* Pullquote Box */}
                    <motion.div
                      variants={fadeIn('up', 0.2)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="p-6 bg-sapphire/35 border-l-2 border-gold shadow-md"
                    >
                      <p className="font-serif italic text-lg sm:text-xl text-porcelain leading-snug">
                        “{pillar.quote}”
                      </p>
                    </motion.div>

                    <motion.p
                      variants={fadeIn('up', 0.25)}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="text-sm sm:text-base text-warmstone font-light leading-relaxed"
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
                          className="text-[10px] uppercase tracking-widest px-3 py-1 bg-obsidian text-warmstone border border-gold/20 font-mono"
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
