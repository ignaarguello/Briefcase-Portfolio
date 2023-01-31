import React from 'react'
import './Home.css'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import 'animate.css';
import BarraIzquierda from '../../components/BarraIzquierda/BarraIzquierda';
import InfoMia from '../../components/InfoMia/InfoMia'

export default function Home() {
  return (
    <div id='container-home-page__home' className='animate__animated animate__fadeIn animate__delay-1s'>
      <div id='container-grid-titulos__home'>
        <div id='container-titulos__home'>
          <h2 id='titulo-ignacio__home'>_Argüello Ignacio</h2>
          <h4 id='titulo-fullstack__home'>Full Stack Developer MERN - Mobile and Web</h4>
        </div>
        <PhotosGrid />
      </div>
      <BarraIzquierda />
      <h2 id='titulo-acerca__home'>- Acerca de mí -</h2>
      <InfoMia/>
    </div>
  )
}
