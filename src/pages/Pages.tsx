// Beschermen page
import { PageHero, ArticleCard, AffiliateCTA, SectionHeader, InfoCard } from '../components/UI'
import { affiliateUrl } from '../config/affiliate'

const articles = [
  { tag: 'Verzekeringen', title: 'Welke verzekeringen heb je écht nodig?', summary: 'Niet elke verzekering is het waard. Dit zijn de verzekeringen die je sowieso moet hebben.', readTime: 6, path: '/beschermen', affiliate: false },
  { tag: 'Zorgverzekering', title: 'Zorgverzekering vergelijken 2025, bespaar honderden euro\'s', summary: 'Hoe je de beste zorgverzekering voor jouw situatie vindt en hoeveel je kunt besparen.', readTime: 7, path: '/beschermen', affiliate: true },
  { tag: 'Autoverzekering', title: 'Autoverzekering vergelijken, WA, beperkt of all-risk?', summary: 'Welke autoverzekering past bij jouw auto en rijgedrag? We leggen de verschillen uit.', readTime: 5, path: '/beschermen', affiliate: true },
  { tag: 'Inboedel', title: 'Inboedelverzekering, heb je die nodig?', summary: 'Voor wie is een inboedelverzekering slim, en waar moet je op letten bij het afsluiten?', readTime: 4, path: '/beschermen', affiliate: true },
  { tag: 'Noodfonds', title: 'Noodfonds opbouwen. Hoeveel heb je nodig?', summary: 'Een noodfonds is de basis van financiële gezondheid. Zo bouw je er een op.', readTime: 5, path: '/beschermen', affiliate: false },
  { tag: 'Leven', title: 'Levensverzekering, wanneer is het slim?', summary: 'Een levensverzekering is niet voor iedereen nodig. Dit zijn de situaties waarin het slim is.', readTime: 6, path: '/beschermen', affiliate: false },
]

