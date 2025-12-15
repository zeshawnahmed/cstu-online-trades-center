
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, GraduationCap, AlertCircle, CreditCard, Calendar } from 'lucide-react';
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

            {/* Tuition Payment Plan */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-navy-700 mb-6 flex items-center">
                <Calendar className="h-6 w-6 text-gold-500 mr-2" />
                {language === 'en' ? 'Flexible Tuition Payment Plan' : 'Plan de Pago de Matrícula Flexible'}
              </h2>
              <div className="space-y-4">
                <p className="text-navy-700 text-lg leading-relaxed">
                  {language === 'en'
                    ? "We understand that investing in your future is a big decision. That's why we offer a convenient tuition payment plan that allows you to pay for your training in manageable installments—making it easier than ever to get started on your new career path!"
                    : "Entendemos que invertir en tu futuro es una gran decisión. Por eso ofrecemos un conveniente plan de pago de matrícula que te permite pagar tu capacitación en cuotas manejables—¡haciendo más fácil que nunca comenzar en tu nuevo camino profesional!"}
                </p>
                <div className="bg-navy-50 rounded-lg p-5 mt-4">
                  <div className="flex items-start">
                    <CreditCard className="h-6 w-6 text-gold-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy-700 mb-2">
                        {language === 'en' ? 'How It Works' : 'Cómo Funciona'}
                      </h3>
                      <p className="text-navy-600">
                        {language === 'en'
                          ? "Simply keep a debit or credit card on file, and we'll automatically process your scheduled payments. It's secure, hassle-free, and lets you focus on what matters most—your education and future career success."
                          : "Simplemente mantén una tarjeta de débito o crédito en archivo, y procesaremos automáticamente tus pagos programados. Es seguro, sin complicaciones, y te permite enfocarte en lo que más importa—tu educación y éxito profesional futuro."}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-navy-600 mt-4">
                  {language === 'en'
                    ? "Interested in learning more about our payment plan options? Reach out to us and we'll work together to find a plan that fits your budget."
                    : "¿Interesado en aprender más sobre nuestras opciones de plan de pago? Contáctanos y trabajaremos juntos para encontrar un plan que se ajuste a tu presupuesto."}
                </p>
                <Link to="/contact" className="inline-block mt-2">
                  <Button variant="outline" className="border-gold-400 text-navy-700 hover:bg-gold-50 font-semibold">
                    {language === 'en' ? 'Ask About Payment Plans' : 'Preguntar Sobre Planes de Pago'}
                  </Button>
                </Link>
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
