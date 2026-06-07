import { Routes, Route } from 'react-router-dom'
import Login from './page/login/Login'
import Landing from './page/landing/Landing'
import Register from './page/register/Register'
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
    </Routes>
  )
}

export default App