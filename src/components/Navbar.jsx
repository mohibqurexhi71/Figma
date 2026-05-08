import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
function Navbar() {
  return (
    <div className='navbar'>
      <Link to={'/'} >Home</Link>
      <Link to={'/login'} >Login</Link>
      <Link to={'/dashboard'} >Dashboard</Link>
      <Link to={'/profile'} >Profile</Link>
      <Link to={'/register'} >Register</Link>
    </div>
  )
}

export default Navbar
