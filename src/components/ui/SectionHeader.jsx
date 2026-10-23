import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  theme = 'dark', // default to 'dark' for Obsidian Maybach theme
  className,
}) => {
  const isLight = theme === 'light';

  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      className={cn(
        "mb-12 md:mb-16",
        align === 'center' ? "text-center mx-auto max-w-3xl" : "max-w-4xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4 tracking-widest text-[11px] font-medium uppercase font-mono">
          <span className="w-6 h-[1px] bg-gold" />
          <span className={cn(
            "tracking-super-wide",
            isLight ? "text-gold-dark" : "text-gold"
          )}>
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className={cn(
          "font-serif font-normal leading-[1.08] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance",
          isLight ? "text-obsidian" : "text-porcelain"
        )}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={cn(
          "mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light",
          isLight ? "text-obsidian/75" : "text-warmstone"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
