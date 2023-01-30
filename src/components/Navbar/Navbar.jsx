import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div id='container-general__navbar'>
      <img id='logo-portfolio__navbar' src="./logo-port2.png" alt="" />
      <div id='container-refs__navbar'>
        <div className="item-nav__navbar">Home</div>
        <div className="item-nav__navbar">About me</div>
        <div className="item-nav__navbar">More+</div>
      </div>
    </div>
  )
}
