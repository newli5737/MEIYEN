import { ArrowRight } from 'lucide-react';
import { Link } from '../../i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { ReviewCard } from '../components/ReviewCard';
import { BlogCard } from '../components/BlogCard';
import { Newsletter } from '../components/Newsletter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const t = useTranslations('Home');
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

  const getBlogData = (id: number) => {
    const translations: Record<number, Record<string, {title: string, excerpt: string, date: string, categoryLabel: string}>> = {
      1: {
        en: { title: '10 Skincare Routine Steps for Perfect Skin', excerpt: 'Discover the 10-step skincare routine that keeps your skin healthy and glowing every day.', date: 'March 10, 2026', categoryLabel: 'Skincare' },
        'zh-TW': { title: '完美肌膚的10步護膚程序', excerpt: '探索讓您肌膚每天保持健康光采的10步護膚程序。', date: '2026年3月10日', categoryLabel: '保養' }
      },
      2: {
        en: { title: 'Natural Ingredients in Luxury Cosmetics', excerpt: 'Learn about precious natural ingredients used in luxury cosmetics.', date: 'March 8, 2026', categoryLabel: 'Ingredients' },
        'zh-TW': { title: '高級化妝品中的天然成分', excerpt: '了解高級化妝品中使用的珍貴天然成分。', date: '2026年3月8日', categoryLabel: '成分' }
      },
      3: {
        en: { title: '2026 Makeup Trends: Minimalist Beauty', excerpt: 'Explore the minimalist makeup trend taking over 2026.', date: 'March 5, 2026', categoryLabel: 'Makeup' },
        'zh-TW': { title: '2026 妝容趨勢：極簡之美', excerpt: '探索席捲 2026 年的極簡化妝趨勢。', date: '2026年3月5日', categoryLabel: '彩妝' }
      }
    };
    return translations[id]?.[locale] || { title: '', excerpt: '', date: '', categoryLabel: '' };
  };

  const bestSellers = [
    {
      id: 1,
      name: getProductName('Serum Phục Hồi Chống Lão Hóa'),
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1770732766528-d0e9fd0df233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVhdXR5JTIwc2VydW0lMjBwcm9kdWN0fGVufDF8fHx8MTc3MzU0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'Bestseller',
    },
    {
      id: 2,
      name: getProductName('Kem Dưỡng Ẩm Cao Cấp'),
      price: 1890000,
      image: 'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFjZSUyMGNyZWFtJTIwamFyfGVufDF8fHx8MTc3MzU0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'New',
    },
    {
      id: 3,
      name: getProductName('Son Môi Luxury Collection'),
      price: 990000,
      image: 'https://images.unsplash.com/photo-1770981773328-63c2ad10013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoLWVuZCUyMGxpcHN0aWNrJTIwY29zbWV0aWN8ZW58MXx8fHwxNzczNTQ0MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 4,
      name: getProductName('Nước Hoa Eau de Parfum'),
      price: 3200000,
      image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MzUwNDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
  ];

  const categories = [
    {
      name: 'Skincare',
      image: 'https://images.unsplash.com/photo-1751110131615-ee32e45a100d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNvc21ldGljcyUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      href: '/products?category=skincare',
    },
    {
      name: 'Makeup',
      image: 'https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MzU0NDA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      href: '/products?category=makeup',
    },
    {
      name: 'Body Care',
      image: 'https://images.unsplash.com/photo-1760647422523-f532034a49ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYm9keSUyMGxvdGlvbiUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      href: '/products?category=bodycare',
    },
    {
      name: 'Gift Sets',
      image: 'https://images.unsplash.com/photo-1765887986673-953fccf56464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGdpZnQlMjBzZXR8ZW58MXx8fHwxNzczNTQ0MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      href: '/products?category=sets',
    },
  ];

  const reviews = [
    {
      name: 'Minh Anh',
      avatar: 'https://images.unsplash.com/photo-1718999398032-8fc0a58ed9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFzaWFuJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTQ0MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: locale === 'en' ? 'Amazing product! My skin has noticeably improved after 2 weeks of using the serum. Luxurious packaging, elegant scent.' : locale === 'zh-TW' ? '產品太棒了！使用精華液 2 週後，我的肌膚明顯改善。包裝奢華，香味優雅。' : 'Sản phẩm tuyệt vời!...',
    },
    {
      name: 'Thu Hà',
      avatar: 'https://images.unsplash.com/photo-1646526802761-98046c6f1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1NDQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: locale === 'en' ? 'Premium quality worth the price. Moisturizer absorbs quickly, non-greasy. Absolutely love this line!' : locale === 'zh-TW' ? '物超所值的高品質。保濕霜吸收快，不油膩。非常喜歡這個系列！' : 'Chất lượng cao cấp...',
    },
    {
      name: 'Linh Chi',
      avatar: 'https://images.unsplash.com/photo-1736309530611-1cfd1e6602b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMGxpZmVzdHlsZSUyMHdvbWFufGVufDF8fHx8MTc3MzU0NDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: locale === 'en' ? 'Excellent customer service, fast delivery. Product is exactly as described, quality exceeds expectations.' : locale === 'zh-TW' ? '出色的客戶服務，交貨快。產品與描述完全一致，質量超出預期。' : 'Dịch vụ khách hàng...',
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: getBlogData(1).title,
      excerpt: getBlogData(1).excerpt,
      image: 'https://images.unsplash.com/photo-1614159102349-eddb8b985aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzM1NDQwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getBlogData(1).date || '10 Tháng 3, 2026',
      category: getBlogData(1).categoryLabel || 'Skincare',
    },
    {
      id: 2,
      title: getBlogData(2).title,
      excerpt: getBlogData(2).excerpt,
      image: 'https://images.unsplash.com/photo-1739981248829-ac9d4a6fecfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwY29zbWV0aWNzJTIwaW5ncmVkaWVudHN8ZW58MXx8fHwxNzczNTEyNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getBlogData(2).date || '8 Tháng 3, 2026',
      category: getBlogData(2).categoryLabel || 'Ingredients',
    },
    {
      id: 3,
      title: getBlogData(3).title,
      excerpt: getBlogData(3).excerpt,
      image: 'https://images.unsplash.com/photo-1748543668676-ea8241cb3886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2R1Y3QlMjBmbGF0bGF5JTIwYmVpZ2V8ZW58MXx8fHwxNzczNTQ0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getBlogData(3).date || '5 Tháng 3, 2026',
      category: getBlogData(3).categoryLabel || 'Makeup',
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
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('brandStoryP1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('brandStoryP2')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
              >
                {t('learnMore')}
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
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 
              className="text-4xl lg:text-5xl mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('beautyTips')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('beautyTipsDesc')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
            >
              {t('viewAllPosts')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
