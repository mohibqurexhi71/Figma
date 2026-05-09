import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
function Navbar() {
  return (
    <div className='bg-purple-500 flex justify-center gap-7 p-7  '>
      <Link to={'/'} className='text-white font-medium hover:underline hover:bg-purple-800 '  >Home</Link>
      <Link to={'/login'} className='text-white font-medium hover:underline hover:bg-purple-800' >Login</Link>
      <Link to={'/dashboard'} className='text-white font-medium hover:underline hover:bg-purple-800' >Dashboard</Link>
      <Link to={'/profile'} className='text-white font-medium hover:underline hover:bg-purple-800' >Profile</Link>
      <Link to={'/register'} className='text-white font-medium hover:underline hover:bg-purple-800' >Register</Link>
      <Link to={'/blog'} className='text-white font-medium hover:underline hover:bg-purple-800' >Blog</Link>
    </div>
  )
}

export default Navbar
