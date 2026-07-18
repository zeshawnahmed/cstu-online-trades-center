import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { GraduationCap, Stethoscope, Award, MapPin, Phone, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import instructorImg from '@/assets/instructor-placeholder.jpg';

const MeetInstructor = () => {
  return (
    <Layout>
      <Helmet>
        <title>Meet Zeshawn Ahmed, RN | Sacramento CCMA Instructor | AIT</title>
        <meta name="description" content="Meet Zeshawn Ahmed, RN — lead instructor of the Certified Clinical Medical Assistant program at American Institute of Trades. Sacramento-based, UC Berkeley and Sac State alumni, real bedside experience." />
      </Helmet>

      {/* HERO */}
      <section className="bg-white pt-14 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 relative"
            >
              <div className="absolute -inset-3 bg-gold-200 rounded-2xl -z-10 blur-lg opacity-60" />
              <img
                src={instructorImg}
                alt="Zeshawn Ahmed, RN — CCMA Program Lead Instructor"
                width={1024}
                height={1280}
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <p className="text-sm font-bold tracking-widest text-gold-600 uppercase mb-3">Meet Your Instructor</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-800 mb-3">
                Zeshawn Ahmed, RN
              </h1>
              <p className="text-xl text-navy-600 font-medium mb-6">
                Lead Instructor · Certified Clinical Medical Assistant Program · Sacramento, CA
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-100">
                  <Stethoscope className="h-4 w-4" /> Registered Nurse
                </span>
                <span className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-100">
                  <GraduationCap className="h-4 w-4" /> UC Berkeley Alumni
                </span>
                <span className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-100">
                  <GraduationCap className="h-4 w-4" /> Sac State Alumni
                </span>
                <span className="inline-flex items-center gap-2 bg-navy-50 text-navy-700 px-3 py-1.5 rounded-full text-sm font-semibold border border-navy-100">
                  <MapPin className="h-4 w-4" /> Born & Raised in Sacramento
                </span>
              </div>
              <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
                <p>
                  Hi, I'm Zeshawn — a Registered Nurse, lifelong Sacramentan, and the person who'll be walking you through every module of this program. I've spent years at the bedside, and I built this course to be the kind of class I wish I'd had: friendly, fast-moving, and actually useful on day one of the job.
                </p>
                <p>
                  I studied at UC Berkeley and Sacramento State, and I still get most excited when a student has that "oh, that finally makes sense" moment. Classes are held online with optional in-person study sessions near downtown at Capcity Coworking, so you get the flexibility of remote learning with the energy of a real Sacramento community.
                </p>
                <p>
                  My promise: you'll be supported, challenged, and genuinely enjoy the ride to your CCMA certification.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="py-14 bg-navy-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">Credentials & Community</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: Stethoscope, title: 'Clinical Role', body: 'Registered Nurse (RN), actively practicing in the Sacramento region.' },
              { icon: GraduationCap, title: 'Education', body: 'UC Berkeley\nSacramento State University' },
              { icon: MapPin, title: 'Where We Meet', body: 'Optional in-person sessions at Capcity Coworking, near downtown Sacramento.' },
              { icon: Award, title: 'Program Standing', body: 'NHA-approved CCMA curriculum. Pending approval from the California Bureau of Post-Secondary Education (BPPE).' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-navy-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gold-100 p-2 rounded-lg">
                    <item.icon className="h-5 w-5 text-navy-700" />
                  </div>
                  <h3 className="font-bold text-navy-800 text-lg">{item.title}</h3>
                </div>
                <p className="text-navy-600 whitespace-pre-line">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY QUOTE */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Heart className="h-8 w-8 text-gold-500 mx-auto mb-4" />
          <p className="text-2xl sm:text-3xl text-navy-800 font-medium leading-relaxed italic mb-4">
            "Healthcare is a people business. If class isn't fun, engaging, and human, we're already failing our future patients."
          </p>
          <p className="text-navy-500 font-semibold">— Zeshawn Ahmed, RN</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-br from-navy-800 to-navy-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Come Learn With Us in Sacramento</h2>
          <p className="text-lg text-navy-100 mb-8 max-w-2xl mx-auto">
            Reach out and I'll personally make sure you get the info you need to decide if the program is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold-400 hover:bg-gold-500 text-navy-900 rounded-full px-8 py-6 text-base font-bold w-full sm:w-auto">
                Request Program Info
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

export default MeetInstructor;
