import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export function Loading({ size = 'md', className, text }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <Loader2 className={cn('animate-spin text-blue-500', sizeClasses[size])} />
      {text && <p className="mt-2 text-sm text-gray-500">{text}</p>}
    </div>
  );
}