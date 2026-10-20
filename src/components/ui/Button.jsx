import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'outline' | 'ghost' | 'dark'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = true,
  className,
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans tracking-widest text-xs uppercase transition-all duration-300 relative group overflow-hidden focus:outline-none focus:ring-1 focus:ring-bronze";

  const sizeStyles = {
    sm: "px-4 py-2 text-[10px]",
    md: "px-7 py-3.5 text-[11px]",
    lg: "px-9 py-4 text-[12px]",
  };

  const variants = {
    primary: "bg-ink text-bone hover:bg-bronze hover:text-white border border-ink/40 shadow-sm",
    outline: "bg-transparent text-ink border border-ink/30 hover:border-bronze hover:text-bronze hover:bg-bone-dim/40",
    dark: "bg-bone text-ink hover:bg-bronze hover:text-white border border-bone/60",
    darkOutline: "bg-white/5 text-bone border border-bone/40 hover:border-bronze hover:text-white hover:bg-bronze/20 backdrop-blur-sm",
    ghost: "bg-transparent text-ink hover:text-bronze p-0 tracking-widest border-b border-transparent hover:border-bronze",
  };

  const content = (
    <>
      <span className="relative z-10 font-medium flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-80 group-hover:opacity-100" />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
        {...props}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variants[variant], className, disabled && "opacity-50 cursor-not-allowed")}
      {...props}
    >
      {content}
    </motion.button>
  );
};
