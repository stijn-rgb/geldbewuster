import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

function Calculator() {
  const [stap, setStap] = useState(1)
  const [situatie, setSituatie] = useState('')
  const [wonen, setWonen] = useState('')
  const [partner, setPartner] = useState<boolean | null>(null)
  const [huur, setHuur] = useState('')
  const [energie, setEnergie] = useState('')
  const [verzekeringen, setVerzekeringen] = useState('')
  const [boodschappen, setBoodschappen] = useState('')
  const [abonnementen, setAbonnementen] = useState('')
  const [overig, setOverig] = useState('')
  const [auto, setAuto] = useState(false)
  const [huisdier, setHuisdier] = useState(false)
  const [kinderen, setKinderen] = useState(false)

  const vasteLasten = [Number(huur), Number(energie), Number(verzekeringen), Number(boodschappen), Number(abonnementen), Number(overig)].reduce((a, b) => a + b, 0)
  const extra = (auto ? 150 : 0) + (huisdier ? 100 : 0) + (kinderen ? 300 : 0)
  const totaal = vasteLasten + extra

  // Maanden op basis van situatie + woonsituatie
  let maanden = 3
  if (situatie === 'zzp') maanden = 6
  else if (situatie === 'flex') maanden = 4
  else if (situatie === 'vast') maanden = 3
  if (wonen === 'huur') maanden = Math.min(maanden + 1, 6)
  if (!partner) maanden = Math.min(maanden + 1, 6)

  const minimaal = Math.round(totaal * 3)
  const aanbevolen = Math.round(totaal * maanden)
  const ideaal = Math.round(totaal * 6)

  const reset = () => { setStap(1); setSituatie(''); setWonen(''); setPartner(null); setHuur(''); setEnergie(''); setVerzekeringen(''); setBoodschappen(''); setAbonnementen(''); setOverig(''); setAuto(false); setHuisdier(false); setKinderen(false) }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-brand-500 p-6">
        <p className="text-white/70 text-xs mb-1 uppercase tracking-wide font-medium">Stap {stap} van 3</p>
        <div className="flex gap-1.5 mb-3">
          {[1,2,3].map(s => <div key={s} className={`h-1 flex-1 rounded-full transition-all ${stap >= s ? 'bg-white' : 'bg-white/30'}`} />)}
        </div>
        <h2 className="font-serif text-xl font-normal text-white">
          {stap === 1 ? 'Jouw situatie' : stap === 2 ? 'Vaste lasten' : 'Jouw buffer'}
        </h2>
      </div>

      <div className="p-6">
        {stap === 1 && (
          <div className="space-y-5">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Werksituatie</p>
              <div className="space-y-2">
                {[
                  { id: 'vast', label: 'Vast dienstverband', sub: 'Stabiel inkomen, lager risico' },
                  { id: 'flex', label: 'Tijdelijk of flexibel contract', sub: 'Meer onzekerheid, hogere buffer verstandig' },
                  { id: 'zzp', label: 'ZZP of ondernemer', sub: 'Variabel inkomen, maximale buffer aanbevolen' },
                ].map(opt => (
                  <button key={opt.id} onClick={() => setSituatie(opt.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${situatie === opt.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{opt.label}</p>
                      <p className="text-xs text-gray-400">{opt.sub}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${situatie === opt.id ? 'border-brand-500 bg-brand-500' : 'border-gray-300'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Woonsituatie</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'koop', label: 'Koopwoning', sub: 'Hypotheek' },
                  { id: 'huur', label: 'Huurwoning', sub: 'Geen eigen vermogen in stenen' },
                  { id: 'ouders', label: 'Bij ouders', sub: 'Lage vaste lasten' },
                  { id: 'anders', label: 'Anders', sub: '' },
                ].map(opt => (
                  <button key={opt.id} onClick={() => setWonen(opt.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${wonen === opt.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <p className="text-sm font-medium text-gray-900">{opt.label}</p>
                    {opt.sub && <p className="text-xs text-gray-400">{opt.sub}</p>}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Heb je een (financiële) partner?</p>
              <div className="grid grid-cols-2 gap-2">
                {[{ label: 'Ja, samen', value: true, sub: 'Gedeeld inkomen = minder risico' }, { label: 'Nee, alleen', value: false, sub: 'Enig inkomen = meer buffer nodig' }].map(opt => (
                  <button key={String(opt.value)} onClick={() => setPartner(opt.value)}
                    className={`p-3 rounded-xl border text-left transition-all ${partner === opt.value ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <p className="text-sm font-medium text-gray-900">{opt.label}</p>
                    <p className="text-xs text-gray-400">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Heb je dit?</p>
              <div className="flex gap-2">
                {[{ id: 'auto', label: '🚗 Auto', state: auto, set: setAuto }, { id: 'huisdier', label: '🐾 Huisdier', state: huisdier, set: setHuisdier }, { id: 'kinderen', label: '👶 Kinderen', state: kinderen, set: setKinderen }].map(opt => (
                  <button key={opt.id} onClick={() => opt.set(!opt.state)}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-medium transition-all ${opt.state ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-gray-500'}`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button disabled={!situatie || !wonen || partner === null} onClick={() => setStap(2)}
              className="w-full bg-brand-500 disabled:opacity-40 text-white font-medium text-sm py-3 rounded-xl hover:bg-brand-700 transition-colors">
              Volgende: vaste lasten →
            </button>
          </div>
        )}

        {stap === 2 && (
          <div>
            <p className="text-xs text-gray-400 mb-4">Vul je maandelijkse vaste lasten in. Schat gerust als je het niet precies weet.</p>
            <div className="space-y-3 mb-5">
              {[
                { label: 'Huur of hypotheek', value: huur, set: setHuur, placeholder: wonen === 'ouders' ? '400' : '1.100' },
                { label: 'Energie', value: energie, set: setEnergie, placeholder: '130' },
                { label: 'Verzekeringen', value: verzekeringen, set: setVerzekeringen, placeholder: '200' },
                { label: 'Boodschappen', value: boodschappen, set: setBoodschappen, placeholder: partner ? '600' : '350' },
                { label: 'Abonnementen & telefoon', value: abonnementen, set: setAbonnementen, placeholder: '80' },
                { label: 'Overige vaste lasten', value: overig, set: setOverig, placeholder: '150' },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-3">
                  <label className="text-xs text-gray-500 w-44 flex-shrink-0">{f.label}</label>
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                    <input type="number" value={f.value} onChange={e => f.set(e.target.value)} placeholder={f.placeholder}
                      className="w-full pl-7 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500" />
                  </div>
                </div>
              ))}
            </div>

            {totaal > 0 && (
              <div className="bg-gray-50 rounded-xl p-3 mb-4 flex justify-between">
                <span className="text-xs text-gray-500">Totaal per maand</span>
                <span className="text-sm font-medium text-gray-900">€{totaal.toLocaleString('nl-NL')}</span>
              </div>
            )}

            <div className="flex gap-2">
              <button onClick={() => setStap(1)} className="flex-1 bg-gray-100 text-gray-600 font-medium text-sm py-3 rounded-xl">← Terug</button>
              <button disabled={vasteLasten === 0} onClick={() => setStap(3)} className="flex-1 bg-brand-500 disabled:opacity-40 text-white font-medium text-sm py-3 rounded-xl hover:bg-brand-700 transition-colors">Bereken →</button>
            </div>
          </div>
        )}

        {stap === 3 && (
          <div>
            <div className="bg-brand-500 rounded-2xl p-5 text-white mb-5">
              <p className="text-xs opacity-70 mb-1">Jouw aanbevolen noodfonds</p>
              <p className="font-serif text-4xl font-normal mb-1">€{aanbevolen.toLocaleString('nl-NL')}</p>
              <p className="text-xs opacity-60">{maanden} maanden aan vaste lasten · €{totaal.toLocaleString('nl-NL')}/mnd</p>
            </div>

            <div className="space-y-2.5 mb-5">
              {[
                { label: 'Minimaal (3 mnd)', amount: minimaal, highlight: false, sub: 'Absolute ondergrens' },
                { label: `Aanbevolen (${maanden} mnd)`, amount: aanbevolen, highlight: true, sub: `Op basis van jouw situatie` },
                { label: 'Ideaal (6 mnd)', amount: ideaal, highlight: false, sub: 'Maximale zekerheid' },
              ].map(item => (
                <div key={item.label} className={`flex justify-between items-center p-3.5 rounded-xl ${item.highlight ? 'bg-brand-50 border border-brand-100' : 'bg-gray-50'}`}>
                  <div>
                    <p className={`text-xs font-medium ${item.highlight ? 'text-brand-700' : 'text-gray-700'}`}>{item.label}</p>
                    <p className="text-xs text-gray-400">{item.sub}</p>
                  </div>
                  <p className={`font-medium text-sm ${item.highlight ? 'text-brand-700' : 'text-gray-900'}`}>€{item.amount.toLocaleString('nl-NL')}</p>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 mb-4">
              <p className="text-xs font-medium text-sky-700 mb-1">Waarom {maanden} maanden voor jou?</p>
              <ul className="space-y-1">
                {situatie === 'zzp' && <li className="text-xs text-gray-500">✓ ZZP: variabel inkomen vereist grotere buffer</li>}
                {situatie === 'flex' && <li className="text-xs text-gray-500">✓ Flex contract: hogere kans op inkomensstop</li>}
                {wonen === 'huur' && <li className="text-xs text-gray-500">✓ Huurwoning: geen eigen vermogen als vangnet</li>}
                {!partner && <li className="text-xs text-gray-500">✓ Alleen: geen tweede inkomen als backup</li>}
                {partner && situatie === 'vast' && <li className="text-xs text-gray-500">✓ Partner + vast contract: stabiele situatie</li>}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
              <p className="text-xs font-medium text-amber-700 mb-1">💡 Zet je buffer apart</p>
              <p className="text-xs text-gray-500 leading-relaxed">Gebruik een aparte vrij opneembare spaarrekening. Bunq (2%) of Raisin bieden goede rente zonder dat je de buffer vastzet.</p>
            </div>

            <button onClick={reset} className="w-full bg-gray-100 text-gray-600 font-medium text-sm py-3 rounded-xl hover:bg-gray-200 transition-colors">Opnieuw berekenen</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function BufferBerekenaarPagina() {
  return (
    <>
      <SEO
        title="Buffer berekenaar 2026: hoeveel noodfonds heb jij nodig?"
        description="Bereken in 3 stappen hoeveel noodfonds jij nodig hebt op basis van je werksituatie, woonsituatie, partner en vaste lasten. Gratis tool van geldbewuster.nl."
        canonical="/tools/buffer-berekenaar"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Buffer berekenaar</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Sparen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-3">
            Buffer berekenaar: hoeveel noodfonds heb jij nodig?
          </h1>
          <p className="text-gray-500 leading-relaxed">Een noodfonds is de basis van elk financieel plan. Maar hoeveel heb jij precies nodig? Dat hangt af van je werk, woonsituatie en vaste lasten. Bereken het in 3 stappen.</p>
        </div>

        <div className="mb-8">
          <Calculator />
        </div>

        {/* UITLEG */}
        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is een noodfonds?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een noodfonds is een buffer aan spaargeld die je klaar hebt staan voor onverwachte uitgaven. Denk aan een kapotte wasmachine, een onverwachte rekening of een periode zonder inkomen. Het idee is simpel: je hebt altijd genoeg geld achter de hand zodat je niet hoeft te lenen of je langetermijn spaargeld hoeft aan te spreken.</p>
            <p className="text-gray-600 leading-relaxed">Het noodfonds staat altijd op een <Link to="/sparen/beste-spaarrekening" className="text-brand-500 hover:underline">vrij opneembare spaarrekening</Link>. Nooit in een deposito of beleggingsrekening. Je moet er altijd direct bij kunnen.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoeveel maanden vaste lasten?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">De vuistregel is 3 tot 6 maanden aan vaste lasten. Maar het exacte bedrag hangt af van jouw situatie:</p>
            <div className="space-y-3">
              {[
                { situatie: 'Vast dienstverband + partner', maanden: '3 maanden', kleur: 'bg-green-50 border-green-100', uitleg: 'Twee inkomens en stabiel werk geeft de meeste zekerheid.' },
                { situatie: 'Vast dienstverband, alleen', maanden: '4 maanden', kleur: 'bg-yellow-50 border-yellow-100', uitleg: 'Geen tweede inkomen als back-up bij ontslag of ziekte.' },
                { situatie: 'Flexibel contract of huurwoning', maanden: '4-5 maanden', kleur: 'bg-orange-50 border-orange-100', uitleg: 'Meer onzekerheid vereist een grotere buffer.' },
                { situatie: 'ZZP of ondernemer', maanden: '6 maanden', kleur: 'bg-red-50 border-red-100', uitleg: 'Variabel inkomen en geen WW bij inkomensverlies.' },
              ].map(item => (
                <div key={item.situatie} className={`border rounded-xl p-4 ${item.kleur}`}>
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium text-sm text-gray-900">{item.situatie}</p>
                    <span className="text-xs font-medium text-gray-600 bg-white px-2 py-0.5 rounded-full border border-gray-200">{item.maanden}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Belangrijke begrippen</h2>
            <div className="space-y-3">
              {[
                { term: 'Noodfonds', uitleg: 'Een buffer aan liquide spaargeld voor onverwachte uitgaven. Altijd vrij opneembaar, nooit belegd.' },
                { term: 'Vaste lasten', uitleg: 'Maandelijkse kosten die je altijd hebt, ongeacht je inkomen. Denk aan huur, energie, verzekeringen en boodschappen.' },
                { term: 'Liquiditeit', uitleg: 'Hoe snel je geld beschikbaar is. Een noodfonds moet 100% liquide zijn, direct beschikbaar zonder boete.' },
                { term: 'Buffer vs spaargeld', uitleg: 'Je noodfonds is anders dan je overige spaargeld. Het noodfonds is er puur voor noodgevallen en wordt niet aangesproken voor andere doelen.' },
              ].map(item => (
                <div key={item.term} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-1 bg-brand-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">{item.term}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Waar zet je je noodfonds?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Je noodfonds staat altijd op een vrij opneembare spaarrekening. Nooit in een deposito of beleggingsrekening. De beste opties voor een noodfonds in Nederland:</p>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="space-y-3">
                {[
                  { naam: 'Bunq', rente: '2,01%', toelichting: 'Meerdere spaarpotjes, direct beschikbaar' },
                  { naam: 'ING Oranje Spaarrekening', rente: '1,50%', toelichting: 'Betrouwbaar, koppelbaar aan betaalrekening' },
                  { naam: 'Raisin (vrij opneembaar)', rente: 'tot 2,5%', toelichting: 'Hogere rente, wel buitenlandse bank' },
                ].map(item => (
                  <div key={item.naam} className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.naam}</p>
                      <p className="text-xs text-gray-400">{item.toelichting}</p>
                    </div>
                    <span className="text-sm font-medium text-brand-500">{item.rente}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">Bekijk ons volledige overzicht van de <Link to="/sparen/beste-spaarrekening" className="text-brand-500 hover:underline">beste spaarrekeningen 2026</Link>.</p>
          </section>
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="font-medium text-sm text-gray-700 mb-3">Gerelateerde tools</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: '/tools/budget-planner', label: 'Budget planner', sub: 'Breng je vaste lasten in kaart' },
              { to: '/tools/jaarruimte-calculator', label: 'Jaarruimte calculator', sub: 'Bereken je pensioenruimte' },
              { to: '/tools/schulden-calculator', label: 'Schulden calculator', sub: 'Wanneer ben je schuldenvrij?' },
              { to: '/tools/compound-calculator', label: 'Compound calculator', sub: 'Wat levert beleggen op?' },
            ].map(tool => (
              <Link key={tool.to} to={tool.to} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors mb-1">{tool.label}</p>
                <p className="text-xs text-gray-400">{tool.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
