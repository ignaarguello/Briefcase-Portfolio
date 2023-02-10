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
        '../images/html.png',
        '../images/css.png',
        '../images/js.png',
        '../images/tailwind.png',
        '../images/boostrap.png',
    ]

    const imagesReactNode = [
        '../images/node.png',
        '../images/react.png',
        '../images/py.png',
    ]

    return (
        <div id='container-general__Skills'>
            <h2 id='titulo-stack__Skills' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">- Stack de Tecnologías -</h2>
                <div id='container-images__Skills2' data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
                    {imagesReactNode.map((element, index) =>
                        <img className='image-skill__skills' src={element} alt="" key={index} />
                    )}
                </div>
            <div id='container-skillsImages__skills'>
                <div id='container-images__Skills' data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="2000">
                    {imagesSkills.map((element, index) =>
                        <img className='image-skill__skills' src={element} alt="" key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}
