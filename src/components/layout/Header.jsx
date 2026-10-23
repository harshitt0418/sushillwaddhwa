import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationLinks, headerCTA } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-obsidian/90 backdrop-blur-xl py-3.5 sm:py-4 border-b border-gold/20 shadow-[0_12px_36px_rgba(4,7,13,0.7)]"
            : "bg-transparent py-5 sm:py-7 border-b border-white/5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark - Haute Couture Editorial Identity */}
          <Link to="/" className="group flex flex-col max-w-[210px] sm:max-w-none">
            <span className="font-serif text-lg sm:text-2xl tracking-[0.16em] sm:tracking-[0.2em] font-normal text-porcelain group-hover:text-gold transition-colors duration-300 uppercase truncate">
              Sushill Waddhwa
            </span>
            <span className="text-[7.5px] sm:text-[9px] tracking-super-wide text-gold uppercase -mt-0.5 truncate font-mono">
              Founder & CMD, Platinum World Grroup · Since 1989
            </span>
          </Link>

          {/* Desktop Navigation - Minimalist Haute Horlogerie aesthetic */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
            {navigationLinks.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-[10.5px] uppercase tracking-[0.22em] font-medium transition-all duration-300 relative py-1 group",
                    isActive
                      ? "text-porcelain font-semibold"
                      : "text-warmstone/80 hover:text-porcelain"
                  )
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    <span className="font-mono text-[9px] text-gold/60 group-hover:text-gold transition-colors">
                      0{idx + 1}
                    </span>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <Button to={headerCTA.path} variant="outline" size="sm">
              {headerCTA.label}
            </Button>
          </div>

          {/* Mobile / Tablet Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-porcelain hover:text-gold transition-colors duration-300"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;
