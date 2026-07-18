import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import instructorImg from '@/assets/instructor-placeholder.jpg';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const MeetInstructor = () => {
  return (
    <Layout>
      <Helmet>
        <title>Zeshawn Ahmed, RN · Instructor · AIT</title>
        <meta name="description" content="Zeshawn Ahmed, RN — Sacramento-based Registered Nurse leading the CCMA program at American Institute of Trades." />
      </Helmet>

      {/* HERO */}
      <section className="bg-sand-50 pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6"
          >
            Your Instructor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-emerald-700 leading-[1.02] mb-6"
          >
            Zeshawn Ahmed,<br /><span className="italic">RN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-emerald-900/60 tracking-wide"
          >
            Registered Nurse · Sacramento, CA
          </motion.p>
        </div>
      </section>

      {/* PORTRAIT */}
      <section className="bg-sand-50 pb-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.img
            {...fade}
            src={instructorImg}
            alt="Zeshawn Ahmed, RN"
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
      </section>

      {/* BIO */}
      <section className="bg-white py-32 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div {...fade} className="space-y-6 text-lg text-emerald-900/80 font-light leading-relaxed">
            <p>
              Born and raised in Sacramento. Educated at UC Berkeley and Sacramento State. A Registered Nurse who has spent years at the bedside.
            </p>
            <p>
              I built this program to be the class I wished I'd taken: clear, current, and paced for real life. Small cohorts. No filler. A direct path to certification.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS GRID */}
      <section className="bg-emerald-700 text-sand-50 py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-12 text-center">Credentials</motion.p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { k: 'Registered Nurse', v: 'Actively practicing in the Sacramento region' },
              { k: 'UC Berkeley', v: 'Undergraduate' },
              { k: 'Sacramento State', v: 'Nursing' },
              { k: 'NHA Approved', v: 'CCMA curriculum · BPPE approval pending' },
            ].map((item, i) => (
              <motion.div key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }} className="border-t border-sand-400/30 pt-5">
                <p className="font-display text-2xl font-light mb-2">{item.k}</p>
                <p className="text-sm text-sand-100/70">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-sand-50 py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p {...fade} className="font-display text-3xl md:text-4xl font-light italic text-emerald-700 leading-relaxed">
            "Healthcare is a people business. Class should feel that way too."
          </motion.p>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.15 }} className="text-xs tracking-[0.25em] uppercase text-emerald-800/60 mt-8">
            — Zeshawn Ahmed, RN
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 py-32">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.h2 {...fade} className="font-display text-4xl md:text-5xl font-light text-sand-50 leading-tight mb-10">
            Learn with me in Sacramento.
          </motion.h2>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.15 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-sand-100 hover:bg-sand-50 text-emerald-800 rounded-none px-12 py-6 text-sm tracking-wider uppercase font-medium">
                Request Info <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sand-100/60 text-sm mt-6 tracking-wide">or call 916-343-8014</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetInstructor;
