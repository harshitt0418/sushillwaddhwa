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
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b",
          isScrolled
            ? "bg-ink/95 backdrop-blur-md py-3.5 sm:py-4 border-white/15 shadow-2xl"
            : "bg-ink/80 backdrop-blur-md py-4 sm:py-5 border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link to="/" className="group flex flex-col max-w-[240px] sm:max-w-none">
            <span className="font-serif text-lg sm:text-2xl tracking-[0.16em] sm:tracking-[0.18em] font-normal text-bone group-hover:text-bronze transition-colors uppercase truncate">
              Sushill Waddhwa
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-widest sm:tracking-super-wide text-bronze uppercase -mt-0.5 truncate">
              Founder & CMD, Platinum World Grroup · Since 1989
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Main Navigation">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] uppercase tracking-widest font-medium transition-colors relative py-1",
                    isActive
                      ? "text-bone font-semibold"
                      : "text-bone/75 hover:text-white"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-bronze" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center">
            <Button to={headerCTA.path} variant="darkOutline" size="sm">
              {headerCTA.label}
            </Button>
          </div>

          {/* Mobile / Tablet Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-bone hover:text-bronze transition-colors"
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
