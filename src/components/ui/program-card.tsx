
import React, { useState } from 'react';
import { ChevronRight, Clock, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  certification: string;
  imageUrl: string;
  slug: string;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  price,
  duration,
  certification,
  imageUrl,
  slug,
  className,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={cn(
      "group rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <div className={cn(
          "absolute inset-0 image-loading",
          imageLoaded && "image-loaded"
        )}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="absolute top-0 right-0 bg-gold-400 text-navy-800 font-semibold px-3 py-1 rounded-bl-lg">
          {price}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-navy-700 mb-2">{title}</h3>
        <p className="text-navy-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-5">
          <div className="flex items-center text-sm text-navy-600">
            <Clock className="h-4 w-4 mr-2 text-gold-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-sm text-navy-600">
            <Award className="h-4 w-4 mr-2 text-gold-500" />
            <span>{certification}</span>
          </div>
          <div className="flex items-center text-sm text-navy-600">
            <Users className="h-4 w-4 mr-2 text-gold-500" />
            <span>Hands-on Externship</span>
          </div>
        </div>
        
        <Link 
          to={`/programs/${slug}`}
          className="inline-flex items-center text-gold-500 hover:text-gold-600 font-medium transition-colors"
        >
          Learn More
          <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
