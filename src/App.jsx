import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BusinessSection from '@/components/sections/BusinessSection';
import CollaborationsSection from '@/components/sections/CollaborationsSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

const stackTransition = {
  initial: { y: '14vh' },
  inView: { y: 0 },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, amount: 0.16 },
};

function StackedPanel({ depth, children }) {
  return (
    <motion.div
      className={'stack-panel relative ' + depth}
      initial={stackTransition.initial}
      whileInView={stackTransition.inView}
      transition={stackTransition.transition}
      viewport={stackTransition.viewport}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="bg-ivory text-ink overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <StackedPanel depth="z-10"><AboutSection /></StackedPanel>
        <StackedPanel depth="z-20"><BusinessSection /></StackedPanel>
        <StackedPanel depth="z-30"><CollaborationsSection /></StackedPanel>
        <StackedPanel depth="z-40"><MediaSection /></StackedPanel>
        <StackedPanel depth="z-50"><ContactSection /></StackedPanel>
      </main>
      <Footer />
    </div>
  );
}
