
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      "max-w-3xl",
      centered && "mx-auto text-center",
      className
    )}>
      {subtitle && (
        <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-navy-700 uppercase bg-gold-100 rounded-full mb-3">
          {subtitle}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-navy-600/90 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
