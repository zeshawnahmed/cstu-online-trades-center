
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  scrollToPrograms: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToPrograms }) => {
  const { t } = useLanguage();

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
              {t('heroTitle')}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-gold-400/90 text-navy-900 font-semibold px-5 py-3 rounded-lg backdrop-blur-sm"
              >
                {t('becomeJobReady')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="bg-navy-400/80 text-white font-semibold px-5 py-3 rounded-lg backdrop-blur-sm"
              >
                {t('onlineSelfPaced')}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="bg-navy-400/80 text-white font-semibold px-5 py-3 rounded-lg backdrop-blur-sm"
              >
                {t('handsOnTraining')}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button 
                onClick={scrollToPrograms}
                className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold px-8 py-6 text-xl"
              >
                {t('explorePrograms')} <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
