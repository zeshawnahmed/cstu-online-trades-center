import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ccmaHero from '@/assets/ccma-hero.jpg';
import instructorImg from '@/assets/instructor-placeholder.jpg';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const Index = () => {
  const seoTitle = 'CCMA Program · Sacramento · American Institute of Trades';
  const seoDescription = 'A modern, NHA-approved Certified Clinical Medical Assistant program. Online coursework with in-person sessions in downtown Sacramento.';

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
      <section className="bg-sand-50 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.25em] uppercase text-emerald-700 font-medium mb-8 font-sans"
          >
            Sacramento · Est. 2025
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-light text-emerald-700 leading-[1.02] tracking-tight mb-8"
          >
            Become a Certified<br />
            <span className="italic font-normal">Medical Assistant.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-emerald-800/70 max-w-xl mx-auto mb-12 font-light leading-relaxed"
          >
            Eight weeks. Online. Guided by a Registered Nurse in downtown Sacramento.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-sand-50 rounded-none px-10 py-6 text-sm tracking-wider uppercase font-medium">
                Request Info <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/instructor">
              <Button size="lg" variant="ghost" className="text-emerald-800 hover:bg-transparent hover:text-emerald-600 rounded-none px-6 py-6 text-sm tracking-wider uppercase font-medium underline underline-offset-8 decoration-1">
                Meet the Instructor
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="bg-sand-50 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div {...fade} className="overflow-hidden">
            <img
              src={ccmaHero}
              alt="Certified Clinical Medical Assistant"
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CREDIBILITY LINE */}
      <section className="bg-white py-24 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              { k: 'NHA', v: 'Approved curriculum' },
              { k: 'BPPE', v: 'Approval pending' },
              { k: 'RN', v: 'Led by a Registered Nurse' },
            ].map((item, i) => (
              <motion.div key={i} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }} className="text-center md:text-left">
                <p className="font-display text-4xl font-light text-emerald-700 mb-2">{item.k}</p>
                <p className="text-sm text-emerald-900/60 tracking-wide">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section className="bg-emerald-700 text-sand-50 py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-6">The Program</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
            A focused path to the CCMA credential.
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="text-lg text-sand-100/80 font-light leading-relaxed mb-12">
            Clinical foundations. Phlebotomy. EKG. Patient care. Exam preparation. Built by clinicians, taught in small cohorts, structured around your life.
          </motion.p>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.3 }} className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-sand-100/70 tracking-wide">
            <span>8 weeks</span>
            <span className="text-sand-400">·</span>
            <span>Online</span>
            <span className="text-sand-400">·</span>
            <span>$2,500</span>
            <span className="text-sand-400">·</span>
            <span>Payment plans</span>
          </motion.div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="bg-sand-50 py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fade}>
              <img
                src={instructorImg}
                alt="Zeshawn Ahmed, RN"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.1 }}>
              <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6">Your Instructor</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-emerald-700 leading-tight mb-6">
                Zeshawn Ahmed, <span className="italic">RN</span>
              </h2>
              <p className="text-emerald-900/70 leading-relaxed mb-8 font-light">
                Sacramento-born. UC Berkeley and Sac State educated. Bedside-tested. Teaching the class he wished he'd had.
              </p>
              <Link to="/instructor" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-emerald-700 hover:text-emerald-500 border-b border-emerald-700 pb-1">
                Read more <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-white py-32 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6">Where</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-4xl md:text-5xl font-light text-emerald-700 leading-tight mb-6">
            Capsity Coworking.<br /><span className="italic">Downtown Sacramento.</span>
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="text-emerald-900/60 font-light mb-10">
            Online first. In-person when it matters.
          </motion.p>
          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.3 }}
            className="mx-auto max-w-xl border border-emerald-900/10 shadow-sm overflow-hidden"
          >
            <iframe
              title="Capsity Coworking — 1715 R Street, Sacramento"
              src="https://www.google.com/maps?q=Capsity+Coworking+1715+R+Street+Sacramento+CA&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: 'block' }}
            />
            <div className="bg-sand-50 px-5 py-4 text-left flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-900 tracking-wide">Capsity Coworking</p>
                <p className="text-xs text-emerald-900/60">1715 R Street, Sacramento, CA 95811</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Capsity+Coworking+1715+R+Street+Sacramento+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider uppercase text-emerald-700 hover:text-emerald-500 border-b border-emerald-700 pb-0.5"
              >
                Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 py-32">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.h2 {...fade} className="font-display text-4xl md:text-5xl font-light text-sand-50 leading-tight mb-10">
            Start when you're ready.
          </motion.h2>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.15 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-sand-100 hover:bg-sand-50 text-emerald-800 rounded-none px-12 py-6 text-sm tracking-wider uppercase font-medium">
                Contact Admissions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sand-100/60 text-sm mt-6 tracking-wide">or call 916-343-8014</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
