import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const voordelen = [
  'Volledig gratis aandelen en ETF\'s kopen, zonder transactiekosten',
  'Fractioneel beleggen vanaf 1 euro per aandeel',
  'Auto-Invest functie om automatisch maandelijks in te leggen',
  'Overzichtelijke app, makkelijk voor beginners',
  'Spaarrekening met rente in euro op je niet-belegde geld',
]

const nadelen = [
  'Geen Nederlandse vestiging, klantenservice in het Engels',
  'Verdienmodel is minder transparant dan bij DEGIRO',
  'Kleinere selectie obligaties en exotische producten',
  'Geld op spaarrekening valt onder buitenlandse depositogarantie',
]

export default function Trading212Review() {
  return (
    <>
      <SEO
        title="Trading 212 review 2026: gratis beleggen, wat is de catch?"
        description="Trading 212 review 2026: is gratis beleggen echt gratis? Voor- en nadelen, kosten, veiligheid en geschiktheid voor Nederlandse beleggers op een rij."
        canonical="/beleggen/trading-212-review"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Trading 212 review</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-purple-50 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Broker review</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Trading 212 review 2026: gratis beleggen, wat is de catch?
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>6 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Trading 212 belooft volledig gratis beleggen. Geen transactiekosten, geen bewaarloon, niets. Klinkt te mooi om waar te zijn. In deze eerlijke review kijken we hoe Trading 212 dat kan, of het veilig is en voor wie het werkelijk geschikt is.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is" className="hover:text-brand-500">Wat is Trading 212?</a></li>
            <li><a href="#kosten" className="hover:text-brand-500">Kosten en verdienmodel</a></li>
            <li><a href="#veiligheid" className="hover:text-brand-500">Hoe veilig is Trading 212?</a></li>
            <li><a href="#voor-en-nadelen" className="hover:text-brand-500">Voor- en nadelen</a></li>
            <li><a href="#voor-wie" className="hover:text-brand-500">Voor wie is Trading 212 geschikt?</a></li>
            <li><a href="#starten" className="hover:text-brand-500">Hoe begin je?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is Trading 212?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Trading 212 is een online broker uit Bulgarije die in 2017 koos voor een commissievrij model. Sindsdien groeide het bedrijf snel in heel Europa. In Nederland is het inmiddels een populair alternatief voor DEGIRO, vooral onder beleggers die fractioneel willen beleggen of automatisch willen inleggen.</p>
            <p className="text-gray-600 leading-relaxed">De app oogt strak en is gemaakt voor mobiel. Je kunt aandelen, ETF's en CFD's kopen. De CFD-tak is een aparte rekening en niet wat we voor lange termijn beleggen aanraden.</p>
          </section>

          <section id="kosten">
            <h2 className="font-serif text-2xl font-normal mb-4">Kosten en verdienmodel</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Trading 212 rekent geen transactiekosten, geen bewaarloon en geen account fee. Wat ze wel doen: een wisselkoersopslag van 0,15% bij valuta-omwisselingen, en ze verdienen aan de spread tussen de bied- en laatprijs van aandelen. Bij grote inleg vanaf bankrekening boven de 2.000 euro kan een storting fee van 0,7% gelden.</p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Trading 212 kosten in één oogopslag</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Kostenpost</th>
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Tarief</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { k: 'Aandelen kopen of verkopen', t: 'Gratis' },
                    { k: 'ETF\'s kopen of verkopen', t: 'Gratis' },
                    { k: 'Bewaarloon', t: 'Geen' },
                    { k: 'Wisselkoersopslag', t: '0,15%' },
                    { k: 'Storting bankrekening tot €2.000', t: 'Gratis' },
                    { k: 'Inactiviteit', t: 'Geen kosten' },
                  ].map((r, i) => (
                    <tr key={r.k} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-xs text-gray-700">{r.k}</td>
                      <td className="py-2.5 px-4 text-xs font-medium text-brand-500">{r.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Tarieven kunnen wijzigen. Check altijd de actuele kosten in de app voordat je inlegt.</p>
          </section>

          <section id="veiligheid">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe veilig is Trading 212?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Trading 212 is gereguleerd door de Cypriotische CySEC en valt onder het Europese MiFID-toezicht. Je aandelen worden bij externe bewaarbanken aangehouden, gescheiden van het vermogen van Trading 212. Mocht het bedrijf failliet gaan, dan blijven jouw aandelen van jou.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Daarnaast geldt een beleggerscompensatieregeling tot 20.000 euro voor het geval er fraude in het spel is. Dat is lager dan de 100.000 euro depositogarantie in Nederland, dus iets om rekening mee te houden.</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
              <p className="font-medium text-sm text-yellow-800 mb-2">Let op: spaarrekening valt onder Iers toezicht</p>
              <p className="text-xs text-gray-700 leading-relaxed">De spaarfunctie binnen Trading 212 stalt je geld bij Ierse banken onder de Ierse depositogarantie van 100.000 euro. Voor de meeste beleggers is dat prima, maar het is wel anders dan bij een Nederlandse bank.</p>
            </div>
          </section>

          <section id="voor-en-nadelen">
            <h2 className="font-serif text-2xl font-normal mb-4">Voor- en nadelen op een rij</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Voordelen</p>
                <ul className="space-y-2">
                  {voordelen.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-medium text-sm text-gray-700 mb-3">Nadelen</p>
                <ul className="space-y-2">
                  {nadelen.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="voor-wie">
            <h2 className="font-serif text-2xl font-normal mb-4">Voor wie is Trading 212 geschikt?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Trading 212 is vooral interessant voor beginners die met kleine bedragen willen starten. Door fractionele aandelen kun je voor 1 euro een stukje van een Apple-aandeel kopen, terwijl dat aandeel zelf bijna 200 euro kost. Voor wie maandelijks 50 of 100 euro inlegt, is dit een groot voordeel boven brokers waar je hele aandelen moet kopen.</p>
            <p className="text-gray-600 leading-relaxed">Voor ervaren beleggers die specifieke obligaties of exotische ETF's zoeken, is Trading 212 wat beperkt. Daarnaast is de Engelstalige klantenservice voor sommigen een drempel. Wie liever Nederlands gebruikt en ruimere keuze wil, kan beter naar <Link to="/beleggen/degiro-review" className="text-brand-500 hover:underline">DEGIRO</Link> kijken.</p>
          </section>

          <section id="starten">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe begin je met Trading 212?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Een account openen duurt ongeveer tien minuten. Je hebt een geldig identiteitsbewijs nodig en een Nederlands bankrekeningnummer. Daarna kun je direct geld storten en inleggen.</p>
            <div className="space-y-3 mb-6">
              {[
                { stap: '1', titel: 'Download de app', tekst: 'Trading 212 werkt voornamelijk via app of webbrowser. Kies bij registratie voor een Invest-account, niet de CFD-variant.' },
                { stap: '2', titel: 'Voltooi de identificatie', tekst: 'Upload je paspoort of ID-kaart. Verificatie duurt meestal binnen een dag.' },
                { stap: '3', titel: 'Stort en stel Auto-Invest in', tekst: 'Bouw een eigen pie van ETF\'s, bijvoorbeeld VWRL of IWDA, en laat Trading 212 maandelijks automatisch inleggen.' },
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <Link to="/tools/broker-vergelijker" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Broker vergelijker</p>
                  <p className="text-xs text-gray-400">Trading 212 versus de rest</p>
                </div>
              </Link>
              <Link to="/beleggen/wat-is-een-etf" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Wat is een ETF?</p>
                  <p className="text-xs text-gray-400">De basis van slim beleggen</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed">Trading 212 levert wat het belooft: gratis beleggen in aandelen en ETF's. Voor beginners die kleine bedragen willen inleggen of fractioneel willen beleggen, is het een aantrekkelijke keuze. Houd er rekening mee dat het bedrijf in Bulgarije zit en de klantenservice in het Engels is. Wie liever bij een Nederlands gevestigde broker beleggt, kan beter naar DEGIRO kijken. Onze volledige <Link to="/beleggen/degiro-vs-trading-212" className="text-brand-500 hover:underline">vergelijking tussen DEGIRO en Trading 212</Link> helpt je verder.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Probeer Trading 212</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een account en begin met fractioneel beleggen vanaf 1 euro.</p>
          <a href={affiliateUrl('trading212', 'trading212-review-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij Trading 212 →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar Trading 212. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen.</p>

      </article>
    </>
  )
}
