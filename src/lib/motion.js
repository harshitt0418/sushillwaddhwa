export const transitions = {
  luxuryEase: [0.16, 1, 0.3, 1], // fluid deceleration
  editorialSlow: [0.25, 0.1, 0.25, 1],
  curtainEase: [0.76, 0, 0.24, 1],
};

export const fadeIn = (direction = "up", delay = 0) => ({
  initial: {
    y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
    x: direction === "left" ? 32 : direction === "right" ? -32 : 0,
    opacity: 0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
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
      delayChildren: 0.1,
    },
  },
};

export const imageMask = {
  initial: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.08 },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    scale: 1,
    transition: {
      duration: 1.2,
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
      duration: 0.6,
      ease: transitions.luxuryEase,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.4,
      ease: transitions.luxuryEase,
    },
  },
};
