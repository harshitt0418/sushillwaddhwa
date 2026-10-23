import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { fadeIn } from '@/lib/motion';

import businessImg from '@/assets/images/editorial/editorial-hospitality-buyout.jpg';
import hospitalityImg from '@/assets/images/editorial/editorial-luxury-hotels.jpg';
import lifestyleImg from '@/assets/images/editorial/editorial-lifestyle-style.jpg';
import mediaImg from '@/assets/images/editorial/editorial-tourism-wedtalks.jpg';

const editorialPillars = [
  {
    id: "business",
    number: "01",
    category: "Ventures & Advisory",
    title: "Business",
    subtitle: "Enterprise Leadership Since 1989",
    description: "Guiding Platinum World Grroup across global hospitality and buyouts, directing boutique hospitality concepts through Artoso Hospitality, managing strategic investments, and developing media through Platinum World Pictures.",
    highlights: ["Platinum World Grroup", "Artoso Hospitality Corp.", "Strategic Investments", "Platinum World Pictures"],
    link: "/business",
    image: businessImg,
  },
  {
    id: "hospitality",
    number: "02",
    category: "Hotels & Celebrations",
    title: "Hospitality",
    subtitle: "Grand Gatherings & Destination Vision",
    description: "Deep relationships with luxury hotel groups, full property buyouts for multi-day weddings and corporate summits, and strategic advisory for national tourism boards and the WedTalks Forum.",
    highlights: ["Hotel & Resort Buyouts", "Destination Wedding Tourism", "WedTalks Knowledge Forum", "Tourism Board Advisory"],
    link: "/hospitality",
    image: hospitalityImg,
  },
  {
    id: "lifestyle",
    number: "03",
    category: "The Art of Living",
    title: "Lifestyle",
    subtitle: "Curated, Personal & Grounded",
    description: "An authentic, editorial perspective on intentional travel, iconic hotels, functional fitness and vitality, bespoke sartorial style, Indian heritage pride, and mindful living.",
    highlights: ["Global Travel & Hotels", "Fitness & Vitality", "Quiet Luxury & Style", "Culture & Art"],
    link: "/lifestyle",
    image: lifestyleImg,
  },
  {
    id: "media",
    number: "04",
    category: "Perspectives & Dialogue",
    title: "Media",
    subtitle: "Keynotes, Cinema & Modern Narrative",
    description: "Industry keynote addresses, destination podcasts, documentary storytelling via Platinum World Pictures, WedTalks conversations, and future-facing AI narrative exploration.",
    highlights: ["Global Keynote Speaking", "WedTalks Conversations", "Platinum World Pictures", "AI-Powered Storytelling"],
    link: "/media",
    image: mediaImg,
  },
];

export const EditorialPreviews = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -440 : 440;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-36 md:py-44 bg-obsidian text-ivory relative overflow-hidden border-b border-gold/15">
      {/* Background ambient charcoal glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#F4F0E8_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Precision Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 sm:mb-20">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl space-y-4"
          >
            <div className="flex items-center gap-3 font-mono">
              <span className="w-8 sm:w-12 h-[1px] bg-gold" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-medium">
                Core Domains
              </span>
              <span className="text-gold/40 text-[10px] font-mono">[ 04 / 07 ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal leading-[1.08] tracking-tight">
              Four pillars shaping a global journey.
            </h2>
          </motion.div>

          {/* Precision Dial Navigation Arrows */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-[1px] border border-gold/30 flex items-center justify-center text-warmgrey-light hover:text-ink hover:bg-gold hover:border-gold transition-all duration-300 shadow-lg group"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-[1px] border border-gold/30 flex items-center justify-center text-warmgrey-light hover:text-ink hover:bg-gold hover:border-gold transition-all duration-300 shadow-lg group"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Horizontal Editorial Momentum Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {editorialPillars.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[420px] snap-start group"
            >
              {/* Image Frame with Double Edge Framing in Soft Charcoal & Gold */}
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal border border-gold/25 mb-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.78] contrast-[1.1]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-transparent opacity-90" />

                {/* Number Badge */}
                <div className="absolute top-6 left-6 font-mono text-xs tracking-widest text-gold uppercase bg-obsidian/90 backdrop-blur-md px-3.5 py-1.5 border border-gold/30 shadow-md">
                  {item.number} / 04
                </div>

                {/* Bottom title banner */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1">
                  <span className="text-[10px] tracking-super-wide text-gold uppercase block font-mono">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Narrative & Highlights */}
              <p className="text-ivory/70 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                {item.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {item.highlights.slice(0, 2).map((h, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest text-ivory/80 border border-gold/20 px-2.5 py-0.5 bg-charcoal/60 font-mono">
                    {h}
                  </span>
                ))}
              </div>

              <Link
                to={item.link}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ivory group-hover:text-gold transition-colors pt-1 border-b border-transparent group-hover:border-gold font-medium font-mono"
              >
                <span>Explore {item.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialPreviews;
