import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function VrijheidCalculator() {
  const [maanduitgaven, setMaanduitgaven] = useState('')
  const [regel, setRegel] = useState('4')
  const [huidigVermogen, setHuidigVermogen] = useState('')
  const [maandInleg, setMaandInleg] = useState('')
  const [rendement, setRendement] = useState('')
  const [berekend, setBerekend] = useState(false)

  const u = parseFloat(maanduitgaven) || 0
  const r = parseFloat(regel) || 4
  const v = parseFloat(huidigVermogen) || 0
  const m = parseFloat(maandInleg) || 0
  const rend = parseFloat(rendement) || 0

  const doelvermogen = Math.round((u * 12) / (r / 100))
  const tekort = Math.max(0, doelvermogen - v)
  const maandRente = rend / 1200
  const maandenNodig = tekort > 0 && m > 0 && maandRente > 0
    ? Math.ceil(Math.log((tekort * maandRente + m) / m) / Math.log(1 + maandRente))
    : tekort > 0 && m > 0 ? Math.ceil(tekort / m) : 0
  const jarenNodig = Math.floor(maandenNodig / 12)
  const maandenRest = maandenNodig % 12

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Financiële vrijheid calculator</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Gratis tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-3">Hoeveel heb ik nodig voor financiële vrijheid?</h1>
          <p className="text-gray-500 leading-relaxed">Bereken hoeveel vermogen je nodig hebt om te stoppen met werken of financieel onafhankelijk te zijn. Vul je maandelijkse uitgaven en huidige vermogen in en zie hoe lang het nog duurt.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 1, Jouw uitgaven</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Maandelijkse uitgaven <span className="text-brand-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Hoeveel geef je gemiddeld per maand uit? Denk aan huur, boodschappen, abonnementen en vrije tijd.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={maanduitgaven} onChange={e => { setMaanduitgaven(e.target.value); setBerekend(false) }} placeholder="bijv. 2500"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 2, Onttrekkingsregel</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Onttrekkingspercentage <span className="text-brand-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Hoeveel procent van je vermogen neem je jaarlijks op? De 4%-regel is de meest gebruikte standaard en houdt rekening met inflatie.</p>
            <div className="relative max-w-xs">
              <input type="number" value={regel} onChange={e => { setRegel(e.target.value); setBerekend(false) }} step="0.5"
                className="w-full pl-4 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
            </div>
            <div className="flex gap-2 mt-2">
              {['3', '3.5', '4'].map(v => (
                <button key={v} onClick={() => { setRegel(v); setBerekend(false) }}
                  className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}%</button>
              ))}
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 3, Jouw situatie</p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Huidig vermogen</label>
              <p className="text-xs text-gray-400 mb-3">Hoeveel heb je nu al gespaard of belegd?</p>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                <input type="number" value={huidigVermogen} onChange={e => { setHuidigVermogen(e.target.value); setBerekend(false) }} placeholder="bijv. 15000"
                  className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Maandelijkse inleg</label>
              <p className="text-xs text-gray-400 mb-3">Hoeveel leg je elke maand opzij?</p>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                <input type="number" value={maandInleg} onChange={e => { setMaandInleg(e.target.value); setBerekend(false) }} placeholder="bijv. 500"
                  className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Verwacht rendement</label>
              <p className="text-xs text-gray-400 mb-3">Het gemiddelde jaarlijkse rendement op je beleggingen.</p>
              <div className="relative max-w-xs">
                <input type="number" value={rendement} onChange={e => { setRendement(e.target.value); setBerekend(false) }} placeholder="bijv. 7" step="0.5"
                  className="w-full pl-4 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
              </div>
              <div className="flex gap-2 mt-2">
                {['5', '7', '8'].map(v => (
                  <button key={v} onClick={() => { setRendement(v); setBerekend(false) }}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}%</button>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 flex gap-3">
            <button onClick={() => { if (u > 0) setBerekend(true) }} disabled={!maanduitgaven}
              className="bg-brand-500 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-lg transition-colors text-sm">
              Bereken
            </button>
            <button onClick={() => { setMaanduitgaven(''); setRegel('4'); setHuidigVermogen(''); setMaandInleg(''); setRendement(''); setBerekend(false) }}
              className="text-sm text-gray-400 hover:text-gray-600 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              Reset
            </button>
          </div>
        </div>

        {berekend && doelvermogen > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="font-serif text-2xl font-normal">Jouw resultaat</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-brand-500 rounded-xl p-4 text-center col-span-2">
                <p className="text-xs text-white/70 mb-1">Doelvermogen</p>
                <p className="font-serif text-3xl font-normal text-white">€{doelvermogen.toLocaleString('nl')}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Nog te sparen</p>
                <p className="font-serif text-xl font-normal text-gray-700">€{Math.max(0, doelvermogen - (parseFloat(huidigVermogen) || 0)).toLocaleString('nl')}</p>
              </div>
              <div className="bg-brand-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Nog te gaan</p>
                <p className="font-serif text-xl font-normal text-brand-500">
                  {doelvermogen <= (parseFloat(huidigVermogen) || 0) ? 'Al vrij!' : jarenNodig > 0 ? `${jarenNodig} jaar${maandenRest > 0 ? ` ${maandenRest} mnd` : ''}` : maandenNodig > 0 ? `${maandenNodig} mnd` : 'Voeg inleg toe'}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-400">Berekening op basis van de {r}%-regel. Beleggen brengt risico's met zich mee. Dit is geen financieel advies.</p>
          </div>
        )}

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is financiële vrijheid?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Financiële vrijheid betekent dat je genoeg vermogen hebt opgebouwd om van de opbrengsten te leven, zonder dat je hoeft te werken voor je inkomen. Je geld werkt dan voor jou in plaats van andersom.</p>
            <p className="text-gray-600 leading-relaxed">Dit betekent niet per se dat je stopt met werken. Veel mensen kiezen er voor om minder te werken, vrijwilliger te zijn of zich te richten op projecten die ze leuk vinden. De vrijheid zit hem in de keuze.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt deze calculator?</h2>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Vul je maandelijkse uitgaven in', uitleg: 'Dit zijn alle kosten die je maandelijks maakt: huur of hypotheek, boodschappen, verzekeringen, abonnementen en vrije tijd. Wees realistisch.' },
                { stap: '2', titel: 'Kies een onttrekkingspercentage', uitleg: 'Dit is het percentage van je vermogen dat je jaarlijks opneemt. Bij de 4%-regel leef je van 4% van je vermogen per jaar. Historisch gezien gaat je vermogen dan niet achteruit.' },
                { stap: '3', titel: 'Vul je huidige situatie in', uitleg: 'Hoeveel heb je nu al en hoeveel leg je elke maand in? Dit bepaalt hoe lang het duurt om je doelvermogen te bereiken.' },
                { stap: '4', titel: 'Voeg een rendement toe', uitleg: 'Met welk jaarlijks rendement reken je? Dit helpt berekenen hoe snel je vermogen groeit richting je doel.' },
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
                { term: 'De 4%-regel', uitleg: 'Een vuistregel uit onderzoek (de Trinity Study) die zegt dat je jaarlijks 4% van je vermogen kunt opnemen zonder dat het vermogen uitgeput raakt, over een periode van 30 jaar.' },
                { term: 'Doelvermogen', uitleg: 'Het bedrag dat je nodig hebt om financieel vrij te zijn. Berekend door je jaarlijkse uitgaven te delen door het onttrekkingspercentage.' },
                { term: 'Onttrekkingspercentage', uitleg: 'Het percentage van je vermogen dat je jaarlijks opneemt om van te leven. Hoe lager, hoe veiliger maar ook hoe meer vermogen je nodig hebt.' },
                { term: 'Passief inkomen', uitleg: 'Inkomen dat binnenkomt zonder actief te werken. Bij financiële vrijheid is dit het rendement op je beleggingsportefeuille.' },
                { term: 'FIRE', uitleg: 'Staat voor Financial Independence, Retire Early. Een beweging van mensen die streven naar vroeg financieel vrij zijn, vaak al voor hun 50e.' },
                { term: 'Vermogensopbouw', uitleg: 'Het proces van spaargeld en beleggingen opbouwen over tijd. Dit gaat sneller naarmate je meer inlegt en een hoger rendement behaalt.' },
              ].map(item => (
                <div key={item.term} className="bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-medium text-sm text-brand-500 mb-1">{item.term}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
            <p className="font-medium text-sm text-brand-700 mb-2">Tip: bereken ook wat je kunt besparen</p>
            <p className="text-xs text-gray-600 leading-relaxed">Je doelvermogen daalt direct als je minder uitgeeft. €200 minder per maand verlaagt je doelvermogen met €60.000 bij de 4%-regel. Kleine besparingen hebben dus een groot effect op wanneer je financieel vrij bent.</p>
          </div>
        </div>
      </div>
    </>
  )
}
