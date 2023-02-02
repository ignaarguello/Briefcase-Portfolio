import React from 'react'
import './Layout.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Layout(props) {
  return (
    <div id='container-general__layout'>
        <Navbar/>
        <div id='container-childrenProps__layout'>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}
