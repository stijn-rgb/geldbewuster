import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const stats = [
  { waarde: '45%+', label: 'Gemiddelde CTR', sub: 'ver boven marktgemiddelde' },
  { waarde: 'Top 3', label: 'Google positie', sub: 'voor financiële zoektermen' },
  { waarde: '25-45', label: 'Kernleeftijd doelgroep', sub: 'hoge koopintentie' },
]

const formats = [
  {
    naam: 'Gesponsord artikel',
    prijs: 'Vanaf €400',
    beschrijving: 'Een volledig artikel geschreven in de stijl van geldbewuster.nl. Jouw product of dienst staat centraal, wij zorgen voor de eerlijke en informatieve toon die onze lezers vertrouwen.',
    inclusief: ['SEO-geoptimaliseerde tekst', 'Interne links vanuit bestaande artikelen', 'Promotie via social media', 'Blijft permanent online'],
  },
  {
    naam: 'Product review',
    prijs: 'Vanaf €500',
    beschrijving: 'Een uitgebreide en eerlijke review van jouw financieel product. Onze lezers waarderen eerlijkheid, we benoemen ook de nadelen. Dat verhoogt het vertrouwen en daarmee de conversie.',
    inclusief: ['Uitgebreide voor- en nadelenanalyse', 'Vergelijking met concurrenten', 'Beoordelingsblok met score', 'Affiliate integratie mogelijk'],
  },
  {
    naam: 'Contentpartnerschap',
    prijs: 'Op aanvraag',
    beschrijving: 'Een langdurige samenwerking waarbij jouw merk structureel onderdeel wordt van onze content. Denk aan een vaste plaatsing in vergelijkingstabellen, category sponsoring of een eigen rubriek.',
    inclusief: ['Maandelijkse plaatsingen', 'Vaste positie in vergelijkingen', 'Exclusiviteit per categorie mogelijk', 'Rapportage en optimalisatie'],
  },
]

const doelgroep = [
  { label: 'Leeftijd', waarde: '25-45 jaar' },
  { label: 'Interesse', waarde: 'Beleggen, sparen, schulden, verzekeringen' },
  { label: 'Intentie', waarde: 'Actief op zoek naar financiële producten' },
  { label: 'Locatie', waarde: 'Nederland' },
  { label: 'Apparaat', waarde: '60% mobiel, 40% desktop' },
]

export default function Adverteerders() {
  const [activeFormat, setActiveFormat] = useState(0)

  return (
    <>
      <SEO
        title="Adverteren op geldbewuster.nl"
        description="Bereik Nederlanders die actief bezig zijn met hun financiën. Gesponsorde artikelen, reviews en contentpartnerschappen voor financiële aanbieders."
        canonical="/adverteren"
      />

      {/* HERO */}
      <div className="bg-[#1A1A18] py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at 60% 0%, rgba(29,158,117,0.15) 0%, transparent 60%)'}} />
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 justify-center mb-6">
            <Link to="/" className="hover:text-brand-500">Home</Link>
            <span>›</span>
            <span>Adverteren</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-brand-500/15 border border-brand-500/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            <span className="text-xs text-brand-500 font-medium tracking-wide">Adverteren op geldbewuster.nl</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight mb-5">
            Bereik Nederlanders die actief bezig zijn met hun <em className="text-brand-500 not-italic">financiën</em>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg mx-auto font-light">
            Geldbewuster.nl trekt een doelgroep die bewust zoekt naar financiële producten. Geen passieve lezers, maar mensen klaar om actie te ondernemen.
          </p>
          <a href="mailto:adverteren@geldbewuster.nl" className="inline-block bg-brand-500 hover:bg-brand-700 text-white font-medium text-sm px-7 py-3.5 rounded-xl transition-colors">
            Neem contact op →
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map(s => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
              <p className="font-serif text-4xl font-normal text-brand-500 mb-1">{s.waarde}</p>
              <p className="text-sm font-medium text-gray-900 mb-1">{s.label}</p>
              <p className="text-xs text-gray-400">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* DOELGROEP */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-8">
          <h2 className="font-serif text-2xl font-normal mb-2">Onze doelgroep</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Geldbewuster.nl trekt bezoekers die actief zoeken naar financiële informatie. Ze vergelijken, lezen reviews en zijn klaar om een beslissing te nemen.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {doelgroep.map(d => (
              <div key={d.label} className="bg-[#FAF7F2] rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{d.label}</p>
                <p className="text-sm font-medium text-gray-900">{d.waarde}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FORMATS */}
        <div className="mb-8">
          <h2 className="font-serif text-2xl font-normal mb-2">Advertentieformats</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Kies het format dat past bij jouw doel en budget.</p>

          <div className="flex gap-2 mb-6 flex-wrap">
            {formats.map((f, i) => (
              <button key={f.naam} onClick={() => setActiveFormat(i)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                  activeFormat === i ? 'bg-[#1A1A18] text-white border-[#1A1A18]' : 'bg-transparent text-gray-500 border-gray-200 hover:border-gray-400'
                }`}>
                {f.naam}
              </button>
            ))}
          </div>

          {formats.map((f, i) => activeFormat === i && (
            <div key={f.naam} className="bg-white border border-gray-100 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="font-serif text-xl font-normal mb-3">{f.naam}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{f.beschrijving}</p>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Inclusief</p>
                <ul className="space-y-2">
                  {f.inclusief.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-right flex flex-col items-end justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Prijs</p>
                  <p className="font-serif text-3xl font-normal text-gray-900 mb-6">{f.prijs}</p>
                </div>
                <a href="mailto:adverteren@geldbewuster.nl" className="inline-block bg-brand-500 hover:bg-brand-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors">
                  Vraag aan →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* WAAROM */}
        <div className="bg-[#1A1A18] rounded-2xl p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{background: 'radial-gradient(circle, rgba(29,158,117,0.12) 0%, transparent 70%)'}} />
          <h2 className="font-serif text-2xl font-normal text-white mb-2">Waarom geldbewuster.nl?</h2>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed max-w-lg font-light">Onze lezers zijn geen passieve surfers. Ze zoeken actief naar financiële producten en zijn klaar om een beslissing te nemen.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { titel: 'Hoge intentie', tekst: 'Bezoekers zoeken actief op termen als "beste broker" en "DEGIRO review". Ze willen iets doen, niet alleen lezen.' },
              { titel: 'Onafhankelijk vertrouwen', tekst: 'Geen sluikse reclame. Onze lezers weten dat we eerlijk zijn. Dat vertrouwen werkt in jouw voordeel.' },
              { titel: 'Snelgroeiend platform', tekst: 'Geldbewuster.nl groeit snel in organisch bereik. Vroeg instappen betekent de beste posities tegen de laagste prijs.' },
            ].map(item => (
              <div key={item.titel} className="bg-white/5 border border-white/8 rounded-xl p-5">
                <p className="text-sm font-medium text-brand-500 mb-2">{item.titel}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="font-serif text-2xl font-normal mb-3">Klaar om te adverteren?</h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">Stuur een mail en we bespreken welk format het beste bij jouw doel past.</p>
          <a href="mailto:adverteren@geldbewuster.nl" className="inline-block bg-[#1A1A18] hover:bg-gray-800 text-white font-medium text-sm px-8 py-3.5 rounded-xl transition-colors">
            adverteren@geldbewuster.nl
          </a>
          <p className="text-xs text-gray-400 mt-3">We reageren binnen 24 uur</p>
        </div>

      </div>
    </>
  )
}
