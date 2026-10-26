import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routeSeoData, siteBaseUrl } from '../src/data/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

console.log('--- Generating Prerendered HTML for Single-Page Website ---');

const seo = routeSeoData['/'];
let html = baseTemplate;

html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`);
html = html.replace(/<meta\s+name="title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="title" content="${seo.title}" />`);
html = html.replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="description" content="${seo.description}" />`);
html = html.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, `<link rel="canonical" href="${seo.canonical}" />`);
html = html.replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:url" content="${seo.canonical}" />`);
html = html.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:title" content="${seo.ogTitle}" />`);
html = html.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:description" content="${seo.ogDescription}" />`);
html = html.replace(/<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:image" content="${seo.ogImage}" />`);
html = html.replace(/<meta\s+property="og:image:alt"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:image:alt" content="${seo.imageAlt}" />`);
html = html.replace(/<meta\s+(?:name|property)="twitter:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:url" content="${seo.canonical}" />`);
html = html.replace(/<meta\s+(?:name|property)="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${seo.ogTitle}" />`);
html = html.replace(/<meta\s+(?:name|property)="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${seo.ogDescription}" />`);
html = html.replace(/<meta\s+(?:name|property)="twitter:image"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:image" content="${seo.ogImage}" />`);
html = html.replace(/<meta\s+(?:name|property)="twitter:image:alt"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:image:alt" content="${seo.imageAlt}" />`);

const jsonLdScript = `<script type="application/ld+json" id="route-jsonld">\n${JSON.stringify(seo.jsonLd, null, 2)}\n    </script>`;
if (html.includes('<script type="application/ld+json">')) {
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, jsonLdScript);
} else {
  html = html.replace('</head>', `    ${jsonLdScript}\n  </head>`);
}

fs.writeFileSync(templatePath, html, 'utf-8');
console.log('✓ Prerendered HTML: / -> dist/index.html');

// Create redirect stubs for legacy routes to prevent 404s
const legacyRoutes = {
  'about': '/#about',
  'business': '/#business',
  'collaborate': '/#collaborations',
  'media': '/#media',
  'contact': '/#contact',
  'hospitality': '/#business',
  'lifestyle': '/#about'
};

Object.entries(legacyRoutes).forEach(([route, target]) => {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  const redirectHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Redirecting...</title><link rel="canonical" href="${siteBaseUrl}${target}"><meta http-equiv="refresh" content="0; url=${target}"></head><body><script>window.location.href = "${target}";</script></body></html>`;
  fs.writeFileSync(path.join(routeDir, 'index.html'), redirectHtml, 'utf-8');
  console.log(`✓ Legacy Redirect Created: /${route} -> ${target}`);
});

console.log('--- Prerender build complete ---');
