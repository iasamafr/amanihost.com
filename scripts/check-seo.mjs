// Contrôle qualité SEO du dossier dist/ — lancé après chaque génération.
// node scripts/check-seo.mjs
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(DIST);

const pick = (h, re) => (h.match(re) || [])[1];
const errors = [], warnings = [];
const titles = new Map(), descs = new Map();
let jsBytes = 0;

for (const f of files) {
  const h = readFileSync(f, 'utf8');
  const url = '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '');
  const noindex = /name="robots" content="noindex/.test(h);
  const title = pick(h, /<title>([^<]*)<\/title>/);
  const desc = pick(h, /<meta name="description" content="([^"]*)"/);
  const h1s = (h.match(/<h1[\s>]/g) || []).length;
  if (!title) errors.push(`${url} : title manquant`);
  else if (title.length > 60) warnings.push(`${url} : title ${title.length} car. (> 60) « ${title} »`);
  if (!desc) errors.push(`${url} : meta description manquante`);
  else if (desc.length > 160) warnings.push(`${url} : description ${desc.length} car. (> 160)`);
  if (h1s !== 1) errors.push(`${url} : ${h1s} H1`);
  if (!/<link rel="canonical"/.test(h)) errors.push(`${url} : canonical manquant`);
  if (!noindex) {
    if (titles.has(title)) errors.push(`${url} : title identique à ${titles.get(title)}`);
    if (descs.has(desc)) errors.push(`${url} : description identique à ${descs.get(desc)}`);
    titles.set(title, url); descs.set(desc, url);
  }
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { errors.push(`${url} : JSON-LD invalide`); }
  }
  for (const m of h.matchAll(/href="(\/[^"#?]*)/g)) {
    const target = m[1];
    const p = join(DIST, target, target.endsWith('/') ? 'index.html' : '');
    if (!existsSync(p) && !existsSync(join(DIST, target))) errors.push(`${url} : lien cassé ${target}`);
  }
  for (const m of h.matchAll(/<script type="module" src="([^"]+)"/g)) {
    const p = join(DIST, m[1]);
    if (existsSync(p)) jsBytes = Math.max(jsBytes, statSync(p).size);
  }
}

console.log(`${files.length} pages contrôlées`);
warnings.forEach((w) => console.log('ATTENTION', w));
errors.forEach((e) => console.log('ERREUR', e));
console.log(`Plus gros script JS : ${(jsBytes / 1024).toFixed(1)} Ko`);
process.exit(errors.length ? 1 : 0);
