import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const dosenDonts = [
  { type: 'do', tekst: 'Begin met een klein bedrag dat je kunt missen, bijvoorbeeld 100 of 200 euro' },
  { type: 'do', tekst: 'Spreid over minimaal 10 verschillende bedrijven uit verschillende sectoren' },
  { type: 'do', tekst: 'Lees het jaarverslag van het bedrijf voordat je koopt' },
  { type: 'do', tekst: 'Bouw een lange-termijn-mentaliteit op, denk in jaren, niet in weken' },
  { type: 'dont', tekst: 'Koop nooit aandelen op basis van een TikTok of Instagram-tip' },
  { type: 'dont', tekst: 'Stop nooit je hele spaargeld in één bedrijf, hoe goed het ook lijkt' },
  { type: 'dont', tekst: 'Gebruik geen geleend geld of hefboomproducten als beginner' },
  { type: 'dont', tekst: 'Verkoop niet in paniek bij de eerste koerscorrectie' },
]

export default function AandelenKopenBeginner() {
  return (
    <>
      <SEO
        title="Aandelen kopen als beginner: stappenplan 2026"
        description="Voor het eerst aandelen kopen? In dit stappenplan leer je hoe je veilig start, dure fouten voorkomt en een gespreide portefeuille opbouwt als beginner."
        canonical="/beleggen/aandelen-kopen-beginner"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Aandelen kopen als beginner</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Aandelen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Aandelen kopen als beginner: zo doe je het veilig
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>6 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Voor de meeste beginners is het slimmer om eerst in een wereld-ETF te beleggen dan in losse aandelen. Maar als je eenmaal de basis snapt en met een klein deel van je portefeuille wil leren, kunnen individuele aandelen leerzaam en leuk zijn. In dit artikel leggen we uit hoe je dat doet zonder dure fouten te maken.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-zijn" className="hover:text-brand-500">Wat zijn aandelen precies?</a></li>
            <li><a href="#waarom" className="hover:text-brand-500">Waarom losse aandelen kopen?</a></li>
            <li><a href="#stappenplan" className="hover:text-brand-500">Het stappenplan in 6 stappen</a></li>
            <li><a href="#kiezen" className="hover:text-brand-500">Hoe kies je een aandeel?</a></li>
            <li><a href="#dos-and-donts" className="hover:text-brand-500">Do's en don'ts</a></li>
            <li><a href="#starten" className="hover:text-brand-500">Welke broker kies je?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-zijn">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat zijn aandelen precies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een aandeel is een klein stukje eigendom van een bedrijf. Als je een aandeel ASML koopt, ben je officieel mede-eigenaar. Je hebt recht op een deel van de winst (in de vorm van dividend of koersstijging) en je mag stemmen op de aandeelhoudersvergadering. In de praktijk is dat stemrecht voor kleine beleggers symbolisch.</p>
            <p className="text-gray-600 leading-relaxed">De waarde van een aandeel verandert dagelijks op de beurs. Veel kopers en weinig verkopers? De koers stijgt. Andersom daalt de koers. Op lange termijn volgt de koers de winstgroei van het bedrijf, op korte termijn vooral de stemming van beleggers.</p>
          </section>

          <section id="waarom">
            <h2 className="font-serif text-2xl font-normal mb-4">Waarom losse aandelen kopen in plaats van ETF's?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Eerlijk antwoord: meestal is het niet slimmer. Onderzoek laat steeds opnieuw zien dat ruim 80% van de actieve beleggers en zelfs van de professionele fondsmanagers het langjarig niet beter doet dan een wereld-ETF. Voor de meeste mensen is een gespreid <Link to="/beleggen/wat-is-een-etf" className="text-brand-500 hover:underline">indexfonds</Link> de beste keuze.</p>
            <p className="text-gray-600 leading-relaxed">Toch kunnen losse aandelen waardevol zijn. Je leert hoe een bedrijf werkt, je begrijpt beter wat je bezit en je kunt overtuiging in een specifiek bedrijf uitdrukken. Een gangbare verhouding voor beginners is 80% in een wereld-ETF en 20% in losse aandelen om mee te oefenen. Dat noem je een core-satellite strategie.</p>
          </section>

          <section id="stappenplan">
            <h2 className="font-serif text-2xl font-normal mb-4">Het stappenplan in 6 stappen</h2>
            <div className="space-y-3 mb-6">
              {[
                { stap: '1', titel: 'Zet eerst je financiële basis op orde', tekst: 'Heb je een noodfonds van drie tot zes maanden uitgaven? Geen dure schulden? Pas dán is beleggen verstandig. Lees ook ons artikel over uit de schulden komen.' },
                { stap: '2', titel: 'Open een beleggingsrekening', tekst: 'Voor losse Nederlandse en Amerikaanse aandelen zijn DEGIRO en Trading 212 de bekendste keuzes. Beide werken goed voor beginners.' },
                { stap: '3', titel: 'Stort een bedrag dat je kunt missen', tekst: 'Begin klein. 100 tot 500 euro is genoeg om te leren. Verhoog pas wanneer je weet wat je doet en je geen slapeloze nachten hebt van koersdalingen.' },
                { stap: '4', titel: 'Kies 5 tot 10 bedrijven uit verschillende sectoren', tekst: 'Spreid over technologie, financieel, energie, gezondheidszorg en consumentengoederen. Eén bedrijf per sector houdt het overzichtelijk.' },
                { stap: '5', titel: 'Plaats je eerste order', tekst: 'Kies een limietorder, dan koop je tegen een prijs die jij vooraf vastlegt. Een marktorder kan in volatiele markten veel slechter uitvallen.' },
                { stap: '6', titel: 'Evalueer één keer per jaar', tekst: 'Kijk niet dagelijks naar je portefeuille, dat leidt tot paniekverkopen. Eén keer per jaar je strategie evalueren is meer dan genoeg.' },
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

          <section id="kiezen">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe kies je een goed aandeel?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Er bestaat geen perfecte formule, maar er zijn een paar checks die je kunt doen om de grootste valkuilen te vermijden. Kijk naar de winstgroei van de afgelopen vijf jaar: een bedrijf dat consistent winst maakt en die groei laat zien is meestal stabieler dan een verlieslatend bedrijf met een mooi verhaal.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Bekijk de schuldpositie. Bedrijven met enorme schulden zijn kwetsbaar als de rente stijgt of de markt tegenzit. Een gezonde verhouding tussen schuld en eigen vermogen is meestal onder 1,5. Kijk ook naar de price-earnings ratio (P/E). Onder 20 is meestal redelijk, boven 40 is duur en betekent dat je veel groei moet kopen voor je geld.</p>
            <p className="text-gray-600 leading-relaxed">Tot slot: koop alleen wat je begrijpt. Als je niet kunt uitleggen wat een bedrijf doet en hoe het geld verdient, sla dat aandeel dan over. Warren Buffett, een van de bekendste beleggers ter wereld, houdt zich al zestig jaar aan deze regel.</p>
          </section>

          <section id="dos-and-donts">
            <h2 className="font-serif text-2xl font-normal mb-4">Do's en don'ts voor beginners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Wel doen</p>
                <ul className="space-y-2">
                  {dosenDonts.filter(d => d.type === 'do').map(item => (
                    <li key={item.tekst} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item.tekst}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-medium text-sm text-gray-700 mb-3">Niet doen</p>
                <ul className="space-y-2">
                  {dosenDonts.filter(d => d.type === 'dont').map(item => (
                    <li key={item.tekst} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {item.tekst}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="starten">
            <h2 className="font-serif text-2xl font-normal mb-4">Welke broker kies je als beginner?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Voor losse aandelen werken in Nederland twee brokers het best. DEGIRO is de bekendste, met een Nederlandse vergunning en lage transactiekosten van 1 tot 3 euro per order voor de meeste markten. Trading 212 rekent geen transactiekosten en biedt fractioneel beleggen, dus je kunt voor 1 euro een stukje van een Apple-aandeel kopen.</p>
            <p className="text-gray-600 leading-relaxed">Voor een diepere vergelijking lees je <Link to="/beleggen/degiro-vs-trading-212" className="text-brand-500 hover:underline">ons artikel DEGIRO vs Trading 212</Link> of gebruik onze <Link to="/tools/broker-vergelijker" className="text-brand-500 hover:underline">broker vergelijker</Link>.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 mb-6">
              <Link to="/beleggen/beginnen-met-beleggen" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Beginnen met beleggen</p>
                  <p className="text-xs text-gray-400">De volledige startersgids</p>
                </div>
              </Link>
              <Link to="/beleggen/dividend-beleggen" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Dividend beleggen</p>
                  <p className="text-xs text-gray-400">Passief inkomen uit aandelen</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed">Aandelen kopen als beginner kan, maar doe het bewust en met klein geld. Bouw eerst een gespreide kern op met een wereld-ETF zoals <Link to="/beleggen/iwda-etf" className="text-brand-500 hover:underline">IWDA</Link>. Daarna kun je 10 tot 20% van je portefeuille gebruiken voor losse aandelen om te leren. Houd je aan de basisregels, neem de tijd en accepteer dat je in het begin fouten gaat maken. Dat is het leergeld dat elke belegger betaalt.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Begin met aandelen kopen</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een rekening bij DEGIRO of Trading 212 en koop je eerste aandeel binnen 10 minuten.</p>
          <a href={affiliateUrl('trading212', 'aandelen-kopen-beginner-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij Trading 212 →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat affiliate links. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen. Dit artikel is informatief bedoeld en vormt geen financieel advies.</p>

      </article>
    </>
  )
}
