
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Award, DollarSign, BookOpen, Users, ListChecks } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';
import FeatureCard from '@/components/ui/feature-card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Self-Paced Learning',
      description: 'Study on your own schedule with our flexible online platform. Complete coursework when it works for you.',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Earn recognized credentials that demonstrate your competence and increase your employability.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Tuition',
      description: 'All programs available at a flat rate of $2,500 with payment plans and financial assistance options.',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Detailed, up-to-date course materials covering both theoretical knowledge and practical skills.',
    },
    {
      icon: Users,
      title: 'Practical Externships',
      description: 'Gain real-world experience through our partnered externship program with local businesses.',
    },
    {
      icon: ListChecks,
      title: 'Career Support',
      description: 'Access job search support, resume building, and interview preparation resources.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Program Benefits"
          title="Why Choose CSTU?"
          description="Our innovative approach to trade education offers numerous advantages for students looking to start or advance their careers."
          centered={true}
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
