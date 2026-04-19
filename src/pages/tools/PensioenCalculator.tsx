import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PensioenCalculator() {
  const [leeftijd, setLeeftijd] = useState('')
  const [pensioenLeeftijd, setPensioenLeeftijd] = useState('67')
  const [gewenstInkomen, setGewenstInkomen] = useState('')
  const [huidigPot, setHuidigPot] = useState('')
  const [rendement, setRendement] = useState('5')
  const [berekend, setBerekend] = useState(false)

  const l = parseInt(leeftijd) || 0
  const pl = parseInt(pensioenLeeftijd) || 67
  const gi = parseFloat(gewenstInkomen) || 0
  const hp = parseFloat(huidigPot) || 0
  const r = parseFloat(rendement) || 5
  const jaren = Math.max(0, pl - l)

  const doelVermogen = Math.round(gi * 12 * 25)
  const toekomstigePot = Math.round(hp * Math.pow(1 + r / 100, jaren))
  const tekort = Math.max(0, doelVermogen - toekomstigePot)
  const maandRente = r / 1200
  const maandNodig = jaren > 0 && tekort > 0 && maandRente > 0
    ? Math.round(tekort * maandRente / (Math.pow(1 + maandRente, jaren * 12) - 1))
    : jaren > 0 && tekort > 0 ? Math.round(tekort / (jaren * 12)) : 0

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Pensioen calculator</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Gratis tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-3">Pensioen calculator</h1>
          <p className="text-gray-500 leading-relaxed">Bereken hoeveel je maandelijks moet inleggen om op je gewenste pensioenleeftijd te kunnen stoppen met werken. De calculator houdt rekening met je huidige pensioenpot en het verwachte rendement.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 1, Jouw leeftijd</p>
          </div>
          <div className="p-6 border-b border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Huidige leeftijd <span className="text-brand-500">*</span></label>
              <p className="text-xs text-gray-400 mb-3">Hoe oud ben je nu?</p>
              <div className="relative">
                <input type="number" value={leeftijd} onChange={e => { setLeeftijd(e.target.value); setBerekend(false) }} placeholder="bijv. 32"
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">jaar</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gewenste pensioenleeftijd <span className="text-brand-500">*</span></label>
              <p className="text-xs text-gray-400 mb-3">Wanneer wil je stoppen met werken?</p>
              <div className="relative">
                <input type="number" value={pensioenLeeftijd} onChange={e => { setPensioenLeeftijd(e.target.value); setBerekend(false) }}
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">jaar</span>
              </div>
              <div className="flex gap-2 mt-2">
                {['60', '65', '67'].map(v => (
                  <button key={v} onClick={() => { setPensioenLeeftijd(v); setBerekend(false) }}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 2, Gewenst inkomen</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gewenst maandinkomen met pensioen <span className="text-brand-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Hoeveel wil je per maand netto kunnen besteden als je met pensioen bent? Let op: dit is exclusief AOW.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={gewenstInkomen} onChange={e => { setGewenstInkomen(e.target.value); setBerekend(false) }} placeholder="bijv. 2000"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 3, Huidige situatie</p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Huidig pensioenvermogen</label>
              <p className="text-xs text-gray-400 mb-3">Hoeveel staat er nu in je pensioenrekening of beleggingsrekening? Controleer je pensioenoverzicht op mijnpensioenoverzicht.nl.</p>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                <input type="number" value={huidigPot} onChange={e => { setHuidigPot(e.target.value); setBerekend(false) }} placeholder="bijv. 20000"
                  className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Verwacht rendement per jaar</label>
              <p className="text-xs text-gray-400 mb-3">Het gemiddelde jaarlijkse rendement op je beleggingen.</p>
              <div className="relative">
                <input type="number" value={rendement} onChange={e => { setRendement(e.target.value); setBerekend(false) }} step="0.5"
                  className="w-full pl-4 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
              </div>
              <div className="flex gap-2 mt-2">
                {['4', '5', '7'].map(v => (
                  <button key={v} onClick={() => { setRendement(v); setBerekend(false) }}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}%</button>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 flex gap-3">
            <button onClick={() => { if (l > 0 && gi > 0) setBerekend(true) }} disabled={!leeftijd || !gewenstInkomen}
              className="bg-brand-500 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-lg transition-colors text-sm">
              Bereken
            </button>
            <button onClick={() => { setLeeftijd(''); setPensioenLeeftijd('67'); setGewenstInkomen(''); setHuidigPot(''); setRendement('5'); setBerekend(false) }}
              className="text-sm text-gray-400 hover:text-gray-600 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              Reset
            </button>
          </div>
        </div>

        {berekend && doelVermogen > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="font-serif text-2xl font-normal">Jouw resultaat</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-brand-500 rounded-xl p-4 text-center">
                <p className="text-xs text-white/70 mb-1">Doelvermogen</p>
                <p className="font-serif text-xl font-normal text-white">€{doelVermogen.toLocaleString('nl')}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Tekort</p>
                <p className="font-serif text-xl font-normal text-gray-700">€{tekort.toLocaleString('nl')}</p>
              </div>
              <div className="bg-brand-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Inleg nodig per maand</p>
                <p className="font-serif text-xl font-normal text-brand-500">{maandNodig > 0 ? `€${maandNodig.toLocaleString('nl')}` : 'Genoeg!'}</p>
              </div>
            </div>
            <p className="text-xs text-gray-400">Berekend op basis van de 4%-regel (25x jaarlijkse uitgaven). Exclusief AOW en eventueel werkgeverspensioen. Dit is geen financieel advies.</p>
          </div>
        )}

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Waarom zelf pensioen berekenen?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Veel Nederlanders rekenen erop dat hun werkgeverspensioen en AOW voldoende zijn. Maar dat is niet altijd het geval, zeker niet voor mensen die als zzp'er werken, lang in deeltijd hebben gewerkt of vroeg willen stoppen.</p>
            <p className="text-gray-600 leading-relaxed">Door zelf te berekenen hoeveel je nodig hebt, weet je of je op koers ligt en of je iets moet aanpassen. Begin liever te vroeg dan te laat.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt deze calculator?</h2>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Vul je leeftijden in', uitleg: 'Je huidige leeftijd en de leeftijd waarop je wilt stoppen met werken. Hoe meer jaren je nog hebt, hoe minder je per maand hoeft in te leggen.' },
                { stap: '2', titel: 'Geef je gewenste inkomen op', uitleg: 'Hoeveel wil je per maand kunnen besteden als je met pensioen bent? Denk realistisch na: je hebt geen reiskosten meer maar misschien meer vrije tijd en hobby-uitgaven.' },
                { stap: '3', titel: 'Vul je huidige situatie in', uitleg: 'Hoeveel staat er al in je pensioenpot? Kijk op mijnpensioenoverzicht.nl voor een volledig beeld van je opgebouwd pensioen.' },
              ].map(item => (
                <div key={item.stap} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">{item.stap}</div>
                  <div>
                    <p className="font-medium text-sm mb-1">{item.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Belangrijke begrippen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { term: 'AOW', uitleg: 'Algemene Ouderdomswet. Een basispensioen van de overheid voor iedereen die in Nederland heeft gewoond of gewerkt. In 2025 is de AOW-leeftijd 67 jaar.' },
                { term: 'Werkgeverspensioen', uitleg: 'Het pensioen dat je opbouwt via je werkgever. Als werknemer bouw je automatisch pensioen op, als zzp\'er niet.' },
                { term: 'Lijfrente', uitleg: 'Een pensioenproduct waarbij je jaarlijks een bedrag inlegt en bij pensionering een maandelijkse uitkering ontvangt. Interessant voor zzp\'ers vanwege belastingvoordeel.' },
                { term: 'Pensioentekort', uitleg: 'Het verschil tussen wat je nodig hebt en wat je al hebt opgebouwd. Dit tekort moet je aanvullen met eigen spaar- of beleggingsgeld.' },
                { term: 'Mijnpensioenoverzicht.nl', uitleg: 'De officiële Nederlandse website waar je al je opgebouwde pensioenrechten kunt inzien. Handig startpunt voor je pensioenplanning.' },
                { term: '4%-regel', uitleg: 'Een vuistregel waarbij je jaarlijks 4% van je vermogen opneemt. Je hebt dan 25 keer je jaarlijkse uitgaven nodig als doelvermogen.' },
              ].map(item => (
                <div key={item.term} className="bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-medium text-sm text-brand-500 mb-1">{item.term}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
            <p className="font-medium text-sm text-brand-700 mb-2">Tip: check ook je werkgeverspensioen</p>
            <p className="text-xs text-gray-600 leading-relaxed">Ga naar mijnpensioenoverzicht.nl om te zien hoeveel pensioen je via je werkgever hebt opgebouwd. Tel dit op bij je eigen vermogen voor een completer beeld. Houd er rekening mee dat werkgeverspensioen doorgaans pas wordt uitbetaald vanaf de AOW-leeftijd.</p>
          </div>
        </div>
      </div>
    </>
  )
}
