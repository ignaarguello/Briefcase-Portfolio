import React from 'react'
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Skills() {

    useEffect(() => {
        AOS.init();
    }, [])

    const imagesSkills = [
        'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
        'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
        'https://cdn-icons-png.flaticon.com/512/1199/1199124.png',
    ]



    return (
        <div id='container-general__Skills'>
            <h2 id='titulo-stack__Skills' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">- Stack de Tecnologías -</h2>
            <div id='container-images__Skills'>
                {imagesSkills.map((element) => 
                    <img className='image-skill__skills' src={element} alt="" />
                )}
            </div>
        </div>
    )
}
