import { Link } from '../../i18n/routing';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLocale } from 'next-intl';

interface CategoryCardProps {
  name: string;
  image: string;
  href: string;
}

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  const locale = useLocale();
  const exploreText = locale === 'zh-TW' ? '立即探索' : 'Explore Now';
  return (
    <Link href={href} className="group block relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 mt-0">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 
            className="text-white text-2xl mb-1 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {name}
          </h3>
          <p className="text-white/90 text-sm">{exploreText}</p>
        </div>
    </Link>
  );
}
