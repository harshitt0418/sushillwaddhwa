import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

const verifiedMilestones = [
  {
    label: "1989",
    title: "The Foundation",
    detail: "Embarking on a journey pioneering bespoke event choreography and high-profile group experiences.",
  },
  {
    label: "35+ Years",
    title: "Industry Leadership",
    detail: "Over three and a half decades of continuous operation, institutional trust, and international evolution.",
  },
  {
    label: "Global Reach",
    title: "Cross-Border Corridors",
    detail: "Structuring hotel buyouts, celebrations, and hospitality advisory across India, UAE, Europe, and beyond.",
  },
  {
    label: "Multi-Platform",
    title: "Integrated Ecosystem",
    detail: "Uniting luxury travel (Platinum World Grroup), boutique concepts (Artoso), knowledge (WedTalks), and film.",
  },
];

export const LegacyMilestones = () => {
  return (
    <section className="py-24 sm:py-32 bg-obsidian text-porcelain border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Eyebrow and intro */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium font-mono">
              A Legacy of Trust
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-porcelain leading-tight">
            Measured by enduring relationships, not fleeting numbers.
          </h2>
        </motion.div>

        {/* 4-column metric ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-6 border-t border-gold/20">
          {verifiedMilestones.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-baseline justify-between border-b border-gold/20 pb-2">
                <span className="font-serif text-2xl text-porcelain font-normal">{item.label}</span>
                <span className="font-mono text-[10px] text-gold uppercase">Milestone 0{idx + 1}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-porcelain font-normal leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-warmstone font-light leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quiet footnote */}
        <div className="mt-12 pt-6 border-t border-gold/10 text-right">
          <p className="text-[11px] text-warmstone/75 italic">
            * Direct principal-to-principal consultations conducted under mutual professional discretion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacyMilestones;
