# HullSafe — Project Asset Register & Documentation Index

> **Last updated**: 24 April 2026
> **Maintainer**: Jeff Morton (jeff@downtoearthai.co.uk)
> **Client**: Anna & Simon Cory-Humble | HullSafe (hullsafe.co.uk)

---

## Project Structure Overview

```
HullSafe/
├── docs/                          ← Source documents, raw assets, client files
│   ├── brochure-images/           ← Images extracted from Keelcrab Point brochure PDF
│   ├── keelcrab-pro-images/       ← Raw high-res photos from Keelcrab (5-9MB each)
│   │   └── diver-pack/            ← Close-up product/studio shots
│   ├── client-correspondence.txt  ← Full email thread (Simon + Jeff, March 2025)
│   ├── keelcrab-point-brochure.pdf← Official Keelcrab Point dealer brochure (2-page)
│   ├── anccp-certificate.pdf      ← A.N.C.C.P brush certification document
│   ├── anccp-certificate-page.png ← Full-page screenshot of certificate
│   └── keelcrab-point-logo.ai     ← Vector logo (Adobe Illustrator source)
├── public/                        ← Web-served static assets
│   ├── images/
│   │   ├── keelcrab/              ← All KeelCrab images used on site
│   │   │   └── optimised/         ← Compressed product shots (40-120KB each)
│   │   ├── hero/                  ← Generic hero background images
│   │   ├── blog/                  ← Blog post illustrations
│   │   └── locations/             ← Location-specific hero images
│   └── docs/
│       └── anccp-certificate.pdf  ← Public-facing copy of ANCCP certificate
├── src/
│   ├── data/                      ← Centralised JSON data files
│   │   ├── pricing.json           ← All pricing data (single source of truth)
│   │   ├── services.json          ← Service descriptions and metadata
│   │   └── locations.json         ← Location-specific content data
│   ├── layouts/                   ← Astro layout templates
│   ├── pages/                     ← All site pages (34 total)
│   └── styles/
│       └── global.css             ← Master design tokens and global styles
└── scripts/
    └── compress-images.mjs        ← Sharp-based image compression script
```

---

## 1. SOURCE DOCUMENTS (`docs/`)

### Client Correspondence
| File | Description | Key Information |
|------|-------------|-----------------|
| `client-correspondence.txt` | Full email thread between Simon and Jeff (March 2025 onwards) | Original brief, competitor list, budget discussion, service scope, Keelcrab content permissions |

### Keelcrab Official Documents
| File | Size | Description | Key Information |
|------|------|-------------|-----------------|
| `keelcrab-point-brochure.pdf` | 4.7MB | Official 2-page Keelcrab Point dealer brochure | Advantages, technical specs, about Keelcrab (Aeffe S.r.l., Como, Italy), Sail-ONE specs |
| `anccp-certificate.pdf` | 353KB | A.N.C.C.P brush certification | Proves brushes are certified not to damage antifouling paint |
| `anccp-certificate-page.png` | 3.1MB | Full-page screenshot of ANCCP certificate | Visual reference version |
| `keelcrab-point-logo.ai` | 204KB | Vector source file for Keelcrab Point logo | Adobe Illustrator format — master logo file |

