
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const JobSearchPage = () => {
  const { language } = useLanguage();

  const timelineItems = [
    {
      phase: language === 'en' ? '1 Month Before Graduation' : '1 Mes Antes de Graduación',
      icon: FileText,
      title: language === 'en' ? 'Resume Workshop' : 'Taller de Currículum',
      description: language === 'en' ? 'Craft & tailor your resume highlighting your unique skills' : 'Crea y personaliza tu currículum destacando tus habilidades únicas',
    },
    {
      phase: language === 'en' ? '1 Month Before Graduation' : '1 Mes Antes de Graduación',
      icon: MessageSquare,
      title: language === 'en' ? 'Interview Prep' : 'Preparación de Entrevistas',
      description: language === 'en' ? 'Tips & techniques to stand out' : 'Consejos y técnicas para destacar',
    },
    {
      phase: language === 'en' ? 'After Graduation' : 'Después de Graduación',
      icon: Users,
      title: language === 'en' ? 'Industry Readiness' : 'Preparación para la Industria',
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
            <div className="hidden md:block relative py-8">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-1 bg-navy-200 transform -translate-y-1/2">
                <div className="absolute inset-0 bg-gradient-to-r from-navy-400 to-navy-600 rounded-full" />
              </div>
              
              <div className="relative flex justify-between items-start px-[5%]">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center w-1/3 px-6"
                  >
                    {/* Phase Label */}
                    <span className={`text-xs font-semibold uppercase tracking-wider mb-6 px-3 py-1 rounded-full ${
                      index < 2 ? 'bg-navy-100 text-navy-600' : 'bg-navy-600 text-white'
                    }`}>
                      {item.phase}
                    </span>
                    
                    {/* Timeline Node */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 ${
                        index < 2 
                          ? 'bg-white border-navy-300' 
                          : 'bg-navy-600 border-navy-500'
                      }`}>
                        <item.icon className={`w-7 h-7 ${index < 2 ? 'text-navy-600' : 'text-white'}`} />
                      </div>
                      {/* Connector dot */}
                      <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${
                        index < 2 ? 'bg-navy-400' : 'bg-navy-600'
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-navy-700 mb-2">{item.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed max-w-[200px]">{item.description}</p>
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

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default JobSearchPage;
