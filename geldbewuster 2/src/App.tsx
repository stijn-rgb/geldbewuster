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
      </Routes>
    </Layout>
  )
}
