"use client";

import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('successMessage'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[var(--beige)] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl lg:text-6xl mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('title')}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {t('getInTouch')}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--pink-pastel)] p-4 rounded-full">
                  <MapPin className="text-[var(--gold)] w-6 h-6" />
                </div>
                <p className="text-gray-600">{t('address')}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--pink-pastel)] p-4 rounded-full">
                  <Phone className="text-[var(--gold)] w-6 h-6" />
                </div>
                <p className="text-gray-600">{t('phone')}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[var(--pink-pastel)] p-4 rounded-full">
                  <Mail className="text-[var(--gold)] w-6 h-6" />
                </div>
                <p className="text-gray-600">{t('email')}</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl mb-6 text-center">{t('formTitle')}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('namePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t('emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white rounded-xl transition-colors font-medium shadow-lg hover:shadow-xl"
                >
                  {t('submit')}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
