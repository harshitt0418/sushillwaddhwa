import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';
import { ContactHero } from './components/ContactHero';
import { EnquiryForm } from './components/EnquiryForm';
import { DirectCoordinates } from './components/DirectCoordinates';

export const Contact = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Contact Hero */}
      <ContactHero />

      {/* 02. Form & Coordinates Dossier */}
      <section className="py-20 sm:py-28 bg-obsidian text-porcelain">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 7 cols: Interactive High-Trust Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Right 5 cols: Direct Channels & Confidentiality Protocols */}
            <div className="lg:col-span-5">
              <DirectCoordinates />
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
