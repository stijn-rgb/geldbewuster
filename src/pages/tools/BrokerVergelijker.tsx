import { useState } from 'react'
import { Link } from 'react-router-dom'

const brokers = [
  { naam: 'DEGIRO', kosten: '€1-3 per transactie', etfGratis: true, crypto: true, minInleg: '€0', beurzen: '50+', geschikt: 'Beginners en gevorderden', score: '9.1', awin: true },
  { naam: 'Trading 212', kosten: 'Gratis', etfGratis: true, crypto: true, minInleg: '€1', beurzen: '1 beurs', geschikt: 'Absolute beginners', score: '8.4', awin: false },
  { naam: 'Saxo Bank', kosten: '€2-6 per transactie', etfGratis: false, crypto: false, minInleg: '€0', beurzen: '70+', geschikt: 'Gevorderde beleggers', score: '8.7', awin: false },
  { naam: 'Brand New Day', kosten: '0.15 tot 0.5% per jaar', etfGratis: true, crypto: false, minInleg: '€10', beurzen: 'Via fondsen', geschikt: 'Passieve beleggers', score: '8.2', awin: false },
  { naam: 'Scalable Capital', kosten: '€0.99 per order of flat fee', etfGratis: true, crypto: false, minInleg: '€0', beurzen: '1 beurs', geschikt: 'Beginners die automatisch willen beleggen', score: '8.0', awin: false },
]

const rijen = [
  { label: 'Transactiekosten', key: 'kosten' },
  { label: 'Gratis ETFs', key: 'etfGratis' },
  { label: 'Crypto beschikbaar', key: 'crypto' },
  { label: 'Minimale inleg', key: 'minInleg' },
  { label: 'Beschikbare beurzen', key: 'beurzen' },
  { label: 'Geschikt voor', key: 'geschikt' },
  { label: 'Beoordeling', key: 'score' },
]

