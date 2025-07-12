
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Award, Users, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProgramDetail {
  title: string;
  description: string;
  fullDescription: string[];
  price: string;
  duration: string;
  certification: string;
  curriculum: string[];
  salaryInfo: {
    median: string;
    growth: string;
    period: string;
    demand: string;
  };
  keyFeatures: string[];
  approvalBadge: string;
}

const getProgramData = (language: 'en' | 'es'): Record<string, ProgramDetail> => {
  if (language === 'en') {
    return {
      'commercial-truck-driving': {
        title: 'Commercial Truck Driving Program (CDL Class A and/or B with optional Hazmat Endorsement)',
        description: 'Learn essential skills to become job-ready in commercial truck driving with CDL Class A or B license, plus optional Hazmat Endorsement - FMCSA-Approved Program.',
        fullDescription: [
          "Our FMCSA-Approved Commercial Truck Driving program focuses on teaching the essential skills needed to succeed in entry level positions in the trucking and transportation industry.",
          "Through our comprehensive FMCSA-recognized training, you'll develop expertise in safe driving practices, vehicle inspection, cargo handling, and transportation regulations.",
          "Upon program completion, you'll be prepared for entry level commercial driving positions with CDL Class A or B license and optional Hazmat Endorsement."
        ],
        price: '$2,499',
        duration: 'Self-paced',
        certification: 'CDL Class A/B License',
        curriculum: [
          'Commercial Driving Fundamentals and Safety (FMCSA-Approved)',
          'Vehicle Inspection and Maintenance',
          'Cargo Handling and Securing',
          'Transportation Regulations and Compliance',
          'Defensive Driving Techniques',
          'Electronic Logging Devices (ELD)',
          'Hazmat Endorsement Training (Optional)',
          'Customer Service and Professional Conduct'
        ],
        salaryInfo: {
          median: '$70,000',
          growth: '6%',
          period: '2022-2032',
          demand: 'High demand for qualified commercial drivers across freight and logistics in Sacramento and surrounding areas'
        },
        keyFeatures: [
          'FMCSA-Approved Program - Learn Essential Skills To Become Job-Ready in Commercial Truck Driving for entry level positions',
          'CDL Class A or B License Training',
          'Optional Hazmat Endorsement',
          'Self Paced, Online Learning Format for Busy Professionals',
          'Connect with Local Cohort Through Fun Experiences',
          'Hands-On Behind-The-Wheel-Training With Trained Professional'
        ],
        approvalBadge: 'FMCSA-Approved Program'
      },
      'hvac-technician': {
        title: 'HVAC Technician Program (EPA 608 Certification Included)',
        description: 'Master heating, ventilation, and air conditioning systems with comprehensive training including EPA 608 certification - Industry-Approved Program.',
        fullDescription: [
          "Our Industry-Approved HVAC Technician program focuses on teaching the essential skills needed to succeed in entry level positions in the heating, ventilation, and air conditioning industry.",
          "Through our comprehensive training, you'll develop expertise in residential and commercial HVAC systems, refrigeration principles, electrical components, and EPA regulations.",
          "Upon program completion, you'll be prepared for entry level HVAC technician positions with EPA 608 certification and hands-on experience with industry equipment."
        ],
        price: '$2,499',
        duration: 'Self-paced',
        certification: 'EPA 608 Certification',
        curriculum: [
          'HVAC Fundamentals and Safety Protocols',
          'Refrigeration Principles and Cycle Theory',
          'Electrical Components and Wiring',
          'EPA 608 Certification Preparation',
          'Residential HVAC Systems Installation',
          'Commercial HVAC Systems Maintenance',
          'Troubleshooting and Repair Techniques',
          'Customer Service and Professional Conduct'
        ],
        salaryInfo: {
          median: '$75,000',
          growth: '5%',
          period: '2022-2032',
          demand: 'High demand for skilled HVAC technicians in residential and commercial sectors in Sacramento and surrounding areas'
        },
        keyFeatures: [
          'Industry-Approved Program - Learn Essential Skills To Become Job-Ready in HVAC for entry level positions',
          'EPA 608 Certification Training Included',
          'Residential and Commercial HVAC Systems',
          'Self Paced, Online Learning Format for Busy Professionals',
          'Connect with Local Cohort Through Fun Experiences',
          'Hands-On Training With Industry Equipment'
        ],
        approvalBadge: 'Industry-Approved Program'
      }
    };
  } else {
    return {
      'commercial-truck-driving': {
        title: 'Programa de Manejo de Camiones Comerciales (CDL Clase A y/o B con Endoso Hazmat Opcional)',
        description: 'Aprende habilidades esenciales para estar listo para trabajar en el manejo de camiones comerciales con licencia CDL Clase A o B, más Endoso Hazmat opcional - Programa Aprobado por FMCSA.',
        fullDescription: [
          "Nuestro programa de Manejo de Camiones Comerciales aprobado por FMCSA se enfoca en enseñar las habilidades esenciales necesarias para tener éxito en puestos de nivel inicial en la industria del transporte.",
          "A través de nuestra capacitación integral reconocida por FMCSA, desarrollarás experiencia en prácticas de manejo seguro, inspección de vehículos, manejo de carga y regulaciones de transporte.",
          "Al completar el programa, estarás preparado para puestos de manejo comercial de nivel inicial con licencia CDL Clase A o B y Endoso Hazmat opcional."
        ],
        price: '$2,499',
        duration: 'A tu ritmo',
        certification: 'Licencia CDL Clase A/B',
        curriculum: [
          'Fundamentos y Seguridad del Manejo Comercial (Aprobado por FMCSA)',
          'Inspección y Mantenimiento de Vehículos',
          'Manejo y Aseguramiento de Carga',
          'Regulaciones de Transporte y Cumplimiento',
          'Técnicas de Manejo Defensivo',
          'Dispositivos de Registro Electrónico (ELD)',
          'Capacitación de Endoso Hazmat (Opcional)',
          'Servicio al Cliente y Conducta Profesional'
        ],
        salaryInfo: {
          median: '$70,000',
          growth: '6%',
          period: '2022-2032',
          demand: 'Alta demanda de conductores comerciales calificados en transporte de carga y logística en Sacramento y áreas circundantes'
        },
        keyFeatures: [
          'Programa Aprobado por FMCSA - Aprende habilidades esenciales para estar listo para trabajar en Manejo de Camiones Comerciales en puestos de nivel inicial',
          'Capacitación para Licencia CDL Clase A o B',
          'Endoso Hazmat Opcional',
          'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
          'Conéctate con grupos locales a través de experiencias divertidas',
          'Entrenamiento práctico al volante con profesionales capacitados'
        ],
        approvalBadge: 'Programa Aprobado por FMCSA'
      },
      'hvac-technician': {
        title: 'Programa de Técnico HVAC (Certificación EPA 608 Incluida)',
        description: 'Domina los sistemas de calefacción, ventilación y aire acondicionado con capacitación integral incluyendo certificación EPA 608 - Programa Aprobado por la Industria.',
        fullDescription: [
          "Nuestro programa de Técnico HVAC aprobado por la industria se enfoca en enseñar las habilidades esenciales necesarias para tener éxito en puestos de nivel inicial en la industria de calefacción, ventilación y aire acondicionado.",
          "A través de nuestra capacitación integral, desarrollarás experiencia en sistemas HVAC residenciales y comerciales, principios de refrigeración, componentes eléctricos y regulaciones EPA.",
          "Al completar el programa, estarás preparado para puestos de técnico HVAC de nivel inicial con certificación EPA 608 y experiencia práctica con equipos de la industria."
        ],
        price: '$2,499',
        duration: 'A tu ritmo',
        certification: 'Certificación EPA 608',
        curriculum: [
          'Fundamentos HVAC y Protocolos de Seguridad',
          'Principios de Refrigeración y Teoría del Ciclo',
          'Componentes Eléctricos y Cableado',
          'Preparación para Certificación EPA 608',
          'Instalación de Sistemas HVAC Residenciales',
          'Mantenimiento de Sistemas HVAC Comerciales',
          'Técnicas de Diagnóstico y Reparación',
          'Servicio al Cliente y Conducta Profesional'
        ],
        salaryInfo: {
          median: '$75,000',
          growth: '5%',
          period: '2022-2032',
          demand: 'Alta demanda de técnicos HVAC capacitados en sectores residenciales y comerciales en Sacramento y áreas circundantes'
        },
        keyFeatures: [
          'Programa Aprobado por la Industria - Aprende habilidades esenciales para estar listo para trabajar en HVAC en puestos de nivel inicial',
          'Capacitación de Certificación EPA 608 Incluida',
          'Sistemas HVAC Residenciales y Comerciales',
          'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
          'Conéctate con grupos locales a través de experiencias divertidas',
          'Entrenamiento práctico con equipos de la industria'
        ],
        approvalBadge: 'Programa Aprobado por la Industria'
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
            <div className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-white">
              <p className="text-lg font-bold mb-1">
                {language === 'en' ? 'SACRAMENTO ADMISSIONS CONTACT' : 'CONTACTO DE ADMISIONES DE SACRAMENTO'}
              </p>
              <p className="text-2xl font-bold">
                (916) 365-6907
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl">
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
                  <span>Flat Rate Tuition: {program.price}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{language === 'en' ? 'Hands-On Training With Industry Equipment' : 'Entrenamiento práctico con equipos de la industria'}</span>
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
          </div>
        </div>
      </section>
      
      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              subtitle={t('programOverview')}
              title={`${t('aboutOurProgram')} ${program.title}`}
              className="mb-6"
            />
            
            <div className="space-y-4">
              {program.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-navy-600">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-navy-700 mb-4">{t('programHighlightsTitle')}</h3>
              <ul className="space-y-3">
                {program.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Job Market Information */}
            <div className="mt-8 bg-navy-50 p-6 rounded-xl border border-navy-100">
              <h3 className="text-xl font-bold text-navy-700 mb-4">{t('jobMarketOutlook')}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-700">{t('medianAnnualSalary')}</p>
                    <p className="text-navy-600 text-xl font-bold">{program.salaryInfo.median} <span className="text-sm font-normal">({slug === 'commercial-truck-driving' ? (language === 'en' ? 'Median Annual Salary for Commercial Truck Drivers' : 'Salario Anual Medio para Conductores de Camiones Comerciales') : (language === 'en' ? 'Median Annual Salary for HVAC Technicians' : 'Salario Anual Medio para Técnicos HVAC')})</span></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-700">{t('industryGrowth')}</p>
                    <p className="text-navy-600">{program.salaryInfo.growth} ({program.salaryInfo.period})</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-700">{t('jobDemand')}</p>
                    <p className="text-navy-600">{program.salaryInfo.demand}</p>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="space-y-4">
              {program.curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold-100 text-gold-600 rounded-full mr-4 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-700">{item}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Prominent Admissions Contact */}
            <div className="mb-8">
              <div className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-white">
                <p className="text-lg font-bold mb-1">
                  {language === 'en' ? 'SACRAMENTO ADMISSIONS CONTACT' : 'CONTACTO DE ADMISIONES DE SACRAMENTO'}
                </p>
                <p className="text-2xl font-bold">
                  (916) 365-6907
                </p>
              </div>
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
            
            {/* Added disclaimer */}
            <p className="text-xs text-gray-400 mt-8">
              *{program.approvalBadge} - {language === 'en' ? 'Training assistance available upon program completion and subject to industry demand' : 'Asistencia de capacitación disponible al completar el programa y sujeta a la demanda de la industria'}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
