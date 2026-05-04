import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const voordelen = [
  'Voorspelbaar inkomen, vaak per kwartaal of zelfs per maand',
  'Mentaal makkelijker om aan vast te houden tijdens beurscorrecties',
  'Geschikt als aanvulling op pensioen of als gedeeltelijk vervangend inkomen',
  'Je hoeft geen aandelen te verkopen om cash te krijgen',
]

const nadelen = [
  'Lager totaalrendement op lange termijn dan brede groei-indexen',
  'Dividend is geen garantie, bedrijven kunnen uitkeringen verlagen of schrappen',
  'Fiscaal minder efficiënt dan accumulerende ETF\'s zoals IWDA',
  'Veel werk om individuele dividend-aandelen te selecteren en monitoren',
]

export default function DividendBeleggen() {
  return (
    <>
      <SEO
        title="Dividend beleggen: zo bouw je passief inkomen op in 2026"
        description="Hoe werkt dividend beleggen en levert het echt passief inkomen op? Strategie, ETF's, fiscale aspecten en valkuilen voor Nederlandse beleggers."
        canonical="/beleggen/dividend-beleggen"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Dividend beleggen</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Dividend</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Dividend beleggen: zo bouw je passief inkomen op in 2026
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Dividend beleggen is in Nederland sterk in opkomst. Voor wie een tweede inkomensstroom wil, voelt het aantrekkelijk: bedrijven storten elk kwartaal een deel van hun winst op je rekening. Maar er zit een keerzijde aan. In dit artikel leggen we uit hoe dividend beleggen werkt, waarom het niet altijd de beste keuze is en hoe je het slim aanpakt.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is" className="hover:text-brand-500">Wat is dividend beleggen?</a></li>
            <li><a href="#hoe-werkt" className="hover:text-brand-500">Hoe werkt dividenduitkering?</a></li>
            <li><a href="#strategie" className="hover:text-brand-500">Twee strategieën uitgelegd</a></li>
            <li><a href="#fiscaal" className="hover:text-brand-500">Fiscale aspecten in Nederland</a></li>
            <li><a href="#voor-en-nadelen" className="hover:text-brand-500">Voor- en nadelen</a></li>
            <li><a href="#starten" className="hover:text-brand-500">Hoe begin je?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is dividend beleggen?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Dividend is een deel van de winst dat een bedrijf uitkeert aan zijn aandeelhouders. Beleggers die zich richten op dividend kiezen bewust voor bedrijven die regelmatig en vaak stijgend dividend betalen. Het idee is dat je niet hoeft te verkopen om cash te krijgen. Je portefeuille blijft staan, maar je rekening krijgt elk kwartaal of zelfs elke maand een storting.</p>
            <p className="text-gray-600 leading-relaxed">Klassieke dividend-aandelen zijn vaak grote, stabiele bedrijven uit sectoren als energie, banken, verzekeringen en consumentengoederen. Denk aan Shell, ASR, ING, Unilever of het Amerikaanse Coca-Cola en Johnson & Johnson. Bedrijven die al decennia dividend uitkeren noemen we soms dividend aristocraten.</p>
          </section>

          <section id="hoe-werkt">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt een dividenduitkering?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een bedrijf maakt jaarlijks winst en de directie besluit hoeveel daarvan wordt uitgekeerd als dividend en hoeveel wordt geherinvesteerd. Het uitkeringspercentage heet de payout ratio. Een gezond bedrijf keert vaak 30% tot 60% van de winst uit, zodat er nog ruimte is voor groei en buffers.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Om recht te hebben op de uitkering moet je het aandeel bezitten op de zogeheten ex-dividenddatum. Daarna duurt het meestal twee tot vier weken voor het bedrag op je rekening staat. De koers van het aandeel daalt op de ex-dag met ongeveer het uitgekeerde bedrag, dus dividend is geen gratis geld. Het is je eigen vermogen dat van het bedrijf naar jouw rekening verschuift.</p>
            <p className="text-gray-600 leading-relaxed">Het dividendrendement bereken je door het jaarlijkse dividend te delen door de aandelenkoers. Een aandeel van 50 euro dat 2 euro dividend per jaar uitkeert heeft een rendement van 4%. Een gezond dividendrendement ligt vaak tussen 2% en 5%. Boven 7% wordt het verdacht, dat duidt vaak op een aandeel dat sterk gedaald is omdat de markt twijfelt aan de toekomst van het bedrijf.</p>
          </section>

          <section id="strategie">
            <h2 className="font-serif text-2xl font-normal mb-4">Twee strategieën uitgelegd</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Er zijn grofweg twee benaderingen voor dividend beleggen. Welke beter past hangt af van hoeveel tijd je erin wil steken.</p>

            <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
              <p className="font-medium text-sm text-gray-800 mb-2">Strategie 1: Dividend-ETF's</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">Met één ETF zoals VHYL koop je in één klap honderden dividend-aandelen wereldwijd. Je hoeft niets te selecteren, de uitkeringen lopen automatisch via je broker. Kosten ongeveer 0,29% per jaar. Geschikt voor wie het simpel wil houden.</p>
              <p className="text-xs text-gray-500"><span className="font-medium">Voorbeelden:</span> VHYL, FUSD, ZPRG</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="font-medium text-sm text-gray-800 mb-2">Strategie 2: Individuele dividend-aandelen</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">Je selecteert zelf 15 tot 30 bedrijven met een sterke dividendgeschiedenis. Meer werk, maar je kunt sturen op kwaliteit en sectorverdeling. Vraagt om jaarlijkse evaluatie van elk aandeel.</p>
              <p className="text-xs text-gray-500"><span className="font-medium">Voorbeelden:</span> ASR Nederland, ING, Shell, Unilever, Coca-Cola, Johnson & Johnson</p>
            </div>
          </section>

          <section id="fiscaal">
            <h2 className="font-serif text-2xl font-normal mb-4">Fiscale aspecten in Nederland</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bij Nederlandse aandelen wordt automatisch 15% dividendbelasting ingehouden door het bedrijf. Die 15% kun je terugvragen via je aangifte inkomstenbelasting, want het wordt verrekend met je box 3-belasting. Bij Amerikaanse aandelen geldt 15% bronbelasting (mits je een W-8BEN-formulier hebt ingevuld bij je broker).</p>
            <p className="text-gray-600 leading-relaxed mb-4">Voor accumulerende ETF's zoals IWDA hoef je niets te doen, dividend wordt direct binnen het fonds herbelegd zonder uitkering aan jou. Voor distribuerende ETF's zoals VHYL ontvang je dividend op je rekening na inhouding van 15% Nederlandse dividendbelasting, die je terugkrijgt via de aangifte.</p>
            <p className="text-gray-600 leading-relaxed">Vanaf 2027 verandert box 3 naar belasting op werkelijk rendement. Voor dividendbeleggers betekent dit dat ontvangen dividend direct meetelt als rendement. Accumulerende ETF's blijven fiscaal vriendelijker omdat de waardestijging vaak pas bij verkoop wordt belast. Voor de exacte regels zie de <a href="https://www.belastingdienst.nl" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">Belastingdienst</a>.</p>
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

          <section id="starten">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe begin je met dividend beleggen?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Het simpelste startpunt is een dividend-ETF zoals VHYL bij DEGIRO of Trading 212. Voor wie individuele aandelen wil, raden we aan om met minimaal 15 verschillende bedrijven uit verschillende sectoren te beginnen, zodat een dividendverlaging bij één bedrijf je inkomen niet wegtikt.</p>

            <div className="space-y-3 mb-6">
              {[
                { stap: '1', titel: 'Bepaal je doel', tekst: 'Wil je over twintig jaar 500 euro per maand aan dividend? Bij 4% rendement heb je dan ongeveer 150.000 euro nodig in dividend-aandelen.' },
                { stap: '2', titel: 'Kies je instrument', tekst: 'Beginners starten met een ETF zoals VHYL. Wie tijd heeft en het leuk vindt, bouwt een eigen portefeuille van 15 tot 30 aandelen.' },
                { stap: '3', titel: 'Herbeleg in het begin', tekst: 'Zolang je nog opbouwt, herbeleg je het dividend automatisch in nieuwe aandelen. Pas op je doelvermogen geef je jezelf het inkomen.' },
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
                  <p className="text-xs text-gray-400">Bereken je dividendinkomen</p>
                </div>
              </Link>
              <Link to="/beleggen/beste-etfs-nederland" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Beste ETF's Nederland</p>
                  <p className="text-xs text-gray-400">Inclusief de beste dividend-ETF's</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed">Dividend beleggen is voor veel mensen psychologisch aantrekkelijk. Een vaste maandelijkse of kwartaaluitkering voelt tastbaarder dan papierwinst die je niet ziet. Voor wie nog vermogen aan het opbouwen is, leveren accumulerende wereld-ETF's zoals <Link to="/beleggen/iwda-etf" className="text-brand-500 hover:underline">IWDA</Link> historisch een hoger totaalrendement op. Wie dichter bij pensioen staat of een gedeeltelijk inkomen wil, kan een deel van de portefeuille naar dividend verschuiven via VHYL of een eigen aandelenmandje. Combineer beide werelden voor het beste van twee.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Begin met dividend beleggen</h2>
          <p className="text-sm opacity-80 mb-5">Open een gratis rekening bij DEGIRO en koop direct VHYL of individuele dividend-aandelen.</p>
          <a href={affiliateUrl('degiro', 'dividend-beleggen-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij DEGIRO →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar DEGIRO. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen. Dit artikel is informatief bedoeld en vormt geen financieel advies.</p>

      </article>
    </>
  )
}
