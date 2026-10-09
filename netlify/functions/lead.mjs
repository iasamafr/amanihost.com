// POST /api/lead : demande propriétaire → Supabase (table leads) + copie e-mail via Netlify Forms
import { onRequestPost } from '../../functions/api/lead.js';
import { traiter } from '../lib/shared.mjs';

export default (req) => traiter(req, onRequestPost, 'lead');

export const config = { path: ['/api/lead', '/api/lead/'] };
