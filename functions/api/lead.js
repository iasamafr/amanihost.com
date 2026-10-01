// Fonction Cloudflare Pages : POST /api/lead
// Variables d'environnement à définir dans Cloudflare : SUPABASE_URL, SUPABASE_SERVICE_KEY
// Enregistre la demande dans la table `leads` (voir supabase/leads.sql).

const CHAMPS = ['projet', 'chambres', 'delai', 'piscine', 'climatisation', 'vue_mer', 'nom', 'email', 'telephone', 'message', 'commune', 'page'];

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Requête invalide' }, 400);
  }

  // Champ piège anti-robots : rempli = robot, on répond OK sans enregistrer
  if (body.site_web) return json({ ok: true }, 200);

  if (!body.nom || !body.email || !body.telephone || body.consentement !== 'oui' || !body.commune) {
    return json({ error: 'Champs obligatoires manquants' }, 422);
  }

  const lead = {};
  for (const k of CHAMPS) {
    if (body[k] !== undefined && body[k] !== '') lead[k] = String(body[k]).slice(0, 1000);
  }
  lead.piscine = body.piscine === 'oui';
  lead.climatisation = body.climatisation === 'oui';
  lead.vue_mer = body.vue_mer === 'oui';
  lead.consentement = true;
  lead.referer = request.headers.get('referer')?.slice(0, 500) ?? null;
  lead.score = score(lead);

  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      apikey: env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(lead),
  });

  if (!res.ok) return json({ error: 'Enregistrement impossible' }, 502);
  return json({ ok: true }, 201);
}

// Qualification simple : critères AmaniHost (piscine, climatisation, taille, délai)
function score(l) {
  let s = 0;
  if (l.piscine) s += 3;
  if (l.climatisation) s += 2;
  if (l.vue_mer) s += 1;
  const ch = Number(l.chambres);
  if (ch >= 4) s += 2; else if (ch === 3) s += 1;
  if (l.delai === 'saison-prochaine' || l.delai === '3-mois') s += 2;
  return s; // sur 10
}

function json(data, status) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
