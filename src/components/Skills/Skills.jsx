import React from 'react'
import './Skills.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Skills() {

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div id='container-general__Skills'>
            <h2 id='titulo-stack__Skills' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">- Stack de Tecnologías -</h2>
        </div>
    )
}
