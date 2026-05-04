# CLAUDE.md — geldbewuster.nl

Dit bestand bevat alle instructies voor Claude Code om zelfstandig blogs te schrijven, te verwerken en te deployen naar geldbewuster.nl.

## Project overzicht

- **Site:** geldbewuster.nl
- **Stack:** React + TypeScript + Tailwind CSS + Vite
- **Hosting:** Netlify (automatische deploy via GitHub push)
- **Repo:** github.com/stijn-rgb/geldbewuster
- **Eigenaar:** Stijn Leuven, SVDB Performance

## Doel van deze workflow

Elke week 4 nieuwe blogartikelen schrijven, verwerken als TSX component, SEO optimaliseren, sitemap updaten en pushen naar GitHub zodat Netlify automatisch deployt.

---

## Stap-voor-stap workflow per artikel

### Stap 1: Bepaal het volgende artikel

Lees de contentplanning uit `/src/config/contentplanning.ts` en kies het eerst volgende artikel dat nog niet `live: true` heeft.

### Stap 2: Schrijf het artikel

Schrijf het artikel in het Nederlands. Gebruik de schrijfstijl van geldbewuster.nl:
- Eerste alinea = conclusie of kernboodschap
- Schrijf als een slimme vriend, niet corporate
- Geen jargon tenzij uitgelegd
- Maximaal 800-1200 woorden
- Persoonlijk en eerlijk

### Stap 3: Kwaliteitscontrole

Controleer het artikel op de volgende punten:

**Em dashes verwijderen**
Vervang alle ` — ` (gedachtestreepjes) door een komma of punt. Dit geldt ook voor `–` en `-` als verbindingsteken tussen zinnen. Run dit altijd:
```bash
grep -n " — \| – " src/pages/articles/NieuweArtikel.tsx
```

**Spelling en grammatica**
- Controleer op typische Nederlandse spelfouten
- "financiën" niet "financien"
- Geen Engelse woorden waar Nederlands kan
- Consistente interpunctie

**SEO checklist**
- H1: exact één, bevat de primaire zoekterm
- H2: meerdere secties met relevante zoektermen
- Meta title: maximaal 60 tekens, bevat zoekterm
- Meta description: 140-160 tekens, bevat zoekterm en call-to-action
- Canonical URL: altijd ingesteld
- Breadcrumb: altijd aanwezig

### Stap 4: Bouw de TSX pagina

Maak een nieuw bestand aan in `src/pages/articles/`. Gebruik de bestaande artikelen als template. Verplichte elementen:

```tsx
// Altijd aanwezig:
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

// SEO component:
<SEO
  title="Artikeltitel met zoekterm (max 60 tekens)"
  description="Meta description van 140-160 tekens met zoekterm en CTA."
  canonical="/categorie/artikel-slug"
/>

// Breadcrumb:
<div className="flex items-center gap-2 text-xs text-gray-400">
  <Link to="/">Home</Link>
  <span>›</span>
  <Link to="/categorie">Categorie</Link>
  <span>›</span>
  <span>Artikeltitel</span>
</div>

// H1 (altijd Fraunces serif):
<h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
  Artikeltitel
</h1>

// Inhoudsopgave:
<div className="bg-gray-50 rounded-xl p-5 mb-10">
  <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
  <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
    <li><a href="#sectie-1">Sectie 1</a></li>
  </ol>
</div>

// H2 secties:
<section id="sectie-1">
  <h2 className="font-serif text-2xl font-normal mb-4">Sectie titel</h2>
</section>

// Affiliate CTA (indien van toepassing):
import { affiliateUrl } from '../../config/affiliate'
<a href={affiliateUrl('degiro', 'artikel-cta')} target="_blank" rel="noopener sponsored">
  Account openen →
</a>

// Disclaimer onderaan:
<p className="text-xs text-gray-400 mt-6 leading-relaxed">
  Dit artikel is informatief bedoeld en vormt geen financieel advies.
  Beleggen brengt risico's met zich mee.
</p>
```

### Stap 5: Interne linking

Voeg altijd minimaal 2-3 interne links toe die relevant zijn:
- Verwijs naar gerelateerde artikelen
- Verwijs naar relevante tools
- Verwijs naar de categoriepagina

Beschikbare interne links:
- `/beleggen/beginnen-met-beleggen`
- `/beleggen/degiro-review`
- `/beleggen/wat-is-een-etf`
- `/sparen/beste-spaarrekening`
- `/schulden/uit-de-schulden`
- `/tools/compound-calculator`
- `/tools/budget-planner`
- `/tools/schulden-calculator`
- `/tools/broker-vergelijker`
- `/tools/buffer-berekenaar`
- `/tools/jaarruimte-calculator`
- `/tools/zorgtoeslag-berekenaar`

### Stap 6: Route toevoegen aan App.tsx

```tsx
// Import toevoegen bovenaan:
import NieuweArtikel from './pages/articles/NieuweArtikel'

// Route toevoegen in de Routes:
<Route path="/categorie/artikel-slug" element={<NieuweArtikel />} />
```

### Stap 7: Artikel live zetten in pagina's

Update de volgende bestanden om het artikel `live: true` te zetten:
- `src/pages/Blog.tsx`
- `src/pages/[Categorie].tsx` (bijv. Beleggen.tsx, NewPages.tsx)
- `src/pages/Home.tsx` (indien featured)

