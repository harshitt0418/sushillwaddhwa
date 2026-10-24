import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const StackedScrollController = () => {
  const location = useLocation();
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const updateStickyOffsets = () => {
      const elements = document.querySelectorAll('.stacked-sticky');
      const vh = window.innerHeight;

      elements.forEach((el) => {
        const h = el.offsetHeight;
        const diff = vh - h;
        // If element is taller than viewport, offset top so user can scroll to see complete content
        // before element sticks and the below content overlaps it
        const topOffset = diff < 0 ? diff : 0;
        el.style.setProperty('--sticky-top', `${topOffset}px`);
      });

      if (window.lenis) {
        window.lenis.resize();
      }
    };

    const attachResizeObservers = () => {
      if (typeof ResizeObserver === 'undefined') return;

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }

      resizeObserverRef.current = new ResizeObserver(() => {
        updateStickyOffsets();
      });

      const elements = document.querySelectorAll('.stacked-sticky');
      elements.forEach((el) => {
        resizeObserverRef.current.observe(el);
      });
    };

    const refreshAll = () => {
      attachResizeObservers();
      updateStickyOffsets();
    };

    // 1. Initial calculation
    refreshAll();

    // 2. Window resize listener
    window.addEventListener('resize', refreshAll, { passive: true });

    // 3. Custom route-mounted listener dispatched on page enter
    window.addEventListener('route-mounted', refreshAll);

    // 4. Document fonts ready listener
    if (document.fonts?.ready) {
      document.fonts.ready.then(refreshAll);
    }

    // 5. MutationObserver on <main> to detect when new page enters DOM
    let mutationObserver = null;
    const mainElement = document.querySelector('main') || document.body;
    if (typeof MutationObserver !== 'undefined' && mainElement) {
      mutationObserver = new MutationObserver(() => {
        refreshAll();
      });

      mutationObserver.observe(mainElement, {
        childList: true,
        subtree: true,
      });
    }

    // 6. Staggered timers to ensure sync through Framer Motion exit/enter transitions
    const timers = [30, 100, 250, 450, 700, 1000].map((delay) =>
      setTimeout(refreshAll, delay)
    );

    return () => {
      window.removeEventListener('resize', refreshAll);
      window.removeEventListener('route-mounted', refreshAll);
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      timers.forEach(clearTimeout);
    };
  }, [location.pathname]);

  return null;
};

export default StackedScrollController;
