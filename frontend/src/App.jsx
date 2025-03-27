import { Header } from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Teams } from './pages/Teams.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
