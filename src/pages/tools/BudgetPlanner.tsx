import { useState } from 'react'
import { Link } from 'react-router-dom'

const categorieen = [
  { label: 'Huur of hypotheek', key: 'wonen', default: 900 },
  { label: 'Boodschappen', key: 'boodschappen', default: 400 },
  { label: 'Transport', key: 'transport', default: 200 },
  { label: 'Verzekeringen', key: 'verzekeringen', default: 150 },
  { label: 'Abonnementen', key: 'abonnementen', default: 80 },
  { label: 'Uit eten en vrije tijd', key: 'vrij', default: 200 },
  { label: 'Kleding', key: 'kleding', default: 75 },
  { label: 'Gezondheid en persoonlijke verzorging', key: 'gezondheid', default: 60 },
  { label: 'Sparen en beleggen', key: 'sparen', default: 200 },
  { label: 'Overig', key: 'overig', default: 100 },
]

export default function BudgetPlanner() {
  const [inkomen, setInkomen] = useState('')
  const [uitgaven, setUitgaven] = useState<Record<string, string>>(
    Object.fromEntries(categorieen.map(c => [c.key, String(c.default)]))
  )

  const netto = parseFloat(inkomen) || 0
  const totaalUitgaven = Object.values(uitgaven).reduce((a, b) => a + (parseFloat(b) || 0), 0)
  const over = netto - totaalUitgaven
  const spaarPercentage = netto > 0 ? Math.round((Math.max(0, over) / netto) * 100) : 0
  const nibud = netto > 0 ? Math.round((parseFloat(uitgaven['wonen']) || 0) / netto * 100) : 0

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Budget planner</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Gratis tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-3">Budget planner</h1>
          <p className="text-gray-500 leading-relaxed">Vul je netto maandinkomen en maandelijkse uitgaven in en zie direct hoeveel je overhoudt. Ontdek waar je kunt besparen en wat je spaarquote is.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 1, Jouw inkomen</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <label className="block text-sm font-medium text-gray-700 mb-1">Netto maandinkomen <span className="text-brand-500">*</span></label>
            <p className="text-xs text-gray-400 mb-3">Het bedrag dat je elke maand netto op je rekening ontvangt, na belasting. Tel alle inkomstenbronnen bij elkaar op.</p>
            <div className="relative max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
              <input type="number" value={inkomen} onChange={e => setInkomen(e.target.value)} placeholder="bijv. 2800"
                className="w-full pl-7 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            </div>
          </div>

          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Stap 2, Jouw uitgaven per maand</p>
          </div>
          <div className="divide-y divide-gray-50">
            {categorieen.map(cat => (
              <div key={cat.key} className="flex items-center gap-4 px-6 py-3">
                <span className="text-sm text-gray-600 flex-1">{cat.label}</span>
                <div className="relative w-28">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">€</span>
                  <input type="number" value={uitgaven[cat.key]}
                    onChange={e => setUitgaven({ ...uitgaven, [cat.key]: e.target.value })}
                    className="w-full pl-6 pr-2 py-1.5 text-sm text-right border border-gray-200 rounded-lg focus:outline-none focus:border-brand-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {netto > 0 && (
          <div className="space-y-4 mb-8">
            <h2 className="font-serif text-2xl font-normal">Jouw budget overzicht</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-400 mb-1">Totaal uitgaven</p>
                <p className="font-serif text-xl font-normal text-gray-700">€{Math.round(totaalUitgaven).toLocaleString('nl')}</p>
              </div>
              <div className={`rounded-xl p-4 text-center ${over >= 0 ? 'bg-brand-50' : 'bg-red-50'}`}>
                <p className="text-xs text-gray-400 mb-1">Over per maand</p>
                <p className={`font-serif text-xl font-normal ${over >= 0 ? 'text-brand-500' : 'text-red-500'}`}>€{Math.round(over).toLocaleString('nl')}</p>
              </div>
              <div className="bg-brand-500 rounded-xl p-4 text-center">
                <p className="text-xs text-white/70 mb-1">Spaarquote</p>
                <p className="font-serif text-xl font-normal text-white">{spaarPercentage}%</p>
              </div>
            </div>
            {over < 0 && <p className="text-xs text-red-500 bg-red-50 rounded-lg px-4 py-3">Je geeft meer uit dan je verdient. Bekijk welke categorieën je kunt verlagen.</p>}
            {nibud > 40 && <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-4 py-3">Je woonlasten zijn hoger dan 40% van je inkomen. Nibud adviseert maximaal 35-40% voor wonen.</p>}
            {spaarPercentage >= 20 && over >= 0 && <p className="text-xs text-brand-700 bg-brand-50 rounded-lg px-4 py-3">Goed bezig. Je spaarquote van {spaarPercentage}% ligt boven het aanbevolen minimum van 10-20%.</p>}
          </div>
        )}

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Waarom een budget maken?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een budget geeft je overzicht over je geld. Niet om elk dubbeltje bij te houden, maar om te begrijpen waar je geld naartoe gaat en bewuster keuzes te maken. Veel mensen die beginnen met budgetteren zijn verrast hoeveel ze onbewust uitgeven aan kleine dingen.</p>
            <p className="text-gray-600 leading-relaxed">Een goed budget helpt je ook om doelen te stellen: hoeveel kun je elke maand sparen? Wanneer heb je genoeg voor een noodfonds? Wanneer kun je beginnen met beleggen?</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt deze planner?</h2>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Vul je netto maandinkomen in', uitleg: 'Dit is het bedrag dat je elke maand netto ontvangt. Heb je wisselend inkomen? Gebruik dan het gemiddelde van de afgelopen drie maanden.' },
                { stap: '2', titel: 'Vul je uitgaven in per categorie', uitleg: 'De standaardwaarden zijn gebaseerd op gemiddelden. Pas ze aan op jouw situatie. Kijk in je bankapp voor de werkelijke bedragen van de afgelopen maand.' },
                { stap: '3', titel: 'Bekijk je budget overzicht', uitleg: 'Je ziet direct hoeveel je overhoudt, wat je spaarquote is en of je woonlasten in verhouding staan tot je inkomen.' },
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
                { term: 'Netto inkomen', uitleg: 'Je inkomen na aftrek van belasting en sociale premies. Dit is het bedrag dat je daadwerkelijk op je rekening ontvangt.' },
                { term: 'Spaarquote', uitleg: 'Het percentage van je inkomen dat je spaart of belegt. Een spaarquote van 10-20% wordt als gezond beschouwd.' },
                { term: 'Vaste lasten', uitleg: 'Uitgaven die elke maand hetzelfde zijn: huur, abonnementen, verzekeringen. Deze zijn makkelijk te plannen.' },
                { term: 'Variabele kosten', uitleg: 'Uitgaven die elke maand kunnen verschillen: boodschappen, kleding, uit eten. Hier zit vaak de meeste ruimte om te besparen.' },
                { term: '50/30/20-regel', uitleg: 'Een populaire budgetmethode: 50% voor vaste lasten, 30% voor vrije bestedingen en 20% voor sparen en aflossen.' },
                { term: 'Noodfonds', uitleg: 'Een buffer van 3 tot 6 maanden aan vaste lasten. Dit vangt onverwachte kosten op zonder dat je schulden hoeft te maken.' },
              ].map(item => (
                <div key={item.term} className="bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-medium text-sm text-brand-500 mb-1">{item.term}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
            <p className="font-medium text-sm text-brand-700 mb-2">Tip: begin met je bankafschriften</p>
            <p className="text-xs text-gray-600 leading-relaxed">Open je bankapp en kijk wat je de afgelopen maand werkelijk hebt uitgegeven per categorie. Dat is een stuk betrouwbaarder dan schatten. De meeste banken categoriseren je uitgaven automatisch.</p>
          </div>
        </div>
      </div>
    </>
  )
}
