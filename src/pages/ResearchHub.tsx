
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Users, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const JobSearchPage = () => {
  const { language } = useLanguage();

  const timelineItems = [
    {
      phase: language === 'en' ? '1 Month Before Graduation' : '1 Mes Antes de Graduación',
      icon: FileText,
      title: language === 'en' ? 'Resume Workshop' : 'Taller de Currículum',
      description: language === 'en' ? 'Craft & tailor your resume' : 'Crea y personaliza tu currículum',
    },
    {
      phase: language === 'en' ? '1 Month Before Graduation' : '1 Mes Antes de Graduación',
      icon: MessageSquare,
      title: language === 'en' ? 'Interview Prep' : 'Preparación de Entrevistas',
      description: language === 'en' ? 'Tips & techniques' : 'Consejos y técnicas',
    },
    {
      phase: language === 'en' ? 'After Graduation' : 'Después de Graduación',
      icon: Users,
      title: language === 'en' ? 'Employer Connections' : 'Conexiones con Empleadores',
      description: language === 'en' ? 'We share your profile with local employers' : 'Compartimos tu perfil con empleadores locales',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-navy-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-700 mb-6"
            >
              {language === 'en' ? 'Job Search Pipeline' : 'Proceso de Búsqueda de Empleo'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-navy-600/80 max-w-xl mx-auto"
            >
              {language === 'en' 
                ? 'Our mission is to empower you to take on your Job Search with CONFIDENCE.'
                : 'Nuestra misión es empoderarte para enfrentar tu búsqueda de empleo con CONFIANZA.'}
            </motion.p>
          </div>
        </section>

        {/* Visual Timeline */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-navy-200 via-navy-400 to-navy-600 transform -translate-y-1/2 rounded-full" />
              
              <div className="relative flex justify-between items-start">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center w-1/3 px-4"
                  >
                    {/* Phase Label */}
                    <span className={`text-xs font-semibold uppercase tracking-wider mb-4 ${
                      index < 2 ? 'text-navy-500' : 'text-navy-700'
                    }`}>
                      {item.phase}
                    </span>
                    
                    {/* Icon Circle */}
                    <div className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4 ${
                      index < 2 
                        ? 'bg-white border-4 border-navy-300' 
                        : 'bg-navy-600 border-4 border-navy-700'
                    }`}>
                      <item.icon className={`w-8 h-8 ${index < 2 ? 'text-navy-500' : 'text-white'}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-navy-700 mb-1">{item.title}</h3>
                    <p className="text-sm text-navy-500">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-200 via-navy-400 to-navy-600" />
              
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Icon Circle */}
                    <div className={`absolute -left-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      index < 2 
                        ? 'bg-white border-3 border-navy-300' 
                        : 'bg-navy-600 border-3 border-navy-700'
                    }`}>
                      <item.icon className={`w-5 h-5 ${index < 2 ? 'text-navy-500' : 'text-white'}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        index < 2 ? 'text-navy-400' : 'text-navy-600'
                      }`}>
                        {item.phase}
                      </span>
                      <h3 className="text-lg font-bold text-navy-700 mt-1">{item.title}</h3>
                      <p className="text-sm text-navy-500 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Success Indicator */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy-50 rounded-full border border-navy-200">
                <CheckCircle className="w-5 h-5 text-navy-600" />
                <span className="text-navy-700 font-medium">
                  {language === 'en' ? 'Career Ready' : 'Listo para tu Carrera'}
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default JobSearchPage;