### Brochure Extracted Images (`docs/brochure-images/`)
| File | Size | Description | Potential Use |
|------|------|-------------|---------------|
| `page1_img1_2456x1771.png` | 162KB | Brochure back cover — advantages list, about section, contact info, QR code | Content reference (copywriting) |
| `page1_img2_538x82.png` | 5KB | Keelcrab text logo (blue) | Could use as alternative logo |
| `page1_img3_431x66.png` | 5KB | Keelcrab text logo (white) | Could use on dark backgrounds |
| `page1_img5_1248x936.jpeg` | 587KB | KeelCrab on pontoon with control unit and marina behind | ✅ ALREADY IN USE as gallery hero |
| `page1_img6_1384x1023.png` | 872KB | Italian flag | Decorative only |
| `page2_img1_2456x1771.png` | 861KB | Full inside spread — technical specs, features, product photo | Content reference (specs) |
| `page2_img2_1728x1152.jpeg` | 516KB | Studio shot — robot with brushes + ACS control unit (white background) | ✅ ALREADY IN USE as pricing hero |
| `page2_img3_480x640.jpeg` | 191KB | Operator deploying KeelCrab at marina | ✅ ALREADY IN USE (hull-cleaning hero) |
| `page2_img4_432x576.jpeg` | 139KB | Operator at Victoria marina watching robot work | ✅ ALREADY IN USE (maintenance hero) |
| `page2_img5_790x384.jpeg` | 130KB | Two men posing outside a marine business (possible Richard Court) | Testimonial/about page |
| `page2_img6_576x432.jpeg` | 139KB | Operator watching Keelcrab from pontoon | ✅ ALREADY IN USE |
| `page2_img7_863x504.png` | 293KB | 3D rendered yacht hull diagram (cross-section) | Educational/blog content |
| `page2_img8_307x309.jpeg` | 32KB | Keelcrab brush close-up (green rollers) | ✅ ALREADY IN USE |
| `page2_img9_845x634.jpeg` | 199KB | Ultracrab device in water between yacht hulls | Equipment/gallery reference |
| `page2_img16_768x576.jpeg` | 199KB | Clean yacht hull result after Keelcrab service | ✅ ALREADY IN USE |

### Raw KeelCrab Pro Photos (`docs/keelcrab-pro-images/`)

**⚠️ WARNING: These are RAW files (5-9MB each, ~120MB total). Never serve these directly on the web.**

| File | Size | Description |
|------|------|-------------|
| `20230104_132708.jpg` | 6.1MB | Product shot — robot front angle, white background |
| `20230104_132712.jpg` | 5.6MB | Product shot — robot front angle, slightly different |
| `20230104_132714.jpg` | 5.5MB | Product shot — robot front view |
| `20230104_132721.jpg` | 9.5MB | Product shot — robot with ACS control unit side by side |
| `20230104_132729(0).jpg` | 9.4MB | Product shot — robot with ACS, different angle |
| `20230104_132729.jpg` | 9.4MB | Product shot — robot with ACS, variant |
| `20230104_132739.jpg` | 5.2MB | Detail shot — ACS control unit close-up |
| `20230104_132749.jpg` | 5.4MB | Detail shot — ACS control screen |
| `20230105_161717.jpg` | 5.5MB | Detail shot — brush system side view |
| `20230105_161720.jpg` | 6.8MB | Detail shot — brush mechanism exploded view |
| `20230105_161734.jpg` | 5.8MB | Detail shot — track/wheel system |
| `20230105_161752.jpg` | 5.2MB | Full kit — robot + ACS + carry case |
| `20230105_161755.jpg` | 9.5MB | Full kit — robot + ACS + case (wide) |
| `20230105_161800.jpg` | 9.6MB | Full kit — everything laid out |
| `20230105_161805.jpg` | 9.5MB | Full kit — variant |
| `KEELCRAB001252.jpg` | 2.9MB | Carry case — closed, branded |
| `KEELCRAB001253.jpg` | 3.3MB | Carry case — open, showing interior |
| `KEELCRAB001255.jpg` | 3.2MB | Carry case — open, with foam inserts |
| `KEELCRAB001257.jpg` | 4.4MB | Full carry case — open, showing robot inside |
| `KEELCRAB001259.jpg` | 4.0MB | Robot in case — overhead angle |
| `KEELCRAB001261.jpg` | 4.0MB | Robot + ACS packed together |
| `KEELCRAB001262.jpg` | 3.7MB | Packed kit — ready for transport |
| `KEELCRAB001263.jpg` | 3.1MB | Case — closed, side view |

#### Diver-Pack Close-Ups (`docs/keelcrab-pro-images/diver-pack/`)
| File | Size | Description |
|------|------|-------------|
| `20230104_113642 - Copia.jpg` | ~5MB | Robot front — dual HD camera lenses visible |
| `20230104_113657 - Copia.jpg` | ~5MB | Robot angle — brush tracks visible |
| `20230104_113730 - Copia.jpg` | ~5MB | Robot top-down — full track system |
| `20230104_113735 - Copia.jpg` | ~5MB | Robot detail — camera housing |
| `20230104_113741 - Copia.jpg` | ~5MB | Robot rear — cable connection |
| `20230104_113811 - Copia.jpg` | ~5MB | Robot underside — brush mechanism |
| `20230104_113823 - Copia.jpg` | ~5MB | Robot side — wheel/track detail |

