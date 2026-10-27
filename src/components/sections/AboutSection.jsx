import React from 'react';
import { motion } from 'framer-motion';
import portrait from '@/assets/images/editorial/sushill-framed-portrait.jpg';
import atrium from '@/assets/images/editorial/sushill-atrium-portrait.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F1E8]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-28 md:py-40">
        {/* Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-manrope uppercase tracking-[0.22em] text-[9px] text-[#B98A4A] mb-8"
        >
          ABOUT
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-cormorant font-light text-[#111111] mb-16 leading-none"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '0.02em' }}
        >
          Sushill Waddhwa
        </motion.h2>

        {/* Main editorial grid: image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-24">
          {/* Portrait */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:col-span-5"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <motion.img
                src={portrait}
                alt="Sushill Waddhwa — Portrait"
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: '65% 38%' }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <div
                className="absolute bottom-0 inset-x-0 px-4 py-3"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              >
                <span className="font-manrope uppercase tracking-[0.2em] text-[9px] text-[#B98A4A]">
                  TRUSTWORTHY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.15 },
              },
            }}
            className="md:col-span-7 flex flex-col justify-center"
          >
            <p className="font-inter text-[15px] leading-[1.85] text-[#6B6966] mb-6">
              Sushill Waddhwa is a Global Hospitality Entrepreneur, Investor and Founder & CMD of Platinum World Grroup. He divides his time between Mumbai, Dubai, Sri Lanka and Europe.
            </p>
            <p className="font-inter text-[15px] leading-[1.85] text-[#6B6966] mb-6">
              His journey in hospitality began in 1989 with his first event in hotel management. Over more than three decades, he has worked with properties across 82 countries and connected clients to over 2,040 luxury hotels worldwide.
            </p>
            <p className="font-inter text-[15px] leading-[1.85] text-[#6B6966] mb-10">
              His professional interests span events, wedding tourism, hospitality, investments, lifestyle, media and entertainment — always shaped by an instinct for quality and a discerning global perspective.
            </p>
            {/* Bronze hairline divider */}
            <div className="w-12 h-px bg-[#B98A4A] mb-8" />
            <p className="font-cormorant italic text-[22px] md:text-[26px] text-[#B98A4A] leading-relaxed">
              "Celebrating Life with Sushill Waddhwa"
            </p>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-[rgba(185,138,74,0.2)] pt-12 mb-24"
        >
          {[
            { num: '82', label: 'Countries' },
            { num: '2,040+', label: 'Luxury Hotels' },
            { num: '1989', label: 'First Event' },
            { num: '35+', label: 'Years' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-6 px-6 ${i > 0 ? 'border-l border-[rgba(185,138,74,0.2)]' : ''}`}
            >
              <p
                className="font-cormorant font-light text-[#111111] leading-none mb-2"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
              >
                {stat.num}
              </p>
              <p className="font-manrope uppercase tracking-[0.18em] text-[9px] text-[#8C8A85]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Second editorial image — full bleed landscape */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden"
          style={{ height: '420px', maxHeight: '50vw' }}
        >
          <motion.img
            src={atrium}
            alt="Sushill Waddhwa — International hospitality"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
          <div
            className="absolute inset-x-0 bottom-0 px-6 py-4"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
          >
            <span className="font-manrope uppercase tracking-[0.2em] text-[9px] text-[#B98A4A]">
              CHARISMATIC
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
