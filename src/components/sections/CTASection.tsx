
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-navy-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute left-0 top-0 w-96 h-96 bg-gold-400 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-navy-900 uppercase bg-gold-400 rounded-full mb-5">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Future in the Skilled Trades?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey toward a rewarding career with our affordable, flexible training programs. Apply now or contact us for more information.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-lg">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Request Information
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
