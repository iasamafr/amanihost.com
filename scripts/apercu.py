# Assemble dist/ en une seule page HTML navigable pour l'aperçu (artifact)
import re, os, html, sys
d='dist'; out=sys.argv[1]
css=open([f"dist/_astro/{f}" for f in os.listdir('dist/_astro') if f.endswith('.css')][0]).read()
css=re.sub(r'@font-face\{[^}]*\}','',css).replace("'Manrope Variable'","'Manrope'")
pages={}
for root,_,files in os.walk(d):
    for f in files:
        if not f.endswith('.html'): continue
        p=os.path.join(root,f); path='/'+os.path.relpath(p,d).replace('index.html','')
        if path=='/404.html': continue
        h=open(p).read()
        title=re.search(r'<title>(.*?)</title>',h).group(1)
        body=re.sub(r'<link[^>]*>','',re.search(r'<body>(.*)</body>',h,re.S).group(1))
        pages[path]=(title,body)
order=sorted(pages,key=lambda x:(x!='/',x))
tpl=''.join(f'<template data-path="{p}" data-title="{html.escape(pages[p][0])}">{pages[p][1]}</template>' for p in order)
js=r'''
const root=document.getElementById('pv-root'), sel=document.getElementById('pv-nav');
function go(path, hash){
  const t=document.querySelector('template[data-path="'+path+'"]'); if(!t) return;
  root.innerHTML=''; root.appendChild(t.content.cloneNode(true));
  root.querySelectorAll('script').forEach(old=>{ if(old.type==='application/ld+json') return;
    const s=document.createElement('script'); if(old.type) s.type=old.type; s.textContent=old.textContent; old.replaceWith(s); });
  document.title=t.dataset.title; sel.value=path; document.getElementById('pv-url').textContent='amanihost.com'+path;
  if(hash){const el=root.querySelector(hash); if(el){el.scrollIntoView(); return;}}
  window.scrollTo(0,0);
}
document.addEventListener('click',e=>{const a=e.target.closest('a'); if(!a) return; const href=a.getAttribute('href')||'';
  if(href.startsWith('#')){e.preventDefault(); const el=root.querySelector(href); if(el) el.scrollIntoView({behavior:'smooth'}); return;}
  if(href.startsWith('/')){e.preventDefault(); const [p,h]=href.split('#'); go(p,h?'#'+h:null);} });

sel.addEventListener('change',()=>go(sel.value)); go('/');
'''
bar='''.preview-bar{position:sticky;top:env(safe-area-inset-top,0px);z-index:10;background:#0b1528;color:#c9cfdb;font:500 13px/1.4 var(--body);padding:8px 16px;display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center}
.preview-bar b{color:#efe4cc}.preview-bar select{font:inherit;background:#13233f;color:#faf6ee;border:1px solid #2c3f63;border-radius:4px;padding:4px 6px;max-width:100%}'''
opts=''.join(f'<option value="{p}">{p}</option>' for p in order)
open(out,'w').write(f'''<title>Aperçu amanihost.com</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=Manrope:wght@400..700&display=swap">
<style>{css}{bar}</style>
<div class="preview-bar"><b>Aperçu amanihost.com</b><label for="pv-nav">Page :</label><select id="pv-nav">{opts}</select><span id="pv-url"></span></div>
<div id="pv-root"></div>{tpl}<script>{js}</script>''')
print(len(order),'pages')
