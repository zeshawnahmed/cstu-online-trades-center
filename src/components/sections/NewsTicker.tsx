
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsTicker = () => {
  const { language } = useLanguage();

  const newsItems = [
    language === 'en' 
      ? "ASTU officially recognized by the California Bureau of Post Secondary Education"
      : "ASTU oficialmente reconocida por la Oficina de Educación Post Secundaria de California",
    language === 'en'
      ? "UC Davis and UC Berkeley Alumni come together to launch ASTU"
      : "Exalumnos de UC Davis y UC Berkeley se unen para lanzar ASTU",
    language === 'en'
      ? "Fall Cohort Launching, Call or Text Admissions Today"
      : "Cohorte de Otoño Iniciando, Llama o Envía Texto a Admisiones Hoy",
    language === 'en'
      ? "Proudly Serving the Greater Sacramento Region"
      : "Orgullosamente Sirviendo a la Gran Región de Sacramento"
  ];

  return (
    <div className="bg-navy-700 text-white py-2 overflow-hidden relative">
      <div className="flex items-center">
        <div className="bg-gold-400 text-navy-900 px-4 py-1 font-bold text-sm whitespace-nowrap">
          {language === 'en' ? 'ASTU IN THE NEWS' : 'ASTU EN LAS NOTICIAS'}
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-scroll flex whitespace-nowrap" style={{ animationDuration: '25s' }}>
            {/* Duplicate the news items to create seamless loop */}
            {[...newsItems, ...newsItems].map((item, index) => (
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