---

## 2. WEB-SERVED IMAGES (`public/images/`)

### Keelcrab Site Images (`public/images/keelcrab/`)
| File | Size | Source | Used On |
|------|------|--------|---------|
| `keelcrab-pontoon-setup.jpg` | 587KB | Brochure page1_img5 | Gallery hero |
| `keelcrab-studio-brushes.jpg` | 516KB | Brochure page2_img2 | Pricing hero |
| `keelcrab-action.jpg` | 241KB | Brochure/web | Hull Inspection hero |
| `keelcrab-operator-marina.jpg` | 191KB | Brochure page2_img3 | Hull Cleaning hero |
| `keelcrab-operator-watching.jpg` | 139KB | Brochure page2_img6 | Maintenance Plans hero |
| `keelcrab-operator-victoria.jpg` | 139KB | Brochure page2_img4 | About page |
| `keelcrab-2023.jpg` | 121KB | Keelcrab website | About page |
| `keelcrab-point-logo-tr.png` | 100KB | Logo export | Footer + Homepage trust badge |
| `keelcrab-pro-product.png` | 679KB | Keelcrab website | Homepage "Technology" section |
| `keelcrab-pro-pack.png` | 7.2MB | Keelcrab website | ⚠️ OVERSIZED — needs compression |
| `keelcrab-point-logo.png` | 47KB | Logo export | Footer badge |
| `keelcrab-maintenance.jpg` | 60KB | Keelcrab website | Previously: Hull Cleaning hero |
| `keelcrab-hull-work.jpg` | 57KB | Keelcrab website | Previously: Hull Inspection hero |
| `keelcrab-underwater-cleaning.jpg` | 35KB | Keelcrab website | Previously: Gallery hero |
| `keelcrab-brush-closeup.jpg` | 32KB | Brochure page2_img8 | Gallery — equipment section |
| `ultracrab-device.jpg` | 199KB | Brochure page2_img9 | Gallery — equipment section |
| `yacht-clean-hull-result.jpg` | 199KB | Brochure page2_img16 | Gallery — equipment section |

### Optimised Product Shots (`public/images/keelcrab/optimised/`)
| File | Size | Source | Used On |
|------|------|--------|---------|
| `underwater-keelcrab-action-1.jpg` | 64KB | diver-pack (compressed) | Gallery "Up Close" section |
| `underwater-keelcrab-cleaning.jpg` | 71KB | diver-pack (compressed) | Gallery "Up Close" section |
| `keelcrab-equipment-detail.jpg` | 120KB | pro-images (compressed) | Gallery "Up Close" section |
| `keelcrab-brushes-detail.jpg` | 68KB | pro-images (compressed) | Gallery "Up Close" section |
| `keelcrab-product-shot.jpg` | 40KB | pro-images (compressed) | Gallery "Up Close" section |
| `marina-harbour-scene.jpg` | 91KB | pro-images (compressed) | Gallery "Up Close" section |
| `underwater-keelcrab-action-2.jpg` | 76KB | diver-pack (compressed) | Available — not yet placed |
| `underwater-keelcrab-closeup.jpg` | 65KB | diver-pack (compressed) | Available — not yet placed |
| `underwater-keelcrab-detail.jpg` | 71KB | diver-pack (compressed) | Available — not yet placed |
| `underwater-keelcrab-hull.jpg` | 69KB | diver-pack (compressed) | Available — not yet placed |
| `underwater-keelcrab-wide.jpg` | 75KB | diver-pack (compressed) | Available — not yet placed |
| `marina-operation-setup.jpg` | 90KB | pro-images (compressed) | Available — not yet placed |
| `marina-pontoon-wide.jpg` | 79KB | pro-images (compressed) | Available — not yet placed |

