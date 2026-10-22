import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { routeSeoData } from '../src/data/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

console.log('--- Generating Route-Specific Prerendered HTML for Social & Search Crawlers ---');

Object.entries(routeSeoData).forEach(([route, seo]) => {
  let html = baseTemplate;

  // 1. Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`);

  // 2. Replace primary meta tags
  html = html.replace(/<meta\s+name="title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="title" content="${seo.title}" />`);
  html = html.replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="description" content="${seo.description}" />`);
  html = html.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, `<link rel="canonical" href="${seo.canonical}" />`);

  // 3. Replace Open Graph tags
  html = html.replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:url" content="${seo.canonical}" />`);
  html = html.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:title" content="${seo.ogTitle || seo.title}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:description" content="${seo.ogDescription || seo.description}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:image" content="${seo.ogImage}" />`);
  html = html.replace(/<meta\s+property="og:image:alt"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:image:alt" content="${seo.imageAlt}" />`);

  // 4. Replace Twitter Card tags (using name="twitter:...")
  html = html.replace(/<meta\s+(?:name|property)="twitter:card"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:card" content="summary_large_image" />`);
  html = html.replace(/<meta\s+(?:name|property)="twitter:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:url" content="${seo.canonical}" />`);
  html = html.replace(/<meta\s+(?:name|property)="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${seo.ogTitle || seo.title}" />`);
  html = html.replace(/<meta\s+(?:name|property)="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${seo.ogDescription || seo.description}" />`);
  html = html.replace(/<meta\s+(?:name|property)="twitter:image"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:image" content="${seo.ogImage}" />`);
  html = html.replace(/<meta\s+(?:name|property)="twitter:image:alt"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:image:alt" content="${seo.imageAlt}" />`);

  // 5. Replace / Inject JSON-LD
  const jsonLdScript = `<script type="application/ld+json" id="route-jsonld">\n${JSON.stringify(seo.jsonLd, null, 2)}\n    </script>`;
  if (html.includes('<script type="application/ld+json">')) {
    html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, jsonLdScript);
  } else if (html.includes('id="route-jsonld"')) {
    html = html.replace(/<script type="application\/ld\+json" id="route-jsonld">[\s\S]*?<\/script>/i, jsonLdScript);
  } else {
    html = html.replace('</head>', `    ${jsonLdScript}\n  </head>`);
  }

  // 6. Write to destination file
  if (route === '/') {
    fs.writeFileSync(templatePath, html, 'utf-8');
    console.log(`✓ Prerendered HTML: / -> dist/index.html`);
  } else {
    const routeDir = path.join(distDir, route.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`✓ Prerendered HTML: ${route} -> dist/${route.replace(/^\//, '')}/index.html`);
  }
});

console.log('--- All 8 routes successfully prerendered with crawlable HTML ---');
