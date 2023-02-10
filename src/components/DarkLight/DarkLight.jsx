import React from 'react'
import './DarkLight.css'
import { useState } from 'react'


export default function DarkLight() {

    let [appliedChanges, setAppliedChanges] = useState(false)

    const change = () => {
        const body = document.body
        const titulo_ignacio = document.querySelector('#titulo-ignacio__home')

        if (appliedChanges === false) {
            setAppliedChanges(true)
            /* Body */
            body.classList.remove('bg-body__black')
            body.classList.add('bg-body__white')
            /* Textos */
            titulo_ignacio.classList.remove('text-white')
            titulo_ignacio.classList.add('text-black')
        }

        if (appliedChanges === true) {
            setAppliedChanges(false)
            /* Body */
            body.classList.remove('bg-body__white')
            body.classList.add('bg-body__black')
            /* Textos */
            titulo_ignacio.classList.remove('text-black')
            titulo_ignacio.classList.add('text-white')
        }
    }

    return (
        <div className="check" >
            <input id="check" type="checkbox" onClick={change} />
            <label for="check"></label>
        </div>
    )
}
