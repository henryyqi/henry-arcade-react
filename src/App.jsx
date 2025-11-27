import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import ArcadeMenu from './pages/ArcadeMenu/ArcadeMenu.jsx'
import GameShell from './pages/GameShell/GameShell.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArcadeMenu />} />
        <Route path="/game/:gameID" element={<GameShell />} />
      </Routes>
    </Router>
    
    
  )
}

export default App
