
import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, GraduationCap, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FinancialAid = () => {
  const { language } = useLanguage();

  const loanLinks = [
    {
      name: 'Wells Fargo',
      url: 'https://www.wellsfargo.com/personal-loans/',
    },
    {
      name: 'U.S. Bank',
      url: 'https://www.usbank.com/loans-credit-lines/personal-loans-and-lines-of-credit/personal-loan.html',
    },
    {
      name: 'Discover',
      url: 'https://www.discover.com/personal-loans/',
    },
    {
      name: 'Credible Personal Loans',
      url: 'https://www.credible.com/personal-loans/',
    },
  ];

  const scholarshipLinks = [
    {
      name: 'FASTWEB Scholarships for Trade School',
      url: 'https://www.fastweb.com/',
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-700 mb-6 text-center">
              {language === 'en' ? 'Financial Aid Options' : 'Opciones de Ayuda Financiera'}
            </h1>

            {/* Introduction */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8">
              <p className="text-navy-700 text-lg leading-relaxed">
                {language === 'en'
                  ? "At AIT, we're not a Title IV school yet, so we don't offer FAFSA. Many students have the funds already or ask family or friends for help with their education. Others rely on lenders—funds often deposit the same day you're approved. Many students also co-sign loans with a parent or loved one. We believe financial hurdles shouldn't stop you from starting a career in skilled trades."
                  : "En AIT, aún no somos una escuela Título IV, por lo que no ofrecemos FAFSA. Muchos estudiantes ya tienen los fondos o piden ayuda a familiares o amigos para su educación. Otros dependen de prestamistas—los fondos a menudo se depositan el mismo día que eres aprobado. Muchos estudiantes también co-firman préstamos con un padre o ser querido. Creemos que los obstáculos financieros no deberían impedirte comenzar una carrera en oficios especializados."}
              </p>
            </div>

            {/* Helpful Loan Links */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-navy-700 mb-6">
                {language === 'en' ? 'Helpful Loan Links' : 'Enlaces de Préstamos Útiles'}
              </h2>
              <div className="space-y-4">
                {loanLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors group"
                  >
                    <span className="text-navy-700 font-medium">{link.name}</span>
                    <ExternalLink className="h-5 w-5 text-gold-500 group-hover:text-gold-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Scholarship Resources */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-gold-500 mr-2" />
                {language === 'en' ? 'Scholarship Resources' : 'Recursos de Becas'}
              </h2>
              <div className="space-y-4">
                {scholarshipLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors group"
                  >
                    <span className="text-navy-700 font-medium">{link.name}</span>
                    <ExternalLink className="h-5 w-5 text-gold-500 group-hover:text-gold-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-8 flex items-start">
              <AlertCircle className="h-5 w-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
              <p className="text-navy-700 text-sm">
                {language === 'en'
                  ? '*Lender terms and conditions apply.'
                  : '*Se aplican los términos y condiciones del prestamista.'}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-navy-600 mb-4">
                {language === 'en'
                  ? 'Have questions about financing your education? Contact us today!'
                  : '¿Tienes preguntas sobre cómo financiar tu educación? ¡Contáctanos hoy!'}
              </p>
              <Link to="/contact">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-800 font-bold px-8 py-4 text-lg">
                  {language === 'en' ? 'Contact Us' : 'Contáctanos'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FinancialAid;
