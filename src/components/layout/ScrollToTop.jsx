import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Disable automatic browser scroll restoration on SPAs
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const scrollToTarget = () => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80 });
          } else {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          return;
        }
      }

      // Reset scroll for window, html, and body immediately
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Sync Lenis smooth scroll instance
      if (window.lenis) {
        window.lenis.resize();
        window.lenis.scrollTo(0, { immediate: true });
      }
    };

    // 1. Immediate execution before paint
    scrollToTarget();

    // 2. Next animation frame
    const rafId = requestAnimationFrame(scrollToTarget);

    // 3. Timers to ensure sync across Framer Motion mount lifecycle
    const timer1 = setTimeout(scrollToTarget, 50);
    const timer2 = setTimeout(scrollToTarget, 150);
    const timer3 = setTimeout(scrollToTarget, 300);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;