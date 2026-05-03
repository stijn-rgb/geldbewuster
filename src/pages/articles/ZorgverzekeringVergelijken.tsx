import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import { affiliateUrl } from '../../config/affiliate'

const verzekeraars = [
  { naam: 'Zilveren Kruis', basis: '€152', kenmerk: 'Grootste zorgverzekeraar, ruime keuze' },
  { naam: 'CZ', basis: '€149', kenmerk: 'Goede klantbeoordelingen, scherpe premies' },
  { naam: 'VGZ', basis: '€147', kenmerk: 'Lage basispremie, breed netwerk' },
  { naam: 'Menzis', basis: '€151', kenmerk: 'Sterke aanvullende pakketten' },
  { naam: 'ONVZ', basis: '€158', kenmerk: 'Vrije keuze van zorgverlener' },
]

export default function ZorgverzekeringVergelijken() {
  return (
    <>
      <SEO
        title="Zorgverzekering vergelijken 2026: bespaar honderden euro's"
        description="Zorgverzekering vergelijken in 2026? Zo vind je de beste basisverzekering, bespaar je op je premie en kies je het juiste eigen risico. Check ons stappenplan."
        canonical="/verzekeringen/zorgverzekering-vergelijken"
      />

      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <Link to="/verzekeringen" className="hover:text-brand-500">Verzekeringen</Link>
          <span>›</span>
          <span className="text-gray-600">Zorgverzekering vergelijken</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-8">

        <div className="mb-10">
          <span className="inline-block bg-indigo-50 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full mb-4">Verzekeringen</span>
          <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
            Zorgverzekering vergelijken 2026: bespaar honderden euro's
          </h1>
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
            <span>Door <span className="text-gray-600 font-medium">Stijn</span></span>
            <span>7 min leestijd</span>
            <span>Bijgewerkt mei 2026</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-2 border-brand-500 pl-4">
            Wie ieder jaar bij dezelfde zorgverzekeraar blijft, betaalt vaak honderden euro's te veel. De verschillen in basispremie lopen in 2026 op tot meer dan 240 euro per jaar. Vergelijken kost je 15 minuten en kan een hele maand boodschappen opleveren. In dit artikel laten we precies zien hoe je dat doet.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 mb-10">
          <p className="text-sm font-medium text-gray-700 mb-3">In dit artikel</p>
          <ol className="space-y-1.5 text-sm text-gray-500 list-decimal list-inside">
            <li><a href="#hoe-werkt" className="hover:text-brand-500">Hoe werkt de zorgverzekering in Nederland?</a></li>
            <li><a href="#premies-2026" className="hover:text-brand-500">Premies en verschillen in 2026</a></li>
            <li><a href="#stappenplan" className="hover:text-brand-500">Stappenplan: zo vergelijk je slim</a></li>
            <li><a href="#eigen-risico" className="hover:text-brand-500">Eigen risico verlagen of verhogen?</a></li>
            <li><a href="#aanvullend" className="hover:text-brand-500">Heb je een aanvullende verzekering nodig?</a></li>
            <li><a href="#deadlines" className="hover:text-brand-500">Belangrijke deadlines</a></li>
            <li><a href="#valkuilen" className="hover:text-brand-500">Veelgemaakte fouten</a></li>
          </ol>
        </div>

        <div className="space-y-10">

          <section id="hoe-werkt">
            <h2 className="font-serif text-2xl font-normal mb-4">Hoe werkt de zorgverzekering in Nederland?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">In Nederland is iedereen vanaf 18 jaar verplicht een basisverzekering af te sluiten. De inhoud van die basisverzekering wordt door de overheid bepaald en is bij elke verzekeraar identiek. Verschil zit dus niet in wat je krijgt, maar in wat je betaalt en bij welke zorgverlener je terecht kunt.</p>
            <p className="text-gray-600 leading-relaxed">Naast de basisverzekering kun je een aanvullende verzekering afsluiten, bijvoorbeeld voor tandarts, fysiotherapie of brillen. Die pakketten verschillen wel per verzekeraar. Hier valt dus zowel op prijs als op dekking te besparen.</p>
          </section>

          <section id="premies-2026">
            <h2 className="font-serif text-2xl font-normal mb-4">Premies en verschillen in 2026</h2>
            <p className="text-gray-600 leading-relaxed mb-5">De gemiddelde basispremie ligt in 2026 rond de 152 euro per maand. De goedkoopste budgetpolis kan rond de 138 euro liggen, de duurste vrije keuze polis tikt 165 euro per maand aan. Dat verschil van 27 euro per maand komt neer op 324 euro per jaar.</p>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-brand-500 px-5 py-3">
                <p className="text-sm font-medium text-white">Indicatieve basispremies 2026</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Verzekeraar</th>
                    <th className="py-2.5 px-4 text-center text-xs font-medium text-gray-500">Vanaf</th>
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Kenmerk</th>
                  </tr>
                </thead>
                <tbody>
                  {verzekeraars.map((v, i) => (
                    <tr key={v.naam} className={`border-t border-gray-50 ${i % 2 !== 0 ? 'bg-gray-50' : ''}`}>
                      <td className="py-2.5 px-4 text-xs font-medium text-gray-700">{v.naam}</td>
                      <td className="py-2.5 px-4 text-center text-xs text-brand-500 font-medium">{v.basis}/mnd</td>
                      <td className="py-2.5 px-4 text-xs text-gray-500">{v.kenmerk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Indicatieve premies. Werkelijke prijzen zien je nadat je je situatie hebt ingevuld.</p>
          </section>

          <section id="stappenplan">
            <h2 className="font-serif text-2xl font-normal mb-4">Stappenplan: zo vergelijk je slim</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Wie alleen op prijs vergelijkt, kan zich misrekenen. Volg deze vijf stappen voor een eerlijke vergelijking.</p>
            <div className="space-y-3">
              {[
                { stap: '1', titel: 'Inventariseer je zorggebruik', tekst: 'Schrijf op welke zorg je het afgelopen jaar hebt gebruikt: huisarts, tandarts, fysio, medicijnen. Dit bepaalt of je een aanvullend pakket nodig hebt.' },
                { stap: '2', titel: 'Kies tussen budget, restitutie of natura', tekst: 'Een budgetpolis is goedkoper, maar je mag alleen naar gecontracteerde zorgverleners. Bij restitutie kies je vrij. Bij natura krijg je alleen volledig vergoed bij gecontracteerde zorg.' },
                { stap: '3', titel: 'Bepaal je eigen risico', tekst: 'Het verplichte eigen risico is 385 euro. Door dit vrijwillig te verhogen tot 885 euro krijg je korting op je premie. Alleen verstandig als je weinig zorg gebruikt.' },
                { stap: '4', titel: 'Vergelijk via een onafhankelijke vergelijker', tekst: 'Independer of Zorgwijzer laten alle aanbieders zien. Zo voorkom je dat je naar een commerciële tussenpartij wordt gestuurd.' },
                { stap: '5', titel: 'Sluit af voor 31 december', tekst: 'Wisselen kan tot en met 31 december. Vanaf 1 januari ben je gebonden aan je nieuwe polis voor het hele jaar.' },
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

          <section id="eigen-risico">
            <h2 className="font-serif text-2xl font-normal mb-4">Eigen risico verlagen of verhogen?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Je betaalt het eigen risico zelf voordat de zorgverzekeraar betaalt. In 2026 is het verplichte eigen risico 385 euro. Je kunt dit vrijwillig verhogen met stappen van 100 euro tot maximaal 885 euro. Hoe hoger je eigen risico, hoe lager je premie.</p>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-5">
              <p className="font-medium text-sm text-brand-700 mb-2">Wanneer is verhogen slim?</p>
              <p className="text-xs text-gray-600 leading-relaxed">Alleen als je gezond bent en weinig zorg gebruikt. Een verhoging naar 885 euro levert ongeveer 25 euro per maand premiekorting op, dus 300 euro per jaar. Maar als je dat jaar onverwacht ziek wordt, betaal je dat verschil zelf direct terug.</p>
            </div>
          </section>

          <section id="aanvullend">
            <h2 className="font-serif text-2xl font-normal mb-4">Heb je een aanvullende verzekering nodig?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Een aanvullende verzekering is alleen nuttig als je de zorg ook daadwerkelijk gebruikt. Veel mensen sluiten standaard een tandartsverzekering af, terwijl ze nauwelijks bij de tandarts komen. Reken het uit: hoeveel zou je per jaar moeten betalen, en hoeveel zou de tandarts werkelijk kosten zonder verzekering?</p>
            <p className="text-gray-600 leading-relaxed">Voor wie veel fysiotherapie nodig heeft of orthodontie voor de kinderen, kan een aanvullend pakket wel de moeite waard zijn. Bekijk de polisvoorwaarden goed: er zit vaak een maximum vergoeding per behandeling.</p>
          </section>

          <section id="deadlines">
            <h2 className="font-serif text-2xl font-normal mb-4">Belangrijke deadlines</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Op 12 november publiceren alle verzekeraars hun nieuwe premies voor het volgende jaar. Vanaf dat moment kun je gericht gaan vergelijken. Je hebt tot en met 31 december om je huidige polis op te zeggen en tot 31 januari om een nieuwe af te sluiten.</p>
            <p className="text-gray-600 leading-relaxed">Een veelgemaakte fout: alleen je huidige polis opzeggen zonder direct een nieuwe af te sluiten. Doe het in één keer, dan ben je nooit onverzekerd.</p>
          </section>

          <section id="valkuilen">
            <h2 className="font-serif text-2xl font-normal mb-4">Veelgemaakte fouten</h2>
            <div className="space-y-3">
              {[
                'Alleen op premie kijken zonder te checken of jouw zorgverlener gecontracteerd is.',
                'Een aanvullend pakket nemen voor zorg die je niet gebruikt.',
                'Eigen risico vrijwillig verhogen zonder te bedenken dat je het zelf moet kunnen voorschieten.',
                'Pas in december gaan vergelijken, waardoor je in tijdsdruk verkeerde keuzes maakt.',
                'Vergelijken via een vergelijker die maar enkele aanbieders toont.',
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
            <p className="text-gray-600 leading-relaxed mb-4">Zorgverzekering vergelijken is geen ingewikkeld klusje, maar wel een dat je elk jaar moet doen. De inhoud van de basisverzekering is overal hetzelfde, dus je betaalt voor hetzelfde product. Een uur tijd levert je gemiddeld 200 tot 400 euro per jaar op.</p>
            <p className="text-gray-600 leading-relaxed">Zelf rekenen wat je overhoudt? Bekijk onze <Link to="/tools/zorgtoeslag-berekenaar" className="text-brand-500 hover:underline">zorgtoeslag berekenaar</Link> of lees ons artikel over de <Link to="/sparen/beste-spaarrekening" className="text-brand-500 hover:underline">beste spaarrekening</Link> om je besparing direct opzij te zetten.</p>
          </section>

        </div>

        <div className="mt-10 bg-brand-500 rounded-2xl p-7 text-center text-white">
          <h2 className="font-serif text-xl font-normal mb-2">Vergelijk en bespaar in 15 minuten</h2>
          <p className="text-sm opacity-80 mb-5">Via Independer vergelijk je gratis alle Nederlandse zorgverzekeraars op premie, dekking en service.</p>
          <a href={affiliateUrl('zorgverzekering', 'zorg-artikel-cta')} target="_blank" rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-6 py-2.5 rounded-lg transition-opacity text-sm">
            Vergelijk zorgverzekeringen →
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">Dit artikel bevat een affiliate link naar Independer. Als je via onze link een polis afsluit, ontvangen wij een vergoeding. Dit heeft geen invloed op onze beoordeling. Dit artikel is informatief bedoeld en vormt geen financieel advies.</p>

      </article>
    </>
  )
}
