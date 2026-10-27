import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import oceanImg from '@/assets/images/editorial/sushill-ocean-pavilion.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
const collab = siteConfig.collaborations;

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="bg-[#F5F1E8]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-28 md:py-40">
        {/* Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="font-manrope uppercase tracking-[0.22em] text-[9px] text-[#B98A4A] mb-8"
        >
          BRAND COLLABORATIONS
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="font-cormorant font-light text-[#111111] mb-10 leading-none"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          {collab.title}
        </motion.h2>

        {/* Intro copy */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="font-inter text-[15px] leading-[1.85] text-[#6B6966] max-w-2xl mb-20"
        >
          {collab.copy}
        </motion.p>

        {/* Two-col layout: campaigns left, categories right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
          {/* Campaigns */}
          <div>
            <p className="font-manrope uppercase tracking-[0.2em] text-[9px] text-[#8C8A85] mb-8">
              SELECTED CAMPAIGNS
            </p>
            <div className="space-y-0">
              {collab.campaigns.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="group flex items-baseline justify-between py-5 border-b border-[rgba(185,138,74,0.15)] cursor-default"
                >
                  <span
                    className="font-cormorant font-light text-[#111111] group-hover:text-[#B98A4A] transition-colors duration-300"
                    style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}
                  >
                    {c.name}
                  </span>
                  <span className="font-manrope text-[10px] tracking-[0.15em] text-[#8C8A85] uppercase ml-4 shrink-0">
                    {c.location}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="font-manrope uppercase tracking-[0.2em] text-[9px] text-[#8C8A85] mb-8">
              COLLABORATION CATEGORIES
            </p>
            <div className="space-y-0">
              {collab.categories.map((cat, i) => (
                <motion.div
                  key={cat}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="py-4 border-b border-[rgba(185,138,74,0.15)]"
                >
                  <span className="font-inter text-[14px] leading-relaxed text-[#444444]">
                    {cat}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-bleed image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="relative overflow-hidden mb-20"
          style={{ height: '420px' }}
        >
          <motion.img
            src={oceanImg}
            alt="Sushill Waddhwa — Brand Collaborations"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center 50%' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.7 }}
            loading="lazy"
          />
          <div
            className="absolute inset-x-0 bottom-0 px-6 py-4"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            }}
          >
            <span className="font-manrope uppercase tracking-[0.2em] text-[9px] text-[#B98A4A]">
              DISCERNING
            </span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-center"
        >
          <p className="font-inter text-[13px] text-[#8C8A85] mb-3">
            For collaboration enquiries:
          </p>
          <a
            href="mailto:info@platinumworld.net"
            className="font-cormorant italic text-[28px] md:text-[36px] text-[#B98A4A] hover:text-[#111111] transition-colors duration-300 underline-offset-4 hover:underline"
          >
            info@platinumworld.net
          </a>
        </motion.div>
      </div>
    </section>
  );
}
