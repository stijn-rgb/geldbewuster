import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

function Calculator() {
  const [partner, setPartner] = useState<boolean | null>(null)
  const [inkomen, setInkomen] = useState('')
  const [partnerInkomen, setPartnerInkomen] = useState('')
  const [vermogen, setVermogen] = useState('')
  const [partnerVermogen, setPartnerVermogen] = useState('')
  const [leeftijd, setLeeftijd] = useState('')
  const [berekend, setBerekend] = useState(false)

  const MAX_ALLEENSTAAND = 129
  const MAX_PARTNER = 258
  const GRENS_ALLEENSTAAND = 40857
  const GRENS_PARTNER = 51142
  const DREMPEL = 28406
  const VERMOGEN_GRENS_ALLEENSTAAND = 141896
  const VERMOGEN_GRENS_PARTNER = 179429

  const totaalInkomen = Number(inkomen) + (partner ? Number(partnerInkomen) : 0)
  const totaalVermogen = Number(vermogen) + (partner ? Number(partnerVermogen) : 0)
  const grens = partner ? GRENS_PARTNER : GRENS_ALLEENSTAAND
  const maxToeslag = partner ? MAX_PARTNER : MAX_ALLEENSTAAND
  const vermogenGrens = partner ? VERMOGEN_GRENS_PARTNER : VERMOGEN_GRENS_ALLEENSTAAND

  const teJong = leeftijd !== '' && Number(leeftijd) < 18
  const teVeelVermogen = vermogen !== '' && totaalVermogen > vermogenGrens
  const teVeelInkomen = inkomen !== '' && totaalInkomen >= grens
  const geenRecht = teJong || teVeelVermogen || teVeelInkomen

  const berekenToeslag = () => {
    if (geenRecht) return 0
    if (totaalInkomen <= DREMPEL) return maxToeslag
    const afbouw = ((totaalInkomen - DREMPEL) / (grens - DREMPEL)) * maxToeslag
    return Math.max(0, Math.round(maxToeslag - afbouw))
  }

  const maandToeslag = berekenToeslag()
  const jaarToeslag = maandToeslag * 12

  const reset = () => {
    setPartner(null); setInkomen(''); setPartnerInkomen('')
    setVermogen(''); setPartnerVermogen(''); setLeeftijd(''); setBerekend(false)
  }

  const formatEuro = (n: number) => '€' + n.toLocaleString('nl-NL')

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="bg-brand-500 p-6">
        <h2 className="font-serif text-2xl font-normal text-white mb-1">Zorgtoeslag berekenaar 2026</h2>
        <p className="text-white/70 text-sm">Bereken hoeveel zorgtoeslag jij dit jaar kunt ontvangen</p>
      </div>

      <div className="p-6 space-y-5">

        <div>
          <label className="text-xs font-medium text-gray-700 mb-1.5 block">Jouw leeftijd</label>
          <input type="number" value={leeftijd} onChange={e => { setLeeftijd(e.target.value); setBerekend(false) }}
            placeholder="30"
            className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
          <p className="text-xs text-gray-400 mt-1">Je moet 18 jaar of ouder zijn voor zorgtoeslag</p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Heb je een toeslagpartner?</p>
          <div className="grid grid-cols-2 gap-2">
            {([
              { label: 'Nee, alleenstaand', value: false, sub: 'Max. €129/mnd' },
              { label: 'Ja, met partner', value: true, sub: 'Max. €258/mnd' },
            ] as { label: string; value: boolean; sub: string }[]).map(opt => (
              <button key={String(opt.value)} onClick={() => { setPartner(opt.value); setBerekend(false) }}
                className={['p-3.5 rounded-xl border text-left transition-all', partner === opt.value ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-gray-300'].join(' ')}>
                <p className="text-sm font-medium text-gray-900">{opt.label}</p>
                <p className="text-xs text-gray-400">{opt.sub}</p>
              </button>
            ))}
          </div>
        </div>

        {partner !== null && (
          <>
            <div>
              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Jouw bruto jaarinkomen</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                <input type="number" value={inkomen} onChange={e => { setInkomen(e.target.value); setBerekend(false) }}
                  placeholder="28.000"
                  className="w-full pl-7 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
              </div>
              <p className="text-xs text-gray-400 mt-1">Inclusief vakantiegeld. Staat op je jaaropgave.</p>
            </div>

            {partner === true && (
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Bruto jaarinkomen partner</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                  <input type="number" value={partnerInkomen} onChange={e => { setPartnerInkomen(e.target.value); setBerekend(false) }}
                    placeholder="24.000"
                    className="w-full pl-7 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Jouw vermogen (spaargeld, beleggingen etc.)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                <input type="number" value={vermogen} onChange={e => { setVermogen(e.target.value); setBerekend(false) }}
                  placeholder="10.000"
                  className="w-full pl-7 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
              </div>
              <p className="text-xs text-gray-400 mt-1">Grens: {formatEuro(vermogenGrens)}. Eigen woning telt niet mee.</p>
            </div>

            {partner === true && (
              <div>
                <label className="text-xs font-medium text-gray-700 mb-1.5 block">Vermogen partner</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
                  <input type="number" value={partnerVermogen} onChange={e => { setPartnerVermogen(e.target.value); setBerekend(false) }}
                    placeholder="5.000"
                    className="w-full pl-7 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500" />
                </div>
              </div>
            )}
          </>
        )}

        <button
          disabled={partner === null || !inkomen || !leeftijd || (partner === true && !partnerInkomen)}
          onClick={() => setBerekend(true)}
          className="w-full bg-brand-500 disabled:opacity-40 text-white font-medium text-sm py-3 rounded-xl hover:bg-brand-700 transition-colors">
          Bereken mijn zorgtoeslag
        </button>

        {berekend && (
          <div>
            {teJong ? (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
                <p className="font-medium text-sm text-red-700 mb-2">Geen recht op zorgtoeslag</p>
                <p className="text-xs text-gray-500">Je moet 18 jaar of ouder zijn voor zorgtoeslag.</p>
              </div>
            ) : teVeelVermogen ? (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
                <p className="font-medium text-sm text-red-700 mb-2">Geen recht op zorgtoeslag</p>
                <p className="text-xs text-gray-500">Je vermogen van {formatEuro(totaalVermogen)} overschrijdt de vermogensgrens van {formatEuro(vermogenGrens)}.</p>
              </div>
            ) : teVeelInkomen ? (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-5 text-center">
                <p className="font-medium text-sm text-red-700 mb-2">Geen recht op zorgtoeslag</p>
                <p className="text-xs text-gray-500">Je inkomen van {formatEuro(totaalInkomen)} ligt boven de inkomensgrens van {formatEuro(grens)}.</p>
              </div>
            ) : (
              <>
                <div className="bg-brand-500 rounded-2xl p-5 text-white mb-4">
                  <p className="text-xs opacity-70 mb-1">Jouw zorgtoeslag 2026</p>
                  <p className="font-serif text-4xl font-normal mb-1">€{maandToeslag} <span className="text-xl opacity-70">per maand</span></p>
                  <p className="text-xs opacity-60">{formatEuro(jaarToeslag)} per jaar</p>
                </div>

                <div className="space-y-2 mb-4">
                  {[
                    { label: 'Inkomen', waarde: formatEuro(totaalInkomen), ok: true },
                    { label: 'Vermogen', waarde: vermogen ? formatEuro(totaalVermogen) : 'Niet ingevuld', ok: true },
                    { label: 'Leeftijd', waarde: leeftijd + ' jaar', ok: true },
                    { label: 'Maandelijkse toeslag', waarde: '€' + maandToeslag, ok: true },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl text-xs">
                      <span className="text-gray-500">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">{item.waarde}</span>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-2">
                  <p className="text-xs font-medium text-amber-700 mb-1">Nog geen zorgtoeslag aangevraagd?</p>
                  <p className="text-xs text-gray-500 leading-relaxed">Vraag het aan via <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Mijn Belastingdienst</a> met je DigiD. Aanvragen voor 1 september zorgt dat je het hele jaar ontvangt.</p>
                </div>
              </>
            )}

            <button onClick={reset} className="w-full bg-gray-100 text-gray-600 font-medium text-sm py-3 rounded-xl hover:bg-gray-200 transition-colors mt-3">
              Opnieuw berekenen
            </button>

            <p className="text-xs text-gray-400 mt-3 leading-relaxed">Indicatieve berekening op basis van Belastingdienst cijfers 2026. Er kunnen geen rechten aan worden ontleend. Controleer je definitieve recht via <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">belastingdienst.nl</a>.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ZorgstoeslagCalculatorPagina() {
  return (
    <>
      <SEO
        title="Zorgtoeslag berekenaar 2026: hoeveel krijg jij?"
        description="Bereken in één minuut hoeveel zorgtoeslag jij in 2026 ontvangt. Inclusief actuele inkomensgrenzen, vermogensgrenzen en uitleg over aanvragen."
        canonical="/tools/zorgtoeslag-berekenaar"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Zorgtoeslag berekenaar</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <span className="inline-block bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Verzekeringen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-3">
            Zorgtoeslag berekenaar 2026
          </h1>
          <p className="text-gray-500 leading-relaxed">Bereken in één minuut hoeveel zorgtoeslag jij dit jaar kunt ontvangen. Veel mensen laten dit geld onnodig liggen. Controleer of jij er recht op hebt.</p>
        </div>

        <div className="mb-10">
          <Calculator />
        </div>

        <div className="space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Zorgtoeslag 2026: de cijfers</h2>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Zorgtoeslag 2026 overzicht</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Situatie</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-gray-500">Max. per maand</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-gray-500">Inkomensgrens</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-gray-500">Vermogensgrens</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { situatie: 'Alleenstaand', maand: '€129', grens: '€40.857', vermogen: '€141.896' },
                    { situatie: 'Met toeslagpartner', maand: '€258', grens: '€51.142', vermogen: '€179.429' },
                  ].map((r, i) => (
                    <tr key={r.situatie} className={i % 2 !== 0 ? 'bg-gray-50' : ''}>
                      <td className="py-3 px-4 text-xs font-medium text-gray-700">{r.situatie}</td>
                      <td className="py-3 px-4 text-center text-xs font-medium text-brand-500">{r.maand}</td>
                      <td className="py-3 px-4 text-center text-xs text-gray-600">{r.grens}</td>
                      <td className="py-3 px-4 text-center text-xs text-gray-600">{r.vermogen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-400 px-4 py-3 border-t border-gray-100">Bron: Belastingdienst 2026. Hoe lager je inkomen, hoe hoger je toeslag.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is zorgtoeslag?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Zorgtoeslag is een bijdrage van de overheid om de kosten van je zorgverzekering te helpen betalen. Als je inkomen niet te hoog is, betaalt de Belastingdienst elke maand een deel van je premie voor je. De gemiddelde basisverzekering kost in 2026 rond de €150 per maand. Met de maximale zorgtoeslag van €129 betaal je als alleenstaande effectief nog maar €21 per maand.</p>
            <p className="text-gray-600 leading-relaxed">De toeslag wordt elke maand rond de 20e uitbetaald door de Belastingdienst.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Voorwaarden zorgtoeslag 2026</h2>
            <div className="space-y-2">
              {[
                'Je bent 18 jaar of ouder',
                'Je hebt een Nederlandse zorgverzekering',
                'Je inkomen ligt onder de inkomensgrens (€40.857 alleenstaand, €51.142 met partner)',
                'Je vermogen ligt onder de vermogensgrens (€141.896 alleenstaand, €179.429 met partner)',
                'Je woont in Nederland',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <p className="text-xs text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe vraag je zorgtoeslag aan?</h2>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Log in op Mijn Belastingdienst', tekst: 'Ga naar belastingdienst.nl en log in met je DigiD. Navigeer naar Mijn toeslagen.' },
                { stap: '2', titel: 'Vraag zorgtoeslag aan', tekst: 'Klik op "Zorgtoeslag aanvragen" en vul je inkomen en situatie in. Heb je een partner? Vul ook diens inkomen in.' },
                { stap: '3', titel: 'Ontvang bevestiging', tekst: 'Je krijgt binnen 8 weken een beschikking. De eerste uitbetaling volgt daarna automatisch rond de 20e van de maand.' },
              ].map(item => (
                <div key={item.stap} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">{item.stap}</div>
                  <div>
                    <p className="font-medium text-sm mb-1">{item.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-xs font-medium text-amber-700 mb-1">Aanvragen voor 1 september</p>
              <p className="text-xs text-gray-500 leading-relaxed">Vraag je zorgtoeslag aan voor 1 september 2026, dan ontvang je toeslag over het hele jaar. Vraag je later aan, dan ontvang je toeslag vanaf de maand van aanvraag.</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Veelgemaakte fouten</h2>
            <div className="space-y-3">
              {[
                { fout: 'Inkomen te laag inschatten', uitleg: 'Als je achteraf meer hebt verdiend dan opgegeven, moet je zorgtoeslag terugbetalen. Vergeet vakantiegeld en bonussen niet.' },
                { fout: 'Wijzigingen niet doorgeven', uitleg: 'Verander je situatie (nieuw inkomen, samenwonen, verhuizen)? Geef dit binnen 4 weken door via Mijn Toeslagen.' },
                { fout: 'Zorgtoeslag niet aanvragen', uitleg: 'De toeslag wordt niet automatisch toegekend. Veel mensen laten geld liggen doordat ze niet weten dat ze er recht op hebben.' },
              ].map(item => (
                <div key={item.fout} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <div>
                    <p className="font-medium text-xs text-red-700 mb-1">{item.fout}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="font-medium text-sm text-gray-700 mb-3">Gerelateerd</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { to: '/verzekeringen', label: 'Zorgverzekering vergelijken', sub: 'Welke verzekeraar past bij jou?' },
              { to: '/tools/buffer-berekenaar', label: 'Buffer berekenaar', sub: 'Hoeveel noodfonds heb je nodig?' },
              { to: '/tools/budget-planner', label: 'Budget planner', sub: 'Breng je inkomsten in kaart' },
              { to: '/schulden/uit-de-schulden', label: 'Uit de schulden', sub: 'Het complete stappenplan' },
            ].map(tool => (
              <Link key={tool.to} to={tool.to} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors mb-1">{tool.label}</p>
                <p className="text-xs text-gray-400">{tool.sub}</p>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Indicatieve berekening op basis van officiële Belastingdienst cijfers voor 2026. Er kunnen geen rechten aan worden ontleend. Controleer je definitieve recht via <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">belastingdienst.nl</a>.</p>
      </div>
    </>
  )
}
