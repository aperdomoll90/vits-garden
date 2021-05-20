import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'




function Header() {
  return (
    <>
 <nav>
    <div class="nav-wrapper background">
      <Link to="google.com" class="brand-logo">Vits Garden</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Header
