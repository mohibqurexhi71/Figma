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
import Blog from './pages/Blog.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='login' element={<Login/>} />
      <Route path='profile' element={<Profile/>} />
      <Route path='register' element={<Register/>} />
      <Route path='blog' element={<Blog/>} />
    </Routes>
  </BrowserRouter>
)

// ok now you tell me how to install tailwind and how to use  i forgot and i try again to learn well  in my project then we goto the next steps that you suggest me . you just tell me go to tailwindwebsite this this ... don't give me command to paste it i want to learn where i find it 