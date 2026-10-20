import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeIn } from '@/lib/motion';

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  theme = 'light', // 'light' | 'dark'
  className,
}) => {
  const isDark = theme === 'dark';

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
        <div className="flex items-center gap-3 mb-4 tracking-widest text-[11px] font-medium uppercase">
          <span className={cn(
            "w-6 h-[1px]",
            isDark ? "bg-bronze" : "bg-bronze"
          )} />
          <span className={cn(
            "tracking-super-wide",
            isDark ? "text-stone" : "text-bronze-dim"
          )}>
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className={cn(
          "font-serif font-normal leading-[1.08] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-balance",
          isDark ? "text-bone" : "text-ink"
        )}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={cn(
          "mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light",
          isDark ? "text-stone" : "text-stone-dark"
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
