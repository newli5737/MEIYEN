import { Link } from '../../i18n/routing';
import { Star, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
  category?: string;
}

export function ProductCard({ id, name, price, image, rating = 5, category }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/products/${id}`}>
        <div className="relative overflow-hidden rounded-2xl bg-[var(--beige)] mb-4 aspect-square">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs tracking-wide">{category}</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link href={`/products/${id}`}>
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
        
        <div className="flex items-center justify-between">
          <p className="text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            NT$ {price.toLocaleString()}
          </p>
          <button className="bg-[var(--pink-pastel)] hover:bg-[var(--gold)] text-gray-800 hover:text-white p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
