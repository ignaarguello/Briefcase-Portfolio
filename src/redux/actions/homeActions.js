import {createAction } from '@reduxjs/toolkit'


const change_false = createAction('change_false', () => {

    return {
        payload: false
    }
})


const change_true = createAction('change_true', () => {
    return {
        payload: true
    }
})


const homeActions = {
    change_false,
    change_true,
}

export default homeActions