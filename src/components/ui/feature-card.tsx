
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn(
      "p-6 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gold-100 text-gold-500 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-navy-700 mb-2">{title}</h3>
      <p className="text-navy-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
