import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn, imageMask } from '@/lib/motion';

export const VentureFeature = () => {
  return (
    <section className="py-24 sm:py-36 bg-bone-light text-ink hairline-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-bronze" />
                <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                  Hospitality Platform Spotlight
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                Artoso Hospitality:
                <br />
                <span className="italic font-light text-stone-dark">
                  Global Footprint, Local Flair.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4 text-stone-dark text-sm sm:text-base leading-relaxed font-light"
            >
              <p>
                Hospitality is evolving beyond standardized luxury toward character-rich, culturally resonant micro-environments. Through <strong className="text-ink font-medium">Artoso Hospitality Corp.</strong>, Sushill Waddhwa guides the conceptualization and development of luxury boutique hotel models that respect localized vernacular while upholding world-class service standards.
              </p>
              <p>
                In synergy with <strong className="text-ink font-medium">Platinum World Grroup</strong>'s global group hospitality reach since 1989, Artoso establishes a dialogue between architectural authenticity, guest intimacy, and commercial sustainability.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Button to="/business#artoso-hospitality" variant="outline" size="md">
                Explore Hospitality Concepts
              </Button>
              <Button to="/collaborate" variant="ghost" size="md">
                Partner with Sushill
              </Button>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            variants={imageMask}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-ink/10 border border-stone/30 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85"
                alt="Artoso Hospitality boutique architectural concept"
                className="w-full h-full object-cover filter brightness-95 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-ink/90 backdrop-blur-md border border-white/10 text-bone">
                <span className="text-[10px] uppercase tracking-super-wide text-bronze block">
                  Artoso Hospitality Corp. · Boutique Hotel Concepts
                </span>
                <p className="font-serif text-sm sm:text-base text-bone-light mt-0.5">
                  Concept direction and owner advisory for distinctive luxury sanctuaries.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
