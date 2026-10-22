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
      {/* 01. Hero with Official Editorial Portrait */}
      <PrincipalHero />

      {/* 02. Narrative Biography (1989 Genesis to Present Day) */}
      <NarrativeBio />

      {/* 03. Chronological Career & Focus Milestones */}
      <FocusTimeline />

      {/* 04. Editorial Pull Quote */}
      <PullQuote />

      {/* 05. Selected Ecosystem (Platinum World & Artoso) */}
      <EcosystemGrid />

      {/* 06. Concluding Direct Enquiry CTA */}
      <EnquiryCTA
        headline="Direct collaboration with Sushill Waddhwa."
        subtext="For hospitality partnerships, hotel buyout inquiries, or strategic venture discussions, connect directly with the executive office."
        buttonText="Connect with Sushill Waddhwa"
        to="/contact?interest=Hospitality%20Partnerships"
      />
    </motion.div>
  );
};

export default About;
