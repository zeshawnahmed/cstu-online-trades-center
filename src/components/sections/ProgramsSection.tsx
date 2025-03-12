
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ProgramCard from '@/components/ui/program-card';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'HVAC Program',
      description: 'Learn to install, maintain, and repair heating, ventilation, and air conditioning systems.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'HVAC Certification',
      imageUrl: '/hvac-program.jpg',
      slug: 'hvac',
      keyFeatures: [
        'Learn Essential Skills To Become Job-Ready in HVAC',
        'Self Paced, Online Learning',
        'Connect with Local Cohort',
        'Hands-On Externship with Local Professional*'
      ],
      salaryInfo: {
        median: '$60,590',
        growth: '5%',
        period: '2022-2032'
      }
    },
    {
      title: 'Plumbing Program',
      description: 'Master the skills to install and repair pipes, fixtures, and other plumbing systems.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'Plumbing Certification',
      imageUrl: '/plumbing-program.jpg',
      slug: 'plumbing',
      keyFeatures: [
        'Learn Essential Skills To Become Job-Ready in Plumbing',
        'Self Paced, Online Learning',
        'Connect with Local Cohort',
        'Hands-On Externship with Local Professional*'
      ],
      salaryInfo: {
        median: '$63,350',
        growth: '2%',
        period: '2022-2032'
      }
    }
  ];

  return (
    <section id="programs-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Programs"
          title="Industry-Leading Trade Skills Training"
          description="Our comprehensive, affordable programs prepare you for high-demand careers in the skilled trades with a unique blend of online learning and hands-on experience."
          centered={true}
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
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
        
        <div className="mt-16 text-center">
          <Link to="/apply">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-600 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-lg text-xl"
            >
              APPLY NOW
            </motion.button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">*Externship placement assistance available upon program completion</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
