import { createAction } from '@reduxjs/toolkit'


const change_false = createAction('change_false', () => {
    const res = false
    return {
        res
    }
})


const change_true = createAction('change_true', () => {
    const res = true
    return {
        res
    }
})


const homeActions = {
    change_false,
    change_true,
}

export default homeActions