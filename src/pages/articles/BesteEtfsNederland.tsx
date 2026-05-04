import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const etfs = [
  {
    naam: 'IWDA',
    volledigeNaam: 'iShares Core MSCI World',
    isin: 'IE00B4L5Y983',
    kosten: '0,20%',
    type: 'Wereldwijd, ontwikkelde landen',
    spreiding: '~1.500 bedrijven',
    voor: 'De klassieke kern van een lange termijn portefeuille',
  },
  {
    naam: 'VWCE',
    volledigeNaam: 'Vanguard FTSE All-World',
    isin: 'IE00BK5BQT80',
    kosten: '0,22%',
    type: 'Wereldwijd, inclusief opkomende markten',
    spreiding: '~3.700 bedrijven',
    voor: 'Wie alles in één fonds wil, geen losse EM-allocatie',
  },
  {
    naam: 'EMIM',
    volledigeNaam: 'iShares Core MSCI EM IMI',
    isin: 'IE00BKM4GZ66',
    kosten: '0,18%',
    type: 'Opkomende markten',
    spreiding: '~3.000 bedrijven',
    voor: 'Aanvulling op IWDA voor wereldwijde spreiding',
  },
  {
    naam: 'VUSA',
    volledigeNaam: 'Vanguard S&P 500',
    isin: 'IE00B3XXRP09',
    kosten: '0,07%',
    type: 'Verenigde Staten, large-cap',
    spreiding: '500 grootste Amerikaanse bedrijven',
    voor: 'Hoge weging in de VS, lagere kosten dan IWDA',
  },
  {
    naam: 'VHYL',
    volledigeNaam: 'Vanguard FTSE All-World High Dividend Yield',
    isin: 'IE00B8GKDB10',
    kosten: '0,29%',
    type: 'Wereldwijd, hoge dividend',
    spreiding: '~1.700 bedrijven',
    voor: 'Wie kwartaaldividend in cash wil ontvangen',
  },
]

