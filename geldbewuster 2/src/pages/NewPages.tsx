import { PageHero, ArticleCard, AffiliateCTA, SectionHeader, InfoCard } from '../components/UI'
import { affiliateUrl } from '../config/affiliate'

// ── SPAREN ──
const sparenArticles = [
  { tag: 'Sparen', title: 'Beste spaarrekening Nederland 2025 — hoogste rente', summary: 'Welke bank biedt de hoogste spaarrente? Ons actuele overzicht van alle grote aanbieders.', readTime: 5, path: '/sparen', affiliate: true },
  { tag: 'Sparen', title: 'Sparen vs beleggen — wat is slimmer in 2025?', summary: 'Wanneer spaar je en wanneer beleg je? Het antwoord hangt af van jouw situatie.', readTime: 6, path: '/sparen', affiliate: false },
  { tag: 'Sparen', title: 'Noodfonds opbouwen — hoeveel heb je nodig?', summary: 'Een noodfonds is de basis van financiële gezondheid. Zo bouw je er één op.', readTime: 5, path: '/sparen', affiliate: false },
  { tag: 'Besparen', title: 'Besparen op boodschappen — 15 praktische tips', summary: 'Kleine aanpassingen in je boodschappenpatroon kunnen honderden euro\'s per jaar schelen.', readTime: 6, path: '/sparen', affiliate: false },
  { tag: 'Besparen', title: 'Abonnementen opzeggen — de complete checklist', summary: 'Nederlanders betalen gemiddeld €150/maand aan abonnementen. Veel daarvan ongebruikt.', readTime: 4, path: '/sparen', affiliate: false },
  { tag: 'Budget', title: 'Budget maken in 5 stappen — zo houd je overzicht', summary: 'Een budget hoeft niet ingewikkeld te zijn. Met dit stappenplan ben je in een uur klaar.', readTime: 5, path: '/sparen', affiliate: false },
  { tag: 'Budget', title: 'De 50/30/20 regel — de populairste budgetmethode', summary: 'Werkt de 50/30/20 regel ook voor jou? We leggen uit hoe je hem toepast.', readTime: 4, path: '/sparen', affiliate: false },
  { tag: 'Besparen', title: 'Goedkoopste supermarkt Nederland 2025', summary: 'Lidl, Aldi, Albert Heijn of Jumbo — wie is het goedkoopst voor jouw boodschappen?', readTime: 5, path: '/sparen', affiliate: false },
]

