// Retire du sitemap les pages marquées noindex (pages minces, secteurs pas encore ouverts).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const file = join(dist, 'sitemap-0.xml');
const xml = readFileSync(file, 'utf8');
let retirees = 0;
const out = xml.replace(/<url>.*?<\/url>/gs, (bloc) => {
  const loc = bloc.match(/<loc>(.*?)<\/loc>/)[1];
  const chemin = new URL(loc).pathname;
  const html = join(dist, chemin, chemin.endsWith('/') ? 'index.html' : '');
  if (existsSync(html) && /<meta name="robots" content="noindex/.test(readFileSync(html, 'utf8'))) {
    retirees++;
    return '';
  }
  return bloc;
});
writeFileSync(file, out);
console.log(`sitemap : ${retirees} page(s) noindex retirée(s)`);
