# Base44 App


This app was created automatically by Base44.
It's a Vite+React app that communicates with the Base44 API.

## Running the app

```bash
npm install
npm run dev
```

## Building the app

```bash
npm run build
```

For more information and support, please contact Base44 support at app@base44.com.
# Shinen Resin — Landing Page

Minimal, image-first landing page for **Sundus / Shinen Resin**.
Flow: **Meet the Maker → Shop by Style → This Week’s Faves → On the gram → Love Notes → See the full collection**.
Primary goal: push visitors to Etsy; secondary: DM on Instagram for IG-only pieces.

---

## Features

* **Image-first cards** (full-card links) with tiny labels.
* **Category tiles**: Earrings, Necklaces (Etsy); Trays, Coasters (IG DM).
* **Featured product picks** linking to exact Etsy listings.
* **Light brand theme**: sky-blue base with beige/white blends.
* **Accessibility**: concise alt text, keyboard-focusable links.
* **Performance**: lazy-loaded, compressed images.

---

## Tech

Static **HTML/CSS/JS** (no framework required). Works on any static host (GitHub Pages, Netlify, Vercel, etc).

---

## Color tokens

* Primary brand: `#A6D4EC`
* Brand hover: `#8FCBEA`
* Beige light: `#FAF6F0`
* Beige medium: `#F3EADD`
* Text (ink): `#0F172A`
* Secondary text: `#667085`
* Borders (warm): `#EDE3D5`

---

## File structure (suggested)

```
/assets/
  categories/   cat-earrings.jpg, cat-necklaces.jpg, cat-trays.jpg, cat-coasters.jpg
  products/     prod-*.jpg (e.g., prod-pansy5.jpg, prod-gardenparty.jpg)
  instagram/    ig-1.jpg ... ig-6.jpg
  motifs/       motif-beige-florals-left.svg, motif-beige-florals-right.svg, pattern-blue-print.png
index.html
styles.css
README.md
```

---

## Content editing (cheatsheet)

### Section titles (keep casing)

* **Shop by Style** (category tiles)
* **This Week’s Faves** (featured products)
* **On the gram** (Instagram strip)
* **Love Notes** (testimonials)
* **See the full collection** (CTA)

### Links

**Etsy — Featured Earrings (examples you provided):**

* Purple Petal → `https://www.etsy.com/uk/listing/4330359376/purple-petal`
* Garden Party 2 → `https://www.etsy.com/uk/listing/4330356051/garden-party2`
* Love → `https://www.etsy.com/uk/listing/4332885001/love`
* Pure Love (White) → `https://www.etsy.com/uk/listing/4330814630/pure-love-white-flower-white-earrings`

**Etsy — Categories:**

* Earrings section → `https://www.etsy.com/uk/shop/ShinenresinBySundus?section_id=54598824`
* Necklaces (search) → `https://www.etsy.com/uk/shop/ShinenresinBySundus?search_query=necklace`

**Instagram / DM:**

* Profile & DM → `https://instagram.com/shinenresin`

> Optional tracking: append `?utm_source=site&utm_medium=landing&utm_campaign=featured` to listing URLs.

### Images (naming)

* Category tiles: `cat-*.jpg` (1200×1200, ≤250KB, **object-fit: contain**).
* Product cards: `prod-*.jpg` (1200×1200, ≤250KB).
* IG strip: `ig-1.jpg … ig-6.jpg` (900×900, ≤200KB).

### Alt text (examples)

* Category: “Pressed-flower earrings — handcrafted resin”
* Product: “Pressed pansy earrings with pearl drop” / “Multicolour pressed-flower earrings”
* IG tiles: “Craft booth display”, “Geode ring dish”, etc.

---

## Decorative touches (optional)

* **Blue CTA band**: place low-opacity beige floral SVGs (`motif-beige-florals-left.svg`, `...-right.svg`) in corners.
* **Beige Testimonials**: light blue seamless strip (`pattern-blue-print.png`) along the top/bottom edges.
  All decorative assets should be ≤40KB and marked decorative (no alt).

---

## Run locally

Any static server works:

```bash
# Node
npx serve .

# or Python 3
python -m http.server 8080
```

Open `http://localhost:3000` (or shown port).

---

## Deploy

### GitHub Pages

1. Push the repo to GitHub (branch `main`).
2. Repo → Settings → Pages → Branch: `main` / `/ (root)` → Save.
3. Wait for the Pages URL to go live.

### Netlify / Vercel

Drag-and-drop the folder or connect the repo (no build step).

---

## Maintenance

* Swap **This Week’s Faves** images/links whenever you want to feature new pieces (2–4 cards).
* Update IG strip with 4–6 recent photos monthly.
* Keep images compressed; replace screenshots with clean crops when possible.

---

## Roadmap (optional)

* Auto-sync IG & Etsy (widgets or 2 small serverless endpoints).
* Add “Made-to-Order” Etsy listings for Trays/Coasters and swap IG links to those.
* Add one short artist video to “Meet the Maker”.

---

## Copyright / License

All images and content © **Shinen Resin / Sundus**.
Choose a license for the code (e.g., MIT) or mark it proprietary for now.

---

### Credits

Design & build prompts guided by **Ali**.
Brand photography and products by **Sundus (@shinenresin)**.
