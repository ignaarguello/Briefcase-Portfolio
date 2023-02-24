import React from 'react'
import './Home.css'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import 'animate.css';
import BarraIzquierda from '../../components/BarraIzquierda/BarraIzquierda';
import InfoMia from '../../components/InfoMia/InfoMia'
import Skills from '../../components/Skills/Skills';
import homeActions from '../../redux/actions/homeActions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'


export default function Home() {
  const { theme } = useSelector(store => store.home)

  /* Use Effect para cuando se monta el componente */

  useEffect(() => {
    const body = document.body
    const titulo_ignacio = document.querySelector('#titulo-ignacio__home')
    const buttonCV = document.querySelector('#button-descargarCV__home')
    const titulo_acerca = document.querySelector('#titulo-acerca__home')
    const texto_1 = document.querySelector('#text-1')
    const texto_2 = document.querySelector('#text-2')
    const texto_3 = document.querySelector('#text-3')

    if (theme === true) {
      /* Body */
      body.classList.add('bg-body__white')
      /* Textos */
      titulo_ignacio.classList.add('text-black')
      /* Button */
      buttonCV.classList.add('text-light__bg-dark')
      /* Skills */
      titulo_acerca.classList?.remove('text-white')
      titulo_acerca.classList?.add('text-black')
      /* Info mia */
      texto_1.classList?.remove('text-white')
      texto_1.classList.add('text-black', 'font-lg')
      texto_2.classList?.remove('text-white')
      texto_2.classList.add('text-black', 'font-lg')
      texto_3.classList?.remove('text-white')
      texto_3.classList.add('text-black', 'font-lg')
    }
  }, [])

  return (
    <div id='container-home-page__home' className='animate__animated animate__fadeIn animate__delay-1s'>
      <div id='container-grid-titulos__home'>
        <div id='container-titulos__home'>
          <h2 id='titulo-ignacio__home'>Argüello Ignacio</h2>
          <h4 id='titulo-fullstack__home'>Full Stack Developer MERN - Web and Mobile</h4>
          <a id='button-descargarCV__home' href='../cv.pdf' download>Descargar CV</a>
        </div>
        <PhotosGrid />
      </div>
      <BarraIzquierda />
      <h2 id='titulo-acerca__home'>- Acerca de mí -</h2>
      <InfoMia />
      <Skills />
    </div>
  )
}
