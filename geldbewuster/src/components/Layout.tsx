import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { affiliateUrl } from '../config/affiliate'

const navItems = [
  { label: 'Opbouwen', path: '/opbouwen' },
  { label: 'Beschermen', path: '/beschermen' },
  { label: 'Oplossen', path: '/oplossen' },
  { label: 'Slim leven', path: '/slim-leven' },
  { label: 'Vergelijker', path: '/vergelijker' },
  { label: 'Persoonlijk', path: '/persoonlijk' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-lg text-gray-900">geldbewuster.nl</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${location.pathname === item.path ? 'text-brand-500 font-medium' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={affiliateUrl('degiro', 'navbar')}
              target="_blank"
              rel="noopener sponsored"
              className="hidden md:inline-block bg-brand-500 hover:bg-brand-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Start gratis
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-500"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-600 py-1"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={affiliateUrl('degiro', 'navbar-mobile')}
              target="_blank"
              rel="noopener sponsored"
              className="bg-brand-500 text-white text-sm font-medium px-4 py-2 rounded-lg text-center mt-2"
            >
              Start gratis bij DEGIRO
            </a>
          </div>
        )}
      </nav>

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
                <Link to="/opbouwen" className="text-xs text-gray-400 hover:text-gray-600">Beginnen met beleggen</Link>
                <Link to="/oplossen" className="text-xs text-gray-400 hover:text-gray-600">Uit de schulden</Link>
                <Link to="/vergelijker" className="text-xs text-gray-400 hover:text-gray-600">Brokers vergelijken</Link>
                <Link to="/beschermen" className="text-xs text-gray-400 hover:text-gray-600">Verzekeringen</Link>
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
