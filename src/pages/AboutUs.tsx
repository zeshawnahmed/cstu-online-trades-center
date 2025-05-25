
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
                ? 'Empowering students to become the most confident, empowered versions of themselves to financially prosper with mastery in in-demand skilled trades.'
                : 'Capacitando a los estudiantes para convertirse en las versiones más confiadas y empoderadas de sí mismos para prosperar financieramente con dominio en oficios especializados en demanda.'
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
                ? "Founded in Sacramento, American Skilled Trade University (ASTU) was born from a simple yet powerful mission: to make students the most confident, empowered versions of themselves so they may financially prosper with mastery in in-demand skilled trades. We believe that everyone deserves access to high-quality, affordable education that leads directly to well-paying careers."
                : "Fundada en Sacramento, la Universidad de Oficios Especializados Americana (ASTU) nació de una misión simple pero poderosa: hacer que los estudiantes se conviertan en las versiones más confiadas y empoderadas de sí mismos para que puedan prosperar financieramente con dominio en oficios especializados en demanda."
              }
            </p>
            
            <div className="bg-navy-50 border-l-4 border-navy-500 pl-6 py-4 rounded-r-lg mb-10">
              <p className="text-navy-800 font-medium italic">
                {language === 'en'
                  ? "Our mission is simple: provide affordable, job-focused training that creates pathways to high-paying careers in the skilled trades without saddling students with unnecessary debt."
                  : "Nuestra misión es simple: proporcionar capacitación asequible y enfocada en el trabajo que cree vías hacia carreras bien remuneradas en los oficios especializados sin cargar a los estudiantes con deudas innecesarias."}
              </p>
            </div>
            
            <div className="flex items-center justify-center mb-12">
              <MapPin className="h-8 w-8 text-gold-500 mr-3" />
              <p className="text-xl font-semibold text-navy-700">
                {language === 'en'
                  ? "Proudly serving the Sacramento community and beyond"
                  : "Sirviendo con orgullo a la comunidad de Sacramento y más allá"}
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
              {language === 'en' ? 'Why Choose ASTU?' : '¿Por qué elegir ASTU?'}
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
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Affordable Education' : 'Educación Asequible'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Our programs cost a fraction of traditional college, allowing you to start your career without crushing debt.'
                    : 'Nuestros programas cuestan una fracción de la universidad tradicional, permitiéndote comenzar tu carrera sin deudas abrumadoras.'
                  }
                </p>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex justify-between">
                    <div className="text-left">
                      <p className="text-sm text-gray-500">{language === 'en' ? '4-Year College' : 'Universidad de 4 años'}</p>
                      <p className="text-lg font-bold text-red-500">$30,000+ / {language === 'en' ? 'year' : 'año'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">ASTU</p>
                      <p className="text-lg font-bold text-green-500">$2,499 {language === 'en' ? 'total' : 'total'}</p>
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
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Self-Paced Learning' : 'Aprendizaje a Tu Ritmo'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'Get job-ready in months, not years. Our flexible, self-paced format works around your schedule.'
                    : 'Prepárate para el trabajo en meses, no años. Nuestro formato flexible y a tu ritmo se adapta a tu horario.'
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
                    ? 'Our Commercial Truck Driving program is FMCSA-approved, ensuring you meet industry standards and regulations.'
                    : 'Nuestro programa de Manejo de Camiones Comerciales está aprobado por FMCSA, asegurando que cumplas con los estándares y regulaciones de la industria.'
                  }
                </p>
              </motion.div>
              
              {/* Sacramento Roots */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-gold-500 mr-3" />
                  <h3 className="text-xl font-bold text-navy-700">{language === 'en' ? 'Mission-Driven' : 'Impulsado por la Misión'}</h3>
                </div>
                <p className="text-navy-600">
                  {language === 'en'
                    ? 'We are dedicated to making our students the most confident, empowered versions of themselves for financial prosperity.'
                    : 'Estamos dedicados a hacer que nuestros estudiantes sean las versiones más confiadas y empoderadas de sí mismos para la prosperidad financiera.'
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
                ? 'ASTU graduates are equipped with the skills and confidence to command competitive salaries in high-demand fields. Start earning immediately after graduation.'
                : 'Los graduados de ASTU están equipados con las habilidades y la confianza para obtener salarios competitivos en campos de alta demanda. Comienza a ganar inmediatamente después de la graduación.'
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
                  ? "Unlike many college graduates who face years of student loan debt, our graduates can start earning a great income immediately after completing their training."
                  : "A diferencia de muchos graduados universitarios que enfrentan años de deuda de préstamos estudiantiles, nuestros graduados pueden comenzar a ganar un gran ingreso inmediatamente después de completar su capacitación."}
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
              {language === 'en' ? 'Ready to Transform Your Future?' : '¿Listo para Transformar tu Futuro?'}
            </h2>
            <p className="text-xl mb-10 text-navy-100">
              {language === 'en'
                ? 'Join ASTU and become the most confident, empowered version of yourself while mastering in-demand skilled trades.'
                : 'Únete a ASTU y conviértete en la versión más confiada y empoderada de ti mismo mientras dominas oficios especializados en demanda.'
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
