
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ProgramCard from '@/components/ui/program-card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const ProgramsSection = () => {
  const { t, language } = useLanguage();

  const programs = [
    {
      title: t('hvacTitle'),
      description: t('hvacDescription'),
      price: '$2,500',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'HVAC Certification' : 'Certificación HVAC',
      imageUrl: '/hvac-program.jpg',
      slug: 'hvac',
      keyFeatures: [
        language === 'en' 
          ? 'Learn Essential Skills To Become Job-Ready in HVAC for entry-level positions'
          : 'Aprende habilidades esenciales para estar listo para trabajar en HVAC en puestos de nivel inicial',
        language === 'en' ? 'Self Paced, Online Learning' : 'Aprendizaje en línea a tu propio ritmo',
        language === 'en' ? 'Connect with Local Cohort' : 'Conéctate con grupos locales',
        language === 'en' ? 'Hands-On Externship with Local Professional*' : 'Prácticas presenciales con profesionales locales*'
      ],
      salaryInfo: {
        median: '$60,590',
        growth: language === 'en' ? '5%' : '5%',
        period: '2022-2032'
      }
    },
    {
      title: t('electricianTitle'),
      description: t('electricianDescription'),
      price: '$2,500',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'Electrician Certification' : 'Certificación de Electricista',
      imageUrl: '/plumbing-program.jpg', // Reusing the image for now
      slug: 'electrician',
      keyFeatures: [
        language === 'en' 
          ? 'Learn Essential Skills To Become Job-Ready in Electrical for entry-level positions'
          : 'Aprende habilidades esenciales para estar listo para trabajar en electricidad en puestos de nivel inicial',
        language === 'en' ? 'Self Paced, Online Learning' : 'Aprendizaje en línea a tu propio ritmo',
        language === 'en' ? 'Connect with Local Cohort' : 'Conéctate con grupos locales',
        language === 'en' ? 'Hands-On Externship with Local Professional*' : 'Prácticas presenciales con profesionales locales*'
      ],
      salaryInfo: {
        median: '$60,240',
        growth: language === 'en' ? '7%' : '7%',
        period: '2022-2032'
      }
    }
  ];

  return (
    <section id="programs-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={t('programsSubtitle')}
          title={t('programsTitle')}
          description={t('programsDescription')}
          centered={true}
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/apply">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-600 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-lg text-xl"
            >
              {t('applyNowButton')}
            </motion.button>
          </Link>
          <p className="text-sm text-gray-500 mt-3">{t('externshipNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
