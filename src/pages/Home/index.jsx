import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { PersonalIntro } from './components/PersonalIntro';
import { EditorialPreviews } from './components/EditorialPreviews';
import { LegacyMilestones } from './components/LegacyMilestones';
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

      {/* 03. Personal Introduction with Editorial Portrait */}
      <PersonalIntro />

      {/* 04. Editorial Previews for Business, Hospitality, Lifestyle & Media */}
      <EditorialPreviews />

      {/* 05. Legacy & Milestones Since 1989 */}
      <LegacyMilestones />

      {/* 06. Featured Venture Spotlight */}
      <VentureFeature />

      {/* 07. Full-width Closing Invitation */}
      <EnquiryCTA
        headline="Building a world worth experiencing."
        subtext="Sushill Waddhwa collaborates with global hotel groups, tourism authorities, investment partners, and luxury brands on landmark hospitality and lifestyle initiatives."
        buttonText="Begin a Conversation"
        to="/contact"
      />
    </motion.div>
  );
};

export default Home;
