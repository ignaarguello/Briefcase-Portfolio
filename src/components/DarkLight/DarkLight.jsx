import React from 'react'
import './DarkLight.css'
import { useState } from 'react'


export default function DarkLight() {

    let [appliedChanges, setAppliedChanges] = useState(false)

    const change = () => {
        const body = document.body
        if (appliedChanges === false) {
            setAppliedChanges(true)
            body.classList.remove('bg-body__black')
            body.classList.add('bg-body__white')
            console.log(appliedChanges)
        }

        if (appliedChanges === true) {
            setAppliedChanges(false)
            body.classList.remove('bg-body__white')
            body.classList.add('bg-body__black')
            console.log(appliedChanges)
        }
    }


    return (
        <div className="check" >
            <input id="check" type="checkbox" onClick={change} />
            <label for="check"></label>
        </div>
    )
}
