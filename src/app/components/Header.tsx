"use client";

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '../../i18n/routing';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const t = useTranslations('Header');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('products'), href: '/products' },
    { name: t('blog'), href: '/blog' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl tracking-[0.2em] font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              MEIYEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide transition-colors hover:text-[var(--gold)] ${
                  pathname === item.href ? 'text-[var(--gold)]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-[var(--gold)] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <select
              value={locale}
              onChange={(e) => router.replace(pathname, { locale: e.target.value })}
              className="text-gray-700 hover:text-[var(--gold)] bg-transparent text-sm focus:outline-none cursor-pointer transition-colors"
            >
              <option value="en" className="text-gray-900">EN</option>
              <option value="zh-TW" className="text-gray-900">繁體</option>
            </select>
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pb-6 pt-2 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-3 text-sm tracking-wide transition-colors ${
                  pathname === item.href ? 'text-[var(--gold)]' : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
