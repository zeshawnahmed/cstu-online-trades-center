
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ProgramCard from '@/components/ui/program-card';
import { Button } from '@/components/ui/button';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'HVAC Technician',
      description: 'Learn to install, maintain, and repair heating, ventilation, and air conditioning systems.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'HVAC Certification',
      imageUrl: '/hvac-program.jpg',
      slug: 'hvac',
    },
    {
      title: 'Plumbing',
      description: 'Master the skills to install and repair pipes, fixtures, and other plumbing systems.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'Plumbing Certification',
      imageUrl: '/plumbing-program.jpg',
      slug: 'plumbing',
    },
    {
      title: 'Welding',
      description: 'Learn various welding techniques and metal fabrication skills for a career in manufacturing and construction.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'Welding Certification',
      imageUrl: '/welding-program.jpg',
      slug: 'welding',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Programs"
          title="Industry-Leading Trade Skills Training"
          description="Our comprehensive, affordable programs prepare you for high-demand careers in the skilled trades with a unique blend of online learning and hands-on experience."
          centered={true}
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-navy-600 hover:bg-navy-700 text-white font-medium px-8 py-6">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
