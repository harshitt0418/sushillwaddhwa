import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navigationLinks, headerCTA } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-obsidian/95 backdrop-blur-xl py-3.5 sm:py-4 border-b border-gold/20 shadow-[0_12px_36px_rgba(4,7,13,0.7)]"
            : "bg-obsidian/75 backdrop-blur-md py-4 sm:py-5 border-b border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Wordmark - Haute Couture Editorial Identity */}
          <Link to="/" className="group flex flex-col flex-shrink-0">
            <span className="font-serif text-lg sm:text-2xl tracking-[0.16em] sm:tracking-[0.2em] font-normal text-ivory group-hover:text-gold transition-colors duration-300 uppercase truncate">
              Sushill Waddhwa
            </span>
            <span className="text-[7.5px] sm:text-[9px] tracking-super-wide text-gold uppercase -mt-0.5 truncate font-mono">
              Founder & CMD, Platinum World Grroup · Since 1989
            </span>
          </Link>

          {/* Desktop Navigation - Classic numbered luxury aesthetic with overlap-proof responsive spacing */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 flex-shrink-0" aria-label="Main Navigation">
            {navigationLinks.map((link, idx) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    "text-[9.5px] xl:text-[10.5px] uppercase tracking-[0.12em] xl:tracking-[0.18em] font-medium transition-all duration-300 relative py-1 group",
                    isActive
                      ? "text-ivory font-semibold"
                      : "text-warmstone/80 hover:text-ivory"
                  )
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1 xl:gap-1.5 whitespace-nowrap">
                    <span className="font-mono text-[8.5px] xl:text-[9.5px] text-gold/60 group-hover:text-gold transition-colors">
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

          {/* Header Action Button - Contact */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button
              to={headerCTA.path}
              variant="outline"
              size="sm"
              className="px-3.5 xl:px-5 py-2 text-[10px] tracking-widest whitespace-nowrap"
            >
              {headerCTA.label}
            </Button>
          </div>

          {/* Mobile / Tablet Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-ivory hover:text-gold transition-colors duration-300 flex-shrink-0"
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