import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import ArcadeMenu from './pages/ArcadeMenu/ArcadeMenu.jsx'
import GameShell from './pages/GameShell/GameShell.jsx'
import Blackjack from './games/blackjack/index.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArcadeMenu />} />
        <Route path="/game/:gameID" element={<GameShell />} />
        <Route path="/game/react/blackjack" element={<Blackjack />} />
      </Routes>
    </Router>
    
    
  )
}

export default App
