import { MetadataRoute } from 'next';
import { productsData } from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://meiyen.vercel.app';
  
  // Base routes mapped to both locales
  const routes = [
    '',
    '/about',
    '/contact',
    '/products',
  ];
  
  const locales = ['en', 'zh-TW'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  // Add static routes
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  // Add dynamic product routes
  for (const product of productsData) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    }
  }

  return sitemapEntries;
}
