// Worker Cloudflare : sert le site statique (dist/) et l'API des formulaires.
// Variables à définir dans Cloudflare : SUPABASE_URL, SUPABASE_SERVICE_KEY
import { onRequestPost as lead } from '../functions/api/lead.js';
import { onRequestPost as candidature } from '../functions/api/candidature.js';

const ROUTES = { '/api/lead': lead, '/api/candidature': candidature };

export default {
  async fetch(request, env, ctx) {
    const { pathname } = new URL(request.url);
    const handler = ROUTES[pathname.replace(/\/$/, '')];
    if (handler) {
      if (request.method !== 'POST') return new Response('Méthode non autorisée', { status: 405 });
      if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_KEY) {
        return new Response(JSON.stringify({ error: 'Formulaires non configurés' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
      }
      return handler({ request, env, ctx });
    }
    return env.ASSETS.fetch(request);
  },
};
