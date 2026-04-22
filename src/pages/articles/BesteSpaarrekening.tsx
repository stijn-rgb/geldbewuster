import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

const spaarrekeningen = [
  { bank: 'Raisin (via partners)', rente: 'tot 3,5%', type: 'Deposito / vrij', info: 'Europese banken, één platform', link: 'https://www.raisin.nl' },
  { bank: 'Revolut (tijdelijke actie)', rente: '3,1%*', type: 'Vrij opneembaar', info: 'Geldig tot 30 juni 2026 voor nieuwe klanten', link: 'https://www.revolut.com/nl-NL' },
  { bank: 'Revolut (Ultra plan)', rente: '2,5%', type: 'Vrij opneembaar', info: 'Betaald abonnement van €50/mnd', link: 'https://www.revolut.com/nl-NL' },
  { bank: 'Bunq', rente: '2,01%', type: 'Vrij opneembaar', info: 'Direct beschikbaar', link: 'https://www.bunq.com/nl' },
  { bank: 'ING', rente: '1,50%', type: 'Vrij opneembaar', info: 'Bekende Nederlandse bank', link: 'https://www.ing.nl' },
  { bank: 'ABN AMRO', rente: '1,25%', type: 'Vrij opneembaar', info: 'Stabiel maar lager', link: 'https://www.abnamro.nl' },
  { bank: 'Revolut (Standard)', rente: '1,0%', type: 'Vrij opneembaar', info: 'Gratis plan, dagelijks bijgeschreven', link: 'https://www.revolut.com/nl-NL' },
  { bank: 'Rabobank', rente: '1,20%', type: 'Vrij opneembaar', info: 'Coöperatief model', link: 'https://www.rabobank.nl' },
]

