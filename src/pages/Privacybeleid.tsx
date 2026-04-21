import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Privacybeleid() {
  return (
    <>
      <SEO
        title="Privacybeleid"
        description="Lees het privacybeleid van geldbewuster.nl. Hoe wij omgaan met jouw persoonsgegevens."
        canonical="/privacybeleid"
      />
      <div className="max-w-3xl mx-auto px-6 pt-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Link to="/" className="hover:text-brand-500">Home</Link>
          <span>›</span>
          <span className="text-gray-600">Privacybeleid</span>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="font-serif text-3xl font-normal mb-2">Privacybeleid</h1>
        <p className="text-xs text-gray-400 mb-8">Laatste update: april 2026</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Wie zijn wij?</h2>
            <p>Geldbewuster.nl is een handelsnaam van SVDB Performance, gevestigd te Amsterdam. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.</p>
            <div className="mt-3 bg-gray-50 rounded-xl p-5 text-sm space-y-1">
              <p><span className="text-gray-500">Handelsnaam:</span> SVDB Performance</p>
              <p><span className="text-gray-500">KvK-nummer:</span> 98417533</p>
              <p><span className="text-gray-500">BTW-nummer:</span> NL005329198B08</p>
              <p><span className="text-gray-500">Adres:</span> Keurenplein 41 Box C5983, 1069CD Amsterdam</p>
              <p><span className="text-gray-500">E-mail:</span> stijn@svdbperformance.nl</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Welke gegevens verzamelen wij?</h2>
            <p>Wij verzamelen de volgende categorieën persoonsgegevens:</p>
            <div className="mt-3 space-y-3">
              {[
                { titel: 'Analytische gegevens', tekst: 'Via Google Analytics 4 verzamelen wij geanonimiseerde gegevens over het gebruik van onze website, zoals bezochte pagina\'s, de duur van het bezoek en het type apparaat. Deze gegevens zijn niet herleidbaar tot individuele personen.' },
                { titel: 'Google Tag Manager', tekst: 'Wij gebruiken Google Tag Manager om tags en scripts te beheren op onze website, waaronder Google Analytics.' },
                { titel: 'Contactgegevens', tekst: 'Als je contact met ons opneemt via e-mail, verwerken wij je naam en e-mailadres om je vraag te beantwoorden.' },
                { titel: 'Cookiegegevens', tekst: 'Wij maken gebruik van cookies. Zie het cookiegedeelte hieronder voor meer informatie.' },
              ].map(item => (
                <div key={item.titel} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <div className="w-1 bg-brand-500 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-gray-900 mb-1">{item.titel}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.tekst}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Waarom verzamelen wij deze gegevens?</h2>
            <p>Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                'Het analyseren van websiteverkeer om de gebruikerservaring te verbeteren',
                'Het beantwoorden van vragen en verzoeken via e-mail',
                'Het bijhouden van affiliate conversies via Awin en Adtraction',
                'Het voldoen aan wettelijke verplichtingen',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Cookies</h2>
            <p>Geldbewuster.nl maakt gebruik van de volgende cookies:</p>
            <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Cookie</th>
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Doel</th>
                    <th className="py-2.5 px-4 text-left text-xs font-medium text-gray-500">Bewaartermijn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { naam: 'Google Analytics (_ga)', doel: 'Websitestatistieken', termijn: '2 jaar' },
                    { naam: 'Google Tag Manager', doel: 'Tagbeheer', termijn: 'Sessie' },
                    { naam: 'Awin tracking', doel: 'Affiliate conversies', termijn: '30 dagen' },
                    { naam: 'Adtraction tracking', doel: 'Affiliate conversies', termijn: '30 dagen' },
                  ].map(item => (
                    <tr key={item.naam}>
                      <td className="py-2.5 px-4 text-xs text-gray-700">{item.naam}</td>
                      <td className="py-2.5 px-4 text-xs text-gray-500">{item.doel}</td>
                      <td className="py-2.5 px-4 text-xs text-gray-500">{item.termijn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm">Je kunt cookies uitschakelen via de instellingen van je browser. Houd er rekening mee dat dit de functionaliteit van de website kan beïnvloeden.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Delen van gegevens met derden</h2>
            <p>Wij verkopen geen persoonsgegevens aan derden. Wij delen gegevens uitsluitend met:</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                'Google (Analytics en Tag Manager) voor websiteanalyse',
                'Awin en Adtraction voor affiliate tracking',
                'Netlify voor websitehosting',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">Al deze partijen verwerken gegevens conform de AVG en hebben passende beveiligingsmaatregelen getroffen.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Jouw rechten</h2>
            <p>Op grond van de Algemene Verordening Gegevensbescherming (AVG) heb je de volgende rechten:</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                'Recht op inzage in je persoonsgegevens',
                'Recht op rectificatie van onjuiste gegevens',
                'Recht op verwijdering van je gegevens',
                'Recht op beperking van de verwerking',
                'Recht op bezwaar tegen de verwerking',
                'Recht op dataportabiliteit',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm">Voor het uitoefenen van je rechten kun je contact opnemen via stijn@svdbperformance.nl. Wij reageren binnen 30 dagen op je verzoek.</p>
            <p className="mt-3 text-sm">Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:underline">autoriteitpersoonsgegevens.nl</a>.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Beveiliging</h2>
            <p>Wij nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Onze website maakt gebruik van HTTPS-versleuteling.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Wijzigingen in dit privacybeleid</h2>
            <p>Wij behouden het recht voor dit privacybeleid op elk moment te wijzigen. Wijzigingen worden gepubliceerd op deze pagina met een bijgewerkte datum. Wij adviseren je dit beleid periodiek te raadplegen.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-normal mb-3 text-gray-900">Contact</h2>
            <p>Heb je vragen over dit privacybeleid of de verwerking van je persoonsgegevens? Neem dan contact op via <a href="mailto:stijn@svdbperformance.nl" className="text-brand-500 hover:underline">stijn@svdbperformance.nl</a>.</p>
          </section>

        </div>
      </div>
    </>
  )
}
