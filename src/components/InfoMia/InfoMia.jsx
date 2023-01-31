import React from 'react'
import './InfoMia.css'
import { HiArrowDown } from "react-icons/hi";

export default function InfoMia() {
    return (
        <div id='container-general__infoMia'>
            <p className='texto-about__infoMia'>
                Apasionado por la tecnología y su impacto de la vida cotidiana
                y en el mundo.
            </p>
            <p className='texto-about__infoMia'>
                Perfil analista en cada aspecto de mi vida. Observador,
                detallista, comprometido, pero sobre todo optimista.
            </p>
            <p className='texto-about__infoMia'>
                Soy amante del desarrollo de Software, me fascina crear interfacez
                y experiencias de usuario óptimas, modernas e innovadoras.
            </p>
            <div id='container-flecha__infoMia'>
                <HiArrowDown id='flecha-abajo' className='animate__animated animate__bounce animate__slower animate__infinite' />
            </div>
        </div>
    )
}
