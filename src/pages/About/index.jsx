import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';
import { PrincipalHero } from './components/PrincipalHero';
import { NarrativeBio } from './components/NarrativeBio';
import { FocusTimeline } from './components/FocusTimeline';
import { PullQuote } from './components/PullQuote';
import { EcosystemGrid } from './components/EcosystemGrid';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';

export const About = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Executive Hero */}
      <PrincipalHero />

      {/* 02. Narrative Bio & Philosophy */}
      <NarrativeBio />

      {/* 03. 5 Focus Areas Timeline */}
      <FocusTimeline />

      {/* 04. Editorial Pull Quote */}
      <PullQuote />

      {/* 05. Selected Ecosystem (Platinum World & Artoso) */}
      <EcosystemGrid />

      {/* 06. Concluding Direct Enquiry CTA */}
      <EnquiryCTA
        headline="Direct dialogue with the Principal."
        subtext="For institutional hotel buyouts, confidential partnership advisory, or family office inquiries, direct channels remain accessible."
        buttonText="Begin Private Dialogue"
      />
    </motion.div>
  );
};

export default About;
