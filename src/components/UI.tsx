import { Link } from 'react-router-dom'

// Page hero
export function PageHero({ badge, title, subtitle }: { badge: string; title: React.ReactNode; subtitle: string }) {
  return (
    <div className="border-b border-gray-200 py-14 px-6 text-center" style={{background: '#FAF7F2'}}>
      <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-4 py-1.5 rounded-full mb-4">{badge}</span>
      <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">{title}</h1>
      <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">{subtitle}</p>
    </div>
  )
}

// Article card
export function ArticleCard({ tag, title, summary, readTime, path, affiliate, live = true, label }: {
  tag: string; title: string; summary: string; readTime: number; path: string; affiliate?: boolean; live?: boolean; label?: string
}) {
  if (!live) {
    return (
      <div className="block bg-white border border-gray-100 rounded-xl p-5 opacity-60">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">{tag}</span>
          <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">Binnenkort</span>
        </div>
        <h3 className="font-medium text-sm leading-snug mb-2 text-gray-500">{title}</h3>
        <p className="text-xs text-gray-300 leading-relaxed mb-3">{summary}</p>
        <span className="text-xs text-gray-300">{readTime} min leestijd</span>
      </div>
    )
  }
  return (
    <Link to={path} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-500 transition-colors group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-brand-500 uppercase tracking-wide">{tag}</span>
        {affiliate && <span className="text-xs bg-brand-50 text-green-700 px-2 py-0.5 rounded-full">{label || 'Vergelijker'}</span>}
      </div>
      <h3 className="font-medium text-sm leading-snug mb-2 group-hover:text-brand-500 transition-colors">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed mb-3">{summary}</p>
      <span className="text-xs text-gray-300">{readTime} min leestijd</span>
    </Link>
  )
}

// Affiliate CTA block
export function AffiliateCTA({ title, subtitle, cta, href }: { title: string; subtitle: string; cta: string; href: string }) {
  return (
    <div className="bg-brand-500 rounded-2xl p-8 text-center text-white my-8">
      <h2 className="font-serif text-2xl font-normal mb-2">{title}</h2>
      <p className="text-sm opacity-80 mb-6 max-w-sm mx-auto">{subtitle}</p>
      <a href={href} target="_blank" rel="noopener sponsored" className="inline-block bg-white text-brand-500 hover:opacity-90 font-medium px-8 py-3 rounded-lg transition-opacity text-sm">
        {cta}
      </a>
      <p className="text-xs opacity-50 mt-3">Affiliate link</p>
    </div>
  )
}

// Trust bar
export function TrustBar({ items }: { items: string[] }) {
  return (
    <div className="bg-white border-y border-gray-200 py-3">
      <div className="max-w-5xl mx-auto px-6 flex justify-center gap-8 flex-wrap">
        {items.map(item => (
          <div key={item} className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-4 h-4 rounded-full bg-brand-50 text-green-700 flex items-center justify-center text-xs">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

// Section header
export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="font-serif text-2xl font-normal mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </div>
  )
}

// Info card with icon
export function InfoCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="flex gap-4 bg-white border border-gray-200 rounded-xl p-5">
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div>
        <p className="font-medium text-sm mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}
