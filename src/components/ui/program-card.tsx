
import React, { useState } from 'react';
import { CheckCircle, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProgramCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  certification: string;
  imageUrl: string;
  slug: string;
  keyFeatures?: string[];
  salaryInfo?: {
    median: string;
    growth: string;
    period: string;
  };
  className?: string;
  comingSoon?: boolean;
  ptcbApproved?: boolean;
  nhaApproved?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  slug,
  keyFeatures,
  salaryInfo,
  className,
  comingSoon,
  ptcbApproved,
  nhaApproved,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t, language } = useLanguage();
  return (
    <div className={cn(
      "rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col w-full max-w-none",
      className
    )}>
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {ptcbApproved && (
            <div className="bg-green-600 text-white font-bold px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
              {language === 'en' ? 'Pharmacy Tech Certification Board (PTCB) approved' : 'Aprobado por PTCB'}
            </div>
          )}
          {nhaApproved && (
            <div className="bg-green-600 text-white font-bold px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
              {language === 'en' ? 'National Healthcareer Association (NHA) approved' : 'Aprobado por NHA'}
            </div>
          )}
          {comingSoon && (
            <div className="bg-navy-700 text-white font-bold px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
              {language === 'en' ? 'Start Dates: 1st & 15th of Every Month' : 'Fechas de Inicio: 1 y 15 de Cada Mes'}
            </div>
          )}
          <div className="bg-gold-400 text-navy-800 font-bold px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm">
            {price}
          </div>
          <Link to="/financial-aid" className="text-navy-600 hover:text-gold-500 underline text-xs sm:text-sm font-medium">
            {t('cantAffordIt')}
          </Link>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-navy-700 mb-2 leading-tight">{title}</h3>
        <p className="text-sm sm:text-base text-navy-600 mb-4 leading-relaxed">{description}</p>
        
        {/* Salary Information - Mobile Optimized */}
        <div className="bg-navy-50 p-3 sm:p-4 rounded-lg mb-4">
          <h4 className="font-bold text-navy-700 text-base sm:text-lg mb-2">{t('jobStatistics')}</h4>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 flex-shrink-0" />
            <span className="text-sm sm:text-base font-bold text-navy-700">{t('medianSalary')} {salaryInfo?.median}</span>
          </div>
          {salaryInfo?.growth && (
            <div className="flex items-start gap-2">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-navy-600 leading-tight">{t('projectedGrowth')} {salaryInfo?.growth} ({salaryInfo?.period})</span>
            </div>
          )}
          {salaryInfo?.period && !salaryInfo?.growth && (
            <div className="text-navy-600 text-xs sm:text-sm">
              {salaryInfo.period}
            </div>
          )}
        </div>
        
        {/* Program Highlights - Mobile Optimized */}
        <div className="mb-4">
          <h4 className="font-bold text-navy-700 text-base sm:text-lg mb-2">{t('programHighlights')}</h4>
          <ul className="space-y-2">
            {keyFeatures?.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-navy-600 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Link to={`/programs/${slug}`}>
            <Button className="w-full bg-gold-400 hover:bg-gold-500 text-navy-700 font-bold py-3 sm:py-4 text-sm sm:text-base">
              {t('learnMore')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
