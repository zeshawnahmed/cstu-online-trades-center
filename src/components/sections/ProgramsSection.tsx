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
      title: language === 'en' ? 'Certified HVAC Technician (EPA 608)' : 'Técnico HVAC Certificado (EPA 608)',
      description: language === 'en' 
        ? 'Master HVAC systems through comprehensive training, including EPA 608 certification to become job-ready.'
        : 'Domina los sistemas HVAC a través de capacitación integral, incluyendo certificación EPA 608 para estar listo para trabajar.',
      price: language === 'en' ? 'Affordable Tuition - $2500' : 'Matrícula Asequible - $2500',
      duration: language === 'en' ? 'Self-paced' : 'A tu ritmo',
      certification: language === 'en' ? 'EPA 608 Certification' : 'Certificación EPA 608',
      imageUrl: '/hvac-technician-program.jpg',
      slug: 'hvac-technician',
      showStartDates: true,
      keyFeatures: [
        language === 'en' ? '100% Online Program' : 'Programa 100% en Línea',
        language === 'en' ? 'EPA 608 Certification Training Included' : 'Capacitación de Certificación EPA 608 Incluida',
        language === 'en' ? 'Residential & Commercial HVAC Systems' : 'Sistemas HVAC Residenciales y Comerciales',
        language === 'en' ? 'Self-Paced Format for Busy Professionals' : 'Formato a tu Ritmo para Profesionales Ocupados',
        language === 'en' ? 'Accountability & Learning Coach Support' : 'Apoyo de Entrenador de Responsabilidad y Aprendizaje'
      ],
      salaryInfo: {
        median: '$63,420',
        growth: language === 'en' ? '+13%' : '+13%',
        period: language === 'en' ? 'projected by 2030 - According to TradeCareerPath' : 'proyectado para 2030 - Según TradeCareerPath',
        clarification: language === 'en' ? 'Median Annual Salary' : 'Salario Anual Mediano'
      }
    },
    {
      title: language === 'en' ? 'California Pharmacy Technician Program' : 'Programa de Técnico de Farmacia de California',
      description: language === 'en' 
        ? 'Gain the skills to maintain and operate a pharmacy in just 8 weeks and begin an exciting career as a Pharmacy Technician.'
        : 'Adquiere las habilidades para mantener y operar una farmacia en solo 8 semanas y comienza una emocionante carrera como Técnico de Farmacia.',
      price: language === 'en' ? 'Affordable Tuition - $2500' : 'Matrícula Asequible - $2500',
      duration: language === 'en' ? '8 Weeks' : '8 Semanas',
      certification: language === 'en' ? 'PTCB Certification Prep' : 'Preparación para Certificación PTCB',
      imageUrl: '/pharmacy-technician-program.jpg',
      slug: 'pharmacy-technician',
      comingSoon: true,
      ptcbApproved: true,
      keyFeatures: [
        language === 'en' ? '100% Online Program' : 'Programa 100% en Línea',
        language === 'en' ? 'Pharmacy Tech Certification Board (PTCB) approved' : 'Aprobado por la Junta de Certificación de Técnicos de Farmacia (PTCB)',
        language === 'en' ? '8 Weeks Long' : '8 Semanas de Duración',
        language === 'en' ? 'Prepare for PTCB Certification Exam' : 'Preparación para Examen de Certificación PTCB',
        language === 'en' ? 'Learning Coach & Student Support' : 'Coach de Aprendizaje y Apoyo Estudiantil',
        language === 'en' ? 'Job Search Support Included' : 'Soporte de Búsqueda de Empleo Incluido',
        language === 'en' ? 'Eligible for licensure upon program completion and passing the PTCB exam' : 'Elegible para licenciatura al completar el programa y aprobar el examen PTCB'
      ],
      salaryInfo: {
        median: '$52,900',
        growth: language === 'en' ? '+5%' : '+5%',
        period: language === 'en' ? 'projected by 2032 - According to Indeed' : 'proyectado para 2032 - Según Indeed',
        clarification: language === 'en' ? 'Median Annual Salary' : 'Salario Anual Mediano'
      }
    },
    {
      title: language === 'en' ? 'Certified Clinical Medical Assistant Program' : 'Programa de Asistente Médico Clínico Certificado',
      description: language === 'en' 
        ? 'Earn the nationally recognized CCMA credential to work as a Clinical Medical Assistant in just 8 weeks with our NHA-approved program.'
        : 'Obtén la credencial CCMA reconocida a nivel nacional para trabajar como Asistente Médico Clínico en solo 8 semanas con nuestro programa aprobado por NHA.',
      price: language === 'en' ? 'Affordable Tuition - $2500' : 'Matrícula Asequible - $2500',
      duration: language === 'en' ? '8 Weeks' : '8 Semanas',
      certification: language === 'en' ? 'NHA CCMA Certification Prep' : 'Preparación para Certificación NHA CCMA',
      imageUrl: '/medical-assistant-program.jpg',
      slug: 'medical-assistant',
      comingSoon: true,
      nhaApproved: true,
      keyFeatures: [
        language === 'en' ? '100% Online Program' : 'Programa 100% en Línea',
        language === 'en' ? 'National Healthcareer Association (NHA) approved' : 'Aprobado por la Asociación Nacional de Carreras de Salud (NHA)',
        language === 'en' ? '8 Weeks Long' : '8 Semanas de Duración',
        language === 'en' ? 'Prepare for CCMA Certification Exam' : 'Preparación para Examen de Certificación CCMA',
        language === 'en' ? 'Learning Coach & Student Support' : 'Coach de Aprendizaje y Apoyo Estudiantil',
        language === 'en' ? 'Job Search Support Included' : 'Soporte de Búsqueda de Empleo Incluido'
      ],
      salaryInfo: {
        median: '$46,880',
        growth: language === 'en' ? '+14%' : '+14%',
        period: language === 'en' ? 'projected by 2032 - According to BLS' : 'proyectado para 2032 - Según BLS',
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
            <Link to="/alumni">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-navy-700 hover:bg-navy-600 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg w-full sm:w-auto min-w-[280px]"
              >
                {language === 'en' ? 'Alumni Portal Login' : 'Inicio de Sesión Portal de Exalumnos'}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
