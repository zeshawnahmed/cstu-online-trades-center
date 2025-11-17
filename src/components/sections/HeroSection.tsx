
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
            {/* Prominent Admissions Contact - Mobile Optimized */}
            <div className="mb-6 sm:mb-8">
              <div className="bg-gold-400 text-navy-800 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-lg inline-block border-2 border-white">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold mb-1">
                      {language === 'en' ? 'CALL OR TEXT ADMISSIONS TO GET STARTED' : 'LLAMA O ENVÍA TEXTO A ADMISIONES PARA COMENZAR'}
                    </p>
                    <p className="text-lg sm:text-xl font-bold underline">
                      (916) 365-6907
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              {language === 'en' 
                ? 'Skilled Trade Mastery and Prosperity Begins Here.'
                : 'El Dominio de Oficios Especializados y Tu Futuro Próspero Comienza Aquí.'
              }
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed px-4 sm:px-0">
              {language === 'en'
                ? 'We Offer Specialized, Practical Career Training For You to Level Up by Mastering In-Demand Skilled Trades.'
                : 'Ofrecemos Capacitación Especializada y Práctica para que Mejores al Dominar Oficios Especializados en Demanda.'
              }
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-5xl mx-auto px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-2 sm:px-3 py-2 rounded-lg backdrop-blur-sm text-xs sm:text-sm text-center"
              >
                {t('becomeJobReady')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-2 sm:px-3 py-2 rounded-lg backdrop-blur-sm text-xs sm:text-sm text-center"
              >
                {t('onlineSelfPaced')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-2 sm:px-3 py-2 rounded-lg backdrop-blur-sm text-xs sm:text-sm text-center"
              >
                {t('handsOnTraining')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-2 sm:px-3 py-2 rounded-lg backdrop-blur-sm text-xs sm:text-sm text-center"
              >
                {language === 'en' ? 'Financial Aid Assistance' : 'Asistencia de Ayuda Financiera'}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-2 sm:px-3 py-2 rounded-lg backdrop-blur-sm text-xs sm:text-sm text-center"
              >
                {language === 'en' ? 'Job Search Coaching' : 'Orientación en Búsqueda de Empleo'}
              </motion.div>
            </div>
            
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex justify-center px-4 sm:px-0"
            >
              <Button 
                onClick={scrollToPrograms}
                className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                {t('explorePrograms')} <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
            
            {/* Footnote moved to bottom - Mobile Optimized */}
            <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
              <p className="text-xs sm:text-sm text-gray-300">
                {language === 'en' 
                  ? '*AIT does not guarantee job placement or salary outcomes however offers Job Search Support'
                  : '*AIT no garantiza la colocación laboral o los resultados salariales, sin embargo, ofrece apoyo en la búsqueda de empleo'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
