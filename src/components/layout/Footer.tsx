
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  return (
    <footer className="bg-navy-500 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Prominent Admissions Contact at top */}
        <div className="text-center mb-12">
          <div className="bg-gold-400 text-navy-800 font-bold px-8 py-6 rounded-lg inline-block border-2 border-white">
            <p className="text-xl font-bold mb-2">
              {language === 'en' ? 'ADMISSIONS CONTACT' : 'CONTACTO DE ADMISIONES'}
            </p>
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              <p className="text-3xl font-bold">
                (916) 365-6907
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">AIT</h3>
            <p className="text-gray-300 mb-4">
              {language === 'en' 
                ? "American Institute of Trades offers affordable, self-paced, Job Site/Field training in high demand skilled trades."
                : "Instituto Americano de Oficios ofrece capacitación asequible, a tu propio ritmo y práctica en oficios especializados de alta demanda."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? "Programs" : "Programas"}</h3>
            <ul className="space-y-2">
              <li>
              </li>
              <li>
                <Link to="/programs/hvac-technician" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {language === 'en' ? "HVAC Technician Program" : "Programa de Técnico HVAC"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? "Quick Links" : "Enlaces Rápidos"}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {language === 'en' ? "About Us" : "Sobre Nosotros"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {language === 'en' ? "Contact Us" : "Contacto"}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-gold-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {language === 'en' ? "Privacy Policy" : "Política de Privacidad"}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {language === 'en' ? "Terms of Service" : "Términos de Servicio"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? "Contact Us" : "Contáctanos"}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-gold-400" />
                <span className="text-gray-300">Sacramento, CA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold-400" />
                <a href="tel:+19163656907" className="text-gray-300 hover:text-gold-400 transition-colors">
                  (916) 365-6907
                </a>
              </li>
              <li className="mt-3">
                <Link to="/contact" className="bg-gold-400 hover:bg-gold-500 text-navy-800 px-4 py-2 rounded-lg font-medium inline-block">
                  {language === 'en' ? "Contact Us" : "Contáctanos"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-navy-400 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} American Institute of Trades. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
              {language === 'en' ? "Privacy Policy" : "Política de Privacidad"}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
              {language === 'en' ? "Terms of Service" : "Términos de Servicio"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
