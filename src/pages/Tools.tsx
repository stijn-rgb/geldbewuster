import { useState } from 'react'

// ── COMPOUND INTEREST CALCULATOR ──
function CompoundCalc() {
  const [inleg, setInleg] = useState(200)
  const [start, setStart] = useState(1000)
  const [rente, setRente] = useState(7)
  const [jaren, setJaren] = useState(20)

  const resultaat = Math.round(start * Math.pow(1 + rente / 100, jaren) + inleg * 12 * ((Math.pow(1 + rente / 100, jaren) - 1) / (rente / 100)))
  const ingelegd = Math.round(start + inleg * 12 * jaren)
  const winst = Math.round(resultaat - ingelegd)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Startbedrag</label>
          <div className="flex items-center gap-2">
            <input type="range" min="0" max="50000" step="500" value={start} onChange={e => setStart(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">€{start.toLocaleString('nl')}</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Maandelijkse inleg</label>
          <div className="flex items-center gap-2">
            <input type="range" min="0" max="2000" step="25" value={inleg} onChange={e => setInleg(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">€{inleg}/mnd</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Jaarlijks rendement</label>
          <div className="flex items-center gap-2">
            <input type="range" min="1" max="15" step="0.5" value={rente} onChange={e => setRente(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">{rente}%</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Looptijd</label>
          <div className="flex items-center gap-2">
            <input type="range" min="1" max="40" step="1" value={jaren} onChange={e => setJaren(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">{jaren} jaar</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Ingelegd</p>
          <p className="font-serif text-lg font-normal text-gray-700">€{ingelegd.toLocaleString('nl')}</p>
        </div>
        <div className="bg-brand-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Rendement</p>
          <p className="font-serif text-lg font-normal text-brand-500">€{winst.toLocaleString('nl')}</p>
        </div>
        <div className="bg-brand-500 rounded-xl p-4 text-center">
          <p className="text-xs text-white/70 mb-1">Eindwaarde</p>
          <p className="font-serif text-lg font-normal text-white">€{resultaat.toLocaleString('nl')}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">Berekening op basis van jaarlijks rendement. Beleggen brengt risico's met zich mee.</p>
    </div>
  )
}

// ── FINANCIËLE VRIJHEID CALCULATOR ──
function VrijheidCalc() {
  const [maanduitgaven, setMaanduitgaven] = useState(2500)
  const [regel, setRegel] = useState(4)
  const [huidigVermogen, setHuidigVermogen] = useState(10000)
  const [maandInleg, setMaandInleg] = useState(500)
  const [rendement, setRendement] = useState(7)

  const doelvermogen = Math.round((maanduitgaven * 12) / (regel / 100))
  const tekort = Math.max(0, doelvermogen - huidigVermogen)
  const maandenNodig = tekort > 0 && maandInleg > 0
    ? Math.ceil(Math.log((tekort * (rendement / 1200) + maandInleg) / maandInleg) / Math.log(1 + rendement / 1200))
    : 0
  const jarenNodig = Math.round(maandenNodig / 12)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Maandelijkse uitgaven</label>
          <div className="flex items-center gap-2">
            <input type="range" min="500" max="10000" step="100" value={maanduitgaven} onChange={e => setMaanduitgaven(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">€{maanduitgaven.toLocaleString('nl')}</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Onttrekkingsregel</label>
          <div className="flex items-center gap-2">
            <input type="range" min="2" max="6" step="0.5" value={regel} onChange={e => setRegel(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">{regel}%-regel</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Huidig vermogen</label>
          <div className="flex items-center gap-2">
            <input type="range" min="0" max="500000" step="5000" value={huidigVermogen} onChange={e => setHuidigVermogen(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">€{huidigVermogen.toLocaleString('nl')}</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Maandelijkse inleg</label>
          <div className="flex items-center gap-2">
            <input type="range" min="0" max="5000" step="100" value={maandInleg} onChange={e => setMaandInleg(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">€{maandInleg}/mnd</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-brand-500 rounded-xl p-4 text-center col-span-2">
          <p className="text-xs text-white/70 mb-1">Doelvermogen</p>
          <p className="font-serif text-2xl font-normal text-white">€{doelvermogen.toLocaleString('nl')}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Nog te sparen</p>
          <p className="font-serif text-lg font-normal text-gray-700">€{tekort.toLocaleString('nl')}</p>
        </div>
        <div className="bg-brand-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Jaren nodig</p>
          <p className="font-serif text-lg font-normal text-brand-500">{jarenNodig > 0 ? `~${jarenNodig} jaar` : 'Al vrij!'}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">De {regel}%-regel betekent dat je jaarlijks {regel}% van je vermogen opneemt. Beleggen brengt risico's met zich mee.</p>
    </div>
  )
}

// ── BROKER VERGELIJKER ──
const brokers = [
  { naam: 'DEGIRO', kosten: '€1-3 per transactie', etfGratis: true, crypto: true, minInleg: '€0', beurs: '50+', geschikt: 'Beginners & gevorderden', score: 9.1 },
  { naam: 'Trading 212', kosten: 'Gratis', etfGratis: true, crypto: true, minInleg: '€1', beurs: '1', geschikt: 'Absolute beginners', score: 8.4 },
  { naam: 'Saxo Bank', kosten: '€2-6 per transactie', etfGratis: false, crypto: false, minInleg: '€0', beurs: '70+', geschikt: 'Gevorderden', score: 8.7 },
  { naam: 'BNDL (Brand New Day)', kosten: '0.15-0.5% p/j', etfGratis: true, crypto: false, minInleg: '€10', beurs: 'Via fondsen', geschikt: 'Passieve beleggers', score: 8.2 },
]

function BrokerVergelijker() {
  const [geselecteerd, setGeselecteerd] = useState<string[]>(['DEGIRO', 'Trading 212'])

  const toggle = (naam: string) => {
    if (geselecteerd.includes(naam)) {
      if (geselecteerd.length > 1) setGeselecteerd(geselecteerd.filter(b => b !== naam))
    } else {
      setGeselecteerd([...geselecteerd, naam])
    }
  }

  const gefiltered = brokers.filter(b => geselecteerd.includes(b.naam))

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {brokers.map(b => (
          <button
            key={b.naam}
            onClick={() => toggle(b.naam)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${geselecteerd.includes(b.naam) ? 'bg-brand-500 text-white border-brand-500 font-medium' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-brand-500 hover:text-brand-500'}`}
          >
            {b.naam}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <td className="py-2 text-xs text-gray-400 font-medium w-36">Kenmerk</td>
              {gefiltered.map(b => (
                <td key={b.naam} className="py-2 text-xs font-medium text-gray-700 text-center">{b.naam}</td>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { label: 'Transactiekosten', key: 'kosten' },
              { label: 'Gratis ETFs', key: 'etfGratis' },
              { label: 'Crypto', key: 'crypto' },
              { label: 'Min. inleg', key: 'minInleg' },
              { label: 'Beurzen', key: 'beurs' },
              { label: 'Geschikt voor', key: 'geschikt' },
              { label: 'Score', key: 'score' },
            ].map(row => (
              <tr key={row.label}>
                <td className="py-2.5 text-xs text-gray-400">{row.label}</td>
                {gefiltered.map(b => {
                  const val = b[row.key as keyof typeof b]
                  return (
                    <td key={b.naam} className="py-2.5 text-center text-xs text-gray-700">
                      {typeof val === 'boolean'
                        ? <span className={val ? 'text-brand-500 font-medium' : 'text-gray-300'}>{val ? '✓' : '✗'}</span>
                        : row.key === 'score'
                        ? <span className="inline-block bg-brand-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">{val}</span>
                        : val}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400">Vergelijking op basis van publieke informatie. Tarieven kunnen wijzigen.</p>
    </div>
  )
}

// ── SCHULDEN CALCULATOR ──
function SchuldenCalc() {
  const [schuld, setSchuld] = useState(10000)
  const [rente, setRente] = useState(8)
  const [aflossing, setAflossing] = useState(300)

  const maandRente = rente / 100 / 12
  const maanden = maandRente > 0 && aflossing > schuld * maandRente
    ? Math.ceil(Math.log(aflossing / (aflossing - schuld * maandRente)) / Math.log(1 + maandRente))
    : 0
  const totaleBetaling = Math.round(maanden * aflossing)
  const totaleRente = Math.round(totaleBetaling - schuld)
  const jaren = Math.floor(maanden / 12)
  const maandenRest = maanden % 12

  const teLaag = aflossing <= schuld * maandRente

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Schuldbedrag</label>
          <div className="flex items-center gap-2">
            <input type="range" min="500" max="100000" step="500" value={schuld} onChange={e => setSchuld(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">€{schuld.toLocaleString('nl')}</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Jaarlijkse rente</label>
          <div className="flex items-center gap-2">
            <input type="range" min="0" max="30" step="0.5" value={rente} onChange={e => setRente(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">{rente}%</span>
          </div>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-500 mb-1">Maandelijkse aflossing</label>
          <div className="flex items-center gap-2">
            <input type="range" min="50" max="5000" step="25" value={aflossing} onChange={e => setAflossing(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-24 text-right">€{aflossing}/mnd</span>
          </div>
        </div>
      </div>
      {teLaag ? (
        <div className="bg-red-50 rounded-xl p-4 text-center">
          <p className="text-sm font-medium text-red-700">Aflossing te laag</p>
          <p className="text-xs text-red-500 mt-1">Je maandelijkse aflossing dekt de rente niet. Verhoog de aflossing naar minimaal €{Math.ceil(schuld * maandRente + 1)}.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-brand-500 rounded-xl p-4 text-center">
            <p className="text-xs text-white/70 mb-1">Schuldenvrij in</p>
            <p className="font-serif text-lg font-normal text-white">{jaren > 0 ? `${jaren}j ` : ''}{maandenRest > 0 ? `${maandenRest}m` : ''}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Totaal betaald</p>
            <p className="font-serif text-lg font-normal text-gray-700">€{totaleBetaling.toLocaleString('nl')}</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Totale rente</p>
            <p className="font-serif text-lg font-normal text-red-600">€{totaleRente.toLocaleString('nl')}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ── BUDGET PLANNER ──
const categorieën = [
  { label: 'Wonen (huur/hypotheek)', key: 'wonen', default: 900 },
  { label: 'Boodschappen', key: 'boodschappen', default: 400 },
  { label: 'Transport', key: 'transport', default: 200 },
  { label: 'Verzekeringen', key: 'verzekeringen', default: 150 },
  { label: 'Abonnementen', key: 'abonnementen', default: 80 },
  { label: 'Uit eten / vrije tijd', key: 'vrij', default: 200 },
  { label: 'Sparen / beleggen', key: 'sparen', default: 200 },
  { label: 'Overig', key: 'overig', default: 100 },
]

function BudgetPlanner() {
  const [inkomen, setInkomen] = useState(3000)
  const [uitgaven, setUitgaven] = useState<Record<string, number>>(
    Object.fromEntries(categorieën.map(c => [c.key, c.default]))
  )

  const totaalUitgaven = Object.values(uitgaven).reduce((a, b) => a + b, 0)
  const over = inkomen - totaalUitgaven
  const spaarPercentage = Math.round((over / inkomen) * 100)

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1">Netto maandinkomen</label>
        <div className="flex items-center gap-2">
          <input type="range" min="500" max="10000" step="100" value={inkomen} onChange={e => setInkomen(+e.target.value)} className="flex-1 accent-brand-500" />
          <span className="text-sm font-medium w-24 text-right">€{inkomen.toLocaleString('nl')}/mnd</span>
        </div>
      </div>
      <div className="border border-gray-100 rounded-xl overflow-hidden">
        {categorieën.map(cat => (
          <div key={cat.key} className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-50 last:border-0">
            <span className="text-xs text-gray-500 flex-1">{cat.label}</span>
            <input
              type="number"
              value={uitgaven[cat.key]}
              onChange={e => setUitgaven({ ...uitgaven, [cat.key]: +e.target.value || 0 })}
              className="w-20 text-right text-sm border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:border-brand-500"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-50 rounded-xl p-3 text-center">
          <p className="text-xs text-gray-400 mb-1">Uitgaven</p>
          <p className="font-serif text-base font-normal text-gray-700">€{totaalUitgaven.toLocaleString('nl')}</p>
        </div>
        <div className={`rounded-xl p-3 text-center ${over >= 0 ? 'bg-brand-50' : 'bg-red-50'}`}>
          <p className="text-xs text-gray-400 mb-1">Over</p>
          <p className={`font-serif text-base font-normal ${over >= 0 ? 'text-brand-500' : 'text-red-500'}`}>€{over.toLocaleString('nl')}</p>
        </div>
        <div className="bg-brand-500 rounded-xl p-3 text-center">
          <p className="text-xs text-white/70 mb-1">Spaarquote</p>
          <p className="font-serif text-base font-normal text-white">{Math.max(0, spaarPercentage)}%</p>
        </div>
      </div>
      {over < 0 && <p className="text-xs text-red-500">Je geeft meer uit dan je verdient. Bekijk welke categorieën je kunt verlagen.</p>}
    </div>
  )
}

// ── PENSIOEN CALCULATOR ──
function PensioenCalc() {
  const [leeftijd, setLeeftijd] = useState(30)
  const [pensioenLeeftijd, setPensioenLeeftijd] = useState(67)
  const [gewenst, setGewenst] = useState(2000)
  const [huidigPot, setHuidigPot] = useState(5000)
  const [rendement, setRendement] = useState(5)

  const jaren = pensioenLeeftijd - leeftijd
  const doelVermogen = Math.round(gewenst * 12 * 25)
  const toekomstigeWaardePot = Math.round(huidigPot * Math.pow(1 + rendement / 100, jaren))
  const tekort = Math.max(0, doelVermogen - toekomstigeWaardePot)

  const maandRente = rendement / 100 / 12
  const maandNodig = jaren > 0 && tekort > 0
    ? Math.round(tekort * maandRente / (Math.pow(1 + maandRente, jaren * 12) - 1))
    : 0

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Huidige leeftijd</label>
          <div className="flex items-center gap-2">
            <input type="range" min="18" max="65" step="1" value={leeftijd} onChange={e => setLeeftijd(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">{leeftijd} jaar</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Pensioenleeftijd</label>
          <div className="flex items-center gap-2">
            <input type="range" min={leeftijd + 1} max="75" step="1" value={pensioenLeeftijd} onChange={e => setPensioenLeeftijd(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">{pensioenLeeftijd} jaar</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Gewenst maandinkomen</label>
          <div className="flex items-center gap-2">
            <input type="range" min="500" max="8000" step="100" value={gewenst} onChange={e => setGewenst(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">€{gewenst.toLocaleString('nl')}</span>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">Huidig pensioenvermogen</label>
          <div className="flex items-center gap-2">
            <input type="range" min="0" max="500000" step="5000" value={huidigPot} onChange={e => setHuidigPot(+e.target.value)} className="flex-1 accent-brand-500" />
            <span className="text-sm font-medium w-20 text-right">€{huidigPot.toLocaleString('nl')}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-brand-500 rounded-xl p-4 text-center">
          <p className="text-xs text-white/70 mb-1">Doelvermogen</p>
          <p className="font-serif text-lg font-normal text-white">€{doelVermogen.toLocaleString('nl')}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Tekort</p>
          <p className="font-serif text-lg font-normal text-gray-700">€{tekort.toLocaleString('nl')}</p>
        </div>
        <div className="bg-brand-50 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-400 mb-1">Inleg nodig/mnd</p>
          <p className="font-serif text-lg font-normal text-brand-500">€{maandNodig.toLocaleString('nl')}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">Doelvermogen = 25x je jaarlijkse uitgaven (4%-regel). Exclusief AOW en werkgeverspensioen.</p>
    </div>
  )
}

// ── MAIN TOOLS PAGE ──
const tools = [
  { id: 'compound', icon: '📈', title: 'Compound interest calculator', desc: 'Bereken wat jouw maandelijkse inleg oplevert na 10, 20 of 30 jaar.', component: <CompoundCalc /> },
  { id: 'vrijheid', icon: '🎯', title: 'Hoeveel heb ik nodig?', desc: 'Bereken hoeveel vermogen je nodig hebt om financieel vrij te zijn.', component: <VrijheidCalc /> },
  { id: 'broker', icon: '⚖️', title: 'Broker vergelijker', desc: 'Vergelijk DEGIRO, Trading 212, Saxo en andere brokers.', component: <BrokerVergelijker /> },
  { id: 'schulden', icon: '💳', title: 'Schulden calculator', desc: 'Bereken hoe lang het duurt om je schulden af te lossen.', component: <SchuldenCalc /> },
  { id: 'budget', icon: '📊', title: 'Budget planner', desc: 'Vul je inkomsten en uitgaven in en zie direct waar je kunt besparen.', component: <BudgetPlanner /> },
  { id: 'pensioen', icon: '🏦', title: 'Pensioen calculator', desc: 'Bereken hoeveel je maandelijks moet inleggen voor een goed pensioen.', component: <PensioenCalc /> },
]

export default function Tools() {
  const [openTool, setOpenTool] = useState<string | null>(null)

  return (
    <>
      <div className="bg-gray-50 border-b border-gray-200 py-14 px-6 text-center">
        <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-4 py-1.5 rounded-full mb-4">Tools</span>
        <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
          Gratis financiële <em className="text-brand-500 not-italic">calculators</em>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
          Bereken je vermogensgroei, schuldenvrij datum, pensioen en meer — in seconden.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-4">
        {tools.map(tool => (
          <div key={tool.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenTool(openTool === tool.id ? null : tool.id)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{tool.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-sm">{tool.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{tool.desc}</p>
              </div>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${openTool === tool.id ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openTool === tool.id && (
              <div className="px-5 pb-6 border-t border-gray-100 pt-5">
                {tool.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
