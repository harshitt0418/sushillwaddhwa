import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { Mail, Instagram, Linkedin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};
const c = siteConfig.contact;

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F5F1E8]">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-28 md:py-40">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="font-manrope uppercase tracking-[0.22em] text-[9px] text-[#B98A4A] mb-8"
        >
          CONTACT
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="font-cormorant font-light text-[#111111] mb-16 leading-none"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Identity */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <p
              className="font-cormorant font-light text-[#111111] mb-2"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
            >
              {c.name}
            </p>
            <p className="font-inter text-[13px] text-[#8C8A85] mb-12">
              {c.title}
            </p>
            <div className="w-8 h-px bg-[#B98A4A] mb-10" />
            <p className="font-manrope uppercase tracking-[0.18em] text-[9px] text-[#8C8A85] mb-6">
              DIRECT CONTACT
            </p>
            <p className="font-inter text-[13px] text-[#8C8A85] leading-[2]">
              For general enquiries, collaborations,
              <br />
              investment discussions and media requests.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="flex flex-col justify-center gap-6"
          >
            <a
              href={`mailto:${c.email}`}
              className="group flex items-center gap-4 py-5 border-b border-[rgba(185,138,74,0.2)] hover:border-[#B98A4A] transition-colors duration-300"
            >
              <Mail size={16} className="text-[#B98A4A] shrink-0" />
              <div>
                <p className="font-manrope uppercase tracking-[0.15em] text-[9px] text-[#8C8A85] mb-1">
                  EMAIL
                </p>
                <p className="font-inter text-[14px] text-[#111111] group-hover:text-[#B98A4A] transition-colors duration-300">
                  {c.email}
                </p>
              </div>
            </a>

            <a
              href={c.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-5 border-b border-[rgba(185,138,74,0.2)] hover:border-[#B98A4A] transition-colors duration-300"
            >
              <Instagram size={16} className="text-[#B98A4A] shrink-0" />
              <div>
                <p className="font-manrope uppercase tracking-[0.15em] text-[9px] text-[#8C8A85] mb-1">
                  INSTAGRAM
                </p>
                <p className="font-inter text-[14px] text-[#111111] group-hover:text-[#B98A4A] transition-colors duration-300">
                  {c.instagram}
                </p>
              </div>
            </a>

            <a
              href={c.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-5 border-b border-[rgba(185,138,74,0.2)] hover:border-[#B98A4A] transition-colors duration-300"
            >
              <Linkedin size={16} className="text-[#B98A4A] shrink-0" />
              <div>
                <p className="font-manrope uppercase tracking-[0.15em] text-[9px] text-[#8C8A85] mb-1">
                  LINKEDIN
                </p>
                <p className="font-inter text-[14px] text-[#111111] group-hover:text-[#B98A4A] transition-colors duration-300">
                  {c.linkedin}
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
