import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { affiliateUrl } from '../config/affiliate'

const navItems = [
  { label: 'Beleggen', path: '/beleggen' },
  { label: 'Sparen', path: '/sparen' },
  { label: 'Extra inkomen', path: '/extra-inkomen' },
  { label: 'Schulden & hulp', path: '/schulden' },
  { label: 'Verzekeringen', path: '/verzekeringen' },
  { label: 'Tools', path: '/tools' },
  { label: 'Blog', path: '/blog' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* FLOATING PILL NAV */}
      <div className="sticky top-0 z-20 flex justify-center px-4 pt-4 pb-2">
        <nav className="w-full max-w-4xl bg-white/90 backdrop-blur border border-black/10 rounded-full px-2 py-1.5 flex items-center gap-1 shadow-sm">
          <Link to="/" className="font-serif text-sm text-gray-900 pl-2 pr-3 mr-auto whitespace-nowrap flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{background: '#1A1A18'}}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="9" width="3" height="5" rx="1" fill="#1D9E75" fillOpacity="0.45"/>
                <rect x="6" y="5" width="3" height="9" rx="1" fill="#1D9E75" fillOpacity="0.72"/>
                <rect x="11" y="1" width="3" height="13" rx="1" fill="#1D9E75"/>
                <line x1="0.5" y1="14.5" x2="15.5" y2="14.5" stroke="#1D9E75" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4"/>
              </svg>
            </div>
            <span>geld<span className="text-brand-500">bewuster</span>.nl</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs px-2.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'bg-gray-100 text-gray-900 font-medium'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href={affiliateUrl('degiro', 'navbar')}
            target="_blank"
            rel="noopener sponsored"
            className="hidden md:inline-block bg-brand-500 hover:bg-brand-700 text-white text-xs font-medium px-3.5 py-2 rounded-full transition-colors ml-1 whitespace-nowrap"
          >
            Start gratis →
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-500 ml-1"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white border border-black/10 rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-2 z-30">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-600 py-1.5 border-b border-gray-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={affiliateUrl('degiro', 'navbar-mobile')}
              target="_blank"
              rel="noopener sponsored"
              className="bg-brand-500 text-white text-sm font-medium px-4 py-2.5 rounded-full text-center mt-1"
            >
              Start gratis bij DEGIRO →
            </a>
          </div>
        )}
      </div>

      {/* PAGE CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-10 mt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-serif text-lg mb-3">geldbewuster.nl</p>
              <p className="text-xs text-gray-400 leading-relaxed">Eerlijk financieel advies voor Nederland. Zonder jargon, zonder verborgen agenda.</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Categorieën</p>
              <div className="flex flex-col gap-2">
                {navItems.map(item => (
                  <Link key={item.path} to={item.path} className="text-xs text-gray-400 hover:text-gray-600">{item.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Populair</p>
              <div className="flex flex-col gap-2">
                <Link to="/beleggen" className="text-xs text-gray-400 hover:text-gray-600">Beginnen met beleggen</Link>
                <Link to="/schulden" className="text-xs text-gray-400 hover:text-gray-600">Uit de schulden</Link>
                <Link to="/beleggen" className="text-xs text-gray-400 hover:text-gray-600">Beste ETF's 2025</Link>
                <Link to="/verzekeringen" className="text-xs text-gray-400 hover:text-gray-600">Verzekeringen vergelijken</Link>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-3">Over</p>
              <div className="flex flex-col gap-2">
                <Link to="/over-ons" className="text-xs text-gray-400 hover:text-gray-600">Over ons</Link>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Privacybeleid</a>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Disclaimer</a>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-6 text-xs text-gray-400 leading-relaxed">
            <p>Deze website bevat affiliate links. Wij ontvangen een vergoeding als je via onze links producten of diensten afneemt. Dit heeft geen invloed op onze beoordeling. De informatie op deze website vormt geen financieel advies. Beleggen brengt risico's met zich mee.</p>
            <p className="mt-2">© {new Date().getFullYear()} geldbewuster.nl</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
