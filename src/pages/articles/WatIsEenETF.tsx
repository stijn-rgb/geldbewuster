import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const etfs = [
  { naam: 'VWRL', voluit: 'Vanguard FTSE All-World', bedrijven: '3.700+', focus: 'Hele wereld', kosten: '0,22%/jr', voor: 'Maximale spreiding wereldwijd' },
  { naam: 'IWDA', voluit: 'iShares Core MSCI World', bedrijven: '1.400+', focus: 'Ontwikkelde landen', kosten: '0,20%/jr', voor: 'Lage kosten, brede spreiding' },
  { naam: 'VUSA', voluit: 'Vanguard S&P 500', bedrijven: '500', focus: 'Amerika', kosten: '0,07%/jr', voor: 'Laagste kosten, VS-focused' },
]

export default function WatIsEenETF() {
  return (
    <>
      <SEO
        title="Wat is een ETF? Uitgelegd in gewone taal (2026)"
        description="Wat is een ETF en hoe werkt het? We leggen het uit in gewone taal. Van VWRL tot IWDA, van kosten tot risico's. Alles wat je moet weten als beginner."
        canonical="/beleggen/wat-is-een-etf"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Wat is een ETF?</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Beleggen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Wat is een ETF? Uitgelegd in gewone taal
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt april 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Iedereen heeft weleens de term ETF voorbij zien komen. Op financiële websites, in het nieuws of in een gesprek over beleggen. Maar wat is een ETF eigenlijk? En waarom praat iedereen er de laatste jaren over? In dit artikel leggen we het uit in gewone taal.
          </p>
        </div>

        {/* INHOUDSOPGAVE */}
        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is-etf" className="hover:text-brand-500">Wat is een ETF?</a></li>
            <li><a href="#hoe-werkt" className="hover:text-brand-500">Hoe werkt een ETF?</a></li>
            <li><a href="#verschil-fonds" className="hover:text-brand-500">Verschil met een gewoon beleggingsfonds</a></li>
            <li><a href="#waarom-populair" className="hover:text-brand-500">Waarom zijn ETF's zo populair?</a></li>
            <li><a href="#populaire-etfs" className="hover:text-brand-500">Populaire ETF's in Nederland</a></li>
            <li><a href="#risicos" className="hover:text-brand-500">Wat zijn de risico's?</a></li>
            <li><a href="#voor-wie" className="hover:text-brand-500">Voor wie zijn ETF's geschikt?</a></li>
            <li><a href="#hoe-begin" className="hover:text-brand-500">Hoe begin je met ETF's kopen?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is-etf">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is een ETF?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">ETF staat voor Exchange Traded Fund. In het Nederlands vrij vertaald: een beursverhandeld fonds. Dat klinkt misschien nog steeds ingewikkeld, dus laten we het anders zeggen.</p>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-4">
              <p className="font-medium text-sm text-brand-700 mb-1">De simpelste uitleg</p>
              <p className="text-sm text-gray-600 leading-relaxed">Een ETF is een mandje van aandelen dat je in één keer kunt kopen.</p>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">Stel je voor dat je wilt beleggen in de 500 grootste bedrijven van Amerika. Je zou in theorie aandelen kunnen kopen van Apple, Microsoft, Amazon, Google en nog 496 andere bedrijven. Dat vergt veel handmatig werk, kost tijd en is duur door alle transactiekosten. Een ETF lost dat op. Je koopt één ETF en bent daarmee meteen eigenaar van een klein stukje van al die bedrijven tegelijk.</p>
            <p className="text-gray-600 leading-relaxed">Een ETF volgt een index. Een index is een lijst van bedrijven die aan bepaalde criteria voldoen. De bekendste is de S&P 500, de index van de 500 grootste Amerikaanse bedrijven. Naast aandelen ontvang je met een ETF ook dividenden en rentebetaling die de onderliggende bedrijven uitkeren.</p>
          </section>

          <section id="hoe-werkt">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt een ETF?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een ETF die de S&P 500 volgt, koopt automatisch aandelen in die 500 bedrijven in exact dezelfde verhouding als de index. Als Apple bijvoorbeeld 7% van de gehele index uitmaakt, bestaat ook 7% van de ETF uit Apple-aandelen.</p>
            <p className="text-gray-600 leading-relaxed">Dit noemen we passief beleggen. De ETF doet niets bijzonders, hij volgt gewoon de index. Er zit geen fondsmanager die beslissingen maakt over welke aandelen hij koopt of verkoopt. Doordat ETF's passief beheerd zijn, zijn ze ook een stuk goedkoper dan actief beheerde beleggingen.</p>
          </section>

          <section id="verschil-fonds">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is het verschil met een gewoon beleggingsfonds?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Bij een actief beheerd beleggingsfonds betaal je een fondsmanager die kiest welke aandelen hij koopt en verkoopt in de hoop de markt te verslaan. Voor die expertise betaal je meer, vaak 1,5% tot 2,5% per jaar aan kosten. Een ETF heeft geen fondsmanager en volgt gewoon de index. Daardoor zijn de kosten veel lager, vaak maar 0,1% tot 0,3% per jaar.</p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">ETF vs actief beleggingsfonds</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Kenmerk</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-brand-500">ETF</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-gray-500">Actief fonds</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { k: 'Beheer', etf: 'Passief (index volgen)', actief: 'Actief (fondsmanager)' },
                    { k: 'Kosten per jaar', etf: '0,1% – 0,3%', actief: '1,5% – 2,5%' },
                    { k: 'Spreiding', etf: 'Breed, automatisch', actief: 'Afhankelijk van fonds' },
                    { k: 'Transparantie', etf: 'Volledig inzichtelijk', actief: 'Beperkt' },
                    { k: 'Verhandelbaarheid', etf: 'Dagelijks op de beurs', actief: 'Vaak 1x per dag' },
                  ].map((r, i) => (
                    <tr key={r.k} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-xs text-gray-500">{r.k}</td>
                      <td className="py-2.5 px-4 text-center text-xs font-medium text-brand-500 bg-brand-50/30">{r.etf}</td>
                      <td className="py-2.5 px-4 text-center text-xs text-gray-500">{r.actief}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Het kostenverschil klinkt klein maar over 20 tot 30 jaar maakt het een enorm verschil in je eindvermogen.</p>
          </section>

          <section id="waarom-populair">
            <h2 className="font-serif text-2xl font-normal mb-4">Waarom zijn ETF's zo populair?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Er zijn drie voornaamste redenen waarom ETF's de afgelopen jaren zo populair zijn geworden.</p>
            <div className="space-y-3">
              {[
                { titel: 'Lage kosten', tekst: 'Je betaalt veel minder dan bij actief beheerde fondsen. Die besparing loopt over de jaren enorm op door het rente-op-rente effect.' },
                { titel: 'Spreiding', tekst: 'Met één ETF beleg je in tientallen, honderden of zelfs duizenden bedrijven tegelijk. Als één bedrijf slecht presteert heeft dat nauwelijks invloed op je totale portefeuille.' },
                { titel: 'Toegankelijkheid', tekst: 'Je hebt geen groot startkapitaal nodig. Bij brokers zoals DEGIRO kun je al een ETF kopen voor een paar euro. Via de kernselectie van DEGIRO zijn de meest populaire ETF\'s zelfs gratis te verhandelen.' },
              ].map(item => (
                <div key={item.titel} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-1 bg-brand-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">{item.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="populaire-etfs">
            <h2 className="font-serif text-2xl font-normal mb-4">Populaire ETF's in Nederland</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Dit zijn de ETF's die Nederlandse beleggers het meest kopen:</p>
            <div className="space-y-3">
              {etfs.map(etf => (
                <div key={etf.naam} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="font-medium text-sm text-gray-900">{etf.naam}</span>
                      <span className="text-xs text-gray-400 ml-2">{etf.voluit}</span>
                    </div>
                    <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-medium">{etf.kosten}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-gray-50 rounded-lg p-2.5">
                      <p className="text-xs text-gray-400 mb-0.5">Aantal bedrijven</p>
                      <p className="text-xs font-medium text-gray-700">{etf.bedrijven}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2.5">
                      <p className="text-xs text-gray-400 mb-0.5">Focus</p>
                      <p className="text-xs font-medium text-gray-700">{etf.focus}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Geschikt voor: {etf.voor}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="risicos">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat zijn de risico's van ETF's?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">ETF's zijn populair, maar niet zonder risico. De waarde kan dalen, soms flink. Tijdens de coronacrisis in 2020 daalde de MSCI World met meer dan 30% in een paar weken tijd. Wie toen in paniek verkocht, verloor geld. Wie bleef zitten zag de ETF daarna volledig herstellen en verder stijgen.</p>
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-medium text-sm text-red-700 mb-2">Het grootste risico ben jijzelf</p>
              <p className="text-xs text-gray-600 leading-relaxed">Beleggers die te vroeg verkopen of in paniek raken bij koersdalingen maken de grootste fouten. Een ETF is bedoeld voor de lange termijn, minimaal vijf jaar, liever tien of meer. Wie rustig blijft zitten profiteert op de lange termijn van de stijgende wereldeconomie.</p>
            </div>
          </section>

          <section id="voor-wie">
            <h2 className="font-serif text-2xl font-normal mb-4">Voor wie zijn ETF's geschikt?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">ETF's zijn geschikt voor vrijwel iedereen die voor de lange termijn wil beleggen en niet de tijd of kennis heeft om individuele aandelen te selecteren.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Geschikt voor</p>
                <ul className="space-y-2">
                  {['Beginners die simpel en gespreid willen beleggen', 'Mensen die passief willen beleggen zonder veel tijd', 'Mensen die kosten willen minimaliseren', 'Wie voor pensioen of vermogensopbouw spaart'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-medium text-sm text-gray-700 mb-3">Minder geschikt voor</p>
                <ul className="space-y-2">
                  {['Wie snel geld wil verdienen', 'Wie graag actief handelt in individuele aandelen', 'Wie het geld binnen 1-2 jaar nodig heeft'].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="hoe-begin">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe begin je met ETF's kopen?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Je hebt drie dingen nodig: een broker, een keuze voor een ETF en een vast bedrag dat je maandelijks wilt inleggen.</p>
            <div className="space-y-3 mb-6">
              {[
                { stap: '1', titel: 'Kies een broker', tekst: 'DEGIRO is de populairste broker voor ETF-beleggers in Nederland. Via de kernselectie handel je gratis in de meest populaire ETF\'s. Een account openen duurt tien minuten.' },
                { stap: '2', titel: 'Kies een ETF', tekst: 'Voor de meeste beginners is de VWRL of IWDA een goede keuze. Breed gespreid, lage kosten en een bewezen track record.' },
                { stap: '3', titel: 'Bepaal je maandelijkse inleg', tekst: 'Leg vast op een vaste dag in, zo profiteer je automatisch van koersverschillen over de tijd. Dit heet dollar cost averaging.' },
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
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Broker vergelijker</p>
                  <p className="text-xs text-gray-400">Vergelijk DEGIRO, Trading 212 en Saxo</p>
                </div>
              </Link>
              <Link to="/tools/compound-calculator" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Compound calculator</p>
                  <p className="text-xs text-gray-400">Wat levert €200/mnd op over 20 jaar?</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een ETF is een mandje van aandelen dat je in één keer kunt kopen. Het is een goedkope, gespreide en toegankelijke manier om te beleggen zonder fondsmanager of ingewikkelde beslissingen.</p>
            <p className="text-gray-600 leading-relaxed">Wil je weten hoe je concreet begint? Lees dan ons artikel over <Link to="/beleggen/beginnen-met-beleggen" className="text-brand-500 hover:underline">beginnen met beleggen</Link> of bekijk onze <Link to="/beleggen/degiro-review" className="text-brand-500 hover:underline">DEGIRO review</Link>.</p>
          </section>

        </div>

        {/* AFFILIATE CTA */}
        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Klaar om je eerste ETF te kopen?</h2>
          <p className="text-sm opacity-80 mb-5">Open een gratis account bij DEGIRO en handel gratis in ETF's via de kernselectie.</p>
          <a href={affiliateUrl('degiro', 'etf-artikel-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij DEGIRO →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar DEGIRO. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen.</p>

      </article>
    </>
  )
}
