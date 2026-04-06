"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../../components/ProductCard';
import { Newsletter } from '../../components/Newsletter';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const t = useTranslations('Products');
  const locale = useLocale();

  const getProductName = (viName: string) => {
    const translations: Record<string, Record<string, string>> = {
      'Serum Phục Hồi Chống Lão Hóa': { en: 'Anti-aging Repair Serum', 'zh-TW': '抗衰老修護精華' },
      'Kem Dưỡng Ẩm Cao Cấp': { en: 'Premium Moisturizer', 'zh-TW': '高級保濕霜' },
      'Son Môi Luxury Collection': { en: 'Luxury Collection Lipstick', 'zh-TW': '奢華系列唇膏' },
      'Nước Hoa Eau de Parfum': { en: 'Eau de Parfum', 'zh-TW': '淡香精' },
      'Sữa Rửa Mặt Làm Sạch Sâu': { en: 'Deep Cleansing Foam', 'zh-TW': '深層清潔洗面乳' },
      'Kem Nền Mịn Lì Hoàn Hảo': { en: 'Flawless Matte Foundation', 'zh-TW': '完美霧面粉底液' },
      'Sữa Dưỡng Thể Luxury': { en: 'Luxury Body Lotion', 'zh-TW': '奢華身體乳' },
      'Bộ Quà Tặng Skincare Premium': { en: 'Premium Skincare Gift Set', 'zh-TW': '高級護膚禮盒' },
    };
    return translations[viName]?.[locale] || viName;
  };

  const allProducts = [
    {
      id: 1,
      name: getProductName('Serum Phục Hồi Chống Lão Hóa'),
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1770732766528-d0e9fd0df233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVhdXR5JTIwc2VydW0lMjBwcm9kdWN0fGVufDF8fHx8MTc3MzU0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'skincare',
    },
    {
      id: 2,
      name: getProductName('Kem Dưỡng Ẩm Cao Cấp'),
      price: 1890000,
      image: 'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFjZSUyMGNyZWFtJTIwamFyfGVufDF8fHx8MTc3MzU0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'skincare',
    },
    {
      id: 3,
      name: getProductName('Son Môi Luxury Collection'),
      price: 990000,
      image: 'https://images.unsplash.com/photo-1770981773328-63c2ad10013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoLWVuZCUyMGxpcHN0aWNrJTIwY29zbWV0aWN8ZW58MXx8fHwxNzczNTQ0MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'makeup',
    },
    {
      id: 4,
      name: getProductName('Nước Hoa Eau de Parfum'),
      price: 3200000,
      image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MzUwNDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'fragrance',
    },
    {
      id: 5,
      name: getProductName('Sữa Rửa Mặt Làm Sạch Sâu'),
      price: 890000,
      image: 'https://images.unsplash.com/photo-1751110131615-ee32e45a100d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNvc21ldGljcyUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'skincare',
    },
    {
      id: 6,
      name: getProductName('Kem Nền Mịn Lì Hoàn Hảo'),
      price: 1290000,
      image: 'https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MzU0NDA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4,
      category: 'makeup',
    },
    {
      id: 7,
      name: getProductName('Sữa Dưỡng Thể Luxury'),
      price: 1450000,
      image: 'https://images.unsplash.com/photo-1760647422523-f532034a49ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYm9keSUyMGxvdGlvbiUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'bodycare',
    },
    {
      id: 8,
      name: getProductName('Bộ Quà Tặng Skincare Premium'),
      price: 4500000,
      image: 'https://images.unsplash.com/photo-1765887986673-953fccf56464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGdpZnQlMjBzZXR8ZW58MXx8fHwxNzczNTQ0MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      category: 'sets',
    },
  ];

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    if (priceRange === 'under1m' && product.price >= 1000000) {
      return false;
    }
    if (priceRange === '1m-2m' && (product.price < 1000000 || product.price >= 2000000)) {
      return false;
    }
    if (priceRange === 'over2m' && product.price < 2000000) {
      return false;
    }
    return true;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[var(--beige)] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 
            className="text-4xl lg:text-5xl mb-4 tracking-wide text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('title')}
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-[var(--beige)] rounded-2xl p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  <h3>{t('filters')}</h3>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="mb-3 text-sm">{t('category')}</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: t('all') },
                      { value: 'skincare', label: t('skincare') },
                      { value: 'makeup', label: t('makeup') },
                      { value: 'bodycare', label: t('bodycare') },
                      { value: 'sets', label: t('sets') },
                      { value: 'fragrance', label: t('fragrance') },
                    ].map((cat) => (
                      <label key={cat.value} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          value={cat.value}
                          checked={selectedCategory === cat.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="mr-2 accent-[var(--gold)]"
                        />
                        <span className="text-sm group-hover:text-[var(--gold)] transition-colors">
                          {cat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="mb-3 text-sm">{t('priceRange')}</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: t('all') },
                      { value: 'under1m', label: t('under1m') },
                      { value: '1m-2m', label: t('1mTo2m') },
                      { value: 'over2m', label: t('over2m') },
                    ].map((range) => (
                      <label key={range.value} className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="mr-2 accent-[var(--gold)]"
                        />
                        <span className="text-sm group-hover:text-[var(--gold)] transition-colors">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  {t('showing', { count: filteredProducts.length })}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">{t('noProductsFound')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
