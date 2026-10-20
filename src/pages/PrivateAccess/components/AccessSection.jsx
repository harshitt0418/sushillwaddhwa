import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { fadeIn, imageMask } from '@/lib/motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export const AccessSection = ({ service, index }) => {
  const isEven = index % 2 === 1;

  return (
    <section
      id={service.id}
      className={cn(
        "py-24 sm:py-36 relative overflow-hidden hairline-b scroll-mt-20",
        isEven ? "bg-bone-light" : "bg-bone"
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
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-ink/5 border border-stone/30 shadow-xl group">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-ink/20 mix-blend-multiply transition-opacity group-hover:opacity-10" />

              {/* Number Overlay */}
              <div className="absolute top-6 left-6 font-mono text-xs tracking-widest text-bone bg-ink/80 backdrop-blur-md px-3.5 py-1.5 border border-white/10 uppercase">
                Tier {service.number} / 05
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
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-bronze" />
                <span className="text-[11px] uppercase tracking-super-wide text-bronze-dim font-medium">
                  {service.subtitle}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-ink leading-tight">
                {service.title}
              </h2>
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-sm sm:text-base text-stone-dark font-light leading-relaxed"
            >
              {service.description}
            </motion.p>

            {/* Deliverables checklist */}
            <motion.div
              variants={fadeIn('up', 0.25)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3 pt-2"
            >
              <span className="text-[10px] uppercase tracking-widest text-stone-dark font-mono block">
                Representative Mandate Scope:
              </span>
              <ul className="grid grid-cols-1 gap-2.5">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink/90 font-light">
                    <span className="mt-1 w-4 h-4 rounded-full bg-bone-dim flex items-center justify-center flex-shrink-0 text-bronze">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ideal For + CTA */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="pt-4 border-t border-stone/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest text-stone-dark block mb-0.5">
                  Client Profile
                </span>
                <span className="text-xs text-ink font-medium">
                  {service.idealFor}
                </span>
              </div>

              <Button
                to={`/contact?interest=${encodeURIComponent(service.title)}`}
                variant="primary"
                size="md"
              >
                Enquire Privately
              </Button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
