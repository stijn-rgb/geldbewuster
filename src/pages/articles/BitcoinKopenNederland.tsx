import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const exchanges = [
  { naam: 'Bitvavo', kenmerk: 'Nederlandse exchange, lage kosten (0,25%)', voor: 'Beginners en gevorderden in Nederland' },
  { naam: 'Kraken', kenmerk: 'Internationale exchange, veel handelsparen', voor: 'Wie ook andere crypto wil' },
  { naam: 'Coinbase', kenmerk: 'Bekende Amerikaanse exchange, hogere kosten', voor: 'Wie eenvoud belangrijker vindt dan kosten' },
]

export default function BitcoinKopenNederland() {
  return (
    <>
      <SEO
        title="Bitcoin kopen in Nederland 2026: veilig en goedkoop"
        description="Bitcoin kopen in Nederland in 2026? Stappenplan, vergelijking van exchanges, kosten, veiligheid en belastingen. Alles wat je moet weten als beginner."
        canonical="/beleggen/bitcoin-kopen-nederland"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">Bitcoin kopen in Nederland</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-orange-50 text-orange-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Crypto</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Bitcoin kopen in Nederland: veilig en goedkoop in 2026
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>6 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Bitcoin kopen is in 2026 makkelijker dan ooit. Een Nederlandse exchange als Bitvavo opent in vijftien minuten een account voor je en daarna kun je vanaf 1 euro je eerste fractie Bitcoin kopen. In dit artikel leggen we uit hoe je dat veilig doet, welke kosten je betaalt en wat je moet weten over belasting.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is-bitcoin" className="hover:text-brand-500">Wat is Bitcoin precies?</a></li>
            <li><a href="#waar-kopen" className="hover:text-brand-500">Waar koop je Bitcoin in Nederland?</a></li>
            <li><a href="#stappenplan" className="hover:text-brand-500">Stappenplan: Bitcoin kopen</a></li>
            <li><a href="#bewaren" className="hover:text-brand-500">Hoe bewaar je je Bitcoin veilig?</a></li>
            <li><a href="#kosten" className="hover:text-brand-500">Kosten en spread</a></li>
            <li><a href="#belasting" className="hover:text-brand-500">Belasting in box 3</a></li>
            <li><a href="#valkuilen" className="hover:text-brand-500">Veelgemaakte fouten</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is-bitcoin">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is Bitcoin precies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bitcoin is digitaal geld dat je via een wereldwijd computernetwerk verstuurt en ontvangt. Niemand bezit het netwerk, geen bank, geen regering, geen bedrijf. De waarde wordt bepaald door vraag en aanbod, net zoals bij een aandeel of grondstof.</p>
            <p className="text-gray-600 leading-relaxed">In totaal komen er ooit maar 21 miljoen Bitcoin in omloop. Dat schaarse karakter is een van de redenen waarom mensen er waarde aan toekennen. De koers is wel volatiel: schommelingen van 30 procent per maand zijn niet uitzonderlijk.</p>
          </section>

          <section id="waar-kopen">
            <h2 className="font-serif text-2xl font-normal mb-4">Waar koop je Bitcoin in Nederland?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">In Nederland zijn er meerdere betrouwbare exchanges. De meeste Nederlanders kiezen voor een lokaal platform omdat ze met iDEAL kunnen storten en omdat de service in het Nederlands is.</p>

            <div className="space-y-3">
              {exchanges.map(ex => (
                <div key={ex.naam} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-sm text-gray-900">{ex.naam}</p>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-1">{ex.kenmerk}</p>
                  <p className="text-xs text-gray-400">Geschikt voor: {ex.voor}</p>
                </div>
              ))}
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5 mt-4">
              <p className="font-medium text-sm text-brand-700 mb-2">DNB-registratie als minimum</p>
              <p className="text-xs text-gray-600 leading-relaxed">Kies altijd voor een exchange die bij De Nederlandsche Bank (DNB) is geregistreerd. Dit is het minimumvereiste voor crypto-aanbieders die actief zijn in Nederland.</p>
            </div>
          </section>

          <section id="stappenplan">
            <h2 className="font-serif text-2xl font-normal mb-4">Stappenplan: Bitcoin kopen</h2>
            <p className="text-gray-600 leading-relaxed mb-5">In vier stappen heb je je eerste Bitcoin in bezit. We gebruiken Bitvavo als voorbeeld, maar het werkt bij andere exchanges vergelijkbaar.</p>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Maak een account aan', tekst: 'Vul je gegevens in en upload een foto van je ID. Verificatie duurt meestal binnen een dag.' },
                { stap: '2', titel: 'Stort euro\'s via iDEAL', tekst: 'Met iDEAL is je geld direct binnen. SEPA-overboeking duurt 1 werkdag.' },
                { stap: '3', titel: 'Koop Bitcoin vanaf 1 euro', tekst: 'Geef het bedrag in euro op dat je wilt inleggen. Je krijgt automatisch het juiste deel Bitcoin.' },
                { stap: '4', titel: 'Beslis hoe je bewaart', tekst: 'Voor kleine bedragen kun je je Bitcoin op de exchange laten staan. Voor grote bedragen is een eigen wallet veiliger.' },
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

          <section id="bewaren">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe bewaar je je Bitcoin veilig?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Je hebt drie opties: laten staan op de exchange, een softwarewallet op je telefoon, of een hardware wallet. Voor kleine bedragen tot een paar duizend euro is bewaren op een gerenommeerde exchange voldoende. Boven dat bedrag wordt een eigen wallet aangeraden.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Een hardware wallet is een soort USB-stick die je private key offline bewaart. Bekende merken zijn Ledger en Trezor. Je betaalt rond de 80 tot 150 euro voor een hardware wallet. Wie deze gebruikt, is volledig zelf verantwoordelijk voor het bewaren van het herstelzin van twaalf of vierentwintig woorden.</p>
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-medium text-sm text-red-700 mb-2">Verlies je herstelzin niet</p>
              <p className="text-xs text-gray-600 leading-relaxed">Wie zijn herstelzin kwijtraakt, kan zijn Bitcoin niet meer terugkrijgen. Schrijf het op papier op, bewaar het op een veilige plek en deel het nooit digitaal.</p>
            </div>
          </section>

          <section id="kosten">
            <h2 className="font-serif text-2xl font-normal mb-4">Kosten en spread</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bij Bitvavo betaal je 0,25 procent transactiekosten. Op een aankoop van 100 euro is dat 25 cent. Daarnaast verdienen exchanges aan de spread, het verschil tussen koop- en verkoopprijs. Dat is meestal 0,1 tot 0,3 procent.</p>
            <p className="text-gray-600 leading-relaxed">Storten met iDEAL is bij Bitvavo gratis. Opnemen naar je bankrekening kost meestal niets. Ledig wel altijd de actuele tarieven nakijken voordat je een grote storting doet.</p>
          </section>

          <section id="belasting">
            <h2 className="font-serif text-2xl font-normal mb-4">Belasting in box 3</h2>
            <p className="text-gray-600 leading-relaxed mb-4">In Nederland valt Bitcoin onder de vermogensbelasting in box 3. Je geeft de waarde op 1 januari aan bij je belastingaangifte. Je betaalt geen belasting over de winst zelf, maar over een fictief rendement op het totale vermogen.</p>
            <p className="text-gray-600 leading-relaxed">Boven de heffingsvrije voet van ongeveer 57.000 euro per persoon (2026) betaal je belasting. Heb je samen met je partner minder dan 114.000 euro aan vermogen, dan is je Bitcoin dus belastingvrij. Daarboven betaal je effectief 1 tot 2 procent per jaar aan belasting over je crypto-vermogen.</p>
          </section>

          <section id="valkuilen">
            <h2 className="font-serif text-2xl font-normal mb-4">Veelgemaakte fouten</h2>
            <div className="space-y-3">
              {[
                'Inleggen wat je niet kunt missen, terwijl Bitcoin in een paar maanden 30 procent kan dalen.',
                'Op het hoogtepunt instappen na een hype, en daarna in paniek verkopen bij een dip.',
                'Verifieer altijd de URL van de exchange en val niet voor phishing-mails.',
                'Een hardware wallet kopen via Marktplaats of een onbekende verkoper, dat is een groot risico.',
                'Belasting vergeten op te geven, terwijl de Belastingdienst informatie ontvangt van Nederlandse exchanges.',
              ].map((tekst, i) => (
                <div key={i} className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                  <div className="w-1 bg-red-400 rounded-full flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">{tekst}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Bitcoin kopen in Nederland is in 2026 simpel en veilig, mits je een DNB-geregistreerde exchange gebruikt. Begin klein, bewaar je herstelzin offline en leg alleen geld in dat je kunt missen. De koers blijft volatiel en niemand kan voorspellen waar Bitcoin over een jaar staat.</p>
            <p className="text-gray-600 leading-relaxed">Crypto is een aanvulling op een gespreide portefeuille, geen vervanging. Lees ook onze <Link to="/beleggen/beginnen-met-beleggen" className="text-brand-500 hover:underline">gids over beginnen met beleggen</Link> en bekijk <Link to="/beleggen/wat-is-een-etf" className="text-brand-500 hover:underline">wat een ETF is</Link> als je twijfelt over de basis.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Begin met je eerste Bitcoin</h2>
          <p className="text-sm opacity-80 mb-5">Bitvavo is de grootste Nederlandse exchange. Account openen duurt vijftien minuten en je kunt vanaf 1 euro inleggen.</p>
          <a href={affiliateUrl('bitcoin', 'bitcoin-artikel-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Account openen bij Bitvavo →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar Bitvavo. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen in crypto brengt hoge risico's met zich mee. Je kunt (een deel van) je inleg verliezen.</p>

      </article>
    </>
  )
}
