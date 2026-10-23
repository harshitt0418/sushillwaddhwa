import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'outline' | 'ghost' | 'dark' | 'darkOutline' | 'lightOutline' | 'gold' | 'secondary'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-[0.18em] text-xs uppercase transition-all duration-300 relative group overflow-hidden focus:outline-none focus:ring-1 focus:ring-gold rounded-[1px]";

  const sizeStyles = {
    sm: "px-4 py-2 text-[10px] min-h-[38px]",
    md: "px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] min-h-[44px]",
    lg: "px-7 sm:px-9 py-3.5 sm:py-4 text-[11px] sm:text-[12px] min-h-[48px]",
  };

  const variants = {
    // Primary: Obsidian ink background with ivory text, hovering to Antique Gold with ink text
    primary: "bg-ink text-ivory border border-ink hover:bg-gold hover:border-gold hover:text-ink shadow-sm",
    // Dark: Warm Ivory background with ink text, hovering to Antique Gold with ink text (for dark sections)
    dark: "bg-ivory text-ink border border-ivory hover:bg-gold hover:border-gold hover:text-ink shadow-sm",
    // Outline: Transparent with gold hairline border, adapting to current text color
    outline: "bg-transparent text-inherit border border-gold/40 hover:border-gold hover:bg-gold/10 hover:text-gold",
    // DarkOutline: Transparent on obsidian/charcoal with subtle gold hairline
    darkOutline: "bg-obsidian/40 text-ivory border border-gold/40 hover:border-gold hover:text-gold hover:bg-gold/10 backdrop-blur-sm",
    // LightOutline: Transparent on ivory with ink border
    lightOutline: "bg-transparent text-ink border border-ink/30 hover:border-gold hover:text-gold hover:bg-gold/10",
    // Secondary: Light champagne surface with ink text
    secondary: "bg-ivory-dim text-ink border border-ink/20 hover:border-gold hover:bg-gold hover:text-ink",
    // Gold: Solid Antique Gold button
    gold: "bg-gold text-ink border border-gold hover:bg-gold-champagne hover:border-gold-champagne hover:text-ink font-semibold",
    // Ghost: Minimalist inline text link with gold hover line
    ghost: "bg-transparent text-inherit hover:text-gold p-0 tracking-widest border-b border-transparent hover:border-gold rounded-none",
  };

  // Subtle magnetic micro-interaction for primary/dark buttons
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (variant !== 'primary' && variant !== 'dark') return;
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.12;
    const y = (clientY - (top + height / 2)) * 0.12;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <span className="relative z-10 font-medium flex items-center gap-2">
      {children}
      {icon && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-80 group-hover:opacity-100" />
      )}
    </span>
  );

  if (to) {
    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="inline-block"
      >
        <Link
          to={to}
          className={cn(baseStyles, sizeStyles[size], variants[variant] || variants.primary, className)}
          {...props}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="inline-block"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles[size], variants[variant] || variants.primary, className)}
          {...props}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variants[variant] || variants.primary, className, disabled && "opacity-50 cursor-not-allowed")}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
