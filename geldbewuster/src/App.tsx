import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Opbouwen from './pages/Opbouwen'
import Beschermen from './pages/Beschermen'
import Oplossen from './pages/Oplossen'
import SlimLeven from './pages/SlimLeven'
import Vergelijker from './pages/Vergelijker'
import Persoonlijk from './pages/Persoonlijk'
import OverOns from './pages/OverOns'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opbouwen" element={<Opbouwen />} />
        <Route path="/beschermen" element={<Beschermen />} />
        <Route path="/oplossen" element={<Oplossen />} />
        <Route path="/slim-leven" element={<SlimLeven />} />
        <Route path="/vergelijker" element={<Vergelijker />} />
        <Route path="/persoonlijk" element={<Persoonlijk />} />
        <Route path="/over-ons" element={<OverOns />} />
      </Routes>
    </Layout>
  )
}
