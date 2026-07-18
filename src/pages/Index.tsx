import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Phone, ShieldCheck, GraduationCap, Award, TrendingUp, DollarSign, Clock, CheckCircle2, Stethoscope, BookOpen } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ccmaHero from '@/assets/ccma-hero.jpg';
import instructorImg from '@/assets/instructor-placeholder.jpg';

const Index = () => {
  const { language } = useLanguage();

  const seoTitle = 'Sacramento CCMA Program | Taught by Zeshawn Ahmed RN | AIT';
  const seoDescription = 'NHA-approved Certified Clinical Medical Assistant program in Sacramento. Online coursework plus optional in-person sessions at Capcity Coworking near downtown. Taught by Zeshawn Ahmed RN.';

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.levelupait.com/" />
      </Helmet>

      {/* HERO */}
      <section className="bg-white pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gold-100 text-navy-800 px-3 py-1.5 rounded-full text-sm font-semibold mb-5 border border-gold-300">
                <ShieldCheck className="h-4 w-4" />
                NHA-Approved · Proudly Sacramento-Based
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 leading-[1.05] mb-5">
                Sacramento's Friendliest Path to Becoming a Certified Clinical Medical Assistant
              </h1>
              <p className="text-xl sm:text-2xl text-navy-600 font-medium mb-3">
                Learn online, meet up near downtown at Capcity Coworking, and get career-ready in 8 weeks — taught by Zeshawn Ahmed, RN.
              </p>
              <div className="flex items-center gap-1 mb-8 text-sm text-navy-500">
                <span className="flex text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.363 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.098 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.957z"/></svg>
                  ))}
                </span>
                <span className="ml-2">Small cohorts. Real support. Zero fluff.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button size="lg" className="bg-navy-700 hover:bg-navy-800 text-white rounded-full px-8 py-6 text-base font-semibold w-full sm:w-auto">
                    Request Program Info
                  </Button>
                </Link>
                <a href="tel:9163438014">
                  <Button size="lg" variant="outline" className="border-2 border-navy-700 text-navy-700 hover:bg-navy-50 rounded-full px-8 py-6 text-base font-semibold w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" /> 916-343-8014
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold-200 to-navy-100 rounded-2xl -z-10 blur-xl opacity-60" />
              <img
                src={ccmaHero}
                alt="Certified Clinical Medical Assistant"
                width={1200}
                height={1200}
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY STRIP */}
      <section className="bg-navy-50 border-y border-navy-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold tracking-widest text-navy-500 uppercase mb-6">
            Recognized • Accredited • Trusted
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-navy-100">
              <Award className="h-8 w-8 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-navy-800">NHA-Approved</p>
                <p className="text-sm text-navy-600">Approved by the National Healthcareer Association to prepare students for the CCMA exam.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-navy-100">
              <ShieldCheck className="h-8 w-8 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-navy-800">California BPPE Exemption</p>
                <p className="text-sm text-navy-600">Granted Exemption Status by the California Bureau of Post-Secondary Education.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-5 rounded-xl border border-navy-100">
              <GraduationCap className="h-8 w-8 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-navy-800">Educator-Led</p>
                <p className="text-sm text-navy-600">Taught by UC Berkeley and Sacramento State alumni with real clinical experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TrendingUp, stat: '+14%', label: 'Projected job growth by 2032', src: 'U.S. Bureau of Labor Statistics' },
              { icon: DollarSign, stat: '$46,880', label: 'Median annual salary', src: 'BLS, 2023' },
              { icon: Clock, stat: '8 Weeks', label: 'Self-paced, 100% online', src: '' },
              { icon: BookOpen, stat: '$2,500', label: 'Affordable total tuition', src: 'Payment plans available' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center border-l-4 border-gold-400 pl-4 py-2"
              >
                <item.icon className="h-6 w-6 text-navy-600 mb-2 mx-auto" />
                <p className="text-3xl lg:text-4xl font-bold text-navy-800 mb-1">{item.stat}</p>
                <p className="text-sm text-navy-600 font-medium">{item.label}</p>
                {item.src && <p className="text-xs text-navy-400 mt-1 italic">{item.src}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">What You'll Learn</h2>
            <p className="text-lg text-navy-600">
              Our curriculum is built to prepare you for the NHA Certified Clinical Medical Assistant (CCMA) exam and a career in outpatient clinics, hospitals, and physician offices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              'Foundational clinical knowledge & medical terminology',
              'Anatomy, physiology, and body systems',
              'Infection control & patient safety (OSHA standards)',
              'Patient care & clinical procedures',
              'Phlebotomy and specimen collection',
              'EKG and diagnostic testing',
              'Administrative & professional responsibilities',
              'Full CCMA exam preparation & test-taking strategy',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-navy-100">
                <CheckCircle2 className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="text-navy-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR TEASER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold-200 rounded-2xl -z-10 blur-lg opacity-50" />
              <img
                src={instructorImg}
                alt="CCMA Program Instructor"
                width={1024}
                height={1280}
                loading="lazy"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Meet Your Instructor</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
                Learn from an experienced healthcare educator.
              </h2>
              <p className="text-lg text-navy-600 mb-6">
                Our instructors bring years of clinical and classroom experience, and hold degrees from UC Berkeley and Sacramento State. You'll be supported every step of the way — from enrollment through your CCMA exam.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-100">
                  <Stethoscope className="h-4 w-4" /> Clinical experience
                </span>
                <span className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-100">
                  <GraduationCap className="h-4 w-4" /> UC Berkeley & Sac State alumni
                </span>
              </div>
              <Link to="/instructor">
                <Button size="lg" className="bg-navy-700 hover:bg-navy-800 text-white rounded-full px-8">
                  Meet Your Instructor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Healthcare Career?
          </h2>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Fill out our contact form and an admissions representative will reach out with next steps, tuition options, and enrollment details.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-navy-900 rounded-full px-8 py-6 text-base font-bold w-full sm:w-auto">
                Get Started — Contact Admissions
              </Button>
            </Link>
            <a href="tel:9163438014">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-navy-800 rounded-full px-8 py-6 text-base font-semibold w-full sm:w-auto bg-transparent">
                <Phone className="mr-2 h-4 w-4" /> Call 916-343-8014
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
