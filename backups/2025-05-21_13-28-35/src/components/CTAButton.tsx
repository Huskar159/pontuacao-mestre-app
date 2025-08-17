
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  secondary?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  onClick, 
  className,
  icon = true,
  secondary = false
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center",
        secondary 
          ? "bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-lightBlue" 
          : "bg-brand-blue text-white hover:bg-blue-700 hover:scale-105",
        className
      )}
    >
      {text}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
};

export default CTAButton;
