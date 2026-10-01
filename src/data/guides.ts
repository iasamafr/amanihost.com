import type { Guide } from './types';

const modules = import.meta.glob<{ default: Guide }>('./guides/*.ts', { eager: true });

// Du plus récent au plus ancien
export const GUIDES: Guide[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => b.publie.localeCompare(a.publie) || a.h1.localeCompare(b.h1, 'fr'));

export const dateFr = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
