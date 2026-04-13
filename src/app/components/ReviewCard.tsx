import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

export function ReviewCard({ name, avatar, rating, review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-4 flex-shrink-0">
          <ImageWithFallback
            src={avatar}
            alt={name}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4>{name}</h4>
          <div className="flex items-center space-x-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative inline-block">
                <Star className="w-4 h-4 text-gray-300" />
                <div 
                  className="absolute inset-0 overflow-hidden" 
                  style={{ width: i < Math.floor(rating) ? '100%' : i === Math.floor(rating) ? `${(rating % 1) * 100}%` : '0%' }}
                >
                  <Star className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)] max-w-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
    </div>
  );
}
