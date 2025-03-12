
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, this would send data to a backend service
      // For demo purposes, we'll simulate a successful submission
      console.log('Form submitted:', formData);
      
      // This would be where you'd actually send the data to peaceofmindcollabs@gmail.com
      // through a secure backend endpoint

      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "Your application request has been received.",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Layout>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {!isSubmitted ? (
                <>
                  <h1 className="text-3xl font-bold text-navy-700 mb-6 text-center">Apply to CSTU</h1>
                  <p className="text-navy-600 mb-8 text-center">
                    Complete this form to receive an application and more information about our programs.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-navy-700 font-medium mb-2">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-navy-700 font-medium mb-2">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-navy-700 font-medium mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-navy-700 font-medium mb-2">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="program" className="block text-navy-700 font-medium mb-2">
                        Program of Interest*
                      </label>
                      <select
                        id="program"
                        name="program"
                        required
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      >
                        <option value="">Select a program</option>
                        <option value="hvac">HVAC Program</option>
                        <option value="electrician">Electrician Program</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application Request'}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy-700 mb-4">Thank You!</h2>
                  <p className="text-xl text-navy-600 mb-8">
                    Your application request has been submitted. We'll send you the complete application package via email shortly.
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="bg-navy-600 hover:bg-navy-700 text-white font-medium"
                  >
                    Return to Home
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationForm;
