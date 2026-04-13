"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { SlidersHorizontal } from 'lucide-react';
import { ProductCard } from '../../components/ProductCard';
import { Newsletter } from '../../components/Newsletter';
import { productsData } from '../../../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const t = useTranslations('Products');
  const locale = useLocale();

  const getProductName = (name: string) => {
    return name;
  };

  const allProducts = productsData;

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== 'all' && (!product.categories || !product.categories.includes(selectedCategory))) {
      return false;
    }
    if (priceRange === 'under5k' && product.price >= 5000) {
      return false;
    }
    if (priceRange === '5k-7k' && (product.price < 5000 || product.price >= 7000)) {
      return false;
    }
    if (priceRange === 'over7k' && product.price < 7000) {
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
                  <div className="space-y-2 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                    {[
                      { value: 'all', label: t('all') },
                      { value: 'cat_hyperpigmentation', label: t('cat_hyperpigmentation') },
                      { value: 'cat_lifestyle_recovery', label: t('cat_lifestyle_recovery') },
                      { value: 'cat_acne', label: t('cat_acne') },
                      { value: 'cat_hair_regeneration', label: t('cat_hair_regeneration') },
                      { value: 'cat_cellular_regeneration', label: t('cat_cellular_regeneration') },
                      { value: 'cat_sports_performance', label: t('cat_sports_performance') },
                      { value: 'cat_weight_loss', label: t('cat_weight_loss') },
                      { value: 'cat_addiction_management', label: t('cat_addiction_management') },
                      { value: 'cat_energy_support', label: t('cat_energy_support') },
                      { value: 'cat_sleep', label: t('cat_sleep') },
                      { value: 'cat_heart_health', label: t('cat_heart_health') },
                      { value: 'cat_immune_support', label: t('cat_immune_support') },
                      { value: 'cat_pms', label: t('cat_pms') },
                      { value: 'cat_joint_mobility', label: t('cat_joint_mobility') },
                      { value: 'cat_chronic_fatigue', label: t('cat_chronic_fatigue') },
                      { value: 'cat_cognitive_health', label: t('cat_cognitive_health') },
                      { value: 'cat_blood_pressure', label: t('cat_blood_pressure') },
                      { value: 'cat_cholesterol', label: t('cat_cholesterol') },
                      { value: 'cat_nervous_system', label: t('cat_nervous_system') },
                      { value: 'cat_bone_teeth', label: t('cat_bone_teeth') },
                      { value: 'cat_anxiety', label: t('cat_anxiety') },
                      { value: 'cat_eye_health', label: t('cat_eye_health') },
                      { value: 'cat_liver_health', label: t('cat_liver_health') },
                      { value: 'cat_menopause', label: t('cat_menopause') }
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
                      { value: 'under5k', label: t('under5k') },
                      { value: '5k-7k', label: t('5kTo7k') },
                      { value: 'over7k', label: t('over7k') },
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
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} {...product} priority={index < 6} />
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
