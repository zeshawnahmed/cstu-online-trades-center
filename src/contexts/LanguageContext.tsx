
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define all the translatable text in the application
export const translations = {
  en: {
    // Navbar
    home: "Home",
    programs: "Programs",
    applyNow: "Apply Now",
    
    // Hero Section
    heroTitle: "Skilled Trade Mastery and Prosperity Begins Here.",
    heroSubtitle: "Learn High-Demand Skills Through Affordable, Self-Paced Online Programs and Job Site/Field Training. Start Your Career in the Skilled Trades Today.",
    becomeJobReady: "BECOME JOB READY",
    onlineSelfPaced: "ONLINE SELF-PACED & STRUCTURED",
    handsOnTraining: "*Hands-On Skills Training",
    explorePrograms: "EXPLORE PROGRAMS",
    financialAid: "FINANCIAL AID AVAILABLE",
    
    // Programs Section
    programsTitle: "Industry-Leading Skilled Trades Training",
    programsSubtitle: "Our Programs",
    programsDescription: "Our comprehensive, affordable programs prepare you for high-demand entry level careers in the skilled trades with a unique blend of online learning and practical Field/Job Site Experiences.",
    learnMore: "Explore HVAC Curriculum",
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
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    programOfInterest: "Program of Interest",
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
    handsOnExternship: "Practical Externship",
    programOverview: "Program Overview",
    aboutOurProgram: "About Our",
    programHighlightsTitle: "Program Highlights",
    jobMarketOutlook: "2025 Job Market Outlook",
    medianAnnualSalary: "Median Annual Salary",
    industryGrowth: "Industry Growth",
    jobDemand: "Job Demand",
    whatYouWillLearn: "What You'll Learn",
    programCurriculum: "Program Curriculum",
    curriculumDescription: "Our focused curriculum is designed to help you transition with CONFIDENCE into HVAC.",
    readyToStartCareer: "Ready to Start Your Career?",
    applyNowFor: "Apply now for our",
    gainEssentialSkills: "program and gain the essential skills needed for entry level positions.",
    
    // Program Not Found
    programNotFound: "Program Not Found",
    programNotFoundDesc: "The program you are looking for doesn't exist or has been moved.",
    
    // Contact Form
    contactUs: "Contact Us",
    contactFormText: "Have questions about our programs? Send us a message and we'll get back to you as soon as possible.",
    financialAidInfo: "Interested in Financial Aid? Let us know and we'll provide you with all available options.",
    yourName: "Your Name",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent",
    messageReceived: "Your message has been received. We'll get back to you soon.",
    returnHome: "Return to Home",
    
    // About Us Page
    aboutUsTitle: "About California Skilled Trade University",
    aboutUsSubtitle: "Sacramento's Premier Trade School for HVAC and Electrician Training",
    ourStoryTitle: "Our Story",
    ourStoryContent: "Founded in Sacramento with deep roots in the local skilled trades community, California Skilled Trade University was established to address the growing demand for skilled trade professionals in our region. We recognized the need for affordable, practical training that prepares students for real-world success without the burden of excessive student debt.",
    whyTradeSchoolTitle: "Why Choose Trade School?",
    costEffective: "Cost-Effective Education",
    costEffectiveContent: "While traditional 4-year colleges can cost $30,000+ per year, our programs provide focused, industry-relevant training at a fraction of the cost. Complete your training for just $2,500 - without sacrificing quality education.",
    timeEfficient: "Time-Efficient Learning",
    timeEfficientContent: "Why spend 4+ years when you can be job-ready in months? Our self-paced programs are designed to get you trained and into the workforce quickly, earning income rather than accumulating debt.",
    inDemandSkills: "In-Demand, Future-Proof Skills",
    inDemandSkillsContent: "Skilled trades like HVAC and electrical work cannot be outsourced or fully automated. With a growing shortage of qualified professionals, skilled trades offer job security and excellent earning potential for decades to come.",
    sacramentoRoots: "Sacramento Roots, Local Connections",
    sacramentoRootsContent: "As a Sacramento-based trade school, we maintain strong relationships with local employers and contractors. Our externship program connects students with real-world experience and potential employment opportunities right here in the Sacramento area.",
    earningPotentialTitle: "Earning Potential",
    earningPotentialContent: "While many 4-year degrees lead to entry-level positions with modest salaries and significant debt, skilled trades professionals can earn substantial incomes. HVAC technicians in the Sacramento area earn median salaries around $60,590, while electricians earn approximately $60,240 annually - often with opportunities for overtime, advancement, and even business ownership.",
    ourApproachTitle: "Our Approach",
    blendedLearning: "Blended Learning Model",
    blendedLearningContent: "We combine self-paced online learning with practical Field/Job Site Experiences through our externship program, giving you both theoretical knowledge and real-world skills.",
    affordableEducation: "Affordable Education",
    affordableEducationContent: "Our affordable flat-rate tuition makes quality training accessible, with financial aid options available for those who qualify. Call to learn more about pricing.",
    careerFocused: "Career-Focused Curriculum",
    careerFocusedContent: "Every aspect of our programs is designed with one goal in mind: preparing you for immediate employment in your chosen trade.",
    joiningCSTUTitle: "Ready to Join CSTU?",
    joiningCSTUContent: "Take the first step toward a rewarding career in the skilled trades. Apply now or contact us to learn more about how California Skilled Trade University can help you build a successful future without the burden of excessive student debt."
  },
  es: {
    // Navbar
    home: "Inicio",
    programs: "Programas",
    applyNow: "Aplicar Ahora",
    
    // Hero Section
    heroTitle: "El Dominio de Oficios Especializados Comienza Aquí. Construye Tu Futuro.",
    heroSubtitle: "Aprende Habilidades de Alta Demanda a Través de Programas en Línea Asequibles y Autoguiados con Capacitación Práctica. Comienza Tu Carrera en Oficios Especializados Hoy.",
    becomeJobReady: "PREPÁRATE PARA TRABAJAR",
    onlineSelfPaced: "APRENDIZAJE A TU RITMO Y ESTRUCTURADO",
    handsOnTraining: "CAPACITACIÓN PRÁCTICA",
    explorePrograms: "EXPLORAR PROGRAMAS",
    financialAid: "AYUDA FINANCIERA DISPONIBLE",
    
    // Programs Section
    programsTitle: "Capacitación Líder en Oficios Especializados",
    programsSubtitle: "Nuestros Programas",
    programsDescription: "Nuestros programas completos y asequibles te preparan para carreras de nivel inicial de alta demanda en oficios especializados con una combinación única de aprendizaje en línea y experiencia práctica.",
    learnMore: "Explorar Currículo de HVAC",
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
    firstName: "Nombre",
    lastName: "Apellido",
    emailAddress: "Correo Electrónico",
    phoneNumber: "Número de Teléfono",
    programOfInterest: "Programa de Interés",
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
    programNotFoundDesc: "El programa que estás buscando no existe o ha sido movido.",
    
    // Contact Form
    contactUs: "Contáctanos",
    contactFormText: "¿Tienes preguntas sobre nuestros programas? Envíanos un mensaje y te responderemos lo antes posible.",
    financialAidInfo: "¿Interesado en ayuda financiera? Háganoslo saber y le proporcionaremos todas las opciones disponibles.",
    yourName: "Tu Nombre",
    message: "Mensaje",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    messageSent: "Mensaje Enviado",
    messageReceived: "Tu mensaje ha sido recibido. Nos pondremos en contacto contigo pronto.",
    returnHome: "Volver al Inicio",
    
    // About Us Page
    aboutUsTitle: "Acerca de la Universidad de Oficios Especializados de California",
    aboutUsSubtitle: "La Principal Escuela de Oficios de Sacramento para Capacitación de HVAC y Electricista",
    ourStoryTitle: "Nuestra Historia",
    ourStoryContent: "Fundada en Sacramento con profundas raíces en la comunidad local de oficios especializados, la Universidad de Oficios Especializados de California se estableció para abordar la creciente demanda de profesionales de oficios especializados en nuestra región. Reconocimos la necesidad de una capacitación asequible y práctica que prepare a los estudiantes para el éxito en el mundo real sin la carga de una deuda estudiantil excesiva.",
    whyTradeSchoolTitle: "¿Por Qué Elegir una Escuela de Oficios?",
    costEffective: "Educación Rentable",
    costEffectiveContent: "Mientras que las universidades tradicionales de 4 años pueden costar más de $30,000 por año, nuestros programas brindan capacitación enfocada y relevante para la industria a una fracción del costo. Complete su capacitación por solo $2,500, sin sacrificar la educación de calidad.",
    timeEfficient: "Aprendizaje Eficiente en Tiempo",
    timeEfficientContent: "¿Por qué pasar 4+ años cuando puedes estar listo para trabajar en meses? Nuestros programas a tu propio ritmo están diseñados para capacitarte y entrar rápidamente a la fuerza laboral, ganando ingresos en lugar de acumular deudas.",
    inDemandSkills: "Habilidades en Demanda y a Prueba del Futuro",
    inDemandSkillsContent: "Los oficios especializados como HVAC y el trabajo eléctrico no se pueden subcontratar ni automatizar por completo. Con una creciente escasez de profesionales calificados, los oficios especializados ofrecen seguridad laboral y un excelente potencial de ingresos durante las próximas décadas.",
    sacramentoRoots: "Raíces en Sacramento, Conexiones Locales",
    sacramentoRootsContent: "Como escuela de oficios con sede en Sacramento, mantenemos relaciones sólidas con empleadores y contratistas locales. Nuestro programa de prácticas conecta a los estudiantes con experiencia del mundo real y oportunidades potenciales de empleo aquí mismo en el área de Sacramento.",
    earningPotentialTitle: "Potencial de Ingresos",
    earningPotentialContent: "Mientras que muchos títulos de 4 años conducen a puestos de nivel inicial con salarios modestos y deudas significativas, los profesionales de oficios especializados pueden ganar ingresos sustanciales. Los técnicos de HVAC en el área de Sacramento ganan salarios medios de alrededor de $60,590, mientras que los electricistas ganan aproximadamente $60,240 anualmente, a menudo con oportunidades de horas extras, avance e incluso propiedad de negocios.",
    ourApproachTitle: "Nuestro Enfoque",
    blendedLearning: "Modelo de Aprendizaje Mixto",
    blendedLearningContent: "Combinamos el aprendizaje en línea a tu propio ritmo con capacitación práctica a través de nuestro programa de prácticas, brindándote tanto conocimientos teóricos como habilidades del mundo real.",
    affordableEducation: "Educación Asequible",
    affordableEducationContent: "Nuestra matrícula de tarifa plana de $2,500 hace que la capacitación de calidad sea accesible, con opciones de ayuda financiera disponibles para aquellos que califican.",
    careerFocused: "Plan de Estudios Enfocado en la Carrera",
    careerFocusedContent: "Cada aspecto de nuestros programas está diseñado con un objetivo en mente: prepararte para un empleo inmediato en el oficio que elijas.",
    joiningCSTUTitle: "¿Listo para Unirte a CSTU?",
    joiningCSTUContent: "Da el primer paso hacia una carrera gratificante en los oficios especializados. Solicita ahora o contáctanos para obtener más información sobre cómo la Universidad de Oficios Especializados de California puede ayudarte a construir un futuro exitoso sin la carga de una deuda estudiantil excesiva."
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
