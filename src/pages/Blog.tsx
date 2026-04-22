import { useState } from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const allArticles = [
  { tag: 'Beleggen', title: 'Beginnen met beleggen in 2026: de complete gids', summary: 'Alles wat je moet weten om veilig te starten met beleggen als beginner in Nederland.', readTime: 8, path: '/beleggen/beginnen-met-beleggen', live: true, affiliate: false },
  { tag: 'Broker', title: 'DEGIRO review 2026: eerlijk en volledig', summary: 'Is DEGIRO de beste broker voor jou? Wij zetten alle voor- en nadelen op een rij.', readTime: 6, path: '/beleggen/degiro-review', live: true, affiliate: true, label: 'Broker review' },
  { tag: "ETF's", title: "Beste ETF's voor Nederlandse beleggers 2026", summary: "IWDA, VWRL, VUSA, welke indexfondsen zijn het meest geschikt voor een Nederlandse belegger?", readTime: 9, path: '/beleggen/beste-etfs', live: false, affiliate: true },
  { tag: 'Crypto', title: 'Bitcoin kopen in Nederland: veilig en goedkoop', summary: 'De beste manier om je eerste Bitcoin te kopen in 2026, zonder gedoe.', readTime: 5, path: '/beleggen/bitcoin-kopen', live: false, affiliate: true },
  { tag: 'Schulden', title: 'Uit de schulden: het complete stappenplan', summary: 'Van schuldenoverzicht tot betalingsregelingen. Alles stap voor stap uitgelegd.', readTime: 10, path: '/schulden/uit-de-schulden', live: true, affiliate: false },
  { tag: 'Schulden', title: 'Schuldhulpverlening: wie helpt jou gratis?', summary: 'Een overzicht van alle instanties die je gratis kunnen helpen bij schulden.', readTime: 6, path: '/schulden/schuldhulpverlening', live: false, affiliate: false },
  { tag: 'Sparen', title: 'Beste spaarrekening Nederland 2026', summary: 'Welke bank biedt de hoogste spaarrente? Ons actuele overzicht van alle grote aanbieders.', readTime: 5, path: '/sparen/beste-spaarrekening', live: true, affiliate: true },
  { tag: 'Sparen', title: 'Noodfonds opbouwen: hoeveel heb je nodig?', summary: 'Een noodfonds is de basis van financiële gezondheid. Zo bouw je er één op.', readTime: 5, path: '/sparen/noodfonds', live: false, affiliate: false },
  { tag: 'Budget', title: 'Budget maken in 5 stappen', summary: 'Een budget hoeft niet ingewikkeld te zijn. Met dit stappenplan ben je in een uur klaar.', readTime: 5, path: '/sparen/budget-maken', live: false, affiliate: false },
  { tag: 'Verzekeringen', title: 'Zorgverzekering vergelijken: bespaar honderden euros', summary: 'Zo vind je de goedkoopste zorgverzekering die bij jou past.', readTime: 6, path: '/verzekeringen/zorgverzekering', live: false, affiliate: true },
  { tag: 'Verzekeringen', title: 'Autoverzekering vergelijken: de complete gids', summary: 'WA, beperkt of volledig casco? En welke verzekeraar is het goedkoopst?', readTime: 7, path: '/verzekeringen/autoverzekering', live: false, affiliate: true },
  { tag: 'Vermogen', title: 'Passief inkomen genereren: 10 manieren in 2026', summary: 'Van dividend tot verhuur, een eerlijk overzicht van alle manieren om passief inkomen te verdienen.', readTime: 9, path: '/extra-inkomen/passief-inkomen', live: false, affiliate: false },
  { tag: 'Beleggen', title: 'Sparen vs beleggen: wat is slimmer in 2026?', summary: 'Wanneer spaar je en wanneer beleg je? Het antwoord hangt af van jouw situatie.', readTime: 6, path: '/sparen/sparen-vs-beleggen', live: false, affiliate: false },
]

const categories = ['Alle', 'Beleggen', "ETF's", 'Broker', 'Crypto', 'Sparen', 'Budget', 'Schulden', 'Verzekeringen', 'Vermogen']

const catColors: Record<string, string> = {
  'Beleggen': 'bg-brand-50 text-green-800',
  "ETF's": 'bg-blue-50 text-blue-800',
  'Broker': 'bg-purple-50 text-purple-800',
  'Crypto': 'bg-orange-50 text-orange-800',
  'Sparen': 'bg-sky-50 text-sky-800',
  'Budget': 'bg-yellow-50 text-yellow-800',
  'Schulden': 'bg-red-50 text-red-800',
  'Verzekeringen': 'bg-indigo-50 text-indigo-800',
  'Vermogen': 'bg-emerald-50 text-emerald-800',
}

export default function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Alle')

  const filtered = allArticles.filter(a => {
    const matchCat = activeCategory === 'Alle' || a.tag === activeCategory
    const matchSearch = search === '' ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.summary.toLowerCase().includes(search.toLowerCase()) ||
      a.tag.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <SEO title="Blog: alle artikelen over geld en financiën" description="Eerlijke, praktische artikelen over beleggen, sparen, schulden, verzekeringen en meer. Zoek en filter op onderwerp." canonical="/blog" />

      <div className="border-b border-gray-200 py-14 px-6 text-center" style={{background: '#FAF7F2'}}>
        <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-4 py-1.5 rounded-full mb-4">Blog</span>
        <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
          Alle artikelen over <em className="text-brand-500 not-italic">geld & financiën</em>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
          Eerlijke, praktische artikelen over beleggen, sparen, schulden en meer.
        </p>
        <div className="max-w-lg mx-auto relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Zoek artikelen..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat
                  ? 'bg-brand-500 text-white border-brand-500 font-medium'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-500 hover:text-brand-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} artikel{filtered.length !== 1 ? 'en' : ''} gevonden
          {activeCategory !== 'Alle' && ` in ${activeCategory}`}
          {search && ` voor "${search}"`}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(a => {
              if (!a.live) {
                return (
                  <div key={a.title} className="block bg-white border border-gray-100 rounded-xl p-5 opacity-60">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${catColors[a.tag] || 'bg-gray-100 text-gray-600'}`}>
                        {a.tag}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">Binnenkort</span>
                    </div>
                    <h2 className="font-medium text-sm leading-snug mb-2 text-gray-500">{a.title}</h2>
                    <p className="text-xs text-gray-300 leading-relaxed mb-3">{a.summary}</p>
                    <span className="text-xs text-gray-300">{a.readTime} min leestijd</span>
                  </div>
                )
              }
              return (
                <Link key={a.title} to={a.path} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-500 transition-colors group">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${catColors[a.tag] || 'bg-gray-100 text-gray-600'}`}>
                      {a.tag}
                    </span>
                    {a.affiliate && (
                      <span className="text-xs bg-brand-50 text-green-700 px-2 py-0.5 rounded-full">Vergelijker</span>
                    )}
                  </div>
                  <h2 className="font-medium text-sm leading-snug mb-2 group-hover:text-brand-500 transition-colors">{a.title}</h2>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3">{a.summary}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <span>Stijn</span>
                    <span>{a.readTime} min leestijd</span>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-medium text-gray-700 mb-1">Geen artikelen gevonden</p>
            <p className="text-sm text-gray-400">Probeer een andere zoekterm of categorie</p>
            <button onClick={() => { setSearch(''); setActiveCategory('Alle') }} className="mt-4 text-sm text-brand-500 hover:underline">
              Wis filters
            </button>
          </div>
        )}
      </div>
    </>
  )
}
