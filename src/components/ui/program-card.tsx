
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
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className={cn(
      "rounded-xl overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl h-full flex flex-col",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gray-200",
          imageLoaded && "bg-transparent"
        )}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        {/* Price tag moved closer to program title */}
        <div className="absolute top-0 right-0 m-2 bg-gold-400 text-navy-800 font-bold px-3 py-1 rounded-lg text-sm">
          {price}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-navy-700 mb-2">{title}</h3>
        <p className="text-navy-600 mb-4">
          {description.includes('entry-level') ? (
            <>
              {description.split('entry-level')[0]}
              <span className="font-semibold bg-yellow-100 px-1 rounded">entry-level</span>
              {description.split('entry-level')[1]}
            </>
          ) : description}
        </p>
        
        {/* Salary Information - Condensed */}
        <div className="bg-navy-50 p-4 rounded-lg mb-4">
          <h4 className="font-bold text-navy-700 text-lg mb-2">{t('jobStatistics')}</h4>
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-5 w-5 text-gold-500" />
            <span className="text-base font-bold text-navy-700">{t('medianSalary')} {salaryInfo?.median}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-gold-500" />
            <span className="text-navy-600">{t('projectedGrowth')} {salaryInfo?.growth} ({salaryInfo?.period})</span>
          </div>
        </div>
        
        {/* Program Highlights - More compact */}
        <div className="mb-4">
          <h4 className="font-bold text-navy-700 text-lg mb-2">{t('programHighlights')}</h4>
          <ul className="space-y-2">
            {keyFeatures?.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-navy-600">
                  {feature.includes('entry-level') ? (
                    <>
                      {feature.split('entry-level')[0]}
                      <span className="font-semibold bg-yellow-100 px-1 rounded">entry-level</span>
                      {feature.split('entry-level')[1]}
                    </>
                  ) : feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Link to={`/programs/${slug}`}>
            <Button className="w-full bg-gold-400 hover:bg-gold-500 text-navy-700 font-bold py-4">
              {t('learnMore')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
