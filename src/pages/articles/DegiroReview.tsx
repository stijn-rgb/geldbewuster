import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const kostentabel = [
  { product: 'Nederlandse & Belgische aandelen', kosten: '€2,50 per transactie' },
  { product: 'Amerikaanse aandelen', kosten: '€3,90 per transactie' },
  { product: 'ETFs via kernselectie', kosten: '€1,00 handlingskosten' },
  { product: 'Aansluitingskosten per beurs', kosten: '€2,50 per jaar' },
  { product: 'Bewaarkosten', kosten: 'Gratis' },
  { product: 'Maandelijkse abonnementskosten', kosten: 'Gratis' },
]

export default function DegiroReview() {
  return (
    <>
      <SEO
        title="DEGIRO review 2026: eerlijk en volledig"
        description="Is DEGIRO de beste broker voor jou? We bespreken de kosten, veiligheid, het platform en voor wie DEGIRO wel of niet geschikt is. Onze beoordeling: 9.1/10."
        canonical="/beleggen/degiro-review"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/beleggen" className="hover:text-brand-500">Beleggen</Link>
          <span>›</span>
          <span className="text-gray-600">DEGIRO review 2026</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Broker review</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            DEGIRO review 2026: eerlijk en volledig
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt april 2026</span>
          </div>

          {/* SCORE BANNER */}
          <div className="bg-brand-500 rounded-2xl p-6 flex items-center justify-between text-white mb-6">
            <div>
              <p className="text-sm opacity-80 mb-1">Onze beoordeling</p>
              <p className="font-serif text-4xl font-normal">9.1 <span className="text-xl opacity-70">/ 10</span></p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80 mb-2">Ideaal voor beginners</p>
              <a
                href={affiliateUrl('degiro', 'review-hero')}
                target="_blank"
                rel="noopener sponsored"
                className="inline-block bg-white text-brand-500 font-medium px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Account openen →
              </a>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            DEGIRO is de populairste broker van Nederland. En dat is niet voor niets. Ze bieden lage kosten, een groot aanbod en een platform dat ook voor beginners goed te begrijpen is. Maar is DEGIRO ook de beste keuze voor jou?
          </p>
        </div>

        {/* INHOUDSOPGAVE */}
        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is-degiro" className="hover:text-brand-500">Wat is DEGIRO?</a></li>
            <li><a href="#kosten" className="hover:text-brand-500">Wat kost beleggen bij DEGIRO?</a></li>
            <li><a href="#aanbod" className="hover:text-brand-500">Wat kun je beleggen?</a></li>
            <li><a href="#veiligheid" className="hover:text-brand-500">Hoe veilig is DEGIRO?</a></li>
            <li><a href="#platform" className="hover:text-brand-500">Het platform en de app</a></li>
            <li><a href="#voor-wie" className="hover:text-brand-500">Voor wie is DEGIRO geschikt?</a></li>
            <li><a href="#vergelijking" className="hover:text-brand-500">DEGIRO vs andere brokers</a></li>
            <li><a href="#conclusie" className="hover:text-brand-500">Onze eindconclusie</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is-degiro">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is DEGIRO?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">DEGIRO is een Nederlandse online broker, opgericht in 2013 in Amsterdam. Het bedrijf is tegenwoordig onderdeel van flatexDEGIRO Bank, een beursgenoteerde bank met een Duitse bankvergunning.</p>
            <p className="text-gray-600 leading-relaxed">Het idee achter DEGIRO was simpel: beleggen toegankelijk maken voor iedereen. Voor die tijd rekenden banken hoge transactiekosten, wat de drempel om te starten met beleggen een stuk hoger maakte dan tegenwoordig. DEGIRO brak dat open met een model gebaseerd op lage kosten. En dat heeft gewerkt: inmiddels heeft DEGIRO meer dan drie miljoen klanten in 18 Europese landen.</p>
          </section>

          <section id="kosten">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat kost beleggen bij DEGIRO?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Kosten zijn voor de meeste beleggers het belangrijkste criterium. En hier scoort DEGIRO goed. Hieronder een overzicht:</p>

            {/* KOSTENTABEL */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-5">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Kosten overzicht DEGIRO 2026</p>
              </div>
              <table className="w-full text-sm" style={{tableLayout: 'fixed'}}>
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Product</th>
                    <th className="py-2.5 px-4 text-right text-xs font-medium text-gray-500">Kosten</th>
                  </tr>
                </thead>
                <tbody>
                  {kostentabel.map((r, i) => (
                    <tr key={r.product} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-gray-600">{r.product}</td>
                      <td className={`py-2.5 px-4 text-right font-medium ${r.kosten === 'Gratis' ? 'text-brand-500' : 'text-gray-900'}`}>{r.kosten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">Via de kernselectie kun je maandelijks gratis handelen in een selectie populaire ETFs. Denk aan de VWRL, IWDA en VUSA. Je betaalt alleen €1 aan handlingskosten per transactie. Voor de passieve belegger die één keer per maand een vast bedrag inlegt in een ETF zijn de kosten bij DEGIRO dus nagenoeg nul.</p>
            <p className="text-gray-600 leading-relaxed">DEGIRO rekent €2,50 per jaar per beurs waarop je handelt, met uitzondering van Euronext Amsterdam en Brussel. Wie alleen in Nederlandse aandelen of via de kernselectie ETFs belegt, betaalt hier niets voor.</p>
          </section>

          <section id="aanbod">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat kun je beleggen bij DEGIRO?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">DEGIRO biedt een breed aanbod. Voor de meeste beginners en passieve beleggers is dat ruim voldoende.</p>
            <div className="bg-gray-50 rounded-xl p-5">
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Aandelen op meer dan 50 beurzen wereldwijd',
                  "ETFs, waaronder de kernselectie met gratis transacties",
                  'Obligaties',
                  'Opties en futures (alleen voor ervaren beleggers)',
                  'Crypto (beschikbaar sinds 2025)',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="veiligheid">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe veilig is DEGIRO?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Veiligheid is een terechte vraag als je geld ergens onderbrengt. Dit is wat je moet weten:</p>
            <div className="space-y-3">
              {[
                { titel: 'Regulering', tekst: 'DEGIRO valt als onderdeel van flatexDEGIRO Bank onder toezicht van BaFin in Duitsland én de AFM in Nederland. Dat is een van de strengste combinaties van toezichthouders in Europa.' },
                { titel: 'Jouw beleggingen', tekst: 'Je beleggingen worden bewaard bij een aparte stichting, Stichting DEGIRO. Dat betekent dat je aandelen en ETFs niet op de balans van DEGIRO staan. Gaat DEGIRO failliet, dan zijn jouw beleggingen in principe veilig.' },
                { titel: 'Depositogarantie', tekst: 'Niet-belegd geld op je DEGIRO-rekening valt onder het Duitse depositogarantiestelsel tot €100.000. Dat is meer bescherming dan bij veel andere brokers.' },
                { titel: 'Effectenuitlening', tekst: 'DEGIRO heeft in het verleden beleggingen van klanten uitgeleend aan derden zonder dit goed te communiceren. Dat is inmiddels transparanter geworden, maar let op: bij een Basic-account kan dit nog voorkomen. Kies voor een Custody-account als je dit risico wilt vermijden.' },
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

          <section id="platform">
            <h2 className="font-serif text-2xl font-normal mb-4">Het platform en de app</h2>
            <p className="text-gray-600 leading-relaxed mb-4">DEGIRO heeft een eigen app en een webversie. Beide zijn overzichtelijk en eenvoudig te gebruiken. Je kunt er je portefeuille bekijken, orders plaatsen en je transactiehistorie inzien.</p>
            <p className="text-gray-600 leading-relaxed mb-4">De interface is bewust simpel gehouden. Er zijn geen geavanceerde grafieken of technische analyse-tools. Dat is precies goed voor beginners die gewoon willen kopen en vasthouden, maar minder geschikt voor actieve traders die uitgebreide analyse nodig hebben.</p>
            <p className="text-gray-600 leading-relaxed">De app krijgt gemiddeld goede beoordelingen in de App Store en Google Play. De meest gehoorde klacht is de klantenservice, die niet altijd even snel reageert. Voor standaard vragen is er een uitgebreid helpcenter beschikbaar.</p>
          </section>

          <section id="voor-wie">
            <h2 className="font-serif text-2xl font-normal mb-4">Voor wie is DEGIRO geschikt?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Geschikt voor</p>
                <ul className="space-y-2">
                  {[
                    'Beginners die starten met aandelen of ETFs',
                    'Passieve beleggers met vaste maandelijkse inleg',
                    'Beleggers die willen besparen op transactiekosten',
                    'Mensen die breed gespreid willen beleggen via ETFs',
                  ].map(item => (
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
                  {[
                    'Actieve traders die geavanceerde tools nodig hebben',
                    'Mensen die automatisch willen beleggen via een robo-advisor',
                    "ZZP'ers die vanuit een BV willen beleggen",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#888" strokeWidth="2" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>


          <section id="vergelijking">
            <h2 className="font-serif text-2xl font-normal mb-4">DEGIRO vs andere brokers</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Hoe verhoudt DEGIRO zich tot de andere populaire brokers in Nederland? Hier is een eerlijk overzicht:</p>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-500 text-white">
                    <th className="py-3 px-4 text-left text-xs font-medium">Kenmerk</th>
                    <th className="py-3 px-4 text-center text-xs font-medium">
                      <span className="bg-white text-brand-500 px-2 py-0.5 rounded-full font-semibold">DEGIRO</span>
                    </th>
                    <th className="py-3 px-4 text-center text-xs font-medium text-white/90">Trading 212</th>
                    <th className="py-3 px-4 text-center text-xs font-medium text-white/90">Saxo Bank</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { kenmerk: 'Transactiekosten', degiro: '€1-3 per order', t212: 'Gratis', saxo: '€2-6 per order' },
                    { kenmerk: 'Gratis ETFs', degiro: 'Ja (kernselectie)', t212: 'Ja (alle)', saxo: 'Nee' },
                    { kenmerk: 'Crypto', degiro: 'Ja', t212: 'Ja', saxo: 'Nee' },
                    { kenmerk: 'Minimale inleg', degiro: '€0', t212: '€1', saxo: '€0' },
                    { kenmerk: 'Aantal beurzen', degiro: '50+', t212: '1 beurs', saxo: '70+' },
                    { kenmerk: 'Bewaarkosten', degiro: 'Gratis', t212: 'Gratis', saxo: 'Gratis' },
                    { kenmerk: 'Regulering', degiro: 'AFM + BaFin', t212: 'FCA', saxo: 'AFM + FSA' },
                    { kenmerk: 'Geschikt voor', degiro: 'Beginners & gevorderden', t212: 'Absolute beginners', saxo: 'Gevorderden' },
                    { kenmerk: 'Beoordeling', degiro: '9.1', t212: '8.4', saxo: '8.7' },
                  ].map((r, i) => (
                    <tr key={r.kenmerk} className={`border-t border-gray-100 ${i % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="py-2.5 px-4 text-xs text-gray-500">{r.kenmerk}</td>
                      <td className="py-2.5 px-4 text-center text-xs font-medium text-brand-500 bg-brand-50/30">{r.degiro}</td>
                      <td className="py-2.5 px-4 text-center text-xs text-gray-600">{r.t212}</td>
                      <td className="py-2.5 px-4 text-center text-xs text-gray-600">{r.saxo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Tarieven op basis van publiek beschikbare informatie april 2026. Controleer altijd de actuele voorwaarden op de website van de broker.</p>
          </section>

          <section id="conclusie">
            <h2 className="font-serif text-2xl font-normal mb-4">Onze eindconclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">DEGIRO verdient zijn populariteit. Voor de meeste Nederlandse beleggers is het de slimste keuze: lage kosten, breed aanbod, overzichtelijk platform en goede veiligheid.</p>
            <p className="text-gray-600 leading-relaxed mb-4">De kernselectie met gratis ETF-transacties is voor passieve beleggers een groot voordeel. Wie elke maand een vast bedrag inlegt in een ETF als de VWRL of IWDA, betaalt bij DEGIRO nauwelijks iets aan kosten.</p>
            <p className="text-gray-600 leading-relaxed">Wil je beginnen met beleggen? Open een gratis account bij DEGIRO. Het duurt tien minuten en je kunt vandaag nog je eerste belegging doen. Nog niet zeker of DEGIRO bij je past? Bekijk onze <Link to="/tools/broker-vergelijker" className="text-brand-500 hover:underline">broker vergelijker</Link> voor een overzicht van alle opties.</p>
          </section>

        </div>

        {/* SCORE KAART */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-serif text-xl font-normal">Onze beoordeling</h2>
            <div className="bg-brand-500 text-white font-serif text-2xl font-normal px-4 py-2 rounded-xl">9.1</div>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Kosten', score: 9 },
              { label: 'Aanbod', score: 9 },
              { label: 'Gebruiksgemak', score: 9 },
              { label: 'Veiligheid', score: 9 },
              { label: 'Klantenservice', score: 7 },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-28 flex-shrink-0">{item.label}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full" style={{width: `${item.score * 10}%`}} />
                </div>
                <span className="text-xs font-medium text-gray-700 w-6 text-right">{item.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Klaar om te beginnen?</h2>
          <p className="text-sm opacity-80 mb-5">Open gratis een account bij DEGIRO. Geen maandelijkse kosten, al vanaf €1.</p>
          <a
            href={affiliateUrl('degiro', 'review-cta')}
            target="_blank"
            rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm"
          >
            Account openen bij DEGIRO →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar DEGIRO. Als je via onze link een account opent, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Beleggen brengt risico's met zich mee.</p>

      </article>
    </>
  )
}
