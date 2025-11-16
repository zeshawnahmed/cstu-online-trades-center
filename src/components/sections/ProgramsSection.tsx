import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ProgramCard from '@/components/ui/program-card';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const { language } = useLanguage();

  const programs = [
    {
      title: language === 'en' ? 'HVAC Technician Program (EPA 608 Certification Training Included)' : 'Programa de Técnico HVAC (Entrenamiento de Certificación EPA 608 Incluido)',
      description: language === 'en' 
        ? 'Master heating, ventilation, and air conditioning systems with comprehensive training including EPA 608 certification training and *complimentary hands-on training to get job ready.'
        : 'Domina los sistemas de calefacción, ventilación y aire acondicionado con capacitación integral incluyendo capacitación de certificación EPA 608 y *capacitación práctica complementaria para estar listo para el trabajo.',
      price: language === 'en' ? 'Affordable Flat Rate Tuition - Call to Learn More' : 'Matrícula de Tarifa Plana Asequible - Llama para Obtener Más Información',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'EPA 608 Certification' : 'Certificación EPA 608',
      imageUrl: '/hvac-technician-program.jpg',
      slug: 'hvac-technician',
      keyFeatures: [
        language === 'en' ? '*Hands-On Training Workshops with Qualified Industry Professional' : '*Talleres de Capacitación Práctica con Profesional Calificado de la Industria',
        language === 'en' ? 'EPA 608 Certification Training Included' : 'Capacitación de Certificación EPA 608 Incluida',
        language === 'en' ? 'Learn Residential and Commercial HVAC Systems' : 'Aprende Sistemas HVAC Residenciales y Comerciales',
        language === 'en' ? 'Self Paced, Online Learning Format for Busy Professionals' : 'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
        language === 'en' ? 'Access to Accountability/Learning Coach' : 'Acceso a Entrenador de Responsabilidad/Aprendizaje',
        language === 'en' ? 'Connect with Local Cohort Through Fun Experiences' : 'Conéctate con grupos locales a través de experiencias divertidas'
      ],
      salaryInfo: {
        median: '$63,420',
        growth: language === 'en' ? '+13%' : '+13%',
        period: language === 'en' ? 'projected by 2030 - According to TradeCareerPath' : 'proyectado para 2030 - Según TradeCareerPath',
        clarification: language === 'en' ? 'Median Annual Salary' : 'Salario Anual Mediano'
      }
    }
  ];

  return (
    <section id="programs-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={language === 'en' ? 'Current Program Offerings' : 'Ofertas de Programas Actuales'}
          centered={true}
          className="mb-8"
        />
        
        {/* Prominent Admissions Contact - Mobile Optimized */}
        <div className="text-center mb-8">
          <div className="bg-gold-400 text-navy-800 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-lg inline-block border-2 border-navy-600">
            <p className="text-base sm:text-lg font-bold mb-1">
              {language === 'en' ? 'CALL OR TEXT ADMISSIONS TO GET STARTED' : 'LLAMA O ENVÍA TEXTO A ADMISIONES PARA COMENZAR'}
            </p>
            <p className="text-xl sm:text-2xl font-bold underline decoration-2">
              (916) 365-6907
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
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
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-400 hover:bg-gold-500 text-navy-800 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl w-full sm:w-auto min-w-[280px]"
              >
                {language === 'en' ? 'Financial Aid Assistance' : 'Asistencia de Ayuda Financiera'}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
