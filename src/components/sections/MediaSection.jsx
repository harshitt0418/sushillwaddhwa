import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function MediaSection() {
  return (
    <section id="media" className="bg-[#0D1B2A]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-28 md:py-40">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-manrope uppercase tracking-[0.22em] text-[9px] text-[#B98A4A] mb-8"
        >
          MEDIA
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-cormorant font-light text-[#F5F1E8] mb-10 leading-none"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          {siteConfig.media.title}
        </motion.h2>

        <div className="w-12 h-px bg-[#B98A4A] mb-12" />

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-inter text-[15px] leading-[1.85] text-[#8C8A85] max-w-xl mb-8"
        >
          {siteConfig.media.copy}
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-manrope italic text-[12px] tracking-[0.08em] text-[rgba(140,138,133,0.6)]"
        >
          Verified press assets will be published here.
        </motion.p>
      </div>
    </section>
  );
}
