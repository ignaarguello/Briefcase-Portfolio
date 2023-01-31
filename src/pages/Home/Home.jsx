import React from 'react'
import './Home.css'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'

export default function Home() {
  return (
    <div id='container-home-page__home'>
      <h2 id='titulo-ignacio__home'>Argüello Ignacio</h2>
      <h4 id='titulo-fullstack__home'>Full Stack Developer MERN - Mobile and Web</h4>
      <PhotosGrid/>
    </div>
  )
}
