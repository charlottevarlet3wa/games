import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hangman from './pages/Hangman'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hangman" element={<Hangman />} />
      </Routes>
    </>
  )
}

export default App
