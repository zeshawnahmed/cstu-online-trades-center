
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ProgramCard from '@/components/ui/program-card';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: 'HVAC Program',
      description: 'Learn essential skills to become job-ready in heating, ventilation, and air conditioning systems.',
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
      title: 'Electrician Program',
      description: 'Learn essential skills to become job-ready for electrical installation, maintenance, and repair.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'Electrician Certification',
      imageUrl: '/plumbing-program.jpg', // Reusing the image for now
      slug: 'electrician',
      keyFeatures: [
        'Learn Essential Skills To Become Job-Ready in Electrical',
        'Self Paced, Online Learning',
        'Connect with Local Cohort',
        'Hands-On Externship with Local Professional*'
      ],
      salaryInfo: {
        median: '$60,240',
        growth: '7%',
        period: '2022-2032'
      }
    }
  ];

  return (
    <section id="programs-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Programs"
          title="Industry-Leading Trade Skills Training"
          description="Our comprehensive, affordable programs prepare you for high-demand entry-level careers in the skilled trades with a unique blend of online learning and hands-on experience."
          centered={true}
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
          <Link to="/apply">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-600 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-lg text-xl"
            >
              APPLY NOW
            </motion.button>
          </Link>
          <p className="text-sm text-gray-500 mt-3">*Externship placement assistance available upon program completion and subject to industry demand</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
