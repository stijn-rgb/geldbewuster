import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer"
        description="Lees de disclaimer van geldbewuster.nl. Geen financieel advies, alleen informatieve content."
        canonical="/disclaimer"
      />
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <span className="text-gray-600">Disclaimer</span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="font-serif text-3xl font-normal mb-2">Disclaimer</h1>
        <p className="text-xs text-gray-400 mb-8">Laatste update: april 2026</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Geen financieel advies</h2>
            <p>De informatie op geldbewuster.nl is uitsluitend bedoeld voor algemene informatieve doeleinden. Niets op deze website vormt financieel, beleggings-, juridisch of fiscaal advies in de zin van de Wet op het financieel toezicht (Wft) of enige andere wet- of regelgeving.</p>
            <p className="mt-3">Geldbewuster.nl is niet geregistreerd bij de Autoriteit Financiële Markten (AFM) als financieel adviseur. Wij verstrekken geen persoonlijk advies. Voor persoonlijk financieel advies raden wij aan een gecertificeerd financieel adviseur of andere erkende professional te raadplegen.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Beleggen brengt risico's met zich mee</h2>
            <p>Beleggen in financiële instrumenten zoals aandelen, ETFs, obligaties en cryptovaluta brengt risico's met zich mee. De waarde van beleggingen kan zowel stijgen als dalen. Je kunt (een deel van) je inleg verliezen. In het verleden behaalde resultaten bieden geen garantie voor de toekomst.</p>
            <p className="mt-3">Informatie op geldbewuster.nl over beleggingsproducten of -strategieën is niet bedoeld als aanbeveling om te kopen, verkopen of aan te houden.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Nauwkeurigheid van informatie</h2>
            <p>Wij streven ernaar de informatie op geldbewuster.nl accuraat en actueel te houden. Desondanks kunnen wij de volledigheid, juistheid of actualiteit van de gepubliceerde informatie niet garanderen. Tarieven, rentepercentages, wet- en regelgeving en andere financiële gegevens kunnen veranderen. Controleer altijd de meest actuele informatie bij de betreffende aanbieder of instantie.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Affiliate links</h2>
            <p>Geldbewuster.nl maakt gebruik van affiliate links. Als je via een link op onze website een product of dienst afneemt, ontvangen wij mogelijk een vergoeding van de betreffende aanbieder. Dit heeft geen invloed op onze redactionele onafhankelijkheid of de inhoud van onze artikelen. Wij vermelden altijd wanneer een link een affiliate link betreft.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Aansprakelijkheid</h2>
            <p>Geldbewuster.nl en haar eigenaar aanvaarden geen aansprakelijkheid voor schade of verlies die direct of indirect voortvloeit uit het gebruik van de informatie op deze website of het handelen op basis daarvan. Lezers zijn zelf verantwoordelijk voor de beslissingen die zij nemen op basis van de op deze website gepubliceerde informatie.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Externe links</h2>
            <p>Geldbewuster.nl bevat links naar externe websites. Wij zijn niet verantwoordelijk voor de inhoud, het privacybeleid of de praktijken van externe websites. Het plaatsen van een link naar een externe website impliceert geen goedkeuring van die website of haar inhoud.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Bedrijfsgegevens</h2>
            <p>Geldbewuster.nl is een handelsnaam van SVDB Performance, gevestigd te Amsterdam.</p>
            <div className="mt-3 bg-gray-50 rounded-xl p-5 text-sm space-y-1">
              <p><span className="text-gray-500">Handelsnaam:</span> geldbewuster.nl</p>
              <p><span className="text-gray-500">Onderdeel van:</span> SVDB Performance</p>
              <p><span className="text-gray-500">KvK-nummer:</span> 98417533</p>
              <p><span className="text-gray-500">BTW-nummer:</span> NL005329198B08</p>
              <p><span className="text-gray-500">Adres:</span> Keurenplein 41 Box C5983, 1069CD Amsterdam</p>
              <p><span className="text-gray-500">E-mail:</span> stijn@svdbperformance.nl</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Wijzigingen</h2>
            <p>Wij behouden het recht voor deze disclaimer op elk moment te wijzigen. Wijzigingen worden gepubliceerd op deze pagina met een bijgewerkte datum.</p>
          </section>

        </div>
      </div>
    </>
  )
}
