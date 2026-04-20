import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const renteRijen = [
  { jaar: 1, ingelegd: 2400, rendement: 84, eind: 2484 },
  { jaar: 2, ingelegd: 4800, rendement: 258, eind: 5058 },
  { jaar: 3, ingelegd: 7200, rendement: 523, eind: 7723 },
  { jaar: 5, ingelegd: 12000, rendement: 1428, eind: 13428 },
  { jaar: 10, ingelegd: 24000, rendement: 10616, eind: 34616 },
  { jaar: 20, ingelegd: 48000, rendement: 56492, eind: 104492 },
  { jaar: 30, ingelegd: 72000, rendement: 171994, eind: 243994 },
]

export default function BeginnenMetBeleggen() {
  return (
    <>
      <SEO
        title="Beginnen met beleggen in 2026: de complete gids voor beginners"
        description="Alles wat je moet weten om te starten met beleggen. Van je eerste ETF tot een beleggingsrekening openen. Begrijpelijk uitgelegd zonder jargon."
        canonical="/beleggen/beginnen-met-beleggen"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Beginnen met beleggen</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Beleggen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Beginnen met beleggen in 2026: de complete gids voor beginners
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>8 min leestijd</span>
            <span>Bijgewerkt april 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Beleggen kan een van de slimste dingen zijn die je doet met geld dat je niet direct nodig hebt. Toch schrikt het anno 2026 nog steeds veel mensen af: te ingewikkeld, te risicovol, iets voor mensen met veel geld. Bij veel mensen is het ook een kwestie van de juiste richting op gestuurd worden en de juiste handvatten hebben.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is-beleggen" className="hover:text-brand-500">Wat is beleggen?</a></li>
            <li><a href="#waarom-beleggen" className="hover:text-brand-500">Waarom zou je beginnen?</a></li>
            <li><a href="#risicos" className="hover:text-brand-500">Wat zijn de risico's?</a></li>
            <li><a href="#soorten" className="hover:text-brand-500">Welke soorten beleggingen zijn er?</a></li>
            <li><a href="#hoeveel" className="hover:text-brand-500">Hoeveel geld heb je nodig?</a></li>
            <li><a href="#rekening" className="hover:text-brand-500">Hoe open je een beleggingsrekening?</a></li>
            <li><a href="#stappenplan" className="hover:text-brand-500">Stappenplan voor beginners</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is-beleggen">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is beleggen?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Beleggen betekent dat je geld investeert met als doel dat het in waarde groeit. In plaats van je geld op een spaarrekening te laten staan waar het nauwelijks rente oplevert, zet je het aan het werk.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Zo kun je ervoor kiezen om je geld te investeren in de aandelen van een bedrijf. Hiermee word je in feite mede-eigenaar van dat bedrijf. Als dat bedrijf groeit en meer waard wordt, stijgt de waarde van jouw aandeel mee. Je kunt het later verkopen voor meer dan je ervoor betaalde. Het verschil daartussen is jouw winst.</p>
            <p className="text-gray-600 leading-relaxed">Klinkt simpel toch? En dat is het ook, in de basis. Maar er zijn wel risico's. Bedrijven kunnen ook tijdelijk minder waard worden. Aandelen kunnen dalen. Dat is normaal en hoort erbij. Verderop in dit artikel leggen we uit hoe je daarmee omgaat.</p>
          </section>

          <section id="waarom-beleggen">
            <h2 className="font-serif text-2xl font-normal mb-4">Waarom zou je beginnen met beleggen?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Stel je legt €200 per maand in op een spaarrekening met 2% rente. Na 20 jaar heb je dan zo'n €59.000. Leg je datzelfde bedrag in op een beleggingsrekening met gemiddeld 7% rendement per jaar, dan heb je na 20 jaar ruim €104.000. Meer dan het dubbele, met dezelfde inleg.</p>
            <p className="text-gray-600 leading-relaxed mb-5">Dat verschil heet het rente-op-rente effect. Je verdient niet alleen rendement op je inleg, maar ook op het rendement van vorige jaren. Zie hieronder hoe dat er in de praktijk uitziet:</p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-5">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Rente-op-rente effect: €200 per maand bij 7% rendement</p>
              </div>
              <table className="w-full text-sm" style={{tableLayout: 'fixed'}}>
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Jaar</th>
                    <th className="py-2.5 px-4 text-right text-xs font-medium text-gray-500">Zelf ingelegd</th>
                    <th className="py-2.5 px-4 text-right text-xs font-medium text-gray-500">Rendement</th>
                    <th className="py-2.5 px-4 text-right text-xs font-medium text-gray-500">Eindwaarde</th>
                  </tr>
                </thead>
                <tbody>
                  {renteRijen.map((r, i) => (
                    <tr key={r.jaar} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-gray-500">Jaar {r.jaar}</td>
                      <td className="py-2.5 px-4 text-right text-gray-700">€{r.ingelegd.toLocaleString('nl')}</td>
                      <td className="py-2.5 px-4 text-right font-medium text-brand-500">+€{r.rendement.toLocaleString('nl')}</td>
                      <td className="py-2.5 px-4 text-right font-medium text-gray-900">€{r.eind.toLocaleString('nl')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">Naast het rente-op-rente effect is inflatie een andere reden om te beleggen. Geld dat op een spaarrekening staat, wordt elk jaar minder waard door stijgende prijzen. Als de inflatie 3% per jaar is maar je spaarrente slechts 2%, verlies je per saldo koopkracht. Beleggingen in aandelen en ETFs volgen historisch gezien de groei van de economie, die op de lange termijn doorgaans harder stijgt dan inflatie.</p>
          </section>

          <section id="risicos">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat zijn de risico's?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Uiteraard zitten er ook risico's aan beleggen. Eerlijk zijn hierover is belangrijk. Beleggen is geen garantie op winst. De waarde van beleggingen kan stijgen maar ook dalen. Een mooie vuistregel: hoe hoger het potentiële rendement, des te hoger het risico.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Maar er zijn manieren om risico te beperken:</p>
            <div className="space-y-3">
              {[
                { titel: 'Beleg alleen geld dat je kunt missen', tekst: 'Dit is wat mij betreft de absolute regel nummer één. Zorg eerst voor een noodfonds van drie tot zes maanden aan vaste lasten. Geld dat je misschien snel nodig hebt, hoort niet in beleggingen.' },
                { titel: 'Beleg voor de lange termijn', tekst: 'Op korte termijn kunnen beurzen flink schommelen. Maar over een periode van 10, 15 of 20 jaar zijn beurzen historisch gezien altijd gestegen. Wie geduld heeft, wordt vaak beloond.' },
                { titel: 'Spreid je beleggingen', tekst: 'Leg niet al je geld in één belegging. Wie in honderden bedrijven tegelijk belegt, heeft veel minder last van één bedrijf dat het slecht doet. Dit doe je eenvoudig via een ETF.' },
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

          <section id="soorten">
            <h2 className="font-serif text-2xl font-normal mb-4">Welke soorten beleggingen zijn er?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Er zijn veel manieren om te beleggen. Hieronder vijf soorten die de laatste jaren populair zijn.</p>
            <div className="space-y-3">
              {[
                { titel: 'Aandelen', tekst: 'Een aandeel is een klein stukje eigendom van een bedrijf. Koop je een aandeel van Apple of ASML, dan ben je voor een klein percentage mede-eigenaar. Individuele aandelen kunnen flink schommelen en zijn geschikt voor mensen die wat meer risico willen nemen.' },
                { titel: 'ETFs', tekst: 'Een ETF, ook wel indextracker, is een beleggingsfonds dat een index volgt zoals de AEX of S&P 500. Met één aankoop spreid je over honderden bedrijven tegelijk. De VWRL volgt de gehele wereldeconomie. Voor de meeste beginners de slimste keuze.' },
                { titel: 'Obligaties', tekst: 'Leningen aan bedrijven of overheden. Je ontvangt een vaste rente en krijgt je geld na een bepaalde periode terug. Minder risicovol dan aandelen, maar ook minder rendement.' },
                { titel: 'Grondstoffen en edelmetalen', tekst: 'Goud, zilver en olie zijn veelgenoemde voorbeelden. Worden vaak gebruikt voor spreiding of bescherming tegen inflatie.' },
                { titel: 'Cryptocurrencies', tekst: 'De jongste beleggingscategorie. Cryptomunten zijn digitale betaalmiddelen op een blockchain. Hoog risico, maar ook potentieel hoog rendement.' },
              ].map(item => (
                <div key={item.titel} className="border border-gray-100 rounded-xl p-4">
                  <p className="font-medium text-sm text-brand-500 mb-1.5">{item.titel}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.tekst}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="hoeveel">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoeveel geld heb je nodig om te beginnen?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Veel minder dan je denkt. Bij de meeste brokers kun je al beginnen met een paar euro. Wat goed werkt is een vaste maandelijkse inleg. Of dat nou €10, €100 of €200 per maand is maakt niet zoveel uit, zolang je maar consistent bent.</p>
            <p className="text-gray-600 leading-relaxed">Door elke maand een vast bedrag in te leggen, koop je soms op een hoog punt en soms op een laag punt. Dat middelt zich over de tijd uit en werkt uiteindelijk in je voordeel.</p>
          </section>

          <section id="rekening">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe open je een beleggingsrekening?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Om te beleggen heb je een beleggingsrekening nodig bij een broker. Een broker is een platform dat je toegang geeft tot de beurs. De populairste voor beginners in Nederland is DEGIRO:</p>
            <div className="bg-gray-50 rounded-xl p-5 mb-4">
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Lage kosten per transactie',
                  'Toegang tot meer dan 50 beurzen wereldwijd',
                  'Gratis beleggen in honderden ETFs via de kernselectie',
                  'Eenvoudig platform, ook voor beginners te begrijpen',
                  'Gereguleerd door de AFM',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">Een account openen bij DEGIRO duurt ongeveer tien minuten. Je vult je gegevens in, verifieert je identiteit met je paspoort of ID en koppelt je bankrekening. Daarna kun je direct geld storten en beginnen.</p>
            <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
              <p className="text-sm text-brand-700">Wil je weten of DEGIRO de beste keuze voor jou is? Lees onze uitgebreide <Link to="/beleggen/degiro-review" className="underline font-medium">DEGIRO review</Link>.</p>
            </div>
          </section>

          <section id="stappenplan">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat kun je het beste doen als beginner?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Houd het zo simpel mogelijk. Dit stappenplan werkt voor de meeste beginners:</p>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Zorg voor een noodfonds', tekst: 'Drie tot zes maanden aan vaste lasten op een spaarrekening. Dit geld beleg je niet.' },
                { stap: '2', titel: 'Open een beleggingsrekening', tekst: 'Kies een betrouwbare broker. DEGIRO is voor de meeste beginners de beste keuze.' },
                { stap: '3', titel: 'Kies een ETF', tekst: 'Begin met één breed gespreide ETF zoals de VWRL of IWDA. Deze volgen de gehele wereldeconomie.' },
                { stap: '4', titel: 'Leg elke maand een vast bedrag in', tekst: 'Stel een automatische overboeking in. Zo beleg je consequent zonder er elke maand over na te denken.' },
                { stap: '5', titel: 'Houd vol', tekst: 'Beleg voor de lange termijn en laat je niet gek maken door korte termijn schommelingen. De beurs gaat op en neer. Dat is normaal.' },
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
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Beleggen is echt geen rocket science. Met een goed gespreide ETF, een vaste maandelijkse inleg en geduld kom je al een heel eind. Begin zo vroeg mogelijk, ook als het maar een klein bedrag is. Elke maand dat je wacht is een maand dat je rente-op-rente effect misloopt.</p>
            <p className="text-gray-600 leading-relaxed">Benieuwd wat jouw beleggingen kunnen opbrengen? Bekijk onze gratis <Link to="/tools/compound-calculator" className="text-brand-500 hover:underline">rente-op-rente calculator</Link>.</p>
          </section>

        </div>

        <div className="mt-12 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Klaar om te beginnen met beleggen?</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een account bij DEGIRO. Geen maandelijkse kosten, al vanaf €1.</p>
          <a href={affiliateUrl('degiro', 'artikel-beleggen-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij DEGIRO →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen. Dit artikel is informatief en vormt geen financieel advies.</p>

      </article>
    </>
  )
}
