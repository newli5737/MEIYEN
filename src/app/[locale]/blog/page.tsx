"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { BlogCard } from '../../components/BlogCard';
import { Newsletter } from '../../components/Newsletter';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = useTranslations('Blog');
  const locale = useLocale();

  const getTranslatedPost = (id: number) => {
    const translations: Record<number, Record<string, {title: string, excerpt: string, date: string, categoryLabel: string}>> = {
      1: {
        en: { title: '10 Skincare Routine Steps for Perfect Skin', excerpt: 'Discover the 10-step skincare routine that keeps your skin healthy and glowing every day.', date: 'March 10, 2026', categoryLabel: 'Skincare' },
        'zh-TW': { title: '完美肌膚的10步護膚程序', excerpt: '探索讓您肌膚每天保持健康光采的10步護膚程序。', date: '2026年3月10日', categoryLabel: '保養' }
      },
      2: {
        en: { title: 'Natural Ingredients in Luxury Cosmetics', excerpt: 'Learn about precious natural ingredients like Vitamin C, Hyaluronic Acid, and Peptides used in luxury cosmetics.', date: 'March 8, 2026', categoryLabel: 'Ingredients' },
        'zh-TW': { title: '高級化妝品中的天然成分', excerpt: '了解高級化妝品中使用的珍貴天然成分，如維生素 C、玻尿酸和胜肽。', date: '2026年3月8日', categoryLabel: '成分' }
      },
      3: {
        en: { title: '2026 Makeup Trends: Minimalist Beauty', excerpt: 'Explore the minimalist makeup trend taking over 2026. Less is more, enhancing your natural beauty.', date: 'March 5, 2026', categoryLabel: 'Makeup' },
        'zh-TW': { title: '2026 妝容趨勢：極簡之美', excerpt: '探索席捲 2026 年的極簡化妝趨勢。少即是多，提升您的自然美。', date: '2026年3月5日', categoryLabel: '彩妝' }
      },
      4: {
        en: { title: 'Summer Skincare Secrets', excerpt: 'Effective skincare tips for summer, keeping your skin smooth without being dry or oily.', date: 'March 2, 2026', categoryLabel: 'Skincare' },
        'zh-TW': { title: '夏季護膚秘訣', excerpt: '夏季有效的護膚秘訣，讓您的肌膚保持光滑，不乾燥也不油膩。', date: '2026年3月2日', categoryLabel: '保養' }
      },
      5: {
        en: { title: 'How to Choose the Right Perfume for You', excerpt: 'Guide to choosing a perfume that matches your personality and style. From woods to florals, each has its own appeal.', date: 'February 28, 2026', categoryLabel: 'Lifestyle' },
        'zh-TW': { title: '如何選擇適合您的香水', excerpt: '選擇符合您個性和風格的香水指南。從木質到花香，每種都有獨特的魅力。', date: '2026年2月28日', categoryLabel: '生活方式' }
      },
      6: {
        en: { title: 'Skincare in Your 30s: Preventing Aging', excerpt: 'What you need to know about skincare in your 30s, focusing on preventing and slowing down skin aging.', date: 'February 25, 2026', categoryLabel: 'Skincare' },
        'zh-TW': { title: '30歲的護膚：預防老化', excerpt: '30歲護膚須知，重點在於預防和減緩皮膚老化。', date: '2026年2月25日', categoryLabel: '保養' }
      },
      7: {
        en: { title: 'Common Makeup Mistakes', excerpt: 'Avoid common makeup mistakes for the most perfect and natural makeup look.', date: 'February 20, 2026', categoryLabel: 'Makeup' },
        'zh-TW': { title: '常見的化妝錯誤', excerpt: '避免常見的化妝錯誤，打造最完美自然的妝容。', date: '2026年2月20日', categoryLabel: '彩妝' }
      },
      8: {
        en: { title: 'Comprehensive Body Care', excerpt: 'Head-to-toe body care routine to keep your skin soft and fragrant.', date: 'February 15, 2026', categoryLabel: 'Body Care' },
        'zh-TW': { title: '全面身體護理', excerpt: '從頭到腳的身體護理程序，讓您的肌膚保持柔軟芬芳。', date: '2026年2月15日', categoryLabel: '身體保養' }
      },
      9: {
        en: { title: 'Natural Beauty with Food', excerpt: 'Discover foods that help beautify skin from within, bringing a natural glow.', date: 'February 10, 2026', categoryLabel: 'Lifestyle' },
        'zh-TW': { title: '食物帶來的自然之美', excerpt: '探索由內而外美化肌膚的食物，帶來自然光采。', date: '2026年2月10日', categoryLabel: '生活方式' }
      }
    };
    return translations[id]?.[locale];
  };

  const blogPosts = [
    {
      id: 1,
      title: getTranslatedPost(1)?.title || '10 Bước Skincare Routine Cho Da Hoàn Hảo',
      excerpt: getTranslatedPost(1)?.excerpt || 'Khám phá quy trình chăm sóc da 10 bước giúp làn da của bạn luôn khỏe đẹp và rạng rỡ mỗi ngày.',
      image: 'https://images.unsplash.com/photo-1614159102349-eddb8b985aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzM1NDQwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(1)?.date || '10 Tháng 3, 2026',
      category: 'skincare',
      categoryLabel: getTranslatedPost(1)?.categoryLabel || 'Skincare',
    },
    {
      id: 2,
      title: getTranslatedPost(2)?.title || 'Thành Phần Tự Nhiên Trong Mỹ Phẩm Cao Cấp',
      excerpt: getTranslatedPost(2)?.excerpt || 'Tìm hiểu về các thành phần tự nhiên quý giá... được sử dụng trong các sản phẩm mỹ phẩm luxury.',
      image: 'https://images.unsplash.com/photo-1739981248829-ac9d4a6fecfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwY29zbWV0aWNzJTIwaW5ncmVkaWVudHN8ZW58MXx8fHwxNzczNTEyNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(2)?.date || '8 Tháng 3, 2026',
      category: 'ingredients',
      categoryLabel: getTranslatedPost(2)?.categoryLabel || 'Thành phần',
    },
    {
      id: 3,
      title: getTranslatedPost(3)?.title || 'Xu Hướng Makeup 2026: Vẻ Đẹp Tối Giản',
      excerpt: getTranslatedPost(3)?.excerpt || 'Khám phá xu hướng makeup tối giản, tự nhiên đang làm mưa làm gió trong năm 2026.',
      image: 'https://images.unsplash.com/photo-1748543668676-ea8241cb3886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2R1Y3QlMjBmbGF0bGF5JTIwYmVpZ2V8ZW58MXx8fHwxNzczNTQ0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(3)?.date || '5 Tháng 3, 2026',
      category: 'makeup',
      categoryLabel: getTranslatedPost(3)?.categoryLabel || 'Makeup',
    },
    {
      id: 4,
      title: getTranslatedPost(4)?.title || 'Bí Quyết Chăm Sóc Da Mùa Hè',
      excerpt: getTranslatedPost(4)?.excerpt || 'Những tips chăm sóc da hiệu quả trong mùa hè...',
      image: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGJlYXV0eSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzM1NDQwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(4)?.date || '2 Tháng 3, 2026',
      category: 'skincare',
      categoryLabel: getTranslatedPost(4)?.categoryLabel || 'Skincare',
    },
    {
      id: 5,
      title: getTranslatedPost(5)?.title || 'Cách Chọn Nước Hoa Phù Hợp Với Bạn',
      excerpt: getTranslatedPost(5)?.excerpt || 'Hướng dẫn chọn nước hoa phù hợp...',
      image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MzUwNDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(5)?.date || '28 Tháng 2, 2026',
      category: 'lifestyle',
      categoryLabel: getTranslatedPost(5)?.categoryLabel || 'Lifestyle',
    },
    {
      id: 6,
      title: getTranslatedPost(6)?.title || 'Chăm Sóc Da Tuổi 30: Phòng Ngừa Lão Hóa',
      excerpt: getTranslatedPost(6)?.excerpt || 'Những điều cần biết về chăm sóc da ở tuổi 30...',
      image: 'https://images.unsplash.com/photo-1736309530611-1cfd1e6602b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMGxpZmVzdHlsZSUyMHdvbWFufGVufDF8fHx8MTc3MzU0NDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(6)?.date || '25 Tháng 2, 2026',
      category: 'skincare',
      categoryLabel: getTranslatedPost(6)?.categoryLabel || 'Skincare',
    },
    {
      id: 7,
      title: getTranslatedPost(7)?.title || 'Những Sai Lầm Thường Gặp Khi Makeup',
      excerpt: getTranslatedPost(7)?.excerpt || 'Tránh những sai lầm phổ biến khi makeup...',
      image: 'https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MzU0NDA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(7)?.date || '20 Tháng 2, 2026',
      category: 'makeup',
      categoryLabel: getTranslatedPost(7)?.categoryLabel || 'Makeup',
    },
    {
      id: 8,
      title: getTranslatedPost(8)?.title || 'Chăm Sóc Cơ Thể Toàn Diện',
      excerpt: getTranslatedPost(8)?.excerpt || 'Quy trình chăm sóc cơ thể từ đầu đến chân...',
      image: 'https://images.unsplash.com/photo-1760647422523-f532034a49ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYm9keSUyMGxvdGlvbiUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(8)?.date || '15 Tháng 2, 2026',
      category: 'bodycare',
      categoryLabel: getTranslatedPost(8)?.categoryLabel || 'Body Care',
    },
    {
      id: 9,
      title: getTranslatedPost(9)?.title || 'Làm Đẹp Tự Nhiên Với Thực Phẩm',
      excerpt: getTranslatedPost(9)?.excerpt || 'Khám phá những thực phẩm giúp làm đẹp da...',
      image: 'https://images.unsplash.com/photo-1646526802761-98046c6f1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1NDQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: getTranslatedPost(9)?.date || '10 Tháng 2, 2026',
      category: 'lifestyle',
      categoryLabel: getTranslatedPost(9)?.categoryLabel || 'Lifestyle',
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [
    { value: 'all', label: t('all') },
    { value: 'skincare', label: 'Skincare' },
    { value: 'makeup', label: 'Makeup' },
    { value: 'bodycare', label: 'Body Care' },
    { value: 'ingredients', label: t('ingredients') },
    { value: 'lifestyle', label: 'Lifestyle' },
  ];

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

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-[var(--gold)] text-white shadow-md'
                    : 'bg-[var(--beige)] text-gray-700 hover:bg-[var(--pink-pastel)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              {t('showing', { count: filteredPosts.length })}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} category={post.categoryLabel} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-[var(--pink-pastel)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-4xl mb-4 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('learnMore')}
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t('newsletterDesc')}
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
