import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SchuldenCalculator() {
  const [schuld, setSchuld] = useState('')
  const [rente, setRente] = useState('')
  const [aflossing, setAflossing] = useState('')
  const [berekend, setBerekend] = useState(false)

  const s = parseFloat(schuld) || 0
  const r = parseFloat(rente) || 0
  const a = parseFloat(aflossing) || 0
  const maandRente = r / 100 / 12
  const teLaag = a > 0 && a <= s * maandRente

  const maanden = maandRente > 0 && a > s * maandRente
    ? Math.ceil(Math.log(a / (a - s * maandRente)) / Math.log(1 + maandRente))
    : r === 0 && a > 0 ? Math.ceil(s / a) : 0
  const totaleBetaling = Math.round(maanden * a)
  const totaleRente = Math.round(totaleBetaling - s)
  const jaren = Math.floor(maanden / 12)
  const maandenRest = maanden % 12

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Schulden calculator</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            </div>
            <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Gratis tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-3">Schulden calculator</h1>
          <p className="text-gray-500 leading-relaxed">Bereken wanneer je schuldenvrij bent en hoeveel rente je in totaal betaalt. Vul het schuldbedrag, de rente en je maandelijkse aflossing in om direct inzicht te krijgen.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 1, Je schuld</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Totale schuld <span className="text-brand-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Het totale bedrag dat je op dit moment nog verschuldigd bent.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={schuld} onChange={e => { setSchuld(e.target.value); setBerekend(false) }} placeholder="bijv. 10000"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 2, Rente</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Jaarlijkse rente</label>
            <p className="text-xs text-gray-400 mb-3">De rente die je betaalt over je schuld. Dit staat in je leenovereenkomst. Laat leeg bij 0% rente.</p>
            <div className="relative max-w-xs">
              <input type="number" value={rente} onChange={e => { setRente(e.target.value); setBerekend(false) }} placeholder="bijv. 8" step="0.1"
                className="w-full pl-4 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
            </div>
            <div className="flex gap-2 mt-2">
              {['0', '5', '8', '14'].map(v => (
                <button key={v} onClick={() => { setRente(v); setBerekend(false) }}
                  className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}%</button>
              ))}
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 3, Aflossing</p>
          </div>
          <div className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Maandelijkse aflossing <span className="text-brand-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Hoeveel betaal je elke maand terug? Dit moet hoger zijn dan de maandelijkse rente om de schuld af te lossen.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={aflossing} onChange={e => { setAflossing(e.target.value); setBerekend(false) }} placeholder="bijv. 300"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
            {teLaag && s > 0 && r > 0 && <p className="text-xs text-red-500 mt-2">Aflossing te laag. Minimaal €{Math.ceil(s * maandRente + 1)} nodig om de rente te dekken.</p>}
          </div>

          <div className="px-6 pb-6 flex gap-3">
            <button onClick={() => { if (s > 0 && a > 0 && !teLaag) setBerekend(true) }} disabled={!schuld || !aflossing || teLaag}
              className="bg-brand-500 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-lg transition-colors text-sm">
              Bereken
            </button>
            <button onClick={() => { setSchuld(''); setRente(''); setAflossing(''); setBerekend(false) }}
              className="text-sm text-gray-400 hover:text-gray-600 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              Reset
            </button>
          </div>
        </div>

        {berekend && maanden > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="font-serif text-2xl font-normal">Jouw resultaat</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-brand-500 rounded-xl p-4 text-center">
                <p className="text-xs text-white/70 mb-1">Schuldenvrij in</p>
                <p className="font-serif text-xl font-normal text-white">{jaren > 0 ? `${jaren}j ` : ''}{maandenRest > 0 ? `${maandenRest}mnd` : ''}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Totaal betaald</p>
                <p className="font-serif text-xl font-normal text-gray-700">€{totaleBetaling.toLocaleString('nl')}</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Totale rente</p>
                <p className="font-serif text-xl font-normal text-red-600">€{totaleRente.toLocaleString('nl')}</p>
              </div>
            </div>
            <p className="text-xs text-gray-400">Dit is een indicatieve berekening. De werkelijke aflossingstermijn kan afwijken afhankelijk van de voorwaarden van je lening.</p>
          </div>
        )}

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Wat doet de schulden calculator?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Deze calculator laat je zien hoe lang het duurt om een schuld volledig af te lossen en hoeveel rente je in totaal betaalt. Het geeft je inzicht in de echte kosten van een lening en motiveert je om zo snel mogelijk af te lossen.</p>
            <p className="text-gray-600 leading-relaxed">Een hogere maandelijkse aflossing betekent niet alleen dat je sneller klaar bent, maar bespaart je ook enorm veel rente. Dat bedrag kun je daarna gebruiken om te sparen of te beleggen.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt deze calculator?</h2>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Vul je totale schuld in', uitleg: 'Het openstaande bedrag dat je nog moet terugbetalen. Dit staat op je meest recente afschrift of in je leenovereenkomst.' },
                { stap: '2', titel: 'Voeg de jaarlijkse rente toe', uitleg: 'De rente die je betaalt over de openstaande schuld. Heb je een rentevrije schuld? Dan kun je dit veld leeg laten of 0 invullen.' },
                { stap: '3', titel: 'Stel je maandelijkse aflossing in', uitleg: 'Hoeveel betaal je elke maand terug? Dit moet altijd hoger zijn dan de maandelijkse rente. Anders los je de schuld nooit af.' },
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
                { term: 'Hoofdsom', uitleg: 'Het oorspronkelijke bedrag dat je hebt geleend. Dit is de basis waarover rente wordt berekend.' },
                { term: 'Rente', uitleg: 'De kosten die je betaalt voor het lenen van geld. Uitgedrukt als een percentage per jaar van het openstaande bedrag.' },
                { term: 'Aflossing', uitleg: 'Het deel van je maandelijkse betaling dat de schuld daadwerkelijk verlaagt, na aftrek van de rente.' },
                { term: 'Restschuld', uitleg: 'Het bedrag dat je op een gegeven moment nog moet terugbetalen. Dit daalt elke maand als je aflost.' },
                { term: 'Annuïteit', uitleg: 'Een vaste maandelijkse betaling waarbij het aandeel rente daalt en het aandeel aflossing stijgt naarmate je meer hebt afgelost.' },
                { term: 'Schuldhulpverlening', uitleg: 'Professionele hulp bij het oplossen van schulden. In Nederland kun je hiervoor terecht bij de gemeente of organisaties zoals het Nibud.' },
              ].map(item => (
                <div key={item.term} className="bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-medium text-sm text-brand-500 mb-1">{item.term}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
            <p className="font-medium text-sm text-brand-700 mb-2">Tip: elke extra euro telt</p>
            <p className="text-xs text-gray-600 leading-relaxed">Verhoog je maandelijkse aflossing met €50 of €100 en bereken opnieuw. Je zult zien hoe groot het effect is op de looptijd en de totale rente die je betaalt. Rente besparen is hetzelfde als geld verdienen.</p>
          </div>
        </div>
      </div>
    </>
  )
}
