import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeIn } from '@/lib/motion';
import { mediaFeatures, aiStorytellingNote } from '@/data/media';
import { Button } from '@/components/ui/Button';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';
import { Mic, Video, Newspaper, Sparkles } from 'lucide-react';

export const Media = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Media Hero - Obsidian Black Editorial Atmosphere */}
      <section className="pt-36 sm:pt-48 pb-20 sm:pb-32 bg-obsidian text-ivory border-b border-gold/15 relative overflow-hidden stacked-panel stacked-sticky z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

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
                Thought Leadership · Keynotes · Cinema
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ BROADCAST ]</span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial="initial"
              animate="animate"
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] tracking-tight text-ivory text-balance"
            >
              Perspectives, global keynotes & destination storytelling.
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="initial"
              animate="animate"
              className="text-base sm:text-lg text-warmstone max-w-2xl font-light leading-relaxed-luxury pt-2"
            >
              Sharing insights honed since 1989 across international hospitality summits, curated dialogues via WedTalks, destination brand films with Platinum World Pictures, and future-facing digital storytelling.
            </motion.p>

            <div className="pt-4 flex flex-wrap gap-3 text-xs uppercase tracking-widest font-mono text-warmstone/80">
              <span>Press</span>
              <span className="text-gold">·</span>
              <span>Interviews</span>
              <span className="text-gold">·</span>
              <span>Speaking</span>
              <span className="text-gold">·</span>
              <span>Videos</span>
              <span className="text-gold">·</span>
              <span>Articles</span>
              <span className="text-gold">·</span>
              <span>WedTalks</span>
              <span className="text-gold">·</span>
              <span>Platinum World Pictures</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Media Domains Grid - Warm Ivory Editorial Archival Ledger */}
      <section className="py-24 sm:py-36 md:py-44 bg-ivory text-ink border-b border-champagne/40 relative overflow-hidden stacked-panel stacked-panel-ivory z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {mediaFeatures.map((item, idx) => {
              const icons = [Mic, Sparkles, Newspaper, Video];
              const IconComponent = icons[idx % icons.length];

              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12 }}
                  className="p-8 sm:p-12 bg-white/75 backdrop-blur-sm border border-champagne/70 flex flex-col justify-between space-y-6 shadow-sm hover:border-gold/50 transition-colors duration-500 crosshair-corner"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-champagne/60 pb-4">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-medium">
                        {item.category}
                      </span>
                      <IconComponent className="w-4 h-4 text-gold" />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal">
                      {item.title}
                    </h3>

                    <p className="text-sm text-warmgrey font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 space-y-2.5">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-mono block">
                        Featured Topics & Perspectives:
                      </span>
                      <ul className="space-y-2">
                        {item.topics.map((t, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-ink/90 font-light">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-champagne/60 flex items-center justify-between text-xs">
                    <span className="text-warmgrey font-mono text-[10px] tracking-wider uppercase">Curated Dialogue</span>
                    <Button
                      to="/contact?interest=Media%20%26%20Speaking"
                      variant="primary"
                      size="sm"
                    >
                      Book for Speaking
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03. Dedicated AI-Storytelling Area - Soft Charcoal Contrast Box */}
      <section className="py-24 sm:py-36 md:py-44 bg-charcoal text-ivory relative overflow-hidden border-b border-gold/15 stacked-panel stacked-panel-charcoal z-30">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="inline-flex items-center gap-3 font-mono">
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                {aiStorytellingNote.headline}
              </span>
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
            </div>

            {/* Exact required line */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight max-w-4xl mx-auto text-balance">
              “{aiStorytellingNote.exactQuote}”
            </h2>

            <p className="text-warmstone text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed-luxury pt-2">
              {aiStorytellingNote.narrative}
            </p>

            <div className="pt-6">
              <span className="inline-block text-[11px] tracking-widest uppercase font-mono py-2 px-5 border border-gold/40 text-gold-champagne bg-obsidian/70 shadow-lg">
                Innovation & Virtual Media Initiative
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. Speaking & Press Inquiries CTA */}
      <EnquiryCTA
        headline="Invite Sushill to speak or request an interview."
        subtext="For keynote addresses at tourism congresses, panel moderations, press interviews, or film collaborations via Platinum World Pictures."
        buttonText="Enquire for Media & Speaking"
        to="/contact?interest=Media%20%26%20Speaking"
      />
    </motion.div>
  );
};

export default Media;