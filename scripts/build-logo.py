"""Génère les fichiers du logo AmaniHost (piste « l'arche ») avec le texte vectorisé.

Usage : python3 scripts/build-logo.py  (nécessite fonttools + brotli)
Sortie : public/brand/*.svg et public/favicon.svg
"""
import io
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / 'node_modules'
OUT = ROOT / 'public' / 'brand'
OUT.mkdir(parents=True, exist_ok=True)

NAVY, GOLD, CREAM = '#13233f', '#b08a3e', '#f4efe4'

serif = TTFont(FONTS / '@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2')
sans_var = TTFont(FONTS / '@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2')
sans = instantiateVariableFont(sans_var, {'wght': 600})


def text_path(font, text, size, x=0.0, baseline=0.0, tracking=0.0):
    """Renvoie (d, largeur) pour un texte vectorisé. tracking en em."""
    upm = font['head'].unitsPerEm
    scale = size / upm
    cmap = font.getBestCmap()
    gs = font.getGlyphSet()
    hmtx = font['hmtx']
    pen = SVGPathPen(gs)
    cursor = 0.0
    for i, ch in enumerate(text):
        name = cmap[ord(ch)]
        tp = TransformPen(pen, (scale, 0, 0, -scale, x + cursor, baseline))
        gs[name].draw(tp)
        cursor += hmtx[name][0] * scale
        if i < len(text) - 1:
            cursor += tracking * size
    return pen.getCommands(), cursor


def arch(x, y, w, h, stroke, sw):
    """Arche : deux montants et un plein cintre. (x, y) = coin haut gauche de la boîte."""
    r = w / 2
    left, right, bottom = x, x + w, y + h
    return (f'<path d="M{left:.2f} {bottom:.2f}V{y + r:.2f}A{r:.2f} {r:.2f} 0 0 1 {right:.2f} {y + r:.2f}V{bottom:.2f}" '
            f'fill="none" stroke="{stroke}" stroke-width="{sw}" stroke-linecap="butt"/>')


def symbol(x, y, scale, ink):
    """Symbole dans une boîte de 46 x 54 unités, mis à l'échelle."""
    w, h = 40 * scale, 51 * scale
    sw = 2 * scale
    ax = x + 3 * scale
    ay = y + 2 * scale
    parts = [arch(ax, ay, w, h, GOLD, round(sw, 2))]
    size = 37 * scale
    _, aw = text_path(serif, 'A', size)
    d, _ = text_path(serif, 'A', size, x=x + 23 * scale - aw / 2, baseline=y + 46.5 * scale)
    parts.append(f'<path d="{d}" fill="{ink}"/>')
    return ''.join(parts)


def svg(w, h, body, title, bg=None):
    rect = f'<rect width="{w:.0f}" height="{h:.0f}" fill="{bg}"/>' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" role="img">'
            f'<title>{title}</title>{rect}{body}</svg>\n')


def horizontal(ink, with_tagline=True):
    s = 1.0
    body = symbol(0, 0, s, ink)
    name_x = 55
    d, nw = text_path(serif, 'AmaniHost', 34, x=name_x, baseline=33 if with_tagline else 40, tracking=0.02)
    body += f'<path d="{d}" fill="{ink}"/>'
    width = name_x + nw
    if with_tagline:
        td, tw = text_path(sans, 'CONCIERGES DE VILLAS', 9.2, x=name_x + 1, baseline=50, tracking=0.3)
        body += f'<path d="{td}" fill="{GOLD}"/>'
        width = max(width, name_x + 1 + tw)
    return body, width + 2, 56


def stacked(ink):
    W = 240
    s = 1.5
    body = symbol(W / 2 - 23 * s, 0, s, ink)
    _, nw = text_path(serif, 'AmaniHost', 40, tracking=0.02)
    d, _ = text_path(serif, 'AmaniHost', 40, x=(W - nw) / 2, baseline=120, tracking=0.02)
    body += f'<path d="{d}" fill="{ink}"/>'
    _, tw = text_path(sans, 'CONCIERGES DE VILLAS', 10, tracking=0.3)
    td, _ = text_path(sans, 'CONCIERGES DE VILLAS', 10, x=(W - tw) / 2, baseline=142, tracking=0.3)
    body += f'<path d="{td}" fill="{GOLD}"/>'
    return body, W, 148


files = {}
for variant, ink, bg in (('marine', CREAM, NAVY), ('clair', NAVY, None)):
    b, w, h = horizontal(ink)
    files[f'logo-horizontal-{variant}.svg'] = svg(w, h, b, 'AmaniHost, concierges de villas')
    b, w, h = horizontal(ink, with_tagline=False)
    files[f'logo-horizontal-court-{variant}.svg'] = svg(w, h, b, 'AmaniHost')
    b, w, h = stacked(ink)
    files[f'logo-empile-{variant}.svg'] = svg(w, h, b, 'AmaniHost, concierges de villas')
    files[f'symbole-{variant}.svg'] = svg(46, 56, symbol(0, 0, 1, ink), 'AmaniHost')

# Favicon : fond marine, symbole recentré
fav = f'<rect width="32" height="32" rx="6" fill="{NAVY}"/>' + symbol(16 - 23 * 0.48, 2.6, 0.48, CREAM)
(ROOT / 'public' / 'favicon.svg').write_text(svg(32, 32, fav, 'AmaniHost'))

import re
files = {k: re.sub(r"(\d+\.\d{2})\d+", r"\1", v) for k, v in files.items()}
for name, content in files.items():
    (OUT / name).write_text(content)
print('\n'.join(sorted(files)))
