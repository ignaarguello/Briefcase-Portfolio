import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div id='container-general__footer'>
      <div id='container-anchors__footer'>
        <Link to='/' className="anchor-footer__footer">Home</Link>
        <Link to='/about' className="anchor-footer__footer">About Me</Link>
        <Link to='/projects' className="anchor-footer__footer">Projects</Link>
      </div>
      <div id='container-textos__footer'>
          <h2 className='titulo-ignacio__footer'>- Argüello Ignacio -</h2>
          <h2 className='titulo-desarrollador__footer'>Desarrollador Full Stack MERN - Web and Mobile</h2>
      </div>
    </div>
  )
}
