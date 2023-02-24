import React from 'react'
import './DarkLight.css'
import { useEffect } from 'react'
import homeActions from '../../redux/actions/homeActions'
import { useDispatch, useSelector } from 'react-redux'

export default function DarkLight() {
    const { change_false, change_true } = homeActions
    const { theme } = useSelector(store => store.home)
    const dispatch = useDispatch()

    /* Function 'change' del boton */

    const change = () => {
        const body = document.body
        const titulo_ignacio = document.querySelector('#titulo-ignacio__home')
        const buttonCV = document.querySelector('#button-descargarCV__home')
        const titulo_acerca = document.querySelector('#titulo-acerca__home')
        const texto_1 = document.querySelector('#text-1')
        const texto_2 = document.querySelector('#text-2')
        const texto_3 = document.querySelector('#text-3')

        if (theme === false) {
            dispatch(change_true())
            /* Body */
            body.classList.remove('bg-body__black')
            body.classList.add('bg-body__white')
            /* Textos */
            titulo_ignacio.classList.remove('text-white')
            titulo_ignacio.classList.add('text-black')
            /* Button */
            buttonCV.classList.add('text-light__bg-dark')
            /* Skills */
            titulo_acerca.classList.remove('text-white')
            titulo_acerca.classList.add('text-black')
            /* Info mia */
            texto_1.classList.remove('text-white')
            texto_1.classList.add('text-black', 'font-lg')
            texto_2.classList.remove('text-white')
            texto_2.classList.add('text-black', 'font-lg')
            texto_3.classList.remove('text-white')
            texto_3.classList.add('text-black', 'font-lg')
        }

        if (theme === true) {
            dispatch(change_false())
            /* Body */
            body.classList.remove('bg-body__white')
            body.classList.add('bg-body__black')
            /* Textos */
            titulo_ignacio.classList.remove('text-black')
            titulo_ignacio.classList.add('text-white')
            /* Button */
            buttonCV.classList.remove('text-light__bg-dark')
            /* Skills */
            titulo_acerca.classList.remove('text-black')
            titulo_acerca.classList.add('text-white')
            /* Info mia */
            texto_1.classList.remove('text-black', 'font-lg')
            texto_1.classList.add('text-white')
            texto_2.classList.remove('text-black', 'font-lg')
            texto_2.classList.add('text-white')
            texto_3.classList.remove('text-black', 'font-lg')
            texto_3.classList.add('text-white')
        }
    }

    return (
        <div className="check" >
            <input id="check" type="checkbox" onClick={change} />
            <label htmlFor="check"></label>
        </div>
    )
}
