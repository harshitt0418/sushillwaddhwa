import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motion';

const metrics = [
  {
    label: "Global Network",
    detail: "Cross-continental hotel owners, family offices & aviation directors",
    status: "Details to be confirmed",
  },
  {
    label: "Hospitality Collaborations",
    detail: "Five-star resort privatizations, royal summits & destination weddings",
    status: "Details to be confirmed",
  },
  {
    label: "Private Asset Access",
    detail: "Off-market residential compounds, prime penthouses & superyachts",
    status: "Details to be confirmed",
  },
  {
    label: "Strategic Geographic Hubs",
    detail: "Operating focus across Dubai, India, European enclaves & Sri Lanka",
    status: "Active Footprint",
  },
];

export const ByTheNumbers = () => {
  return (
    <section className="py-24 sm:py-32 bg-bone text-ink hairline-b">
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
            <span className="w-6 h-[1px] bg-bronze" />
            <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
              Institutional Footprint
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
            Measured by the depth of relationship, not arbitrary metrics.
          </h2>
        </motion.div>

        {/* 4-column metric ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-6 border-t border-stone/20">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-baseline justify-between border-b border-stone/20 pb-2">
                <span className="font-mono text-xs text-stone-dark">0{idx + 1}</span>
                <span className="text-[10px] uppercase tracking-widest text-bronze font-mono">
                  {item.status}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-ink font-normal leading-snug">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-stone-dark font-light leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note on data integrity */}
        <div className="mt-12 pt-6 border-t border-stone/10 text-right">
          <p className="text-[11px] text-stone-dark/80 italic">
            * Formal quantitative audited metrics and sovereign portfolio disclosures are made available exclusively under mutual NDA.
          </p>
        </div>
      </div>
    </section>
  );
};