### AI-Generated Images (`public/images/blog/`)
| File | Size | Description | Used On |
|------|------|-------------|---------|
| `antifouling-paint.png` | 961KB | Antifouling paint application | Blog — biofouling post |
| `barnacles-closeup.png` | 1.0MB | Barnacle growth close-up | Blog — biofouling post |
| `boatyard-winter.png` | 930KB | Boatyard winterisation scene | Blog — boat costs post |
| `clean-hull.png` | 750KB | Clean hull underwater | Blog — biofouling post |
| `fouled-hull.png` | 859KB | Fouled hull underwater | Blog — biofouling post |
| `keel-inspection.png` | 785KB | Keel inspection scene | Blog — biofouling post |
| `pontoon-operator.png` | 919KB | Operator on pontoon | Blog — boat costs post |
| `robot-cleaning.png` | 834KB | Robot cleaning hull | Blog — biofouling post |
| `waterline-fouling.png` | 829KB | Waterline fouling growth | Blog — biofouling post |
| `yacht-sailing.png` | 899KB | Yacht sailing in Devon | Previously: Pricing hero |

### Hero Images (`public/images/hero/`)
| File | Size | Description | Used On |
|------|------|-------------|---------|
| `yacht-hero.png` | 786KB | Yacht at dock, twilight | Homepage hero |
| `marina-pontoon.png` | 876KB | Marina pontoon scene | Previously: Maintenance Plans hero |

### Location Images (`public/images/locations/`)
| File | Size | Description | Used On |
|------|------|-------------|---------|
| `brixham-harbour.png` | 1.0MB | Brixham harbour panorama | Brixham location hub |
| `dartmouth-river.png` | 989KB | River Dart scene | Dartmouth location hub |
| `torquay-marina.png` | 903KB | Torquay marina | Torquay location hub |

---

## 3. DATA FILES (`src/data/`)

| File | Size | Description | Feeds |
|------|------|-------------|-------|
| `pricing.json` | 3.1KB | All service prices, per-metre rates, subscription discounts | Pricing page, service pages, location pages |
| `services.json` | 5.5KB | Service descriptions, features, selling points | Service pages, homepage cards |
| `locations.json` | 3.7KB | Per-location content, marina details, local challenges | Location hub and spoke pages |

---

## 4. PUBLIC DOCUMENTS (`public/docs/`)

| File | Size | Description | Linked From |
|------|------|-------------|-------------|
| `anccp-certificate.pdf` | 353KB | A.N.C.C.P brush certification (downloadable) | Footer, service pages |

---

## 5. SCRIPTS (`scripts/`)

| File | Description | Usage |
|------|-------------|-------|
| `compress-images.mjs` | Sharp-based batch image compressor | `node scripts/compress-images.mjs` — processes raw images into web-optimised versions |

---

## 6. KEELCRAB TECHNICAL DATA (Extracted from Brochure)

The following technical specifications were extracted from `keelcrab-point-brochure.pdf` and should be used for accuracy across all site content:

### Keelcrab Sail-ONE Specifications
| Spec | Value |
|------|-------|
| **Weight** | 9.5 kg |
| **Length** | 42.5 cm |
| **Width** | 42.5 cm |
| **Height** | 32 cm |
| **Cleaning Speed** | 1.5 m² per minute |
| **Camera** | IP68 underwater video + LED lights |
| **Remote Control** | 7-inch high-resolution wired display |
| **Guarantee** | 24 months or 500 hours of use |
| **Brushes** | Nylon bristles, various lengths/diameters, A.N.C.C.P certified |

### Key Marketing Claims (from Keelcrab)
1. **Reduced Consumption** — "A clean hull can reduce fuel consumption by up to 20%"
2. **Reduced Pollution** — "A direct consequence of the reduced fuel consumption"
3. **Increased Performance** — "A clean hull results in optimal, maximized performance"
4. **Hull Inspection** — "The innovative cleaning system also makes it possible to monitor and check the condition of the hull"
5. **Certified brushes** — "Its certified brushes certified not remove antifouling paints"
6. **Quick cleaning** — "Keelcrab cleans 1.4 m² per minute"
7. **Waste recovery** — "Robot is also provided with a bag (optional on request) for the recovery of waste material"

