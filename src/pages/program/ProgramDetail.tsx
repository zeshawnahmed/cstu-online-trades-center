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
        description: 'Master heating, ventilation, and air conditioning systems with comprehensive training including EPA 608 certification training.',
        fullDescription: [
          "Our HVAC Technician program focuses on teaching the essential skills needed to succeed in entry level positions in the heating, ventilation, and air conditioning industry.",
          "Through our comprehensive training, you'll develop expertise in residential and commercial HVAC systems, refrigeration principles, electrical components, and EPA regulations.",
          "Upon program completion, you'll be prepared for entry level HVAC technician positions with EPA 608 certification training and practical Field Experiences to make you job ready."
        ],
        price: '$2,499',
        duration: 'Self-paced',
        certification: 'EPA 608 Certification',
        curriculum: [
          '🧰 Precision Use of Specialized HVAC Diagnostic and Service Tools',
          'High-accuracy refrigerant gauges',
          'Multi-port manifold sets',
          'Industrial-grade vacuum pumps',
          'Digital multimeters for electrical diagnostics',
          'Electronic and ultrasonic leak detection instruments',
          '❄️ Thermodynamic Principles and Refrigeration Cycle Mastery',
          '🔌 Complex Electrical Systems Troubleshooting and Control Wiring',
          '📐 Technical Blueprint Analysis and HVAC System Design Engineering',
          '📋 Client-Facing Technical Communication and Service Documentation',
          '📜 Regulatory Compliance and Environmental Safety Standards (OSHA & EPA 608)',
          '🛠 Workforce Integration and Professional Readiness for the HVAC Industry'
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
          'Practical Field Experiences With Qualified Industry Professionals',
          'EPA 608 Certification Training Included',
          'Residential and Commercial HVAC Systems',
          'Self Paced, Online Learning Format for Busy Professionals',
          'Connect with Local Cohort Through Fun Experiences',
          'Job Site/Field Training With Industry Equipment'
        ],
        approvalBadge: 'HVAC Program'
      }
    };
  } else {
    return {
      'hvac-technician': {
        title: 'Programa de Técnico HVAC (Capacitación de Certificación EPA 608 Incluida)',
        description: 'Domina los sistemas de calefacción, ventilación y aire acondicionado con capacitación integral incluyendo capacitación de certificación EPA 608.',
        fullDescription: [
          "Nuestro programa de Técnico HVAC se enfoca en enseñar las habilidades esenciales necesarias para tener éxito en puestos de nivel inicial en la industria de calefacción, ventilación y aire acondicionado.",
          "A través de nuestra capacitación integral, desarrollarás experiencia en sistemas HVAC residenciales y comerciales, principios de refrigeración, componentes eléctricos y regulaciones EPA.",
          "Al completar el programa, estarás preparado para puestos de técnico HVAC de nivel inicial con capacitación de certificación EPA 608 y experiencias prácticas de campo/lugar de trabajo con equipos de la industria."
        ],
        price: '$2,499',
        duration: 'A tu ritmo',
        certification: 'Certificación EPA 608',
        curriculum: [
          '🧰 Uso Preciso de Herramientas Especializadas de Diagnóstico y Servicio HVAC',
          'Medidores de refrigerante de alta precisión',
          'Conjuntos de colectores multipuerto',
          'Bombas de vacío de grado industrial',
          'Multímetros digitales para diagnósticos eléctricos',
          'Instrumentos de detección de fugas electrónicos y ultrasónicos',
          '❄️ Principios Termodinámicos y Dominio del Ciclo de Refrigeración',
          '🔌 Solución de Problemas de Sistemas Eléctricos Complejos y Cableado de Control',
          '📐 Análisis de Planos Técnicos e Ingeniería de Diseño de Sistemas HVAC',
          '📋 Comunicación Técnica con Clientes y Documentación de Servicios',
          '📜 Cumplimiento Regulatorio y Estándares de Seguridad Ambiental (OSHA y EPA 608)',
          '🛠 Integración Laboral y Preparación Profesional para la Industria HVAC'
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
          'Experiencias prácticas de campo/lugar de trabajo te hacen estar listo para trabajar en HVAC en puestos de nivel inicial',
          'Capacitación de Certificación EPA 608 Incluida',
          'Sistemas HVAC Residenciales y Comerciales',
          'Formato de aprendizaje en línea a tu propio ritmo para profesionales ocupados',
          'Conéctate con grupos locales a través de experiencias divertidas',
          'Entrenamiento práctico con equipos de la industria'
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
            <div className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-white">
              <p className="text-lg font-bold mb-1">
                {language === 'en' ? 'Call or Text Admissions to Get Started' : 'Llama o Envía Texto a Admisiones para Comenzar'}
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
                  <span>{language === 'en' ? 'Job Site/Field Training With Qualified Industry Professional' : 'Entrenamiento Práctico con Profesional Calificado de la Industria'}</span>
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
              <h3 className="text-xl font-bold text-navy-700 mb-4">
                {language === 'en' ? '2025 Job Market Statistics' : 'Estadísticas del Mercado Laboral 2025'}
              </h3>
              
              <div className="mb-4">
                <p className="font-semibold text-navy-700 text-lg">{program.salaryInfo.demand}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-700">
                      {language === 'en' ? 'Average Salary' : 'Salario Promedio'}
                    </p>
                    <p className="text-navy-600 text-xl font-bold">{program.salaryInfo.median}/year</p>
                  </div>
                </div>
                
                {program.salaryInfo.hourlyRate && (
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-700">
                        {language === 'en' ? 'Hourly Rate' : 'Tarifa por Hora'}
                      </p>
                      <p className="text-navy-600 text-xl font-bold">{program.salaryInfo.hourlyRate}</p>
                    </div>
                  </div>
                )}
                
                {/* Only show Job Growth for HVAC program */}
                {slug === 'hvac-technician' && (
                  <div className="flex items-start">
                    <TrendingUp className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-navy-700">
                        {language === 'en' ? 'Job Growth' : 'Crecimiento Laboral'}
                      </p>
                      <p className="text-navy-600">{program.salaryInfo.growth} {program.salaryInfo.period}</p>
                    </div>
                  </div>
                )}
                
                {program.salaryInfo.source && (
                  <div className="mt-4 pt-4 border-t border-navy-200">
                    <p className="text-sm text-navy-500 italic">{program.salaryInfo.source}</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Job Readiness & Support Section */}
            <div className="mt-8 bg-gold-50 p-6 rounded-xl border border-gold-200">
              <h3 className="text-xl font-bold text-navy-700 mb-4">
                {language === 'en' ? 'Your Path to Career Success' : 'Tu Camino al Éxito Profesional'}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {language === 'en' 
                  ? "Employers seek candidates who bring both experience and initiative to the table. Our program is designed to provide you with practical Field/Job Site Experiences, skill-building opportunities, and the resources needed to help you stand out in the competitive job market. Our goal is to help you gain the experience and CONFIDENCE to take your next career step."
                  : "Los empleadores a menudo buscan candidatos que aporten tanto experiencia como iniciativa. Aunque no podemos garantizar la colocación laboral, nuestro programa está diseñado para brindarte experiencias prácticas de campo/lugar de trabajo, oportunidades de desarrollo de habilidades y los recursos necesarios para ayudarte a destacar en el competitivo mercado laboral. Con nuestro apoyo, obtendrás la experiencia y confianza para dar tu siguiente paso profesional."
                }
              </p>
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
              <div className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-white">
                <p className="text-lg font-bold mb-1">
                  {language === 'en' ? 'Call or Text Admissions to Get Started' : 'Llama o Envía Texto a Admisiones para Comenzar'}
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
            
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
