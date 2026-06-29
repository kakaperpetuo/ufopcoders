import { Routes, Route } from 'react-router-dom'
import Login from './page/login/Login'
import Landing from './page/landing/Landing'
import Register from './page/register/Register'
import Dashboard from './page/dashboard/Dashboard'
import Profile from './page/profile/Profile'
import EditProfile from './page/profile/EditProfile'
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
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
    </Routes>
  )
}

export default App