export default function BesteSpaarrekening() {
  return (
    <>
      <SEO
        title="Beste spaarrekening Nederland 2026: eerlijke vergelijking"
        description="Vergelijk de beste spaarrekeningen van Nederland in 2026. Van Raisin tot Revolut en Bunq. Inclusief actuele rentes, voorwaarden en eerlijk advies."
        canonical="/sparen/beste-spaarrekening"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/sparen" className="hover:text-brand-500">Sparen</Link>
          <span>›</span>
          <span className="text-gray-600">Beste spaarrekening 2026</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-block bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Sparen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Beste spaarrekening Nederland 2026: een eerlijke vergelijking
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt april 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-sky-400 pl-4">
            De spaarrente is de afgelopen jaren weer flink gestegen. Waar je een paar jaar geleden blij mocht zijn met 0,01% rente, bieden banken nu ineens weer serieuzere percentages. Maar niet elke bank doet dat even hard. En het verschil tussen de beste en de slechtste spaarrekening kan op jaarbasis al snel honderden euro's schelen.
          </p>
        </div>

        {/* INHOUDSOPGAVE */}
        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#wat-is-spaarrekening" className="hover:text-brand-500">Wat is een spaarrekening?</a></li>
            <li><a href="#vergelijking" className="hover:text-brand-500">Beste spaarrekeningen 2026 vergeleken</a></li>
            <li><a href="#revolut" className="hover:text-brand-500">Revolut: hoge rente maar lees de kleine lettertjes</a></li>
            <li><a href="#raisin" className="hover:text-brand-500">Raisin: hogere rente via Europese banken</a></li>
            <li><a href="#waar-op-letten" className="hover:text-brand-500">Waar let je op bij het kiezen?</a></li>
            <li><a href="#noodfonds" className="hover:text-brand-500">Noodfonds eerst, dan extra sparen</a></li>
            <li><a href="#sparen-vs-beleggen" className="hover:text-brand-500">Sparen vs beleggen</a></li>
            <li><a href="#tips" className="hover:text-brand-500">Tips om meer uit je spaargeld te halen</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="wat-is-spaarrekening">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is een spaarrekening?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een spaarrekening is een rekening waarop je geld zet dat je niet direct nodig hebt. De bank betaalt jou rente over dat bedrag als vergoeding voor het gebruik van jouw geld.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Er zijn twee hoofdtypen:</p>
            <div className="space-y-3">
              {[
                { titel: 'Vrij opneembare spaarrekening', tekst: 'Je kunt op elk moment geld opnemen. Flexibel, maar de rente is iets lager dan bij een deposito. Dit is voor de meeste mensen de beste keuze als dagelijks spaarmiddel.' },
                { titel: 'Deposito', tekst: 'Je zet geld vast voor een bepaalde periode, bijvoorbeeld 1 of 2 jaar. De rente is hoger, maar je kunt je geld niet tussentijds opnemen zonder boete. Geschikt voor geld dat je zeker de komende periode niet nodig hebt.' },
              ].map(item => (
                <div key={item.titel} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-1 bg-sky-400 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">{item.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="vergelijking">
            <h2 className="font-serif text-2xl font-normal mb-4">Beste spaarrekeningen 2026 vergeleken</h2>
            <p className="text-gray-600 leading-relaxed mb-5">De rentes veranderen regelmatig, maar dit is het huidige beeld van de populairste aanbieders:</p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Spaarrekeningen vergelijking april 2026</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Bank</th>
                      <th className="py-2.5 px-4 text-center text-xs font-medium text-gray-500">Rente</th>
                      <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Type</th>
                      <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Bijzonderheden</th>
                    </tr>
                  </thead>
                  <tbody>
                    {spaarrekeningen.map((r, i) => (
                      <tr key={r.bank} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                        <td className="py-2.5 px-4 text-xs font-medium">
                          <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">{r.bank}</a>
                        </td>
                        <td className="py-2.5 px-4 text-center text-xs font-semibold text-gray-900">{r.rente}</td>
                        <td className="py-2.5 px-4 text-xs text-gray-500">{r.type}</td>
                        <td className="py-2.5 px-4 text-xs text-gray-500">{r.info}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 px-4 py-3 border-t border-gray-100">*Tijdelijke welkomstrente voor nieuwe klanten die na 1 april 2026 openen, op saldi tot €15.000. Na 30 juni 2026 geldt de rente van het reguliere plan. Rentes zijn indicatief en kunnen wijzigen.</p>
            </div>
          </section>

          <section id="revolut">
            <h2 className="font-serif text-2xl font-normal mb-4">Revolut: hoge rente maar lees de kleine lettertjes</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Revolut biedt een vrij opneembare spaarrekening waarbij de rente dagelijks wordt bijgeschreven. Dat klinkt aantrekkelijk, en voor sommige mensen is het dat ook. Maar er zit een addertje onder het gras waar veel mensen overheen lezen: de rente is direct gekoppeld aan je abonnement.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Het gratis Standard plan geeft 1,0% rente. Wil je meer, dan betaal je maandelijks voor een hoger plan. Premium kost €9,99 per maand voor 1,5%, Metal €18,99 voor 2,0% en Ultra €50 per maand voor maximaal 2,5%. Tijdelijk loopt er ook een welkomstactie: nieuwe klanten die na 1 april 2026 een rekening openen krijgen 3,1% rente tot 30 juni 2026 op saldi tot €15.000.</p>
            <p className="text-gray-600 leading-relaxed mb-5">Het grote voordeel van Revolut is dat de rente dagelijks wordt bijgeschreven. Je profiteert dus direct van het rente-op-rente effect. En voor mensen die Revolut al als betaalrekening gebruiken, is het makkelijk om er ook hun spaargeld te stallen. De kanttekening is even duidelijk: voor de echt hoge rentes betaal je flink voor een abonnement. Bij kleine spaarbedragen kun je meer kwijt zijn aan je abonnement dan je extra verdient aan rente. Reken het dus altijd even door voordat je upgradet.</p>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-medium text-sm mb-3">Voor wie is Revolut sparen interessant?</p>
              <ul className="space-y-2">
                {[
                  'Bestaande Revolut gebruikers die hun spaargeld willen centraliseren',
                  'Mensen met een groter spaarbedrag die de tijdelijke 3,1% actie willen meepakken',
                  'Mensen die dagelijkse rentebijschrijving prettig vinden',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                    <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="raisin">
            <h2 className="font-serif text-2xl font-normal mb-4">Raisin: hogere rente via Europese banken</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Raisin is een Duits platform waarop je eenvoudig spaarrekeningen en deposito's kunt openen bij Europese banken. Je opent één account bij Raisin en kiest vervolgens welke bank en welk product je wilt. De rentes liggen doorgaans hoger dan bij Nederlandse banken.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Voordelen</p>
                <ul className="space-y-2">
                  {[
                    'Hogere rentes dan de meeste Nederlandse banken',
                    'Toegang tot tientallen Europese aanbieders via één platform',
                    'Gratis te gebruiken, geen kosten',
                    'Valt onder het Europees depositogarantiestelsel',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <p className="font-medium text-sm text-gray-700 mb-3">Aandachtspunten</p>
                <ul className="space-y-2">
                  {[
                    'Geld staat bij een buitenlandse bank — veilig binnen EU maar voelt voor sommigen onwennig',
                    'Bij een deposito kun je geld niet tussentijds opnemen',
                    'Platform is in het Engels of Duits',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">Voor mensen die het maximale uit hun spaargeld willen halen en geld voor een jaar of langer kunnen vastzetten, is Raisin een serieuze optie.</p>
          </section>

          <section id="waar-op-letten">
            <h2 className="font-serif text-2xl font-normal mb-4">Waar let je op bij het kiezen van een spaarrekening?</h2>
            <div className="space-y-4">
              {[
                { nr: '1', titel: 'De rente', tekst: 'Logisch, maar let niet alleen op het percentage. Kijk ook of de rente tijdelijk of structureel is. Sommige banken lokken nieuwe klanten met een hoge welkomstrente die na een paar maanden daalt. Revolut doet dit nu ook met de 3,1% actie.' },
                { nr: '2', titel: 'Vrij opneembaar of deposito?', tekst: 'Heb je het geld misschien nodig? Kies dan altijd een vrij opneembare rekening. Zet alleen geld vast in een deposito als je zeker weet dat je het de komende periode niet nodig hebt.' },
                { nr: '3', titel: 'Depositogarantie', tekst: 'In Nederland en de rest van de EU geldt een depositogarantie tot €100.000 per persoon per bank. Je geld is veilig als een bank failliet gaat tot dat bedrag. Revolut valt onder het Litouwse depositogarantiestelsel, wat ook binnen de EU geldt.' },
                { nr: '4', titel: 'Verborgen kosten', tekst: 'De meeste spaarrekeningen zijn gratis. Maar bij Revolut betaal je voor hogere rentes via een abonnement. Tel die kosten altijd mee in je berekening.' },
                { nr: '5', titel: 'Drempel en voorwaarden', tekst: 'Sommige rekeningen hebben een minimale of maximale inleg, of zijn alleen beschikbaar voor nieuwe klanten. Lees altijd de kleine lettertjes.' },
              ].map(item => (
                <div key={item.nr} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-7 h-7 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">{item.nr}</div>
                  <div>
                    <p className="font-medium text-sm mb-1">{item.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="noodfonds">
            <h2 className="font-serif text-2xl font-normal mb-4">Noodfonds eerst, dan extra sparen</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Voordat je nadenkt over de beste spaarrekening is er één ding belangrijker: een noodfonds. Dit is een buffer van drie tot zes maanden aan vaste lasten die je altijd beschikbaar hebt. Niet in een deposito, maar op een vrij opneembare rekening.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Heb je dat noodfonds al? Dan pas is het slim om te kijken naar hogere rentes via een deposito of platform zoals Raisin.</p>
            <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
              <p className="text-sm text-brand-700">Weet je niet hoeveel je noodfonds moet zijn? Gebruik onze gratis <Link to="/tools/budget-planner" className="underline font-medium">budget planner</Link> om je vaste lasten in kaart te brengen.</p>
            </div>
          </section>

          <section id="sparen-vs-beleggen">
            <h2 className="font-serif text-2xl font-normal mb-4">Sparen vs beleggen: wanneer kies je wat?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Als je geld voor de lange termijn opzij wilt zetten, is beleggen historisch gezien winstgevender dan sparen. Maar sparen is veiliger en zekerder. Een simpele vuistregel:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 text-center">
                <p className="font-medium text-sm text-sky-700 mb-1">Sparen</p>
                <p className="text-xs text-gray-500">Geld dat je binnen drie jaar mogelijk nodig hebt</p>
              </div>
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-center">
                <p className="font-medium text-sm text-brand-700 mb-1">Overwegen te beleggen</p>
                <p className="text-xs text-gray-500">Geld dat je zeker minimaal vijf jaar kunt missen</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">Meer weten over beleggen? Lees ons artikel <Link to="/beleggen/beginnen-met-beleggen" className="text-brand-500 hover:underline">beginnen met beleggen</Link> of bekijk onze <Link to="/tools/compound-calculator" className="text-brand-500 hover:underline">compound interest calculator</Link> om te zien wat je geld kan opbrengen.</p>
          </section>

          <section id="tips">
            <h2 className="font-serif text-2xl font-normal mb-4">Tips om meer uit je spaargeld te halen</h2>
            <div className="space-y-3">
              {[
                { titel: 'Vergelijk elk jaar opnieuw', tekst: 'Rentes veranderen en de beste aanbieder van vandaag is dat volgend jaar misschien niet meer.' },
                { titel: 'Spreid als je veel spaargeld hebt', tekst: 'Heb je meer dan €100.000? Verdeel het dan over meerdere banken zodat alles onder de depositogarantie valt.' },
                { titel: 'Kijk naar Raisin voor hogere rentes', tekst: 'Zeker voor geld dat je een jaar of langer kunt vastzetten. De rentes via Europese banken liggen structureel hoger.' },
                { titel: 'Let op tijdelijke acties', tekst: 'Banken zoals Revolut lokken nieuwe klanten met hoge welkomstrentes die na de actieperiode dalen. Zet het in je agenda wanneer de actie afloopt.' },
                { titel: 'Vergeet je spaargeld niet', tekst: 'Veel mensen laten geld op een betaalrekening staan terwijl een spaarrekening dezelfde flexibiliteit biedt maar wel rente geeft.' },
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

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">De beste spaarrekening van 2026 hangt af van jouw situatie. Gebruik je Revolut al en wil je maximale flexibiliteit? Dan is de tijdelijke 3,1% actie interessant om mee te pikken. Wil je structureel het maximale rendement en kun je geld vastzetten? Kijk dan bij Raisin. Wil je gewoon een betrouwbare Nederlandse bank? Dan is Bunq of ING een veilige keuze.</p>
            <p className="text-gray-600 leading-relaxed">Het belangrijkste is dat je überhaupt een spaarrekening gebruikt en je geld niet op een betaalrekening laat staan. Elk procentje rente dat je mist is geld dat je weggeeft.</p>
          </section>

        </div>

        {/* TOOLS BLOK */}
        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="font-medium text-sm text-gray-700 mb-3">Handige tools</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link to="/tools/budget-planner" className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:border-brand-500 transition-colors group">
              <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Budget planner</p>
                <p className="text-xs text-gray-400">Bereken hoeveel noodfonds je nodig hebt</p>
              </div>
            </Link>
            <Link to="/tools/compound-calculator" className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:border-brand-500 transition-colors group">
              <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              </div>
              <div>
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Compound calculator</p>
                <p className="text-xs text-gray-400">Wat levert je spaargeld op over 10 jaar?</p>
              </div>
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">De rentes in dit artikel zijn indicatief en kunnen wijzigen. Dit artikel bevat geen financieel advies. Controleer altijd de actuele voorwaarden bij de aanbieder.</p>

      </article>
    </>
  )
}
