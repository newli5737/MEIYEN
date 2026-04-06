"use client";
import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';

type FallbackImageProps = Omit<ImageProps, 'src' | 'alt' | 'fill'> & {
  src: string;
  alt: string;
};

export function ImageWithFallback({ src, alt, className, style, ...rest }: FallbackImageProps) {
  const [didError, setDidError] = useState(false);

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={{ ...style, position: 'relative' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={ERROR_IMG_SRC} alt="Error loading image" fill className="object-contain p-4 opacity-50" unoptimized />
      </div>
    </div>
  ) : (
    <Image 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setDidError(true)} 
      {...rest}
    />
  );
}
