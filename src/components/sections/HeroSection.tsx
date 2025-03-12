
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient and texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-800 z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20 md:py-36">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center">
          {/* Text Column */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-navy-900 uppercase bg-gold-400 rounded-full mb-5">
                Sacramento's Premier Trade School
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Master a Skilled Trade, Build Your Future
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Learn HVAC, Plumbing, or Welding through affordable, self-paced online programs with hands-on externships. Start your career in the skilled trades today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-lg rounded-lg">
                  Explore Programs
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg">
                  Request Information
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Image Column with Floating Animation */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="/hero-image.jpg" 
                  alt="Student working on HVAC system" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
              </div>
              
              {/* Stats Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 glassmorphism rounded-xl p-4 max-w-xs"
              >
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2">
                    <p className="text-navy-600 text-sm">Programs</p>
                    <p className="text-2xl font-bold text-navy-700">3</p>
                  </div>
                  <div className="text-center p-2">
                    <p className="text-navy-600 text-sm">Cost</p>
                    <p className="text-2xl font-bold text-navy-700">$2,500</p>
                  </div>
                  <div className="text-center p-2 col-span-2">
                    <p className="text-navy-600 text-sm">Job Placement Rate</p>
                    <p className="text-2xl font-bold text-navy-700">92%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
          <ChevronRight className="h-6 w-6 text-white/60 transform rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
