
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign, Clock, BarChart3, MapPin, Target } from 'lucide-react';

const AboutUs = () => {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      <Helmet>
        <title>
          {language === 'en' 
            ? 'About Us | Sacramento Trade School | American Institute of Trades (AIT)' 
            : 'Sobre Nosotros | Escuela de Oficios Sacramento | Instituto Americano de Oficios'}
        </title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "Learn about American Institute of Trades - Sacramento's premier affordable trade school for HVAC training. Our cost-effective programs prepare you for lucrative careers without the debt of traditional colleges."
            : "Conozca sobre el Instituto Americano de Oficios - La principal escuela de oficios asequible de Sacramento para capacitación de HVAC."}
        />
      </Helmet>
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Prominent Admissions Contact */}
          <div className="text-center mb-8">
            <div className="bg-gold-400 text-navy-800 font-bold px-6 py-4 rounded-lg inline-block border-2 border-navy-600">
              <p className="text-lg font-bold mb-1">
                {language === 'en' ? 'SACRAMENTO ADMISSIONS CONTACT' : 'CONTACTO DE ADMISIONES DE SACRAMENTO'}
              </p>
              <p className="text-2xl font-bold">
                (916) 365-6907
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-700 mb-4">
              {language === 'en' ? 'About American Institute of Trades' : 'Sobre el Instituto Americano de Oficios'}
            </h1>
            <p className="text-xl text-navy-600 mb-10">
              {language === 'en' 
                ? 'Quality trade education that prepares you for in-demand careers.'
                : 'Educación de calidad en oficios que te prepara para carreras en demanda.'
              }
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xl font-bold text-gold-600 mb-4">
                {language === 'en' 
                  ? 'Proudly Serving the Greater Sacramento Community'
                  : 'Sirviendo con Orgullo a la Gran Comunidad de Sacramento'
                }
              </p>
            </div>
            
            <h2 className="text-3xl font-bold text-navy-700 mb-6">
              {language === 'en' ? 'Our Story' : 'Nuestra Historia'}
            </h2>
            
            <p className="text-lg text-navy-600 mb-6 leading-relaxed">
              {language === 'en'
                ? "We're a grassroots trade school founded right here in Sacramento by UC Berkeley and UC Davis alumni who believe education should be both excellent and enjoyable. Our mission is simple: deliver specialized training - rooted in excellence - that gets you job-ready while making learning fun again."
                : "Somos una escuela de oficios de base fundada aquí en Sacramento por exalumnos de UC Berkeley y UC Davis que creen que la educación debe ser excelente y agradable. Nuestra misión es simple: brindar capacitación especializada - arraigada en la excelencia - que te prepare para el trabajo mientras hacemos que el aprendizaje sea divertido nuevamente."
              }
            </p>
            
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              {language === 'en'
                ? "Excellence in training is our foundation. We combine rigorous instruction with an engaging learning environment that keeps you motivated. No more boring lectures and hoops to jump through—just practical skills, expert guidance, and a community that supports your success."
                : "La excelencia en la capacitación es nuestra base. Combinamos instrucción rigurosa con un ambiente de aprendizaje atractivo que te mantiene motivado. No más conferencias aburridas y obstáculos que superar, solo habilidades prácticas, orientación experta y una comunidad que apoya tu éxito."
              }
            </p>
            
            <div className="bg-gold-50 border-l-4 border-gold-500 pl-6 py-4 rounded-r-lg mb-8">
              <p className="text-navy-800 font-semibold">
                {language === 'en'
                  ? "Our values: Excellence in training + Making education fun again"
                  : "Nuestros valores: Excelencia en capacitación + Hacer que la educación sea divertida nuevamente"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Trade School Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-700 mb-10 text-center">
              {language === 'en' ? 'Why Choose AIT Over Traditional College?' : '¿Por qué elegir AIT sobre la universidad tradicional?'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cost Effective */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <DollarSign className="h-8 w-8 text-gold-500 mr-3" />
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Smart Financial Choice' : 'Elección Financiera Inteligente'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Affordable, flat-rate tuition with no hidden fees. Get quality training without the crushing debt of traditional college.'
                    : 'Matrícula asequible de tarifa plana sin tarifas ocultas. Obtén capacitación de calidad sin la deuda aplastante de la universidad tradicional.'
                  }
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex justify-between">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">{language === 'en' ? '4-Year College' : 'Universidad de 4 años'}</p>
                      <p className="text-lg font-bold text-red-500">$120,000+</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">AIT</p>
                      <p className="text-lg font-bold text-green-500">Call for Pricing</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Time Efficient */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 text-gold-500 mr-3" />
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Get Job-Ready Faster' : 'Prepárate para el Trabajo Más Rápido'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Complete your training in months, not years. Our focused programs get you job-ready quickly with in-demand skills.'
                    : 'Completa tu capacitación en meses, no años. Nuestros programas enfocados te preparan para el trabajo rápidamente con habilidades en demanda.'
                  }
                </p>
              </motion.div>
              
              {/* In-Demand Skills */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-gold-500 mr-3" />
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'High-Demand Skills' : 'Habilidades de Alta Demanda'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Our programs focus on skills that are in high demand and cannot be outsourced or automated, ensuring long-term career security and growth potential.'
                    : 'Nuestros programas se enfocan en habilidades de alta demanda que no pueden ser subcontratadas o automatizadas, asegurando seguridad profesional a largo plazo.'
                  }
                </p>
              </motion.div>
              
              {/* Mission Driven */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-gold-500 mr-3" />
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Real-World Results' : 'Resultados del Mundo Real'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'AIT focuses on practical skills that employers actually want. No theoretical fluff - just Job Site/Field Training that gets you hired fast.'
                    : 'AIT se enfoca en habilidades prácticas que los empleadores realmente quieren. Sin relleno teórico - solo capacitación práctica que te hace contratado rápido.'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Readiness Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-700 mb-8 text-center">
              {language === 'en' ? 'Career-Focused Training' : 'Capacitación Enfocada en la Carrera'}
            </h2>
            
            <p className="text-lg text-navy-600 mb-4 leading-relaxed text-center">
              {language === 'en'
                ? 'Our programs are designed to prepare you for in-demand careers in the skilled trades. We focus on practical skills that employers value.'
                : 'Nuestros programas están diseñados para prepararte para carreras en demanda en oficios especializados. Nos enfocamos en habilidades prácticas que los empleadores valoran.'
              }
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-navy-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
              {language === 'en' ? 'Ready to Start Your Journey?' : '¿Listo para Comenzar tu Viaje?'}
            </h2>
            <p className="text-xl mb-10 text-navy-100">
              {language === 'en'
                ? 'Join AIT and get the specialized training you need to launch your career in the skilled trades.'
                : 'Únete a AIT y obtén la capacitación especializada que necesitas para lanzar tu carrera en oficios especializados.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-800 text-lg px-8 py-6 w-full sm:w-auto">
                  {language === 'en' ? 'Financial Aid Assistance' : 'Asistencia de Ayuda Financiera'}
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-white hover:bg-navy-50 text-navy-800 text-lg px-8 py-6 w-full sm:w-auto">
                  {language === 'en' ? 'Contact Us' : 'Contáctanos'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
