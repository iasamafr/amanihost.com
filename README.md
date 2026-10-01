# amanihost.com — réseau de rubriques communes

Site statique Astro. Une rubrique par commune, générée à partir d'une fiche de données.

## Commandes

- `npm install` puis `npm run build` : génère le site dans `dist/`
- `node scripts/check-seo.mjs` : contrôle titles, descriptions, H1, canonicals, doublons, JSON-LD et liens internes
- `npm run dev` : aperçu local

## Ajouter une commune

1. Copier `src/data/communes/sainte-maxime.ts` vers `src/data/communes/<slug>.ts`
2. Remplir les données de marché, la grille du simulateur et les textes (contenu propre à la commune, jamais recopié)
3. Laisser `aRelire: true` tant que les textes ne sont pas validés (bandeau de préproduction)
4. Générer puis lancer le contrôle qualité

## Mise en ligne (Cloudflare Pages)

- Commande de build : `npm run build`, dossier de sortie : `dist`
- Le dossier `functions/` fournit l'API `POST /api/lead`
- Variables d'environnement : `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`
- Créer la table avec `supabase/leads.sql`

## Points à compléter avant la mise en ligne

- Identité légale de l'éditeur et e-mail de contact dans `src/data/site.ts`
- Grille de prix du simulateur de chaque commune (valeurs indicatives à valider)
- Relecture des textes de Sainte-Maxime
