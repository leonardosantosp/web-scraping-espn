import { Header } from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Teams } from './pages/Teams.jsx'
import { Players } from './pages/Players.jsx'
import { Player } from './pages/Player.jsx'
import { Team } from './pages/Team.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:id" element={<Player />} />
          <Route path="/teams/:id" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
