
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    programInterest: '',
    howDidYouHear: '',
    referrerName: '',
    referralCode: '',
    otherSource: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format as (xxx) xxx - xxxx
    if (digits.length <= 3) {
      return digits.length > 0 ? `(${digits}` : '';
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} - ${digits.slice(6, 10)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset conditional fields based on selection
    if (name === 'howDidYouHear') {
      if (value !== 'referred') {
        setFormData(prev => ({ ...prev, [name]: value, referrerName: '', referralCode: '' }));
      }
      if (value !== 'other') {
        setFormData(prev => ({ ...prev, [name]: value, otherSource: '' }));
      }
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.programInterest || !formData.message.trim() || !formData.howDidYouHear) {
      toast({
        title: language === 'en' ? "Missing Required Fields" : "Campos Requeridos Faltantes",
        description: language === 'en' 
          ? "Please fill out all required fields before submitting." 
          : "Por favor complete todos los campos requeridos antes de enviar.",
        variant: "destructive",
      });
      return;
    }
    
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
          programInterest: formData.programInterest,
          howDidYouHear: formData.howDidYouHear,
          referrerName: formData.referrerName,
          referralCode: formData.referralCode,
          otherSource: formData.otherSource,
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
      <Helmet>
        <title>{language === 'en' 
          ? 'Contact Sacramento Trade School | American Institute of Trades | Enroll Today'
          : 'Contacto Escuela de Oficios Sacramento | Instituto Americano de Oficios'
        }</title>
        <meta name="description" content={language === 'en'
          ? 'Contact American Institute of Trades - Sacramento\'s #1 trade school. Get information about HVAC training programs, financial aid, and enrollment. Start your trade career today!'
          : 'Contacta al Instituto Americano de Oficios - La escuela de oficios #1 de Sacramento. Obtén información sobre programas de capacitación HVAC.'
        } />
        <meta name="keywords" content={language === 'en'
          ? 'contact Sacramento trade school, enroll HVAC training Sacramento, trade school admissions Sacramento, AIT contact, American Institute of Trades phone, HVAC school enrollment Sacramento'
          : 'contacto escuela de oficios Sacramento, inscripción HVAC Sacramento'
        } />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.americanskilledtradeuniversity.edu/contact" />
        
        <meta property="og:title" content={language === 'en' ? 'Contact Sacramento Trade School | American Institute of Trades' : 'Contacto Escuela de Oficios Sacramento'} />
        <meta property="og:description" content={language === 'en' ? 'Contact AIT for HVAC training information and enrollment in Sacramento' : 'Contacta a AIT para información de capacitación HVAC'} />
        <meta property="og:url" content="https://www.americanskilledtradeuniversity.edu/contact" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact American Institute of Trades",
              "description": "Contact Sacramento's premier trade school for HVAC training information and enrollment",
              "url": "https://www.americanskilledtradeuniversity.edu/contact",
              "mainEntity": {
                "@type": "EducationalOrganization",
                "@id": "https://www.americanskilledtradeuniversity.edu/#organization"
              }
            }
          `}
        </script>
      </Helmet>
      <section className="py-16 sm:py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-5 sm:p-8 rounded-xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {!isSubmitted ? (
                <>
                  <h1 className="text-2xl sm:text-3xl font-bold text-navy-700 mb-4 sm:mb-6 text-center">
                    {language === 'en' ? "Contact Us" : "Contáctanos"}
                  </h1>
                  <p className="text-sm sm:text-base text-navy-600 mb-6 sm:mb-8 text-center px-2 sm:px-0">
                    {language === 'en' 
                      ? "Have you made the Decision to Level Up? Please fill out the form completely below and an admissions rep will be in touch."
                      : "¿Has tomado la Decisión de Superarte? Por favor completa el formulario a continuación y un representante de admisiones se pondrá en contacto."}
                  </p>
                  
                  {/* Financial Aid Info Alert - Mobile Optimized */}
                  <div className="bg-gold-50 border border-gold-200 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 flex items-start">
                    <Info className="h-5 w-5 text-gold-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                    <p className="text-sm sm:text-base text-navy-700">
                      {language === 'en' 
                        ? "Interested in Financial Aid? Let us know and we'll provide you with all available options. "
                        : "¿Interesado en ayuda financiera? Háganoslo saber y le proporcionaremos todas las opciones disponibles. "}
                      <Link to="/financial-aid" className="text-gold-600 hover:text-gold-700 underline font-medium">
                        {language === 'en' ? 'View Financial Aid Options' : 'Ver Opciones de Ayuda Financiera'}
                      </Link>
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-navy-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                        {language === 'en' ? "Your Name" : "Tu Nombre"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-navy-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                        {language === 'en' ? "Email Address" : "Correo Electrónico"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-navy-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                        {language === 'en' ? "Phone Number" : "Número de Teléfono"} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="programInterest" className="block text-navy-700 font-medium mb-2">
                        {language === 'en' ? "Program of Interest" : "Programa de Interés"} <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.programInterest}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, programInterest: value }))}
                        required
                      >
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white">
                          <SelectValue placeholder={language === 'en' ? "Select a program" : "Selecciona un programa"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
                          <SelectItem value="hvac-technician">
                            {language === 'en' ? 'HVAC Technician Program' : 'Programa de Técnico HVAC'}
                          </SelectItem>
                          <SelectItem value="pharmacy-technician">
                            {language === 'en' ? 'California Pharmacy Technician Program (Next Start Date January 1, 2026)' : 'Programa de Técnico de Farmacia de California (Próxima Fecha de Inicio 1 de Enero, 2026)'}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-navy-700 font-medium mb-2">
                        {language === 'en' ? "Message" : "Mensaje"} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={language === 'en' ? "Please tell us more about yourself and career goals" : "Por favor cuéntanos más sobre ti y tus metas profesionales"}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="howDidYouHear" className="block text-navy-700 font-medium mb-2 text-sm sm:text-base">
                        {language === 'en' ? "How did you learn about us?" : "¿Cómo te enteraste de nosotros?"} <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.howDidYouHear}
                        onValueChange={(value) => handleSelectChange('howDidYouHear', value)}
                        required
                      >
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white">
                          <SelectValue placeholder={language === 'en' ? "Select an option" : "Selecciona una opción"} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-300 shadow-lg z-50">
                          <SelectItem value="craigslist">Craigslist</SelectItem>
                          <SelectItem value="indeed">Indeed</SelectItem>
                          <SelectItem value="school-counselor">{language === 'en' ? 'School Counselor' : 'Consejero Escolar'}</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="referred">{language === 'en' ? 'I was Referred' : 'Fui Referido'}</SelectItem>
                          <SelectItem value="other">{language === 'en' ? 'Other' : 'Otro'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {formData.howDidYouHear === 'referred' && (
                      <div className="space-y-4 p-4 bg-gold-50 border border-gold-200 rounded-lg">
                        <div>
                          <label htmlFor="referrerName" className="block text-navy-700 font-medium mb-2 text-sm sm:text-base">
                            {language === 'en' ? "Who referred you?" : "¿Quién te refirió?"}
                          </label>
                          <input
                            type="text"
                            id="referrerName"
                            name="referrerName"
                            value={formData.referrerName}
                            onChange={handleChange}
                            placeholder={language === 'en' ? "Enter referrer's name" : "Ingresa el nombre de quien te refirió"}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm sm:text-base"
                          />
                        </div>
                        <div>
                          <label htmlFor="referralCode" className="block text-navy-700 font-medium mb-2 text-sm sm:text-base">
                            {language === 'en' ? "Referral Code (if applicable)" : "Código de Referido (si aplica)"}
                          </label>
                          <input
                            type="text"
                            id="referralCode"
                            name="referralCode"
                            value={formData.referralCode}
                            onChange={handleChange}
                            placeholder={language === 'en' ? "Enter referral code" : "Ingresa el código de referido"}
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm sm:text-base"
                          />
                        </div>
                      </div>
                    )}
                    
                    {formData.howDidYouHear === 'other' && (
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <label htmlFor="otherSource" className="block text-navy-700 font-medium mb-2 text-sm sm:text-base">
                          {language === 'en' ? "Please specify where you learned about us" : "Por favor especifica dónde te enteraste de nosotros"}
                        </label>
                        <input
                          type="text"
                          id="otherSource"
                          name="otherSource"
                          value={formData.otherSource}
                          onChange={handleChange}
                          placeholder={language === 'en' ? "e.g., Friend, YouTube, Google, etc." : "ej., Amigo, YouTube, Google, etc."}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    )}
                    
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
