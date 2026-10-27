import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import resortImg from '@/assets/images/editorial/editorial-resort-buyout.jpg';
import ParallaxImage from '@/components/ui/ParallaxImage';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function BusinessSection() {
  return (
    <section id="business" className="bg-[#111111]">
      <div className="relative overflow-hidden" style={{ height: '380px' }}>
        <ParallaxImage
          src={resortImg}
          alt="Platinum World Grroup — Luxury hospitality"
          className="absolute inset-0 h-full w-full"
          position="center 40%"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.8) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 px-6 md:px-10 pb-10">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="font-manrope uppercase tracking-[0.22em] text-[9px] text-[#B98A4A] mb-4"
          >
            BUSINESS
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="font-cormorant font-light text-[#F5F1E8] leading-none"
            style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
          >
            Selected Business & Investment Interests
          </motion.h2>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {siteConfig.ventures.map((venture, i) => (
          <motion.div
            key={venture.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="relative border-t border-[rgba(185,138,74,0.16)] py-8 md:py-10"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
              <span className="font-manrope text-[10px] tracking-[0.2em] text-[#8C8A85] md:w-10 shrink-0 pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                  {venture.url ? (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cormorant font-light text-[#F5F1E8] hover:text-[#B98A4A] transition-colors duration-300"
                      style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
                    >
                      {venture.name}
                    </a>
                  ) : (
                    <h3
                      className="font-cormorant font-light text-[#F5F1E8]"
                      style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
                    >
                      {venture.name}
                    </h3>
                  )}
                  <span className="font-manrope uppercase tracking-[0.15em] text-[9px] text-[#B98A4A]">
                    {venture.tagline}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl font-inter text-[14px] leading-[1.8] text-[#D5D0C7] md:text-[15px]">
                  {venture.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[rgba(185,138,74,0.12)]" />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="font-inter text-[13px] leading-[1.7] text-[#D5D0C7] mt-12 max-w-xl"
        >
          Sushill Waddhwa maintains selected business and investment interests across hospitality, experiential platforms, and modern lifestyle ventures. Specific investment details are shared only where approved.
        </motion.p>
      </div>
    </section>
  );
}
