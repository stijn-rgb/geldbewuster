import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const vergelijking = [
  { kenmerk: 'Land van vestiging', degiro: 'Nederland (Frankfurt)', trading212: 'Bulgarije (CySEC)' },
  { kenmerk: 'Transactiekosten ETF\'s', degiro: 'Gratis via kernselectie', trading212: 'Volledig gratis' },
  { kenmerk: 'Transactiekosten aandelen', degiro: '€1 per order EU', trading212: 'Gratis' },
  { kenmerk: 'Fractioneel beleggen', degiro: 'Nee', trading212: 'Ja, vanaf €1' },
  { kenmerk: 'Auto-invest', degiro: 'Nee', trading212: 'Ja, via Pies' },
  { kenmerk: 'Wisselkoersopslag', degiro: '0,25%', trading212: '0,15%' },
  { kenmerk: 'Klantenservice', degiro: 'Nederlands', trading212: 'Engels' },
  { kenmerk: 'Beleggerscompensatie', degiro: '€20.000 (DGS)', trading212: '€20.000 (CySEC)' },
]

export default function DegiroVsTrading212() {
  return (
    <>
      <SEO
        title="DEGIRO vs Trading 212: welke broker is in 2026 beter?"
        description="DEGIRO of Trading 212? We vergelijken kosten, veiligheid, gebruiksgemak en functies. Welke broker past bij jouw situatie? Lees de eerlijke vergelijking."
        canonical="/beleggen/degiro-vs-trading-212"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">DEGIRO vs Trading 212</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-purple-50 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Broker vergelijking</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            DEGIRO vs Trading 212: welke broker is beter in 2026?
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            DEGIRO en Trading 212 zijn de twee populairste online brokers in Nederland. Beide bieden lage of zelfs gratis kosten, maar de manier waarop ze geld verdienen, hun functies en hun doelgroep verschillen. In dit artikel zetten we ze eerlijk naast elkaar zodat jij de juiste keuze maakt.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#korte-samenvatting" className="hover:text-brand-500">Korte samenvatting</a></li>
            <li><a href="#vergelijkingstabel" className="hover:text-brand-500">Vergelijkingstabel</a></li>
            <li><a href="#kosten" className="hover:text-brand-500">Kosten in detail</a></li>
            <li><a href="#functies" className="hover:text-brand-500">Functies en gebruiksgemak</a></li>
            <li><a href="#veiligheid" className="hover:text-brand-500">Veiligheid en regulering</a></li>
            <li><a href="#welke-past-bij-jou" className="hover:text-brand-500">Welke past bij jou?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="korte-samenvatting">
            <h2 className="font-serif text-2xl font-normal mb-4">Korte samenvatting</h2>
            <p className="text-gray-600 leading-relaxed mb-4">In het kort: DEGIRO is de keuze voor wie graag bij een Nederlandse broker belegt met ruime productkeuze en Nederlandse klantenservice. Trading 212 is de keuze voor wie kleine bedragen wil inleggen, fractioneel wil beleggen of een automatische maandelijkse inleg wil instellen.</p>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
              <p className="font-medium text-sm text-brand-700 mb-2">Snelle conclusie</p>
              <p className="text-xs text-gray-600 leading-relaxed">Voor beginners met kleine maandelijkse inleg: Trading 212. Voor wie groter inlegt en Nederlandstalige service wil: DEGIRO. Beide zijn veilig en gereguleerd.</p>
            </div>
          </section>

          <section id="vergelijkingstabel">
            <h2 className="font-serif text-2xl font-normal mb-4">Vergelijkingstabel</h2>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">DEGIRO versus Trading 212</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Kenmerk</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-brand-500">DEGIRO</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-purple-500">Trading 212</th>
                  </tr>
                </thead>
                <tbody>
                  {vergelijking.map((r, i) => (
                    <tr key={r.kenmerk} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-xs text-gray-500">{r.kenmerk}</td>
                      <td className="py-2.5 px-4 text-center text-xs font-medium text-brand-500 bg-brand-50/30">{r.degiro}</td>
                      <td className="py-2.5 px-4 text-center text-xs font-medium text-purple-500 bg-purple-50/30">{r.trading212}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Tarieven en functies per mei 2026. Check altijd de actuele voorwaarden van de broker.</p>
          </section>

          <section id="kosten">
            <h2 className="font-serif text-2xl font-normal mb-4">Kosten in detail</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Beide brokers verdienen niet aan transactiekosten, maar wel aan andere zaken. Bij DEGIRO betaal je een vast bedrag per order, behalve voor de kernselectie ETF's. Trading 212 is volledig gratis qua orders, maar verdient aan de spread en aan rente over je niet-belegde geld.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Voor wie maandelijks 100 euro inlegt in dezelfde ETF, is het verschil klein. Wie regelmatig handelt in losse aandelen, betaalt bij DEGIRO 1 euro per order, bij Trading 212 niets. Aan de andere kant heeft DEGIRO een groter aanbod en uitgebreidere informatie per fonds.</p>
            <p className="text-gray-600 leading-relaxed">Belangrijk om te weten: bij beide brokers betaal je via de wisselkoersopslag iets extra als je in dollars handelt. Trading 212 zit hier 0,1 procentpunt gunstiger.</p>
          </section>

          <section id="functies">
            <h2 className="font-serif text-2xl font-normal mb-4">Functies en gebruiksgemak</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Trading 212 is gemaakt voor mobiel. De app is mooi vormgegeven en werkt intuïtief. De Pies-functie laat je een eigen mandje van aandelen bouwen waarin je elke maand automatisch inlegt. Voor wie passief wil beleggen is dit een groot pluspunt.</p>
            <p className="text-gray-600 leading-relaxed mb-4">DEGIRO is functioneler dan mooi. De interface oogt zakelijk en biedt veel filters en data. Wat ontbreekt is automatische maandelijkse inleg. Wie bij DEGIRO maandelijks wil inleggen, moet dat handmatig doen.</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="font-medium text-sm text-yellow-800 mb-2">Fractioneel beleggen: groot verschil</p>
              <p className="text-xs text-gray-700 leading-relaxed">Bij Trading 212 koop je voor 1 euro een fractie van een duur aandeel zoals Berkshire Hathaway of Booking. Bij DEGIRO moet je het hele aandeel kopen, wat soms duizenden euro's per stuk is. Voor wie kleine bedragen inlegt is dit doorslaggevend.</p>
            </div>
          </section>

          <section id="veiligheid">
            <h2 className="font-serif text-2xl font-normal mb-4">Veiligheid en regulering</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Beide brokers zijn veilig en gereguleerd. DEGIRO valt onder Duits toezicht (BaFin) sinds de overname door flatexDEGIRO. Trading 212 valt onder Cypriotisch toezicht (CySEC). Beide hanteren de Europese MiFID-richtlijn.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Voor beleggerscompensatie geldt bij beide brokers maximaal 20.000 euro. Je aandelen zelf staan altijd bij externe bewaarbanken, gescheiden van het broker-vermogen. Mocht een broker omvallen, dan blijven jouw beleggingen van jou.</p>
            <p className="text-gray-600 leading-relaxed">Voor de meeste Nederlandse beleggers is dit verschil te verwaarlozen, maar wie veel waarde hecht aan toezicht door een Nederlandse instantie, vindt DEGIRO gevoelsmatig prettiger.</p>
          </section>

          <section id="welke-past-bij-jou">
            <h2 className="font-serif text-2xl font-normal mb-4">Welke past bij jou?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Kies DEGIRO als</p>
                <ul className="space-y-2">
                  {[
                    'Je Nederlandstalige klantenservice belangrijk vindt',
                    'Je in obligaties of exotische ETF\'s wilt handelen',
                    'Je grotere bedragen ineens belegt',
                    'Je een uitgebreidere fondsenkeuze wilt',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
                <p className="font-medium text-sm text-purple-700 mb-3">Kies Trading 212 als</p>
                <ul className="space-y-2">
                  {[
                    'Je maandelijks kleine bedragen wilt inleggen',
                    'Je fractioneel wilt beleggen vanaf 1 euro',
                    'Je automatische inleg wilt via Auto-Invest',
                    'Je liever via een mooie app belegt dan een desktop',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              <Link to="/beleggen/degiro-review" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">DEGIRO review</p>
                  <p className="text-xs text-gray-400">De volledige review</p>
                </div>
              </Link>
              <Link to="/beleggen/trading-212-review" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Trading 212 review</p>
                  <p className="text-xs text-gray-400">De volledige review</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Er is geen winnaar voor iedereen. Beide brokers zijn veilig, hebben lage kosten en doen wat ze beloven. De vraag is wat past bij jouw situatie. Wie maandelijks 50 of 100 euro automatisch wil inleggen, kiest Trading 212. Wie liever via een Nederlandse broker met breder aanbod werkt, kiest DEGIRO.</p>
            <p className="text-gray-600 leading-relaxed">Veel beleggers gebruiken trouwens beide. Trading 212 voor maandelijkse ETF-inleg, DEGIRO voor losse aandelen of obligaties. Je kunt prima twee accounts hebben. Begin eerst met onze <Link to="/beleggen/beginnen-met-beleggen" className="text-brand-500 hover:underline">gids over beginnen met beleggen</Link> als je nog twijfelt waarmee je überhaupt zou starten.</p>
          </section>

        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href={affiliateUrl('degiro', 'vergelijking-cta')} target="_blank" rel="noopener sponsored"
            className="bg-brand-500 rounded-2xl p-6 text-center text-white hover:opacity-90 transition-opacity">
            <p className="font-medium text-sm mb-1">DEGIRO openen</p>
            <p className="text-xs opacity-80">Nederlandstalige broker</p>
          </a>
          <a href={affiliateUrl('trading212', 'vergelijking-cta')} target="_blank" rel="noopener sponsored"
            className="bg-purple-600 rounded-2xl p-6 text-center text-white hover:opacity-90 transition-opacity">
            <p className="font-medium text-sm mb-1">Trading 212 openen</p>
            <p className="text-xs opacity-80">Gratis fractioneel beleggen</p>
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat affiliate links naar DEGIRO en Trading 212. Als je via onze links een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen.</p>

      </article>
    </>
  )
}
