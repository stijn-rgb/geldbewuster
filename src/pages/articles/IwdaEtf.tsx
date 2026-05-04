import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const voordelen = [
  'Wereldwijd gespreid over ruim 1.500 grote bedrijven uit ontwikkelde landen',
  'Lage lopende kosten van slechts 0,20% per jaar',
  'Accumulerend, dus dividenden worden automatisch herbelegd',
  'Domicilie in Ierland, fiscaal aantrekkelijk voor Nederlandse beleggers',
  'Verhandelbaar bij vrijwel elke grote Nederlandse broker, waaronder DEGIRO en Trading 212',
]

const nadelen = [
  'Geen blootstelling aan opkomende markten zoals China of India',
  'Sterke weging in de Verenigde Staten, ruim 70% van de portefeuille',
  'Geen periodieke dividenduitkering, dus minder geschikt voor wie inkomen zoekt',
  'Valutarisico, want de fonds is genoteerd in dollars onder de hoofdomgeving',
]

export default function IwdaEtf() {
  return (
    <>
      <SEO
        title="IWDA ETF uitgelegd: alles wat je moet weten in 2026"
        description="IWDA is de populairste wereldwijde ETF onder Nederlandse beleggers. Lees in 7 minuten wat IWDA precies is, wat de kosten zijn en hoe je er in belegt."
        canonical="/beleggen/iwda-etf"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">IWDA ETF</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">ETF's</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            IWDA ETF: alles wat je moet weten in 2026
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            IWDA is voor veel Nederlandse beleggers het hart van hun portefeuille. Eén fonds, ruim 1.500 grote bedrijven uit 23 ontwikkelde landen, automatische herbelegging van dividend en kosten van slechts 0,20% per jaar. In dit artikel leggen we uit wat IWDA precies is, voor wie het werkt en hoe je er vandaag nog in begint.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is" className="hover:text-brand-500">Wat is IWDA precies?</a></li>
            <li><a href="#opbouw" className="hover:text-brand-500">Opbouw van de portefeuille</a></li>
            <li><a href="#kosten" className="hover:text-brand-500">Kosten en rendement</a></li>
            <li><a href="#fiscaal" className="hover:text-brand-500">Fiscale behandeling in Nederland</a></li>
            <li><a href="#voor-en-nadelen" className="hover:text-brand-500">Voor- en nadelen</a></li>
            <li><a href="#alternatieven" className="hover:text-brand-500">Alternatieven en aanvullingen</a></li>
            <li><a href="#kopen" className="hover:text-brand-500">Hoe koop je IWDA?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is IWDA precies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">IWDA is de afkorting voor de iShares Core MSCI World UCITS ETF Acc. Dit fonds van vermogensbeheerder BlackRock volgt de MSCI World index, een mandje van ruim 1.500 grote bedrijven uit 23 ontwikkelde landen. Met één aankoop bezit je dus een klein stukje van bedrijven als Apple, Microsoft, ASML, Nestlé en Toyota.</p>
            <p className="text-gray-600 leading-relaxed">De toevoeging Acc staat voor accumulerend, wat betekent dat alle dividenden die de bedrijven uitkeren automatisch worden herbelegd in nieuwe aandelen. Je hoeft dus zelf niets te doen om je rendement te laten groeien. Dat maakt IWDA ideaal voor wie maandelijks inlegt en wil profiteren van rente-op-rente.</p>
          </section>

          <section id="opbouw">
            <h2 className="font-serif text-2xl font-normal mb-4">Opbouw van de portefeuille</h2>
            <p className="text-gray-600 leading-relaxed mb-5">De MSCI World index die IWDA volgt is sterk gespreid in aantal bedrijven, maar de geografische spreiding is wat ongelijk. Amerikaanse bedrijven domineren omdat de weging gebaseerd is op marktkapitalisatie. Hieronder een overzicht van de belangrijkste landen.</p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Geografische verdeling IWDA (mei 2026)</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Land</th>
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Weging</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { k: 'Verenigde Staten', t: 'ongeveer 71%' },
                    { k: 'Japan', t: 'ongeveer 6%' },
                    { k: 'Verenigd Koninkrijk', t: 'ongeveer 4%' },
                    { k: 'Frankrijk', t: 'ongeveer 3%' },
                    { k: 'Canada', t: 'ongeveer 3%' },
                    { k: 'Overige ontwikkelde landen', t: 'ongeveer 13%' },
                  ].map((r, i) => (
                    <tr key={r.k} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-gray-700">{r.k}</td>
                      <td className="py-2.5 px-4 text-gray-500">{r.t}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-5">Grote technologiebedrijven nemen samen ruim een vijfde van de portefeuille in beslag. Apple, Microsoft, Nvidia, Alphabet en Amazon zijn vaak goed voor 20% of meer van het totale vermogen. Dat is een sterke bias richting de Amerikaanse techsector waar je je bewust van moet zijn.</p>
          </section>

          <section id="kosten">
            <h2 className="font-serif text-2xl font-normal mb-4">Kosten en historisch rendement</h2>
            <p className="text-gray-600 leading-relaxed mb-4">De lopende kosten van IWDA zijn 0,20% per jaar. Deze worden direct verrekend in de koers, je ziet er dus geen aparte factuur van. Bij DEGIRO valt IWDA bovendien in de Kernselectie, waardoor je één gratis transactie per maand krijgt op dit fonds. Bij Trading 212 betaal je geen transactiekosten.</p>
            <p className="text-gray-600 leading-relaxed">Sinds de oprichting in 2009 leverde IWDA een gemiddeld jaarlijks rendement op van ongeveer 10% per jaar in dollars en zo'n 11% in euro's. Houd er wel rekening mee dat dit een terugblik is. Toekomstige rendementen kunnen lager liggen, en in slechte jaren kan de waarde tijdelijk 30% of meer dalen.</p>
          </section>

          <section id="fiscaal">
            <h2 className="font-serif text-2xl font-normal mb-4">Fiscale behandeling in Nederland</h2>
            <p className="text-gray-600 leading-relaxed mb-4">IWDA staat geregistreerd in Ierland. Dat is bewust, want Ierland heeft een gunstig belastingverdrag met de Verenigde Staten. Het fonds betaalt 15% bronbelasting op Amerikaans dividend in plaats van 30%. Dat scheelt direct rendement. Een Nederlandse versie van dezelfde index zou aanzienlijk meer dividendlek hebben.</p>
            <p className="text-gray-600 leading-relaxed">Voor jouw aangifte valt IWDA onder box 3, vermogensbelasting. Je geeft de waarde op 1 januari op bij de Belastingdienst. Vanaf 2027 verandert de berekening richting werkelijk rendement, maar IWDA blijft fiscaal aantrekkelijk omdat dividend wordt herbelegd en je dus niet jaarlijks belasting betaalt op uitkeringen.</p>
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

          <section id="alternatieven">
            <h2 className="font-serif text-2xl font-normal mb-4">Alternatieven en aanvullingen</h2>
            <p className="text-gray-600 leading-relaxed mb-4">IWDA dekt alleen ontwikkelde landen. Wil je ook opkomende markten meenemen, dan combineer je IWDA vaak met EMIM, een ETF die opkomende landen volgt. Een gangbare verdeling is 88% IWDA en 12% EMIM, wat samen ongeveer overeenkomt met de wereldindex MSCI ACWI.</p>
            <p className="text-gray-600 leading-relaxed">Een populair alternatief is VWCE van Vanguard. Dit fonds dekt direct ook opkomende markten, dus je hebt genoeg aan één positie. De kosten liggen iets hoger op 0,22% per jaar. Lees meer over de keuze tussen verschillende wereld-ETF's in ons artikel <Link to="/beleggen/wat-is-een-etf" className="text-brand-500 hover:underline">wat is een ETF</Link>.</p>
          </section>

          <section id="kopen">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe koop je IWDA in 2026?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">IWDA kopen werkt bij elke grote Nederlandse broker. Het ISIN-nummer is IE00B4L5Y983, dat hoef je in de zoekbalk te plakken. Hieronder de drie populairste manieren in Nederland.</p>
            <div className="space-y-3 mb-6">
              {[
                { stap: '1', titel: 'Open een beleggingsrekening', tekst: 'DEGIRO en Trading 212 zijn de twee meest gebruikte brokers. Bij DEGIRO valt IWDA in de Kernselectie, dus krijg je één gratis transactie per maand. Bij Trading 212 zijn alle transacties gratis.' },
                { stap: '2', titel: 'Stort en zoek IWDA op', tekst: 'Type het ISIN-nummer in of zoek op iShares Core MSCI World. Let op dat je de Acc-variant kiest (de Dist-variant keert dividend uit).' },
                { stap: '3', titel: 'Stel automatische inleg in', tekst: 'Beide brokers ondersteunen periodieke inleg. Hiermee koop je elke maand automatisch een vast bedrag aan IWDA, los van de koers. Dit heet ook wel dollar cost averaging.' },
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
              <Link to="/tools/compound-calculator" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Compound calculator</p>
                  <p className="text-xs text-gray-400">Bereken je rendement op IWDA</p>
                </div>
              </Link>
              <Link to="/beleggen/beginnen-met-beleggen" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Beginnen met beleggen</p>
                  <p className="text-xs text-gray-400">Het complete startersartikel</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed">IWDA is voor de meeste Nederlandse beleggers een uitstekende keuze als kern van de portefeuille. Lage kosten, brede spreiding, automatisch herbeleggen van dividend en een fiscaal slim domicilie in Ierland. Houd er wel rekening mee dat ruim 70% in de Verenigde Staten zit en dat opkomende markten ontbreken. Wie meer spreiding zoekt kan IWDA combineren met EMIM of kiezen voor VWCE. Voor de rest geldt: koop, blijf koppen, en laat de tijd zijn werk doen.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Begin met IWDA via DEGIRO</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een beleggingsrekening en koop IWDA met één gratis transactie per maand.</p>
          <a href={affiliateUrl('degiro', 'iwda-etf-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij DEGIRO →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar DEGIRO. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen. Dit artikel is informatief bedoeld en vormt geen financieel advies.</p>

      </article>
    </>
  )
}
