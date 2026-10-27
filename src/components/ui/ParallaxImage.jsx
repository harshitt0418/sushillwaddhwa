import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Image-only parallax keeps the page layout stable: sections never overlap or stack.
export default function ParallaxImage({ src, alt, className = '', position = 'center center', loading = 'lazy' }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      style={{ objectFit: 'cover', objectPosition: position, y: reduceMotion ? 0 : y, scale: 1.12 }}
      whileHover={reduceMotion ? undefined : { scale: 1.15 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    />
  );
}
