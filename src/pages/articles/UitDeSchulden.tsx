import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'

export default function UitDeSchulden() {
  return (
    <>
      <SEO
        title="Uit de schulden: het complete stappenplan"
        description="Stap voor stap uit de schulden. Van overzicht maken tot schuldhulpverlening. Inclusief tips, do's en don'ts en gratis hulpinstanties in Nederland."
        canonical="/schulden/uit-de-schulden"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/schulden" className="hover:text-brand-500">Schulden</Link>
          <span>›</span>
          <span className="text-gray-600">Uit de schulden</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Schulden</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Uit de schulden: het complete stappenplan
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>10 min leestijd</span>
            <span>Bijgewerkt april 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-red-400 pl-4">
            Schulden hebben is zwaar. Niet alleen financieel, maar ook mentaal. De rekeningen stapelen zich op, je goochelt met het geld dat je hebt en nog moet betalen en je vermijdt je bankapp en misschien wel de post die binnenkomt. Het gaat op een gegeven moment niet alleen meer over geld, maar beïnvloedt ook andere aspecten van je leven. Het gevoel dat je er nooit uitkomt groeit met de dag. Dit gevoel herkennen meer mensen dan je denkt.
          </p>
        </div>

        {/* INHOUDSOPGAVE */}
        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#overzicht" className="hover:text-brand-500">Stap 1: Krijg overzicht</a></li>
            <li><a href="#soorten" className="hover:text-brand-500">Stap 2: Begrijp wat voor schulden je hebt</a></li>
            <li><a href="#bloeding" className="hover:text-brand-500">Stap 3: Stop de bloeding</a></li>
            <li><a href="#strategie" className="hover:text-brand-500">Stap 4: Kies een aflossingstrategie</a></li>
            <li><a href="#contact" className="hover:text-brand-500">Stap 5: Neem contact op met schuldeisers</a></li>
            <li><a href="#hulp" className="hover:text-brand-500">Wanneer heb je hulp nodig?</a></li>
            <li><a href="#instanties" className="hover:text-brand-500">Gratis hulp in Nederland</a></li>
            <li><a href="#schuldhulp" className="hover:text-brand-500">Schuldhulpverlening en WSNP</a></li>
            <li><a href="#tips" className="hover:text-brand-500">Tips en do's & don'ts</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="overzicht">
            <h2 className="font-serif text-2xl font-normal mb-4">Stap 1: Krijg overzicht, hoe onaangenaam ook</h2>
            <p className="text-gray-600 leading-relaxed mb-4">De eerste stap is de moeilijkste, maar ook de belangrijkste. Je moet weten hoeveel je schuld precies is. Niet globaal, maar exact. Dit klinkt voor sommige mensen misschien eenvoudig, maar als je in de schulden zit is het vaak te confronterend om dit onder ogen te zien. Misschien vind je het fijner om er gewoon helemaal niet aan te denken, of ben je bang hoe de situatie er echt voor staat als je alles op een rij zet. Toch moet je hier doorheen.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Pak een vel papier of open een spreadsheet en noteer bij wie je schuld hebt, hoeveel de openstaande schuld per schuldeiser is, wat de rente per schuld is en wat je er nu per maand aan betaalt.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Zo'n overzicht geeft je twee dingen: rust in je hoofd, en een startpunt om te handelen. Zolang je de cijfers niet kent, kun je simpelweg geen concreet plan maken.</p>
            <div className="p-4 bg-gray-50 rounded-xl">
              <p className="text-sm text-gray-600">Weet je niet precies bij wie je schulden staan? Via het <a href="https://www.bkr.nl" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">BKR (Bureau Krediet Registratie)</a> kun je gratis je eigen kredietregistratie opvragen. Dat geeft je een overzicht van geregistreerde leningen en betalingsachterstanden.</p>
            </div>
          </section>

          <section id="soorten">
            <h2 className="font-serif text-2xl font-normal mb-4">Stap 2: Begrijp wat voor schulden je hebt</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Niet alle schulden zijn hetzelfde. Het type schuld bepaalt hoe urgent de situatie is en wat je kunt doen.</p>
            <div className="space-y-3">
              {[
                { titel: 'Preferente schulden', kleur: 'bg-red-50 border-red-100', tekst: 'Schulden waarbij niet betalen direct grote gevolgen heeft: huur of hypotheek (risico op huisuitzetting), energie (afsluiting), zorgverzekering (boete via CAK) en de Belastingdienst. Deze los je altijd als eerste af.' },
                { titel: 'Concurrente schulden', kleur: 'bg-yellow-50 border-yellow-100', tekst: 'Gewone schulden zoals een lening bij de bank, een creditcardschuld of een rekening bij een webshop. Misschien niet minder vervelend, maar minder urgent dan preferente schulden.' },
                { titel: 'Consumptief krediet', kleur: 'bg-orange-50 border-orange-100', tekst: 'Leningen met hoge rente, zoals een doorlopend krediet of rood staan. De rente maakt deze schulden snel groter. Pak deze aan zodra de preferente schulden onder controle zijn.' },
              ].map(item => (
                <div key={item.titel} className={`border rounded-xl p-4 ${item.kleur}`}>
                  <p className="font-medium text-sm mb-1">{item.titel}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.tekst}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="bloeding">
            <h2 className="font-serif text-2xl font-normal mb-4">Stap 3: Stop de bloeding</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Voordat je schulden aflost, moet je eerst stoppen met nieuwe schulden maken. Klinkt logisch, maar in de praktijk is het lastig als je elke maand tekortkomt.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Zet dit op een rij: wat zijn je vaste inkomsten per maand, wat zijn je vaste lasten per maand en hoeveel houd je over na alle vaste lasten?</p>
            <p className="text-gray-600 leading-relaxed mb-4">Als er niets overblijft of je elke maand rood staat, moet je eerst je uitgaven terugbrengen. Bekijk elk abonnement, elk contract en elke vaste last. Wat kun je opzeggen of verlagen? Elke tientje telt.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Wees je ervan bewust dat je dit niet alleen hoeft te doen. Voor veel mensen is het een taboe, maar hulp inschakelen om je financiën op orde te krijgen is in veel gevallen het allerbeste wat je kunt doen. Misschien heb je een partner of familielid die je hierbij wil helpen, en anders zijn er verschillende instanties die je hier echt bij kunnen helpen. Over dit laatste straks meer.</p>
            <div className="p-4 bg-brand-50 rounded-xl border border-brand-100">
              <p className="text-sm text-brand-700">Gebruik onze gratis <Link to="/tools/budget-planner" className="underline font-medium">budget planner</Link> om je inkomsten en uitgaven in kaart te brengen en te zien waar je kunt besparen.</p>
            </div>
          </section>

          <section id="strategie">
            <h2 className="font-serif text-2xl font-normal mb-4">Stap 4: Kies een aflossingstrategie</h2>
            <p className="text-gray-600 leading-relaxed mb-5">We weten nu welke schulden er zijn en we kennen onze maandelijkse kosten. Nu zijn er twee bewezen methoden om schulden af te lossen:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-500 mb-2">Sneeuwbalmethode</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">Je lost eerst de kleinste schuld volledig af. Dan gebruik je het vrijgekomen bedrag om de volgende schuld aan te pakken. Psychologisch werkt dit goed omdat je snel resultaat ziet.</p>
                <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full">Goed voor motivatie</span>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-medium text-sm text-gray-700 mb-2">Lawinemethode</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">Je lost eerst de schuld met de hoogste rente af. Dat bespaart je het meeste geld op de lange termijn, maar duurt langer voordat je de eerste schuld volledig hebt afgelost.</p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">Goedkoopst op lange termijn</span>
              </div>
            </div>

            {/* DAVE RAMSEY */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <p className="font-medium text-sm text-gray-900 mb-1">De 7 Baby Steps van Dave Ramsey</p>
                  <p className="text-xs text-gray-500 leading-relaxed">De sneeuwbalmethode werd wereldberoemd dankzij de Amerikaanse financieel adviseur en radiohostDave Ramsey. Hij bouwde er een compleet systeem omheen dat hij de <a href="https://www.ramseysolutions.com/dave-ramsey-7-baby-steps" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">7 Baby Steps</a> noemde. Met zijn dagelijkse radioshow bereikt hij miljoenen luisteraars en hielp hij tienduizenden gezinnen uit de schulden.</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { stap: '1', titel: 'Spaar €1.000 als noodfonds', tekst: 'Een kleine buffer zodat je geen nieuwe schulden maakt bij onverwachte uitgaven.' },
                  { stap: '2', titel: 'Los alle schulden af (behalve hypotheek)', tekst: 'Gebruik de sneeuwbalmethode: begin bij de kleinste schuld en werk naar de grootste.' },
                  { stap: '3', titel: 'Bouw een volledig noodfonds op', tekst: 'Spaar drie tot zes maanden aan vaste lasten als vangnet.' },
                  { stap: '4', titel: 'Investeer 15% van je inkomen voor pensioen', tekst: 'Zodra je schuldenvrij bent, begin je met vermogensopbouw voor later.' },
                  { stap: '5', titel: 'Spaar voor de studie van je kinderen', tekst: 'Leg indien van toepassing geld opzij voor toekomstige studiekosten.' },
                  { stap: '6', titel: 'Los je hypotheek versneld af', tekst: 'Betaal extra af op je hypotheek om eerder volledig schuldenvrij te zijn.' },
                  { stap: '7', titel: 'Bouw vermogen op en geef', tekst: 'Investeer, geef terug aan de samenleving en geniet van financiële vrijheid.' },
                ].map(item => (
                  <div key={item.stap} className="flex gap-3 bg-white rounded-lg p-3">
                    <div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">{item.stap}</div>
                    <div>
                      <p className="font-medium text-xs text-gray-900 mb-0.5">{item.titel}</p>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.tekst}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">Beide methoden werken. Kies de methode die bij jou past. Wie motivatie nodig heeft kiest de sneeuwbal. Wie koel en rationeel kan redeneren kiest de lawine.</p>
          </section>

          {/* SCHULDEN CALCULATOR */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div>
                <p className="font-medium text-sm">Schulden calculator</p>
                <p className="text-xs text-gray-400">Bereken wanneer je schuldenvrij bent en hoeveel rente je betaalt</p>
              </div>
            </div>
            <Link to="/tools/schulden-calculator" className="inline-block bg-brand-500 hover:bg-brand-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors">
              Gebruik de calculator →
            </Link>
          </div>

          <section id="contact">
            <h2 className="font-serif text-2xl font-normal mb-4">Stap 5: Neem contact op met schuldeisers</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Dit is iets wat veel mensen vermijden, maar het is juist slim om zelf het initiatief te nemen. Schuldeisers willen in de meeste gevallen liever een betalingsregeling treffen dan een langdurige juridische procedure opstarten.</p>
            <p className="text-gray-600 leading-relaxed">Bel of schrijf en vraag om een betalingsregeling. Leg eerlijk uit wat je situatie is. Vraag om uitstel als je tijdelijk krap zit. Vraag of de rente bevroren kan worden. Je zult verrast zijn hoeveel er mogelijk is als je zelf het gesprek aangaat. Pas als je niets doet, escaleren schulden.</p>
          </section>

          <section id="hulp">
            <h2 className="font-serif text-2xl font-normal mb-4">Wanneer heb je hulp nodig?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Veel mensen vinden het lastig om zelf goed grip op hun financiële situatie te krijgen. Dat hoeft ook niet. Schakel professionele hulp in als:</p>
            <div className="space-y-2">
              {[
                'Je inkomen niet genoeg is om zelfs de minimale aflossingen te betalen',
                'Schuldeisers dreigen met deurwaarders of beslaglegging',
                'Je meerdere schulden bij meerdere partijen hebt die je niet kunt overzien',
                'Je al een betalingsachterstand hebt van meer dan drie maanden',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 bg-red-50 rounded-xl p-3">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#ef4444" strokeWidth="1.5"/><line x1="8" y1="5" x2="8" y2="9" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="0.75" fill="#ef4444"/></svg>
                  <p className="text-xs text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="instanties">
            <h2 className="font-serif text-2xl font-normal mb-4">Gratis hulp bij schulden in Nederland</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Je hoeft dit niet alleen te doen. Er zijn in Nederland verschillende instanties die je gratis kunnen helpen.</p>
            <div className="space-y-3">
              {[
                { naam: 'Gemeente schuldhulpverlening', link: null, tekst: 'Je gemeente is verplicht om schuldhulpverlening aan te bieden. Dit is de eerste plek om naartoe te gaan. Een schuldhulpverlener helpt je met een overzicht, bemiddelt met schuldeisers en bekijkt of een schuldregeling mogelijk is. Zoek op de website van je gemeente naar "schuldhulpverlening".' },
                { naam: 'Nibud', link: 'https://www.nibud.nl', tekst: 'Het Nibud biedt gratis tools, rekenhulpen en adviezen voor mensen met geldzorgen. Handig als startpunt om je budget op orde te krijgen.' },
                { naam: 'Schuldhulpmaatje en Humanitas', link: 'https://www.schuldhulpmaatje.nl', tekst: 'Vrijwilligers die je helpen met je administratie, post en contact met schuldeisers. Laagdrempelig en super geschikt voor mensen die zich schamen voor hun situatie.' },
                { naam: 'Juridisch Loket', link: 'https://www.juridischloket.nl', tekst: 'Gratis advies als schuldeisers dreigen met juridische stappen. Zij leggen je rechten uit en helpen je voorbereiden op wat er komt.' },
              ].map(item => (
                <div key={item.naam} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-1 bg-brand-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm mb-1">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-brand-500">{item.naam}</a>
                      ) : item.naam}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="schuldhulp">
            <h2 className="font-serif text-2xl font-normal mb-4">Wat is schuldhulpverlening precies?</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Als de schulden te hoog zijn om zelf op te lossen, kun je je aanmelden voor de officiële schuldhulpverlening via je gemeente. Dit traject werkt zo:</p>
            <div className="space-y-3 mb-6">
              {[
                { stap: '1', tekst: 'Je meldt je aan bij de gemeente' },
                { stap: '2', tekst: 'Een schuldhulpverlener maakt een volledig overzicht van je schulden en inkomsten' },
                { stap: '3', tekst: 'Er wordt geprobeerd een minnelijke schuldregeling te treffen met alle schuldeisers' },
                { stap: '4', tekst: 'Als schuldeisers akkoord gaan, betaal je een vast bedrag per maand gedurende drie jaar' },
                { stap: '5', tekst: 'Na die drie jaar worden de resterende schulden kwijtgescholden' },
              ].map(item => (
                <div key={item.stap} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">{item.stap}</div>
                  <p className="text-sm text-gray-600 leading-relaxed self-center">{item.tekst}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="font-medium text-sm mb-2">Wat als een minnelijke regeling niet lukt? De WSNP</p>
              <p className="text-xs text-gray-500 leading-relaxed">Als een of meer schuldeisers niet meewerken, kun je de rechter vragen om toegelaten te worden tot de WSNP (Wet Schuldsanering Natuurlijke Personen). Je krijgt een bewindvoerder toegewezen die je financiën beheert. Na drie jaar worden restschulden gesaneerd. Geen makkelijke weg, maar wel een definitieve uitweg uit een uitzichtloze situatie.</p>
            </div>
          </section>

          <section id="tips">
            <h2 className="font-serif text-2xl font-normal mb-4">Tips en do's & don'ts</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Begin echt zo snel mogelijk met het maken van een schuldenoverzicht, ook al is het eng. Betaal preferente schulden altijd als eerste. Neem zelf contact op met schuldeisers voordat zij contact opnemen met jou. Vraag om hulp zodra het te groot wordt, want die hulp is gratis. Houd je aan de betalingsregeling die je hebt afgesproken. En bouw tegelijk een kleine buffer op voor noodgevallen, ook al los je schulden af. Dat klinkt misschien gek, maar zonder buffer maak je bij de eerste onverwachte rekening meteen weer nieuwe schulden.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                <p className="font-medium text-sm text-brand-700 mb-3">Wel doen</p>
                <ul className="space-y-2">
                  {[
                    'Zelf het initiatief nemen richting schuldeisers',
                    'Eerlijk zijn over je situatie bij schuldhulpverlening',
                    'De sneeuwbalmethode gebruiken als je motivatie nodig hebt',
                    'Hulp accepteren van Schuldhulpmaatje of Humanitas',
                    'Je partner of gezin betrekken bij je situatie',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                <p className="font-medium text-sm text-red-700 mb-3">Niet doen</p>
                <ul className="space-y-2">
                  {[
                    'Wachten tot schuldeisers zelf contact opnemen',
                    'Geld lenen om andere schulden mee af te lossen',
                    'Post van deurwaarders of incassobureaus negeren',
                    'Nieuwe schulden maken terwijl je oude aflost',
                    'Een betalingsregeling accepteren die je niet kunt nakomen',
                    'Je schamen voor je situatie',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 6l4 4M10 6l-4 4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-normal mb-4">Conclusie</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Schulden zijn vaak echt op te lossen. Het begint met overzicht, gevolgd door een eerlijk gesprek met jezelf over wat je kunt missen. En als het te groot wordt om alleen op te lossen: vraag om hulp. Die hulp is er, en die is gratis.</p>
          </section>

        </div>

        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <p className="font-medium text-sm text-gray-700 mb-3">Handige tools voor jouw situatie</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link to="/tools/schulden-calculator" className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:border-brand-500 transition-colors group">
              <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div>
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Schulden calculator</p>
                <p className="text-xs text-gray-400">Bereken wanneer je schuldenvrij bent</p>
              </div>
            </Link>
            <Link to="/tools/budget-planner" className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 hover:border-brand-500 transition-colors group">
              <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-xs font-medium group-hover:text-brand-500 transition-colors">Budget planner</p>
                <p className="text-xs text-gray-400">Breng je inkomsten en uitgaven in kaart</p>
              </div>
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel is informatief bedoeld. Heb je ernstige schuldenproblematiek, neem dan contact op met je gemeente of een erkende schuldhulpverlener.</p>

      </article>
    </>
  )
}
