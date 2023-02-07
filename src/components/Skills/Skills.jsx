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
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png',
        'https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png',
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png',
    ]

    const imagesReactNode = [
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_node_icon_130301.png',
        'https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_wordmark_logo_icon_146375.png',
        'https://cdn.icon-icons.com/icons2/112/PNG/512/python_18894.png',
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
                <div id='container-images__Skills' data-aos="fade-down" data-aos-once="true" data-aos-duration="2000">
                    {imagesSkills.map((element, index) =>
                        <img className='image-skill__skills' src={element} alt="" key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}
