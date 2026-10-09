// Tâche planifiée : réveille chaque jour les bases Supabase (plan gratuit = pause après 7 jours calmes).
// Tous les jours à 6 h 17 UTC (8 h 17 à Paris en été, 7 h 17 en hiver).
// Variables : base du site (SUPABASE_URL / SUPABASE_SERVICE_KEY ou celles de l'extension),
// base de l'appli ménage (MENAGE_SUPABASE_URL / MENAGE_SUPABASE_ANON_KEY, facultatives).
import { supabaseEnv } from '../lib/shared.mjs';

async function ping(nom, url, cle, table) {
  if (!url || !cle) return console.log(`${nom} : non configurée`);
  try {
    const res = await fetch(`${url}/rest/v1/${table}?select=id&limit=1`, {
      headers: { apikey: cle, Authorization: `Bearer ${cle}` },
    });
    console.log(`${nom} : ${res.status}`);
  } catch (e) {
    console.log(`${nom} : échec ${e}`);
  }
}

export default async () => {
  const site = supabaseEnv();
  await ping('amanihost (leads)', site.SUPABASE_URL, site.SUPABASE_SERVICE_KEY, 'leads');
  await ping('amanihost-menages', Netlify.env.get('MENAGE_SUPABASE_URL'), Netlify.env.get('MENAGE_SUPABASE_ANON_KEY'), 'villas');
};

export const config = { schedule: '17 6 * * *' };
