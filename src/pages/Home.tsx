import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { affiliateUrl } from '../config/affiliate'
import { TrustBar, ArticleCard } from '../components/UI'

const categories = [
  { icon: '📈', label: 'Beleggen', desc: "Aandelen, ETF's, crypto", path: '/beleggen', color: 'bg-brand-50' },
  { icon: '🏦', label: 'Sparen', desc: 'Spaarrekeningen & noodfonds', path: '/sparen', color: 'bg-blue-50' },
  { icon: '💸', label: 'Extra inkomen', desc: 'Passief inkomen & dividend', path: '/extra-inkomen', color: 'bg-yellow-50' },
  { icon: '💳', label: 'Schulden', desc: 'Hulp & stappenplan', path: '/schulden', color: 'bg-orange-50' },
  { icon: '🛡️', label: 'Verzekeringen', desc: 'Vergelijken & besparen', path: '/verzekeringen', color: 'bg-purple-50' },
  { icon: '🧮', label: 'Tools', desc: 'Calculators & planners', path: '/tools', color: 'bg-pink-50' },
]

const featured = [
  { tag: 'Beleggen', title: 'Beginnen met beleggen in 2025: de complete gids', summary: 'Alles wat je moet weten om veilig te starten met beleggen als beginner in Nederland.', readTime: 8, path: '/beleggen', affiliate: false },
  { tag: 'Schulden', title: 'Uit de schulden: welke instanties kunnen je helpen?', summary: 'Een overzicht van alle Nederlandse instanties die je gratis kunnen helpen bij schulden.', readTime: 6, path: '/schulden', affiliate: false },
  { tag: 'Crypto', title: 'Bitcoin kopen als beginner. Veilig en goedkoop', summary: 'Hoe je je eerste Bitcoin koopt zonder teveel te betalen en zonder gedoe.', readTime: 5, path: '/beleggen', affiliate: true },
  { tag: "ETF's", title: "Wat is een ETF en waarom kiezen zoveel mensen ervoor?", summary: "Indexfondsen uitgelegd in gewone taal, en waarom ze voor de meeste mensen de slimste keuze zijn.", readTime: 7, path: '/beleggen', affiliate: false },
]

export default function Home() {
  return (
    <>
      <SEO title="De plek voor al jouw financiële vragen" description="Geldbewuster.nl helpt je door de wereld van financiën. Alles over beleggen, sparen, schulden en verzekeringen. Begrijpelijk uitgelegd." canonical="/" />
      <div className="relative overflow-hidden border-b border-gray-200 py-20 px-6 text-center" style={{background: '#FAF7F2'}}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 280 C200 230 450 310 700 260 C900 220 1050 280 1200 245 L1200 500 L0 500Z" fill="#1D9E75" opacity="0.05"/>
          <path d="M0 330 C180 300 400 350 650 315 C880 280 1050 330 1200 300 L1200 500 L0 500Z" fill="#1D9E75" opacity="0.06"/>
          <path d="M0 390 C220 365 450 400 700 375 C950 350 1100 385 1200 368 L1200 500 L0 500Z" fill="#1D9E75" opacity="0.04"/>
        </svg>
        <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-4 py-1.5 rounded-full mb-5">
          De plek voor al jouw financiële vragen
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-5 max-w-2xl mx-auto">
          Geld kan ingewikkeld zijn.<br /><em className="text-brand-500 not-italic">Wij maken het simpel.</em>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Of je nu wilt starten met beleggen, je vermogen wilt laten groeien, slimmer wilt budgetteren of hulp nodig hebt bij schulden. Geldbewuster.nl helpt je door de wereld van financiën heen.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={affiliateUrl('degiro', 'homepage-hero')} target="_blank" rel="noopener sponsored" className="inline-block bg-brand-500 hover:bg-brand-700 text-white font-medium px-8 py-4 rounded-lg transition-colors">
            Begin met beleggen →
          </a>
          <Link to="/schulden" className="inline-block bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-lg transition-colors">
            Hulp bij schulden
          </Link>
        </div>

      </div>

      <TrustBar items={['Onafhankelijk', 'Begrijpelijk uitgelegd', 'Altijd actueel', 'Eerlijke vergelijkingen']} />

      <div className="max-w-5xl mx-auto px-6 py-14 space-y-14">
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <Link key={cat.path} to={cat.path} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className={`w-11 h-11 ${cat.color} rounded-xl flex items-center justify-center text-xl mb-4`}>{cat.icon}</div>
                <p className="font-medium text-sm mb-1.5 group-hover:text-brand-500 transition-colors">{cat.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-normal mb-1">Populaire artikelen</h2>
            <p className="text-sm text-gray-400">De meest gelezen pagina's van dit moment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map(a => <ArticleCard key={a.title} {...a} />)}
          </div>
        </section>

        <div className="bg-brand-500 rounded-2xl p-10 text-center text-white">
          <h2 className="font-serif text-2xl font-normal mb-2">Klaar om te starten met beleggen?</h2>
          <p className="text-sm opacity-80 mb-6 max-w-sm mx-auto">Open gratis een account bij DEGIRO, Nederland's populairste broker voor beginners.</p>
          <a href={affiliateUrl('degiro', 'homepage-cta')} target="_blank" rel="noopener sponsored" className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-8 py-3 rounded-lg transition-opacity">
            Account openen →
          </a>

        </div>
      </div>
    </>
  )
}
