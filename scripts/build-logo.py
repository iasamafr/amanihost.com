"""Génère les fichiers du logo AmaniHost (piste « Couture ») avec le texte vectorisé.

AMANI en Bodoni Moda capitales espacées, « HOST » en Josefin Sans entre deux filets dorés.
Usage : python3 scripts/build-logo.py  (nécessite fonttools + brotli, et npm install)
Sortie : public/brand/*.svg et public/favicon.svg
"""
import re
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = Path(__file__).resolve().parent.parent
FS = ROOT / 'node_modules' / '@fontsource'
OUT = ROOT / 'public' / 'brand'
OUT.mkdir(parents=True, exist_ok=True)
for old in OUT.glob('*.svg'):
    old.unlink()

NAVY, GOLD, CREAM = '#13233f', '#b08a3e', '#f4efe4'

bodoni = TTFont(FS / 'bodoni-moda/files/bodoni-moda-latin-500-normal.woff2')
josefin = TTFont(FS / 'josefin-sans/files/josefin-sans-latin-600-normal.woff2')


def measure(font, text, size, tracking=0.0):
    upm = font['head'].unitsPerEm
    cmap, hmtx = font.getBestCmap(), font['hmtx']
    widths = [hmtx[cmap[ord(c)]][0] * size / upm for c in text]
    return sum(widths) + tracking * size * (len(text) - 1)


def text_path(font, text, size, x, baseline, tracking=0.0):
    upm = font['head'].unitsPerEm
    scale = size / upm
    cmap, gs, hmtx = font.getBestCmap(), font.getGlyphSet(), font['hmtx']
    pen = SVGPathPen(gs)
    cursor = 0.0
    for ch in text:
        name = cmap[ord(ch)]
        gs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x + cursor, baseline)))
        cursor += hmtx[name][0] * scale + tracking * size
    return pen.getCommands()


def cap_height(font, size):
    os2 = font['OS/2']
    return getattr(os2, 'sCapHeight', 0.7 * font['head'].unitsPerEm) * size / font['head'].unitsPerEm


def wordmark(ink, size=48, with_host=True, sub='HOST'):
    """AMANI centré, puis sous-titre entre deux filets. Renvoie (corps, largeur, hauteur)."""
    tr = 0.26
    pad = size * 0.08
    aw = measure(bodoni, 'AMANI', size, tr)
    ch = cap_height(bodoni, size)
    base = pad + ch
    parts = []
    W = aw + 2 * pad
    H = base + pad
    if with_host:
        hs = size * 0.24
        htr = 0.6 if sub == 'HOST' else 0.32
        hw = measure(josefin, sub, hs, htr)
        rule = size * 0.95 if sub == 'HOST' else size * 0.35
        gap = size * 0.25
        total = hw + 2 * (rule + gap)
        W = max(aw, total) + 2 * pad
        hbase = base + size * 0.52
        hx = (W - hw) / 2
        parts.append(f'<path d="{text_path(josefin, sub, hs, hx, hbase, htr)}" fill="{GOLD}"/>')
        ry = hbase - cap_height(josefin, hs) / 2
        lw = max(0.8, size / 48)
        parts.append(f'<path d="M{hx - gap - rule:.2f} {ry:.2f}h{rule:.2f}M{hx + hw + gap:.2f} {ry:.2f}h{rule:.2f}" stroke="{GOLD}" stroke-width="{lw:.2f}"/>')
        H = hbase + pad
    ax = (W - aw) / 2
    parts.insert(0, f'<path d="{text_path(bodoni, "AMANI", size, ax, base, tr)}" fill="{ink}"/>')
    return ''.join(parts), W, H


def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.1f} {h:.1f}" width="{w:.0f}" height="{h:.0f}" role="img">'
            f'<title>{title}</title>{body}</svg>\n')


def monogram(ink, bg=None, size=32, radius=6):
    """A seul centré dans un carré (favicon, avatar)."""
    s = size * 0.72
    aw = measure(bodoni, 'A', s)
    ch = cap_height(bodoni, s)
    rect = f'<rect width="{size}" height="{size}" rx="{radius}" fill="{bg}"/>' if bg else ''
    d = text_path(bodoni, 'A', s, (size - aw) / 2, (size + ch) / 2)
    return rect + f'<path d="{d}" fill="{ink}"/>'


files = {}
for variant, ink in (('marine', CREAM), ('clair', NAVY)):
    b, w, h = wordmark(ink)
    files[f'logo-{variant}.svg'] = svg(w, h, b, 'AmaniHost')
    b, w, h = wordmark(ink, sub='CONCIERGES DE VILLAS')
    files[f'logo-signature-{variant}.svg'] = svg(w, h, b, 'AmaniHost, concierges de villas')
    b, w, h = wordmark(ink, with_host=False)
    files[f'amani-seul-{variant}.svg'] = svg(w, h, b, 'AmaniHost')
files['monogramme-marine.svg'] = svg(512, 512, monogram(CREAM, NAVY, 512, 0), 'AmaniHost')
files['monogramme-clair.svg'] = svg(512, 512, monogram(NAVY, '#fbf8f2', 512, 0), 'AmaniHost')
files = {k: re.sub(r'(\d+\.\d{2})\d+', r'\1', v) for k, v in files.items()}
for name, content in files.items():
    (OUT / name).write_text(content)
fav = re.sub(r'(\d+\.\d{2})\d+', r'\1', svg(32, 32, monogram(CREAM, NAVY), 'AmaniHost'))
(ROOT / 'public' / 'favicon.svg').write_text(fav)
print('\n'.join(sorted(files)))
