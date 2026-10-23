import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn, imageMask } from '@/lib/motion';
import featureImg from '@/assets/images/editorial/editorial-artoso-feature.jpg';

export const VentureFeature = () => {
  return (
    <section className="py-24 sm:py-36 md:py-44 bg-midnight text-porcelain border-b border-gold/15 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            <motion.div
              variants={fadeIn('up', 0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 font-mono">
                <span className="w-8 sm:w-12 h-[1px] bg-gold" />
                <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                  Hospitality Platform Spotlight
                </span>
                <span className="text-gold/40 text-[10px] font-mono">[ 06 / 07 ]</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-porcelain leading-[1.08] tracking-tight">
                Artoso Hospitality:
                <br />
                <span className="italic font-light text-gold-champagne">
                  Global Footprint, Local Flair.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4 text-warmstone text-sm sm:text-base leading-relaxed-luxury font-light"
            >
              <p>
                Hospitality is evolving beyond standardized luxury toward character-rich, culturally resonant micro-environments. Through <strong className="text-porcelain font-medium">Artoso Hospitality Corp.</strong>, Sushill Waddhwa guides the conceptualization and development of luxury boutique hotel models that respect localized vernacular while upholding world-class service standards.
              </p>
              <p>
                In synergy with <strong className="text-porcelain font-medium">Platinum World Grroup</strong>'s global group hospitality reach since 1989, Artoso establishes a dialogue between architectural authenticity, guest intimacy, and commercial sustainability.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Button to="/business#artoso-hospitality" variant="primary" size="md">
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
            <div className="relative aspect-[16/11] overflow-hidden bg-obsidian border border-gold/30 shadow-[0_24px_60px_rgba(0,0,0,0.7)] crosshair-corner">
              <img
                src={featureImg}
                alt="Artoso Hospitality boutique architectural concept"
                className="w-full h-full object-cover filter brightness-95 contrast-105 transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian/25 mix-blend-multiply" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 bg-obsidian/95 backdrop-blur-md border border-gold/25 text-porcelain shadow-2xl">
                <span className="text-[10px] uppercase tracking-super-wide text-gold block font-mono">
                  Artoso Hospitality Corp. · Boutique Hotel Concepts
                </span>
                <p className="font-serif text-sm sm:text-base text-porcelain/90 mt-0.5 font-normal">
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

export default VentureFeature;
