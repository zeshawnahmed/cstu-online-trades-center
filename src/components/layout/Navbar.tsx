
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/95 shadow-md backdrop-blur-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-600">
                <span className="text-navy-700">C</span>
                <span className="text-gold-500">STU</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2 bg-white rounded-md shadow-xl border border-gray-100">
                  <Link to="/programs/hvac" className="block px-4 py-2 text-sm text-navy-500 hover:bg-navy-50 transition-colors duration-200">
                    HVAC
                  </Link>
                  <Link to="/programs/plumbing" className="block px-4 py-2 text-sm text-navy-500 hover:bg-navy-50 transition-colors duration-200">
                    Plumbing
                  </Link>
                  <Link to="/programs/welding" className="block px-4 py-2 text-sm text-navy-500 hover:bg-navy-50 transition-colors duration-200">
                    Welding
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
              About
            </Link>
            <Link to="/contact" className="text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gold-400 hover:bg-gold-500 text-navy-700 font-medium">
              Apply Now
            </Button>
          </div>
          
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden flex items-center text-navy-500 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 pt-2 pb-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-navy-500 hover:text-navy-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div>
              <div className="py-2 text-navy-500">Programs</div>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/programs/hvac" 
                  className="block py-1 text-navy-500 hover:text-navy-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HVAC
                </Link>
                <Link 
                  to="/programs/plumbing" 
                  className="block py-1 text-navy-500 hover:text-navy-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Plumbing
                </Link>
                <Link 
                  to="/programs/welding" 
                  className="block py-1 text-navy-500 hover:text-navy-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Welding
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="block py-2 text-navy-500 hover:text-navy-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-navy-500 hover:text-navy-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-gold-400 hover:bg-gold-500 text-navy-700 mt-2">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