Zoek naar het artikel op basis van titel en verander `live: false` naar `live: true` en update het pad naar de juiste URL.

### Stap 8: Sitemap updaten

Voeg de nieuwe URL toe aan `public/sitemap.xml`:

```xml
<url>
  <loc>https://geldbewuster.nl/categorie/artikel-slug</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

Voeg toe vóór het `<!-- Over ons -->` commentaar.

### Stap 9: Build checken

```bash
cd /pad/naar/geldbewuster
npm run build
```

Als de build faalt, fix de fout en run opnieuw. Deploy pas als de build slaagt.

### Stap 10: Pushen naar GitHub

```bash
git add .
git commit -m "feat: voeg artikel toe — [artikeltitel]"
git push origin main
```

Netlify deployt automatisch na de push.

---

## Designsysteem

### Kleuren
- Brand groen: `#1D9E75` (Tailwind: `brand-500`)
- Donker: `#1A1A18`
- Cream achtergrond: `#FAF7F2`
- Brand lichtgroen: `brand-50`, `brand-100`

### Fonts
- Headlines (H1, H2): `font-serif` (Fraunces)
- Body: DM Sans (standaard)

### Componenten
- Artikel kaartje: gebruik `ArticleCard` uit `src/components/UI.tsx`
- Page hero: gebruik `PageHero` uit `src/components/UI.tsx`
- Affiliate CTA: gebruik `AffiliateCTA` uit `src/components/UI.tsx`

---

## Affiliate links

Configuratie staat in `src/config/affiliate.ts`. Gebruik altijd `affiliateUrl()`:

```tsx
import { affiliateUrl } from '../../config/affiliate'
affiliateUrl('degiro', 'artikel-naam')
affiliateUrl('raisin', 'artikel-naam')
```

Beschikbare affiliates: `degiro`, `raisin`, `independer`, `trading212`, `bitvavo`, `onvz`, `ohra`

---

## Contentplanning prioriteitsvolgorde

1. Zorgverzekering vergelijken 2026 → `/verzekeringen/zorgverzekering-vergelijken`
2. Trading 212 review → `/beleggen/trading-212-review`
3. DEGIRO vs Trading 212 → `/beleggen/degiro-vs-trading-212`
4. Bitcoin kopen in Nederland → `/beleggen/bitcoin-kopen-nederland`
5. IWDA ETF alles wat je moet weten → `/beleggen/iwda-etf`
6. Beste ETF's voor Nederlandse beleggers → `/beleggen/beste-etfs-nederland`
7. Dividend beleggen → `/beleggen/dividend-beleggen`
8. Aandelen kopen als beginner → `/beleggen/aandelen-kopen-beginner`
9. Schuldhulpverlening aanvragen → `/schulden/schuldhulpverlening-aanvragen`
10. Noodfonds opbouwen → `/sparen/noodfonds-opbouwen`
11. Huurtoeslag berekenaar → `/tools/huurtoeslag-berekenaar`
12. Pensioen berekenen → `/sparen/pensioen-berekenen`

---

## Kwaliteitsregels — ALTIJD volgen

1. **Geen em dashes** — vervang ` — ` altijd door `, ` of `. `
2. **Geen Engels** in de artikeltekst tenzij het een eigennaam is (ETF, DEGIRO etc.)
3. **Altijd disclaimer** onderaan artikelen over beleggen of financiën
4. **Altijd affiliate disclosure** als er affiliate links in staan
5. **Altijd inhoudsopgave** bij artikelen langer dan 600 woorden
6. **Altijd breadcrumb** bovenaan elke artikelpagina
7. **Nooit financieel advies geven** — altijd informatief formuleren
8. **Build moet slagen** voordat je pusht

---

## Bestandsstructuur

```
geldbewuster/
├── src/
│   ├── App.tsx                    ← Routes toevoegen hier
│   ├── components/
│   │   ├── Layout.tsx             ← Nav en footer
│   │   ├── UI.tsx                 ← Herbruikbare componenten
│   │   └── SEO.tsx                ← SEO component
│   ├── config/
│   │   └── affiliate.ts           ← Affiliate URL configuratie
│   └── pages/
│       ├── articles/              ← NIEUWE ARTIKELEN HIER
│       ├── tools/                 ← Tool pagina's
│       ├── Blog.tsx               ← Blog overzicht
│       ├── Beleggen.tsx           ← Beleggen categorie
│       ├── NewPages.tsx           ← Sparen/Schulden/Verzekeringen/Extra inkomen
│       └── Home.tsx               ← Homepage
└── public/
    └── sitemap.xml                ← Sitemap updaten na elk artikel
```

---

## Wekelijkse taakopdracht

Wanneer je deze opdracht ontvangt: **"Maak de volgende 4 artikelen voor geldbewuster.nl"**

Doe dan het volgende:
1. Lees de contentplanning en bepaal de volgende 4 artikelen
2. Schrijf elk artikel volledig uit
3. Bouw elk artikel als TSX component
4. Voer alle kwaliteitscontroles uit
5. Update routes, live flags en sitemap
6. Run `npm run build` en fix eventuele errors
7. Push naar GitHub
8. Bevestig dat alle 4 artikelen live zijn op geldbewuster.nl

