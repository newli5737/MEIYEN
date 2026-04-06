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
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{review}</p>
    </div>
  );
}
