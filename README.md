# Paco & Carolina · 31.07.2026

> *Un atardecer entre flores, brindis y conversación.*

A handcrafted, single-page wedding microsite in **warm bohemian** style — built with nothing but HTML, CSS and a sprinkle of vanilla JavaScript. No frameworks, no build step, no tracking. Just an invitation, with care.

---

## ✨ What's inside

A scroll-driven invitation with everything our guests need to know:

| Section | What it does |
|---|---|
| **Hero** | Names, date and a soft botanical scene with parallax |
| **Nosotros** | A polaroid portrait and a personal note from the couple |
| **Cuenta atrás** | Live countdown to `2026-07-31 18:30 (Madrid time)` |
| **Cuándo** | Date card — *viernes 31 de julio, 18:30 h* |
| **Dónde** | *La casita de madera*, with an inline SVG illustration and a Google Maps link |
| **Detalles** | Cocktail format, live band, party favors, conversation corners |
| **Cronograma** | The rhythm of the day, from welcome drink to dance floor |
| **RSVP** | One-tap WhatsApp confirmation (deadline: 15 July 2026) |
| **FAQ** | Dress code, plus-ones, parking, gifts |

---

## 🎨 Aesthetic

A *boho cálido* palette inspired by sun-bleached linen, dried flowers and amber light.

```
mostaza   #B8763E   ·   salvia   #6B7F5C
rosa      #E8B4A6   ·   marrón   #3D2E26
crema     #F8F1E4   ·   blanco   #FBF7EF
```

Typography pairs **Parisienne** (display script), **Cormorant Garamond** (serif headings) and **Inter** (UI sans).

All decorative botanicals — leaves, branches, blooms, the venue illustration — are hand-built inline SVG. Zero image dependencies beyond the couple's photo.

---

## 🛠️ Stack

- **HTML5** — semantic, accessible, single page
- **CSS** — custom properties, fluid type, `IntersectionObserver`-driven reveals
- **Vanilla JS** — countdown, smooth in-page nav, subtle hero parallax (respects `prefers-reduced-motion`)
- **Google Fonts** — Parisienne · Cormorant Garamond · Inter

No bundlers. No package.json. No dependencies to audit.

---

## 📁 Files

```
.
├── index.html     # The whole invitation
├── styles.css     # Boho-warm design system
├── script.js      # Countdown, reveals, smooth nav, parallax
├── foto1.jpeg     # The couple
└── README.md      # You are here
```

---

## 🚀 Run it locally

It's static. Open it however you like:

```bash
# Option 1 — just double-click index.html

# Option 2 — a tiny dev server (any will do)
python3 -m http.server 8080
#   → http://localhost:8080
```

To deploy: drop the folder on **GitHub Pages**, **Netlify**, **Vercel** or any static host. Done.

---

## ♿ Accessibility & care

- Semantic landmarks (`header`, `nav`, `section`, `footer`) and skip-friendly anchors
- Decorative SVGs marked `aria-hidden`, meaningful images carry `alt`
- Honors `prefers-reduced-motion` — parallax stops, reveals stay graceful
- Open Graph metadata so the link previews beautifully when shared

---

## 📲 The WhatsApp invitation

The message we send to our people, ready to copy-paste:

```
🌿✨ *Paco & Carolina · 31 · 07 · 2026* ✨🌿

Un atardecer entre flores, brindis y conversación...
y nos encantaría compartirlo contigo.

Después de muchos «algún día» y un par de «¿y si...?»,
por fin hemos puesto fecha:

📅 *Viernes 31 de julio de 2026*
🕡 *18:30 h* — hora de Madrid (puntuales, que se nos va el sol)
📍 *La casita de madera*
👗 Código: *boho cálido* — lino, flores secas, zapatos cómodos

Te lo contamos todo — cronograma, cómo llegar,
dónde dormir y alguna sorpresa — en nuestra invitación:

🔗 https://paco-y-carolina.com

Confírmanos antes del *15 de julio* desde el botón
de WhatsApp de la web. 💛

Nos hará muchísima ilusión que estés.
— Paco & Caro
```

> Tip: WhatsApp parses `*bold*` and `_italic_` natively — the asterisks above render as bold on send. Replace the link with the final hosted URL before sharing.

---

## 💌 RSVP

If you found this repo because you got the invitation: **we can't wait to see you.**
Confirm before **15 July 2026** via the WhatsApp button on the site, or write to `webfranciscocastro@gmail.com`.

---

<p align="center">
  <em>Hecho con cariño para los nuestros.</em><br/>
  <strong>Paco &amp; Carolina · 31 · 07 · 2026 · La casita de madera</strong>
</p>
