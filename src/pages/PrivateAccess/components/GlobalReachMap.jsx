import React from 'react';
import { motion } from 'framer-motion';
import { globalHubs } from '@/data/locations';
import { fadeIn } from '@/lib/motion';

export const GlobalReachMap = () => {
  return (
    <section className="py-24 sm:py-36 bg-ink text-bone relative overflow-hidden hairline-dark-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-bronze" />
            <span className="text-[11px] uppercase tracking-super-wide text-stone font-medium">
              Global Access Network
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-bone leading-tight">
            Connecting sovereign corridors and key luxury capitals.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-stone font-light">
            * Geographic hubs reflect representative primary transit corridors and partner hotel concentrations.
          </p>
        </div>

        {/* Abstract Architectural Map Visual */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-ink-soft border border-white/10 p-6 sm:p-12 overflow-hidden flex items-center justify-center">
          {/* Subtle Vector World Grid Lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#F4F0E8_1px,transparent_1px),linear-gradient(to_bottom,#F4F0E8_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Subtle curved connecting SVG arcs between hubs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#85715A" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#85715A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#85715A" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Europe to Dubai */}
            <path d="M 450 180 Q 550 150, 640 230" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-pulseSlow" />
            {/* Dubai to India */}
            <path d="M 640 230 Q 720 220, 780 270" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="4 4" className="animate-pulseSlow" />
            {/* India to Sri Lanka */}
            <path d="M 780 270 Q 790 320, 800 360" fill="none" stroke="url(#lineGrad)" strokeWidth="1.2" strokeDasharray="4 4" />
          </svg>

          {/* Interactive Hub Markers */}
          <div className="relative w-full h-full max-w-5xl mx-auto flex flex-col justify-between z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 my-auto">
              {globalHubs.map((hub, idx) => (
                <motion.div
                  key={hub.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  className="p-5 bg-ink/90 border border-white/10 hover:border-bronze/50 transition-colors backdrop-blur-sm group"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                    <span className="font-mono text-[10px] text-bronze uppercase">
                      HUB 0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-bronze animate-ping opacity-75" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-bone group-hover:text-bronze-light transition-colors">
                    {hub.region}
                  </h3>
                  <span className="text-[10px] tracking-widest uppercase text-stone block mt-0.5 mb-2">
                    {hub.role}
                  </span>

                  <p className="text-xs text-stone/80 font-light leading-relaxed">
                    {hub.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footnote note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone gap-4">
          <span>Global Aviation Transit & Diplomatic Discretion Guaranteed</span>
          <span className="font-mono text-[10px] uppercase text-bronze tracking-widest">
            Cross-Border Operations Protocol
          </span>
        </div>
      </div>
    </section>
  );
};
