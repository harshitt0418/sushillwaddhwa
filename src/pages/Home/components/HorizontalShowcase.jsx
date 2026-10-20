import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { serviceCategories } from '@/data/services';
import { fadeIn } from '@/lib/motion';

export const HorizontalShowcase = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-ink text-bone relative overflow-hidden hairline-dark-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-bronze" />
              <span className="text-[11px] uppercase tracking-super-wide text-stone font-medium">
                The World, Connected
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-bone font-normal leading-tight">
              Five pillars of privileged global access.
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-stone hover:text-bone hover:border-bronze hover:bg-white/5 transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-none border border-white/20 flex items-center justify-center text-stone hover:text-bone hover:border-bronze hover:bg-white/5 transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {serviceCategories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[440px] snap-start group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft border border-white/10 mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />

                {/* Number Badge */}
                <div className="absolute top-6 left-6 font-mono text-xs tracking-widest text-bronze uppercase bg-ink/70 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                  {item.number} / 05
                </div>

                {/* Subtitle bottom banner */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-super-wide text-bronze uppercase block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-bone font-normal leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Narrative & Deep Link */}
              <p className="text-stone text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                {item.description}
              </p>

              <Link
                to={`/private-access#${item.id}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-bone group-hover:text-bronze transition-colors pt-2 border-b border-transparent group-hover:border-bronze"
              >
                <span>Examine Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
