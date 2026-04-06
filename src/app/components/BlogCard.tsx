import { Link } from '../../i18n/routing';
import { Calendar, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLocale } from 'next-intl';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
}

export function BlogCard({ id, title, excerpt, image, date, category }: BlogCardProps) {
  const locale = useLocale();
  const readMore = locale === 'zh-TW' ? '閱讀更多 →' : 'Read more →';

  return (
    <Link href={`/blog/${id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative overflow-hidden aspect-[16/10]">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs tracking-wide">{category}</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <h3 className="mb-2 group-hover:text-[var(--gold)] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {excerpt}
          </p>
          <span className="text-[var(--gold)] text-sm tracking-wide hover:underline">
            {readMore}
          </span>
        </div>
      </div>
    </Link>
  );
}