export function Sparen() {
  return (
    <>
      <PageHero
        badge="Sparen"
        title={<>Meer overhouden <em className="text-brand-500 not-italic">zonder in te leveren</em></>}
        subtitle="De beste spaarrekeningen, slimme bespaartips en hoe je een noodfonds opbouwt."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="🏦" title="Spaarrekening" body="Vergelijk alle grote banken op spaarrente en vind de beste plek voor jouw spaargeld." />
          <InfoCard icon="🛡️" title="Noodfonds" body="3-6 maanden aan vaste lasten achter de hand. De basis van financiële rust." />
          <InfoCard icon="✂️" title="Besparen" body="Kleine gewoontes, groot effect. Van boodschappen tot abonnementen." />
        </div>
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Slimmer omgaan met je geld" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sparenArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// ── EXTRA INKOMEN ──
const inkomenArticles = [
  { tag: 'Passief inkomen', title: 'Passief inkomen genereren — 10 manieren in 2025', summary: 'Van dividend tot verhuur — een eerlijk overzicht van alle manieren om passief inkomen te verdienen.', readTime: 9, path: '/extra-inkomen', affiliate: false },
  { tag: 'Dividend', title: 'Beste dividend aandelen Nederland & België 2025', summary: 'Stabiele dividendbetalers voor een maandelijks of kwartaalinkomen uit je portefeuille.', readTime: 7, path: '/extra-inkomen', affiliate: true },
  { tag: 'Dividend', title: 'Beste dividend ETF\'s 2025 — maandelijks inkomen', summary: 'Gespreid dividend ontvangen via ETF\'s — de makkelijkste manier voor beginners.', readTime: 6, path: '/extra-inkomen', affiliate: true },
  { tag: 'Vermogen', title: 'Wanneer ben je rijk in Nederland?', summary: 'Wat betekent rijk zijn eigenlijk? We kijken naar vermogen, inkomen en gevoel.', readTime: 5, path: '/extra-inkomen', affiliate: false },
  { tag: 'Vermogen', title: 'Hoeveel geld heb je nodig om te stoppen met werken?', summary: 'De 4%-regel en andere methodes om te berekenen hoeveel je nodig hebt voor financiële vrijheid.', readTime: 8, path: '/extra-inkomen', affiliate: false },
  { tag: 'Vermogen', title: 'Rijk worden met €200 per maand — is het mogelijk?', summary: 'Wat levert €200 per maand inleggen op na 10, 20 en 30 jaar? De wiskunde van vermogensopbouw.', readTime: 6, path: '/extra-inkomen', affiliate: true },
  { tag: 'Pensioen', title: 'Pensioen opbouwen als ZZP\'er — alle opties', summary: 'Als zzp\'er bouw je geen pensioen op via een werkgever. Dit zijn je alternatieven.', readTime: 7, path: '/extra-inkomen', affiliate: false },
  { tag: 'Vastgoed', title: 'Beleggen in vastgoed met weinig geld', summary: 'Je hoeft geen huisbaas te worden om in vastgoed te beleggen. Dit zijn de alternatieven.', readTime: 6, path: '/extra-inkomen', affiliate: false },
]

export function ExtraInkomen() {
  return (
    <>
      <PageHero
        badge="Extra inkomen"
        title={<>Geld verdienen <em className="text-brand-500 not-italic">terwijl je slaapt</em></>}
        subtitle="Passief inkomen, dividend en vermogensgroei — hoe je geld voor je laat werken."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="💰" title="Passief inkomen" body="Inkomen dat binnenkomt zonder dat je er actief voor werkt. Van dividend tot verhuur." />
          <InfoCard icon="📊" title="Dividend" body="Bedrijven die elk kwartaal of maand een deel van de winst uitkeren aan aandeelhouders." />
          <InfoCard icon="🎯" title="Financiële vrijheid" body="Stoppen met werken als je dat wil. We rekenen uit hoeveel je daarvoor nodig hebt." />
        </div>
        <AffiliateCTA
          title="Begin met vermogen opbouwen"
          subtitle="Open gratis een account bij DEGIRO en start met dividend beleggen."
          cta="Account openen bij DEGIRO →"
          href={affiliateUrl('degiro', 'inkomen-cta')}
        />
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Van passief inkomen tot financiële vrijheid" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inkomenArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// ── SCHULDEN ──
const schuldenArticles = [
  { tag: 'Schulden', title: 'Uit de schulden — het complete stappenplan', summary: 'Van schuldenoverzicht maken tot betalingsregelingen treffen. Alles stap voor stap uitgelegd.', readTime: 10, path: '/schulden', affiliate: false },
  { tag: 'Schuldhulp', title: 'Schuldhulpverlening in Nederland — wie helpt jou gratis?', summary: 'Een overzicht van alle instanties die je gratis kunnen helpen bij schulden.', readTime: 6, path: '/schulden', affiliate: false },
  { tag: 'Schuldhulp', title: 'Wat doet de Kredietbank Nederland?', summary: 'De Kredietbank kan je helpen met schuldsanering en budgetbeheer. Zo werkt het.', readTime: 5, path: '/schulden', affiliate: false },
  { tag: 'WSNP', title: 'WSNP uitgelegd — wat is schuldsanering?', summary: 'De Wet Schuldsanering Natuurlijke Personen is een laatste redmiddel. Dit is hoe het werkt.', readTime: 7, path: '/schulden', affiliate: false },
  { tag: 'Studieschuld', title: 'DUO studieschuld aflossen — wat zijn je opties?', summary: 'Hoeveel moet je terugbetalen en wat zijn de regels? Alles over DUO schulden.', readTime: 6, path: '/schulden', affiliate: false },
  { tag: 'Budget', title: 'Nibud budgettools — gratis hulp bij je financiën', summary: 'Het Nibud heeft gratis tools waarmee je jouw budget inzichtelijk maakt.', readTime: 4, path: '/schulden', affiliate: false },
  { tag: 'Schuldhulp', title: 'Betalingsregeling treffen met schuldeisers', summary: 'Kun je een rekening niet betalen? Zo vraag je een betalingsregeling aan.', readTime: 5, path: '/schulden', affiliate: false },
  { tag: 'Schuldhulp', title: 'Sociaal Raadslieden — gratis juridisch advies', summary: 'Sociaal Raadslieden geven gratis advies over schulden, uitkeringen en toeslagen.', readTime: 4, path: '/schulden', affiliate: false },
]

export function Schulden() {
  return (
    <>
      <PageHero
        badge="Schulden & hulp"
        title={<>Je staat er <em className="text-brand-500 not-italic">niet alleen voor</em></>}
        subtitle="Er zijn veel instanties in Nederland die je gratis kunnen helpen. Wij leggen uit waar je moet beginnen."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="🏛️" title="Gemeente" body="Elke gemeente heeft een schuldhulpverleningsdienst. Dit is altijd je eerste stap." />
          <InfoCard icon="🤝" title="Kredietbank" body="De Kredietbank biedt schuldbemiddeling en budgetbeheer aan." />
          <InfoCard icon="⚖️" title="WSNP" body="Als andere oplossingen niet werken, kan de rechter schuldsanering uitspreken." />
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <p className="text-sm font-medium text-orange-800 mb-1">Heb je nu direct hulp nodig?</p>
          <p className="text-xs text-orange-700">Bel de Schuldhulproute op <strong>0800-8887</strong> — gratis en anoniem. Of ga naar je gemeente voor een intakegesprek.</p>
        </div>
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Eerlijke informatie over schulden en hulp" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {schuldenArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// ── VERZEKERINGEN ──
const verzekeringenArticles = [
  { tag: 'Verzekeringen', title: 'Welke verzekeringen heb je écht nodig?', summary: 'Niet elke verzekering is het waard. Dit zijn de verzekeringen die je sowieso moet hebben.', readTime: 6, path: '/verzekeringen', affiliate: false },
  { tag: 'Zorgverzekering', title: 'Zorgverzekering vergelijken 2025 — bespaar honderden euro\'s', summary: 'Hoe je de beste zorgverzekering voor jouw situatie vindt en hoeveel je kunt besparen.', readTime: 7, path: '/verzekeringen', affiliate: true },
  { tag: 'Autoverzekering', title: 'Autoverzekering vergelijken — WA, beperkt of all-risk?', summary: 'Welke autoverzekering past bij jouw auto en rijgedrag? We leggen de verschillen uit.', readTime: 5, path: '/verzekeringen', affiliate: true },
  { tag: 'Inboedel', title: 'Inboedelverzekering — heb je die nodig?', summary: 'Voor wie is een inboedelverzekering slim, en waar moet je op letten bij het afsluiten?', readTime: 4, path: '/verzekeringen', affiliate: true },
  { tag: 'Energie', title: 'Goedkoopste energieleverancier 2025 — vergelijk en bespaar', summary: 'Energie vergelijken loont nog steeds. Zo vind je de goedkoopste leverancier voor jou.', readTime: 5, path: '/verzekeringen', affiliate: true },
  { tag: 'Leven', title: 'Levensverzekering — wanneer is het slim?', summary: 'Een levensverzekering is niet voor iedereen nodig. Dit zijn de situaties waarin het slim is.', readTime: 6, path: '/verzekeringen', affiliate: false },
]

export function Verzekeringen() {
  return (
    <>
      <PageHero
        badge="Verzekeringen"
        title={<>Bescherm wat je hebt <em className="text-brand-500 not-italic">opgebouwd</em></>}
        subtitle="De juiste verzekeringen zijn de basis van financiële zekerheid. Wij helpen je vergelijken."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="🏥" title="Zorgverzekering" body="Verplicht in Nederland maar je kunt wel flink besparen door slim te vergelijken." />
          <InfoCard icon="🚗" title="Autoverzekering" body="WA, beperkt of all-risk? De keuze hangt af van de waarde van je auto." />
          <InfoCard icon="🏠" title="Inboedel & opstal" body="Bescherm je spullen en je woning tegen brand, diefstal en waterschade." />
        </div>
        <AffiliateCTA
          title="Vergelijk verzekeringen en bespaar"
          subtitle="Via Independer vergelijk je in minuten alle grote verzekeraars van Nederland."
          cta="Vergelijk verzekeringen →"
          href={affiliateUrl('zorgverzekering', 'verzekeringen-cta')}
        />
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Verzekeringen zonder gedoe" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verzekeringenArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// ── TOOLS ──
export function Tools() {
  return (
    <>
      <PageHero
        badge="Tools"
        title={<>Bereken <em className="text-brand-500 not-italic">jouw financiële toekomst</em></>}
        subtitle="Interactieve calculators en trackers die je helpen betere financiële beslissingen te maken."
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '📈', title: 'Compound interest calculator', desc: 'Bereken wat jouw maandelijkse inleg oplevert na 10, 20 of 30 jaar bij verschillende rendementen.', badge: 'Binnenkort' },
            { icon: '🎯', title: 'Hoeveel heb ik nodig?', desc: 'Bereken hoeveel vermogen je nodig hebt om financieel vrij te zijn of eerder te stoppen met werken.', badge: 'Binnenkort' },
            { icon: '⚖️', title: 'Broker vergelijker', desc: 'Vergelijk DEGIRO, Trading 212, Saxo en andere brokers op kosten, functies en geschiktheid.', badge: 'Binnenkort' },
            { icon: '💳', title: 'Schulden calculator', desc: 'Bereken hoe lang het duurt om je schulden af te lossen en hoeveel rente je betaalt.', badge: 'Binnenkort' },
            { icon: '📊', title: 'Budget planner', desc: 'Vul je inkomsten en uitgaven in en zie direct waar je kunt besparen.', badge: 'Binnenkort' },
            { icon: '🏦', title: 'Pensioen calculator', desc: 'Bereken hoeveel je maandelijks moet inleggen om op je gewenste pensioenleeftijd te stoppen.', badge: 'Binnenkort' },
          ].map(tool => (
            <div key={tool.title} className="bg-white border border-gray-200 rounded-xl p-5 flex gap-4">
              <span className="text-2xl flex-shrink-0">{tool.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-sm">{tool.title}</p>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{tool.badge}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// ── BLOG ──
const allArticles = [
  { tag: 'Beleggen', title: 'Beginnen met beleggen in 2025 — de complete gids', summary: 'Alles wat je moet weten om veilig te starten met beleggen als beginner in Nederland.', readTime: 8, path: '/beleggen', affiliate: false },
  { tag: 'Schulden', title: 'Uit de schulden — het complete stappenplan', summary: 'Van schuldenoverzicht tot betalingsregelingen. Alles stap voor stap.', readTime: 10, path: '/schulden', affiliate: false },
  { tag: "ETF's", title: "Beste ETF's voor Nederlandse beleggers 2025", summary: "IWDA, VWRL, VUSA — welke indexfondsen zijn het meest geschikt?", readTime: 9, path: '/beleggen', affiliate: true },
  { tag: 'Broker', title: 'DEGIRO review 2025 — eerlijk en volledig', summary: 'Is DEGIRO de beste broker voor jou? Wij zetten alle voor- en nadelen op een rij.', readTime: 6, path: '/beleggen', affiliate: true },
  { tag: 'Sparen', title: 'Beste spaarrekening Nederland 2025', summary: 'Welke bank biedt de hoogste spaarrente? Ons actuele overzicht.', readTime: 5, path: '/sparen', affiliate: true },
  { tag: 'Vermogen', title: 'Wanneer ben je rijk in Nederland?', summary: 'Wat betekent rijk zijn eigenlijk? We kijken naar vermogen, inkomen en gevoel.', readTime: 5, path: '/extra-inkomen', affiliate: false },
  { tag: 'Crypto', title: 'Bitcoin kopen in Nederland — veilig en goedkoop', summary: 'De beste manier om je eerste Bitcoin te kopen in 2025.', readTime: 5, path: '/beleggen', affiliate: true },
  { tag: 'Budget', title: 'Budget maken in 5 stappen', summary: 'Een budget hoeft niet ingewikkeld te zijn. Met dit stappenplan ben je in een uur klaar.', readTime: 5, path: '/sparen', affiliate: false },
]

export function Blog() {
  return (
    <>
      <PageHero
        badge="Blog"
        title={<>Alle artikelen over <em className="text-brand-500 not-italic">geld & financiën</em></>}
        subtitle="Eerlijke, praktische artikelen over beleggen, sparen, schulden en meer."
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allArticles.map(a => <ArticleCard key={a.title} {...a} />)}
        </div>
      </div>
    </>
  )
}

// ── OVER ONS ──
export function OverOns() {
  return (
    <>
      <PageHero
        badge="Over ons"
        title="Wie is geldbewuster.nl?"
        subtitle="Eerlijke financiële informatie voor gewone Nederlanders — zonder jargon en zonder verborgen agenda."
      />
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="font-serif text-xl font-normal">Onze missie</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Geldbewuster.nl is opgericht omdat financiële informatie in Nederland vaak onnodig ingewikkeld wordt gemaakt. Wij geloven dat iedereen recht heeft op heldere, eerlijke informatie over geld — of je nu schulden wil aflossen, wil beginnen met beleggen, of gewoon meer wil overhouden aan het einde van de maand.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="font-serif text-xl font-normal">Hoe we geld verdienen</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Geldbewuster.nl verdient geld via affiliate marketing. Als je via onze links een product of dienst afneemt, ontvangen wij een vergoeding van de aanbieder. Dit kost jou niets extra. Wij schrijven altijd eerlijk over producten — ook als we er niets aan verdienen.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="font-serif text-xl font-normal">Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Heb je een vraag of wil je samenwerken? Stuur een e-mail naar <span className="text-brand-500">hallo@geldbewuster.nl</span></p>
        </div>
      </div>
    </>
  )
}
