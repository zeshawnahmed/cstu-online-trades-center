
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsTicker = () => {
  const { language } = useLanguage();

    const newsItems = [
      language === 'en' 
        ? "ASTU officially recognized by California Bureau of Post Secondary Education"
        : "ASTU oficialmente reconocida por la Oficina de Educación Post Secundaria de California",
      language === 'en'
        ? "UC Berkeley and Sac State Alumni Come Together to Launch ASTU"
        : "Exalumnos de UC Berkeley y Sac State se unen para lanzar ASTU",
      language === 'en'
        ? "Fall 2025 Cohort Launching, Contact Admissions Today"
        : "Cohorte de Otoño 2025 Iniciando, Contacta Admisiones Hoy",
      language === 'en'
        ? "Proudly Serving Greater Sacramento Region"
        : "Orgullosamente Sirviendo a la Gran Región de Sacramento"
  ];

  return (
    <div className="bg-navy-700 text-white py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="bg-gold-400 text-navy-900 px-4 py-1 font-bold text-sm whitespace-nowrap">
          {language === 'en' ? 'ASTU NEWS' : 'NOTICIAS ASTU'}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap" style={{ animationDuration: '6s' }}>
            {/* Duplicate the news items multiple times to create seamless loop */}
            {[...newsItems, ...newsItems, ...newsItems].map((item, index) => (
              <span key={index} className="inline-block px-8 text-sm font-medium">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
