import React from 'react';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from '@/lib/motion';
import { serviceCategories } from '@/data/services';
import { AccessIntro } from './components/AccessIntro';
import { AccessSection } from './components/AccessSection';
import { GlobalReachMap } from './components/GlobalReachMap';
import { EnquiryCTA } from '@/components/sections/EnquiryCTA';

export const PrivateAccess = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* 01. Capabilities Intro */}
      <AccessIntro />

      {/* 02. The 5 Immersive Access Pillars */}
      {serviceCategories.map((service, index) => (
        <AccessSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}

      {/* 03. Global Access Network Map */}
      <GlobalReachMap />

      {/* 04. Concluding Confidential Inquiry CTA */}
      <EnquiryCTA
        headline="Submit a bespoke brief."
        subtext="All inquiries are received directly at the desk of the Principal. Our response time is prompt, deliberate, and handled under strict confidentiality."
        buttonText="Initiate Private Brief"
      />
    </motion.div>
  );
};

export default PrivateAccess;
