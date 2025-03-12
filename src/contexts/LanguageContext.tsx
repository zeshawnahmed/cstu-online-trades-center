
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define all the translatable text in the application
export const translations = {
  en: {
    // Navbar
    home: "Home",
    programs: "Programs",
    applyNow: "Apply Now",
    
    // Hero Section
    heroTitle: "Skilled Trade Mastery Begins Here, Build Your Future",
    heroSubtitle: "Learn High-Demand Skills Through Affordable, Self-Paced Online Programs and Hands-On Training. Start Your Career in the Skilled Trades Today.",
    becomeJobReady: "BECOME JOB READY",
    onlineSelfPaced: "ONLINE SELF PACED",
    handsOnTraining: "HANDS-ON TRAINING",
    explorePrograms: "EXPLORE PROGRAMS",
    
    // Programs Section
    programsTitle: "Industry-Leading Skilled Trades Training",
    programsSubtitle: "Our Programs",
    programsDescription: "Our comprehensive, affordable programs prepare you for high-demand entry level careers in the skilled trades with a unique blend of online learning and hands-on experience.",
    learnMore: "Learn More",
    applyNowButton: "APPLY NOW",
    externshipNote: "*Externship placement assistance available upon program completion and subject to industry demand",
    
    // Program Cards
    hvacTitle: "HVAC Program",
    hvacDescription: "Learn essential skills to become job-ready in heating, ventilation, and air conditioning systems for entry level positions.",
    electricianTitle: "Electrician Program",
    electricianDescription: "Learn essential skills to become job-ready for electrical installation, maintenance, and repair in entry level positions.",
    programHighlights: "Program Highlights:",
    jobStatistics: "2025 Job Statistics:",
    medianSalary: "Median Annual Salary:",
    projectedGrowth: "Projected Growth:",
    
    // Application Form
    applyToCStu: "Apply to CSTU",
    applicationFormText: "Complete this form to receive an application and begin your journey in the skilled trades.",
    firstName: "First Name*",
    lastName: "Last Name*",
    emailAddress: "Email Address*",
    phoneNumber: "Phone Number*",
    programOfInterest: "Program of Interest*",
    selectProgram: "Select a program",
    hvacProgram: "HVAC Program",
    electricianProgram: "Electrician Program",
    submitApplication: "Submit Application Request",
    submitting: "Submitting...",
    
    // Thank You Message
    thankYou: "Thank You!",
    applicationSubmitted: "Your application request has been submitted. We'll send you the complete application package via email shortly.",
    returnToHome: "Return to Home",
    
    // Program Detail
    backToPrograms: "Back to Programs",
    handsOnExternship: "Hands-on Externship",
    programOverview: "Program Overview",
    aboutOurProgram: "About Our",
    programHighlightsTitle: "Program Highlights",
    jobMarketOutlook: "2025 Job Market Outlook",
    medianAnnualSalary: "Median Annual Salary",
    industryGrowth: "Industry Growth",
    jobDemand: "Job Demand",
    whatYouWillLearn: "What You'll Learn",
    programCurriculum: "Program Curriculum",
    curriculumDescription: "Our focused curriculum is designed to provide the essential skills needed to become job-ready for entry level positions.",
    readyToStartCareer: "Ready to Start Your Career?",
    applyNowFor: "Apply now for our",
    gainEssentialSkills: "program and gain the essential skills needed for entry level positions.",
    
    // Program Not Found
    programNotFound: "Program Not Found",
    programNotFoundDesc: "The program you are looking for doesn't exist or has been moved."
  },
  es: {
    // Navbar
    home: "Inicio",
    programs: "Programas",
    applyNow: "Aplicar Ahora",
    
    // Hero Section
    heroTitle: "El Dominio de Oficios Especializados Comienza Aquí, Construye Tu Futuro",
    heroSubtitle: "Aprende Habilidades de Alta Demanda a Través de Programas en Línea Asequibles y Autoguiados con Capacitación Práctica. Comienza Tu Carrera en Oficios Especializados Hoy.",
    becomeJobReady: "PREPÁRATE PARA TRABAJAR",
    onlineSelfPaced: "APRENDIZAJE A TU RITMO",
    handsOnTraining: "CAPACITACIÓN PRÁCTICA",
    explorePrograms: "EXPLORAR PROGRAMAS",
    
    // Programs Section
    programsTitle: "Capacitación Líder en Oficios Especializados",
    programsSubtitle: "Nuestros Programas",
    programsDescription: "Nuestros programas completos y asequibles te preparan para carreras de nivel inicial de alta demanda en oficios especializados con una combinación única de aprendizaje en línea y experiencia práctica.",
    learnMore: "Más Información",
    applyNowButton: "APLICAR AHORA",
    externshipNote: "*Asistencia para colocación en prácticas disponible al completar el programa y sujeta a la demanda de la industria",
    
    // Program Cards
    hvacTitle: "Programa de HVAC",
    hvacDescription: "Aprende habilidades esenciales para estar listo para trabajar en sistemas de calefacción, ventilación y aire acondicionado en puestos de nivel inicial.",
    electricianTitle: "Programa de Electricista",
    electricianDescription: "Aprende habilidades esenciales para estar listo para la instalación, mantenimiento y reparación eléctrica en puestos de nivel inicial.",
    programHighlights: "Aspectos Destacados del Programa:",
    jobStatistics: "Estadísticas Laborales 2025:",
    medianSalary: "Salario Anual Medio:",
    projectedGrowth: "Crecimiento Proyectado:",
    
    // Application Form
    applyToCStu: "Aplicar a CSTU",
    applicationFormText: "Completa este formulario para recibir una solicitud y comenzar tu viaje en los oficios especializados.",
    firstName: "Nombre*",
    lastName: "Apellido*",
    emailAddress: "Correo Electrónico*",
    phoneNumber: "Número de Teléfono*",
    programOfInterest: "Programa de Interés*",
    selectProgram: "Selecciona un programa",
    hvacProgram: "Programa de HVAC",
    electricianProgram: "Programa de Electricista",
    submitApplication: "Enviar Solicitud",
    submitting: "Enviando...",
    
    // Thank You Message
    thankYou: "¡Gracias!",
    applicationSubmitted: "Tu solicitud ha sido enviada. Te enviaremos el paquete de solicitud completo por correo electrónico en breve.",
    returnToHome: "Volver al Inicio",
    
    // Program Detail
    backToPrograms: "Volver a Programas",
    handsOnExternship: "Prácticas Presenciales",
    programOverview: "Descripción del Programa",
    aboutOurProgram: "Sobre Nuestro Programa de",
    programHighlightsTitle: "Aspectos Destacados del Programa",
    jobMarketOutlook: "Perspectivas del Mercado Laboral 2025",
    medianAnnualSalary: "Salario Anual Medio",
    industryGrowth: "Crecimiento de la Industria",
    jobDemand: "Demanda Laboral",
    whatYouWillLearn: "Lo Que Aprenderás",
    programCurriculum: "Plan de Estudios",
    curriculumDescription: "Nuestro plan de estudios está diseñado para proporcionar las habilidades esenciales necesarias para estar listo para trabajar en puestos de nivel inicial.",
    readyToStartCareer: "¿Listo para Comenzar Tu Carrera?",
    applyNowFor: "Aplica ahora para nuestro programa de",
    gainEssentialSkills: "y obtén las habilidades esenciales necesarias para puestos de nivel inicial.",
    
    // Program Not Found
    programNotFound: "Programa No Encontrado",
    programNotFoundDesc: "El programa que estás buscando no existe o ha sido movido."
  }
};

type LanguageContextType = {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: keyof typeof translations.en) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
