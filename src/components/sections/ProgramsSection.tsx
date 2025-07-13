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
      title: language === 'en' ? 'Commercial Truck Driving Program (CDL Class A and/or B with optional Hazmat Endorsement)' : 'Programa de Manejo de Camiones Comerciales (CDL Clase A y/o B con Endoso Hazmat Opcional)',
      description: language === 'en' 
        ? 'Learn essential skills to become job-ready in commercial truck driving with CDL Class A or B license, plus optional Hazmat Endorsement - FMCSA-Approved Program'
        : 'Aprende habilidades esenciales para estar listo para trabajar en el manejo de camiones comerciales con licencia CDL Clase A o B, más Endoso Hazmat opcional - Programa Aprobado por FMCSA',
      price: language === 'en' ? 'Flat Rate Tuition: $2,499' : 'Matrícula de Tarifa Plana: $2,499',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'CDL Class A/B License' : 'Licencia CDL Clase A/B',
      imageUrl: '/truck-driving-program.jpg',
      slug: 'commercial-truck-driving',
      keyFeatures: [
        language === 'en' 
          ? 'FMCSA-Approved Program - Learn Essential Skills To Become Job-Ready in Commercial Truck Driving for entry level positions'
          : 'Programa Aprobado por FMCSA - Aprende habilidades esenciales para estar listo para trabajar en Manejo de Camiones Comerciales en puestos de nivel inicial',
        language === 'en' ? 'CDL Class A or B License Training' : 'Capacitación para Licencia CDL Clase A o B',
        language === 'en' ? 'Optional Hazmat Endorsement' : 'Endoso Hazmat Opcional',
        language === 'en' ? 'Self Paced, Online Learning Format for Busy Professionals' : 'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
        language === 'en' ? 'Connect with Local Cohort Through Fun Experiences' : 'Conéctate con grupos localess a través de experiencias divertidas',
        language === 'en' ? 'Hands-On Training With Licensed Professionals' : 'Entrenamiento práctico con profesionales licenciados'
      ],
      salaryInfo: {
        median: '$70,000',
        growth: language === 'en' ? '12%' : '12%',
        period: '2022-2032',
        clarification: language === 'en' ? 'Median Annual Salary for Commercial Truck Drivers' : 'Salario Anual Medio para Conductores de Camiones Comerciales'
      }
    },
    {
      title: language === 'en' ? 'HVAC Technician Program (EPA 608 Certification Included)' : 'Programa de Técnico HVAC (Certificación EPA 608 Incluida)',
      description: language === 'en' 
        ? 'Master heating, ventilation, and air conditioning systems with comprehensive training including EPA 608 certification - Industry-Approved Program'
        : 'Domina los sistemas de calefacción, ventilación y aire acondicionado con capacitación integral incluyendo certificación EPA 608 - Programa Aprobado por la Industria',
      price: language === 'en' ? 'Flat Rate Tuition: $2,499' : 'Matrícula de Tarifa Plana: $2,499',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'EPA 608 Certification' : 'Certificación EPA 608',
      imageUrl: '/hvac-technician-program.jpg',
      slug: 'hvac-technician',
      keyFeatures: [
        language === 'en' ? 'EPA 608 Certification Training Included' : 'Capacitación de Certificación EPA 608 Incluida',
        language === 'en' ? 'Residential and Commercial HVAC Systems' : 'Sistemas HVAC Residenciales y Comerciales',
        language === 'en' ? 'Self Paced, Online Learning Format for Busy Professionals' : 'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
        language === 'en' ? 'Connect with Local Cohort Through Fun Experiences' : 'Conéctate con grupos locales a través de experiencias divertidas',
        language === 'en' ? 'Hands-On Training With Licensed Professional' : 'Entrenamiento práctico con profesional licenciado'
      ],
      salaryInfo: {
        median: '$75,000',
        growth: language === 'en' ? '13%' : '13%',
        period: '2022-2032',
        clarification: language === 'en' ? 'Median Annual Salary for HVAC Technicians' : 'Salario Anual Medio para Técnicos HVAC'
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
        
        {/* Prominent Admissions Contact */}
        <div className="text-center mb-8">
          <div className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-navy-600">
            <p className="text-lg font-bold mb-1">
              {language === 'en' ? 'CALL OR TEXT ADMISSIONS TO GET STARTED' : 'LLAMA O ENVÍA TEXTO A ADMISIONES PARA COMENZAR'}
            </p>
            <p className="text-2xl font-bold underline decoration-2">
              (916) 365-6907
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-400 hover:bg-gold-500 text-navy-800 font-bold px-8 py-4 rounded-lg text-xl w-full md:w-auto"
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
