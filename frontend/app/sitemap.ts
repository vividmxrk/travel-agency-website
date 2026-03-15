import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pujatravels.in';
  const routes = ['', '/about', '/tour-packages', '/car-rental', '/services', '/gallery', '/blog', '/contact'];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: 'weekly', priority: route === '' ? 1 : 0.8 }));
}
