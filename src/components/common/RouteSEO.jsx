import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeSeoData } from '@/data/seoData';

export const RouteSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = routeSeoData[location.pathname] || routeSeoData['/'];

    // 1. Document Title
    document.title = seo.title;

    // Helper to update or create a meta tag
    const setMeta = (attrName, attrValue, content) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to update or create a link tag
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Primary Meta Tags
    setMeta('name', 'title', seo.title);
    setMeta('name', 'description', seo.description);
    setLink('canonical', seo.canonical);

    // 3. Open Graph Tags
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:title', seo.ogTitle || seo.title);
    setMeta('property', 'og:description', seo.ogDescription || seo.description);
    setMeta('property', 'og:image', seo.ogImage);
    setMeta('property', 'og:image:alt', seo.imageAlt);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');

    // 4. Twitter Card Tags
    setMeta('property', 'twitter:card', 'summary_large_image');
    setMeta('property', 'twitter:url', seo.canonical);
    setMeta('property', 'twitter:title', seo.ogTitle || seo.title);
    setMeta('property', 'twitter:description', seo.ogDescription || seo.description);
    setMeta('property', 'twitter:image', seo.ogImage);
    setMeta('property', 'twitter:image:alt', seo.imageAlt);

    // 5. Route-Specific JSON-LD
    let scriptEl = document.getElementById('route-jsonld');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'route-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(seo.jsonLd);
  }, [location.pathname]);

  return null;
};

export default RouteSEO;
