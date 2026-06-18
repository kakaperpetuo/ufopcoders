import { Routes, Route } from 'react-router-dom'
import Login from './page/login/Login'
import Landing from './page/landing/Landing'
import Register from './page/register/Register'
import Dashboard from './page/dashboard/Dashboard'
import './App.css'
export function Home() {
  return <Landing />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App