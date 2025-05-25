
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  scrollToPrograms: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToPrograms }) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center text-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {language === 'en' 
                ? 'Skilled Trade Mastery and Your Prosperous Future Begins Here.'
                : 'El Dominio de Oficios Especializados y Tu Futuro Próspero Comienza Aquí.'
              }
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {language === 'en'
                ? 'We Offer Specialized, Hands-On Career Training For You to Level Up Your Financial Future By Mastering In-Demand Skilled Trades.'
                : 'Ofrecemos Capacitación Especializada y Práctica para que Mejores tu Futuro Financiero al Dominar Oficios Especializados en Demanda.'
              }
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
              >
                {t('becomeJobReady')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
              >
                {t('onlineSelfPaced')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
              >
                {t('handsOnTraining')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-4 py-2 rounded-lg backdrop-blur-sm text-sm"
              >
                {language === 'en' ? 'Financial Aid Assistance Available' : 'Asistencia de Ayuda Financiera Disponible'}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button 
                onClick={scrollToPrograms}
                className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-6 text-xl"
              >
                {t('explorePrograms')} <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Link to="/contact">
                <Button className="bg-white/90 hover:bg-white text-navy-900 font-bold px-8 py-6 text-xl">
                  {language === 'en' ? 'Financial Aid Assistance Available' : 'Asistencia de Ayuda Financiera Disponible'}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
