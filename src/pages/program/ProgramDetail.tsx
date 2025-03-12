
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Award, Users, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';
import { useLanguage } from '@/contexts/LanguageContext';

// Note: Using double quotes for strings with apostrophes to fix the syntax error
interface ProgramDetail {
  title: string;
  description: string;
  fullDescription: string[];
  price: string;
  duration: string;
  certification: string;
  imageUrl: string;
  curriculum: string[];
  salaryInfo: {
    median: string;
    growth: string;
    period: string;
    demand: string;
  };
}

const getProgramData = (language: 'en' | 'es'): Record<string, ProgramDetail> => {
  if (language === 'en') {
    return {
      hvac: {
        title: 'HVAC Technician',
        description: 'Learn essential skills to become job-ready in heating, ventilation, and air conditioning systems for entry-level positions.',
        fullDescription: [
          "Our HVAC program focuses on teaching the essential skills needed to succeed in entry-level positions in the heating, ventilation, and air conditioning industry.",
          "Through our self-paced online learning platform, you'll develop a foundational understanding of HVAC systems, troubleshooting techniques, and industry best practices.",
          "Upon program completion, you'll be prepared for entry-level HVAC positions with the core skills employers are looking for in new technicians."
        ],
        price: '$2,500',
        duration: 'Self-paced',
        certification: 'HVAC Technician Certification',
        imageUrl: '/hvac-program.jpg',
        curriculum: [
          'HVAC Fundamentals and Safety',
          'Heating Systems Installation and Service',
          'Air Conditioning and Refrigeration',
          'Ventilation Systems',
          'Electrical Components and Controls',
          'Troubleshooting and Maintenance',
          'Energy Efficiency and Green Technology',
          'Customer Service and Business Operations'
        ],
        salaryInfo: {
          median: '$60,590',
          growth: '5%',
          period: '2022-2032',
          demand: 'High demand across residential and commercial sectors in Sacramento and surrounding areas'
        }
      },
      electrician: {
        title: 'Electrician',
        description: 'Learn essential skills to become job-ready for electrical installation, maintenance, and repair for entry-level positions.',
        fullDescription: [
          "Our Electrician program provides comprehensive training in the fundamental skills needed to begin a career in the electrical field.",
          "Students will learn about electrical systems, wiring, safety procedures, and code requirements through our flexible online platform and externship opportunities.",
          "Graduates will be prepared with the essential skills needed to pursue entry-level positions in residential and commercial electrical work."
        ],
        price: '$2,500',
        duration: 'Self-paced',
        certification: 'Electrical Technology Certification',
        imageUrl: '/plumbing-program.jpg',
        curriculum: [
          'Electrical Safety and OSHA Regulations',
          'Basic Electrical Theory and Concepts',
          'Residential Wiring and Installation',
          'Commercial Electrical Systems',
          'Electrical Code Requirements',
          'Troubleshooting and Repair',
          'Electrical Controls and Motors',
          'Green Energy and Solar Installations'
        ],
        salaryInfo: {
          median: '$60,240',
          growth: '7%',
          period: '2022-2032',
          demand: 'Strong demand for qualified electricians in construction and maintenance in Sacramento and surrounding areas'
        }
      }
    };
  } else {
    return {
      hvac: {
        title: 'Técnico de HVAC',
        description: 'Aprende habilidades esenciales para estar listo para trabajar en sistemas de calefacción, ventilación y aire acondicionado en puestos de nivel inicial.',
        fullDescription: [
          "Nuestro programa de HVAC se enfoca en enseñar las habilidades esenciales necesarias para tener éxito en puestos de nivel inicial en la industria de calefacción, ventilación y aire acondicionado.",
          "A través de nuestra plataforma de aprendizaje en línea a tu propio ritmo, desarrollarás una comprensión fundamental de los sistemas HVAC, técnicas de solución de problemas y mejores prácticas de la industria.",
          "Al completar el programa, estarás preparado para puestos de HVAC de nivel inicial con las habilidades básicas que los empleadores buscan en nuevos técnicos."
        ],
        price: '$2,500',
        duration: 'A tu ritmo',
        certification: 'Certificación de Técnico HVAC',
        imageUrl: '/hvac-program.jpg',
        curriculum: [
          'Fundamentos y Seguridad de HVAC',
          'Instalación y Servicio de Sistemas de Calefacción',
          'Aire Acondicionado y Refrigeración',
          'Sistemas de Ventilación',
          'Componentes Eléctricos y Controles',
          'Solución de Problemas y Mantenimiento',
          'Eficiencia Energética y Tecnología Verde',
          'Servicio al Cliente y Operaciones Comerciales'
        ],
        salaryInfo: {
          median: '$60,590',
          growth: '5%',
          period: '2022-2032',
          demand: 'Alta demanda en sectores residenciales y comerciales en Sacramento y áreas circundantes'
        }
      },
      electrician: {
        title: 'Electricista',
        description: 'Aprende habilidades esenciales para estar listo para la instalación, mantenimiento y reparación eléctrica en puestos de nivel inicial.',
        fullDescription: [
          "Nuestro programa de Electricista proporciona capacitación integral en las habilidades fundamentales necesarias para comenzar una carrera en el campo eléctrico.",
          "Los estudiantes aprenderán sobre sistemas eléctricos, cableado, procedimientos de seguridad y requisitos de códigos a través de nuestra plataforma en línea flexible y oportunidades de prácticas.",
          "Los graduados estarán preparados con las habilidades esenciales necesarias para buscar puestos de nivel inicial en trabajo eléctrico residencial y comercial."
        ],
        price: '$2,500',
        duration: 'A tu ritmo',
        certification: 'Certificación en Tecnología Eléctrica',
        imageUrl: '/plumbing-program.jpg',
        curriculum: [
          'Seguridad Eléctrica y Regulaciones OSHA',
          'Teoría y Conceptos Eléctricos Básicos',
          'Cableado e Instalación Residencial',
          'Sistemas Eléctricos Comerciales',
          'Requisitos del Código Eléctrico',
          'Solución de Problemas y Reparación',
          'Controles Eléctricos y Motores',
          'Energía Verde e Instalaciones Solares'
        ],
        salaryInfo: {
          median: '$60,240',
          growth: '7%',
          period: '2022-2032',
          demand: 'Fuerte demanda de electricistas calificados en construcción y mantenimiento en Sacramento y áreas circundantes'
        }
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
  
  const highlightEntryLevel = (text: string) => {
    if (language === 'en' && text.includes('entry-level')) {
      const parts = text.split('entry-level');
      return (
        <>
          {parts[0]}
          <span className="font-semibold bg-yellow-100 px-1 rounded">entry-level</span>
          {parts[1]}
        </>
      );
    } else if (language === 'es' && text.includes('nivel inicial')) {
      const parts = text.split('nivel inicial');
      return (
        <>
          {parts[0]}
          <span className="font-semibold bg-yellow-100 px-1 rounded">nivel inicial</span>
          {parts[1]}
        </>
      );
    }
    return text;
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-navy-700 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src={program.imageUrl} 
            alt={program.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-700 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('backToPrograms')}
          </Link>
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-navy-900 uppercase bg-gold-400 rounded-full mb-4">
                {t('professionalCertification')}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {program.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {highlightEntryLevel(program.description)}
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
                  <Award className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.certification}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{t('handsOnExternship')}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-lg">
                    {t('applyNow')}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle={t('programOverview')}
                title={`${t('aboutOurProgram')} ${program.title}`}
                className="mb-6"
              />
              
              <div className="space-y-4">
                {program.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-navy-600">
                    {highlightEntryLevel(paragraph)}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-700 mb-4">{t('programHighlightsTitle')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">{highlightEntryLevel(language === 'en' ? 'Learn Essential Skills To Become Job-Ready for entry-level positions' : 'Aprende habilidades esenciales para estar listo para trabajar en puestos de nivel inicial')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">{language === 'en' ? 'Self Paced, Online Learning' : 'Aprendizaje en línea a tu propio ritmo'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">{language === 'en' ? 'Connect with Local Cohort' : 'Conéctate con grupos locales'}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">{language === 'en' ? 'Hands-On Externship with Local Professional*' : 'Prácticas presenciales con profesionales locales*'}</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <img 
                  src={program.imageUrl} 
                  alt={program.title}
                  className="w-full h-auto rounded-xl mb-8 shadow-lg"
                />
                
                {/* Job Market Information */}
                <div className="bg-navy-50 p-6 rounded-xl border border-navy-100">
                  <h3 className="text-xl font-bold text-navy-700 mb-4">{t('jobMarketOutlook')}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <DollarSign className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-navy-700">{t('medianAnnualSalary')}</p>
                        <p className="text-navy-600 text-xl font-bold">{program.salaryInfo.median}</p>
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
          </div>
        </div>
      </section>
      
      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle={t('whatYouWillLearn')}
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
            <h2 className="text-3xl font-bold mb-6">
              {t('readyToStartCareer')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('applyNowFor')} {program.title} {t('gainEssentialSkills')}
            </p>
            
            <div className="flex justify-center">
              <Link to="/apply">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-lg">
                  {t('applyNow')}
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