export default function BesteEtfsNederland() {
  return (
    <>
      <SEO
        title="Beste ETF's voor Nederlandse beleggers in 2026"
        description="Welke ETF's zijn het meest geschikt voor Nederlandse beleggers? IWDA, VWCE, EMIM, VUSA en VHYL eerlijk vergeleken op kosten, spreiding en fiscaliteit."
        canonical="/beleggen/beste-etfs-nederland"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Beste ETF's voor Nederland</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">ETF's</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Beste ETF's voor Nederlandse beleggers in 2026
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>8 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            De meeste Nederlandse beleggers hebben aan twee of drie ETF's genoeg. Wereldwijd gespreid, lage kosten en een fiscaal slim domicilie. In dit artikel bespreken we vijf ETF's die het werk doen voor 95% van de beleggers, en leggen we uit welke combinatie bij jou past.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#waarop-letten" className="hover:text-brand-500">Waarop let je bij een ETF?</a></li>
            <li><a href="#vergelijking" className="hover:text-brand-500">De 5 beste ETF's vergeleken</a></li>
            <li><a href="#combinaties" className="hover:text-brand-500">Welke combinatie past bij jou?</a></li>
            <li><a href="#valkuilen" className="hover:text-brand-500">Veelgemaakte fouten</a></li>
            <li><a href="#starten" className="hover:text-brand-500">Hoe begin je?</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="waarop-letten">
            <h2 className="font-serif text-2xl font-normal mb-4">Waarop let je bij een ETF?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Niet elke ETF is geschikt voor een Nederlandse belegger. Vier punten zijn belangrijk. Ten eerste de lopende kosten, weergegeven als TER of Total Expense Ratio. Onder 0,30% is goed, onder 0,20% is uitstekend. Ten tweede het domicilie. ETF's met domicilie in Ierland of Luxemburg betalen minder Amerikaanse bronbelasting op dividend, dat scheelt direct rendement.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Ten derde de structuur. Accumulerende fondsen herbeleggen dividend automatisch en zijn fiscaal efficiënter in box 3. Distribuerende fondsen keren dividend uit, wat handig is als je inkomen wil. Ten vierde de spreiding. Hoe meer bedrijven, hoe lager het concentratierisico.</p>
            <p className="text-gray-600 leading-relaxed">Synthetische ETF's gebruiken swaps in plaats van fysiek aandelen aan te houden. Voor de meeste beleggers raden we fysieke replicatie aan, dat is transparanter en eenvoudiger te begrijpen.</p>
          </section>

          <section id="vergelijking">
            <h2 className="font-serif text-2xl font-normal mb-4">De 5 beste ETF's voor Nederlandse beleggers</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Onderstaande vijf ETF's hebben we geselecteerd op kosten, spreiding, fiscaliteit en bekendheid bij Nederlandse brokers. Alle vijf zijn fysiek replicerend en gevestigd in Ierland.</p>

            <div className="space-y-4">
              {etfs.map(etf => (
                <div key={etf.naam} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium text-sm">{etf.naam}</p>
                      <p className="text-xs text-gray-500">{etf.volledigeNaam}</p>
                    </div>
                    <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full">{etf.kosten}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs text-gray-500 mb-3">
                    <div>
                      <p className="text-gray-400">ISIN</p>
                      <p className="text-gray-700 font-mono">{etf.isin}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Spreiding</p>
                      <p className="text-gray-700">{etf.spreiding}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-400">Type</p>
                      <p className="text-gray-700">{etf.type}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                    <span className="font-medium text-gray-700">Geschikt voor:</span> {etf.voor}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="combinaties">
            <h2 className="font-serif text-2xl font-normal mb-4">Welke combinatie past bij jou?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">De juiste keuze hangt af van je doel en hoeveel je wil sleutelen. Voor wie het simpel wil houden, is één wereld-ETF voldoende. Voor wie meer controle wil over de regio's, kan een combinatie kiezen.</p>

            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-4">
              <p className="font-medium text-sm text-brand-700 mb-2">Voor de absolute beginner</p>
              <p className="text-xs text-gray-600 leading-relaxed">100% VWCE. Eén fonds, wereldwijd gespreid inclusief opkomende markten. Je hoeft niets meer te doen. Ideaal voor wie maandelijks 50 tot 200 euro inlegt.</p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-4">
              <p className="font-medium text-sm text-brand-700 mb-2">Voor de kostenbewuste belegger</p>
              <p className="text-xs text-gray-600 leading-relaxed">88% IWDA en 12% EMIM. Iets goedkoper dan VWCE, plus je kunt zelf bepalen hoeveel opkomende markten je wil. Vraagt om jaarlijkse herbalans.</p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mb-4">
              <p className="font-medium text-sm text-brand-700 mb-2">Voor wie cash dividend wil</p>
              <p className="text-xs text-gray-600 leading-relaxed">70% VWCE en 30% VHYL. Je behoudt de wereldwijde spreiding maar krijgt elke drie maanden een dividenduitkering op je rekening.</p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
              <p className="font-medium text-sm text-brand-700 mb-2">Voor wie sterk in de VS gelooft</p>
              <p className="text-xs text-gray-600 leading-relaxed">60% VUSA en 40% IWDA. Je verhoogt je VS-weging, accepteert minder spreiding maar betaalt slechts 0,12% gemiddelde TER.</p>
            </div>
          </section>

          <section id="valkuilen">
            <h2 className="font-serif text-2xl font-normal mb-4">Veelgemaakte fouten</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Beginners stapelen vaak vijf of zes ETF's op elkaar zonder te beseffen dat ze grotendeels dezelfde aandelen kopen. Een wereld-ETF, een S&P 500-ETF en een Nasdaq-ETF lijken gespreid, maar bevatten dezelfde Apple-, Microsoft- en Nvidia-aandelen drie keer. Houd het simpel.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Een andere veelgemaakte fout is jagen op rendement. Wie achter de hot ETF's van vorig jaar aanloopt, koopt vaak op de top. Kies één strategie en houd die minstens vijf jaar vol. De magie zit in saaiheid en consistentie.</p>
            <p className="text-gray-600 leading-relaxed">Tot slot: laat je niet verleiden door thematische ETF's zoals robotica, waterstof of cannabis. De kosten zijn hoog, de spreiding laag en de prestaties op lange termijn meestal teleurstellend.</p>
          </section>

          <section id="starten">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe begin je?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Bij DEGIRO en Trading 212 vind je alle vijf ETF's terug. Bij DEGIRO valt IWDA, EMIM, VUSA en VWCE in de Kernselectie, dus krijg je één gratis transactie per maand. Bij Trading 212 zijn alle transacties altijd gratis en kun je zelfs fractioneel beleggen vanaf 1 euro.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <Link to="/beleggen/iwda-etf" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">IWDA uitgelegd</p>
                  <p className="text-xs text-gray-400">Diepere uitleg over IWDA</p>
                </div>
              </Link>
              <Link to="/tools/broker-vergelijker" className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-brand-500 transition-colors group">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                </div>
                <div>
                  <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Broker vergelijker</p>
                  <p className="text-xs text-gray-400">Vind de beste broker voor jouw ETF's</p>
                </div>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed">De beste ETF voor de meeste Nederlandse beleggers is VWCE of de combinatie IWDA plus EMIM. Lage kosten, wereldwijde spreiding en fiscaal slim. Wie kwartaaldividend wil, voegt VHYL toe. Wie voorkeur heeft voor de VS kijkt naar VUSA. Bouw een portefeuille die je vijf, tien of twintig jaar kunt volhouden zonder eraan te sleutelen. Voor verdere uitleg over indexbeleggen lees je <Link to="/beleggen/wat-is-een-etf" className="text-brand-500 hover:underline">ons artikel over wat een ETF is</Link>.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Begin met ETF's beleggen</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een account bij DEGIRO en koop één van de Kernselectie-ETF's gratis per maand.</p>
          <a href={affiliateUrl('degiro', 'beste-etfs-nederland-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij DEGIRO →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat affiliate links. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee. Je kunt (een deel van) je inleg verliezen. Dit artikel is informatief bedoeld en vormt geen financieel advies.</p>

      </article>
    </>
  )
}