export default function BrokerVergelijker() {
  const [geselecteerd, setGeselecteerd] = useState<string[]>(['DEGIRO', 'Trading 212', 'Saxo Bank'])

  const toggle = (naam: string) => {
    if (geselecteerd.includes(naam)) {
      if (geselecteerd.length > 1) setGeselecteerd(geselecteerd.filter(b => b !== naam))
    } else {
      if (geselecteerd.length < 4) setGeselecteerd([...geselecteerd, naam])
    }
  }

  const gefiltered = brokers.filter(b => geselecteerd.includes(b.naam))

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/tools" className="hover:text-brand-500">Tools</Link>
          <span>›</span>
          <span className="text-gray-600">Broker vergelijker</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">Gratis tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-normal mb-3">Broker vergelijker</h1>
          <p className="text-gray-500 leading-relaxed">Vergelijk de populairste Nederlandse brokers op kosten, geschiktheid en aanbod. Selecteer de brokers die je wilt vergelijken en zie de verschillen direct naast elkaar.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="bg-brand-500 px-6 py-3">
            <p className="text-sm font-medium text-white">Selecteer brokers om te vergelijken (maximaal 4)</p>
          </div>
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-wrap gap-2">
              {brokers.map(b => (
                <button key={b.naam} onClick={() => toggle(b.naam)}
                  className={`text-sm px-4 py-2 rounded-full border transition-colors ${geselecteerd.includes(b.naam) ? 'bg-brand-500 text-white border-brand-500 font-medium' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-brand-500 hover:text-brand-500'}`}>
                  {b.naam}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-6 text-xs text-gray-400 font-medium w-40">Kenmerk</th>
                  {gefiltered.map(b => (
                    <th key={b.naam} className="py-3 px-4 text-xs font-medium text-gray-700 text-center">{b.naam}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {rijen.map(rij => (
                  <tr key={rij.key}>
                    <td className="py-3 px-6 text-xs text-gray-400">{rij.label}</td>
                    {gefiltered.map(b => {
                      const val = b[rij.key as keyof typeof b]
                      return (
                        <td key={b.naam} className="py-3 px-4 text-center text-xs text-gray-700">
                          {typeof val === 'boolean' ? (
                            <span className={val ? 'text-brand-500 font-medium' : 'text-gray-300'}>{val ? 'Ja' : 'Nee'}</span>
                          ) : rij.key === 'score' ? (
                            <span className="inline-block bg-brand-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">{val}</span>
                          ) : val}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">Vergelijking op basis van publiek beschikbare informatie. Tarieven en voorwaarden kunnen wijzigen. Controleer altijd de actuele informatie op de website van de broker.</p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is een broker?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een broker is een tussenpersoon die je toegang geeft tot de aandelenmarkt. Via een broker kun je aandelen, ETFs, obligaties en andere beleggingsproducten kopen en verkopen. Zonder broker heb je geen toegang tot de beurs.</p>
            <p className="text-gray-600 leading-relaxed">Er zijn grote verschillen tussen brokers in kosten, aanbod en gebruiksgemak. De goedkoopste broker is niet altijd de beste keuze. Het hangt af van wat je wilt beleggen en hoe actief je dat doet.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-normal mb-4">Waar let je op bij het kiezen van een broker?</h2>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Transactiekosten', uitleg: 'Hoeveel betaal je per aan- of verkoop? Bij passief beleggen via ETFs maakt dit een groot verschil op de lange termijn. Sommige brokers bieden gratis transacties aan voor bepaalde ETFs.' },
                { stap: '2', titel: 'Veiligheid en regulatie', uitleg: 'Is de broker gereguleerd door een betrouwbare toezichthouder? In Nederland is de AFM (Autoriteit Financiële Markten) de belangrijkste toezichthouder. Controleer altijd of een broker een vergunning heeft.' },
                { stap: '3', titel: 'Aanbod en beurzen', uitleg: 'Welke producten en beurzen zijn beschikbaar? Als je wereldwijd wilt beleggen, heb je toegang nodig tot meerdere beurzen.' },
                { stap: '4', titel: 'Gebruiksgemak', uitleg: 'Is het platform makkelijk te begrijpen? Voor beginners is een overzichtelijk platform belangrijker dan geavanceerde tools.' },
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
                { term: 'Transactiekosten', uitleg: 'De kosten die je betaalt bij elke aan- of verkoop van een beleggingsproduct. Ook wel commissie of brokerage fee genoemd.' },
                { term: 'ETF (Exchange Traded Fund)', uitleg: 'Een beleggingsfonds dat op de beurs verhandeld wordt en een index volgt. Goedkoop en gespreid beleggen in één product.' },
                { term: 'Kernselectie', uitleg: 'Een selectie van ETFs waarbij je voor een lager of geen transactiekosten kunt handelen. DEGIRO biedt dit aan voor meer dan 200 ETFs.' },
                { term: 'Bewaarkosten', uitleg: 'De kosten die een broker rekent voor het bewaren van je beleggingen. Niet alle brokers rekenen dit. Vergelijk altijd de totale kosten.' },
                { term: 'Fractional shares', uitleg: 'De mogelijkheid om een gedeelte van een aandeel te kopen. Handig als je in dure aandelen wilt beleggen met een klein bedrag.' },
                { term: 'AFM-vergunning', uitleg: 'De vergunning van de Autoriteit Financiële Markten. Een broker met een AFM-vergunning staat onder toezicht en moet zich aan strenge regels houden.' },
              ].map(item => (
                <div key={item.term} className="bg-white border border-gray-100 rounded-xl p-4">
                  <p className="font-medium text-sm text-brand-500 mb-1">{item.term}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.uitleg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
            <p className="font-medium text-sm text-brand-700 mb-2">Tip: begin met één broker</p>
            <p className="text-xs text-gray-600 leading-relaxed">Je hoeft niet bij meerdere brokers tegelijk te beginnen. Kies er één die past bij jouw situatie en leer dat platform goed kennen. Later kun je altijd nog uitbreiden of overstappen.</p>
          </div>
        </div>
      </div>
    </>
  )
}
