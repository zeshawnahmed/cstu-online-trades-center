
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  // Function to underline first letter of each word
  const UnderlinedFirstLetters = ({ text }: { text: string }) => {
    return (
      <span>
        {text.split(' ').map((word, index) => (
          <span key={index}>
            {index > 0 && ' '}
            <span className="underline decoration-gold-400 decoration-2">{word.charAt(0)}</span>
            {word.slice(1)}
          </span>
        ))}
      </span>
    );
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
              <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-600 font-serif">
                <span className="text-navy-700 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
                  <UnderlinedFirstLetters text="California Skilled Trade University" />
                </span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
              {t('home')}
            </Link>
            <div className="relative group">
              <button className="flex items-center text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
                {t('programs')} <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2 bg-white rounded-md shadow-xl border border-gray-100">
                  <Link to="/programs/hvac" className="block px-4 py-2 text-sm text-navy-500 hover:bg-navy-50 transition-colors duration-200">
                    HVAC
                  </Link>
                  <Link to="/programs/electrician" className="block px-4 py-2 text-sm text-navy-500 hover:bg-navy-50 transition-colors duration-200">
                    {language === 'en' ? 'Electrician' : 'Electricista'}
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
              {language === 'en' ? 'About Us' : 'Acerca de Nosotros'}
            </Link>
            <Link to="/contact" className="text-navy-500 hover:text-navy-400 font-medium transition-colors duration-200">
              {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 text-navy-500 text-sm font-medium">
                {language === 'en' ? '¿Habla Español?' : 'English?'}
              </span>
              <button 
                onClick={toggleLanguage}
                className="flex items-center px-3 py-1 rounded-full bg-navy-100 text-navy-700 hover:bg-navy-200 font-medium transition-colors duration-200"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language === 'en' ? 'Español' : 'English'}
              </button>
            </div>
            
            <Link to="/apply">
              <Button className="bg-gold-400 hover:bg-gold-500 text-navy-700 font-medium">
                {t('applyNow')}
              </Button>
            </Link>
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
              {t('home')}
            </Link>
            <div>
              <div className="py-2 text-navy-500">{t('programs')}</div>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/programs/hvac" 
                  className="block py-1 text-navy-500 hover:text-navy-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HVAC
                </Link>
                <Link 
                  to="/programs/electrician" 
                  className="block py-1 text-navy-500 hover:text-navy-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === 'en' ? 'Electrician' : 'Electricista'}
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="block py-2 text-navy-500 hover:text-navy-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'en' ? 'About Us' : 'Acerca de Nosotros'}
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-navy-500 hover:text-navy-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {language === 'en' ? 'Contact Us' : 'Contáctanos'}
            </Link>
            <button 
              onClick={() => {
                toggleLanguage();
                // Don't close the mobile menu when switching languages
              }}
              className="flex items-center py-2 text-navy-500 hover:text-navy-400"
            >
              <Globe className="h-5 w-5 mr-2" />
              {language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            </button>
            <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-gold-400 hover:bg-gold-500 text-navy-700 mt-2">
                {t('applyNow')}
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-navy-600 hover:bg-navy-700 text-white mt-2">
                {language === 'en' ? 'Financial Aid Available' : 'Ayuda Financiera Disponible'}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
