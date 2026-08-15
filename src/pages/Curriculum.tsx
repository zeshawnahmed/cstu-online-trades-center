import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const weeks = [
  {
    n: 'Week 1',
    title: 'Patient Care & Safety',
    topics: ['Vital signs', 'Medical terminology', 'Infection control', 'Patient safety'],
    checks: ['Hands-On Lab', 'Practice Test'],
  },
  {
    n: 'Week 2',
    title: 'Clinical Testing',
    topics: ['Blood glucose', 'Urinalysis', 'Specimen collection & handling'],
    checks: ['Hands-On Lab', 'Practice Test'],
  },
  {
    n: 'Week 3',
    title: 'Medications & Injections',
    topics: ['Medication safety', 'IM, SubQ & ID injections', 'Skin testing'],
    checks: ['Hands-On Lab', 'Practice Test'],
  },
  {
    n: 'Week 4',
    title: 'Blood Draws',
    topics: ['Venipuncture', 'Order of draw', 'Blood tubes', 'Collection safety'],
    checks: ['Hands-On Lab', 'Practice Test'],
  },
  {
    n: 'Week 5',
    title: 'Final Exam Prep',
    topics: ['Medical office', 'Emergencies', 'California MA regulations', 'CACMA review'],
    checks: ['Final Skills Check-Off', 'Comprehensive Practice Test', 'Resume & Interviewing Workshop'],
  },
];

const Curriculum = () => {
  const seoTitle = '5-Week Medical Assistant Curriculum · CACMA Exam Prep';
  const seoDescription =
    'Week-by-week curriculum for our 5-week Medical Assistant program in Sacramento: patient care, clinical testing, injections, blood draws, and CACMA exam preparation.';

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO */}
      <section className="bg-sand-50 pt-28 pb-20 md:pt-36">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 font-medium mb-8">Curriculum</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-emerald-700 leading-[1.1] tracking-tight mb-8">
            5-Week Medical Assistant<br />
            <span className="italic font-normal">Curriculum.</span>
          </h1>
          <p className="text-base sm:text-lg text-emerald-800/70 font-light leading-relaxed">
            Online coursework, a weekly in-person skills lab, and CCBMA CACMA exam prep.
            Ends with a resume &amp; interviewing workshop.
          </p>
        </div>
      </section>

      {/* WEEKS */}
      <section className="bg-white py-16 md:py-24 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="border-t border-emerald-900/10">
            {weeks.map((w, i) => (
              <motion.div
                key={w.n}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.05 }}
                className="border-b border-emerald-900/10 py-10 md:grid md:grid-cols-[120px_1fr] md:gap-10"
              >
                <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-4 md:mb-0 md:pt-2">
                  {w.n}
                </p>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-light text-emerald-700 mb-4">
                    {w.title}
                  </h2>
                  <p className="text-emerald-900/70 font-light leading-relaxed mb-6">
                    {w.topics.join(' · ')}
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    {w.checks.map((c) => (
                      <span key={c} className="inline-flex items-center gap-2 text-sm text-emerald-800">
                        <Check className="h-4 w-4 text-emerald-500" />
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fade}
            className="font-display text-2xl md:text-3xl font-light text-emerald-700 text-center mt-16 leading-snug"
          >
            Learn it. Practice it. <span className="italic">Get prepared for the CACMA exam.</span>
          </motion.p>
        </div>
      </section>

      {/* TUITION */}
      <section className="bg-emerald-700 text-sand-50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-6">Tuition</p>
          <p className="font-display text-4xl sm:text-5xl md:text-6xl font-light mb-4">$2,499</p>
          <p className="text-sand-100/80 font-light mb-10">
            Total program cost — or three payments of $833
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-sand-100 hover:bg-sand-50 text-emerald-800 rounded-none px-10 py-6 text-sm tracking-wider uppercase font-medium"
            >
              Request Info <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Curriculum;
