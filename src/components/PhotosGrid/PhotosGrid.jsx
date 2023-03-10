import React from 'react'
import './PhotosGrid.css'
import 'animate.css';

export default function PhotosGrid() {



  return (
    <div id='container-general__photosGrid'>
      <div id='container-vertical__photosGrid' className='animate__animated animate__fadeIn animate__delay-2s'>
        <img id='img-vertical__photosGrid' src="../images/foto3.png" alt="" />
      </div>
      <div id='container-horizontal__photosGrid' className='animate__animated animate__fadeIn animate__delay-2s'>
        <img id='img-horizontal__photosGrid' src="../images/foto1.jpg" alt="" />
        <img id='img-horizontal__photosGrid' src="../images/foto1-color.png" alt="" />
      </div>
    </div>
  )
}
