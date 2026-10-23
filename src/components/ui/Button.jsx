import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'outline' | 'ghost' | 'dark' | 'darkOutline' | 'gold' | 'secondary'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-widest text-xs uppercase transition-all duration-300 relative group overflow-hidden focus:outline-none focus:ring-1 focus:ring-gold rounded-[1px]";

  const sizeStyles = {
    sm: "px-4 py-2.5 text-[10px]",
    md: "px-7 py-3.5 text-[11px]",
    lg: "px-9 py-4 text-[12px]",
  };

  const variants = {
    // Primary: Porcelain white background with obsidian text, hovering to Maybach Gold with obsidian text
    primary: "bg-porcelain text-obsidian border border-porcelain hover:bg-gold hover:border-gold hover:text-obsidian shadow-sm",
    // Outline: Transparent with subtle gold border, porcelain text, hovering to Maybach Gold fill
    outline: "bg-transparent text-porcelain border border-gold/40 hover:border-gold hover:bg-gold/10 hover:text-gold-champagne",
    // Secondary: Deep sapphire/midnight backing with gold hairline border
    secondary: "bg-midnight/70 text-porcelain border border-gold/30 hover:border-gold hover:bg-sapphire hover:text-porcelain",
    // Dark: Obsidian Navy backing with gold border, hovering to porcelain
    dark: "bg-obsidian text-porcelain border border-gold/50 hover:bg-gold hover:text-obsidian hover:border-gold",
    // DarkOutline: Transparent navy with thin gold border
    darkOutline: "bg-obsidian/60 text-porcelain border border-gold/40 hover:border-gold hover:text-obsidian hover:bg-gold backdrop-blur-sm",
    // Gold: Solid Maybach Gold button
    gold: "bg-gold text-obsidian border border-gold hover:bg-gold-champagne hover:border-gold-champagne hover:text-obsidian font-semibold",
    // Ghost: Understated inline text link with gold hover line
    ghost: "bg-transparent text-porcelain hover:text-gold p-0 tracking-widest border-b border-transparent hover:border-gold rounded-none",
  };

  // Subtle magnetic micro-interaction for primary buttons
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
