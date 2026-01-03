
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  return (
    <footer className="bg-navy-500 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Prominent Admissions Contact at top - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <Link to="/contact" className="bg-gold-400 text-navy-800 font-bold px-4 sm:px-8 py-4 sm:py-6 rounded-lg inline-block border-2 border-white hover:bg-gold-500 transition-colors">
            <p className="text-base sm:text-xl font-bold mb-1 sm:mb-2">
              {language === 'en' ? 'TO GET STARTED' : 'PARA COMENZAR'}
            </p>
            <p className="text-sm sm:text-lg font-bold underline">
              {language === 'en' ? 'Click Here to Fill Out Contact Form and Admissions Rep Will Be in Touch' : 'Haz Clic Aquí para Llenar el Formulario de Contacto y un Representante de Admisiones se Pondrá en Contacto'}
            </p>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">AIT</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              {language === 'en' 
                ? "American Institute of Trades offers specialized training in high demand skilled trades."
                : "Instituto Americano de Oficios ofrece capacitación especializada en oficios de alta demanda."}
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
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
          
          {/* Column 2 - Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? "Contact Us" : "Contáctanos"}</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start">
                <MapPin className="h-5 w-5 mr-2 text-gold-400" />
                <span className="text-gray-300 text-sm sm:text-base">Sacramento, CA</span>
              </li>
              <li className="text-gray-300 text-sm sm:text-base">
                <a href="tel:916-343-8014" className="hover:text-gold-400 transition-colors">
                  916-343-8014
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold-400 transition-colors underline text-sm sm:text-base">
                  {language === 'en' ? 'Fill Out Contact Form' : 'Llenar Formulario de Contacto'}
                </Link>
              </li>
              <li className="mt-3">
                <Link to="/contact" className="bg-gold-400 hover:bg-gold-500 text-navy-800 px-4 py-2 rounded-lg font-medium inline-block text-sm sm:text-base">
                  {language === 'en' ? "Contact Us" : "Contáctanos"}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? "Legal" : "Legal"}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-gold-400 transition-colors text-sm sm:text-base">
                  {language === 'en' ? "Privacy Policy" : "Política de Privacidad"}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-gold-400 transition-colors text-sm sm:text-base">
                  {language === 'en' ? "Terms of Service" : "Términos de Servicio"}
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
