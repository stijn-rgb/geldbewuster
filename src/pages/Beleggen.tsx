import { PageHero, ArticleCard, AffiliateCTA, SectionHeader, InfoCard } from '../components/UI'
import SEO from '../components/SEO'
import { affiliateUrl } from '../config/affiliate'

const articles = [
  { tag: 'Beleggen', title: 'Beginnen met beleggen in 2026: de complete gids', summary: 'Alles wat je moet weten om veilig te starten met beleggen als beginner in Nederland.', readTime: 8, path: '/beleggen/beginnen-met-beleggen', live: true, affiliate: false },
  { tag: 'Broker', title: 'DEGIRO review 2026: eerlijk en volledig', summary: 'Is DEGIRO de beste broker voor jou? Wij zetten alle voor- en nadelen op een rij.', readTime: 6, path: '/beleggen/degiro-review', live: true, affiliate: true, label: 'Broker review' },
  { tag: 'Broker', title: 'Trading 212 review. Gratis beleggen, maar wat zijn de haken?', summary: 'Trading 212 biedt gratis beleggen. Maar hoe verdienen ze dan geld? En is het veilig?', readTime: 5, path: '/beleggen', live: false, affiliate: true },
  { tag: 'Broker', title: 'DEGIRO vs Trading 212. Welke is beter?', summary: 'Een eerlijke vergelijking van de twee populairste brokers in Nederland.', readTime: 7, path: '/beleggen', live: false, affiliate: true },
  { tag: "ETF's", title: "Wat is een ETF? Uitgelegd in gewone taal", summary: "Indexfondsen zijn de slimste manier om te beleggen voor de meeste mensen. Dit is waarom.", readTime: 7, path: '/beleggen/wat-is-een-etf', live: true, affiliate: false },

  { tag: "ETF's", title: "IWDA ETF. Alles wat je moet weten", summary: "De iShares Core MSCI World ETF is een van de populairste ETF's ter wereld. Dit is waarom.", readTime: 7, path: '/beleggen', live: false, affiliate: false },
  { tag: 'Crypto', title: 'Bitcoin kopen in Nederland. Veilig en goedkoop', summary: 'De beste manier om je eerste Bitcoin te kopen in 2026, zonder gedoe.', readTime: 5, path: '/beleggen', live: false, affiliate: true },
  { tag: 'Aandelen', title: 'Aandelen kopen als beginner. Zo doe je het veilig', summary: 'Stappenplan om je eerste aandelen te kopen zonder dure fouten te maken.', readTime: 6, path: '/beleggen', live: false, affiliate: false },
  { tag: 'Dividend', title: 'Dividend beleggen, zo bouw je passief inkomen op', summary: 'Hoe je een dividendportefeuille opbouwt die elke maand of kwartaal uitkeert.', readTime: 7, path: '/beleggen', live: false, affiliate: true },
]

export default function Beleggen() {
  return (
    <>
      <SEO title="Beginnen met beleggen: alles wat je moet weten" description="Leer beleggen in ETFs, aandelen en crypto. Van je eerste belegging tot een gespreide portefeuille. Begrijpelijk uitgelegd voor beginners." canonical="/beleggen" />
      <PageHero
        badge="Beleggen"
        title={<>Laat je geld <em className="text-brand-500 not-italic">voor je werken</em></>}
        subtitle="Van je eerste ETF tot een gespreide beleggingsportefeuille. Wij leggen alles uit in gewone taal."
      />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon="📈" title="ETF's & indexfondsen" body="Gespreid beleggen via indexfondsen is de slimste keuze voor de meeste mensen. Laag risico, lage kosten." />
          <InfoCard icon="🏦" title="Brokers vergelijken" body="DEGIRO, Trading 212, Saxo, wij zetten ze eerlijk naast elkaar zodat jij de beste keuze maakt." />
          <InfoCard icon="₿" title="Crypto" body="Bitcoin en andere cryptomunten. Hoog risico maar ook hoog potentieel. Wij leggen het uit zonder hype." />
        </div>
        <AffiliateCTA
          title="Begin vandaag met beleggen"
          subtitle="Open gratis een account bij DEGIRO, geen maandelijkse kosten, al vanaf €1."
          cta="Account openen bij DEGIRO →"
          href={affiliateUrl('degiro', 'beleggen-cta')}
        />
        <section>
          <SectionHeader title="Alle artikelen" subtitle="Van beginner tot gevorderde belegger" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {articles.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>
      </div>
    </>
  )
}
