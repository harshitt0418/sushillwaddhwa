import React from 'react';
import { motion } from 'framer-motion';
import { careerTimeline } from '@/data/timeline';
import { fadeIn } from '@/lib/motion';

export const FocusTimeline = () => {
  return (
    <section className="py-24 sm:py-36 bg-bone text-ink hairline-b">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-bronze" />
            <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
              Career Trajectory
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
            The evolution of a 35-year entrepreneurial journey.
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-stone/30 ml-4 sm:ml-8 pl-8 sm:pl-16 space-y-16">
          {careerTimeline.map((item, idx) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-1.5 w-4 h-4 rounded-full bg-bone border-2 border-stone group-hover:border-bronze group-hover:bg-bronze transition-colors" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span className="font-mono text-xs text-bronze tracking-widest uppercase">
                    {item.period}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ink group-hover:text-bronze-dim transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-stone-dark font-light leading-relaxed max-w-2xl">
                  {item.summary}
                </p>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest px-2.5 py-1 bg-bone-dim/60 text-stone-dark border border-stone/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
