import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { PersonalIntro } from './components/PersonalIntro';
import { HorizontalShowcase } from './components/HorizontalShowcase';
import { ByTheNumbers } from './components/ByTheNumbers';
import { VentureFeature } from './components/VentureFeature';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';

export const Home = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Cinematic Hero */}
      <Hero />

      {/* 02. Typographic Manifesto */}
      <Manifesto />

      {/* 03. Personal Introduction to Sushill Waddhwa */}
      <PersonalIntro />

      {/* 04. The World, Connected (Horizontal Showcase) */}
      <HorizontalShowcase />

      {/* 05. By The Numbers (Verified & Transparent) */}
      <ByTheNumbers />

      {/* 06. Featured Venture: Artoso Hospitality Corp */}
      <VentureFeature />

      {/* 07. Full-width Dark Closing CTA */}
      <EnquiryCTA
        headline="The most valuable opportunities are rarely public."
        subtext="Sushill Waddhwa works closely with private clients, international wedding creators, and property owners on strategic hospitality assignments."
        buttonText="Start a Private Conversation"
      />
    </motion.div>
  );
};

export default Home;
