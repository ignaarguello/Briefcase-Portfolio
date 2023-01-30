import React from 'react'
import './PhotosGrid.css'

export default function PhotosGrid() {
  return (
    <div id='container-general__photosGrid'>
      <div id='container-vertical__photosGrid'>
        <img id='img-vertical__photosGrid' src="../foto2.png" alt="" />
      </div>
      <div id='container-horizontal__photosGrid'>
        <img id='img-horizontal__photosGrid' src="../foto1.jpg" alt="" />
        <img id='img-horizontal__photosGrid' src="../foto3.png" alt="" />
      </div>
    </div>
  )
}
