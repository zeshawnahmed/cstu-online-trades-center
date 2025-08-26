
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Users } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    {
      icon: <Clock className="h-5 w-5 text-gold-500" />,
      text: 'Self-paced, flexible online learning'
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-gold-500" />,
      text: 'Job-ready skills and certifications'
    },
    {
      icon: <Users className="h-5 w-5 text-gold-500" />,
      text: 'Job Site/Field training through externships'
    },
    {
      icon: <Award className="h-5 w-5 text-gold-500" />,
      text: 'Industry-recognized credentials'
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="/sacramento-campus.jpg" 
                  alt="California Skilled Trades University Campus" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-10 -right-10 bg-navy-700 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold mb-2">Sacramento Roots</p>
                <p className="text-gray-300">
                  Founded in the heart of California's capital, with a mission to provide accessible skilled trades education.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="About CSTU"
              title="California's Leading Online Trade School"
              description="Founded in Sacramento, California Skilled Trades University (CSTU) is committed to providing affordable, flexible education in high-demand trade skills. Our unique model combines comprehensive online learning with practical Field/Job Site Experiences."
              className="mb-6"
            />
            
            <p className="text-navy-600 mb-6">
              Our programs are designed with working adults in mind, offering self-paced learning that fits your schedule while ensuring you develop the practical skills employers are looking for.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mr-3 mt-1">{feature.icon}</div>
                  <p className="text-navy-700">{feature.text}</p>
                </motion.div>
              ))}
            </div>
            
            <Button className="bg-navy-600 hover:bg-navy-700 text-white font-medium">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
