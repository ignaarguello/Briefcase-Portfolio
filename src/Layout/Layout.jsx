import React from 'react'
import './Layout.css'
import Navbar from '../components/Navbar/Navbar'

export default function Layout(props) {
  return (
    <div id='container-general__layout'>
        <Navbar/>
        <div id='container-childrenProps__layout'>
            {props.children}
        </div>
    </div>
  )
}
