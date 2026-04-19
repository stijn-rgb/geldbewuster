import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const tools = [
  { icon: '📈', title: 'Compound interest calculator', desc: 'Bereken wat jouw maandelijkse inleg oplevert na 10, 20 of 30 jaar bij verschillende rendementen.', path: '/tools/compound-calculator', klaar: true },
  { icon: '🎯', title: 'Hoeveel heb ik nodig?', desc: 'Bereken hoeveel vermogen je nodig hebt om financieel vrij te zijn of eerder te stoppen met werken.', path: '/tools/vrijheid-calculator', klaar: true },
  { icon: '⚖️', title: 'Broker vergelijker', desc: 'Vergelijk DEGIRO, Trading 212, Saxo en andere brokers op kosten, functies en geschiktheid.', path: '/tools/broker-vergelijker', klaar: true },
  { icon: '💳', title: 'Schulden calculator', desc: 'Bereken hoe lang het duurt om je schulden af te lossen en hoeveel rente je betaalt.', path: '/tools/schulden-calculator', klaar: true },
  { icon: '📊', title: 'Budget planner', desc: 'Vul je inkomsten en uitgaven in en zie direct waar je kunt besparen.', path: '/tools/budget-planner', klaar: true },
  { icon: '🏦', title: 'Pensioen calculator', desc: 'Bereken hoeveel je maandelijks moet inleggen om op je gewenste pensioenleeftijd te stoppen.', path: '/tools/pensioen-calculator', klaar: true },
]

export default function Tools() {
  return (
    <>
      <SEO title="Gratis financiële tools en calculators" description="Bereken je vermogensgroei, schuldenvrij datum, pensioen en meer. Zes gratis calculators voor slimmere financiële keuzes." canonical="/tools" />
      <div className="bg-gray-50 border-b border-gray-200 py-14 px-6 text-center">
        <span className="inline-block bg-brand-50 text-green-800 text-xs font-medium px-4 py-1.5 rounded-full mb-4">Tools</span>
        <h1 className="font-serif text-3xl md:text-4xl font-normal leading-tight mb-4">
          Gratis financiële <em className="text-brand-500 not-italic">calculators</em>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
          Bereken je vermogensgroei, schuldenvrij datum, pensioen en meer, in seconden.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map(tool => (
            tool.klaar ? (
              <Link key={tool.path} to={tool.path}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{tool.icon}</div>
                <div className="flex-1">
                  <p className="font-medium text-sm mb-1.5 group-hover:text-brand-500 transition-colors">{tool.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{tool.desc}</p>
                  <span className="inline-block mt-3 text-xs text-brand-500 font-medium">Gebruik tool →</span>
                </div>
              </Link>
            ) : (
              <div key={tool.path} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 opacity-60">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{tool.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <p className="font-medium text-sm">{tool.title}</p>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Binnenkort</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </>
  )
}
