
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient and texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-800 z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-navy-900 uppercase bg-gold-400 rounded-full mb-5">
              Sacramento's Premier Trade School
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Skilled Trade Mastery Begins Here, Build Your Future
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Learn High-Demand Skills Through Affordable, Self-Paced Online Programs and Hands-On Training*. Start Your Career in the Skilled Trades Today.
            </p>
            
            {/* Key Feature Badges - Prominent and larger */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/20 border-2 border-gold-400 rounded-lg p-6 text-center backdrop-blur-sm transform transition-all hover:scale-105">
                <Briefcase className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-2xl">BECOME JOB READY</h3>
              </div>
              <div className="bg-white/20 border-2 border-gold-400 rounded-lg p-6 text-center backdrop-blur-sm transform transition-all hover:scale-105">
                <Clock className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-2xl">ONLINE SELF PACED</h3>
              </div>
              <div className="bg-white/20 border-2 border-gold-400 rounded-lg p-6 text-center backdrop-blur-sm transform transition-all hover:scale-105">
                <Award className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-2xl">HANDS ON TRAINING</h3>
              </div>
            </div>
            
            <Button 
              onClick={scrollToPrograms}
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-xl rounded-lg mx-auto"
            >
              Explore Programs
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
