"use client";

import { useState, use } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../../i18n/routing';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewCard } from '../../../components/ReviewCard';
import { Newsletter } from '../../../components/Newsletter';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { productsData } from '../../../../data/products';
import { notFound } from 'next/navigation';

export default function ProductDetail(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  // Fallback to 'id' if Next.js hasn't cleared the dynamic routing cache after folder rename
  const slug = params.slug || (params as Record<string, string>).id;
  const [selectedImage, setSelectedImage] = useState(0);
  const t = useTranslations('ProductDetail');
  const tProducts = useTranslations('Products');
  const locale = useLocale();

  const product = productsData.find(p => p.slug === slug);

  const handlePrev = () => {
    if (!product) return;
    setSelectedImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!product) return;
    setSelectedImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };
  
  if (!product) {
    return notFound();
  }

  // Display only the first category as the label
  const categoryLabel = product.categories && product.categories.length > 0 
    ? tProducts(product.categories[0]) 
    : '';

  const customerReviews = [
    {
      name: 'Mei-Ling Chen',
      avatar: 'https://images.unsplash.com/photo-1718999398032-8fc0a58ed9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFzaWFuJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTQ0MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: locale === 'en' ? 'Amazing product! Noticeable improvement in 2 weeks.' : 'Tuyệt vời! Hiệu quả rõ rệt.',
    },
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1646526802761-98046c6f1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1NDQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: locale === 'en' ? 'Premium quality worth the price. Definitely buying again!' : 'Chất lượng cao cấp xứng đáng với giá tiền.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[var(--beige)] py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">
              {t('home')}
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[var(--gold)] transition-colors">
              {t('products')}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="flex flex-col gap-6">
              <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[var(--beige)] to-white shadow-sm border border-gray-100 aspect-square p-8 flex items-center justify-center transition-all duration-500 hover:shadow-lg">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain scale-95 transition-transform duration-700 ease-in-out group-hover:scale-100"
                  priority
                />
                
                {/* Navigation Controls */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-[var(--gold)] hover:text-white"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 ml-[-2px]" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hover:bg-[var(--gold)] hover:text-white"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 mr-[-2px]" />
                    </button>
                  </>
                )}
                
                {/* Image Counter Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold tracking-widest text-[var(--gold)] uppercase">
                  {selectedImage + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar px-1">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden flex items-center justify-center bg-[var(--beige)] transform transition-all duration-300 ease-out ${
                        selectedImage === index 
                          ? 'ring-2 ring-[var(--gold)] ring-offset-4 ring-offset-white scale-105 shadow-md' 
                          : 'opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-[80%] h-[80%] object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {categoryLabel && (
                <div className="mb-2 inline-block bg-[var(--pink-pastel)] px-3 py-1 rounded-full text-sm font-medium">
                  {categoryLabel}
                </div>
              )}
              <h1 
                className="text-3xl lg:text-4xl mb-4 tracking-wide text-gray-900"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-3">{t('reviews', { count: 12 })}</span>
              </div>

              <p 
                className="text-3xl mb-8 text-[var(--navy)]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                NT$ {product.price.toLocaleString('en-US')}
              </p>

              {/* Raw Description Extracted from Hinnao */}
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                {product.rawDescription}
              </div>

              {/* Info checklist snippet as placeholder features */}
              <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
                 <div className="flex items-center text-sm text-gray-600"><Check className="w-5 h-5 mr-2 text-[var(--gold)]" /> Instant Absorption</div>
                 <div className="flex items-center text-sm text-gray-600"><Check className="w-5 h-5 mr-2 text-[var(--gold)]" /> High-Stability Liposomes</div>
                 <div className="flex items-center text-sm text-gray-600"><Check className="w-5 h-5 mr-2 text-[var(--gold)]" /> Premium Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 
            className="text-3xl lg:text-4xl mb-12 text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('customerReviews')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
