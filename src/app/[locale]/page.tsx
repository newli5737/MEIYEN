import { ArrowRight } from 'lucide-react';
import { Link } from '../../i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { ReviewCard } from '../components/ReviewCard';
import { Newsletter } from '../components/Newsletter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const t = useTranslations('Home');
  const tProducts = useTranslations('Products');
  const locale = useLocale();

  const getProductName = (viName: string) => {
    const translations: Record<string, Record<string, string>> = {
      'Serum Phục Hồi Chống Lão Hóa': { en: 'Anti-aging Repair Serum', 'zh-TW': '抗衰老修護精華' },
      'Kem Dưỡng Ẩm Cao Cấp': { en: 'Premium Moisturizer', 'zh-TW': '高級保濕霜' },
      'Son Môi Luxury Collection': { en: 'Luxury Collection Lipstick', 'zh-TW': '奢華系列唇膏' },
      'Nước Hoa Eau de Parfum': { en: 'Eau de Parfum', 'zh-TW': '淡香精' },
    };
    return translations[viName]?.[locale] || viName;
  };


  const bestSellers = [
    {
      id: 1,
      slug: 'b-complex',
      name: getProductName('Sublingual Methylated B-Complex'),
      price: 6800,
      image: '/images/products/b-complex/0.png',
      rating: 5.0,
      categories: ['cat_nervous_system'],
    },
    {
      id: 2,
      slug: 'anagen-advanced',
      name: getProductName('Sublingual Anagen Advanced'),
      price: 6400,
      image: '/images/products/anagen-advanced/0.png',
      rating: 4.9,
      categories: ['cat_hair_regeneration'],
    },
    {
      id: 3,
      slug: 'sublingual-nad-cellular-energy-production',
      name: getProductName('Sublingual NAD+ Cellular Energy Production'),
      price: 7200,
      image: '/images/products/sublingual-nad-cellular-energy-production/0.png',
      rating: 4.6,
      categories: ['cat_energy_support'],
    },
    {
      id: 4,
      slug: 'sublingual-glutathione',
      name: getProductName('Sublingual Glutathione'),
      price: 6400,
      image: '/images/products/sublingual-glutathione/0.png',
      rating: 4.6,
      categories: ['cat_lifestyle_recovery'],
    },
  ];

  const categories = [
    {
      name: tProducts('cat_energy_support'),
      image: '/images/products/sublingual-nad-cellular-energy-production/0.png',
      href: '/products?category=cat_energy_support',
    },
    {
      name: tProducts('cat_hair_regeneration'),
      image: '/images/products/anagen-advanced/0.png',
      href: '/products?category=cat_hair_regeneration',
    },
    {
      name: tProducts('cat_immune_support'),
      image: '/images/products/sublingual-turmeric-curcumin/0.png',
      href: '/products?category=cat_immune_support',
    },
    {
      name: tProducts('cat_cellular_regeneration'),
      image: '/images/products/sublingual-glutathione/0.png',
      href: '/products?category=cat_cellular_regeneration',
    },
  ];

  const reviews = [
    {
      name: 'Mei-Ling Chen',
      avatar: 'https://images.unsplash.com/photo-1718999398032-8fc0a58ed9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFzaWFuJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTQ0MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      review: locale === 'en' ? 'Amazing product! My skin has noticeably improved after 2 weeks of using the serum. Luxurious packaging, elegant scent.' : locale === 'zh-TW' ? '產品太棒了！使用精華液 2 週後，我的肌膚明顯改善。包裝奢華，香味優雅。' : 'Sản phẩm tuyệt vời!...',
    },
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1646526802761-98046c6f1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1NDQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      review: locale === 'en' ? 'Premium quality worth the price. Moisturizer absorbs quickly, non-greasy. Absolutely love this line!' : locale === 'zh-TW' ? '物超所值的高品質。保濕霜吸收快，不油膩。非常喜歡這個系列！' : 'Chất lượng cao cấp...',
    },
    {
      name: 'Wei-Ting Lin',
      avatar: 'https://images.unsplash.com/photo-1736309530611-1cfd1e6602b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMGxpZmVzdHlsZSUyMHdvbWFufGVufDF8fHx8MTc3MzU0NDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      review: locale === 'en' ? 'Excellent customer service, fast delivery. Product is exactly as described, quality exceeds expectations.' : locale === 'zh-TW' ? '出色的客戶服務，交貨快。產品與描述完全一致，質量超出預期。' : 'Dịch vụ khách hàng...',
    },
  ];

  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center bg-[var(--beige)]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677726050511-48866c4a64d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmVhdXR5JTIwYWVzdGhldGljJTIwYmVpZ2V8ZW58MXx8fHwxNzczNTQ0MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover opacity-80"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 
              className="text-5xl lg:text-7xl mb-6 tracking-wide leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('shopNow')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 px-8 py-4 rounded-full inline-flex items-center transition-all duration-300"
              >
                {t('exploreProducts')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl lg:text-5xl mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('bestSellers')}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t('bestSellersDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
            >
              {t('viewAllProducts')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl lg:text-5xl mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('categories')}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t('categoriesDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 
                className="text-4xl lg:text-5xl mb-6 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t('brandStory')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('brandStoryP1')}
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                {t('brandStoryP2')}
              </p>
              <Link
                href="/about"
                title={t('brandStory')}
                className="inline-flex items-center text-[var(--gold)] hover:text-[var(--gold-light)] hover:underline transition-all"
              >
                <span>{t('learnMore')}</span>
                <span className="sr-only"> - {t('brandStory')}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGJlYXV0eSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzM1NDQwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Brand Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl lg:text-5xl mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('customerReviews')}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {t('customerReviewsDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section className="py-20 bg-[var(--gold)] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 
            className="text-4xl lg:text-5xl mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('specialOffer')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('specialOfferDesc')}
          </p>
          <Link
            href="/products?category=skincare"
            className="bg-white text-[var(--gold)] hover:bg-gray-100 px-8 py-4 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('shopNow')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
