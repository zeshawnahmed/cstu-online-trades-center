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
        ? 'Master HVAC systems through comprehensive training, including EPA 608 certification and complementary hands-on workshops to become job-ready.'
        : 'Domina los sistemas HVAC a través de capacitación integral, incluyendo certificación EPA 608 y talleres prácticos complementarios para estar listo para trabajar.',
      price: language === 'en' ? 'Affordable Flat Rate Tuition - $2500' : 'Matrícula de Tarifa Plana Asequible - $2500',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'EPA 608 Certification' : 'Certificación EPA 608',
      imageUrl: '/hvac-technician-program.jpg',
      slug: 'hvac-technician',
      keyFeatures: [
        language === 'en' ? 'EPA 608 Certification Training Included' : 'Capacitación de Certificación EPA 608 Incluida',
        language === 'en' ? 'Residential & Commercial HVAC Systems' : 'Sistemas HVAC Residenciales y Comerciales',
        language === 'en' ? 'Self-Paced, Online Format for Busy Professionals' : 'Formato en Línea a tu Ritmo para Profesionales Ocupados',
        language === 'en' ? 'Accountability & Learning Coach Support' : 'Apoyo de Entrenador de Responsabilidad y Aprendizaje',
        language === 'en' ? 'Local Cohort Connection Through Engaging Experiences' : 'Conexión con Cohorte Local a Través de Experiencias Participativas',
        language === 'en' ? 'Complementary bi-monthly hands-on workshops for the Winter 2025 cohort near Downtown Sacramento, made possible through collaboration with local HVAC industry professionals' : 'Talleres prácticos complementarios bimensuales para la cohorte de Invierno 2025 cerca del centro de Sacramento, posibles gracias a la colaboración con profesionales locales de la industria HVAC'
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
          <Link to="/contact" className="bg-gold-400 text-navy-800 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-lg inline-block border-2 border-navy-600 hover:bg-gold-500 transition-colors">
            <p className="text-base sm:text-lg font-bold mb-1">
              {language === 'en' ? 'TO GET STARTED' : 'PARA COMENZAR'}
            </p>
            <p className="text-lg sm:text-xl font-bold underline decoration-2">
              {language === 'en' ? 'Click Here to Fill Out Contact Form and Admissions Rep Will Be in Touch' : 'Haz Clic Aquí para Llenar el Formulario de Contacto y un Representante de Admisiones se Pondrá en Contacto'}
            </p>
          </Link>
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
            <Link to="/financial-aid">
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
