import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Check } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const highlights = [
  {
    t: 'Online + weekly skills lab',
    d: 'Coursework online. Hands-on practice each week in downtown Sacramento.',
  },
  {
    t: 'Tutoring and instructional support',
    d: 'Get support throughout your program.',
  },
  {
    t: 'Built for busy professionals',
    d: 'Study around your job and family.',
  },
  {
    t: 'CACMA exam ready',
    d: 'Prepare for the CACMA — recognized by the Medical Board of California — with plenty of practice questions.',
  },
  {
    t: 'Resume + interviewing workshop',
    d: 'Build your resume and practice interviews before you apply.',
  },
  {
    t: 'Focused, structured program',
    d: 'One goal: pass the exam and start your career as an MA.',
  },
];


const Index = () => {
  const seoTitle = 'Medical Assistant Program Sacramento · CACMA Exam Prep';
  const seoDescription =
    'A 5-week Medical Assistant program in Sacramento preparing you for the CCBMA CACMA certification — the credential recognized by the Medical Board of California. Online coursework with a weekly in-person skills lab. Tuition $2,499.';

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
            Launch Your Career in Healthcare
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-emerald-700 leading-[1.05] tracking-tight mb-8"
          >
            Become a California<br />
            <span className="italic font-normal">Certified Medical Assistant.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-emerald-800/70 max-w-xl mx-auto mb-6 font-light leading-relaxed"
          >
            Five weeks. Hybrid schedule for busy professionals. CCBMA CACMA exam prep
            for the credential recognized by the Medical Board of California.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/60 text-emerald-800 text-sm font-medium tracking-wide mb-10"
          >
            Cohort launches next month — pending BPPE approval. Join the waitlist below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-sand-50 rounded-none px-10 py-6 text-sm tracking-wider uppercase font-medium">
                Request Info <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/curriculum" className="w-full sm:w-auto">
              <Button size="lg" variant="ghost"  className="text-emerald-800 hover:bg-transparent hover:text-emerald-600 rounded-none px-6 py-6 text-sm tracking-wider uppercase font-medium underline underline-offset-8 decoration-1">
                See the Curriculum
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-sand-50 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            {...fade}
            className="aspect-video w-full bg-emerald-900 overflow-hidden shadow-xl border border-emerald-900/10"
          >
            <video
              className="w-full h-full object-cover"
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Medical Assistant program overview video"
            >
              <source src="/program-video.mp4" type="video/mp4" />
              <p className="text-sm text-sand-100/80 text-center py-12">
                Your browser does not support the video tag.
              </p>
            </video>
          </motion.div>
        </div>
      </section>

      {/* CREDIBILITY LINE */}
      <section className="bg-white py-24 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              { k: 'CCBMA', v: 'Prepares you for the CACMA exam — recognized by the Medical Board of California' },
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

      {/* PROGRAM HIGHLIGHTS */}
      <section className="bg-sand-50 py-20 md:py-28 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6 text-center">
            Program Highlights
          </motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-emerald-700 text-center leading-tight mb-14">
            What you get in five weeks.
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {highlights.map((h, i) => (
              <motion.div key={h.t} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }}>
                <div className="flex items-start gap-3 mb-3">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <h3 className="font-display text-xl font-medium text-emerald-800 leading-snug">{h.t}</h3>
                </div>
                <p className="text-emerald-900/65 font-light leading-relaxed pl-8">{h.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CCBMA / PROGRAM */}
      <section className="bg-emerald-700 text-sand-50 py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-6">The Credential</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
            Built around the <span className="italic">CCBMA</span> exam.
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="text-lg text-sand-100/80 font-light leading-relaxed mb-6">
            The California Certifying Board for Medical Assistants awards the CACMA — the
            credential recognized by the Medical Board of California. Every week maps to it:
            clinical skills, injections, blood draws, California MA regulations, and practice testing.
          </motion.p>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.3 }} className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-sand-100/70 tracking-wide mb-12">
            <span>5 weeks</span>
            <span className="text-sand-400">·</span>
            <span>Online + weekly skills lab</span>
            <span className="text-sand-400">·</span>
            <span>Sacramento</span>
          </motion.div>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.35 }}>
            <Link to="/curriculum">
              <Button size="lg" className="bg-sand-100 hover:bg-sand-50 text-emerald-800 rounded-none px-10 py-6 text-sm tracking-wider uppercase font-medium">
                View Full Curriculum <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TUITION */}
      <section className="bg-white py-20 md:py-28 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6">Tuition</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-emerald-700 leading-tight mb-14">
            Clear tuition. No surprises.
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.15 }} className="border border-emerald-900/15 bg-sand-50 p-8">
              <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-4">Pay in Full</p>
              <p className="font-display text-5xl font-light text-emerald-700 mb-2">$2,499</p>
              <p className="text-sm text-emerald-900/60">One payment · total program tuition</p>
            </motion.div>
            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.25 }} className="border border-emerald-900/15 bg-sand-50 p-8">
              <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-4">Payment Plan</p>
              <p className="font-display text-5xl font-light text-emerald-700 mb-2">
                3 × $833
              </p>
              <p className="text-sm text-emerald-900/60">Three payments · $2,499 total</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="bg-sand-50 py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div {...fade}>
            <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6">Your Instructor</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-emerald-700 leading-tight mb-8">
              Shawn Ahmed, <span className="italic">RN</span>
            </h2>
            <p className="text-emerald-900/70 tracking-wide font-medium">Registered Nurse · Master's in Education · Sacramento</p>

          </motion.div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-white py-20 md:py-32 border-t border-emerald-900/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6">Where</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-emerald-700 leading-tight mb-6">
            Capsity Coworking.<br /><span className="italic">Downtown Sacramento.</span>
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="text-emerald-900/60 font-light mb-10">
            Mostly online. Weekly hands-on lab in Sacramento.
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

          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.4 }}
            className="mx-auto max-w-xl mt-14 text-left"
          >
            <p className="text-xs tracking-[0.25em] uppercase text-emerald-700 mb-6 text-center">Common Questions</p>
            <Accordion type="single" collapsible className="border-t border-emerald-900/10">
              {[
                {
                  q: 'Do you offer financial aid?',
                  a: (
                    <>
                      We do not offer FAFSA. We offer a flexible payment plan of three payments. Students may also use a private student loan. See our{' '}
                      <Link to="/financial-aid" className="underline hover:text-emerald-500">Financial Aid page</Link>.
                    </>
                  ),
                },
                {
                  q: 'Is the program online?',
                  a: 'Hybrid. The majority is online, with a weekly skills lab near downtown Sacramento.',
                },
                {
                  q: 'Which certification will I prepare to earn?',
                  a: 'The CACMA by the CCBMA — the credential recognized by the Medical Board of California.',
                },
                {
                  q: 'What are the next steps if I\'m interested?',
                  a: 'Fill out the contact form to join the waitlist. An admissions rep will be in touch once BPPE approval is finalized.',
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-emerald-900/10">
                  <AccordionTrigger className="text-sm text-emerald-900 font-medium tracking-wide hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-emerald-900/60 font-light leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-800 py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.p {...fade} className="text-xs tracking-[0.25em] uppercase text-sand-400 mb-6">Next Cohort</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-sand-50 leading-tight mb-6">
            Join the waitlist.
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.15 }} className="text-sand-100/70 font-light mb-10">
            Our first cohort is expected to launch next month, pending BPPE approval. Fill out the contact form to reserve your spot.
          </motion.p>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.2 }}>
            <Link to="/contact">
              <Button size="lg" className="bg-sand-100 hover:bg-sand-50 text-emerald-800 rounded-none px-12 py-6 text-sm tracking-wider uppercase font-medium">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sand-100/60 text-sm mt-6 tracking-wide">
              The contact form is the fastest way to reach us · or call 916-572-6514
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
