import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import SingleUser from './pages/SingleUser.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='login' element={<Login/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='register' element={<Register/>} />
    </Routes>
  </BrowserRouter>
)
