"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('successMessage'));
    setEmail('');
  };

  return (
    <section className="bg-[var(--pink-pastel)] py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-[var(--gold)]" />
          <h2 
            className="text-3xl lg:text-4xl mb-4 tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('title')}
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              required
              className="flex-1 px-6 py-3 rounded-full border-2 border-white bg-white/80 backdrop-blur-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-white rounded-full transition-colors whitespace-nowrap"
            >
              {t('subscribe')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
