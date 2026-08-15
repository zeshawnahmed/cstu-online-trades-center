import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import BrandName from './BrandName';


const links = [
  { to: '/', label: 'Home' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/financial-aid', label: 'Tuition' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled
          ? 'bg-sand-50/95 backdrop-blur-md border-emerald-900/10'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="font-display text-lg md:text-xl font-medium tracking-tight text-emerald-700">
            <BrandName className="hidden sm:inline" />
            <span className="sm:hidden">AIT</span>
          </Link>


          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs tracking-[0.18em] uppercase text-emerald-800/70 hover:text-emerald-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-sand-50 rounded-none px-6 text-xs tracking-[0.18em] uppercase">
                Request Info
              </Button>
            </Link>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-emerald-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-sand-50 border-t border-emerald-900/10">
          <div className="container mx-auto px-6 py-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-xs tracking-[0.18em] uppercase text-emerald-800/80"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
