export const transitions = {
  luxuryEase: [0.16, 1, 0.3, 1], // fluid deceleration
  editorialSlow: [0.25, 0.1, 0.25, 1],
  curtainEase: [0.76, 0, 0.24, 1],
  goldEase: [0.33, 1, 0.68, 1],
};

export const fadeIn = (direction = "up", delay = 0) => ({
  initial: {
    y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
    x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: transitions.luxuryEase,
      delay,
    },
  },
});

export const revealText = {
  initial: { y: "100%", opacity: 0 },
  animate: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: transitions.luxuryEase,
      delay: i * 0.08,
    },
  }),
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const imageMask = {
  initial: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.06 },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    scale: 1,
    transition: {
      duration: 1.25,
      ease: transitions.luxuryEase,
    },
  },
};

export const lineDraw = {
  initial: { scaleX: 0, originX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 1.1,
      ease: transitions.luxuryEase,
    },
  },
};

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: transitions.luxuryEase,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.2,
      ease: transitions.luxuryEase,
    },
  },
};
