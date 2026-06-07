import { Routes, Route, Link } from 'react-router-dom'
import Login from './page/login/Login'
import './App.css'

function Home() {
  return (
    <div className="min-h-screen bg-[#09080f] text-white flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-bold mb-6">UFOP Coders</h1>
      <Link 
        to="/login" 
        className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-6 py-2 rounded-lg transition-colors"
      >
        Go to Login
      </Link>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
