import { useState } from 'react'
import { Link } from 'react-router-dom'
import { affiliateUrl } from '../../config/affiliate'

export default function CompoundCalculator() {
  const [startBedrag, setStartBedrag] = useState('')
  const [maandInleg, setMaandInleg] = useState('')
  const [rendement, setRendement] = useState('')
  const [jaren, setJaren] = useState('')
  const [berekend, setBerekend] = useState(false)

  const s = parseFloat(startBedrag) || 0
  const m = parseFloat(maandInleg) || 0
  const r = parseFloat(rendement) || 0
  const j = parseInt(jaren) || 0

  const calc = (yr: number) => r > 0 ? Math.round(s * Math.pow(1 + r/100, yr) + m * 12 * ((Math.pow(1 + r/100, yr) - 1) / (r/100))) : 0

  const eindwaarde = calc(j)
  const ingelegd = Math.round(s + m * 12 * j)
  const winst = Math.max(0, eindwaarde - ingelegd)
  const jaren10 = calc(10)
  const jaren20 = calc(20)
  const jaren30 = calc(30)

  const handleBereken = () => { if (r > 0 && j > 0) setBerekend(true) }
  const handleReset = () => { setStartBedrag(''); setMaandInleg(''); setRendement(''); setJaren(''); setBerekend(false) }

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Compound interest calculator</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-xl">📈</div>
            <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Gratis tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-3">Compound interest calculator</h1>
          <p className="text-gray-500 leading-relaxed">Bereken hoeveel jouw geld waard wordt door het rente-op-rente effect. Vul je startbedrag, maandelijkse inleg en het verwachte rendement in — en zie direct wat dit over de jaren oplevert.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 1 — Startkapitaal</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Startbedrag</label>
            <p className="text-xs text-gray-400 mb-3">Het bedrag dat je nu al hebt of direct inlegt om mee te starten.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={startBedrag} onChange={e => { setStartBedrag(e.target.value); setBerekend(false) }} placeholder="bijv. 1000"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 2 — Maandelijkse inleg</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Maandelijkse inleg</label>
            <p className="text-xs text-gray-400 mb-3">Het bedrag dat je elke maand extra inlegt. Laat leeg als je alleen het startbedrag belegt.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={maandInleg} onChange={e => { setMaandInleg(e.target.value); setBerekend(false) }} placeholder="bijv. 200"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 3 — Rendement & looptijd</p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Jaarlijks rendement <span className="text-brand-500">*</span></label>
              <p className="text-xs text-gray-400 mb-3">Verwacht gemiddeld rendement per jaar. Historisch gemiddelde wereldwijde ETF: 7-8%.</p>
              <div className="relative max-w-xs">
                <input type="number" value={rendement} onChange={e => { setRendement(e.target.value); setBerekend(false) }} placeholder="bijv. 7" step="0.1"
                  className="w-full pl-4 pr-8 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
              </div>
              <div className="flex gap-2 mt-2">
                {[5, 7, 10].map(v => (
                  <button key={v} onClick={() => { setRendement(String(v)); setBerekend(false) }}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}%</button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Looptijd <span className="text-brand-500">*</span></label>
              <p className="text-xs text-gray-400 mb-3">Het aantal jaren dat je wilt beleggen.</p>
              <div className="relative max-w-xs">
                <input type="number" value={jaren} onChange={e => { setJaren(e.target.value); setBerekend(false) }} placeholder="bijv. 20"
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">jaar</span>
              </div>
              <div className="flex gap-2 mt-2">
                {[10, 20, 30].map(v => (
                  <button key={v} onClick={() => { setJaren(String(v)); setBerekend(false) }}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 hover:border-brand-500 hover:text-brand-500 transition-colors">{v}j</button>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 pb-6 flex gap-3">
            <button onClick={handleBereken} disabled={!rendement || !jaren}
              className="bg-brand-500 hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-8 py-2.5 rounded-lg transition-colors text-sm">
              Bereken →
            </button>
            <button onClick={handleReset} className="text-sm text-gray-400 hover:text-gray-600 px-4 py-2.5 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              Reset
            </button>
          </div>
        </div>

        {berekend && eindwaarde > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="font-serif text-2xl font-normal">Jouw resultaat</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Totaal ingelegd</p>
                <p className="font-serif text-xl font-normal text-gray-700">€{ingelegd.toLocaleString('nl')}</p>
              </div>
              <div className="bg-brand-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Rendement</p>
                <p className="font-serif text-xl font-normal text-brand-500">+€{winst.toLocaleString('nl')}</p>
              </div>
              <div className="bg-brand-500 rounded-xl p-4 text-center">
                <p className="text-xs text-white/70 mb-1">Eindwaarde na {j} jaar</p>
                <p className="font-serif text-xl font-normal text-white">€{eindwaarde.toLocaleString('nl')}</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-medium text-sm mb-4 text-gray-700">Groei over tijd</h3>
              <div className="space-y-3">
                {[{ label: 'Na 10 jaar', waarde: jaren10, ingelegd10: Math.round(s + m * 12 * 10) },
                  { label: 'Na 20 jaar', waarde: jaren20, ingelegd10: Math.round(s + m * 12 * 20) },
                  { label: 'Na 30 jaar', waarde: jaren30, ingelegd10: Math.round(s + m * 12 * 30) }].map(row => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-20 flex-shrink-0">{row.label}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full bg-gray-300 rounded-full"
                        style={{ width: `${Math.min(100, (row.ingelegd10 / Math.max(jaren30, 1)) * 100)}%` }} />
                      <div className="absolute left-0 top-0 h-full bg-brand-500 rounded-full opacity-80"
                        style={{ width: `${Math.min(100, (row.waarde / Math.max(jaren30, 1)) * 100)}%` }} />
                    </div>
                    <span className="text-xs font-medium text-gray-700 w-28 text-right">€{row.waarde.toLocaleString('nl')}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-3 h-2 bg-gray-300 rounded-full" />Ingelegd
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-3 h-2 bg-brand-500 rounded-full opacity-80" />Eindwaarde
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400">Berekening op basis van jaarlijks rendement. Beleggen brengt risico's met zich mee — dit is geen financieel advies.</p>
          </div>
        )}

        <div className="bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Klaar om te beginnen met beleggen?</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een account bij DEGIRO. Geen maandelijkse kosten, al vanaf €1.</p>
          <a href={affiliateUrl('degiro', 'compound-calc-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij DEGIRO →
          </a>
        </div>
      </div>
    </>
  )
}