### About Keelcrab (from Brochure)
> "KeelCrab is the first of several technologies that the company has implemented and distribute with a view to reducing the pollution caused by the chemical substances currently used on millions of vessels. The hallmark of Aeffe s.r.l. lies in its constant efforts to combine technology with an eco-sustainable approach, with the main aim of cutting vessel maintenance costs."

**Manufacturer**: Aeffe S.r.l., Via Rezzonico 39, 22100 Como, Italy
**Phone**: +39 031 931010 / +39 333 4524341
**Email**: info@keelcrab.com
**Website**: www.keelcrab.com

---

## 7. VIDEOS (Not Yet Integrated)

The following video assets from Keelcrab were identified but **deferred** for later integration via YouTube embedding:

**Source folder**: `C:\Users\jeffo\Downloads\Contents Keelcrab PRO-20240707T075955Z-001\Contents Keelcrab PRO\video`

**Status**: Not copied to project. Decision was to upload to a HullSafe YouTube channel for embedding (better for page speed than direct hosting).

**Action needed**: Create HullSafe YouTube channel → upload videos → embed on About/Gallery pages.

---

## 8. CONTENT SOURCES REFERENCE

| Source | Type | Location | Status |
|--------|------|----------|--------|
| Client emails (Simon ↔ Jeff) | Correspondence | `docs/client-correspondence.txt` | ✅ In project |
| Keelcrab Point brochure | PDF | `docs/keelcrab-point-brochure.pdf` | ✅ In project + images extracted |
| ANCCP certification | PDF | `docs/anccp-certificate.pdf` | ✅ In project + public copy |
| Keelcrab Point logo | AI vector | `docs/keelcrab-point-logo.ai` | ✅ In project + PNG exports in public |
| Raw Keelcrab Pro photos | JPG (5-9MB) | `docs/keelcrab-pro-images/` | ✅ In project + compressed versions in public |
| Diver-pack close-ups | JPG (5-9MB) | `docs/keelcrab-pro-images/diver-pack/` | ✅ In project + compressed |
| Keelcrab website content | Web scrape | Conversation context only | ⚡ NOT saved — see §9 below |
| Competitor research | Analysis | Conversation context + KI | ⚡ Summarised in Knowledge Item |
| Keelcrab videos | MP4 | User's Downloads folder | ❌ NOT in project — YouTube deferred |

---

## 9. INFORMATION IN KNOWLEDGE BASE (Not in Project Folder)

The following curated knowledge is stored in the AI knowledge base and is automatically loaded at the start of each session:

**Knowledge Item**: `HullSafe — Full Project Status & Architecture Plan`
**Path**: `C:\Users\jeffo\.gemini\antigravity\knowledge\hullsafe-project\artifacts\project-status.md`

**Contains**:
- Business overview (Anna & Simon, Brixham base, Keelcrab standard model)
- Brand identity — "Quad-Safe" positioning
- Confirmed pricing (£15/m cleaning, 15% subscription discount)
- All decisions made (tech stack, colour scheme, booking approach, scope exclusions)
- Site architecture (3-Hub/9-Spoke + location pages)
- Centralised pricing JSON strategy
- Content strategy (reality-based, no fabricated case studies)
- Competitor research (10 companies analysed with detailed findings)

---

## 10. QUICK REFERENCE — What Goes Where

| Need | Location |
|------|----------|
| Raw source images (never serve) | `docs/keelcrab-pro-images/` |
| Official Keelcrab documents | `docs/` |
| Client emails / brief | `docs/client-correspondence.txt` |
| Web-ready images (serve on site) | `public/images/keelcrab/` |
| Compressed product shots | `public/images/keelcrab/optimised/` |
| Pricing changes | `src/data/pricing.json` |
| Service content changes | `src/data/services.json` |
| Location content changes | `src/data/locations.json` |
| Design tokens / colours | `public/styles/global.css` |
| Compress new images | `node scripts/compress-images.mjs` |
| Project status / decisions | Knowledge Item (auto-loaded) |
