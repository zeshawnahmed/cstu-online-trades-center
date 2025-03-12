
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Award, Users, BookOpen, Calendar, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/ui/section-heading';

interface ProgramDetail {
  title: string;
  description: string;
  fullDescription: string[];
  price: string;
  duration: string;
  certification: string;
  imageUrl: string;
  curriculum: string[];
  career: string[];
}

const programs: Record<string, ProgramDetail> = {
  hvac: {
    title: 'HVAC Technician',
    description: 'Learn to install, maintain, and repair heating, ventilation, and air conditioning systems.',
    fullDescription: [
      'Our comprehensive HVAC program provides the knowledge and skills needed to excel in heating, ventilation, and air conditioning installation, maintenance, and repair.',
      'Through a combination of online theoretical learning and hands-on externship experience, students will develop a deep understanding of HVAC systems, troubleshooting techniques, and industry best practices.',
      'Graduates will be prepared for entry-level positions in residential and commercial HVAC services with the foundational skills employers are looking for.'
    ],
    price: '$2,500',
    duration: 'Self-paced',
    certification: 'HVAC Technician Certification',
    imageUrl: '/hvac-program.jpg',
    curriculum: [
      'HVAC Fundamentals and Safety',
      'Heating Systems Installation and Service',
      'Air Conditioning and Refrigeration',
      'Ventilation Systems',
      'Electrical Components and Controls',
      'Troubleshooting and Maintenance',
      'Energy Efficiency and Green Technology',
      'Customer Service and Business Operations'
    ],
    career: [
      'HVAC Technician',
      'HVAC Installer',
      'HVAC Service Technician',
      'Refrigeration Technician',
      'HVAC Maintenance Specialist'
    ]
  },
  plumbing: {
    title: 'Plumbing',
    description: 'Master the skills to install and repair pipes, fixtures, and other plumbing systems.',
    fullDescription: [
      'The plumbing program at CSTU provides comprehensive training in the installation, maintenance, and repair of plumbing systems for residential and commercial buildings.',
      'Students will learn about pipe system design, plumbing fixtures, water distribution, drainage systems, and plumbing codes and regulations.',
      'Through our combination of online coursework and hands-on externship experience, graduates will develop the technical skills needed to begin a rewarding career in the plumbing industry.'
    ],
    price: '$2,500',
    duration: 'Self-paced',
    certification: 'Plumbing Technology Certification',
    imageUrl: '/plumbing-program.jpg',
    curriculum: [
      'Plumbing Safety and Tools',
      'Blueprint Reading and Math for Plumbers',
      'Pipe Systems and Materials',
      'Fixture Installation and Repair',
      'Water Distribution Systems',
      'Drainage and Vent Systems',
      'Plumbing Codes and Regulations',
      'Troubleshooting and Emergency Repairs'
    ],
    career: [
      'Residential Plumber',
      'Commercial Plumber',
      'Plumbing Service Technician',
      'Pipefitter Assistant',
      'Plumbing Maintenance Technician'
    ]
  },
  welding: {
    title: 'Welding',
    description: 'Learn various welding techniques and metal fabrication skills for a career in manufacturing and construction.',
    fullDescription: [
      'The welding program at CSTU provides students with the knowledge and skills needed to perform various welding techniques used in manufacturing, construction, and repair environments.',
      'Students will learn about different welding processes, metal properties, blueprint reading, and safety practices through our online curriculum and hands-on externship experience.',
      'Graduates will be prepared to pursue entry-level positions in a variety of industries that require skilled welders, including construction, manufacturing, and fabrication.'
    ],
    price: '$2,500',
    duration: 'Self-paced',
    certification: 'Welding Technology Certification',
    imageUrl: '/welding-program.jpg',
    curriculum: [
      'Welding Safety and Equipment',
      'Blueprint Reading for Welders',
      'Shielded Metal Arc Welding (SMAW)',
      'Gas Metal Arc Welding (GMAW/MIG)',
      'Gas Tungsten Arc Welding (GTAW/TIG)',
      'Flux Cored Arc Welding (FCAW)',
      'Metal Cutting and Fabrication',
      'Welding Inspection and Testing'
    ],
    career: [
      'Production Welder',
      'MIG/TIG Welder',
      'Fabrication Welder',
      'Welding Technician',
      'Metal Fabricator'
    ]
  }
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? programs[slug] : null;
  
  if (!program) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-navy-700 mb-4">Program Not Found</h1>
            <p className="text-navy-600 mb-8">
              The program you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button className="bg-navy-600 hover:bg-navy-700 text-white">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-navy-700 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src={program.imageUrl} 
            alt={program.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-700 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Programs
          </Link>
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 text-sm font-medium tracking-wider text-navy-900 uppercase bg-gold-400 rounded-full mb-4">
                Professional Certification Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {program.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {program.description}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.price}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-gold-400" />
                  <span>{program.certification}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gold-400" />
                  <span>Hands-on Externship</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                subtitle="Program Overview"
                title={`About Our ${program.title} Program`}
                className="mb-6"
              />
              
              <div className="space-y-4">
                {program.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-navy-600">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-700 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">Self-paced online learning that fits your schedule</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">Comprehensive curriculum covering theory and practical applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">Hands-on externship with industry partners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">Industry-recognized certification preparation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-600">Career services and job placement assistance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="sticky top-24">
                <img 
                  src={program.imageUrl} 
                  alt={program.title}
                  className="w-full h-auto rounded-xl mb-8 shadow-lg"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-navy-50 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-6 w-6 text-navy-600 mr-3" />
                      <h3 className="font-semibold text-navy-700">Enrollment</h3>
                    </div>
                    <p className="text-navy-600">
                      Open enrollment - start anytime
                    </p>
                  </div>
                  
                  <div className="bg-navy-50 p-5 rounded-xl">
                    <div className="flex items-center mb-3">
                      <BookOpen className="h-6 w-6 text-navy-600 mr-3" />
                      <h3 className="font-semibold text-navy-700">Format</h3>
                    </div>
                    <p className="text-navy-600">
                      Online + hands-on externship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What You'll Learn"
            title="Program Curriculum"
            description="Our comprehensive curriculum is designed to provide both theoretical knowledge and practical skills needed for success in the field."
            centered={true}
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {program.curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold-100 text-gold-600 rounded-full mr-4 font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-navy-700">{item}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Career Paths"
            title="Your Future in the Industry"
            description="Graduates of our program will be prepared for a variety of entry-level positions within the industry."
            centered={true}
            className="mb-12"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.career.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-5 bg-navy-50 rounded-xl text-center"
                >
                  <h3 className="font-medium text-navy-700">{career}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-navy-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Enrollment is open now for our {program.title} program. Take the first step toward your new career today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-medium px-8 py-6 text-lg">
                Apply Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Contact an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramDetail;
