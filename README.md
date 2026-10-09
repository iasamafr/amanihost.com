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

## Mise en ligne (Netlify)

- Configuration dans `netlify.toml` : build `npm run build`, dossier `dist`, fonctions dans `netlify/functions/`
- `POST /api/lead` et `POST /api/candidature` : enregistrement dans Supabase + copie dans Netlify Forms (notification e-mail). Une demande n'est perdue que si les deux échouent.
- `reveil-supabase` : tâche planifiée quotidienne qui évite la mise en pause des bases Supabase (plan gratuit)
- Variables Netlify : `SUPABASE_URL` / `SUPABASE_SERVICE_KEY` (ou celles posées par l'extension Supabase : `SUPABASE_DATABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`), `MENAGE_SUPABASE_URL` / `MENAGE_SUPABASE_ANON_KEY` pour réveiller la base de l'appli ménage
- `public/__forms.html` déclare les formulaires à Netlify Forms : ne pas supprimer

## Ancienne mise en ligne (Cloudflare Workers, conservée pour retour arrière)

- Commande de build : `npm run build`, dossier de sortie : `dist`
- Le dossier `functions/` fournit l'API `POST /api/lead`
- Variables d'environnement : `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`
- Créer la table avec `supabase/leads.sql`

## Points à compléter avant la mise en ligne

- Identité légale de l'éditeur et e-mail de contact dans `src/data/site.ts`
- Grille de prix du simulateur de chaque commune (valeurs indicatives à valider)
- Relecture des textes de Sainte-Maxime
