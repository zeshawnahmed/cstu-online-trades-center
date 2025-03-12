
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/section-heading';
import ProgramCard from '@/components/ui/program-card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp } from 'lucide-react';

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
      keyFeatures: [
        'Self-Paced Learning',
        'Fully Online for Busy Individuals',
        'Hands-On Externship Experience'
      ],
      salaryInfo: {
        median: '$60,590',
        growth: '5%',
        period: '2022-2032'
      }
    },
    {
      title: 'Plumbing',
      description: 'Master the skills to install and repair pipes, fixtures, and other plumbing systems.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'Plumbing Certification',
      imageUrl: '/plumbing-program.jpg',
      slug: 'plumbing',
      keyFeatures: [
        'Self-Paced Learning',
        'Fully Online for Busy Individuals',
        'Hands-On Externship Experience'
      ],
      salaryInfo: {
        median: '$63,350',
        growth: '2%',
        period: '2022-2032'
      }
    },
    {
      title: 'Welding',
      description: 'Learn various welding techniques and metal fabrication skills for a career in manufacturing and construction.',
      price: '$2,500',
      duration: 'Self-paced',
      certification: 'Welding Certification',
      imageUrl: '/welding-program.jpg',
      slug: 'welding',
      keyFeatures: [
        'Self-Paced Learning',
        'Fully Online for Busy Individuals',
        'Hands-On Externship Experience'
      ],
      salaryInfo: {
        median: '$47,540',
        growth: '1%', 
        period: '2022-2032'
      }
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
        
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold-100 text-gold-600 p-3 rounded-full">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-700">2025 Salary Data</h3>
            </div>
            <p className="text-navy-600 mb-4">
              Skilled trades continue to offer stable careers with competitive salaries. 
              Our data is sourced from the Bureau of Labor Statistics' latest projections.
            </p>
            <p className="text-sm text-navy-500">Source: U.S. Bureau of Labor Statistics, 2023</p>
          </motion.div>
          
          {programs.map((program, index) => (
            <motion.div
              key={`salary-${program.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
            >
              <h3 className="text-xl font-bold text-navy-700 mb-3">{program.title}</h3>
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-5 w-5 text-gold-500" />
                <span className="text-lg font-bold text-navy-700">Median Annual Salary: {program.salaryInfo.median}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-gold-500" />
                <span className="text-sm text-navy-600">Projected Growth: {program.salaryInfo.growth} ({program.salaryInfo.period})</span>
              </div>
            </motion.div>
          ))}
        </div>
        
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
