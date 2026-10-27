import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import BusinessSection from '@/components/sections/BusinessSection';
import CollaborationsSection from '@/components/sections/CollaborationsSection';
import MediaSection from '@/components/sections/MediaSection';
import ContactSection from '@/components/sections/ContactSection';

function StackedPanel({ depth, children }) {
  const stageRef = useRef(null);
  const contentRef = useRef(null);
  const [metrics, setMetrics] = useState({ stageHeight: 0, overflow: 0 });
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start start', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -metrics.overflow]);

  useLayoutEffect(() => {
    const measure = () => {
      const headerHeight = window.innerWidth < 768 ? 56 : 64;
      const panelHeight = window.innerHeight - headerHeight;
      const contentHeight = contentRef.current?.scrollHeight || panelHeight;
      const overflow = Math.max(0, contentHeight - panelHeight);
      setMetrics({
        overflow,
        stageHeight: Math.max(contentHeight, panelHeight + 80),
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    if (contentRef.current) observer.observe(contentRef.current);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="stack-stage"
      style={metrics.stageHeight ? { height: metrics.stageHeight } : undefined}
    >
      <div className={'stack-panel ' + depth}>
        <motion.div
          ref={contentRef}
          className="stack-panel-content"
          style={{ y: reduceMotion ? 0 : y }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-ivory text-ink">
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
