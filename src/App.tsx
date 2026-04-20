import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Beleggen from './pages/Beleggen'
import Sparen from './pages/Sparen'
import ExtraInkomen from './pages/ExtraInkomen'
import Schulden from './pages/Schulden'
import Verzekeringen from './pages/Verzekeringen'
import Tools from './pages/Tools'
import Blog from './pages/Blog'
import OverOns from './pages/OverOns'
import ScrollToTop from './components/ScrollToTop'
import BeginnenMetBeleggen from './pages/articles/BeginnenMetBeleggen'
import CompoundCalculator from './pages/tools/CompoundCalculator'
import VrijheidCalculator from './pages/tools/VrijheidCalculator'
import SchuldenCalculator from './pages/tools/SchuldenCalculator'
import BudgetPlanner from './pages/tools/BudgetPlanner'
import PensioenCalculator from './pages/tools/PensioenCalculator'
import BrokerVergelijker from './pages/tools/BrokerVergelijker'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beleggen" element={<Beleggen />} />
        <Route path="/sparen" element={<Sparen />} />
        <Route path="/extra-inkomen" element={<ExtraInkomen />} />
        <Route path="/schulden" element={<Schulden />} />
        <Route path="/verzekeringen" element={<Verzekeringen />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/tools/compound-calculator" element={<CompoundCalculator />} />
        <Route path="/tools/vrijheid-calculator" element={<VrijheidCalculator />} />
        <Route path="/tools/schulden-calculator" element={<SchuldenCalculator />} />
        <Route path="/tools/budget-planner" element={<BudgetPlanner />} />
        <Route path="/tools/pensioen-calculator" element={<PensioenCalculator />} />
        <Route path="/tools/broker-vergelijker" element={<BrokerVergelijker />} />
        <Route path="/beleggen/beginnen-met-beleggen" element={<BeginnenMetBeleggen />} />
      </Routes>
    </Layout>
  )
}
