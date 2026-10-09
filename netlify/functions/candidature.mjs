// POST /api/candidature : candidature concierge → Supabase (table candidatures) + copie e-mail via Netlify Forms
import { onRequestPost } from '../../functions/api/candidature.js';
import { traiter } from '../lib/shared.mjs';

export default (req) => traiter(req, onRequestPost, 'candidature');

export const config = { path: ['/api/candidature', '/api/candidature/'] };
