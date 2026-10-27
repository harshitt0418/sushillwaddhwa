import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BusinessSection from '@/components/sections/BusinessSection';
import CollaborationsSection from '@/components/sections/CollaborationsSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

function StackedPanel({ depth, children }) {
  return <div className={'stack-panel ' + depth}>{children}</div>;
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
