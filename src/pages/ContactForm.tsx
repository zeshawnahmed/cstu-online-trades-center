
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interestedInFinancialAid: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://nlaxxynsulaytdstazmz.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          interestedInFinancialAid: formData.interestedInFinancialAid,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();
      console.log('Contact form submitted successfully:', result);
      
      setIsSubmitted(true);
      toast({
        title: language === 'en' ? "Message Sent" : "Mensaje Enviado",
        description: language === 'en' ? "Your message has been received. We'll get back to you soon." : "Tu mensaje ha sido recibido. Nos pondremos en contacto contigo pronto.",
      });
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: language === 'en' ? "Submission Error" : "Error de Envío",
        description: language === 'en' 
          ? "There was a problem sending your message. Please try again." 
          : "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
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
                  <h1 className="text-3xl font-bold text-navy-700 mb-6 text-center">
                    {language === 'en' ? "Contact Us" : "Contáctanos"}
                  </h1>
                  <p className="text-navy-600 mb-8 text-center">
                    {language === 'en' 
                      ? "Have questions about our programs? Send us a message and we'll get back to you as soon as possible."
                      : "¿Tienes preguntas sobre nuestros programas? Envíanos un mensaje y te responderemos lo antes posible."}
                  </p>
                  
                  {/* Financial Aid Info Alert */}
                  <div className="bg-gold-50 border border-gold-200 rounded-lg p-4 mb-8 flex items-start">
                    <Info className="h-5 w-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-navy-700">
                      {language === 'en' 
                        ? "Interested in Financial Aid? Let us know and we'll provide you with all available options."
                        : "¿Interesado en ayuda financiera? Háganoslo saber y le proporcionaremos todas las opciones disponibles."}
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-navy-700 font-medium mb-2">
                        {language === 'en' ? "Your Name" : "Tu Nombre"}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-navy-700 font-medium mb-2">
                        {language === 'en' ? "Email Address" : "Correo Electrónico"}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-navy-700 font-medium mb-2">
                        {language === 'en' ? "Phone Number" : "Número de Teléfono"}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-navy-700 font-medium mb-2">
                        {language === 'en' ? "Message" : "Mensaje"}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="interestedInFinancialAid"
                        name="interestedInFinancialAid"
                        checked={formData.interestedInFinancialAid}
                        onChange={handleCheckboxChange}
                        className="h-5 w-5 text-gold-500 rounded border-gray-300 focus:ring-gold-400 mt-1"
                      />
                      <label htmlFor="interestedInFinancialAid" className="ml-3 block text-navy-700">
                        {language === 'en' 
                          ? "I'm interested in learning about financial aid options"
                          : "Estoy interesado en conocer las opciones de ayuda financiera"}
                      </label>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting 
                          ? (language === 'en' ? "Sending..." : "Enviando...") 
                          : (language === 'en' ? "Send Message" : "Enviar Mensaje")}
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy-700 mb-4">
                    {language === 'en' ? "Thank You!" : "¡Gracias!"}
                  </h2>
                  <p className="text-xl text-navy-600 mb-8">
                    {language === 'en'
                      ? "Your message has been sent. We'll get back to you soon!"
                      : "Tu mensaje ha sido enviado. ¡Nos pondremos en contacto contigo pronto!"}
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="bg-navy-600 hover:bg-navy-700 text-white font-medium"
                  >
                    {language === 'en' ? "Return to Home" : "Volver al Inicio"}
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

export default ContactForm;
