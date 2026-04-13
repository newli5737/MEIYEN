import { Link } from '../../i18n/routing';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-[var(--beige)] pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="text-3xl tracking-[0.2em] font-light mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              MEIYEN
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {t('brandDesc')}
            </p>
            <div className="flex space-x-4">
              {/* Removed empty social links as requested */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-700 text-sm hover:text-[var(--gold)] hover:underline transition-all">{t('about')}</Link></li>
              <li><Link href="/products" className="text-gray-700 text-sm hover:text-[var(--gold)] hover:underline transition-all">{t('products')}</Link></li>

              <li><Link href="/contact" className="text-gray-700 text-sm hover:text-[var(--gold)] hover:underline transition-all">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4">{t('policies')}</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-700 text-sm">{t('returnPolicy')}</span></li>
              <li><span className="text-gray-700 text-sm">{t('privacy')}</span></li>
              <li><span className="text-gray-700 text-sm">{t('terms')}</span></li>
              <li><span className="text-gray-700 text-sm">{t('buyingGuide')}</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--gold)]" />
                <span>info@meiyen.tw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-center">
          <div className="text-sm">
            © 2026 MEIYEN. {t('rights')}.
          </div>
        </div>
      </div>
    </footer>
  );
}
