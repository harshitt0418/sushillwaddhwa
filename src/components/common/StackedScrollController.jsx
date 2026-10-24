import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const StackedScrollController = () => {
  const location = useLocation();

  useEffect(() => {
    const updateStickyOffsets = () => {
      // Find all elements with .stacked-sticky
      const elements = document.querySelectorAll('.stacked-sticky');
      const vh = window.innerHeight;

      elements.forEach((el) => {
        // Measure element's natural rendered height
        const h = el.offsetHeight;
        const diff = vh - h;
        // If element is taller than viewport, offset top so user can scroll to see complete content
        // before element sticks and the below content overlaps it
        const topOffset = diff < 0 ? diff : 0;
        el.style.setProperty('--sticky-top', `${topOffset}px`);
      });
    };

    // 1. Initial calculation
    updateStickyOffsets();

    // 2. Window resize listener
    window.addEventListener('resize', updateStickyOffsets, { passive: true });

    // 3. ResizeObserver on each sticky element to catch image and font loads
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateStickyOffsets();
      });

      const elements = document.querySelectorAll('.stacked-sticky');
      elements.forEach((el) => resizeObserver.observe(el));
    }

    // 4. Staggered timers after route change to handle dynamic layout / render completes
    const t1 = setTimeout(updateStickyOffsets, 50);
    const t2 = setTimeout(updateStickyOffsets, 150);
    const t3 = setTimeout(updateStickyOffsets, 400);

    return () => {
      window.removeEventListener('resize', updateStickyOffsets);
      if (resizeObserver) resizeObserver.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location.pathname]);

  return null;
};

export default StackedScrollController;
