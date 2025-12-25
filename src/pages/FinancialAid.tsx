
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, GraduationCap, Calendar } from 'lucide-react';
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
      <Helmet>
        <title>{language === 'en' 
          ? 'Financial Aid for Trade School Sacramento | HVAC Training Financing | AIT'
          : 'Ayuda Financiera Escuela de Oficios Sacramento | Financiamiento HVAC | AIT'
        }</title>
        <meta name="description" content={language === 'en'
          ? 'Explore financial aid options for trade school in Sacramento. Affordable HVAC training financing, personal loans, and scholarship resources. American Institute of Trades helps you fund your education.'
          : 'Explora opciones de ayuda financiera para escuela de oficios en Sacramento. Financiamiento asequible para capacitación HVAC.'
        } />
        <meta name="keywords" content={language === 'en'
          ? 'financial aid trade school Sacramento, HVAC training financing, trade school loans Sacramento, affordable trade school Sacramento, vocational training financing Sacramento, scholarship trade school'
          : 'ayuda financiera escuela de oficios Sacramento, financiamiento HVAC Sacramento'
        } />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/financial-aid" />
        
        <meta property="og:title" content={language === 'en' ? 'Financial Aid for Trade School Sacramento | AIT' : 'Ayuda Financiera Escuela de Oficios Sacramento'} />
        <meta property="og:description" content={language === 'en' ? 'Explore financial aid options for HVAC training in Sacramento' : 'Explora opciones de ayuda financiera para capacitación HVAC'} />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/financial-aid" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Financial Aid for Sacramento Trade School",
              "description": "Financial aid options and resources for trade school education in Sacramento",
              "url": "https://www.americanskilledtradeuniversity.edu/financial-aid",
              "isPartOf": {
                "@type": "WebSite",
                "@id": "https://www.americanskilledtradeuniversity.edu/#website"
              },
              "about": {
                "@type": "Thing",
                "name": "Trade School Financial Aid"
              }
            }
          `}
        </script>
      </Helmet>
      <section className="py-16 sm:py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-700 mb-4 sm:mb-6 text-center px-4 sm:px-0">
              {language === 'en' ? 'Financial Aid Options' : 'Opciones de Ayuda Financiera'}
            </h1>

            {/* Introduction */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-6 sm:mb-8">
              <p className="text-navy-700 text-base sm:text-lg leading-relaxed">
                {language === 'en'
                  ? "We're not a Title IV school yet, so we don't offer FAFSA loans. Many students have the funds already or ask family or friends for help with their education. Others rely on lenders, and funds often deposit the same day you're approved. Many students also co-sign loans with a parent or loved one. We also offer payment plans. We believe financial hurdles shouldn't stop you from starting a career in skilled trades."
                  : "Aún no somos una escuela Título IV, por lo que no ofrecemos préstamos FAFSA. Muchos estudiantes ya tienen los fondos o piden ayuda a familiares o amigos para su educación. Otros dependen de prestamistas, y los fondos a menudo se depositan el mismo día que eres aprobado. Muchos estudiantes también co-firman préstamos con un padre o ser querido. También ofrecemos planes de pago. Creemos que los obstáculos financieros no deberían impedirte comenzar una carrera en oficios especializados."}
              </p>
              <p className="text-navy-700 text-base sm:text-lg leading-relaxed mt-4">
                {language === 'en'
                  ? "We get it, money is tight. And we know our programs are not for everybody except those who have made a clear DECISION to Level Up. If that's you, we're ready to help you move forward."
                  : "Lo entendemos, el dinero está ajustado. Y sabemos que nuestros programas no son para todos, excepto para aquellos que han tomado una DECISIÓN clara de Superarse. Si eres tú, estamos listos para ayudarte a avanzar."}
              </p>
            </div>

            {/* Tuition Payment Plan */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-700 mb-3 sm:mb-4 flex items-center">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-gold-500 mr-2" />
                {language === 'en' ? 'Tuition Payment Plan' : 'Plan de Pago de Matrícula'}
              </h2>
              <p className="text-navy-700 text-base sm:text-lg leading-relaxed">
                {language === 'en'
                  ? "Pay tuition in 3 monthly payments of $833.33 with a debit or credit card on file."
                  : "Paga la matrícula en 3 pagos mensuales de $833.33 con una tarjeta de débito o crédito en archivo."}
              </p>
              <Link to="/contact" className="inline-block mt-4">
                <Button variant="outline" className="border-gold-400 text-navy-700 hover:bg-gold-50 font-semibold text-sm sm:text-base">
                  {language === 'en' ? 'Ask About Payment Plans' : 'Preguntar Sobre Planes de Pago'}
                </Button>
              </Link>
            </div>

            {/* Student Loans - Fast Funding */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-700 mb-4 sm:mb-6">
                {language === 'en' ? 'Student Loans – Fast Funding' : 'Préstamos Estudiantiles – Fondos Rápidos'}
              </h2>
              <p className="text-navy-700 text-base sm:text-lg leading-relaxed mb-4">
                {language === 'en'
                  ? "Get approved and receive funds as fast as the same day. Rates comparable to federal FAFSA loans."
                  : "Obtén aprobación y recibe fondos tan rápido como el mismo día. Tasas comparables a los préstamos federales FAFSA."}
              </p>
              <div className="space-y-3 sm:space-y-4">
                {loanLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 sm:p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors group"
                  >
                    <span className="text-navy-700 font-medium text-sm sm:text-base">{link.name}</span>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 group-hover:text-gold-600 flex-shrink-0" />
                  </a>
                ))}
              </div>
              <p className="text-navy-500 mt-4 text-xs italic">
                {language === 'en'
                  ? "*Lender terms and conditions apply."
                  : "*Se aplican los términos y condiciones del prestamista."}
              </p>
            </div>

            {/* Scholarship Resources */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-700 mb-4 sm:mb-6 flex items-center">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-gold-500 mr-2" />
                {language === 'en' ? 'Scholarship Resources' : 'Recursos de Becas'}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {scholarshipLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 sm:p-4 bg-navy-50 rounded-lg hover:bg-navy-100 transition-colors group"
                  >
                    <span className="text-navy-700 font-medium text-sm sm:text-base">{link.name}</span>
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 group-hover:text-gold-600 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center px-4 sm:px-0">
              <p className="text-navy-600 mb-4 text-sm sm:text-base">
                {language === 'en'
                  ? 'Have questions about financing your education? Contact us today!'
                  : '¿Tienes preguntas sobre cómo financiar tu educación? ¡Contáctanos hoy!'}
              </p>
              <Link to="/contact">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-800 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
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
