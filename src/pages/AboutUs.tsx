
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
                ? 'Skip the crushing debt of expensive 4-year degrees. AIT prepares you for careers with high earning potential.'
                : 'Evita la deuda aplastante de costosos títulos de 4 años. AIT te prepara para carreras con alto potencial de ingresos.'
              }
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-700 mb-6">
              {language === 'en' ? 'Our Story' : 'Nuestra Historia'}
            </h2>
            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              {language === 'en'
                ? "Founded in Sacramento by UC Berkeley and UC Davis Alumni, American Institute of Trades (AIT) was born from a simple yet powerful mission: to provide a smart alternative to overpriced 4-year degrees that leave students drowning in debt with unmarketable skills. While traditional colleges charge $30,000+ per year for degrees that may never pay off, AIT prepares you for high-demand careers at a fraction of the cost."
                : "Fundada en Sacramento por exalumnos de UC Berkeley y UC Davis, el Instituto Americano de Oficios (AIT) nació de una misión simple pero poderosa: proporcionar una alternativa inteligente a los títulos universitarios sobrevalorados de 4 años que dejan a los estudiantes ahogándose en deudas."
              }
            </p>
            
            <div className="bg-navy-50 border-l-4 border-navy-500 pl-6 py-4 rounded-r-lg mb-10">
              <p className="text-navy-800 font-medium italic">
                {language === 'en'
                  ? "Why spend 4+ years and $120,000+ on a degree that might not even get you a job? AIT gets you job-ready in months, not years, for just $2,499 total."
                  : "¿Por qué gastar 4+ años y $120,000+ en un título que tal vez ni siquiera te consiga trabajo? AIT te prepara para el trabajo en meses, no años, por solo $2,499 en total."}
              </p>
            </div>
            
            <div className="flex items-center justify-center mb-12">
              <MapPin className="h-8 w-8 text-gold-500 mr-3" />
              <p className="text-xl font-semibold text-navy-700">
                {language === 'en'
                  ? "Proudly serving the Greater Sacramento Region with Practical Education"
                  : "Sirviendo con orgullo a la Gran Región de Sacramento con Educación Práctica"}
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
                    ? 'Skip the crushing debt. While college graduates average $37,000+ in student loans, our graduates start earning immediately with zero debt burden.'
                    : 'Evita la deuda aplastante. Mientras los graduados universitarios promedian $37,000+ en préstamos estudiantiles, nuestros graduados comienzan a ganar inmediatamente sin carga de deuda.'
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
                      <p className="text-lg font-bold text-green-500">$2,499</p>
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
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Start Earning Faster' : 'Comienza a Ganar Más Rápido'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Get job-ready in months, not years. While others spend 4+ years in classrooms, you\'ll be earning $70,000+ annually in the skilled trades.'
                    : 'Prepárate para el trabajo en meses, no años. Mientras otros pasan 4+ años en aulas, tú estarás ganando $70,000+ anualmente en oficios especializados.'
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
      
      {/* Earning Potential Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-700 mb-8 text-center">
              {language === 'en' ? 'Your Financial Future' : 'Tu Futuro Financiero'}
            </h2>
            
            <p className="text-lg text-navy-600 mb-4 leading-relaxed text-center">
              {language === 'en'
                ? 'AIT graduates are positioned to enter high-paying careers immediately, while college graduates often struggle to find work that justifies their massive debt load.'
                : 'Los graduados de AIT están posicionados para entrar en carreras bien pagadas inmediatamente, mientras que los graduados universitarios a menudo luchan por encontrar trabajo que justifique su carga masiva de deuda.'
              }
            </p>
            
            <p className="text-xs text-gray-500 text-center italic mb-10">
              *AIT does not guarantee financial outcomes
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
              {language === 'en' ? 'Ready to Make a Smart Financial Choice?' : '¿Listo para Hacer una Elección Financiera Inteligente?'}
            </h2>
            <p className="text-xl mb-10 text-navy-100">
              {language === 'en'
                ? 'Skip the debt trap of traditional college. Join AIT and start earning immediately with skills that employers actually need.'
                : 'Evita la trampa de deuda de la universidad tradicional. Únete a AIT y comienza a ganar inmediatamente con habilidades que los empleadores realmente necesitan.'
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