export function Beschermen() {
  return (
    <>
      <PageHero
        badge="Beschermen"
        title={<>Bescherm wat je hebt <em className="text-brand-500 not-italic">opgebouwd</em></>}
        subtitle="De juiste verzekeringen en een noodfonds zijn de basis van financiële zekerheid."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="🏥" title="Zorgverzekering" body="Verplicht in Nederland. Maar je kunt wel flink besparen door slim te vergelijken." />
          <InfoCard icon="🚗" title="Autoverzekering" body="WA, beperkt of all-risk? De keuze hangt af van de waarde van je auto." />
          <InfoCard icon="🏠" title="Inboedel & opstal" body="Bescherm je spullen en je woning tegen brand, diefstal en waterschade." />
        </div>
        <AffiliateCTA
          title="Vergelijk verzekeringen en bespaar"
          subtitle="Via Independer vergelijk je in minuten alle grote verzekeraars."
          cta="Vergelijk verzekeringen →"
          href={affiliateUrl('zorgverzekering', 'beschermen-cta')}
        />
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Verzekeringen zonder gedoe" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// Oplossen page
const oplossenArticles = [
  { tag: 'Schulden', title: 'Uit de schulden: het complete stappenplan', summary: 'Van schuldenoverzicht maken tot betalingsregelingen treffen. Alles stap voor stap uitgelegd.', readTime: 10, path: '/oplossen', affiliate: false },
  { tag: 'Schuldhulp', title: 'Schuldhulpverlening in Nederland, wie helpt jou?', summary: 'Een overzicht van alle instanties die je gratis kunnen helpen bij schulden.', readTime: 6, path: '/oplossen', affiliate: false },
  { tag: 'Schuldhulp', title: 'Wat doet de Kredietbank Nederland?', summary: 'De Kredietbank kan je helpen met schuldsanering en budgetbeheer. Zo werkt het.', readTime: 5, path: '/oplossen', affiliate: false },
  { tag: 'WSNP', title: 'WSNP uitgelegd, wat is schuldsanering?', summary: 'De Wet Schuldsanering Natuurlijke Personen is een laatste redmiddel. Dit is hoe het werkt.', readTime: 7, path: '/oplossen', affiliate: false },
  { tag: 'Budget', title: 'Nibud budgettools, gratis hulp bij je financiën', summary: 'Het Nibud heeft gratis tools waarmee je jouw budget inzichtelijk maakt.', readTime: 4, path: '/oplossen', affiliate: false },
  { tag: 'Studieschuld', title: 'DUO studieschuld aflossen. Wat zijn je opties?', summary: 'Hoeveel moet je terugbetalen en wat zijn de regels? Alles over DUO schulden.', readTime: 6, path: '/oplossen', affiliate: false },
  { tag: 'Hulp', title: 'Sociaal Raadslieden, gratis juridisch advies', summary: 'Sociaal Raadslieden geven gratis advies over schulden, uitkeringen en toeslagen.', readTime: 4, path: '/oplossen', affiliate: false },
  { tag: 'Schulden', title: 'Betalingsregeling treffen met schuldeisers', summary: 'Kun je een rekening niet betalen? Zo vraag je een betalingsregeling aan.', readTime: 5, path: '/oplossen', affiliate: false },
]

export function Oplossen() {
  return (
    <>
      <PageHero
        badge="Oplossen"
        title={<>Schulden oplossen, <em className="text-brand-500 not-italic">je staat er niet alleen voor</em></>}
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
          <p className="text-xs text-orange-700">Bel de Schuldhulproute op <strong>0800-8887</strong>, gratis en anoniem. Of ga naar je gemeente voor een intakegesprek.</p>
        </div>
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Eerlijke informatie over schulden en hulp" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {oplossenArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// Slim Leven page
const slimArticles = [
  { tag: 'Besparen', title: 'Besparen op boodschappen. 15 praktische tips', summary: 'Kleine aanpassingen in je boodschappenpatroon kunnen honderden euro\'s per jaar schelen.', readTime: 6, path: '/slim-leven', affiliate: false },
  { tag: 'Abonnementen', title: 'Abonnementen opzeggen. De complete checklist', summary: 'Hoeveel abonnementen betaal je zonder het te weten? Gebruik onze checklist.', readTime: 4, path: '/slim-leven', affiliate: false },
  { tag: 'Energie', title: 'Goedkoopste energieleverancier 2025, vergelijk en bespaar', summary: 'Energie vergelijken loont nog steeds. Zo vind je de goedkoopste leverancier voor jou.', readTime: 5, path: '/slim-leven', affiliate: true },
  { tag: 'Budget', title: 'Budget maken in 5 stappen. Zo houd je overzicht', summary: 'Een budget hoeft niet ingewikkeld te zijn. Met dit stappenplan ben je in een uur klaar.', readTime: 5, path: '/slim-leven', affiliate: false },
  { tag: 'Budget', title: 'De 50/30/20 regel uitgelegd', summary: 'De populairste budgetmethode ter wereld. Werkt het ook voor jou?', readTime: 4, path: '/slim-leven', affiliate: false },
  { tag: 'Cashback', title: 'Cashback apps Nederland, gratis geld terugkrijgen', summary: 'Met cashback apps krijg je geld terug op aankopen die je toch al doet.', readTime: 5, path: '/slim-leven', affiliate: false },
]

export function SlimLeven() {
  return (
    <>
      <PageHero
        badge="Slim leven"
        title={<>Meer overhouden <em className="text-brand-500 not-italic">zonder in te leveren</em></>}
        subtitle="Kleine slimme keuzes maken een groot verschil op jaarbasis. Wij helpen je die keuzes te maken."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="🛒" title="Boodschappen" body="Gemiddeld bespaar je €100-200 per maand met slimmere boodschappengewoontes." />
          <InfoCard icon="📱" title="Abonnementen" body="Nederlanders betalen gemiddeld €150/maand aan abonnementen. Veel daarvan ongebruikt." />
          <InfoCard icon="⚡" title="Energie" body="Overstappen naar een goedkopere energieleverancier bespaart al snel €300-500 per jaar." />
        </div>
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Praktische tips die je direct kunt toepassen" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slimArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// Vergelijker page
const vergelijkerItems = [
  { tag: 'Brokers', title: 'Beste brokers van 2025, eerlijk vergeleken', summary: 'DEGIRO, Trading 212, Saxo Bank, Peaks, wij zetten ze naast elkaar.', readTime: 8, path: '/vergelijker', affiliate: true },
  { tag: 'Sparen', title: 'Beste spaarrekeningen 2025. Hoogste rente', summary: 'Welke bank biedt de hoogste spaarrente? Ons actuele overzicht.', readTime: 5, path: '/vergelijker', affiliate: true },
  { tag: 'Crypto', title: 'Beste crypto exchanges Nederland 2025', summary: 'Bitvavo, Coinbase, Kraken, welke exchange is het best voor Nederlandse gebruikers?', readTime: 6, path: '/vergelijker', affiliate: true },
  { tag: 'Verzekeringen', title: 'Zorgverzekering vergelijken, bespaar tot €500', summary: 'Vergelijk alle grote zorgverzekeraars op prijs en dekking.', readTime: 7, path: '/vergelijker', affiliate: true },
  { tag: 'Energie', title: 'Energieleveranciers vergelijken 2025', summary: 'Stroom en gas, welke leverancier is het goedkoopst voor jouw verbruik?', readTime: 5, path: '/vergelijker', affiliate: true },
  { tag: 'Hypotheek', title: 'Hypotheek vergelijken, zo vind je de laagste rente', summary: 'Alles over hypotheken vergelijken en waar je op moet letten als starter.', readTime: 9, path: '/vergelijker', affiliate: true },
]

export function Vergelijker() {
  return (
    <>
      <PageHero
        badge="Vergelijker"
        title={<>Vergelijk en kies <em className="text-brand-500 not-italic">de beste optie</em></>}
        subtitle="Eerlijke vergelijkingen van brokers, verzekeringen, spaarrekeningen en meer."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
          <p className="text-sm font-medium text-green-800 mb-1">Transparant over affiliate links</p>
          <p className="text-xs text-green-700">Alle vergelijkingspagina's bevatten affiliate links. Wij ontvangen een vergoeding als je via onze link een product afneemt, zonder extra kosten voor jou. Dit heeft geen invloed op onze beoordeling.</p>
        </div>
        <section>
          <SectionHeader title="Alle vergelijkingen" subtitle="Actueel bijgehouden voor 2025" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vergelijkerItems.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// Persoonlijk page
const persoonlijkArticles = [
  { tag: 'Belasting', title: 'Belastingaangifte doen als beginner, stap voor stap', summary: 'Je eerste belastingaangifte hoeft niet ingewikkeld te zijn. Dit is hoe het werkt.', readTime: 8, path: '/persoonlijk', affiliate: false },
  { tag: 'Belasting', title: 'Box 3 uitgelegd, belasting over je vermogen', summary: 'Hoe werkt de vermogensbelasting in Nederland en hoeveel betaal je?', readTime: 6, path: '/persoonlijk', affiliate: false },
  { tag: 'Hypotheek', title: 'Hypotheek als starter, wat kun je lenen?', summary: 'Als starter op de woningmarkt is een hypotheek complex. Dit zijn de basics.', readTime: 7, path: '/persoonlijk', affiliate: false },
  { tag: 'ZZP', title: 'ZZP financiën op orde, van BTW tot pensioen', summary: 'Als zzp\'er regel je alles zelf. Dit is een overzicht van wat je moet weten.', readTime: 9, path: '/persoonlijk', affiliate: false },
  { tag: 'Toeslagen', title: 'Toeslagen checken, waar heb je recht op?', summary: 'Veel mensen laten toeslagen liggen. Check of jij recht hebt op huurtoeslag, zorgtoeslag of kinderbijslag.', readTime: 5, path: '/persoonlijk', affiliate: false },
  { tag: 'Salaris', title: 'Salaris onderhandelen, zo doe je het succesvol', summary: 'De meeste mensen onderhandelen niet over hun salaris. Degenen die het wél doen verdienen gemiddeld 7% meer.', readTime: 6, path: '/persoonlijk', affiliate: false },
]

export function Persoonlijk() {
  return (
    <>
      <PageHero
        badge="Persoonlijke financiën"
        title={<>Jouw financiën <em className="text-brand-500 not-italic">op orde</em></>}
        subtitle="Belasting, hypotheek, toeslagen en ZZP, de onderwerpen waar iedereen mee te maken krijgt."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="🧾" title="Belasting" body="Belastingaangifte, box 1/2/3, aftrekposten, wij leggen het uit in gewone taal." />
          <InfoCard icon="🏠" title="Hypotheek" body="Als starter op de woningmarkt is een hypotheek complex. Wij helpen je op weg." />
          <InfoCard icon="💼" title="ZZP" body="Als zzp'er regel je je eigen financiën. Van BTW afdragen tot pensioen opbouwen." />
        </div>
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Praktische informatie over jouw financiën" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {persoonlijkArticles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}

// Over Ons page
export function OverOns() {
  return (
    <>
      <PageHero
        badge="Over ons"
        title="Wie is geldbewuster.nl?"
        subtitle="Eerlijke financiële informatie voor gewone Nederlanders zonder jargon en zonder verborgen agenda."
      />
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="font-serif text-xl font-normal">Onze missie</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Geldbewuster.nl is opgericht omdat financiële informatie in Nederland vaak onnodig ingewikkeld wordt gemaakt. Banken, verzekeraars en beleggingsplatforms spreken een taal die de meeste mensen niet begrijpen.</p>
          <p className="text-sm text-gray-600 leading-relaxed">Wij geloven dat iedereen recht heeft op heldere, eerlijke informatie over geld. Of je nu schulden wil aflossen, wil beginnen met beleggen, of gewoon meer wil overhouden aan het einde van de maand.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="font-serif text-xl font-normal">Hoe we geld verdienen</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Geldbewuster.nl verdient geld via affiliate marketing. Als je via onze links een product of dienst afneemt, ontvangen wij een vergoeding van de aanbieder. Dit kost jou niets extra.</p>
          <p className="text-sm text-gray-600 leading-relaxed">Wij schrijven altijd eerlijk over producten, ook als we er niets aan verdienen. Onze beoordelingen worden niet beïnvloed door commerciële relaties.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
          <h2 className="font-serif text-xl font-normal">Contact</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Heb je een vraag, opmerking of wil je samenwerken? Stuur een e-mail naar <span className="text-brand-500">hallo@geldbewuster.nl</span></p>
        </div>
      </div>
    </>
  )
}
