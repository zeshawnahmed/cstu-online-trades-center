
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
            ? 'About Us | Sacramento Trade School | American Skilled Trade University (ASTU)' 
            : 'Sobre Nosotros | Escuela de Oficios Sacramento | Universidad de Oficios Especializados Americana'}
        </title>
        <meta 
          name="description" 
          content={language === 'en'
            ? "Learn about American Skilled Trade University - Sacramento's premier affordable trade school for Commercial Truck Driving and CDL training. Our cost-effective programs prepare you for lucrative careers without the debt of traditional colleges."
            : "Conozca sobre la Universidad de Oficios Especializados Americana - La principal escuela de oficios asequible de Sacramento para capacitación de Manejo de Camiones Comerciales y CDL."}
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
              {language === 'en' ? 'About American Skilled Trade University' : 'Sobre la Universidad de Oficios Especializados Americana'}
            </h1>
            <p className="text-xl text-navy-600 mb-10">
              {language === 'en' 
                ? 'Skip the crushing debt of expensive 4-year degrees. ASTU puts you on a direct path to high-paying careers in the modern economy without the financial burden.'
                : 'Evita la deuda aplastante de costosos títulos de 4 años. ASTU te pone en el camino directo hacia carreras bien remuneradas en la economía moderna sin la carga financiera.'
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
                ? "Founded in Sacramento, American Skilled Trade University (ASTU) was born from a simple yet powerful mission: to provide a smart alternative to overpriced 4-year degrees that leave students drowning in debt with unmarketable skills. While traditional colleges charge $30,000+ per year for degrees that may never pay off, ASTU prepares you for high-demand careers at a fraction of the cost."
                : "Fundada en Sacramento, la Universidad de Oficios Especializados Americana (ASTU) nació de una misión simple pero poderosa: proporcionar una alternativa inteligente a los títulos universitarios sobrevalorados de 4 años que dejan a los estudiantes ahogándose en deudas."
              }
            </p>
            
            <div className="bg-navy-50 border-l-4 border-navy-500 pl-6 py-4 rounded-r-lg mb-10">
              <p className="text-navy-800 font-medium italic">
                {language === 'en'
                  ? "Why spend 4+ years and $120,000+ on a degree that might not even get you a job? ASTU gets you job-ready in months, not years, for just $2,499 total."
                  : "¿Por qué gastar 4+ años y $120,000+ en un título que tal vez ni siquiera te consiga trabajo? ASTU te prepara para el trabajo en meses, no años, por solo $2,499 en total."}
              </p>
            </div>
            
            <div className="flex items-center justify-center mb-12">
              <MapPin className="h-8 w-8 text-gold-500 mr-3" />
              <p className="text-xl font-semibold text-navy-700">
                {language === 'en'
                  ? "Proudly serving the Sacramento community with practical education"
                  : "Sirviendo con orgullo a la comunidad de Sacramento con educación práctica"}
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
              {language === 'en' ? 'Why Choose ASTU Over Traditional College?' : '¿Por qué elegir ASTU sobre la universidad tradicional?'}
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
                      <p className="text-sm text-gray-500">ASTU</p>
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
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'FMCSA-Approved Training' : 'Capacitación Aprobada por FMCSA'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Our Commercial Truck Driving program is FMCSA-approved, ensuring you meet industry standards and have guaranteed job opportunities upon completion.'
                    : 'Nuestro programa de Manejo de Camiones Comerciales está aprobado por FMCSA, asegurando que cumplas con los estándares de la industria.'
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
                    ? 'ASTU focuses on practical skills that employers actually want. No theoretical fluff - just hands-on training that gets you hired fast.'
                    : 'ASTU se enfoca en habilidades prácticas que los empleadores realmente quieren. Sin relleno teórico - solo capacitación práctica que te hace contratado rápido.'
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
            
            <p className="text-lg text-navy-600 mb-10 leading-relaxed text-center">
              {language === 'en'
                ? 'ASTU graduates enter high-paying careers immediately, while college graduates often struggle to find work that justifies their massive debt load.'
                : 'Los graduados de ASTU entran en carreras bien pagadas inmediatamente, mientras que los graduados universitarios a menudo luchan por encontrar trabajo que justifique su carga masiva de deuda.'
              }
            </p>
            
            <div className="grid md:grid-cols-1 gap-8 mb-10">
              <div className="bg-navy-50 p-6 rounded-xl text-center">
                <h3 className="font-bold text-navy-700 mb-3">{language === 'en' ? 'Commercial Truck Drivers' : 'Conductores de Camiones Comerciales'}</h3>
                <p className="text-3xl font-bold text-navy-600">$70,000</p>
                <p className="text-sm text-navy-500 mt-1">{language === 'en' ? 'Median Annual Salary' : 'Salario Anual Medio'}</p>
              </div>
            </div>
            
            <div className="bg-gold-50 border-l-4 border-gold-500 pl-6 py-4 rounded-r-lg">
              <p className="text-navy-800 font-medium">
                {language === 'en'
                  ? "The math is simple: Start earning $70,000 immediately vs. spending $120,000+ and 4+ years for a degree that might not even get you a job."
                  : "Las matemáticas son simples: Comienza a ganar $70,000 inmediatamente vs. gastar $120,000+ y 4+ años por un título que tal vez ni siquiera te consiga trabajo."}
              </p>
            </div>
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
                ? 'Skip the debt trap of traditional college. Join ASTU and start earning immediately with skills that employers actually need.'
                : 'Evita la trampa de deuda de la universidad tradicional. Únete a ASTU y comienza a ganar inmediatamente con habilidades que los empleadores realmente necesitan.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-800 text-lg px-8 py-6 w-full sm:w-auto">
                  {language === 'en' ? 'Financial Aid Assistance Available' : 'Asistencia de Ayuda Financiera Disponible'}
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
