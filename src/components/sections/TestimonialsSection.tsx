
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/section-heading';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The flexibility of CSTU's program allowed me to keep my day job while studying. The externship experience was invaluable, and I was hired immediately after completing the HVAC program.",
      name: "Michael Johnson",
      role: "HVAC Technician",
      company: "Sacramento Cooling Solutions",
      avatar: "/testimonial-1.jpg",
    },
    {
      quote: "After 10 years in retail, I was looking for a career change. The plumbing program at CSTU was affordable and comprehensive. I now earn twice what I made before.",
      name: "Sarah Martinez",
      role: "Plumbing Contractor",
      company: "Golden State Plumbing",
      avatar: "/testimonial-2.jpg",
    },
    {
      quote: "The welding curriculum was exactly what I needed to start my career. The online portion was convenient, and the hands-on externship gave me real-world experience that employers value.",
      name: "David Wilson",
      role: "Certified Welder",
      company: "Central Valley Manufacturing",
      avatar: "/testimonial-3.jpg",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Student Success Stories"
          title="Hear From Our Graduates"
          description="Our graduates have gone on to build successful careers in their chosen trades. Here's what they have to say about their experience with CSTU."
          centered={true}
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative"
            >
              <div className="absolute top-6 right-6 text-gold-400">
                <Quote className="h-10 w-10 transform rotate-180 opacity-20" />
              </div>
              
              <p className="text-navy-600 mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-navy-700">{testimonial.name}</h4>
                  <p className="text-sm text-navy-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
