import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

function Calculator() {
  const [inkomen, setInkomen] = useState('')
  const [heeftPensioen, setHeeftPensioen] = useState<boolean | null>(null)
  const [factorA, setFactorA] = useState('')
  const [berekend, setBerekend] = useState(false)

  const AOW_FRANCHISE = 19172
  const MAX_INKOMEN = 137800
  const MAX_JAARRUIMTE = 35589
  const MAX_RESERVERING = 42753

  const bruto = Math.min(Number(inkomen), MAX_INKOMEN)
  const premiegrondslag = Math.max(0, bruto - AOW_FRANCHISE)
  const ruimte = premiegrondslag * 0.30
  const factorABedrag = Number(factorA || 0) * 6.27
  const jaarruimte = Math.min(Math.max(0, ruimte - factorABedrag), MAX_JAARRUIMTE)
  const belastingTerug = bruto > 75000 ? Math.round(jaarruimte * 0.495) : Math.round(jaarruimte * 0.3697)
  const maandelijks = Math.round(jaarruimte / 12)

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-[#1A1A18] p-6">
        <h2 className="font-serif text-2xl font-normal text-white mb-1">Jaarruimte calculator 2026</h2>
        <p className="text-white/50 text-sm">Hoeveel mag jij fiscaal voordelig inleggen voor pensioen?</p>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <label className="text-xs font-medium text-gray-700 mb-1.5 block">Bruto jaarinkomen 2025</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
            <input type="number" value={inkomen} onChange={e => { setInkomen(e.target.value); setBerekend(false) }} placeholder="60.000"
              className="w-full pl-7 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
          </div>
          <p className="text-xs text-gray-400 mt-1">Vind je op je jaaropgave 2025 of belastingaangifte</p>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-700 mb-1.5 block">Bouwde je pensioen op via een werkgever in 2025?</label>
          <div className="grid grid-cols-2 gap-2">
            {[{ label: 'Nee', value: false, sub: 'ZZP of geen pensioenregeling' }, { label: 'Ja', value: true, sub: 'Vul je Factor A in' }].map(opt => (
              <button key={String(opt.value)} onClick={() => { setHeeftPensioen(opt.value); if (!opt.value) setFactorA('0'); setBerekend(false) }}
                className={`p-3 rounded-xl border text-left transition-all ${heeftPensioen === opt.value ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <p className="text-sm font-medium text-gray-900">{opt.label}</p>
                <p className="text-xs text-gray-400">{opt.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {heeftPensioen === true && (
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1.5 block">Factor A (van je UPO)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={factorA} onChange={e => { setFactorA(e.target.value); setBerekend(false) }} placeholder="1.500"
                className="w-full pl-7 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
            </div>
            <p className="text-xs text-gray-400 mt-1">Staat op je Uniform Pensioenoverzicht (UPO) van je pensioenfonds</p>
          </div>
        )}

        <button disabled={!inkomen || heeftPensioen === null} onClick={() => setBerekend(true)}
          className="w-full bg-[#1A1A18] disabled:opacity-40 text-white font-medium text-sm py-3 rounded-xl hover:bg-gray-800 transition-colors">
          Bereken mijn jaarruimte
        </button>

        {berekend && (
          jaarruimte > 0 ? (
            <div>
              <div className="bg-brand-500 rounded-2xl p-5 text-white mb-4">
                <p className="text-xs opacity-70 mb-1">Jouw jaarruimte 2026</p>
                <p className="font-serif text-4xl font-normal mb-1">€{jaarruimte.toLocaleString('nl-NL')}</p>
                <p className="text-xs opacity-60">Fiscaal voordelig in te leggen voor pensioen</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Per maand', value: `€${maandelijks.toLocaleString('nl-NL')}`, highlight: false },
                  { label: 'Belasting terug (schatting)', value: `€${belastingTerug.toLocaleString('nl-NL')}`, highlight: true },
                  { label: 'Max reserveringsruimte', value: `€${MAX_RESERVERING.toLocaleString('nl-NL')}`, highlight: false },
                  { label: 'Max jaarruimte 2026', value: `€${MAX_JAARRUIMTE.toLocaleString('nl-NL')}`, highlight: false },
                ].map(item => (
                  <div key={item.label} className={`rounded-xl p-3 ${item.highlight ? 'bg-green-50 border border-green-100' : 'bg-gray-50'}`}>
                    <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                    <p className={`font-medium text-sm ${item.highlight ? 'text-green-700' : 'text-gray-900'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <p className="text-xs font-medium text-gray-700 mb-2">Berekening</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div className="flex justify-between"><span>Bruto inkomen</span><span>€{bruto.toLocaleString('nl-NL')}</span></div>
                  <div className="flex justify-between"><span>Min AOW-franchise</span><span>-€{AOW_FRANCHISE.toLocaleString('nl-NL')}</span></div>
                  <div className="flex justify-between"><span>Premiegrondslag × 30%</span><span>€{Math.round(ruimte).toLocaleString('nl-NL')}</span></div>
                  {heeftPensioen && factorA && <div className="flex justify-between"><span>Min Factor A × 6,27</span><span>-€{Math.round(factorABedrag).toLocaleString('nl-NL')}</span></div>}
                  <div className="flex justify-between font-medium text-gray-700 border-t border-gray-200 pt-1 mt-1"><span>Jaarruimte</span><span>€{jaarruimte.toLocaleString('nl-NL')}</span></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <p className="font-medium text-sm text-gray-700 mb-2">Geen jaarruimte</p>
              <p className="text-xs text-gray-500">Op basis van je inkomen en pensioenopbouw heb je geen jaarruimte dit jaar. Mogelijk heb je wel reserveringsruimte van eerdere jaren.</p>
            </div>
          )
        )}
        <p className="text-xs text-gray-400">Indicatieve berekening. Controleer je definitieve jaarruimte via de Belastingdienst.</p>
      </div>
    </div>
  )
}

export default function JaarruimteCalculatorPagina() {
  return (
    <>
      <SEO
        title="Jaarruimte calculator 2026: bereken je pensioenruimte"
        description="Bereken hoeveel jaarruimte jij hebt in 2026 en hoeveel je fiscaal voordelig mag inleggen voor pensioen. Inclusief uitleg over Factor A, AOW-franchise en reserveringsruimte."
        canonical="/tools/jaarruimte-calculator"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Jaarruimte calculator</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Pensioen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-3">
            Jaarruimte calculator 2026: hoeveel mag jij inleggen?
          </h1>
          <p className="text-gray-500 leading-relaxed">Jaarruimte is het bedrag dat je fiscaal voordelig mag inleggen voor extra pensioen. In 2026 kun je tot 49,5% van je inleg terugkrijgen via de belasting. Bereken in een minuut wat jouw ruimte is.</p>
        </div>

        <div className="mb-10">
          <Calculator />
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is jaarruimte?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Jaarruimte is het maximale bedrag dat je per jaar fiscaal aftrekbaar mag storten op een lijfrenterekening of -verzekering. Dit geldt alleen als je een pensioentekort hebt, als je dus te weinig pensioen opbouwt via je werkgever.</p>
            <p className="text-gray-600 leading-relaxed">De inleg binnen jouw jaarruimte is aftrekbaar van je belastbaar inkomen. Afhankelijk van je inkomen krijg je 36,97% of 49,5% terug van wat je inlegt. Dat is een aanzienlijk belastingvoordeel dat veel mensen laten liggen.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt de berekening?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">De formule voor jaarruimte 2026 is:</p>
            <div className="bg-gray-50 rounded-xl p-5 font-mono text-sm text-gray-700 mb-4">
              Jaarruimte = 30% × (inkomen − €19.172) − 6,27 × Factor A
            </div>
            <p className="text-gray-600 leading-relaxed">Je berekent de jaarruimte voor 2026 op basis van je inkomen van 2025. Het maximale inkomen waarover je jaarruimte berekent is €137.800. De maximale jaarruimte in 2026 is €35.589.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Belangrijke begrippen</h2>
            <div className="space-y-3">
              {[
                { term: 'AOW-franchise (€19.172)', uitleg: 'Het deel van je inkomen waarover je geen jaarruimte mag berekenen. Dit is omdat je over dit deel later AOW ontvangt.' },
                { term: 'Factor A', uitleg: 'De jaarlijkse aangroei van je pensioen via je werkgever. Staat op je Uniform Pensioenoverzicht (UPO). Hoe hoger je Factor A, hoe minder jaarruimte je hebt.' },
                { term: 'Premiegrondslag', uitleg: 'Je inkomen minus de AOW-franchise. Over dit bedrag bereken je 30% jaarruimte.' },
                { term: 'Reserveringsruimte', uitleg: 'Ongebruikte jaarruimte van de afgelopen 10 jaar. Je mag dit alsnog inleggen, maximaal €42.753 in 2026.' },
                { term: 'Lijfrente', uitleg: 'Het pensioenproduct waar je je jaarruimte in kunt inleggen. Beschikbaar via aanbieders zoals Brand New Day, Bright Pensioen en ASR.' },
                { term: 'UPO (Uniform Pensioenoverzicht)', uitleg: 'Jaarlijks overzicht van je pensioenfonds. Hierop staat je Factor A. Je kunt ook inloggen op mijnpensioenoverzicht.nl.' },
              ].map(item => (
                <div key={item.term} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-1 bg-[#1A1A18] rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">{item.term}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Voor wie is jaarruimte interessant?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Wel interessant</p>
                <ul className="space-y-2">
                  {["ZZP'ers zonder pensioenopbouw", 'Werknemers zonder of met beperkte pensioenregeling', 'Mensen met hoog inkomen (meer belastingvoordeel)', 'Wie de afgelopen jaren geen jaarruimte heeft benut'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-medium text-sm text-gray-700 mb-3">Minder relevant</p>
                <ul className="space-y-2">
                  {['Werknemers met een volledig pensioen via werkgever', 'Mensen met inkomen onder €19.172', 'Wie het geld de komende jaren nodig heeft'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="font-medium text-sm text-gray-700 mb-3">Gerelateerde tools</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: '/tools/buffer-berekenaar', label: 'Buffer berekenaar', sub: 'Hoeveel noodfonds heb jij nodig?' },
              { to: '/tools/pensioen-calculator', label: 'Pensioen calculator', sub: 'Wanneer kun je met pensioen?' },
              { to: '/tools/compound-calculator', label: 'Compound calculator', sub: 'Wat levert beleggen op?' },
              { to: '/tools/vrijheid-calculator', label: 'Vrijheid calculator', sub: 'Financieel vrij worden' },
            ].map(tool => (
              <Link key={tool.to} to={tool.to} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors mb-1">{tool.label}</p>
                <p className="text-xs text-gray-400">{tool.sub}</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit is een indicatieve berekening. Raadpleeg de Belastingdienst of een financieel adviseur voor een definitieve berekening van je jaarruimte.</p>
      </div>
    </>
  )
}
