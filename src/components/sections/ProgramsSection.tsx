
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
      title: language === 'en' ? 'Commercial Truck Driving & CDL' : 'Manejo de Camiones Comerciales y CDL',
      description: language === 'en' 
        ? 'Learn essential skills to become job-ready in commercial truck driving with CDL Class A or B license, plus optional Hazmat Endorsement'
        : 'Aprende habilidades esenciales para estar listo para trabajar en el manejo de camiones comerciales con licencia CDL Clase A o B, más Endoso Hazmat opcional',
      price: language === 'en' ? 'Flat Rate Tuition: $3,500' : 'Matrícula de Tarifa Plana: $3,500',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'CDL Class A/B License' : 'Licencia CDL Clase A/B',
      imageUrl: '/truck-driving-program.jpg',
      slug: 'commercial-truck-driving',
      keyFeatures: [
        language === 'en' 
          ? 'Learn Essential Skills To Become Job-Ready in Commercial Truck Driving for entry level positions'
          : 'Aprende habilidades esenciales para estar listo para trabajar en Manejo de Camiones Comerciales en puestos de nivel inicial',
        language === 'en' ? 'CDL Class A or B License Training' : 'Capacitación para Licencia CDL Clase A o B',
        language === 'en' ? 'Optional Hazmat Endorsement' : 'Endoso Hazmat Opcional',
        language === 'en' ? 'Self Paced, Online Learning' : 'Aprendizaje en línea a tu propio ritmo',
        language === 'en' ? 'Connect with Local Cohort' : 'Conéctate con grupos locales',
        language === 'en' ? 'Hands-On Externship with Local Professional*' : 'Prácticas presenciales con profesionales locales*'
      ],
      salaryInfo: {
        median: '$70,000',
        growth: language === 'en' ? '6%' : '6%',
        period: '2022-2032',
        clarification: language === 'en' ? 'Median Annual Salary for Commercial Truck Drivers' : 'Salario Anual Medio para Conductores de Camiones Comerciales'
      }
    }
  ];

  return (
    <section id="programs-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle={language === 'en' ? 'Our Program' : 'Nuestro Programa'}
          title={language === 'en' ? 'Commercial Truck Driving Training' : 'Capacitación en Manejo de Camiones Comerciales'}
          description={language === 'en' 
            ? 'Master the skills needed for a successful career in commercial truck driving with comprehensive CDL training'
            : 'Domina las habilidades necesarias para una carrera exitosa en el manejo de camiones comerciales con capacitación integral de CDL'
          }
          centered={true}
          className="mb-8"
        />
        
        <div className="max-w-3xl mx-auto">
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
            <Link to="/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy-600 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-lg text-xl w-full md:w-auto"
              >
                {language === 'en' ? 'Apply Now' : 'Aplicar Ahora'}
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold-400 hover:bg-gold-500 text-navy-800 font-bold px-8 py-4 rounded-lg text-xl w-full md:w-auto"
              >
                {language === 'en' ? 'Financial Aid Assistance Available' : 'Asistencia de Ayuda Financiera Disponible'}
              </motion.button>
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            *{language === 'en' 
              ? 'Externship placement assistance available upon program completion and subject to industry demand'
              : 'Asistencia para colocación en prácticas disponible al completar el programa y sujeta a la demanda de la industria'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
