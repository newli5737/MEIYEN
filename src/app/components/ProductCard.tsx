import { Link } from '../../i18n/routing';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTranslations } from 'next-intl';

interface ProductCardProps {
  id: number;
  slug: string;
  name: string;
  price: number;
  image?: string;
  images?: string[];
  rating?: number;
  categories?: string[];
  priority?: boolean;
}

export function ProductCard({ id, slug, name, price, image, images, rating = 5, categories, priority }: ProductCardProps) {
  const t = useTranslations('Products');

  const imgSrc = image || (images && images.length > 0 ? images[0] : '');

  return (
    <div className="group cursor-pointer">
      <Link href={`/products/${slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-[var(--beige)] mb-4 aspect-square">
          <ImageWithFallback
            src={imgSrc}
            alt={name}
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            priority={priority}
          />
          <div className="absolute top-4 left-4 z-10 group-hover:scale-110 transition-transform duration-500">
            <div className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] p-[1px] rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.3)] bg-[length:200%_auto] animate-pulse">
              <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                <span className="text-[10px] font-bold tracking-widest bg-gradient-to-r from-[#D4AF37] to-[#B5952B] bg-clip-text text-transparent uppercase">
                  New Arrival
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link href={`/products/${slug}`}>
          <h3 className="group-hover:text-[var(--gold)] transition-colors">{name}</h3>
        </Link>
        
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">({rating}.0)</span>
        </div>
        
        <div className="flex items-center">
          <p className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            NT$ {price.toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
}
