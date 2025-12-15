import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Award, Users, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import { useLanguage } from '@/contexts/LanguageContext';
import cohortHvacImage from '@/assets/cohort_hvac.jpeg';
interface CurriculumItem {
  week: string;
  title: string;
  topics: string[];
}

interface ProgramDetail {
  title: string;
  description: string;
  fullDescription: string[];
  price: string;
  duration: string;
  certification: string;
  curriculum: CurriculumItem[];
  salaryInfo: {
    median: string;
    growth: string;
    period: string;
    demand: string;
    hourlyRate?: string;
    source?: string;
  };
  keyFeatures: string[];
  approvalBadge: string;
}

const getProgramData = (language: 'en' | 'es'): Record<string, ProgramDetail> => {
  if (language === 'en') {
    return {
      'hvac-technician': {
        title: 'HVAC Technician Program (EPA 608 Certification Training Included)',
        description: 'Master heating, ventilation, and air conditioning systems with comprehensive training including EPA 608 certification training and hands-on training to get job ready.',
        fullDescription: [
          "Our HVAC Technician program focuses on the essential skills needed to succeed in entry level positions in the heating, ventilation, and air conditioning industry.",
          "Through comprehensive training, you'll develop expertise in residential and commercial HVAC systems, refrigeration principles, electrical components, and EPA regulations.",
          "Upon completion, you'll be prepared for entry level positions with EPA 608 certification training and complementary hands-on training to make you job ready."
        ],
        price: 'Affordable Flat Rate Tuition - $2500',
        duration: 'Online Self Paced, 12 Weeks',
        certification: 'EPA 608 Certification',
        curriculum: [
          {
            week: 'Week 1',
            title: 'Basic Electricity, Motors, and HVAC Controls',
            topics: [
              'Introduction to electrical theory',
              'Understanding circuits, components, and safety',
              'HVAC motor types and applications',
              'Control systems and basic troubleshooting'
            ]
          },
          {
            week: 'Week 2',
            title: 'Basic Refrigeration Theory and Application',
            topics: [
              'Refrigeration principles',
              'Heat transfer and temperature–pressure relationships',
              'Refrigeration components and system operation'
            ]
          },
          {
            week: 'Week 3',
            title: 'Air Conditioning, Troubleshooting, and Heat Pump Systems',
            topics: [
              'Air conditioning fundamentals',
              'Common AC faults and diagnostic techniques',
              'Heat pump operation and service procedures'
            ]
          },
          {
            week: 'Week 4',
            title: 'Basic Refrigeration Cycle',
            topics: [
              'Detailed study of the refrigeration cycle',
              'System pressures, superheat, and subcooling',
              'Mechanical and electrical diagnostics'
            ]
          },
          {
            week: 'Week 5',
            title: 'Refrigerants & Charging',
            topics: [
              'Types of refrigerants and regulations',
              'Recovery, recycling, and environmental safety',
              'Proper charging methods and best practices'
            ]
          },
          {
            week: 'Week 6',
            title: 'Airflow & Ductwork',
            topics: [
              'Airflow measurement and balancing',
              'Duct design fundamentals',
              'Identifying airflow issues and solutions'
            ]
          },
          {
            week: 'Week 7',
            title: 'Heating Systems',
            topics: [
              'Gas, electric, and oil heating systems',
              'Combustion process and safety',
              'Heating system diagnostics and repair'
            ]
          },
          {
            week: 'Week 8',
            title: 'Electrical for HVAC',
            topics: [
              'Advanced electrical concepts',
              'Wiring diagrams and component testing',
              'Electrical troubleshooting techniques'
            ]
          },
          {
            week: 'Week 9',
            title: 'Advanced Refrigeration & Charging Procedures',
            topics: [
              'Complex refrigeration systems',
              'Advanced charging, evacuation, and leak detection',
              'Real-world diagnostic scenarios'
            ]
          },
          {
            week: 'Week 10',
            title: 'Indoor Air Quality (IAQ)',
            topics: [
              'IAQ fundamentals and measurement',
              'Filtration, humidity control, and ventilation',
              'IAQ improvement solutions'
            ]
          },
          {
            week: 'Week 11',
            title: 'System Diagnostics & Troubleshooting',
            topics: [
              'Comprehensive diagnostic strategies',
              'Step-by-step troubleshooting workflows',
              'Field simulations and hands-on practice'
            ]
          },
          {
            week: 'Week 12',
            title: 'EPA 608 Exam Prep',
            topics: [
              'Review of EPA regulations',
              'Core, Type I, II, and III exam preparation',
              'Practice tests and certification readiness'
            ]
          }
        ],
        salaryInfo: {
          median: '$63,420',
          growth: '+13%',
          period: 'projected by 2030',
          demand: 'Quick Salary Snapshot - HVAC Technicians in California (2025)',
          hourlyRate: '$30.49',
          source: 'According to TradeCareerPath'
        },
        keyFeatures: [
          '*Complementary Hands-On Skills Training with HVAC Industry Professional',
          'EPA 608 Certification Training Included',
          'Residential and Commercial HVAC Systems',
          'Self Paced, Online Learning Format for Busy Professionals',
          'Connect with Local Cohort Through Fun Experiences',
          '*Although the program is designed to be fully online, complementary hands-on workshops for Winter Cohort 2025 will be held bi-monthly near Downtown Sacramento, made possible through the generosity and collaboration with the Sacramento HVAC Industry, providing an opportunity for students to gain hands-on practice with HVAC skills necessary for a successful career in the field.'
        ],
        approvalBadge: 'HVAC Program'
      }
    };
  } else {
    return {
      'hvac-technician': {
        title: 'Programa de Técnico HVAC (Capacitación de Certificación EPA 608 Incluida)',
        description: 'Domina los sistemas de calefacción, ventilación y aire acondicionado con capacitación integral incluyendo capacitación de certificación EPA 608 y capacitación práctica para estar listo para el trabajo.',
        fullDescription: [
          "Nuestro programa de Técnico HVAC se enfoca en las habilidades esenciales necesarias para tener éxito en puestos de nivel inicial en la industria de calefacción, ventilación y aire acondicionado.",
          "A través de capacitación integral, desarrollarás experiencia en sistemas HVAC residenciales y comerciales, principios de refrigeración, componentes eléctricos y regulaciones EPA.",
          "Al completar, estarás preparado para puestos de nivel inicial con capacitación de certificación EPA 608 y capacitación práctica complementaria para hacerte listo para el trabajo."
        ],
        price: 'Matrícula de Tarifa Plana Asequible - $2500',
        duration: 'En línea a tu ritmo, 12 semanas',
        certification: 'Certificación EPA 608',
        curriculum: [
          {
            week: 'Semana 1',
            title: 'Electricidad Básica, Motores y Controles HVAC',
            topics: [
              'Introducción a la teoría eléctrica',
              'Comprensión de circuitos, componentes y seguridad',
              'Tipos de motores HVAC y aplicaciones',
              'Sistemas de control y solución de problemas básicos'
            ]
          },
          {
            week: 'Semana 2',
            title: 'Teoría y Aplicación Básica de Refrigeración',
            topics: [
              'Principios de refrigeración',
              'Transferencia de calor y relaciones temperatura-presión',
              'Componentes de refrigeración y operación del sistema'
            ]
          },
          {
            week: 'Semana 3',
            title: 'Aire Acondicionado, Solución de Problemas y Sistemas de Bomba de Calor',
            topics: [
              'Fundamentos del aire acondicionado',
              'Fallas comunes de AC y técnicas de diagnóstico',
              'Operación y procedimientos de servicio de bombas de calor'
            ]
          },
          {
            week: 'Semana 4',
            title: 'Ciclo Básico de Refrigeración',
            topics: [
              'Estudio detallado del ciclo de refrigeración',
              'Presiones del sistema, sobrecalentamiento y subenfriamiento',
              'Diagnósticos mecánicos y eléctricos'
            ]
          },
          {
            week: 'Semana 5',
            title: 'Refrigerantes y Carga',
            topics: [
              'Tipos de refrigerantes y regulaciones',
              'Recuperación, reciclaje y seguridad ambiental',
              'Métodos de carga adecuados y mejores prácticas'
            ]
          },
          {
            week: 'Semana 6',
            title: 'Flujo de Aire y Conductos',
            topics: [
              'Medición y equilibrio del flujo de aire',
              'Fundamentos del diseño de conductos',
              'Identificación de problemas de flujo de aire y soluciones'
            ]
          },
          {
            week: 'Semana 7',
            title: 'Sistemas de Calefacción',
            topics: [
              'Sistemas de calefacción de gas, eléctricos y de aceite',
              'Proceso de combustión y seguridad',
              'Diagnóstico y reparación de sistemas de calefacción'
            ]
          },
          {
            week: 'Semana 8',
            title: 'Electricidad para HVAC',
            topics: [
              'Conceptos eléctricos avanzados',
              'Diagramas de cableado y prueba de componentes',
              'Técnicas de solución de problemas eléctricos'
            ]
          },
          {
            week: 'Semana 9',
            title: 'Procedimientos Avanzados de Refrigeración y Carga',
            topics: [
              'Sistemas de refrigeración complejos',
              'Carga avanzada, evacuación y detección de fugas',
              'Escenarios de diagnóstico del mundo real'
            ]
          },
          {
            week: 'Semana 10',
            title: 'Calidad del Aire Interior (IAQ)',
            topics: [
              'Fundamentos y medición de IAQ',
              'Filtración, control de humedad y ventilación',
              'Soluciones de mejora de IAQ'
            ]
          },
          {
            week: 'Semana 11',
            title: 'Diagnóstico y Solución de Problemas del Sistema',
            topics: [
              'Estrategias de diagnóstico integrales',
              'Flujos de trabajo de solución de problemas paso a paso',
              'Simulaciones de campo y práctica práctica'
            ]
          },
          {
            week: 'Semana 12',
            title: 'Preparación para el Examen EPA 608',
            topics: [
              'Revisión de las regulaciones de la EPA',
              'Preparación para exámenes Core, Tipo I, II y III',
              'Pruebas de práctica y preparación para la certificación'
            ]
          }
        ],
        salaryInfo: {
          median: '$63,420',
          growth: '+13%',
          period: 'proyectado para 2030',
          demand: 'Instantánea Rápida de Salario - Técnicos HVAC en California (2025)',
          hourlyRate: '$30.49',
          source: 'Según TradeCareerPath'
        },
        keyFeatures: [
          '*Capacitación Complementaria de Habilidades Prácticas con Profesional HVAC Calificado',
          'Capacitación de Certificación EPA 608 Incluida',
          'Sistemas HVAC Residenciales y Comerciales',
          'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
          'Conéctate con grupos locales a través de experiencias divertidas',
          '*Aunque el programa es completamente en línea, los talleres prácticos complementarios para la Cohorte de Invierno 2025 se llevarán a cabo bimensualmente cerca del centro de Sacramento, posible gracias a la generosidad y colaboración con profesionales de la industria HVAC de la comunidad, brindando una oportunidad para que los estudiantes obtengan práctica con las habilidades HVAC necesarias para una carrera exitosa en el campo.'
        ],
        approvalBadge: 'Programa HVAC'
      }
    };
  }
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const programs = getProgramData(language);
  const program = slug ? programs[slug] : null;
  
  if (!program) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-navy-700 mb-4">{t('programNotFound')}</h1>
            <p className="text-navy-600 mb-8">
              {t('programNotFoundDesc')}
            </p>
            <Link to="/">
              <Button className="bg-navy-600 hover:bg-navy-700 text-white">
                {t('returnToHome')}
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('backToPrograms')}
          </Link>
          
          {/* Prominent Admissions Contact */}
          <div className="text-center mb-8">
            <Link to="/contact" className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-white hover:bg-gold-500 transition-colors">
              <p className="text-lg font-bold mb-1">
                {language === 'en' ? 'To Get Started' : 'Para Comenzar'}
              </p>
              <p className="text-base font-bold underline">
                {language === 'en' ? 'Click Here to Fill Out Contact Form and Admissions Rep Will Be in Touch' : 'Haz Clic Aquí para Llenar el Formulario de Contacto y un Representante de Admisiones se Pondrá en Contacto'}
              </p>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gold-400 text-navy-900 font-bold px-3 py-1 rounded-lg text-sm inline-block mb-4">
                {program.approvalBadge}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {program.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {program.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.price}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{language === 'en' ? 'Complementary Hands-On Skills Training with Qualified HVAC Professional' : 'Capacitación Complementaria de Habilidades Prácticas con Profesional HVAC Calificado'}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="bg-white/90 hover:bg-white text-navy-900 font-medium px-8 py-6 text-lg">
                    {language === 'en' ? 'Financial Aid Assistance Available' : 'Asistencia de Ayuda Financiera Disponible'}
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 lg:mt-0"
            >
              <img 
                src={cohortHvacImage} 
                alt="HVAC Technician Cohort Students" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={`${program.approvalBadge} Curriculum`}
            title={t('programCurriculum')}
            description={t('curriculumDescription')}
            centered={true}
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {program.curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                >
                  <div className="bg-navy-700 text-white px-6 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-lg">{item.week}</h3>
                    <div className="w-8 h-8 flex items-center justify-center bg-gold-400 text-navy-800 rounded-full font-semibold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-navy-700 text-xl mb-4">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-navy-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Curriculum disclaimer */}
            <p className="text-xs text-gray-500 mt-6 text-center italic">
              *Curriculum subject to change
            </p>
          </div>
        </div>
      </section>
      
      
      {/* CTA */}
      <section className="py-16 bg-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Prominent Admissions Contact */}
            <div className="mb-8">
              <Link to="/contact" className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-white hover:bg-gold-500 transition-colors">
                <p className="text-lg font-bold mb-1">
                  {language === 'en' ? 'To Get Started' : 'Para Comenzar'}
                </p>
                <p className="text-base font-bold underline">
                  {language === 'en' ? 'Click Here to Fill Out Contact Form and Admissions Rep Will Be in Touch' : 'Haz Clic Aquí para Llenar el Formulario de Contacto y un Representante de Admisiones se Pondrá en Contacto'}
                </p>
              </Link>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              {t('readyToStartCareer')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('applyNowFor')} {program.title} {t('gainEssentialSkills')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white/90 hover:bg-white text-navy-900 font-medium px-8 py-6 text-lg w-full sm:w-auto">
                  {language === 'en' ? 'Financial Aid Assistance Available' : 'Asistencia de Ayuda Financiera Disponible'}
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
