// Outils communs aux fonctions Netlify d'amanihost.com.
// Variables lues dans Netlify : SUPABASE_URL ou SUPABASE_DATABASE_URL (extension Supabase),
// SUPABASE_SERVICE_KEY ou SUPABASE_SERVICE_ROLE_KEY (extension Supabase).

export function supabaseEnv() {
  return {
    SUPABASE_URL: Netlify.env.get('SUPABASE_URL') || Netlify.env.get('SUPABASE_DATABASE_URL'),
    SUPABASE_SERVICE_KEY: Netlify.env.get('SUPABASE_SERVICE_KEY') || Netlify.env.get('SUPABASE_SERVICE_ROLE_KEY'),
  };
}

// Copie de sécurité dans Netlify Forms (notification e-mail configurée dans Netlify).
// Si Supabase est indisponible, la demande n'est pas perdue.
export async function copieNetlifyForms(origin, formName, data) {
  const params = new URLSearchParams({ 'form-name': formName });
  for (const [k, v] of Object.entries(data)) {
    if (v !== undefined && v !== null && v !== '' && k !== 'site_web') params.set(k, String(v).slice(0, 2000));
  }
  try {
    const res = await fetch(`${origin}/__forms.html`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}

// Enchaîne l'enregistrement Supabase et la copie e-mail.
// La demande est acceptée dès qu'au moins une des deux destinations l'a reçue.
export async function traiter(req, handler, formName) {
  if (req.method !== 'POST') return new Response('Méthode non autorisée', { status: 405 });
  const origin = new URL(req.url).origin;
  const brut = await req.text();
  let body;
  try { body = JSON.parse(brut); } catch { return json({ error: 'Requête invalide' }, 400); }

  const env = supabaseEnv();
  let statut = 503;
  if (env.SUPABASE_URL && env.SUPABASE_SERVICE_KEY) {
    const copieReq = new Request(req.url, { method: 'POST', headers: req.headers, body: brut });
    const res = await handler({ request: copieReq, env });
    statut = res.status;
    // Erreurs de saisie (400/422) ou robot (200) : on renvoie tel quel, sans copie
    if (statut < 500 && statut !== 201) return res;
  }
  // Champ piège : robot, rien à copier
  if (body.site_web) return json({ ok: true }, 200);

  const copie = await copieNetlifyForms(origin, formName, body);
  if (statut === 201 || copie) return json({ ok: true }, 201);
  return json({ error: 'Enregistrement impossible' }, 502);
}

export function json(data, status) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
