// Fonction Cloudflare Pages : POST /api/candidature
// Enregistre une candidature de futur concierge dans la table `candidatures` (voir supabase/leads.sql).

const CHAMPS = ['nom', 'ville', 'email', 'telephone', 'residence', 'anglais', 'parcours', 'demarrage'];

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Requête invalide' }, 400); }
  if (body.site_web) return json({ ok: true }, 200);
  if (!body.nom || !body.email || !body.telephone || !body.ville || body.consentement !== 'oui') {
    return json({ error: 'Champs obligatoires manquants' }, 422);
  }
  const c = { consentement: true };
  for (const k of CHAMPS) if (body[k]) c[k] = String(body[k]).slice(0, 2000);

  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/candidatures`, {
    method: 'POST',
    headers: {
      apikey: env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(c),
  });
  if (!res.ok) return json({ error: 'Enregistrement impossible' }, 502);
  return json({ ok: true }, 201);
}

function json(data, status) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
