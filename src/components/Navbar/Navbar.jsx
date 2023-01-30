import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id='container-general__navbar'>
      <img id='logo-portfolio__navbar' src="./logo-port2.png" alt="" />
      <div id='container-refs__navbar'>
        <Link to='/' className="item-nav__navbar">Home</Link>
        <Link to='/about' className="item-nav__navbar">About me</Link>
        <Link to='/more' className="item-nav__navbar">More+</Link>
      </div>
    </div>
  )
}
