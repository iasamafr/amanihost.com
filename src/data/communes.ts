import type { Commune } from './types';

const modules = import.meta.glob<{ default: Commune }>('./communes/*.ts', { eager: true });

export const COMMUNES: Commune[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

export const communeParSlug = (slug: string) => COMMUNES.find((c) => c.slug === slug);

// Toutes les sous-pages d'une commune, dans l'ordre du menu
export const sousPages = (c: Commune) => [...c.pages, ...c.quartiers, ...c.voisines];
