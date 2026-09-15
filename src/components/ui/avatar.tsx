import React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'busy' | 'away';
}

export function Avatar({
  src,
  alt = 'Avatar',
  fallback = 'DF',
  size = 'md',
  status,
  className,
  ...props
}: AvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  const sizeClasses = {
    sm: 'h-7 w-7 text-xs',
    md: 'h-9 w-9 text-sm',
    lg: 'h-12 w-12 text-base',
  };

  const statusClasses = {
    online: 'bg-emerald-500',
    offline: 'bg-zinc-400',
    busy: 'bg-rose-500',
    away: 'bg-amber-500',
  };

  return (
    <div className="relative inline-flex flex-shrink-0" {...props}>
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden rounded-full bg-secondary font-semibold text-secondary-foreground border border-border shadow-subtle',
          sizeClasses[size],
          className
        )}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span>{fallback}</span>
        )}
      </div>
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-background',
            statusClasses[status]
          )}
        />
      )}
    </div>
  );
}
