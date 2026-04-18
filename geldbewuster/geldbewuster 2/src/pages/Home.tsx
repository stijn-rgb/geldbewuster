import { Link } from 'react-router-dom'
import { affiliateUrl } from '../config/affiliate'
import { TrustBar, ArticleCard } from '../components/UI'

const categories = [
  { icon: '📈', label: 'Opbouwen', desc: 'Beleggen, ETF\'s, crypto', path: '/opbouwen', color: 'bg-brand-50' },
  { icon: '🛡️', label: 'Beschermen', desc: 'Verzekeringen & zekerheid', path: '/beschermen', color: 'bg-blue-50' },
  { icon: '💳', label: 'Oplossen', desc: 'Schulden & hulp', path: '/oplossen', color: 'bg-orange-50' },
  { icon: '💡', label: 'Slim leven', desc: 'Besparen & budgetteren', path: '/slim-leven', color: 'bg-yellow-50' },
  { icon: '⚖️', label: 'Vergelijker', desc: 'Brokers, sparen, energie', path: '/vergelijker', color: 'bg-purple-50' },
  { icon: '🧾', label: 'Persoonlijk', desc: 'Belasting, hypotheek, ZZP', path: '/persoonlijk', color: 'bg-pink-50' },
]

const featured = [
  { tag: 'Beleggen', title: 'Beginnen met beleggen in 2025 — de complete gids', summary: 'Alles wat je moet weten om veilig te starten met beleggen als beginner in Nederland.', readTime: 8, path: '/opbouwen', affiliate: false },
  { tag: 'Schulden', title: 'Uit de schulden: welke instanties kunnen je helpen?', summary: 'Een overzicht van alle Nederlandse instanties die je gratis kunnen helpen bij schulden.', readTime: 6, path: '/oplossen', affiliate: false },
  { tag: 'Crypto', title: 'Bitcoin kopen als beginner — veilig en goedkoop', summary: 'Hoe je je eerste Bitcoin koopt zonder teveel te betalen en zonder gedoe.', readTime: 5, path: '/opbouwen', affiliate: true },
  { tag: "ETF's", title: "Wat is een ETF en waarom kiezen zoveel mensen ervoor?", summary: "Indexfondsen uitgelegd in gewone taal — en waarom ze voor de meeste mensen de slimste keuze zijn.", readTime: 7, path: '/opbouwen', affiliate: false },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gray-50 border-b border-gray-200 py-20 px-6 text-center">
        <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-4 py-1.5 rounded-full mb-5">
          Eerlijk financieel advies voor Nederland
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-5 max-w-2xl mx-auto">
          Word <em className="text-brand-500 not-italic">geldbewuster</em><br />met elke keuze die je maakt
        </h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-8 leading-relaxed">
          Van schulden aflossen tot beleggen in ETF's — wij leggen het uit zonder jargon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={affiliateUrl('degiro', 'homepage-hero')}
            target="_blank"
            rel="noopener sponsored"
            className="inline-block bg-brand-500 hover:bg-brand-700 text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Begin met beleggen →
          </a>
          <Link to="/oplossen" className="inline-block bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-lg transition-colors">
            Hulp bij schulden
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-3">Bevat affiliate links — geen extra kosten voor jou</p>
      </div>

      {/* TRUST */}
      <TrustBar items={['Onafhankelijk', 'Zonder jargon', 'Eerlijke vergelijking', 'Actueel']} />

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-14">

        {/* CATEGORIES */}
        <section>
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-normal mb-1">Waar wil je mee beginnen?</h2>
            <p className="text-sm text-gray-400">Kies een onderwerp dat past bij jouw situatie</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <Link key={cat.path} to={cat.path} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-500 transition-colors group">
                <div className={`w-10 h-10 ${cat.color} rounded-lg flex items-center justify-center text-xl mb-3`}>{cat.icon}</div>
                <p className="font-medium text-sm mb-1 group-hover:text-brand-500 transition-colors">{cat.label}</p>
                <p className="text-xs text-gray-400">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED */}
        <section>
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-normal mb-1">Populaire artikelen</h2>
            <p className="text-sm text-gray-400">De meest gelezen pagina's van dit moment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map(a => (
              <ArticleCard key={a.title} {...a} />
            ))}
          </div>
        </section>

        {/* AFFILIATE CTA */}
        <div className="bg-brand-500 rounded-2xl p-10 text-center text-white">
          <h2 className="font-serif text-2xl font-normal mb-2">Klaar om te starten met beleggen?</h2>
          <p className="text-sm opacity-80 mb-6 max-w-sm mx-auto">Open gratis een account bij DEGIRO — Nederland's populairste broker voor beginners.</p>
          <a
            href={affiliateUrl('degiro', 'homepage-cta')}
            target="_blank"
            rel="noopener sponsored"
            className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-8 py-3 rounded-lg transition-opacity"
          >
            Account openen →
          </a>
          <p className="text-xs opacity-50 mt-3">Affiliate link — geen extra kosten voor jou</p>
        </div>

      </div>
    </>
  )
}
